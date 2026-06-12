# Runbook: Chatwoot-Installation (self-hosted, Hetzner)

**Zweck:** Schritt-für-Schritt-Bauanleitung der Chatwoot-Server-VM für den WhatsApp-Concierge. Von oben nach unten abarbeitbar — beim Neuaufbau oder beim zweiten Kunden führt dieselbe Reihenfolge zum selben Stand.
**Architektur-Quelle:** DEC-010.
**Bezug:** Mandantenmodell = Modell 1 (geteilte Instanz, vorläufig) — noch als DEC-011 festzuschreiben.

**Version:** 1.1
**Stand:** 12.06.2026
**Status Phase 1 (VM-Basis):** abgeschlossen & verifiziert.
**Status Phase 2 (Chatwoot + SSL):** abgeschlossen & verifiziert (Abschnitte 8–13).

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

## Phase 2 — Chatwoot CE + SSL (abgeschlossen & verifiziert, 12.06.2026)

Arbeitsverzeichnis auf dem Server: `/opt/chatwoot` (Compose, `.env`, Caddyfile dort). Alle Server-Befehle via SSH-Lesezeichen `ssh chatwoot`.

**Recherche-Befund vorab (offizielle Doku, Confidence hoch):**
- Offizieller Weg: `.env.example` + `docker-compose.production.yaml` vom `develop`-Branch holen, anpassen, `db:chatwoot_prepare`, dann `up -d`. Versionen NICHT über die Vorlage, sondern über den **gepinnten Image-Tag** fixieren.
- **Lizenzsauberer CE-Pfad (doppelt abgesichert):** (1) Image-Tag `-ce` = FOSS-Build, Enterprise-Code physisch NICHT im Image (Standard-`:latest` enthält ihn). (2) Zusätzlich `DISABLE_ENTERPRISE=true` in der `.env`. Aktuell stabile Version bei Bau: **`v4.14.1-ce`** (eine Version unter dem tagesfrischen `v4.14.2`, bewusst für Burn-in).

### 8. Arbeitsverzeichnis + Vorlagen
```
mkdir -p /opt/chatwoot && chmod 700 /opt/chatwoot
cd /opt/chatwoot
curl -fsSL -o .env https://raw.githubusercontent.com/chatwoot/chatwoot/develop/.env.example
curl -fsSL -o docker-compose.yaml https://raw.githubusercontent.com/chatwoot/chatwoot/develop/docker-compose.production.yaml
```
`chmod 700`, weil hier gleich die `.env` mit Secrets liegt.

### 9. Secrets — Handhabung (NIE in Chat/Repo/Logs)
**Prinzip:** Serverseitig generierbare Secrets direkt in die `.env` erzeugen (nie anzeigen). Vom Menschen gelieferte Secrets (z. B. Brevo-Key) als `PLATZHALTER` setzen, dann vom Menschen selbst per `read -s` ersetzen lassen — der Wert läuft nie durch den Chat.

Serverseitig generieren (Werte werden nie ausgegeben):
```
SKB=$(openssl rand -hex 64)   # SECRET_KEY_BASE (128 Hex-Zeichen, keine Sonderzeichen — Chatwoot-Vorgabe)
PGP=$(openssl rand -hex 32)   # POSTGRES_PASSWORD (64 Hex-Zeichen)
sed -i "s|^SECRET_KEY_BASE=.*|SECRET_KEY_BASE=$SKB|" .env
sed -i "s|^POSTGRES_PASSWORD=.*|POSTGRES_PASSWORD=$PGP|" .env
unset SKB PGP
```
Vom Menschen geliefertes Secret (Muster, läuft auf dem Server, verdeckte Eingabe):
```
read -rp "Brevo SMTP login: " U && read -rsp "Brevo SMTP key: " K && echo && \
sed -i "s|^SMTP_USERNAME=.*|SMTP_USERNAME=${U}|" /opt/chatwoot/.env && \
sed -i "s|^SMTP_PASSWORD=PLATZHALTER$|SMTP_PASSWORD=${K}|" /opt/chatwoot/.env && \
unset U K
```
Verifikation nur über Längen/Platzhalter-Zähler, **nie** Wert ausgeben: `grep -c PLATZHALTER .env` → 0.

**Lesson:** `grep -c` liefert bei 0 Treffern Exit-Code 1 → bricht `&&`-Ketten ab und kann Folge-Checks fälschlich auf „LEER" laufen lassen. Verifikation mit `awk`/`length()` oder `|| true` absichern.

