# Umbau "keine Preise auf der Webseite"

**Stand:** 16.09.2026 | **Zweig:** `preise-raus` | **Freigabe:** Pantelis am 15.09.2026 (Plan), Bau am 16.09.2026

## Warum

Pantelis nennt Setup- und Monatspreise nicht mehr auf der Webseite. Pakete haben kein festes
Kontingent mehr, sie werden je Branche und Betriebsgröße zugeschnitten. Der Preis entsteht im
Erstgespräch. Grundlage sind zwei Recherchen vom 15.09.2026, beide in `docs/`:

- `recherche-mitbewerber-preis-nach-gespraech-2026-09-15.md` (18 deutsche Anbieter)
- `recherche-best-practice-preis-nach-gespraech-2026-09-15.md` (Studien, Cal.com, Rechtslage)

Kernzahlen aus der Mitbewerber-Recherche: 12 von 18 zeigen keine einzige Preiszahl, 11 von 18
nennen das Erstgespräch ausdrücklich kostenlos, 10 von 18 verlinken einen Kalender, nur 3 von 18
nennen die Vertragslaufzeit. Vorbilder nach Wahl von Pantelis: hotel-telefonbot.de und
chatbotmanufaktur.de.

## Feste Vorgaben von Pantelis

1. Der Preis wird auf der Seite **gar nicht erwähnt**. Auch keine Formulierung wie "Preis im
   Gespräch" oder "Angebot innerhalb von 24 Stunden". Erlaubt sind "individuell", "unverbindlich",
   "kostenloses Erstgespräch".
2. Keine Stufen mehr (Solo, Team, Scale). Pakete entstehen je Branche und Betriebsgröße.
3. Vertragsarten und Laufzeit kommen nicht auf die Seite, nur ins Angebot und in die AGB.
4. Webseite, Gesprächsleitfaden und AGB werden gemeinsam fertig und gehen gemeinsam live.

## Was am 16.09.2026 gebaut wurde (nur `index.html`)

- **Abschnitt 6 ersetzt:** Der Preisbereich (`#pricing`, drei Reiter, acht Paketkarten, Add-on-Preise,
  Kleingedrucktes, Enterprise-Zeile) ist raus. An seiner Stelle steht `#angebot`: Überschrift
  "Passt das zu deinem Betrieb?", ein Satz zum individuellen Zuschnitt, Button "Kostenloses
  Erstgespräch vereinbaren" (Link auf cal.eu, nicht eingebettet), Zusatz "30 Minuten, kostenlos und
  unverbindlich" sowie der Hinweis "Angebote und Verträge ausschließlich für Unternehmen, nicht für
  Verbraucher." Letzterer setzt die Empfehlung aus der Rechtsrecherche um (PAngV § 1 Abs. 1 gilt nur
  gegenüber Verbrauchern; ein B2B-Hinweis muss sichtbar sein, BGH I ZR 99/08).
- **Bausteine verschoben:** Die fünf Zusatzbausteine stehen jetzt ohne Preise im Modul-Abschnitt.
- **Navigation:** Menüpunkt "Preise" heißt "Erstgespräch" und springt auf `#angebot` (Kopf, Handy-Menü,
  Fußbereich).
- **Texte angepasst:** Hero-Punkt "Monatlich kündbar, keine Mindestlaufzeit" zu "Zugeschnitten auf
  Branche und Betriebsgröße"; Überschrift "Erst hören, dann rechnen, dann Preise." zu "Erst hören,
  dann rechnen."; Fälligkeit des Setups in Schritt 04 und "Kündigen kannst du monatlich" in Schritt 05
  entfernt; FAQ "Was kostet das?" gelöscht; FAQ zur Kündigung heißt jetzt "Was passiert mit meinen
  Daten, wenn der Vertrag endet?" ohne Angabe zur Frist.
- **Technik:** CSS und JavaScript des Tarif-Umschalters entfernt, Animations-Selektoren ohne
  `#pricing`, `assets/tailwind.css` neu gebaut.
- **Unverändert:** ROI-Rechner (kennt keine Preise), Testanruf, Demo-Dialog im Hero (dort geht es um
  das kostenlose Erstgespräch, nicht um Produktpreise).

## Nachtrag am 16.09.2026: Farbe und sechstes Modul

