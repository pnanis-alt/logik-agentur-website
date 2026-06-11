# Runbook: Chatwoot-Installation (self-hosted, Hetzner)

**Zweck:** Schritt-für-Schritt-Bauanleitung der Chatwoot-Server-VM für den WhatsApp-Concierge. Von oben nach unten abarbeitbar — beim Neuaufbau oder beim zweiten Kunden führt dieselbe Reihenfolge zum selben Stand.
**Architektur-Quelle:** DEC-010.
**Bezug:** Mandantenmodell = Modell 1 (geteilte Instanz, vorläufig) — noch als DEC-011 festzuschreiben.

**Version:** 1.0
**Stand:** 10.06.2026
**Status Phase 1 (VM-Basis):** abgeschlossen & verifiziert.
**Status Phase 2 (Chatwoot + SSL):** offen — siehe Abschnitt „Offene Folgeschritte".

---

## 0. Ist-Werte dieser Instanz (Hotel Nanis PoC)

| Feld | Wert |
|---|---|
| Server-Name | `chatwood-prod` (Tippfehler im Namen, kosmetisch — Maschine = die Chatwoot-Prod-VM) |
| Hetzner-Projekt | Logik-Agentur |
| Server-Typ | CX33 (4 vCPU, 8 GB RAM, 80 GB SSD), x86 |
| Standort | Falkenstein (eu-central) — **Abweichung von DEC-010 (Nürnberg), erzwungen:** CX33 in nbg1 nicht verfügbar |
| OS | Ubuntu 26.04 LTS („Resolute Raccoon"), Kernel 7.0.0-22 — **Abweichung von DEC-010 (24.04), bewusst:** längere Support-Laufzeit, Docker 29 nativ unterstützt |
| IPv4 | 167.233.96.16 |
| Monatskosten | ~8,29 € netto (CX33 6,49 + IPv4 0,50 + Auto-Backup ~1,30) |
| SSH-Key | `chatwoot-prod` (ed25519, passphrase-los), nur dieser Key auf der Maschine |
| Firewall | `chatwood-fw`, eingehend TCP 22/80/443 (Any), zugewiesen |
| Auto-Backups | aktiv (Hetzner, +20 %) — ergänzt, ersetzt nicht die DEC-010-Dumps/Snapshots |
| Docker | Engine 29.5.3, Compose v5.1.4 (offizielle Docker-Repo) |
| Domain | `inbox.logik-agentur.de` → 167.233.96.16 (A-Record bei IONOS, TTL 1 h), DNS verifiziert |

**Lokale SSH-Lesezeichen (MacBook, `~/.ssh/config`):**
- `ssh chatwoot` → 167.233.96.16, Key `chatwoot-prod`
- `ssh portal` → 167.233.74.41, Key `hetzner_logik` (anderes Projekt, hier nicht relevant)

---

## 1. SSH-Schlüssel erzeugen (auf dem Mac)

```
ssh-keygen -t ed25519 -C "chatwoot-prod" -f ~/.ssh/chatwoot-prod -N ""
```

- `-N ""` = **passphrase-los**. Bewusst gewählt für Solo-Betrieb (Key liegt nur auf dem eigenen Mac). Verhindert die verdeckte Passwort-Abfrage, die im Portal-Setup ~2 h gekostet hat.
- Ergebnis: `chatwoot-prod` (privat, geheim) + `chatwoot-prod.pub` (öffentlich).

**Lesson:** Schlüssel erzeugen **vor** der Server-Erstellung. Hetzner injiziert den Public Key per cloud-init **nur beim ersten Boot** — nachträglich kein Aufzwingen möglich, auch Rebuild hilft nicht. Falsch erstellt = Server löschen/neu.

---

## 2. Öffentlichen Key in Hetzner hinterlegen

1. Public Key anzeigen: `cat ~/.ssh/chatwoot-prod.pub` → ganze Zeile kopieren.
2. Console → Security → SSH Keys → Add SSH Key → Zeile einfügen, Name `chatwoot-prod`.

---

## 3. Server erstellen (Hetzner Console)

Reihenfolge zwingend: **erst Key (Schritt 1–2), dann Server.**

- Projekt: Logik-Agentur
- Location: Falkenstein (Soll laut DEC-010 Nürnberg; CX33 dort nicht verfügbar)
- Image: Ubuntu 26.04 LTS
- Typ: Shared vCPU, x86, 8 GB RAM (CX33)
- Networking: IPv4 + IPv6 an
- SSH-Keys: **nur** `chatwoot-prod` aktiv anhaken (Haken visuell prüfen)
- Firewall: separat (Schritt 5)
- Backups: an
- Name: `chatwoot-prod`

**Verifikation:** `ssh chatwoot` (bzw. `ssh -i ~/.ssh/chatwoot-prod root@<IP>`) → Login **ohne** Passwort-Prompt. Kein Prompt = Key sitzt.

---

## 4. System aktualisieren (auf dem Server)

```
apt update
apt upgrade -y
```

Bei Kernel-Update danach Neustart, um den neuen Kernel zu laden:

```
reboot
```

~45 s warten, neu verbinden (`ssh chatwoot`), Kernel prüfen:

```
uname -r
```

Erwartet: aktuelle Kernel-Version (hier `7.0.0-22-generic`).

---

## 5. Hetzner-Cloud-Firewall

In der Console (nicht im Terminal) — Cloud-Firewall sitzt vor dem Server, Docker kann sie nicht umgehen (anders als die Host-interne UFW).

- Eingehend (je TCP, Quelle Any IPv4 + Any IPv6): **22, 80, 443**
- Ausgehend: unverändert (alles erlaubt)
- Anwenden auf: `chatwoot-prod`

Port 22 für alle offen (kein IP-Filter) — Schutz = Key-only-Login. IP-Filter würde bei wechselnder Heim-IP aussperren.

**Verifikation:** in offener SSH-Sitzung `whoami` → `root`. Zugang trotz Firewall intakt.

---

## 6. Docker installieren (auf dem Server)

**Lesson (Ghostty):** Lange Einzeiler brechen beim Copy-Paste (eine Zeile wurde zu `docker.help` verstümmelt). Daher kurze Befehle einzeln, nicht als langen verketteten Block einfügen.

```
apt install -y ca-certificates curl
install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
chmod a+r /etc/apt/keyrings/docker.asc
```

Paketquelle eintragen (Codename selbst einsetzen lassen, kein Hand-Tippen):

```
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu resolute stable" > /etc/apt/sources.list.d/docker.list
```

(`resolute` = Codename von Ubuntu 26.04. Kontrolle: `cat /etc/apt/sources.list.d/docker.list` muss auf `resolute stable` enden.)

Installieren:

```
apt update
apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

**Verifikation (aktiv, nicht „sieht gut aus"):**

```
docker --version
docker compose version
docker run --rm hello-world
```

Erwartet: Versionsausgaben + „Hello from Docker!". Verifiziert: Engine 29.5.3, Compose v5.1.4.

---

## 7. Domain / DNS (IONOS)

A-Record bei IONOS unter `logik-agentur.de` **neu** anlegen (bestehenden `@`-Record der Website nicht anfassen):

- Typ: `A`
- Hostname: `inbox`
- Zeigt auf: `167.233.96.16`
- TTL: 1 Stunde

**Verifikation:** `getent hosts inbox.logik-agentur.de` → `167.233.96.16  inbox.logik-agentur.de`. Verifiziert (DNS durch).

Hinweis Mandantenmodell: `inbox` (neutral, Maschine) statt kundenspezifischem Namen — passend zu Modell 1 (eine Instanz für alle Hotels, getrennte Accounts intern).

---

## Offene Folgeschritte (Phase 2 — NICHT erledigt)

Nächster Chat, frischer Kontext. Reihenfolge:

1. **Lizenzsauberer CE-Pfad** (DEC-010): sicherstellen, dass Community Edition läuft (Enterprise-Features deaktiviert) — vor dem Compose-Start klären.
2. **Telemetrie aus** (DEC-010): `DISABLE_TELEMETRY=true` in der Chatwoot-Konfiguration.
3. **Chatwoot via Docker Compose** installieren — inkl. OOM-Resilienz aus DEC-010 P5 (Memory-Limits + OOM-Priorität: OOM-Killer trifft Rails/Sidekiq, nie Postgres; `restart: always`).
4. **SSL** via Reverse-Proxy (Caddy empfohlen, automatisches Let's Encrypt) auf `inbox.logik-agentur.de`.
5. **`conversation_status_changed`-Account-Webhook** auf Verfügbarkeit prüfen (DEC-010 Re-Activation).

Spätere Folge-Chats (nicht Phase 2): Backup-Cron + Snapshots, Monitoring (UptimeRobot), Staging-VM, n8n-Anbindung, WhatsApp-Inbox, Brain/Handoff-Logik, Auto-Löschung.

---

## Doku-Backlog (gesammelt, gehört in den Doku-Chat, nicht hierher)

Aus diesem und dem vorigen Chat offen, in einem eigenen Doku-Chat festzuschreiben:
1. **DEC-010 P2 präzisieren:** stummer Rückwechsel + Bot-Selbst-Reintroduktion im ersten Satz nach Übernahme (UX + AI-Act-Art.-50-Transparenz), nur bei substanzieller Mensch-Phase.
2. **Roadmap (ab Kunde 2–3):** BSP-Fallback → Cloudflare-Worker („kurz nicht erreichbar, bitte Rezeption anrufen"); Twilio-Fallback-Verhalten vorab verifizieren.
3. **DEC-010 P5 bekräftigen:** kein Auto-Hypervisor-Reboot; UptimeRobot nur Alert, Reboot manuell.
4. **Neuer DEC (überschreibt DEC-003-Schwelle für dieses Produkt):** Concierge-Brain von Anfang an auf n8n, make.com nur für Alt-Szenarien.
5. **DEC-011 Mandantenmodell:** Modell 1 (geteilte Instanz) vorläufig; Trigger zur Neubewertung = erhöhte Datenschutz-Anforderung / Last-Grenze / Kunde 2. Vor Skalierung: CE-Mehr-Account-Trennung an Chatwoot-Doku verifizieren.
6. **Produkt-Dossier WhatsApp-Concierge** erstmals anlegen (`docs/produkte/whatsapp-concierge/product-v1_0.md`).
7. **Master-Overview** kennt DEC-010 noch nicht + zeigt veralteten Produkt-Status (CX22/Nürnberg) → Update.

---

## Changelog

- **v1.0 (10.06.2026):** Phase 1 (VM-Basis bis Docker + DNS) dokumentiert. Verifizierter Stand. Abweichungen ggü. DEC-010 (Falkenstein, Ubuntu 26.04) mit Begründung vermerkt.
