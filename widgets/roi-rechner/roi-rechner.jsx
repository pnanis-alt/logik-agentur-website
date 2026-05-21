import { useState, useMemo } from 'react';
import { Phone, TrendingUp, Calendar, Calculator, ChevronDown, Sparkles } from 'lucide-react';

// ============================================================================
// ROI-Rechner — Logik-Agentur
// Design: Clean Tech Light · Akzent: Orange (#E67533)
// Zielgruppe: KMU-Hotels DACH
// ============================================================================

// Annahmen (transparent, im UI sichtbar)
const CONVERSION_RATE = 0.5;    // 50% der Buchungsanfragen führen zur Buchung
const TAGE_PRO_MONAT = 30;

export default function ROIRechner() {
  // Inputs mit realistischen KMU-Startwerten
  const [anrufeProTag, setAnrufeProTag] = useState(8);
  const [anteilBuchung, setAnteilBuchung] = useState(40);
  const [buchungswert, setBuchungswert] = useState(250);
  const [zeigeFormel, setZeigeFormel] = useState(false);

  // Berechnung (memoized)
  const calc = useMemo(() => {
    const verpassteAnrufeMonat = anrufeProTag * TAGE_PRO_MONAT;
    const verpassteBuchungenMonat = Math.round(
      verpassteAnrufeMonat * (anteilBuchung / 100) * CONVERSION_RATE
    );
    const mehrumsatzMonat = verpassteBuchungenMonat * buchungswert;
    const mehrumsatzJahr = mehrumsatzMonat * 12;

    return {
      verpassteAnrufeMonat,
      verpassteBuchungenMonat,
      mehrumsatzMonat,
      mehrumsatzJahr,
    };
  }, [anrufeProTag, anteilBuchung, buchungswert]);

  // Formatter
  const fmtEUR = (n) =>
    new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0,
    }).format(n);

  const fmtNum = (n) => new Intl.NumberFormat('de-DE').format(n);

  return (
    <div
      style={{
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
        background: '#FAFAFA',
        padding: '3rem 1rem',
        minHeight: '100vh',
      }}
    >
      {/* Custom Slider Styling */}
      <style>{`
        .lg-slider {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 6px;
          background: #E4E4E7;
          border-radius: 999px;
          outline: none;
          cursor: pointer;
        }
        .lg-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 22px;
          height: 22px;
          background: #E67533;
          border-radius: 50%;
          border: 3px solid #FFFFFF;
          box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08);
          cursor: pointer;
          transition: transform 0.15s ease;
        }
        .lg-slider::-webkit-slider-thumb:hover {
          transform: scale(1.1);
        }
        .lg-slider::-moz-range-thumb {
          width: 22px;
          height: 22px;
          background: #E67533;
          border-radius: 50%;
          border: 3px solid #FFFFFF;
          box-shadow: 0 1px 3px rgba(0,0,0,0.12);
          cursor: pointer;
        }
        .lg-slider:focus {
          box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.15);
        }
      `}</style>

      <div
        style={{
          maxWidth: '720px',
          margin: '0 auto',
        }}
      >
        {/* === Header === */}
        <div style={{ marginBottom: '2rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.375rem 0.875rem',
              background: '#FDF1E7',
              borderRadius: '999px',
              fontSize: '0.8125rem',
              fontWeight: 500,
              color: '#7A3A0E',
              marginBottom: '1rem',
            }}
          >
            <Calculator size={14} strokeWidth={2} />
            ROI-Rechner
          </div>
          <h1
            style={{
              fontSize: '2.25rem',
              fontWeight: 600,
              color: '#18181B',
              letterSpacing: '-0.025em',
              lineHeight: 1.15,
              marginBottom: '0.75rem',
            }}
          >
            Was kosten dich verpasste Anrufe wirklich?
          </h1>
          <p
            style={{
              fontSize: '1.0625rem',
              color: '#52525B',
              lineHeight: 1.6,
              marginBottom: 0,
            }}
          >
            Berechne den potenziellen Mehrumsatz für dein Hotel in 10 Sekunden — transparent, ohne E-Mail-Eingabe.
          </p>
        </div>

        {/* === Calculator Card === */}
        <div
          style={{
            background: '#FFFFFF',
            border: '1px solid #E4E4E7',
            borderRadius: '16px',
            padding: '2rem',
            boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
          }}
        >
          {/* === Inputs Block === */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            {/* Slider 1 */}
            <SliderField
              icon={<Phone size={16} strokeWidth={2} />}
              label="Verpasste Anrufe pro Tag"
              value={anrufeProTag}
              displayValue={anrufeProTag}
              min={0}
              max={30}
              step={1}
              onChange={setAnrufeProTag}
              hint="Schätzung: Anrufe außerhalb Rezeptionszeiten oder bei besetzt"
            />

            {/* Slider 2 */}
            <SliderField
              icon={<TrendingUp size={16} strokeWidth={2} />}
              label="Anteil Buchungsanfragen"
              value={anteilBuchung}
              displayValue={`${anteilBuchung}%`}
              min={10}
              max={80}
              step={5}
              onChange={setAnteilBuchung}
              hint="Wie viele dieser Anrufe wären echte Buchungsanfragen?"
            />

            {/* Slider 3 */}
            <SliderField
              icon={<Calendar size={16} strokeWidth={2} />}
              label="Durchschnittlicher Buchungswert"
              value={buchungswert}
              displayValue={fmtEUR(buchungswert)}
              min={50}
              max={800}
              step={10}
              onChange={setBuchungswert}
              hint="Typischer Aufenthaltswert (Zimmer × Nächte)"
            />
          </div>

          {/* === Divider === */}
          <div
            style={{
              height: '1px',
              background: '#E4E4E7',
              margin: '2rem 0',
            }}
          />

          {/* === Hero Result === */}
          <div
            style={{
              background: '#FDF1E7',
              borderRadius: '12px',
              padding: '1.5rem',
              marginBottom: '1rem',
            }}
          >
            <div
              style={{
                fontSize: '0.875rem',
                fontWeight: 500,
                color: '#7A3A0E',
                marginBottom: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.375rem',
              }}
            >
              <Sparkles size={14} strokeWidth={2} />
              Potenzieller Mehrumsatz
            </div>
            <div
              style={{
                fontSize: '3rem',
                fontWeight: 700,
                color: '#E67533',
                letterSpacing: '-0.03em',
                lineHeight: 1,
                marginBottom: '0.5rem',
              }}
            >
              {fmtEUR(calc.mehrumsatzMonat)}
              <span
                style={{
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: '#7A3A0E',
                  letterSpacing: 'normal',
                  marginLeft: '0.5rem',
                }}
              >
                / Monat
              </span>
            </div>
            <div
              style={{
                fontSize: '1rem',
                color: '#7A3A0E',
                fontWeight: 500,
              }}
            >
              = {fmtEUR(calc.mehrumsatzJahr)} pro Jahr
            </div>
          </div>

          {/* === Secondary Metrics === */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '0.75rem',
            }}
          >
            <SecondaryMetric
              label="Verpasste Buchungen"
              value={fmtNum(calc.verpassteBuchungenMonat)}
              unit="pro Monat"
            />
            <SecondaryMetric
              label="Verpasste Anrufe"
              value={fmtNum(calc.verpassteAnrufeMonat)}
              unit="pro Monat"
            />
          </div>

          {/* === Formula Toggle (Differentiator vs. alveni) === */}
          <button
            onClick={() => setZeigeFormel(!zeigeFormel)}
            style={{
              marginTop: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              padding: '0.75rem 1rem',
              background: '#FAFAFA',
              border: '1px solid #E4E4E7',
              borderRadius: '8px',
              fontSize: '0.875rem',
              fontWeight: 500,
              color: '#52525B',
              cursor: 'pointer',
              fontFamily: 'inherit',
              transition: 'background 0.15s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#F4F4F5')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#FAFAFA')}
          >
            <span>So wird gerechnet — transparent und nachvollziehbar</span>
            <ChevronDown
              size={16}
              strokeWidth={2}
              style={{
                transform: zeigeFormel ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.2s ease',
              }}
            />
          </button>

          {zeigeFormel && (
            <div
              style={{
                marginTop: '0.75rem',
                padding: '1.25rem',
                background: '#FAFAFA',
                border: '1px solid #E4E4E7',
                borderRadius: '8px',
                fontSize: '0.875rem',
                color: '#52525B',
                lineHeight: 1.7,
                fontFamily: "'JetBrains Mono', 'SF Mono', Menlo, monospace",
              }}
            >
              <div style={{ marginBottom: '0.75rem', fontFamily: "'Inter', system-ui, sans-serif", fontWeight: 500, color: '#18181B' }}>
                Berechnungsschritte:
              </div>
              <div style={{ marginBottom: '0.5rem' }}>
                <span style={{ color: '#71717A' }}>Verpasste Anrufe / Monat</span>
                <br />
                = {anrufeProTag} × 30 Tage = <strong style={{ color: '#18181B' }}>{fmtNum(calc.verpassteAnrufeMonat)}</strong>
              </div>
              <div style={{ marginBottom: '0.5rem' }}>
                <span style={{ color: '#71717A' }}>Verpasste Buchungen / Monat</span>
                <br />
                = {fmtNum(calc.verpassteAnrufeMonat)} × {anteilBuchung}% × 50% = <strong style={{ color: '#18181B' }}>{fmtNum(calc.verpassteBuchungenMonat)}</strong>
              </div>
              <div style={{ marginBottom: '0.75rem' }}>
                <span style={{ color: '#71717A' }}>Mehrumsatz / Monat</span>
                <br />
                = {fmtNum(calc.verpassteBuchungenMonat)} × {fmtEUR(buchungswert)} = <strong style={{ color: '#E67533' }}>{fmtEUR(calc.mehrumsatzMonat)}</strong>
              </div>
              <div
                style={{
                  marginTop: '0.875rem',
                  paddingTop: '0.875rem',
                  borderTop: '1px solid #E4E4E7',
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: '0.8125rem',
                  color: '#71717A',
                  lineHeight: 1.5,
                }}
              >
                <strong>Annahmen:</strong> 50% der Buchungsanfragen führen erfahrungsgemäß zur Buchung (Conversion-Rate). 30 Tage pro Monat. Werte basieren auf Branchendurchschnitt für KMU-Hotels in DACH.
              </div>
            </div>
          )}
        </div>

        {/* === CTA === */}
        <div
          style={{
            marginTop: '1.5rem',
            background: '#18181B',
            borderRadius: '12px',
            padding: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <div
              style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: '#FFFFFF',
                marginBottom: '0.25rem',
              }}
            >
              Diese Zahlen lassen sich realisieren.
            </div>
            <div
              style={{
                fontSize: '0.875rem',
                color: '#A1A1AA',
              }}
            >
              Kostenloses Erstgespräch — unverbindlich, 30 Minuten.
            </div>
          </div>
          <a
            href="https://cal.eu/pantelis-nanis-m54voh/30min"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '0.75rem 1.5rem',
              background: '#E67533',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '8px',
              fontSize: '0.9375rem',
              fontWeight: 500,
              cursor: 'pointer',
              fontFamily: 'inherit',
              textDecoration: 'none',
              transition: 'background 0.15s ease',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#C45A1A')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#E67533')}
          >
            Beratungstermin buchen →
          </a>
        </div>

        {/* === Disclaimer === */}
        <p
          style={{
            marginTop: '1.5rem',
            fontSize: '0.8125rem',
            color: '#71717A',
            textAlign: 'center',
            lineHeight: 1.5,
          }}
        >
          Werte sind Schätzungen auf Basis von Branchendurchschnitten.
          <br />
          Individuelle Ergebnisse können abweichen — gerne erstellen wir eine individuelle Analyse für dein Hotel.
        </p>
      </div>
    </div>
  );
}

