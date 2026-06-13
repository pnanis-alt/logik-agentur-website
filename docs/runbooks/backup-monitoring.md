# Runbook: Backup & Monitoring (Chatwoot-Prod, Hetzner)

**Zweck:** Reproduzierbare Bauanleitung für Datensicherung und Überwachung der Chatwoot-Prod-VM. Beim Neuaufbau/zweiten Kunden führt dieselbe Reihenfolge zum selben Stand.
**Architektur-Quelle:** DEC-010 P5 (Monitoring) + P7 (Datensicherung).
**Bezug:** baut auf Runbook `chatwoot-installation` v1.1 auf (Chatwoot CE v4.14.1-ce in `/opt/chatwoot`).

**Version:** 1.0
**Stand:** 13.06.2026
**Status:** abgeschlossen & verifiziert (Restore-Test + Alarm-Test bestanden).

---

## 0. Drei Sicherungs-Ebenen (Überblick)

| Ebene | Was | Ziel | Zweck |
|---|---|---|---|
| Hetzner Auto-Backup | ganze VM (Image) | Hetzner, off-site | Disaster-Recovery (Totalausfall VM) |
| Nächtl. pg_dump | nur Chatwoot-DB (logisch) | lokal `/var/backups/chatwoot` | schneller, granularer Restore (versehentliches Löschen, kaputte Migration) |
| Storage-Box-Spiegel | Kopie der pg_dumps | Hetzner Storage Box, getrennt | Off-site-Dump-Kopie (3-2-1) |

DEC-010 P5: Monitoring **alarmiert nur** — **kein** Auto-Hypervisor-Reboot, kein selbstheilendes Eingreifen. Reboot bleibt manuell.

---

## 1. Hetzner Auto-Backup verifizieren
Von **innerhalb** der VM nicht einsehbar (Hypervisor-Ebene). Verifikation nur über:
- **(A)** Hetzner-Console → Server `chatwoot-prod` → Tab „Backups": aktiviert? liegen Backups vor?, **oder**
- **(B)** Hetzner-Cloud-API (read-only Token): `GET /v1/servers/<id>` → `backup_window` gesetzt.

**Stand 13.06.2026:** Auto-Backup durch Pantelis in der Console als **aktiv** bestätigt (Weg A). Deckt die Off-site-Volldatensicherung der VM ab; pg_dumps sind die zusätzliche logische Ebene.

---

## 2. Nächtlicher Postgres-Dump (lokal, 14-Tage-Rotation)

**Kein-Passwort-Ansatz (verifiziert):** `pg_dump` läuft **im Postgres-Container** über den lokalen Socket (trust-Auth) → kein DB-Passwort in Skript/Cron/Logs/Prozessliste. Verifiziert: `docker compose exec -T postgres pg_dump -U postgres -d chatwoot -Fc` liefert ein gültiges Archiv (Header `PGDMP`), `pg_dump 16.14` passt zur DB (pg16).

Skript `/usr/local/bin/chatwoot-pgdump.sh` (Rechte `750`, root):
- `pg_dump -Fc` (Custom-Format, komprimiert) → `/var/backups/chatwoot/chatwoot-YYYYMMDD-HHMMSS.dump`
- Größen-Check (Datei < 1000 Bytes → Fehler, Teil-Datei löschen) gegen **stillen Dump-Fehler**
- Logging nach `/var/log/chatwoot-backup.log` (START / OK+Bytes / FEHLER)
- Rotation: `find ... -mtime +14 -delete`
- danach Storage-Box-Spiegel (s. Abschnitt 3)

Cron `/etc/cron.d/chatwoot-backup`:
```
# Chatwoot Postgres nightly dump (Phase 3a)
30 3 * * * root /usr/local/bin/chatwoot-pgdump.sh
```
Cron-Robustheit: explizites `PATH` im Skript (`/usr/bin:/usr/local/bin:/bin`), `docker` unter `/usr/bin/docker`, absoluter `-f`-Pfad zur Compose-Datei.

**Verifikation:** Probelauf Exit 0, Dump ~305 KB, Header `PGDMP`, Cron aktiv.

---

## 3. Storage-Box-Spiegel (Off-site, SSH-Key statt Passwort)

**Box:** Hetzner BX11, Falkenstein. Host `u<XXXXXX>.your-storagebox.de`, User `u<XXXXXX>`, **SSH-Port 23** *(IDs redigiert — vollständige Werte in Bitwarden / Hetzner-Console)*.

**Key-Setup (kein Passwort in Cron):**
1. Schlüsselpaar auf der VM: `ssh-keygen -t ed25519 -N "" -f /root/.ssh/storagebox -C "chatwoot-prod-storagebox"` (privat `600`, nur root).
2. Public Key **einmalig** auf der Box hinterlegen — Storage-Box-Übersicht hat **kein** Key-Feld, daher per Befehl (fragt **einmal** das Box-Passwort, Eingabe verdeckt durch Pantelis selbst):
   ```
   ssh-copy-id -p 23 -s -i /root/.ssh/storagebox.pub u<XXXXXX>@u<XXXXXX>.your-storagebox.de
   ```
   Erfolg: `Number of key(s) added: 1`. (`-s` = via SFTP — Storage Box erlaubt keinen normalen Shell-Append. `mkdir .ssh: Failure` ist harmlos, wenn `.ssh` schon existiert.)
