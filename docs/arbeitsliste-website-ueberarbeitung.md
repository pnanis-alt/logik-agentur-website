# Arbeitsliste Website-Überarbeitung

**Stand:** 01.08.2026 · **Arbeitsort:** `website-vollseite/index.html` (Branch `website-final`)
**Grundlage:** Website-Audit vom 29.07.2026 (`fuer-chatgpt/MASSNAHMEN.md`) — dort steht die Begründung je Punkt.

> Die Punkte aus dem Audit sind Vorschläge. Verbindlich ist die Spalte „Entscheidung".
> **Grundsatzentscheidung Pantelis, 01.08.2026:** Alle Punkte werden wie im Dokument übernommen,
> außer den unten einzeln abweichend entschiedenen.

**Werte:** `ja` = wie im Audit umsetzen · `nein` = entfällt · `anders` = mit Notiz · `prüfen` = erst erklären und gemeinsam lösen · `offen` = Rückfrage läuft

🔴 Go-Live-Blocker · 🟡 vor Launch · ⚪ danach

---

## Block 1 — Hero und Kanäle

| Nr | Vorschlag aus dem Audit | Entscheidung | Notiz |
|---|---|---|---|
| 3 | 🔴 „EU-Stack" streichen | ja | **Geprüft 01.08.2026 an `ai-agency-clients-/docs/legal/entwuerfe-2026-06-23/stack-uebersicht-und-vvt.md`: Annahme „nur europäische Anbieter" trifft nicht zu.** Von zehn produktiven Anbietern sind zwei reine EU-Anbieter (Mistral, Brevo). ElevenLabs, OpenAI, Google, Cloudflare, GitHub/Microsoft = USA; Twilio-Verarbeitung US1/USA; make.com EU-Region mit US-Konzernzugriff. Das Dokument sagt es selbst: „der ‚EU-Stack' eliminiert den US-Bezug für Voice nicht vollständig, sondern verlagert ihn". Ersetzt durch „Auftragsverarbeitungsverträge mit allen eingesetzten Diensten" |
| 8 | 🟡 „Übertragbar auf jeden Betrieb mit Kundenkontakt" ersetzen | anders | Neuer Text: **„Individuell anpassbar an Branche & Use Case"** |
| 13 | 🟡 „Alle Kanäle." | nein | Komplett entfernen |
| 15 | 🟡 Menüpunkt „Hörproben" raus | ja | Verschärft: **keine Hörproben auf der Website**, Sektion ebenfalls raus |
| 24 | 🟡 Hero vier Kanäle vs. Grid sechs Module | erledigt | Löst sich mit dem neuen Hero: er zählt Tätigkeiten auf und behauptet keine Vollständigkeit mehr |
| 34 | 🟡 Hero neu aufbauen | ja | |

## Block 2 — KPI-Streifen und Compliance-Badges

| Nr | Vorschlag aus dem Audit | Entscheidung | Notiz |
|---|---|---|---|
| 2 | 🔴 „EU-AI-Act-Deployer-Status dokumentiert" streichen | ja | |
| 4 | 🔴 „4 / 4 Sub-Prozessor-AVVs DSGVO-konform" | nein | Komplett entfernen |
| 5 | 🔴 „wirksam geprüft" streichen | ja | |
| 7 | 🟡 „marktführend" (4×) ersetzen | ja | |
| 9 | 🟡 „Stand: Mai 2026" | ja | |
| 14 | 🟡 „Best-of-Breed / keine Black Box" streichen | ja | |
| 22 | 🟡 „30+ Sprachen" gegen „Eine Sprache" | anders | Umformulieren: **der Kunde wählt die Sprachen aus** — Agents werden nicht pauschal mit 30 Sprachen gebaut |
| 23 | 🟡 „Mo–Fr 9–18 Uhr" unter „24/7" | nein | Komplett entfernen |

## Block 3 — Preise und Konditionen

