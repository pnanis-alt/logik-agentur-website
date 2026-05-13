# ROI-Rechner Widget

## Architektur

- **Source:** `roi-rechner.jsx` (React-Komponente, ES-Modul mit npm-imports)
- **Entry:** `mount.jsx` (Self-Mounting auf `#roi-rechner-root`)
- **Build:** `dist.js` (esbuild-Bundle, ~50KB minified — wird committed)

## Build

```bash
# vom Repo-Root:
npm run build:roi
```

Build dauert <2 Sekunden. Output: `widgets/roi-rechner/dist.js`.

## Einbindung in HTML

```html
<div id="roi-rechner-root"></div>
<script src="widgets/roi-rechner/dist.js" defer></script>
```

## WICHTIG: Drift-Prävention

**Nach jeder Änderung an `roi-rechner.jsx` MUSS `npm run build:roi` laufen, bevor committed wird.** Sonst lebt eine alte `dist.js` im Repo und die Live-Seite zeigt veralteten Code.

Optional (später): GitHub Action `.github/workflows/build.yml` baut automatisch bei push. Solange manuell: README-Disziplin.