3. Voraussetzungen auf der Box: **SSH-Support** aktiv (ggf. **„Äußere Erreichbarkeit"**, falls Verbindung hängt).

**Spiegel** (im Dump-Skript, nach Dump+Rotation):
```
rsync -a --delete --mkpath \
  -e "ssh -p 23 -i /root/.ssh/storagebox -o StrictHostKeyChecking=accept-new -o BatchMode=yes" \
  /var/backups/chatwoot/ u<XXXXXX>@u<XXXXXX>.your-storagebox.de:backups/chatwoot/
```
- `--delete`: Box spiegelt den lokalen 14-Tage-Stand exakt (Rotation läuft lokal).
- **best-effort:** schlägt der Spiegel fehl (Box offline), bleibt der lokale Dump gültig, nur WARN im Log.
- `BatchMode=yes`: bricht sofort ab statt auf Passwort zu warten (kein hängender Cron).
- `rsync` ≥ 3.2.3 nötig (`--mkpath`); VM hat 3.4.1.

**Verifikation:** Vollständiger Probelauf → Log „Storage-Box-Mirror OK"; per `sftp -P 23 -i /root/.ssh/storagebox …` bestätigt, dass dieselben `.dump`-Dateien (gleiche Bytegröße) auf der Box liegen. (PQ-Warnung beim Verbinden = nur Hinweis.)

---

## 4. Restore-Test (Beweis der Wiederherstellbarkeit)

„Backup ohne Restore-Test ist kein Backup." Vorgehen — in eine **Wegwerf-DB**, Live unberührt:
```
DUMP=$(ls -t /var/backups/chatwoot/chatwoot-*.dump | head -1)
docker compose -f /opt/chatwoot/docker-compose.yaml exec -T postgres createdb -U postgres chatwoot_restore_test
docker compose -f /opt/chatwoot/docker-compose.yaml exec -T postgres pg_restore -U postgres -d chatwoot_restore_test --no-owner --no-privileges < "$DUMP"
# Abgleich Tabellen-/Zeilenzahl Test vs. Live, danach:
docker compose -f /opt/chatwoot/docker-compose.yaml exec -T postgres dropdb -U postgres chatwoot_restore_test
```
**Erfolgskriterium:** Tabellen-/Zeilenzahlen exakt gleich (nicht „null Warnungen").
**Stand 13.06.2026:** bestanden — Tabellen 91=91, `users` 1=1, `accounts` 1=1, Restore Exit 0 ohne Warnung, Test-DB sauber gelöscht.

Empfehlung: Restore-Test periodisch wiederholen (z. B. quartalsweise / vor größeren Upgrades).

---

## 5. Snapshots vs. Auto-Backups (Abgrenzung)
- **Auto-Backups:** automatisch, im Backup-Fenster, 7 Generationen rollierend; an die VM gebunden.
- **Snapshots:** manuell, zeitpunktbezogen (z. B. vor riskanten Updates), bleiben bis zur Löschung, Abrechnung nach Größe; unabhängig von der VM.

**Entscheidung 13.06.2026:** Auto-Backups genügen vorerst. **Keine** zusätzlichen manuellen Snapshots jetzt — gezielt später **vor** riskanten Updates anlegen (`hcloud` CLI ist auf der VM nicht installiert; Snapshot via Console oder API).

---

## 6. Monitoring — UptimeRobot (nur Alarm, DEC-010 P5)

Externer Keyword-Check (erkennt auch „Server da, App kaputt"):

| Feld | Wert |
|---|---|
| Monitor Type | Keyword monitoring |
| URL | `https://inbox.logik-agentur.de` |
| Keyword | `Chatwoot` |
| Bedingung | **Start incident when keyword *does not* exist** |
| Case-sensitive | aus |
| Intervall | 5 Minuten (Gratis-Tarif) |
| Alert-Kontakt | hinterlegte E-Mail *(verifiziert)* |

Prüf-Punkt-Befund: `/` liefert 200 + enthält zuverlässig „Chatwoot"; `/up` (Rails-Health) existiert **nicht** (404) → nicht nutzbar.
**Kein** Auto-Reboot/Self-Healing — reiner Alarm; Reboot bleibt manuell.

**Alarm-Test (13.06.2026, bestanden):** Keyword temporär auf nicht vorhandenen Wert (`ZZZ_TESTALARM`) → Monitor DOWN → Alarm-Mail kam an → Keyword zurück auf `Chatwoot` → wieder Up. Server blieb dabei durchgehend online (nur die Suchbedingung manipuliert).

---

## Lessons
- **pg_dump im Container über lokalen Socket** = Standard-Weg, um das DB-Passwort komplett aus Cron/Logs herauszuhalten.
- **Storage Box hat kein Key-Eingabefeld** in der Übersicht → Key per `ssh-copy-id -p 23 -s` installieren (Port 23!, SFTP-Modus).
- `BatchMode=yes` + best-effort-Spiegel verhindern hängende/fehlschlagende Cron-Läufe bei Box-Problemen.
- UptimeRobot-Keyword-Bedingung muss auf **„does not exist"** stehen — sonst Alarm-Logik invertiert.
- Restore-Test ist Pflicht; ein gültiger `PGDMP`-Header allein beweist nichts.

## Offen / spätere Folge-Chats
- Periodischer Restore-Test als Routine (Erinnerung/Kalender).
- Optional: Off-site-Spiegel-Monitoring (Alarm, falls nächtlicher Mirror mehrfach WARN).
- Außerhalb dieser Session (nicht angefasst): WhatsApp-Inbox, KI-Brain, `conversation_status_changed`-Webhook, DSGVO-Auto-Löschung/Retention, Staging-VM, n8n.

## Changelog
- **v1.0 (13.06.2026):** Phase 3a — Backup (nächtl. pg_dump lokal + Storage-Box-Spiegel, 14-Tage-Rotation) & Monitoring (UptimeRobot Keyword + E-Mail-Alarm) dokumentiert & verifiziert (Restore-Test + Alarm-Test bestanden). Hetzner-Auto-Backup-Status via Console bestätigt.