| Nr | Vorschlag aus dem Audit | Entscheidung | Notiz |
|---|---|---|---|
| 6 | 🔴 „Meist gewählt" | nein | Komplett entfernen |
| 16 | 🔴 „netto zzgl. USt." an jeden Preis | anders | **Kleinunternehmer § 19 UStG.** Statt Netto-Hinweis: Pflichthinweis „keine USt. nach § 19 UStG" unter die Preise. Bewusste Entscheidung: Start als Kleinunternehmer, Wechsel zur Regelbesteuerung erst bei Erreichen der Umsatzgrenze — dann Preise anpassen |
| 17 | 🟡 Monats- und Jahresoption trennen | anders | **Jahres-Abo entfällt komplett.** Nur monatliche Zahlung, monatlich kündbar. Keine Rückerstattung — Setup ist geleistete Arbeit |
| 18 | 🟡 Kombi-Paket Setup-Preis | anders | **Setup Voice Starter und Professional je 799 €** (vorher 999 €). **Kombi-Setup ebenfalls 799 €** als Nachlass fürs Bundle. Chatbot einzeln bleibt 299 € |
| 19 | 🟡 „2 Monate geschenkt" Bedingungen | nein | Komplett entfernen |
| 20 | 🟡 Zwei WhatsApp-Add-ons je 99 € | anders | **„WhatsApp Handoff-Kanal" war ein Fehler** — kein eigenes Produkt, sondern Teil einer Schnittstellen-Anbindung (Buchungs-/Terminlink per WhatsApp). Als Add-on streichen. **WhatsApp KI Agent bleibt** mit Preis, Fertigstellung steht kurz bevor |
| 21 | 🟡 Je Karte: enthalten / nicht enthalten / Limit | anders | Leitsatz **Auskunft = inklusive, Aktion = Add-on**. Zusätzlich muss am Chatbot sichtbar sein, was die Aktiv-Funktionen können und warum sie extra kosten. **Bewertungs-Management 79 € → 49 €/Mon** |
| 26 | ⚪ Setup „Modul-Mix" über Ab-Preisen | ja | „Das Setup beginnt bei 299 €; der genaue Preis richtet sich nach dem Modul-Mix" |
| 46 | 🟡 Setup-Preisfaktoren + Beispielkonfigurationen | anders | Keine Faktorenliste, keine Beispielkonfigurationen. Stattdessen **ein Satz, was im Setup enthalten ist** (Einrichtung bis zum ersten produktiven Anruf) + ein Satz, was gesondert kalkuliert wird |
| 47 | 🟡 Kundenseitiger Aufwand | anders | **Fragenkatalog-Onboarding**, gemeinsam mit dem Kunden durchgegangen. Formulierung branchenneutral, nicht hotelspezifisch |

## Block 4 — Recht und Vertrauen

| Nr | Vorschlag aus dem Audit | Entscheidung | Notiz |
|---|---|---|---|
| 1 | 🔴⚖️ Deployer-Rechtsposition streichen | ja | |
| 25 | 🟡 „Kein Lock-in" gegen „IP-Buyout" trennen | anders | **IP-Buyout komplett von der Seite entfernt.** Keine Pflicht, die Konfiguration herauszugeben; herausgegeben oder gelöscht werden nur die Daten des Kunden. Zweite Fundstelle in der FAQ nachgezogen |
| 28 | 🟡 Famulor: „EWR" ist kein Sitzland | ja | |
| 33 | 🔴 „DSGVO-konform" in Einzelaussagen auflösen | ja | |
| 41 | 🔴 Sub-Prozessoren-Tabelle verlinken | nein | **Geprüft: keine Pflicht zur Veröffentlichung.** Art. 28 verlangt Offenlegung gegenüber dem Kunden, nicht öffentlich. Statt einer öffentlichen Liste sagt die Seite zu, dass die Übersicht vor Vertragsschluss übergeben wird |
| 45 | 🟡 „Testimonials" → „Betriebsnachweis: Hotel Nanis" | ja | |
| 48 | 🟡 AGB verlinken | ja | |

## Block 5 — Versprechen und ROI-Rechner

