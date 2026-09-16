# Recherche: Preisbereich ohne feste Preise, der zu gebuchten Gesprächen führt

Abrufdatum aller Quellen: 15.09.2026
Auftrag: nur lesen. Nichts gebucht, nichts abgeschickt.

## Vorbemerkung zu Werkzeugen und Quellenstärke

* Firecrawl war nicht nutzbar: Suche mit Fehler 402, Abruf zuerst mit Ratenlimit, dann "Insufficient credits". Stattdessen eingebautes Abrufwerkzeug (WebFetch), Websuche und direkter Abruf per `curl`.
* WebFetch liefert Zusammenfassungen durch ein kleines Modell. Wörtliche Zitate daraus sind als "laut Abruf" gekennzeichnet. Wo es auf den Wortlaut ankam (Gesetzestext, Gerichtsentscheidungen, Cal.com-Doku, Unterauftragnehmer), habe ich den Originaltext per `curl` gelesen.
* Ein Fehler des Abrufwerkzeugs ist aufgefallen und korrigiert: Die Zusammenfassung von shopbetreiber-blog.de behauptete als Fazit "Werbung ohne Preisangabe ist grundsätzlich nicht zulässig". Der Originaltext sagt das nicht (siehe Abschnitt 5). Die Zusammenfassung von it-recht-kanzlei.de nannte ein falsches BGH-Aktenzeichen (I ZR 29/15), richtig ist laut Originaltext shopbetreiber-blog.de BGH, Beschluss vom 03.11.2016, I ZR 8/16.
* Context7 kannte Cal.com (`/websites/cal`, `/llmstxt/cal_llms-full_txt`), lieferte zu Einbettungsarten aber nur einen allgemeinen Satz. Die Details stammen aus der offiziellen Cal.com-Hilfe (cal.com/help, per `curl` gelesen).

Stärke der Quellen:

* **Stark:** Gesetzestext, Gerichtsentscheidungen (über seriöse Fachquelle), unabhängige Nutzerforschung (NN/g), Anbieter-Doku zu eigenen technischen Funktionen.
* **Mittel:** Branchenumfragen mit offengelegter Stichprobe, aber mit Eigeninteresse des Herausgebers (Gartner, TrustRadius), Fachanwalts- und IHK-Beiträge.
* **Schwach:** Marketingzahlen von Werkzeugherstellern (Chili Piper, RevenueHero), Blogs ohne Methodik, Suchergebnis-Auszüge ohne geöffnete Originalquelle.

---

## 1. Empfehlungen und Studien zu Preisseiten ohne Preis

### 1.1 Was Besucher stört

| Aussage | Quelle | Stärke |
|---|---|---|
| In Nutzertests mit Geschäftskunden brechen Teilnehmer ab und gehen zu Wettbewerbern, wenn keine Preise genannt werden. Laut Abruf: "We witness people getting frustrated and leaving sites that don't show prices." | Hoa Loranger, NN/g, 01.12.2013: https://www.nngroup.com/articles/show-price/ | Stark in der Methode (Nutzertests), aber von 2013 |
| Versteckte Kosten wirken unehrlich. Laut Abruf: "People view companies that hide costs as being evasive and untrustworthy." | wie oben | Stark, alt |
| "Transparent pricing" ist seit 2023 vier Jahre in Folge der Wunsch Nummer 1 von Software-Käufern an Anbieter, 2026 mit 45 Prozent. Stichprobe 1.862 Käufer und 444 Anbieter, Umfrage Januar 2026. | TrustRadius 2026 B2B Buying Disconnect, Pressemitteilung über Yahoo Finance: https://finance.yahoo.com/technology/ai/articles/trustradius-2026-b2b-buying-disconnect-130000506.html | Mittel (Bewertungsplattform mit Eigeninteresse, Zielgruppe Software-Käufer) |
| 2024: "I wish all vendors had transparent pricing" war mit 51 Prozent der Top-Wunsch von Enterprise-Käufern. 66 Prozent nannten "It met our needs for the best price" als Grund für die Auswahl. Stichprobe 2.164 Käufer, 243 Anbieter, März bis April 2024. | TrustRadius: https://solutions.trustradius.com/vendor-blog/2024-b2b-buying-disconnect-the-year-of-the-brand-crisis/ | Mittel |
| 67 Prozent der B2B-Käufer bevorzugen einen Einkauf ohne Vertriebskontakt, knapp 650 Befragte. Vorjahr 61 Prozent. | Gartner, Pressemitteilung 09.03.2026 (Seite lieferte 403, Überschrift aus Suchergebnis): https://www.gartner.com/en/newsroom/press-releases/2026-03-09-gartner-sales-survey-finds-67-percent-of-b2b-buyers-prefer-a-rep-free-experience ; Zahlen und Stichprobe über Demand Gen Report: https://www.demandgenreport.com/industry-news/news-brief/gartner-67-of-b2b-buyers-prefer-a-rep-free-experience/52142/ ; Vorjahr: https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-sales-survey-finds-61-percent-of-b2b-buyers-prefer-a-rep-free-buying-experience | Mittel |