// ============================================================================
// Sub-Components
// ============================================================================

function SliderField({ icon, label, value, displayValue, min, max, step, onChange, hint }) {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '0.625rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <span style={{ color: '#71717A' }}>{icon}</span>
          <label
            style={{
              fontSize: '0.9375rem',
              fontWeight: 500,
              color: '#18181B',
            }}
          >
            {label}
          </label>
        </div>
        <div
          style={{
            fontSize: '1rem',
            fontWeight: 600,
            color: '#E67533',
            fontVariantNumeric: 'tabular-nums',
            minWidth: '5rem',
            textAlign: 'right',
          }}
        >
          {displayValue}
        </div>
      </div>
      <input
        type="range"
        className="lg-slider"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '0.375rem',
        }}
      >
        <p
          style={{
            fontSize: '0.8125rem',
            color: '#71717A',
            margin: 0,
            lineHeight: 1.4,
          }}
        >
          {hint}
        </p>
      </div>
    </div>
  );
}

function SecondaryMetric({ label, value, unit }) {
  return (
    <div
      style={{
        background: '#FAFAFA',
        border: '1px solid #E4E4E7',
        borderRadius: '8px',
        padding: '0.875rem 1rem',
      }}
    >
      <div
        style={{
          fontSize: '0.8125rem',
          color: '#71717A',
          marginBottom: '0.25rem',
          fontWeight: 500,
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontSize: '1.5rem',
          fontWeight: 600,
          color: '#18181B',
          letterSpacing: '-0.01em',
          lineHeight: 1.2,
          fontVariantNumeric: 'tabular-nums',
        }}
      >
        {value}
        <span
          style={{
            fontSize: '0.8125rem',
            fontWeight: 400,
            color: '#71717A',
            marginLeft: '0.375rem',
          }}
        >
          {unit}
        </span>
      </div>
    </div>
  );
}