- **Karten im Grau der Kopfzeile.** Weiße Karten auf weißem Grund wirkten flach. Zuerst mit dem
  Logo-Gelb versucht (#FEF6E4), von Pantelis verworfen: zu weich. Jetzt tragen die Modulkarten in
  `#omnichannel` und die Branchenkarten (`.branche-karte`) `--header-bg` (#EDEFF3), also den Grundton
  der Kopfzeile mit dem Würfelmuster, Rand `rgba(47,54,72,0.14)`.
- **Modulkarten: Überschrift und Schaltfläche mittig.** Der Link "Angebot anfragen" ist jetzt eine
  umrandete weiße Schaltfläche ohne Pfeil, zentriert, im Stil der Hero-Schaltfläche "Testanruf
  starten".
- **Dritter Durchgang: gleiche Höhen.** Grau noch einmal nachgedunkelt auf `--karte-grau` #D4DBE6.
  Ab 768 px Breite haben Titelzeile (`min-height: 3.6rem`, mittig), Beschreibung (`8.75rem`, also
  fünf Zeilen) und Liste (`7.5rem`) feste Mindesthöhen, dazu 2,5 rem Abstand vor der Schaltfläche.
  Damit starten Text, Haken-Liste und Schaltfläche in allen sechs Karten auf derselben Höhe, auch
  wenn der E-Mail-Assistent kürzer beschrieben ist. Unter 768 px greifen die Mindesthöhen nicht,
  dort steht jede Karte allein untereinander.
- **Kartenkopf neu (zweiter Durchgang).** Grau war zuvor #DFE4EC. Symbol und
  Titel stehen als zentrierte Einheit oben (Symbol in einem weißen Kästchen mit Rand und Schatten),
  darunter eine dünne Trennlinie, dann der Text mit mehr Zeilenabstand (`leading-7`). Jede Karte ist
  eine Flex-Spalte, die Schaltfläche steht per `margin-top:auto` unten, deshalb liegen alle
  Schaltflächen auf einer Linie.
- **Sechstes Modul "Termin- und Buchungsanbindung".** Damit steht das Raster symmetrisch in zwei
  Reihen zu drei Karten. Inhalt: freie Zeiten aus dem System des Kunden, Termin mit Bestätigung,
  Machbarkeit vorab kostenlos geprüft. Gebucht wird im System des Kunden, nicht durch die KI.
- **Folgeänderungen:** Überschrift jetzt "Sechs Module, jedes auf deinen Betrieb eingerichtet.";
  der Baustein "Terminbuchung im Kalender" ist aus der Bausteine-Liste raus, weil er sonst doppelt
  stünde. "Buchungsanfrage mit Verfügbarkeitsprüfung" bleibt dort, das ist die weitergehende Stufe.

## Nachtrag 2 am 16.09.2026: Seitenmitte verschlankt

Pantelis: Ab "Ausprobieren" standen vier Aufforderungen dicht hintereinander (Testanruf, Button im
ROI-Rechner, Angebots-Block, Abschluss-Block). Deshalb:

- **Angebots-Block `#angebot` wieder entfernt.** Der Abschluss-Block `#final-cta` am Seitenende ist
  jetzt die einzige große Aufforderung. Er hat den Satz zum Zuschnitt und den B2B-Hinweis übernommen.
  Die Menüpunkte "Erstgespräch" springen auf `#final-cta`.
- **Jedes der sechs Module hat einen eigenen Link "Angebot anfragen"** auf cal.eu, nach dem Vorbild
  von agenturphilipp.de (eigener Button je Paket, ohne Preis).
- **ROI-Rechner ans Seitenende verschoben**, eigener Abschnitt `#rechner` direkt über dem Fußbereich,
  dazu der Eintrag "Rechenbeispiel" in der Schnellnavigation. Der Rechner verschwindet damit nicht,
  steht aber nicht mehr zwischen Testanruf und Abschluss.
- **Button im Rechner entfernt.** Der schwarze Balken "Was davon trifft auf deinen Betrieb zu?" mit
  "Beratungstermin buchen" ist aus `widgets/roi-rechner/roi-rechner.jsx` raus, `dist.js` neu gebaut
  (`npm run build:roi`). Er stand sonst unmittelbar unter dem Abschluss-Block.
- **Abschnitt "Ausprobieren" ist jetzt nur noch der Testanruf.** Die doppelte Überschrift
  ("Erst hören, dann rechnen." plus "Hör dir den Assistenten selbst an.") ist auf eine reduziert.

## Nachtrag 3 am 16.09.2026: Fußzeile im dunklen Band

Die Fußzeile trägt jetzt die Klasse `section-dark` statt `bg-subtle`, also dasselbe Navy
(`--color-logo-navy`) und dasselbe helle Raster wie Hero, Umsetzung, Über mich und Abschluss-Block.
Zwei Fallen dabei: Die alte Regel `#footer { background: var(--color-bg-band) }` hätte `.section-dark`
geschlagen (ID vor Klasse), sie ist jetzt auf Navy gesetzt und bringt `position: relative` plus
`isolation: isolate` mit, sonst fehlt dem Raster der Bezugspunkt. Ebenso überschreibt
`#footer .uppercase.tracking-wider` die helle Schriftfarbe, dafür gibt es eine eigene Regel.

Dazu: Der Rechner wird jetzt als `widgets/roi-rechner/dist.js?v=2026-09-16` eingebunden. Ohne diese
Versionsnummer liefert der Browser nach dem Deploy die alte Fassung aus seinem Zwischenspeicher, in
der die entfernte Schaltfläche noch steckt. Bei der nächsten Änderung am Rechner die Nummer mitziehen.

## Buchungsfragen in Cal.eu: eingerichtet am 17.09.2026

Statt eines Formulars für alle gibt es drei Buchungslinks mit passenden Fragen, weil Cal.eu keine
Fragen abhängig von anderen Antworten einblenden kann. Eingerichtet per Cloud-Browser nach
`docs/runbooks/cal-eu-buchungsfragen-einrichten.md`, öffentlich geprüft (Seitentitel und HTTP 200):

- `/30min` "Kostenloses Erstgespräch": Firmenname, Branche (11 Optionen inkl. Energie & Solar), Falls
  Sonstiges, Wobei soll dich die KI entlasten? (Mehrfachauswahl), Website. Alle allgemeinen Buttons.
- `/erstgespraech-telefon-chat`: statt der Entlastungsfrage "Wie viele Anrufe bekommt ihr ungefähr pro
  Tag?". Modulkarten Voice-Agent, Website-Chatbot, Termin- und Buchungsanbindung.
- `/erstgespraech-automatisierung`: statt der Entlastungsfrage "Welche Programme nutzt ihr heute?"
  (freiwillig). Modulkarten E-Mail-Assistent, Prozess-Automatisierung, Onboarding-Assistent.

Die Frage nach der Mitarbeiterzahl ist bewusst verworfen: Sie sagt nichts über das Anrufaufkommen.

### Ursprünglich geplante Fragen (überholt)

1. Firmenname (Pflicht, zugleich der sichtbare B2B-Nachweis)
2. Branche (Auswahl, Pflicht)
3. Mitarbeiterzahl (Auswahl: 1 bis 5, 6 bis 20, über 20)
4. "Wobei soll dich die KI entlasten?" (Anrufe annehmen, Fragen auf der Website beantworten,
   E-Mails beantworten, Abläufe und Systeme verbinden, Wissen für mein Team, weiß ich noch nicht)
5. Website (freiwillig)

Offen: ob Buchungsfragen und Mehrfachauswahl im Tarif von Pantelis enthalten sind. Vor dem
Einrichten prüfen.

## Offen, bevor das live geht

- **AGB:** § 7 Abs. 1 sagt heute "Eine Mindestlaufzeit besteht nicht." Das passt nicht zum
  12-Monats-Vertrag mit Vorauszahlung. Ebenso zu prüfen: § 6 (Vergütung, Fair-Use-Kontingent),
  § 10 (Verbrauchsdeckel), § 17 (Preisanpassung).
- **Gesprächsleitfaden und Rechenhilfe:** Fragen je Branche und Größe, damit Pantelis im Erstgespräch
  einen Preis nennen kann.
- **Preise selbst:** Einrichtung einheitlich, halber Preis bei 12 Monaten Vorauszahlung. Die Zahlen
  (999 gegen 499, heute auf der Seite 799 und 299) sind noch nicht beschlossen.
- **Push auf `main` ist der Deploy.** Erst nach ausdrücklicher Freigabe und erst zusammen mit
  Leitfaden und AGB.