| Nr | Vorschlag aus dem Audit | Entscheidung | Notiz |
|---|---|---|---|
| 10 | 🟡 „schneller als jedes Kontaktformular" | nein | Löschen |
| 11 | 🟡 „Unklare Fragen landen **immer** bei jemandem" | ja | Neuer FAQ-Satz: „Unklare Fragen werden an dein Team übergeben." |
| 12 | 🟡 „Was hier nicht funktioniert, kommt nicht zu dir." | nein | Komplett entfernen |
| 27 | 🔴 ROI-Rechner: Vorbehalt neben das Ergebnis | ja | |
| 37 | 🟡 Wertungen durch Kriterien ersetzen | ja | |

## Block 6 — Querschnitt über die ganze Seite

| Nr | Vorschlag aus dem Audit | Entscheidung | Notiz |
|---|---|---|---|
| 29 | 🟡 Durchgängig „ich" | anders | **Weder „ich" noch „wir"** — „ich" klingt nach One-Man-Show, „wir" ist falsch. Dritte Formulierung finden |
| 30 | 🟡 Produktnamen vereinheitlichen | ja | |
| 31 | 🟡 Rechtschreibung und Typografie | ja | **Zusatzregel Pantelis, 02.08.2026: keine Gedankenstriche auf der gesamten Website.** Begründung: erzeugt sofort den Eindruck KI-generierter Texte. Umgesetzt 02.08.2026 in `index.html` (16 Stellen), `datenschutz.html` (14), `impressum.html` (3). Zahlenbereiche wie „4–6 Wochen" und Tabellenzellen mit „—" als Platzhalter bleiben |
| 31a | 🟡 **Branchenneutralität** (neu, nicht aus dem Audit) | ja | Die Seite fällt an mehreren Stellen auf Hotels zurück, obwohl nicht nur Hotels bedient werden. Bereits korrigiert: PMS-FAQ, „freie Zimmer" → „freie Kapazitäten", „Booking & PMS" → „Buchung & Termine", „anspruchsvolle Gäste" → „anspruchsvolle Kunden". **Noch zu prüfen:** Seitentitel, Meta-Description und der Über-mich-Bereich (dort ist der Hotelbezug als Herkunft gewollt) |
| 32 | 🟡 Produktionslabels im Frontend? | ja | **Geprüft 01.08.2026: nicht sichtbar.** Stattdessen: zwei H1 pro Seite, unsichtbares H1 „Hero" — wird mitkorrigiert |
| 35 | 🟡 Fachbegriffe erklären oder ersetzen | ja | |
| 36 | 🟡 Überschriften front-loaden | ja | |

---

## Braucht Material oder eine Zusage

| Nr | Was | Entscheidung | Notiz |
|---|---|---|---|
| 39 | 🔴 Hörprobe + anonymisiertes Transkript | nein | **Entschieden 01.08.2026: weder Hörproben noch Transkript-Beispiele auf der Website.** Folge: Betriebsnachweis stützt sich allein auf Punkt 40 und 45 |
| 40 | 🟡 Betriebszahlen | prüfen | |
| 42 | 🟡 PMS-Systeme namentlich | anders | Nicht alle PMS prüfbar. Formulierung: nicht ahnungslos klingen, aber auch nicht „alle funktionieren" zusagen |
| 43 | 🔴 Testfallbasierte Abnahme | nein | Komplett raus, auch die abgespeckte Nachbesserungs-Zusage. Zu unscharf für jetzt, später erneut aufgreifen. **Folge: die Seite enthält keine Risikoumkehr** |
| 44 | 🔴 Ausfall- und Vertretungskonzept | nein | Komplett entfernen |

## Recht — eigener Arbeitsschritt