### 1.2 Was hilft

| Aussage | Quelle | Stärke |
|---|---|---|
| Wenn exakte Preise nicht möglich sind: "show sample prices for a set of typical orders", also Beispielpreise für typische Fälle. Einfache Tabelle statt komplizierter Rechner, weil Besucher in der frühen Recherche nur eine grobe Vorstellung vom Preisniveau brauchen. | Jakob Nielsen, NN/g, 09.04.2006: https://www.nngroup.com/articles/show-prices-for-common-scenarios/ | Stark, alt |
| Beispielpreise für typische Szenarien, Preisspannen oder Richtpreise helfen bei der Budgetplanung, auch wenn der Endpreis später verhandelt wird. | NN/g 2013 (s. o.) | Stark, alt |
| Gartner-Analystin Alyssa Cruz: "sellers must remain helpful while keeping the experience low-friction." | Demand Gen Report (s. o.) | Mittel |
| Käufer möchten bei Fragen, die Kontextwissen brauchen, etwa ob eine Lösung zum eigenen Betrieb passt, den Verkäufer einbeziehen. | Nur als Auszug im Suchergebnis zur Gartner-Pressemitteilung 2025 gesehen, Seite nicht selbst geöffnet | Schwach (unverifiziert) |
| CXL rät, Preise "so weit wie möglich" offenzulegen, sonst verliere man Geschäft an Wettbewerber mit sichtbaren Preisen. | Nur Suchergebnis-Auszug, cxl.com/blog/b2b-pricing lieferte 403: https://cxl.com/blog/b2b-pricing/ | Schwach (unverifiziert) |

**Nicht gefunden oder nicht zugänglich:**

* Baymard hat B2B-Richtlinien zu Preisanzeige, diese liegen aber hinter der Bezahlschranke: https://baymard.com/guidelines/3105-price-visibility-and-update-frequency-in-configuration-flows
* Den NN/g-Bericht "B2B Website Usability" (3. Auflage, 188 Richtlinien, 293 B2B-Seiten) gibt es nur kostenpflichtig (248 US-Dollar): https://www.nngroup.com/reports/b2b-websites-usability/
* Keine unabhängige Studie gefunden, die "ab"-Preis, Preisspanne und Rechenbeispiel direkt gegeneinander testet.

### 1.3 Einordnung für die Logik Agentur (eigene Ableitung, keine Quelle)

* Die Belege sprechen **gegen** einen Preisbereich ganz ohne Zahlen. Das steht in Spannung zur geplanten Entscheidung. Vereinbar mit "Preis erst nach Gespräch" ist eine **Orientierung**: Preisspanne, "ab"-Preis oder zwei bis drei Rechenbeispiele für typische Betriebe, plus der Satz, dass das verbindliche Angebot nach dem Gespräch kommt.
* Die Umfragen von TrustRadius und Gartner befragen vor allem Software-Käufer in größeren Firmen. Ob kleine Betriebe (Hotel, Praxis, Handwerk) genauso reagieren, ist nicht belegt. Einschätzung: sehr zuversichtlich, dass es eher stärker gilt, weil kleine Betriebe ohne Einkaufsabteilung schneller vergleichen und abspringen.
* Der ROI-Rechner deckt nach NN/g eher den Nutzen ab, nicht den Preis. Er ersetzt keine Preisorientierung.

---

## 2. Beispiele von Anbietern mit Individualpreis

Wörtliche Texte laut Abruf (WebFetch). Stand 15.09.2026.