### 10. `.env` — gesetzte Schlüssel (Secrets redigiert)
| Schlüssel | Wert | Zweck |
|---|---|---|
| `RAILS_ENV` | `production` | Produktivmodus (Vorlage stand auf `development`!) |
| `FRONTEND_URL` | `https://inbox.logik-agentur.de` | öffentliche Adresse |
| `SECRET_KEY_BASE` | *(serverseitig, redigiert)* | Sitzungs-/Cookie-Verschlüsselung |
| `POSTGRES_DATABASE` | `chatwoot` | MUSS zur Compose `POSTGRES_DB` passen |
| `POSTGRES_HOST` / `POSTGRES_USERNAME` | `postgres` / `postgres` | Container-Netzwerk (Vorlage schon korrekt) |
| `POSTGRES_PASSWORD` | *(serverseitig, redigiert)* | DB-Zugang |
| `REDIS_URL` / `REDIS_PASSWORD` | `redis://redis:6379` / *(leer)* | bewusst ohne Redis-Auth: nur intern + an 127.0.0.1 gebunden, Firewall lässt nur 22/80/443 |
| `ENABLE_ACCOUNT_SIGNUP` | `false` | kein öffentliches Signup (Modell 1) |
| `DISABLE_TELEMETRY` | `true` | DEC-010: keine Nutzungsdaten an Chatwoot |
| `DISABLE_ENTERPRISE` | `true` | DEC-010: CE-only (Gürtel zum `-ce`-Image) |
| `SMTP_ADDRESS` / `SMTP_PORT` | `smtp-relay.brevo.com` / `587` | Brevo (STARTTLS) |
| `SMTP_DOMAIN` / `SMTP_AUTHENTICATION` | `logik-agentur.de` / `login` | Brevo-Standard |
| `SMTP_USERNAME` | *(Brevo-Versand-Kennung, redigiert)* | Brevo-Versand-Login (NICHT die Konto-E-Mail; Brevo → SMTP & API → SMTP → „Anmeldung") |
| `SMTP_PASSWORD` | *(Brevo SMTP-Key, redigiert)* | vom Menschen per `read -s` gesetzt |
| `MAILER_SENDER_EMAIL` | `Logik Agentur <noreply@logik-agentur.de>` | Absender |

SMTP-Hinweis: Konfiguration ist gesetzt, aber erst eine echte Test-Mail (z. B. Agent-Invite) beweist den Versand. Offen für Folge-Session.

### 11. Compose härten (`docker-compose.yaml`)
Drei Änderungen ggü. der Vorlage:
1. **Image-Pin:** `chatwoot/chatwoot:latest` → `chatwoot/chatwoot:v4.14.1-ce`.
2. **DB-Zugang aus `.env`** statt inline (Secret nicht im Compose): Postgres-`environment` nutzt `${POSTGRES_DATABASE:-chatwoot}`, `${POSTGRES_USERNAME:-postgres}`, `${POSTGRES_PASSWORD}` (Compose interpoliert automatisch aus `.env` im Projektordner).
3. **OOM-Resilienz (DEC-010 P5):** `mem_limit` + `oom_score_adj` pro Dienst. `restart: always` bei allen.

| Dienst | `mem_limit` | `oom_score_adj` | Wirkung |
|---|---|---|---|
| `rails` | 2500m | **+800** | wird bei Speichernot zuerst geopfert, startet via `restart: always` neu |
| `sidekiq` | 2g | **+700** | als Nächstes |
| `postgres` | — | **−800** | praktisch unantastbar → kein Korruptionsrisiko |
| `redis` | 512m | 0 | neutral |
| `caddy` | 256m | +200 | s. Abschnitt 13 |

**Lesson — `base`-Container:** Die offizielle Vorlage nutzt `base` gleichzeitig als YAML-Anchor UND listet es unter `services:` → Docker startet einen überflüssigen `irb`-Leerlauf-Container (lädt unnötig die `.env`/Secrets). Fix: `base`-Definition aus `services:` heraus in ein Top-Level-Extension-Feld `x-base: &base` verschieben (Anchor `*base` bleibt funktional, Compose startet es nicht). Danach `docker compose up -d --remove-orphans`.

Validierung ohne Secret-Leak: `docker compose config --quiet` (prüft, druckt nichts). `docker compose config` (ohne `-q`) würde aufgelöste Secrets ausgeben → nicht nutzen bzw. nur mit `awk length()`.

### 12. Swap + DB-Init + Stack-Start
**Swap (DEC-010 P5, Puffer ZUSÄTZLICH zur OOM-Priorität — ersetzt sie nicht):** VM hatte 0 Swap.
```
dd if=/dev/zero of=/swapfile bs=1M count=2048 status=none   # dd, nicht fallocate (keine Loch-Probleme)
chmod 600 /swapfile && mkswap /swapfile && swapon /swapfile
grep -q '^/swapfile ' /etc/fstab || echo '/swapfile none swap sw 0 0' >> /etc/fstab   # neustart-fest
echo 'vm.swappiness=10' > /etc/sysctl.d/99-swappiness.conf && sysctl -p /etc/sysctl.d/99-swappiness.conf
```
`swappiness=10` = Swap nur als Notnagel, nicht im Normalbetrieb.

**DB-Schema:** `docker compose run --rm rails bundle exec rails db:chatwoot_prepare` (zieht zuerst die Images, ~700 MB; 3–6 Min). Eine `ERROR: relation "installation_configs" does not exist`-Zeile während des Laufs ist harmlos (Init-Check vor Migration); maßgeblich ist Exit-Code 0 + „Loading Installation config". Verifiziert: 91 Tabellen, `accounts`/`users`/`installation_configs` vorhanden.

**Start:** `docker compose up -d`. Verifikation: `docker compose ps` (alle `Up`), Rails-Log „Listening on http://0.0.0.0:3000" + „Environment: production", intern `curl -I http://localhost:3000` → 302 (Redirect auf `/installation/onboarding`).

### 13. SSL via Caddy (Reverse-Proxy, automatisches Let's Encrypt)
Caddy als fünfter Container, terminiert TLS auf 80/443, proxyt intern auf `rails:3000`.

`/opt/chatwoot/Caddyfile`:
```
{
	email pnanis@me.com
}

inbox.logik-agentur.de {
	reverse_proxy rails:3000
}
```
Compose-Service: `image: caddy:2-alpine`, Ports `80:80`+`443:443`, `restart: always`, Volumes `./Caddyfile:/etc/caddy/Caddyfile:ro` + `caddy_data:/data` + `caddy_config:/config` (Zertifikate überleben Neustart). Voraussetzungen erfüllt: DNS → Server, Firewall 80/443 offen, `FRONTEND_URL=https://…`.

Verifikation vom Mac (echter Außen-Test): `curl -I https://inbox.logik-agentur.de` → `HTTP/2 302`, `via: 1.1 Caddy`, **ohne** `-k` (= Zertifikat gültig/vertrauenswürdig). Caddy-Log: `certificate obtained successfully` (http-01-Challenge, Produktiv-CA Let's Encrypt).

### Super-Admin (Onboarding statt Rails-Konsole)
Abweichung vom ursprünglichen Plan, bewusst: Chatwoot leitet beim Erst-Aufruf selbst auf `/installation/onboarding`. Dieser **Browser-Assistent** ist der offizielle Erst-Einrichtungsweg — robuster als die Konsole, und das Admin-Passwort vergibt der Mensch selbst im Browser (läuft nie durch den Assistenten/Chat). Rails-Konsole bleibt Notnagel.

Verifiziert (serverseitig, ohne Passwort): User `Pantelis Nanis` / `pantelis.nanis@logik-agentur.de` ist `type=SuperAdmin` (Plattform-Ebene, `/super_admin`-Konsole) UND `administrator` des Accounts `Logik Agentur` (account_users.role=1). Genau **ein** Account, **ein** User. Mandant: Account-Name = Betreiber „Logik Agentur"; Hotels kommen später als **separate Accounts** über `/super_admin` (Modell 1, DEC-011 pending) — nichts kundenspezifisch hart verdrahtet.

---

## Offene Folgeschritte

**Aus Phase 2 erledigt (12.06.2026):**
1. ✅ Lizenzsauberer CE-Pfad — Image `v4.14.1-ce` + `DISABLE_ENTERPRISE=true`.
2. ✅ Telemetrie aus — `DISABLE_TELEMETRY=true`.
3. ✅ Chatwoot via Docker Compose inkl. OOM-Resilienz (DEC-010 P5) + Swap-Puffer.
4. ✅ SSL via Caddy (Let's Encrypt) auf `inbox.logik-agentur.de`.

**Noch offen:**
5. **`conversation_status_changed`-Account-Webhook** auf Verfügbarkeit prüfen (DEC-010 Re-Activation) — bewusst NICHT in Phase 2, gehört zur WhatsApp/Brain-Phase.
6. **SMTP-Sendetest** (Brevo): echte Test-Mail (z. B. Agent-Invite) — Konfig ist gesetzt, Versand noch unbewiesen.

Spätere Folge-Chats: Backup-Cron + Snapshots, Monitoring (UptimeRobot), Staging-VM, n8n-Anbindung, WhatsApp-Inbox, Brain/Handoff-Logik, Auto-Löschung.

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

- **v1.1 (12.06.2026):** Phase 2 (Chatwoot CE + SSL) dokumentiert & verifiziert — Abschnitte 8–13. Lizenzsauberer CE-Pfad (`v4.14.1-ce` + `DISABLE_ENTERPRISE=true`), Telemetrie aus, OOM-Resilienz (DEC-010 P5) + 2-GB-Swap, Brevo-SMTP (Secret-Handling via Platzhalter + `read -s`), Caddy/Let's-Encrypt-SSL, Super-Admin per Browser-Onboarding. Folgeschritte 1–4 abgehakt; Webhook-Check + SMTP-Sendetest offen. Lessons: `base`-Leerlauf-Container (`x-base`-Fix), `grep -c`-Exit-Code-Falle, `docker compose config` leakt Secrets ohne `-q`.
- **v1.0 (10.06.2026):** Phase 1 (VM-Basis bis Docker + DNS) dokumentiert. Verifizierter Stand. Abweichungen ggü. DEC-010 (Falkenstein, Ubuntu 26.04) mit Begründung vermerkt.