| Nr | Was | Entscheidung | Notiz |
|---|---|---|---|
| 49 | 🔴 KI-Ansage vor der Interaktion | anders | Fester Wortlaut: *„Hallo, dies ist der KI-Sprachassistent von Hotel Nanis. Dieses Gespräch wird zur Qualitätssicherung transkribiert. Wie kann ich Ihnen helfen?"* |
| 50 | 🔴 Art. 4 KI-VO (KI-Kompetenz) | prüfen | „Muss ich das wirklich?" — an offiziellen Quellen prüfen |
| 51 | 🟡⚖️ Impressum und Cookie-Consent der eigenen Seite | ja | |
| 52 | ⚪ Art. 50 Abs. 2: Kennzeichnung synthetischer Audioinhalte | prüfen | |
| 54 | ⚪ Gesprächsaufzeichnung § 201 StGB | anders | **Keine Audio-Aufzeichnung, nur Transkript.** Rechtsfolge trotzdem prüfen |

## Nach Launch

| Nr | Was | Entscheidung | Notiz |
|---|---|---|---|
| 38 | ⚪ Anti-Claim „Nicht geeignet für …" | nein | Komplett raus. Entschieden 01.08.2026: überflüssig. Folge: Position 5 der neuen Reihenfolge entfällt |
| 53 | ⚪ Barrierefreiheit (BFSG) | nein | Nicht einschlägig für Logik-Agentur (B2B + Kleinstunternehmen). Produktseitig nicht weiterverfolgt |

## Umbau der Seitenreihenfolge (Entscheidung 01.08.2026)

Anlass: Wettbewerbsanalyse peter-krause.net (`ai-agency-clients-/docs/recherche/`). Die eigene Seite wirkt zu verkäuferisch — Preise stehen an Position 6 von 13, Kaufappelle stehen dicht, Wertungen statt Beschreibungen.

**Entschieden:** Gleiche Inhalte, neue Reihenfolge. Kein Umbau auf eine Seite je Produkt (wurde erwogen und verworfen — verzögert den Launch).

| Neu | Herkunft | Status |
|---|---|---|
| 1 Hero (Problem zuerst) | Hero, umgebaut | Punkt 34 |
| 2 Was es kann | Modul-Grid | unverändert |
| 3 Wie es abläuft | **neuer Text** | entschieden: wird geschrieben; speist sich aus Punkt 46 + 47 |
| 4 Betriebsnachweis Hotel Nanis | „Testimonials" + drei Sätze aus „Über mich" | Punkt 45 |
| 5 Compliance und Nachweise | „Vier Anker" + KPI-Reste + „Integrationen" + Zertifikate | Punkt 33, 41 |
| 6 Preise | Preisblock | fertig entschieden, Freigabe steht aus |
| 7 ROI-Rechner | unverändert, entschärft | Punkt 27 |
| 8 FAQ | unverändert | Punkt 11 |
| 9 Kontakt | Schluss-CTA + Footer | — |

*„Für wen es nicht passt" war als Position 5 vorgesehen und wurde mit Punkt 38 verworfen. Die Seite hat damit neun Abschnitte statt bisher dreizehn.*

**Vier Abschnitte werden aufgelöst, Inhalte verteilt:**
- „Warum Logik-Agentur" (Value-Quadrant, 4 Karten)
- KPI-Streifen — trägt nach den Streichungen (4/4 AVVs raus, Mo–Fr raus) mit zwei verbleibenden Kacheln nicht mehr
- „Über mich" — **entschieden: kein eigener Bereich.** Inhalt wandert dorthin, wo auch die Zertifizierungsnachweise hinsollen
- „Integrationen" — Überschrift fällt ohnehin (Punkt 14)

### Zertifikate und Person (Entscheidung 01.08.2026)

**Grundsatz:** Keine Zertifikatswand, kein Menüpunkt „Zertifizierungen", keine Formulierung „zertifizierte Expertise", keine Anbieterlogos.

