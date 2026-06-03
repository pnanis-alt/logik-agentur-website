/** Tailwind v3 — lokaler Build (ersetzt cdn.tailwindcss.com Play-CDN).
 *  Theme = 1:1 vereinte Übernahme der bisherigen Inline-Configs:
 *    - index.html: Token-Aliase (var-basiert), fontFamily sans+mono, spacing,
 *      borderRadius, boxShadow, maxWidth, letterSpacing
 *    - impressum.html / datenschutz.html: la-navy / la-orange / la-gold
 *  Tokens-Quelle: docs/design-tokens.md + :root in index.html.
 *  Build: .build/tailwindcss -c tailwind.config.js -i assets/tailwind.input.css -o assets/tailwind.css --minify
 */
module.exports = {
  // content MUSS alle 3 HTML-Seiten UND die Widget-Quellen/Builds erfassen,
  // sonst räumt der JIT-Scan zur Laufzeit gemountete Widget-Klassen weg.
  content: [
    './index.html',
    './impressum.html',
    './datenschutz.html',
    './widgets/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // --- Surfaces (var-basiert, :root in index.html) ---
        base:            'var(--color-bg)',
        subtle:          'var(--color-bg-subtle)',
        muted:           'var(--color-bg-muted)',
        // --- Text (ink-Alias, weil `text` Tailwind-Utility ist) ---
        ink:             'var(--color-text)',
        'ink-muted':     'var(--color-text-muted)',
        'ink-subtle':    'var(--color-text-subtle)',
        // --- Borders (line-Alias, weil `border` Tailwind-Utility ist) ---
        line:            'var(--color-border)',
        'line-strong':   'var(--color-border-strong)',
        // --- Accent ---
        accent:          'var(--color-accent)',
        'accent-hover':  'var(--color-accent-hover)',
        'accent-subtle': 'var(--color-accent-subtle)',
        'accent-text':   'var(--color-accent-text)',
        // --- Semantic ---
        success:         'var(--color-success)',
        warning:         'var(--color-warning)',
        danger:          'var(--color-danger)',
        // --- Loss-Frame ---
        'loss-bg':       'var(--color-loss-bg)',
        'loss-border':   'var(--color-loss-border)',
        'loss-text':     'var(--color-loss-text)',
        'loss-value':    'var(--color-loss-value)',
        // --- Legal-Seiten (impressum / datenschutz) ---
        'la-navy':       '#2E3849',
        'la-orange':     '#E67533',
        'la-gold':       '#F2A93B',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"SF Mono"', 'Menlo', 'monospace'],
      },
      spacing: {
        'sp-1':  'var(--space-1)',
        'sp-2':  'var(--space-2)',
        'sp-3':  'var(--space-3)',
        'sp-4':  'var(--space-4)',
        'sp-6':  'var(--space-6)',
        'sp-8':  'var(--space-8)',
        'sp-12': 'var(--space-12)',
        'sp-16': 'var(--space-16)',
        'sp-24': 'var(--space-24)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
      },
      maxWidth: {
        content: '1200px',
      },
      letterSpacing: {
        'h1-hero':    '-0.025em',
        'h2-section': '-0.02em',
        'h3-card':    '-0.01em',
        'micro':      '0.04em',
      },
    },
  },
};
