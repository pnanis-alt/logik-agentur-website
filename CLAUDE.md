# CLAUDE.md — logik-agentur-website

**Version:** 1.0 | **Stand:** 24.08.2026
**Geltung:** Repo-spezifische Regeln für dieses Repo. Die projektübergreifenden Arbeitsanweisungen stehen in `~/.claude/CLAUDE.md` und gelten zusätzlich. Die Commit-Konventionen sind absichtlich identisch zu `../ai-agency-clients-/CLAUDE.md`, damit beide Repos gleich funktionieren.

## 1. Was das Repo ist

Statische Marketing-Website der Logik Agentur, live unter `logik-agentur.de`. Ausgeliefert wird direkt der Inhalt von `main` über GitHub Pages. Es gibt keine Staging-Umgebung: Ein Push auf `main` ist ein Deploy.

## 2. Zwei Fallen, die schon zugeschlagen haben

- **Tailwind neu bauen.** Neue oder geänderte CSS-Klassen im HTML wirken erst, wenn `assets/tailwind.css` neu erzeugt wurde. Sonst sieht es lokal richtig aus und live kaputt. Befehl: `npm run build:css`. Die erzeugte `assets/tailwind.css` gehört mit in den Commit.
- **`_config.yml` schützt interne Dateien.** GitHub Pages liefert sonst jede Datei im Repo aus, auch `docs/` und Quelldateien. Die `exclude`-Liste in `_config.yml` ersetzt die Standardliste vollständig. Wer dort etwas ergänzt, lässt die vorhandenen Einträge stehen und prüft nach dem Deploy mit `curl -I https://logik-agentur.de/<pfad>`, ob die Datei wirklich 404 liefert.

## 3. Bauen

- Alles: `npm run build`
- Nur CSS: `npm run build:css`
- Nur ROI-Rechner: `npm run build:roi`

Regel: Wer eine Quelldatei ändert, baut das Ergebnis neu und committet beides zusammen. Quelle und Ergebnis dürfen nie auseinanderlaufen.

| Geändert | Neu bauen | Ergebnisdatei |
|---|---|---|
| `assets/tailwind.input.css`, `tailwind.config.js`, CSS-Klassen im HTML | `npm run build:css` | `assets/tailwind.css` |
| `widgets/roi-rechner/*.jsx` | `npm run build:roi` | `widgets/roi-rechner/dist.js` |

## 4. Ablageregeln

- **Neue Datei → bestehender Ordner.** Neuer Ordner nur nach Rückfrage bei Pantelis und mit Update dieser Datei.
- Seiten: HTML im Repo-Root (`index.html`, `impressum.html`, `datenschutz.html`, `agb.html`, `ki-kompetenz.html`).
- Bilder, Schriften, Logos, gebautes CSS: `assets/`.
- Widgets: `widgets/<name>/`, Quelle und `dist.js` im selben Ordner.
- Interne Arbeitsunterlagen: `docs/`. Neue interne Datei außerhalb von `docs/` gehört zusätzlich in die `exclude`-Liste in `_config.yml`.
- Rechtstexte werden versioniert im Text selbst (Stand und Versionsnummer auf der Seite), nicht über Dateinamen.
- Einmalige Patch-Skripte (`patch_*.py`) und `*.bak` bleiben lokal, sie stehen in `.gitignore`. Nicht mit `git add -f` erzwingen.

## 5. Commit-Konventionen

- **Format:** `<typ>: <beschreibung>` — Typen: `content:` (Texte und Inhalte der Seite), `feat:`, `fix:`, `docs:`, `chore:`.
- **Ein Commit pro logischer Änderung.** Keine Sammel-Commits über mehrere Themen.
- **Vor jedem `git add` zuerst `git status --short`** und ausschließlich die Dateien einchecken, die zur aktuellen Änderung gehören. Kein `git add -A`, kein `git add .`, kein `git commit -a`.
- **Vor jedem Commit `git pull`.**
- **Push auf `main` ist ein Deploy.** Deshalb ist ein Push immer separat freigabepflichtig, auch innerhalb eines freigegebenen Bauplans.
- Nach dem Deploy die geänderte Seite live aufrufen und das Ergebnis prüfen, nicht nur lokal.
- Keine Commits über die GitHub-Weboberfläche („Add files via upload"), nur über den lokalen Klon.

## 6. Branches

`main` ist live. Größere Umbauten laufen in einem eigenen Branch (Muster wie `webdesign-verbesserungen`, `mehrsprachigkeit-de-en-el`) und wandern erst nach Freigabe auf `main`. Nach dem Merge wird der Branch gelöscht, damit die Liste kurz bleibt.

## 7. Secrets

Keine Zugangsdaten, Tokens oder API-Keys in Dateien, Commits oder Logs. Das Repo ist öffentlich, alles Committete ist damit veröffentlicht und über die Git-History auch nach dem Löschen noch lesbar.