- **Harvard:** Textnennung zulässig, **Wappen und Logo nicht**. Harvard Business School Online untersagt Teilnehmern die Logo-Nutzung; die Namensrichtlinie erfasst jede Verwendung, die Billigung oder Förderung nahelegt.
- **Keine nackte Markenzeile** („Google · IBM · Harvard Online · …"). Unbestimmte Blickfangwerbung mit bekannten Marken ohne aufklärenden Hinweis ist das Irreführungsrisiko — nicht die Konkretheit. Stattdessen **exakte Bezeichnungen: Kursname, Anbieter, Jahr**.
- **Umsetzung:** kurze Zeile im Footer, dahinter unauffälliger Link auf eine Unterseite mit den exakten Bezeichnungen. Optisch knapp, rechtlich vollständig.
- **Framing über Art. 4 KI-VO statt über Expertise.** Beschreibt Pflichterfüllung statt Kompetenzbehauptung und ist damit nicht angreifbar. ⚠️ **Kollisionsprüfung nötig:** Eine Formulierung wie „Als Betreiber von KI-Systemen …" führt die Rollenzuschreibung wieder ein, die Punkt 1 und 2 gerade entfernen. Rolle nicht behaupten, Pflicht beschreiben.
- Geltung von Art. 4 KI-VO ist über Punkt 50 noch an offiziellen Quellen zu prüfen, bevor die Aussage öffentlich auf die Seite geht.

**Person:** Kein eigener „Über mich"-Bereich, aber die Person bleibt sichtbar — **drei Sätze über betriebliche Praxis** im Betriebsnachweis. Begründung: Bei einem Einzelunternehmen ohne externe Referenzkunden ist die Person der einzige Vertrauensanker. Nicht laienhaft wirkt der Abschnitt selbst, sondern Lebensgeschichte und Motivation darin — die entfallen.

### Portraitbild (Entscheidung 01.08.2026)

**Entschieden: Das KI-generierte Bild kommt auf die Seite.** Ausgetauscht gegen das bisherige `assets/portrait.jpg`, das ebenfalls keine echte Fotografie ist.

Vor der Entscheidung angemerkt und von Pantelis bestätigt:
- Art. 50 KI-VO knüpft an die **Veröffentlichung**, nicht an das Erzeugungsdatum. Die Annahme „vor dem 2. August erzeugt, also nicht betroffen" trägt nicht. Es gibt keinen Bestandsschutz für erzeugte Inhalte; die Übergangsregeln betreffen KI-Systeme, nicht deren Ausgaben. Genaue Reichweite inkl. „AI-Omnibus-Schonfrist" in Runde D zu klären.
- Unabhängig davon: ein generiertes Portrait als Foto der eigenen Person ist eine irreführende Angabe nach § 5 UWG — stichtagsunabhängig.
- Spannungsverhältnis zur Gesamtlinie der Überarbeitung (belegen statt behaupten), aus der heraus „100 % DSGVO", „wirksam geprüft", „marktführend", „4/4 AVVs" und „EU-Stack" entfernt wurden.

Umsetzung: Originaldatei `Gemini_Generated_Image_…png` **aus dem Repo entfernt** (liegt unter `/Users/pantelis/Logik Agentur/`), damit der Dateiname nicht öffentlich wird. Neu erzeugt als `portrait.jpg` (151 KB) und `portrait.webp` (49 KB), je 800 × 1067. **Alt-Text bewusst neutral** („Porträtbild: Person mit Laptop an einem Arbeitstisch") — er behauptet keine Identität. Rückgängig zu machen durch Austausch der beiden Dateien.

**Hotel Nanis ist eine eigene GbR.** Die Eigenbeteiligung muss im Text erkennbar sein („im eigenen Hotelbetrieb erprobt"), sonst ist es eine Scheinreferenz. Verstärkt Punkt 45.

**Zertifikatsliste (Stand 01.08.2026).** Einordnung: durchweg Online-Kurse im Selbststudium, überwiegend kostenlos, ohne Prüfungsaufsicht. Tragen **nicht** als „zertifizierte Expertise", tragen **sehr wohl** als Nachweis laufender Weiterbildung nach Art. 4 KI-VO. Zehn von zwölf aus den letzten sechs Monaten — für eine Expertise-Behauptung ein Nachteil, für „Qualifikation aktuell gehalten" genau das Geforderte.

Auf die Unterseite, in dieser Reihenfolge:

| # | Exakte Bezeichnung | Anbieter | Datum |
|---|---|---|---|
| 1 | EU AI Act Essentials | KI-Campus | Feb. 2026 |
| 2 | Agentic AI Foundations: Business Risks and Applications | Harvard Online | 2026 |
| 3 | KI.WI Kompetenzbildungsprogramm Region Hannover | Region Hannover, Wirtschafts- und Beschäftigungsförderung | Nov. 2025 |
| 4 | Elements of AI | University of Helsinki | Feb. 2026 |
| 5 | Diploma in GDPR and Data Protection | Alison | Apr. 2026 |
| 6 | Google AI Fundamentals | Google | Feb. 2026 |
| 7 | AI for Data Analysis | Google | Feb. 2026 |
| 8 | Make Foundation | Make | Apr. 2026 |
| 9 | API Security Fundamentals 2025 | APIsec University | März 2026 |

**Nicht genannt** (zulässig, weil die Zeile „Ausgewählte Programme" heißt und keine Vollständigkeit behauptet):
Vibe Coding 101 with Replit (DeepLearning.AI) — Kursname wirkt im B2B-Kontext unseriös · Digitale Gerechtigkeit (Hasso Plattner Institute) — thematisch abseits · Cybersecurity (Digital SkillUp) — unspezifisch neben Nr. 9.

**Auflagen bei einzelnen Nachweisen:**
- **Harvard Online:** ausschließlich Textnennung. **Kein Wappen, kein Logo, keine Wortmarke als Bild.** Keine abgeleiteten Formulierungen („Harvard-zertifiziert", „Harvard-Ausbildung", „Harvard-Experte"). Nicht in Seitentitel, Meta-Description oder Überschriften. Steht bewusst auf Platz 2, damit der Abschnitt nicht vom bekanntesten Namen angeführt wird.
- **Alison:** nur unter der englischen Originalbezeichnung „Diploma in GDPR and Data Protection". Keine Übersetzung mit „Diplom" — das läse sich wie ein akademischer Abschluss.

---

## Zum Anwalt, gebündelt

Punkte 1, 33 und 51 plus die fünf offenen Gates aus dem Juni-Audit.

---

## Fortschritt

| Block | Entschieden | Umgesetzt | Commit |
|---|---|---|---|
| 1 Hero und Kanäle | 6 von 6 | **ja, 01.08.2026** | steht aus |
| 2 KPI und Badges | 8 von 8 | **ja, 01.08.2026** | steht aus |
| 3 Preise | 10 von 10 | **ja, 01.08.2026** | steht aus |
| 4 Recht und Vertrauen | 7 von 7 | **ja, 02.08.2026** (außer 48) | steht aus |

### Datenschutz-Abschnitt — Fassung v3 (02.08.2026)

Der Abschnitt wurde dreimal überarbeitet. Fassung v2 wurde durch eine externe Zweitmeinung geprüft und mit 6,5/10 bewertet; vier Kritikpunkte wurden als berechtigt übernommen:

1. **Drittlandtransfer fehlte.** „Sitz und Speicherort" genügt nicht — ein US-Anbieter kann in Frankfurt hosten und trotzdem aus den USA zugreifen. Ergänzt um Vertragspartei, Rolle, Hostingregion und Transfergrundlage.
2. **„Der Grenzsatz begrenzt die Haftung" war falsch.** Ein Website-Hinweis ändert die gesetzliche Haftungsverteilung nicht (Art. 82). Der Satz bleibt — als Rollenklärung und Erwartungsmanagement, nicht als Haftungsbegrenzung.
3. **„Verantwortlicher bleibt dein Betrieb" war einseitig.** Ersetzt durch beidseitige Zuordnung: Kunde verantwortet Zweck, Rechtsgrundlage und Gästeinformation; Logik-Agentur die eigenen Pflichten als Auftragsverarbeiter.
4. **Karte „Auch offene Punkte stehen in der Liste" gestrichen.** Offene Punkte im Stack (Cloudflare-DPA = Go-Live-Blocker, n8n ungeprüft, AVV Hotel↔Agentur fehlt) sind kein Verkaufsargument. Ersetzt durch Speicher- und Löschfristen.

Nicht übernommen wurde die vorgeschlagene Endfassung im Wortlaut: sprachlich Vertragsanhang statt Kundenseite. Substanz übernommen, Register beibehalten.

Ebenfalls korrigiert: Die Begründung „Werbung mit gesetzlichen Selbstverständlichkeiten ist irreführend" war zu absolut. Tragendes Argument gegen „DSGVO-konform" ist die **Reichweite** der Aussage — sie umfasst Stack und Kundenkonfiguration und müsste dauerhaft belegbar sein.

### Vor dem Livegang zwingend erforderlich

Die Seite sagt Unterlagen zu, die es kundenfertig noch nicht gibt. Erst veröffentlichen, wenn erfüllt:

1. **AVV Hotel Nanis ↔ Logik Agentur abgeschlossen** — in `stack-uebersicht-und-vvt.md` als KRITISCH geführt, bislang nicht erfolgt.
2. Jeder Anbieter mit **exakter juristischer Vertragspartei und Rolle** erfasst (Auftragsverarbeiter, Unterauftragsverarbeiter oder eigener Verantwortlicher — Twilio und Meta sind Hybridrollen).
3. **AVV bzw. passende Vertragsgrundlage je Anbieter geprüft** — derzeit 4 von 9 ohne signiertes DPA.
4. **Drittlandtransfers dokumentiert** inkl. DPF-Status mit Abrufdatum, SCC und möglicher Zugriffe.
5. **Speicher-, Export- und Löschmöglichkeiten technisch geprüft.**
6. **Prozess für Wechsel von Unterauftragsverarbeitern** steht, inkl. Frist und Widerspruchsrecht im AVV.
7. **Gästeinformation für Telefon, Chat und Mail vorbereitet** — hängt mit Punkt 49 zusammen; die Verkaufsseite ersetzt die Information der Betroffenen nicht.
8. Aus `stack-uebersicht-und-vvt.md` eine **kundenfertige Fassung** erstellt (derzeit Entwurf mit offenen Feldern).

**Außerhalb der Website, aber daran hängend:** Rechnungen müssen den Hinweis auf die Steuerbefreiung nach § 19 UStG tragen und dürfen keine Umsatzsteuer ausweisen. Betrifft Rechnungsvorlage und Buchhaltung, nicht `index.html`.

### FAQ-Prüfung (02.08.2026)

Alle sieben Antworten geprüft, sieben Korrekturen. Zwei davon aus der externen Zweitmeinung nachgezogen:
- **„ohne Zusatzkosten"** bei Kündigung war eine offene Zusage für beliebig aufwendigen Datenexport. Ersetzt durch „Eine gesonderte Löschgebühr fällt nicht an." plus Vorbehalt gesetzlicher Aufbewahrungspflichten.
- **PMS ohne Anbindung:** „arbeitet mit hinterlegten Informationen zu Zimmern, Preisen und Verfügbarkeiten" war eine technisch nicht haltbare Zusage — dynamische Preise und Verfügbarkeiten kann ein Agent ohne angebundene Datenquelle nicht zuverlässig nennen.
- Lieferzeit läuft jetzt ab Eingang des ausgefüllten Fragenkatalogs, nicht ab Vertragsschluss.
- Übergabe unklarer Fragen an die vereinbarte Übergaberegel gebunden statt pauschal zugesagt.
- **IP-Buyout** stand in der FAQ noch, nachdem es aus dem Compliance-Abschnitt entfernt war (Punkt 25) — entfernt.
| 5 Versprechen und ROI | 4 von 5 · 1 offen | — | — |
| 6 Querschnitt | 6 von 6 | — | — |
| Material | 2 von 5 · 2 prüfen · 1 offen | — | — |
| Recht | 2 von 5 · 3 prüfen | — | — |
| Nach Launch | 1 von 2 · 1 offen | — | — |
