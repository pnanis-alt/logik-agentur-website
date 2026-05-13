# Design-Tokens — Logik-Agentur Website

**Version:** 1.0
**Erstellt:** Mai 2026
**Design-Richtung:** Clean Tech Light
**Differenzierung zu alveni.ai:** Indigo-Akzent statt Türkis/Petrol, transparente Formel-Anzeigen, eigenständige Layout-Hierarchie

---

## Verbindlichkeit

Diese Tokens sind **Source of Truth** für alle Sections, Widgets und Komponenten der Logik-Agentur-Website. Abweichungen nur mit explizitem Versions-Update (v1.1, v2.0, etc.).

---

## CSS-Variablen (vollständig)

```css
:root {
  /* === Surfaces === */
  --color-bg:          #FFFFFF;   /* Page background, cards */
  --color-bg-subtle:   #FAFAFA;   /* Section backgrounds, hover states */
  --color-bg-muted:    #F4F4F5;   /* Disabled states, dividers */

  /* === Text === */
  --color-text:        #18181B;   /* Headlines, primary copy */
  --color-text-muted:  #52525B;   /* Subheadlines, secondary copy */
  --color-text-subtle: #71717A;   /* Hints, captions, disclaimer */

  /* === Borders === */
  --color-border:        #E4E4E7; /* Standard borders */
  --color-border-strong: #D4D4D8; /* Hover/focus borders */

  /* === Accent — Logik-Agentur Signature (Indigo) === */
  --color-accent:        #4F46E5; /* Primary actions, hero values */
  --color-accent-hover:  #4338CA; /* CTA hover */
  --color-accent-subtle: #EEF2FF; /* Accent backgrounds, badges */
  --color-accent-text:   #312E81; /* Text auf accent-subtle */

  /* === Semantic === */
  --color-success:        #059669;
  --color-warning:        #D97706;
  --color-danger:         #DC2626;
  --color-loss-bg:        #FEF3F2; /* Loss-Frame background */
  --color-loss-border:    #FECDCA; /* Loss-Frame border */
  --color-loss-text:      #B42318; /* Loss-Frame label */
  --color-loss-value:     #7A271A; /* Loss-Frame value */

  /* === Typography === */
  --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', 'SF Mono', Menlo, monospace;

  /* === Spacing (4px scale) === */
  --space-1:  0.25rem;  /*  4px */
  --space-2:  0.5rem;   /*  8px */
  --space-3:  0.75rem;  /* 12px */
  --space-4:  1rem;     /* 16px */
  --space-6:  1.5rem;   /* 24px */
  --space-8:  2rem;     /* 32px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-24: 6rem;     /* 96px */

  /* === Radii === */
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;

  /* === Shadows (subtle, nicht aufdringlich) === */
  --shadow-sm: 0 1px 2px 0 rgba(0,0,0,0.05);
  --shadow-md: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.05);

  /* === Breakpoints (referenz, nicht als CSS-Variable nutzbar) === */
  /* sm: 640px · md: 768px · lg: 1024px · xl: 1280px */
}
```

---

## Typografie-Hierarchie

| Stufe | Font-Size | Font-Weight | Letter-Spacing | Line-Height | Verwendung |
|---|---|---|---|---|---|
| `h1` Hero | 2.25–3rem (36–48px) | 600–700 | -0.025em | 1.15 | Hauptüberschrift Section |
| `h2` Section | 1.75rem (28px) | 600 | -0.02em | 1.2 | Section-Titel |
| `h3` Subsection | 1.25rem (20px) | 600 | -0.01em | 1.3 | Karten-Titel |
| Body Large | 1.0625rem (17px) | 400 | — | 1.6 | Hero-Subline |
| Body | 1rem (16px) | 400 | — | 1.65 | Standard-Copy |
| Body Small | 0.875rem (14px) | 400 | — | 1.5 | Sekundär-Copy, Buttons |
| Caption | 0.8125rem (13px) | 400–500 | — | 1.45 | Labels, Hints |
| Micro | 0.75rem (12px) | 500 | 0.04em | 1.4 | Badges, Pills (UPPERCASE optional) |

**Tabular-Numerals für Zahlen:** Immer `font-variant-numeric: tabular-nums;` bei Werten, die bei Slider-Bewegung springen — verhindert Layout-Sprünge.

---

## Mobile Breakpoints

```css
/* Smartphone: < 640px */
@media (max-width: 640px) {
  /* Container-Padding reduzieren: 2rem → 1.25rem */
  /* Hero-Zahlen: 3rem → 2.25rem */
  /* CTA-Block: row → column */
  /* h1: 2.25rem → 1.625rem */
}
```

---

## Komponenten-Konventionen

### Cards
- Background: `var(--color-bg)` (weiß)
- Border: `1px solid var(--color-border)`
- Border-Radius: `var(--radius-xl)` (16px) auf Desktop, `var(--radius-lg)` (12px) auf Mobile
- Padding: `2rem` Desktop, `1.25rem` Mobile
- Shadow: `var(--shadow-sm)`

### Buttons (Primary)
- Background: `var(--color-accent)` (#4F46E5)
- Hover: `var(--color-accent-hover)` (#4338CA)
- Padding: `0.75rem 1.5rem`
- Border-Radius: `var(--radius-md)` (8px)
- Font-Size: `0.9375rem` (15px), Weight 500

### Form Elements (Slider)
- Track: 6px high, `var(--color-border)`, border-radius 999px
- Thumb: 22px, `var(--color-accent)`, weißer Ring 3px, subtile Shadow
- Hover-Effekt: Thumb scale(1.1)
- Focus: 4px Outline in `rgba(79, 70, 229, 0.15)`

### Loss-Frame (Verlustdarstellung)
- Background: `var(--color-loss-bg)` (#FEF3F2)
- Border: `1px solid var(--color-loss-border)`
- Text: `var(--color-loss-text)` (Labels), `var(--color-loss-value)` (Werte)
- Icon: AlertCircle aus lucide-react

---

## Was NICHT verwendet wird

- ❌ **Gradients** (außer für sehr subtile Hero-Backgrounds, falls überhaupt)
- ❌ **Neon/Glow-Effekte**
- ❌ **Dark Mode** (vorerst Light Only — Mode-Switch ist zukünftige Erweiterung)
- ❌ **Custom Fonts außer Inter und JetBrains Mono** (Stabilität, Lade-Performance, DSGVO-Kompatibilität bei Google Fonts via self-hosting)
- ❌ **Animationen länger als 250ms** (außer bewusste Hero-Reveals)

---

## Versionierung

| Version | Datum | Änderungen |
|---|---|---|
| 1.0 | Mai 2026 | Initial Release, basiert auf ROI-Rechner v2 |

**Bei Änderungen:** Versionsnummer hochzählen, Changelog hier ergänzen, alle Komponenten validieren, dann Commit.