| Anbieter | Aufbau | Texte und Buttons | Quelle |
|---|---|---|---|
| **Synthflow** | Eine Enterprise-Karte, "ab"-Preis, Liste der Preisfaktoren, Funktionsliste, Kundenlogos | "Enterprise contracts start at $30,000 annually." / "Final pricing is scoped around call volume, concurrency, telephony setup, integrations, security needs, and launch support." / Button "Contact Sales" | https://synthflow.ai/pricing |
| **PolyAI** | Keine Zahlen, Abrechnungsgrundlage genannt, Block "Included in all plans" (Support, Security, SLA, Monitoring, Upgrades, Tech stack) | "Simple pricing that scales to suit your needs" / "Ongoing use of the voice agent is priced on a per-minute basis, which includes proactive performance improvements, maintenance and 24/7 support." / "Start the conversation." / Button "Request a demo" | https://poly.ai/pricing |
| **Bland** | Drei Karten, zwei mit Preis, Enterprise ohne Preis, danach Vergleichstabelle und FAQ | Enterprise: "Custom" / "Contracted to your volume" / Button "Talk to our team" | https://www.bland.ai/pricing |
| **HubSpot Enterprise (englisch)** | "ab"-Preis, Pflicht-Einrichtungsgebühr ausgewiesen | "Starts at $3,600/mo" / "Cost shown does not include the required, one-time Enterprise Onboarding for a fee of $7,000." / Button "Talk to Sales" | https://www.hubspot.com/pricing/marketing/enterprise |
| **HubSpot Enterprise (deutsch)** | wie oben | "Ab 3.300 €/Monat" / Einrichtungsgebühr "6.830 €" / jährliche Zahlung als "Bestes Angebot" gekennzeichnet / Button "Mit Vertriebsteam sprechen" | https://www.hubspot.de/pricing/marketing/enterprise |
| **moinAI (deutsch)** | Drei Pakete mit "ab"-Preis, monatlich und jährlich nebeneinander, Mindestlaufzeit pro Paket | "ab 880 €/Monat" (monatlich) oder "ab 750 €/Monat" (jährlich), "Unbegrenzte Unterhaltungen in allen Paketen", "Keine versteckten Kosten", jährliche Zahlung "bis zu 15%" günstiger | https://www.moin.ai/preise |
| **kiberatung.de (deutsch, KI-Telefonassistent)** | "ab"-Preis pro Jahr, Vergleich mit Personalkosten, Gesprächsangebot mit Zeitangabe | "ab 5.880 €" jährlich / Buttons "Kostenloses Analysegespräch buchen", "Jetzt Strategiegespräch vereinbaren" / "In 15 Min. Klarheit" | https://www.kiberatung.de/ki-telefonassistent |
| **Parloa** | Keine Preisseite (https://www.parloa.com/pricing/ lieferte 404), nur Kontaktseite | "See how AI agents transform customer conversations" / Button "Book a demo" | https://www.parloa.com/contact-us/ |
| **Cognigy (NiCE)** | Preisseite https://www.cognigy.com/pricing lieferte 404. Laut Drittquellen keine öffentlichen Preise | nicht selbst geprüft | Drittquelle, schwach: https://www.getmacha.com/blog/cognigy-complete-guide |

**Muster, die sich wiederholen** (Beobachtung, keine Wirkungsmessung):

1. "ab"-Preis oder Abrechnungsgrundlage statt gar keiner Angabe (Synthflow, HubSpot, moinAI, kiberatung, PolyAI).
2. Liste der Faktoren, die den Preis bestimmen (Synthflow).
3. Block "In allen Paketen enthalten" (PolyAI, moinAI).
4. Pflichtkosten wie Einrichtung offen ausgewiesen (HubSpot).
5. Button-Text nennt das Gespräch, nicht den Kauf: "Talk to Sales", "Mit Vertriebsteam sprechen", "Analysegespräch buchen".
6. Nur die größten Anbieter (Parloa, Cognigy) verzichten ganz auf Preisangaben. Deren Kunden sind Großunternehmen.

Budgetzahlen zu Parloa und Cognigy (etwa "ab 300.000 US-Dollar pro Jahr") stammen nur aus Blogs von Wettbewerbern und sind nicht belegt.

---

## 3. Buchungs-Button, Vorqualifizierung und Cal.com

### 3.1 Eingebetteter Kalender gegen Link gegen Formular

| Aussage | Quelle | Stärke |
|---|---|---|
| Wenn Besucher direkt nach dem Formular einen Termin buchen können, buchen 66,7 Prozent der qualifizierten Formular-Absender einen Termin, gegenüber 30 Prozent im Branchenschnitt. Datenbasis: knapp 4 Millionen Formular-Absendungen 2024, überwiegend B2B, aus dem eigenen Kundenstamm. | Chili Piper, 2025 Benchmark Report: https://www.chilipiper.com/post/form-conversion-rate-benchmark-report | Schwach (Hersteller eines Buchungswerkzeugs) |
| 14,1 Prozent der Formular-Absender sind nicht qualifiziert. | wie oben | Schwach |
| Doppeltes Ausfüllen (erst Formular, dann nochmal im Kalender) sei ein "huge conversion killer", ohne das steige die Rate um etwa 50 Prozent. | wie oben | Schwach |
| Nachteil eines reinen Kalenders: Wer einen Termin anklickt, das Buchungsformular aber nicht absendet, hinterlässt keine Kontaktdaten. | RevenueHero (Hersteller), keine Zahlen: https://www.revenuehero.io/blog/form-vs-scheduler | Schwach |

**Unbelegt:** Ich habe keine unabhängige Studie gefunden, die eingebetteten Kalender, Popup und Link auf eine externe Buchungsseite direkt vergleicht. Alle Zahlen stammen von Herstellern von Buchungswerkzeugen.

### 3.2 Vorqualifizierung vor der Buchung

* Belegt ist nur das Herstellerargument oben: Fragen und Buchung **in einem Schritt** schneiden besser ab als zwei getrennte Schritte (Chili Piper, schwach).
* Die oft zitierte Zahl "jedes weitere Formularfeld senkt die Rate um 4,1 Prozent (HubSpot-Studie 2024)" habe ich nur in Blogs gefunden, nicht in einer HubSpot-Originalquelle. Unbelegt, nicht verwenden. Beispiel: https://brixongroup.com/en/lead-forms-in-b2b-the-perfect-balancing-act-between-data-depth-and-conversion-rate
* Cal.com kann Vorqualifizierung ohne zweiten Schritt: Buchungsfragen im Buchungsformular und eigene "Routing Forms", die man ebenfalls einbetten kann: "You can embed your Routing Form e.g. `forms/YOUR_FORM_ID`." Quelle: https://cal.com/help/embedding/adding-embed.md (stark, Hersteller-Doku zur eigenen Funktion).

### 3.3 Cal.com: Einbettungsarten (geprüft)

Context7 nannte nur: "inline embed, floating pop-up button, and pop-up via element click" (Quelle dort: https://app.cal.com/settings/platform). Details aus der offiziellen Hilfe (per `curl` gelesen): https://cal.com/help/embedding/adding-embed.md

| Art | Wortlaut Cal.com-Hilfe | Geeignet für |
|---|---|---|
| **Inline** | "Show the embed inline anywhere on the webpage." | Kalender direkt im Preisbereich |
| **Pop-up via element click** | "Show the embed, on click of any element on your webpage, in a popup" | Eigener Button "Erstgespräch buchen", Besucher bleibt auf der Seite |
| **Floating button pop-up** | "Adds a floating button that can be customized and on clicking that the embed shows up in a popup." | Dauerhaft sichtbarer Knopf unten auf jeder Seite |
| **Link** | Einfacher Link auf die Buchungsseite. Quelle: https://cal.com/help/embedding/embed-events | Heutiger Stand |
| **iframe** | "You can embed your Cal.com booking page using an iframe." Quelle: https://cal.com/help/embedding/embed-events | Seiten ohne JavaScript |

Weitere Punkte aus der Doku:

* Einstellbar im Snippet-Generator: Größe, Theme, Anzeige der Termindetails, Markenfarbe, Layout, Text und Position des schwebenden Buttons. Quelle: https://cal.com/help/embedding/embed-snippet-generator.md
* `Cal("preload", { calLink })` lädt die Buchungsseite vorab, damit das Popup sofort aufgeht. Quelle: https://cal.com/help/embedding/embed-instructions.md
* Das Ladeskript gibt es für beide Instanzen. Geprüft per Abruf: `https://app.cal.eu/embed/embed.js` und `https://app.cal.com/embed/embed.js` liefern beide HTTP 200.

### 3.4 Cal.com: Datenfluss und Datenschutz

**Geprüft:**

* Cal.com ist bei Buchungen Auftragsverarbeiter, der Kontoinhaber ist Verantwortlicher. Erfasst werden unter anderem Name, E-Mail, Telefonnummer, Antworten auf Buchungsfragen, Notizen, Gäste. Cal.com Privacy Policy, zuletzt aktualisiert 20.08.2026: https://cal.com/privacy
* Wortlaut der Datenschutzerklärung (per `curl`): "We're a US company and data is processed in the United States. Some subprocessors process it elsewhere. For transfers out of the EEA, UK or Switzerland we rely on Standard Contractual Clauses or an adequacy mechanism such as the EU-US Data Privacy Framework. If you need EU data residency, contact us at privacy@cal.com."
* "No third-party cookies in the product." Werbe- und Analyse-Cookies nur auf der Marketing-Seite. Quelle: https://cal.com/privacy
* Unterauftragnehmer-Liste (Stand 20.08.2026, per `curl` gelesen): https://trust.cal.com/subprocessors . Alle Einträge mit Standort "United States". Für die Einbettung besonders relevant:
  * **Vercel:** "Hosting and CDN for the app and website; website analytics", Daten: "IP addresses, request metadata".
  * **PostHog:** "Product analytics", Daten: "IP and request metadata; events keyed to an opaque ID".
  * **SendGrid (Twilio):** Bestätigungs- und Erinnerungs-E-Mails.
  * **Amazon RDS / S3, Cloudflare:** Datenbank und Speicher.
  * Google Analytics, Dub, X Ads laut Liste "marketing site only, not the app".
* Das Ladeskript von `app.cal.eu` enthält im Code keine Zeichenfolgen `document.cookie`, `localStorage`, `sessionStorage`, `posthog` oder `gtag` (per `grep` geprüft). Den Inhalt des Buchungsfensters (iframe) selbst habe ich nicht geprüft.

**Folgerung für die Datenschutzerklärung** (eigene Ableitung, rechtlich prüfen lassen):

* **Link:** Daten gehen erst an Cal.com, wenn der Besucher klickt und die Buchungsseite öffnet.
* **Inline, Popup oder schwebender Button:** Das Ladeskript wird schon beim Seitenaufruf von Cal.com-Servern geladen. Damit geht die IP-Adresse jedes Besuchers an Cal.com, auch ohne Buchung. Bei Inline lädt zusätzlich sofort die Buchungsseite. Das muss in die Datenschutzerklärung, und es stellt sich die Einwilligungsfrage für externe Inhalte. Ein Popup, das das Skript erst nach Klick lädt, würde das vermeiden. Ob das Standard-Snippet so arbeitet, habe ich nicht geprüft.
* Cookies im Buchungsfenster: Ein GitHub-Eintrag beschreibt ein "UID"-Cookie zum Reservieren eines Termins, das im eingebetteten Zustand als Drittanbieter-Cookie nicht funktionierte. Der Eintrag ist mit einem Pull Request geschlossen. Ob heute im Embed ein Cookie gesetzt wird, ist offen und sollte im Browser nachgesehen werden. Quelle: https://github.com/calcom/cal.diy/issues/19616

**Widerspruch, ungelöst:**

* https://cal.com/europe sagt über Cal.eu: "All data is stored and processed within EU borders".
* https://cal.eu/privacy leitet aber auf https://cal.com/privacy weiter. Dort steht "data is processed in the United States" und EU-Datenhaltung nur auf Anfrage. Die Unterauftragnehmer-Liste zeigt nur US-Standorte. Eine eigene Liste für Cal.eu habe ich nicht gefunden (trust.cal.eu antwortete nicht).
* Welche Unterauftragnehmer bei cal.eu tatsächlich arbeiten und wo, ist damit **nicht belegt**. Klären über privacy@cal.com oder den Auftragsverarbeitungsvertrag im Trust Center (Zugang nur auf Anfrage).

---

## 4. Laufzeitmodelle ohne Preise darstellen

| Aussage | Quelle | Stärke |
|---|---|---|
| Auswertung von 301 Preisseiten-Änderungen bei 24 Firmen, Juli 2026: Jahrespläne tauchen in 57 Prozent auf, ein Umschalter monatlich/jährlich in 33,9 Prozent. Beobachtete Muster: Nutzen-Etikett am Umschalter ("Annual (Save More)"), Umrechnung auf Monatsbetrag, Jahresoption vorausgewählt (18 Prozent). Die Autoren schreiben selbst: "detected diffs with inferred rationale, not measured lift." | Lazyweb Research: https://www.lazyweb.com/research/monthly-vs-annual-billing-toggle-pricing | Schwach bis mittel (Beobachtung, keine Wirkungsmessung) |
| HubSpot kennzeichnet die jährliche Zahlung als "Bestes Angebot". | https://www.hubspot.de/pricing/marketing/enterprise | Beispiel, keine Wirkung belegt |
| moinAI zeigt monatlichen und jährlichen Preis nebeneinander, dazu Mindestlaufzeit pro Paket und "bis zu 15%" Ersparnis. | https://www.moin.ai/preise | Beispiel |
| "Wer den Jahresplan vorauswählt, bekommt 20 bis 30 Prozent mehr Jahrespläne" (Baremetrics). | Nur in Blogs zitiert, keine Originalquelle gefunden | Unbelegt |

**Nicht gefunden:** Keine Studie oder anerkannte Empfehlung dazu, wie man zwei Laufzeitmodelle **ohne Preise** darstellt. Alle Beispiele zeigen Zahlen.

**Mögliche Umsetzung** (eigene Ableitung, nicht belegt):

* Zwei Karten nebeneinander, gleicher Leistungsumfang, Unterschied nur in Zahlungsweise und Einrichtung.
  * Karte "12 Monate, im Voraus bezahlt": "Einrichtung zum halben Preis", Etikett wie "Günstigste Variante".
  * Karte "Monatlich kündbar": "Volle Einrichtung, dafür jederzeit zum Monatsende kündbar".
* Die Ersparnis relativ nennen ("halbe Einrichtung"). Das braucht keinen Eurobetrag und ist ehrlich, weil die Relation für alle Kunden gleich ist.
* Ohne Umschalter. Bei nur zwei Modellen ohne Zahlen hat ein Umschalter nichts, was sich ändert.
* Genaue Kündigungsregel und Zahlungszeitpunkt je Karte in einem Satz. Die Zahl kommt im Angebot nach dem Gespräch.

---

## 5. Rechtliches Deutschland (kurz, keine Rechtsberatung)

### 5.1 Gilt die PAngV für B2B?

**Nein.** Primärquelle, § 1 Abs. 1 PAngV, Wortlaut per `curl`:

> "Diese Verordnung regelt die Angabe von Preisen für Waren oder Leistungen von Unternehmern gegenüber Verbrauchern."

https://www.gesetze-im-internet.de/pangv_2022/__1.html

§ 3 Abs. 1 PAngV (Gesamtpreis), Wortlaut:

> "Wer als Unternehmer Verbrauchern Waren oder Leistungen anbietet oder als Anbieter von Waren oder Leistungen gegenüber Verbrauchern unter Angabe von Preisen wirbt, hat die Gesamtpreise anzugeben."

https://www.gesetze-im-internet.de/pangv_2022/__3.html

Sekundärquellen:

* IHK Berlin, laut Abruf: "Die PAngV gilt nur für Angebote von Waren und Dienstleistungen gegenüber Endverbrauchern (B2C), sie gilt also NICHT für Geschäfte zwischen Unternehmen (B2B)." https://www.ihk.de/berlin/service-und-beratung/recht-und-steuern/wettbewerbsrecht/preisangaben-6023038 (mittel bis stark)
* Kanzlei Plutte, aktualisiert 09.10.2025, laut Abruf: Die Pflichten gelten "nur im Verhältnis Unternehmer / Verbraucher (B2C)". https://www.ra-plutte.de/preisangabenverordnung-2022-was-unternehmen-wissen-muessen/ (mittel bis stark)

### 5.2 Ist "Preis auf Anfrage" zulässig?

* **B2B:** Die PAngV greift nicht (s. o.). Ein Verbot von "Preis auf Anfrage" gegenüber Unternehmen habe ich nicht gefunden.
* **Selbst gegenüber Verbrauchern** ist eine Darstellung ohne Preis nicht automatisch ein Verstoß. Belege:
  * LG München I, 31.03.2015, 33 O 15881/14: Möbelkonfigurator mit "Angebot anfordern" statt Preis war wettbewerbswidrig.
  * OLG München, 17.12.2015, 6 U 1711/15, hob das auf. Originaltext bei shopbetreiber-blog.de: Der Unternehmer müsse "noch keine Preise beim Konfigurator nennen, da es sich noch nicht um ein Angebot im Sinne der Preisangabenverordnung handle."
  * BGH, Beschluss 03.11.2016, I ZR 8/16: Nichtzulassungsbeschwerde zurückgewiesen. Das OLG-Urteil ist damit rechtskräftig.
  * Einschränkung des Autors: "eine Einzelfallentscheidung".
  * Quelle: Martin Rätze, 29.11.2016: https://shopbetreiber-blog.de/2016/11/29/preis-auf-anfrage-zulaessig-oder-nicht (mittel)
* IT-Recht Kanzlei, laut Abruf: Eine Produktdarstellung ohne Preis ist "kein Angebot im Sinne der Preisangabenverordnung, sondern reine Werbung". Sobald aber ein Preis genannt wird, auch ein "ab"-Preis, greifen gegenüber Verbrauchern die Preisangabepflichten. https://www.it-recht-kanzlei.de/preisangaben-verzicht-preis-auf-anfrage-zulaessigkeit.html (mittel; das dort vom Abrufwerkzeug genannte BGH-Aktenzeichen war falsch, s. Vorbemerkung)

### 5.3 Wenn die Seite auch Verbraucher erreicht

* BGH, 29.04.2010, I ZR 99/08: Wer nur an Unternehmer verkaufen will, braucht bei öffentlich zugänglichen Seiten laut Abruf "einen deutlich hervorgehobenen und klar verständlichen Hinweis auf die Beschränkung". Hinweise in AGB oder versteckt in der Beschreibung reichen nicht. Maßgeblich ist das Verständnis der angesprochenen Besucher, nicht die Absicht des Anbieters. Quelle: Martin Rätze, 22.11.2010: https://shopbetreiber-blog.de/2010/11/22/preisangabe-netto-b2b (mittel)
* LG Darmstadt, 19.02.2024, 18 O 18/23: Die PAngV ist anwendbar, wenn ein Angebot "für jedermann zugänglich" ist und keine eindeutige B2B-Beschränkung enthält. Eine Mindestbestellmenge reichte nicht. Quelle: https://shopbetreiber-blog.de/2024/03/21/lg-darmstadt-pangv-auch-anwendbar-wenn-reines-b2b-angebot-fuer-verbraucher-sichtbar-ist (mittel)

**Folgerung für die Logik Agentur** (eigene Ableitung):

* Ein sichtbarer Satz direkt im Preisbereich, etwa "Unsere Angebote richten sich ausschließlich an Unternehmen", nicht nur in den AGB.
* Im Buchungsformular ein Pflichtfeld für den Firmennamen.
* Bleibt der Bereich ganz ohne Zahlen, ist das Risiko auch gegenüber Verbrauchern gering (OLG München).
* Wird ein "ab"-Preis oder eine Spanne ergänzt, schützt nur ein deutlicher B2B-Hinweis davor, dass Gesamtpreis-Regeln für Verbraucher greifen.
* Der ROI-Rechner berechnet den Nutzen beim Kunden, nicht den Preis der Agentur. Er ist damit kein Preiskonfigurator im Sinne des Münchener Falls. Würde er Agenturpreise ausgeben, gilt dasselbe wie beim "ab"-Preis.

---

## Offen und unbelegt (Sammelliste)

1. Keine unabhängige Studie zu Inline-Kalender gegen Popup gegen externen Link. Nur Herstellerzahlen.
2. Keine Studie zur Darstellung von Laufzeitmodellen ohne Preise.
3. "Minus 4,1 Prozent pro Formularfeld" (HubSpot) und "20 bis 30 Prozent mehr Jahrespläne" (Baremetrics): nur in Blogs, keine Originalquelle.
4. Widerspruch Cal.eu (EU-Hosting laut Werbeseite) gegen Datenschutzerklärung und Unterauftragnehmer-Liste (USA). Nicht aufgelöst.
5. Cookies innerhalb des eingebetteten Cal.com-Buchungsfensters nicht geprüft.
6. Die Umfragen von TrustRadius und Gartner beziehen sich auf Software-Käufer, meist größere Firmen. Die Übertragung auf kleine Betriebe ist eine Einschätzung.
7. Gartner-Pressemitteilung 2026 und CXL-Artikel lieferten 403. Die Zahlen stammen aus seriöser Zweitquelle beziehungsweise nur aus Suchergebnis-Auszügen.
