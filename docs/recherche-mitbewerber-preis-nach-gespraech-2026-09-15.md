# Mitbewerber-Recherche: Preisbereich ohne feste Preise

Abrufdatum aller Quellen: 2026-09-15
Zweck: Vorlage für den neuen Preisbereich der Logik Agentur (Preis erst nach Erstgespräch, Fair-Use, zwei Vertragsarten).

## Methode und Grenzen

- Firecrawl war nicht nutzbar: Jeder Abruf endete mit "Insufficient credits". Stattdessen wurden die Seiten per curl geladen und in Text umgewandelt. voiceagenten.com (blockiert curl mit 403) und talkee.chat (Seite entsteht erst im Browser) wurden über Chrome gelesen.
- Eingeklappte FAQ-Antworten und nachgeladene Inhalte fehlen teilweise. Das ist pro Anbieter vermerkt ("nicht gefunden" heißt: im abgerufenen Inhalt nicht vorhanden, nicht zwingend: existiert nicht).
- Wörtliche Zitate sind unverändert übernommen, auch wenn sie Gedankenstriche enthalten.
- Gesprächsdauer bei Cal.com wurde aus den öffentlichen Buchungsseiten gelesen (Feld "length").
- **synapsus.ai ist nicht auswertbar:** www und ohne www, /de, /en, sitemap.xml und synapsus.de liefern alle 404. Chrome durfte die Domain nicht öffnen.
- **Abweichung zur früheren Recherche:** FoxifAI und Agentur PHILIPP zeigen inzwischen Zahlen ("ab"-Preise bzw. volle Preise für das KI-Telefon).

Ausgewertet: 18 Anbieter aus der Liste (ohne synapsus) plus 2 transparente Vergleichsanbieter.

## Übersicht

| Anbieter | Voice | Eigener Preisbereich | Was statt Preis | Weg zum Gespräch | Dauer / kostenlos | Laufzeit, Rabatt, Fair-Use |
|---|---|---|---|---|---|---|
| hotel-telefonbot.de (Hotel) | ja | nein | nichts, dafür "Kostenrechner" (Quiz) | Kontaktformular /beratung | ca. 30 Min, kostenlos | nicht gefunden |
| ki-hotelassistent.de (Hotel) | ja (Erweiterung) | nein | Abschnitt "Kostenrechnung" ohne Zahl; Konfigurations-Fragebogen mit Budgetfrage | Kontaktformular, Telefon | nicht gefunden | AGB: 12 Monate, Verlängerung 12 Monate |
| voiceagenten.com | ja | nein | FAQ "Was kostet so ein Projekt?" ohne Zahl | Calendly 30min | 30 Min (laut Link), "kostenlos" nicht gefunden | nicht gefunden |
| ki-voice-agenten.de | ja | nein | nichts | Demo-Funnel flow.cmcn.de, Formular, Telefon, WhatsApp | nicht gefunden | nicht gefunden |
| synapsus.ai | ? | nicht auswertbar (404) | | | | |
| deinekiagentur.de | ja | nein | nichts | Cal.com | 30 Min, "kostenlos" nicht gefunden | nicht gefunden |
| ennoia.ai | nein | ja, für MENTIS | MENTIS mit Zahlen; Einzelprojekte ohne Zahl | Cal.com | 30 Min, kostenlos; "Angebot innerhalb von 24 Stunden" | Credits pro Monat, sonst nicht gefunden |
| fullcircleautomations.de | ja | nein | "Kosten gibt es bei uns immer auf Anfrage"; Kostenblöcke erklärt | Calendly, Formular | 30 Min (Text Voice-Seite), kostenfrei | nicht gefunden |
| ai-union.de | ja | nein | FAQ-Frage "Was kostet Ihre Unterstützung?", Antwort nicht abrufbar | Cal.com | 15 Min, "Es ist kostenlos." | nicht gefunden |
| peter-krause.net | ja | nein | nichts | Kontaktformular | "Kostenlose Erstberatung", Dauer nicht gefunden | nicht gefunden |
| neurakey.de | ja (KI-Seite) | nein | Preisspannen in FAQ | Formular, Online-Kalender erwähnt | 30 bis 45 bzw. 30 bis 60 Min, kostenlos | "keine Jahresverträge", 3 bis 6 Monate (Marketing) |
| level-worker.de | nein (E-Mail/Prozesse) | nein | "niedrigen vierstelligen Bereich", Festpreis; ROI-Rechner | Calendly | 30 Min, kostenlos | nicht gefunden |
| prozessgesteuert.de | nein | nein | Prozesskosten-Rechner, 4-Schritte-Angebotsformular | Brevo-Kalender eingebettet, Formular | 30 Min, unverbindlich | Geld-zurück-Garantie |
| chatbotmanufaktur.de | nein (Shopify-Chat) | nein | nichts | Calendly eingebettet mit Vorab-Fragen | Dauer nicht gefunden, "gratis" | nicht gefunden |
| voisento.de | ja | nein | nur "35 Cent pro Gesprächsminute" | Formular, Testanruf per Rückruf, Telefon | nicht gefunden | nicht gefunden |
| foxifai.com | ja | teilweise | "Ab 1.920 € Setup · ab 100 €/Monat" | Cal.com | 30 Min, kostenlos | "jährlich kündbar" |
| agenturphilipp.de | ja | ja | KI-Telefon mit Zahlen; KI-Marathon-Pakete ohne Zahl | meetergo | 15 Min, kostenlos | "Laufzeit ... halten wir im Angebot fest"; Freiminuten |
| ki-business-agenten.de | nein (Workshops) | nein | ausführliche Begründung, warum kein Preis | Bewerbungs-Quiz, dann Termin | 20 Min | nicht gefunden |
| talkee.chat | ja (Selbstbedienung) | nein, nur in der App | Einrichtungs-Assistent statt Preis | App, "Erstgespräch buchen" in der App | nicht gefunden | im App-Code "Monatlich kündbar" |
| **Vergleich:** digitalapes.de/preise | ja | ja | voll transparent, 2 Bausteine, Rechner | Cal.com eingebettet, Telefon-Demo | 30 Min, kostenlos | 12 Monate, Jahreszahlung günstiger |
| **Vergleich:** fonio.ai/de/preise | ja (Plattform) | ja | Tarife, Scale "Individuelle Preise" | Selbst anmelden, Demo buchen | nicht geprüft | jährlich 20 Prozent günstiger, 30 Tage Geld zurück |

## Detail pro Anbieter

### 1. hotel-telefonbot.de (DigiRift GmbH, Hamburg)
URLs: https://hotel-telefonbot.de/, /beratung, /check, /so-funktionierts, /demo, /leitfaden
1. Preisbereich: keiner. In der Navigation gibt es "Kostenrechner" (/check).
2. Statt Preis: /check ist ein Quiz "Frage 1 von 4", erste Frage "Wie viele Anrufe erhält Ihr Hotel pro Tag?" mit Auswahl "Unter 30", "30–80", "80–150", "Über 150". Ergebnis nicht abgerufen (Folgeschritte laufen erst im Browser).
3. Pakete: keine.
4. Buttons: "Kostenlose Beratung", "Kostenloses Erstgespräch" (mit Zusatz "Kostenlos & Unverbindlich"), "Jetzt starten", alle zu /beratung. Dort Kontaktformular (Name, E-Mail, Hotelname, Nachricht), Button "Nachricht senden". Außerdem "Hörprobe anhören" (/demo, Audio-Beispiele) und Telefon.
5. Erstgespräch: Ablauf auf /beratung: "1.Wir melden uns innerhalb von 24 Stunden 2.Kostenloses Erstgespräch (ca. 30 Min) 3.Individueller Vorschlag für Ihr Hotel". /so-funktionierts: "30 Minuten, unverbindlich".
6. Laufzeit, Rabatt, Fair-Use: nicht gefunden.
7. Vertrauen: 3-Schritte-Ablauf ("Kostenloses Erstgespräch", "Konfiguration & Einrichtung", "Testphase & Go-Live"), FAQ ohne Kostenfrage, kostenloser Leitfaden gegen E-Mail ("der Weg zu Ihrem Bot in 5 Wochen").

### 2. ki-hotelassistent.de (KI Experten)
URLs: https://ki-hotelassistent.de/, /demo, /kontakt/, /konfiguration/, AGB https://kiexperten-ai.de/agb/
1. Preisbereich: keiner. Es gibt einen Abschnitt "Kostenrechnung", aber nur mit Text, ohne Zahlen.
2. Statt Preis: "Der KI-Concierge spart durch die Automatisierung häufig gestellter Fragen erhebliche Personalkosten ein." Die FAQ erklärt den Unterschied "GPT-4o-mini & GPT-4o" (deutet Stufen an, ohne Preis).
3. Pakete: keine sichtbar.
4. Buttons: "HIER ZUR DEMO!", "Hier zur Testversion!", "JETZT Anfragen", "Melden Sie sich bei uns!". Demo-Seite: "Buchen Sie einen Termin und erhalten Sie eine personalisierte KI-Demo!" (ein Kalender war im abgerufenen Inhalt nicht zu sehen). Kontakt: Formular plus Mobilnummer. Die angezeigte Nummer (+49 176 551 145 77) weicht vom hinterlegten Telefonlink (+49 173-2195087) ab.
5. Erstgespräch: Dauer und "kostenlos" nicht gefunden.
6. Laufzeit: nur in den AGB: "Mindestlaufzeit von 12 Monaten ... verlängert sich der Vertrag automatisch um jeweils weitere 12 Monate ... Kündigungsfrist beträgt drei Monate". Rabatt, Fair-Use: nicht gefunden.
7. Besonderheit: /konfiguration/ ist ein langer Fragebogen für den Voice-Agent (Zielgruppe, Stimme, Wenn-Dann-Logik für Buchung, Tagung, Beschwerde). Dort steht auch: "Welche Budgetvorstellungen haben Sie für Ihre gewünschte Lösung?" (Freitextfeld).

### 3. voiceagenten.com (Stuttgart), per Chrome gelesen
URL: https://www.voiceagenten.com
1. Preisbereich: keiner.
2. FAQ: "Was kostet so ein Projekt? Das hängt vom Umfang ab, denn wir entwickeln die individuell beste KI-Lösung für Sie. Wir starten oft mit kleinen, klar umrissenen Projekten – transparent kalkuliert und ohne versteckte Kosten."
3. Pakete: keine.
4. Buttons: "Jetzt Beratungsgespräch vereinbaren" und "Kontakt" führen beide zu https://calendly.com/paulos-voiceagenten/30min. "Demo" führt zu einem LinkedIn-Beitrag.
5. Erstgespräch: 30 Minuten laut Calendly-Link. "Kostenlos" nicht gefunden.
6. Laufzeit, Rabatt, Fair-Use: nicht gefunden.
7. Vertrauen: Kennzahlen ("In unter 25 Tagen liefern wir im Schnitt erste greifbare Lösungen"), Kundenstimmen, Presse ("Die ZEIT").

### 4. ki-voice-agenten.de (FAHR & PARTNER, Frankfurt)
URLs: https://ki-voice-agenten.de/, https://flow.cmcn.de/home-1054
1. Preisbereich: keiner.
2. Statt Preis: nichts. FAQ ohne Kostenfrage.
3. Pakete: keine.
4. Buttons: "Jetzt DEMO starten", "Jetzt Demo anfordern", "Demo buchen", "Erfahren Sie mehr", alle zu einer externen Funnel-Seite (Überschrift "10x mehr Neukunden Termine mit unserem bewährten K.I. Telefonbot", Button "kostenlose Demo"). Auf der Startseite Formular mit Captcha ("Nachricht absenden"), Telefon, WhatsApp.
5. Erstgespräch: nicht gefunden.
6. Laufzeit, Rabatt, Fair-Use: nicht gefunden.
7. Vertrauen: anonyme Kundenstimmen ("Ein Lebensretter für unser Unternehmen!"), "seit über 33 Jahren".

### 5. synapsus.ai
Nicht auswertbar. Alle Varianten liefern "404 - Page not found" (siehe Methode).

### 6. deinekiagentur.de
URLs: https://deinekiagentur.de/, /voice-agents/, /faq/, /code-formular-ki-agentur/
1. Preisbereich: keiner.
2. Statt Preis: nichts. Voice-Seite: "Jeder Voice Agent wird individuell für Ihr Unternehmen entwickelt und programmiert."
3. Pakete: keine.
4. Buttons: "Termin buchen" / "TERMIN BUCHEN" zu https://cal.com/deinekiagentur/call-mit-deinekiagentur-webseite. Demo-Voice-Agent über Formular ("Senden Sie uns Ihre Kontaktdaten – wir melden uns kurzfristig.").
5. Erstgespräch: 30 Minuten (Cal.com). "Kostenlos" nicht gefunden.
6. Laufzeit, Rabatt, Fair-Use: nicht gefunden.
7. Vertrauen: Medienlogos mit Links (Handelsblatt-Presseportal, FOCUS, Forbes Österreich), Kundenstimmen mit Branche (u. a. "Hotelie").

### 7. ennoia.ai (Berlin)
URLs: https://ennoia.ai/, /komplettsystem-ki-automatisierung/, /bist-du-berait-check/
1. Preisbereich: ja, auf der MENTIS-Seite: "Die drei MENTIS Flatrate-Tarife".
2. Zahlen: "nur 2.900€ / Monat" (160 Umsetzungscredits), "nur 4.900€ / Monat" (300 Credits), "nur 9.900€ / Monat". Satz dazu: "Alle Tarife sind Flatrate-Retainer: transparente Kosten, planbares Budget, kein verstecktes Pricing." Einzelne KI-Lösungen ohne Zahl ("Beratungsgespräch vereinbaren").
3. Unterscheidung: Credits pro Monat ("160 Credits = 2-3 Microflows pro Monat"), Anzahl Jour-fixe-Calls, Vorlagen-Zugang.
4. Buttons: "Kostenloses Erstgespräch", "Beratungstermin buchen", "Gespräch vereinbaren →", "MENTIS START anfragen", "Jetzt kostenlosen Check buchen", alle zu Cal.com.
5. Erstgespräch: 30 Minuten. Check-Seite: "100% kostenlos", "Nur 30 Minuten", "✓ Angebot innerhalb von 24 Stunden (falls gewünscht)", "Falls MENTIS für Dich passt, erhältst Du innerhalb von 24 Stunden ein konkretes Angebot."
6. Laufzeit, Rabatt: nicht gefunden. Kein Fair-Use-Begriff, aber Kontingent über Credits.
7. Vertrauen: Gründerprofile, Blog, FAQ "Ist der Check wirklich kostenlos?".

### 8. fullcircleautomations.de (Switch-Too GmbH, Euskirchen)
URLs: https://www.fullcircleautomations.de, /ai-voice-agent, /kontakt
1. Preisbereich: keiner.
2. Startseiten-FAQ "Was kostet ein Projekt?": "Schreib uns Deinen Use-Case und Du bekommst eine konkrete Schätzung. Kosten gibt es bei uns immer auf Anfrage." Voice-Seite: "Die Kosten setzen sich aus drei Blöcken zusammen: einmalige Einrichtung, monatliche Wartung und Gesprächsminuten beim Anbieter. ... Wir erstellen Dir nach einem kurzen Workshop ein transparentes Festpreisangebot."
3. Pakete: keine. Es werden zwei Plattformen verglichen (Fonio.ai, Vapi.ai mit "Minutenpreise ab ca. 0,05 – 0,10 €").
4. Buttons: "Termin buchen", "Kostenfreie Erstanalyse buchen", "Kostenloses Erstgespräch buchen" zu https://calendly.com/fullcirclewebdesign/einstieg; "Projekt-Anfrage stellen", "Schreibe uns!", "Zum Kontaktformular" zum Formular.
5. Erstgespräch: "Lass uns in 30 Minuten durchgehen, wie Dein AI Voice Agent aussehen könnte". Dauer im Calendly selbst nicht abrufbar.
6. Laufzeit, Rabatt, Fair-Use: nicht gefunden. Erwähnt: "In den Wartungspaketen ist eine Reaktionszeit fest zugesichert."
7. Vertrauen: Zeitrahmen ("In 1–2 Wochen live"), DSGVO-Erklärung pro Plattform.

### 9. ai-union.de
URL: https://www.ai-union.de/
1. Preisbereich: keiner.
2. FAQ-Frage "Was kostet Ihre Unterstützung?" vorhanden. Die Antwort ist eingeklappt und war im ausgelieferten Inhalt nicht enthalten: nicht gefunden.
3. Pakete: keine.
4. Buttons: "Jetzt kostenloses Erstgespräch sichern", "Erstgespräch sichern", "Erstgespräch", alle zu https://cal.com/maxim-rother-9qllyu/erstgesprach-ki.
5. Erstgespräch: 15 Minuten (Cal.com). "Buchen Sie jetzt Ihr kostenloses Erstgespräch" und "Es ist kostenlos."
6. Laufzeit, Rabatt, Fair-Use: nicht gefunden.
7. Vertrauen: Video-Fallstudien (u. a. KI-Telefonassistent), Ablauf "1. Kostenloses Erstgespräch 2. Workshop 3. Implementierung".

### 10. peter-krause.net (Erding / Braunau)
URLs: https://peter-krause.net/, /services/voice-ai-agents/, /kontakt/
1. Preisbereich: keiner.
2. Statt Preis: nichts. Zielgruppe: "Für Unternehmen ab 10 Mitarbeitenden ohne Obergrenze."
3. Pakete: Stufen ohne Zahl im Prozess ("Ihr erster AI Agent", danach "AI System").
4. Buttons: "Kostenlose Erstberatung / Jetzt Termin vereinbaren" zu /kontakt/ (Formular, Einwilligung zur Weitergabe an eine Partneragentur), "Potenzialgespräch anfragen", "Kostenlose KI-Potenzialanalyse", "Get in Touch".
5. Erstgespräch: kostenlos, Dauer nicht gefunden.
6. Laufzeit, Rabatt, Fair-Use: nicht gefunden.
7. Vertrauen: 3-Schritte-Prozess, eigenes Buch, Kundenstimmen mit Initialen.

### 11. neurakey.de (Köln)
URLs: https://www.neurakey.de, /ki-agentur-koeln, /beratung, /kontakt
1. Preisbereich: keiner.
2. Preisspannen in der FAQ der KI-Seite: "Eine KI-Strategie-Beratung ... liegt bei 500 bis 1.500 € einmalig. Die Implementierung eines konkreten Use Cases ... beginnt bei 2.000 bis 6.000 € Setup." Laufende Betreuung: "rechnen wir individuell ab". Marketing-FAQ: "Bevor wir über Zahlen sprechen, schauen wir uns Dein Potenzial an ... Den konkreten Rahmen bekommst Du nach dem Erstgespräch".
3. Pakete: keine.
4. Buttons: "Kostenlose Potenzialanalyse anfragen", "Kostenloses Marketing-Konzept anfragen/erhalten", "Jetzt kostenlose Erstberatung buchen".
5. Erstgespräch: "In 30 bis 45 Minuten" (Startseite) bzw. "ca. 30–60 Minuten" (Beratung). "Vorab füllst Du ein kurzes Formular aus, damit wir uns vorbereiten können." Zusage: "Passt es, machen wir Dir ein konkretes Angebot. Passt es nicht, sagen wir Dir das direkt."
6. Laufzeit (Marketing): "Wir arbeiten nicht mit Jahresverträgen. Unsere Projekte starten mit einem definierten Setup-Zeitraum von 3 bis 6 Monaten". Rabatt, Fair-Use: nicht gefunden.
7. Vertrauen: Fallzahlen, "Erfolgsgarantie" (nur im Hero-Satz, Bedingungen nicht gefunden), bewusstes Ausschließen ("Start-ups ohne Budget").

### 12. level-worker.de (Rhein-Main)
URLs: https://level-worker.de, /kontakt, /roi-rechner, /agb
1. Preisbereich: keiner.
2. FAQ "Was kostet das?": "Einfache Lösungen starten im niedrigen vierstelligen Bereich. Wir arbeiten mit Festpreisen - Sie wissen vorher, was es kostet." Dazu ROI-Rechner ("Finden Sie in 2 Minuten heraus ...", Hinweis "Diese Berechnung basiert auf Erfahrungswerten. Im Erstgespräch schauen wir uns Ihre konkreten Prozesse an.").
3. Pakete: keine.
4. Buttons: "Kostenlos beraten lassen", "Termin auswählen", "Jetzt Termin sichern", "Jetzt Schritt 1 machen", zu https://calendly.com/accounts-level-worker/30-minuten-erstgespraech. Alternative "Lieber schreiben?" (Formular).
5. Erstgespräch: "Im ersten Gespräch (30 Min., kostenlos)". Versprechen: "Antwort innerhalb 24h", "Innerhalb weniger Tage bekommen Sie ein konkretes Konzept mit ROI-Kalkulation", Schritt 2 "Sie bekommen ein kostenloses Konzept: Was wir ändern würden, was es kostet, was es bringt." FAQ "Wer führt das Gespräch?": einer der beiden Gründer.
6. Laufzeit, Rabatt, Fair-Use: nicht gefunden. AGB: "Anzahlung in Höhe von 50% der Gesamtsumme".
7. Vertrauen: Case Study mit Zahlen, 4-Schritte-Ablauf, eigene FAQ nur zum Erstgespräch ("Ist das Erstgespräch wirklich kostenlos?").

### 13. prozessgesteuert.de (Köln)
URLs: https://prozessgesteuert.de, /kontakt/, /automation-as-a-service/, /geschaeftsprozess-kosten-rechner/
1. Preisbereich: keiner.
2. Statt Preis: "Prozesskosten-Rechner" und ein "Schnellanfrage-Formular" unter der Überschrift "Erhalte in 4 Schritten Dein individuelles Angebot!". Automation-as-a-Service: "Flexibel, fair und transparent", ohne Zahl.
3. Pakete: keine.
4. Buttons: "Jetzt Projekt anfragen!", "Zur Anfrage", "Anfrage senden", "Online Termin ausmachen", "Wähle hier Deinen Termin" (Kalender von Brevo direkt auf der Seite eingebettet).
5. Erstgespräch: "Wir besprechen Deine Problemstellung und Anforderungen unverbindlich in nur 30 Minuten." "Es handelt sich nicht um einen typischen Vertriebstermin." "Selbst wenn es zu keiner Zusammenarbeit kommt, erhältst Du von uns Lösungsansätze".
6. Laufzeit, Rabatt, Fair-Use: nicht gefunden.
7. Vertrauen: direkt beim Termin: "100% Geld-zurück. Wenn wir Dich mehr Zeit kosten, als wir Dir einsparen!" und "Keine versteckten Kosten & klare Deadlines". Viele Google-Bewertungen im Wortlaut.

### 14. chatbotmanufaktur.de
URLs: https://chatbotmanufaktur.de, /shopify-chatbot-erstellen/
1. Preisbereich: keiner.
2. Statt Preis: nichts.
3. Pakete: keine.
4. Buttons: "Kostenloses Erstgespräch vereinbaren", "Unverbindliches Erstgespräch vereinbaren", "Erstgespräch vereinbaren", alle zu einem auf der Seite eingebetteten Calendly (Ersatzlink calendly.com/chatbotmanufaktur/chatbotcheck).
5. Erstgespräch: "Das Erstgespräch ist gratis und unverbindlich." Vor dem Termin: "Die Fragen vorab helfen dabei, ein möglichst individuelles Gespräch vorzubereiten." Dauer nicht gefunden.
6. Laufzeit, Rabatt, Fair-Use: nicht gefunden.
7. Vertrauen: Partnerlogos.

### 15. voisento.de
URLs: https://voisento.de, /angebot-telefon-bot/, /kontakt/, https://telefonbot.voisento.de/
1. Preisbereich: keiner.
2. Einzige Zahl: "Für 35 Cent pro Minute übernimmt unser Telefonbot Kundenanfragen" und FAQ "Die Kosten betragen 35 Cent pro Gesprächsminute. Es gilt das Prinzip: kein Anruf, keine Kosten." Einrichtungspreis nicht gefunden.
3. Pakete: keine.
4. Buttons: "KI-Telefonbot direkt testen", "Persönliche Demo", "Starten Sie mit einer Demo", "Hol dir dein unverbindliches Angebot!", "Unverbindliches Angebot", "Demo anfordern", zu Formularen. Testanruf-Seite: "Jetzt Testanruf starten. Kostenlos und unverbindlich. Der Anruf kommt in unter einer Minute." sowie "4.000 Gratis-Minuten: Alle Infos dazu erhalten Sie per E-Mail." Telefonnummer des Ansprechpartners.
5. Erstgespräch: nicht gefunden (nur Demo).
6. Laufzeit, Rabatt, Fair-Use: nicht gefunden.
7. Vertrauen: Dozenten-Referenzen (TÜV, VHS, OMR), ProvenExpert, FAQ zu Einführungsdauer ("2 bis 4 Wochen").

### 16. foxifai.com (Bochum)
URLs: https://foxifai.com, /voice-agent, /kontakt
1. Preisbereich: teilweise. Im Hero: "Ab 1.920 € Setup · ab 100 €/Monat · jährlich kündbar". Voice-Seite: "Zwei Wege zu deinem Voice Agent".
2. Zahlen: "Selbst einrichten: 0 € Einrichtung, nur die fonio-Lizenz ab 119 €/Monat netto" oder "Wir machen's für dich: ab 1.920 € einmalig, ab 100 €/Monat · je nach Anbindung individuell". Dazu ROI-Kalkulator "Was kosten dich verpasste Anrufe wirklich?".
3. Unterscheidung: Selbstbau mit Gratis-Guide vs. Komplett-Setup.
4. Buttons: "Kostenloses Erstgespräch", "Termin vereinbaren", "Kostenlosen Termin buchen", "Voice Agent anfragen", zu Cal.com (erstgespraech bzw. voice-agent). Außerdem "Kostenlos starten", "Gratis-Guide + Code sichern", Kontaktformular.
5. Erstgespräch: "30 Minuten. Keine Bindung. Konkrete Ideen — kein Verkaufsgespräch." (Cal.com: 30 Min). Formular: "Wir melden uns innerhalb von 24 Stunden."
6. Laufzeit: "Jährlich kündbar". Plattform-Rabatt nur als fonio-Hinweis ("im Jahresabo ab 99 €"). Fair-Use: nicht gefunden.
7. Vertrauen: "Feste Preise. Keine Überraschungen.", 5.0 aus 12 Google-Bewertungen, "Service-Finder" (5 Fragen), fonio-Gold-Partner.

### 17. agenturphilipp.de (Dingolfing)
URLs: https://agenturphilipp.de/, /ki-telefon/, /agb/
1. Preisbereich: zwei Arten.
   a) Startseite, Überschrift "WÄHLE DEINE DISTANZ / Dein KI-Kollege. Deine passende Strecke." mit drei Paketen **ohne Zahl**.
   b) /ki-telefon/ mit Zahlen (Anker "Pakete ansehen").
2. a) Jedes Paket endet mit "Individuelles Angebot zum Fixpreis". FAQ: "Du erhältst ein individuelles Angebot zum Fixpreis. Leistungsumfang und Gesamtinvestition stehen vor Projektstart fest. Mögliche laufende Betriebskosten weisen wir im Angebot aus."
   b) Scale "290 €pro Monat + 2.990 € einmalige Einrichtung", "500 Freiminuten pro Monat. Danach 0,15 € pro Minute."; Premium "690 € pro Monat + 6.990 €"; Enterprise "Auf Anfrage". Zusatzleistungen mit Preis (z. B. "Website-Chatbot 99 € / Monat").
3. Unterscheidung ohne Zahl: KI-Kurzstrecke (1 KI-Kollege, 3 Monate), KI-Halbmarathon (3, 9 Monate), KI-Marathon (4, 12 Monate), dazu Vergleichstabelle "Leistungsumfang der drei KI-Pakete" mit "Enthalten / Nicht enthalten".
4. Buttons: "Lass uns sprechen ↗", "Erstgespräch vereinbaren ↗", pro Paket eigener Text ("Gezielt starten ↗", "Mehr Abläufe entlasten ↗", "KI-Marathon® starten ↗", "Scale besprechen ↗", "Premium besprechen ↗", "Vorhaben besprechen ↗"), alle zu meetergo (15 Minuten). Außerdem "Jetzt Gabi anrufen" und Demo-Rückruf ("Jetzt selbst ausprobieren").
5. Erstgespräch: "15 Minuten: Wo lohnt sich KI für dich? Kostenlos und unverbindlich." Abschluss: "Kostenlos. Unverbindlich. Auf Augenhöhe."
6. Laufzeit: "Laufzeit, Kündigungsfristen und gebuchte Zusatzleistungen halten wir im Angebot fest." Rabatt: nicht gefunden. Fair-Use: nicht als Begriff, aber Freiminuten plus Minutenpreis.
7. Vertrauen: Ergebnisse mit Kundennamen, Vergleichstabelle, "Kundenangaben aus den jeweiligen Projekten. Ergebnisse sind nicht pauschal übertragbar."

### 18. ki-business-agenten.de (Claes & Herrmann, Potsdam)
URLs: https://ki-business-agenten.de/, /quiz?von=startseite-faq, /ki-anwendungen/terminbuchung, /agb
Hinweis: Workshop-Anbieter, keine Voice-Agenten. Aufgenommen wegen des Preis-Musters.
1. Preisbereich: keiner.
2. FAQ "Was kostet das, und wie kommst du rein?": "Den Preis besprechen wir im Gespräch. Das ist keine Ausweichantwort, sondern die Folge davon, wie wir arbeiten: Wir schneiden den Workshop auf deinen Betrieb zu." Und: "In dem Gespräch hörst du, was es kostet, bevor du dich entscheidest. Vorher zahlst du nichts."
3. Pakete: keine.
4. Buttons: "ICH WILL KI NUTZEN.", "Platz anfragen" zum Quiz (erste Frage "Wer entscheidet bei euch über so ein Vorhaben?"). Laut eigener Beschreibung schlägt die Buchung danach "genau drei Termine" vor statt einer Kalenderansicht.
5. Erstgespräch: "du schickst die Bewerbung, wir sprechen zwanzig Minuten, und wenn es für beide Seiten passt, machen wir den Termin fest." Quiz: "Kein Verkaufsgespräch".
6. Laufzeit, Rabatt, Fair-Use: nicht gefunden. AGB: Anzahlung möglich.
7. Vertrauen: Begründung der Bewerbung ("Deshalb gibt es eine Bewerbung und keinen Kaufen-Button."), klare Aussage für wen es nichts ist.

### 19. talkee.chat
URLs: https://talkee.chat (per Chrome), Skriptdatei der Seite
1. Preisbereich: auf der Startseite keiner. Die Seite startet direkt einen Einrichtungs-Assistenten: "SCHRITT 1 VON 6. In 2 Minuten zu deinem KI‑Assistenten."
2. Preise stehen nur im Programmcode der App (nicht als sichtbare Seite geprüft): u. a. "197 €/m" (Termine), "97 €/m" (Webwidget, WhatsApp), "5 Test-Anrufe kostenlos". Wann und wem diese Preise angezeigt werden: nicht geprüft.
3. Pakete: Module in der App (siehe oben).
4. Buttons: "Weiter →", "Überspringen". Im App-Code außerdem "📅 Erstgespräch buchen" und "Jetzt kostenlos starten 🚀".
5. Erstgespräch: Dauer nicht gefunden.
6. Laufzeit: im App-Code "Monatlich kündbar" und "Jederzeit kündbar, keine versteckten Kosten". Rabatt, Fair-Use: nicht gefunden.
7. Vertrauen: nicht gefunden.

## Vergleich: transparente Anbieter

### Digital Apes (https://www.digitalapes.de/preise, /termin)
- Überschrift "Was kostet ein KI-Telefonassistent für Ihre Kanzlei?", Untertitel "Zwei Bausteine, volle Transparenz. Keine versteckten Kosten."
- Baustein 1 (eigene Leistung): "Einmalig ab 1.490 €netto*", "Monatlich (Mindestlaufzeit 12 Monate) ab 179 €netto / Monat*". Baustein 2: fonio-Tarife separat.
- Vergleich mit einer Empfangskraft (Kosten im ersten Jahr) und Rechner, der auch ein negatives Ergebnis zeigt ("Ersparnis -58 €/Monat ... der eigentliche Nutzen liegt dann in Erreichbarkeit").
- Jahreszahlung: DATEV-Zusatz "429 € netto/Monat" oder "4.787 € netto/Jahr bei Jahreszahlung".
- Mehrverbrauch (am nächsten an Fair-Use): "Wenn Ihr Volumen dauerhaft über dem gebuchten Paket liegt, wechseln Sie in den nächstgrößeren Tarif. Wir sehen das in der laufenden Auswertung meist früher als Sie und melden uns von selbst".
- Laufzeit-FAQ: "die Digital Apes Betreuung hat eine Mindestlaufzeit von 12 Monaten. Danach läuft sie automatisch weiter, wenn Sie nicht kündigen."
- Ratenzahlung-FAQ: "Sprechen Sie uns im Erstgespräch darauf an."
- Buttons: "Kostenloses Erstgespräch buchen" (/termin, Cal.com eingebettet, 30 Min, "Direkt mit Mike Krenzien"), "KI-Assistent testen" mit Telefonnummer zum Selbstanrufen.
- Abschluss: "Individuelles Angebot in 30 Minuten".
- Erstgesprächs-FAQ: "Ist das wirklich kostenlos? Wo ist der Haken? Kein Haken. ... Wir haben in der Vergangenheit auch Kanzleien gesagt, dass KI für sie aktuell noch nicht der richtige Schritt ist."

### fonio.ai (https://www.fonio.ai/de/preise)
- Überschrift "Preise", direkt darunter "30 Tage Geld-zurück-Garantie".
- Umschalter "Monatlich / Jährlich-20%". Telefon: Solo 119 € bzw. 99 €, Team 359 € bzw. 299 €, Scale "Ab €599 Individuelle Preise" mit Button "Plan erstellen" (Konfigurator).
- Buttons: "Jetzt starten", "Demo buchen", "Expertengespräch buchen".
- **Widerspruch:** Digital Apes zeigt für fonio "Jährlich −17 %", fonio selbst "Jährlich-20%". Maßgeblich ist die fonio-Seite.

## Muster (18 auswertbare Anbieter)

| Muster | Häufigkeit | Anbieter |
|---|---|---|
| Keine einzige Preiszahl auf der Seite | 12 von 18 | hotel-telefonbot, ki-hotelassistent, voiceagenten, ki-voice-agenten, deinekiagentur, fullcircle, ai-union, peter-krause, prozessgesteuert, chatbotmanufaktur, ki-business-agenten, talkee (Startseite) |
| "Kostenlos" beim Erstgespräch ausdrücklich genannt | 11 von 18 | hotel-telefonbot, ennoia, fullcircle, ai-union, peter-krause, neurakey, level-worker, chatbotmanufaktur, foxifai, agenturphilipp, voisento (Demo) |
| Direkter Kalender-Link oder eingebetteter Kalender | 10 von 18 | Cal.com 4 (deinekiagentur, ennoia, ai-union, foxifai), Calendly 4 (voiceagenten, fullcircle, level-worker, chatbotmanufaktur), meetergo 1 (agenturphilipp), Brevo 1 (prozessgesteuert) |
| Kostenfrage in einer FAQ | 9 von 18 | voiceagenten, fullcircle, ai-union, level-worker, neurakey, ki-business-agenten, voisento, foxifai, agenturphilipp |
| Ablauf in nummerierten Schritten | 8 von 18 | hotel-telefonbot, level-worker, ai-union, peter-krause, agenturphilipp, ki-business-agenten, voisento, prozessgesteuert |
| Erstgespräch 30 Minuten (wo Dauer erkennbar) | 8 von 12 | 15 Min: ai-union, agenturphilipp; 20 Min: ki-business-agenten; 30 bis 60 Min: neurakey |
| Rechner oder Quiz statt Preis | 5 von 18 | hotel-telefonbot, level-worker, prozessgesteuert, foxifai, ki-business-agenten |
| Nur Formular, kein Kalender-Link | 5 von 18 | hotel-telefonbot, ki-hotelassistent, ki-voice-agenten, peter-krause, voisento (neurakey: Formular, Online-Kalender nur erwähnt) |
| Antwort- oder Angebotsfrist versprochen | 4 von 18 | hotel-telefonbot (24 h Rückmeldung), ennoia (Angebot in 24 h), level-worker (24 h, Konzept in wenigen Tagen), foxifai (24 h) |
| Preisspanne oder grober Rahmen | 2 von 18 | level-worker, neurakey |
| Vertragslaufzeit auf der Seite | 3 von 18 | foxifai, agenturphilipp, neurakey (nur in AGB: ki-hotelassistent) |
| Garantie | 2 von 18 | prozessgesteuert (Geld zurück), neurakey (nur Schlagwort) |
| Pakete mit Leistungen, aber ohne Zahl | 1 von 18 | agenturphilipp (KI-Marathon) |
| Fair-Use-Regel | 0 von 18 | (Kontingente nur als Freiminuten bzw. Credits: agenturphilipp, ennoia) |
| Rabatt für Vorauszahlung oder längere Laufzeit auf eigene Leistung | 0 von 18 | nur Plattformen und Vergleichsanbieter (fonio, Digital Apes) |
| Eigene Nummer, die man selbst anrufen kann | 0 von 18 | Rückruf-Demos: voisento, agenturphilipp; Selbstanruf nur bei Digital Apes |
| Budgetfrage vor dem Gespräch | 1 von 18 | ki-hotelassistent (Freitext im Konfigurationsbogen) |

## Beste Beispiele für das neue Modell

1. **agenturphilipp.de (Startseite, Abschnitt "WÄHLE DEINE DISTANZ")**: Das einzige Beispiel für Pakete ohne Zahl, das trotzdem vergleichbar ist. Unterschieden wird über Umfang und Laufzeit, dazu eine Tabelle "Enthalten / Nicht enthalten". Jedes Paket hat einen eigenen Button zum 15-Minuten-Termin. Der Satz "Leistungsumfang und Gesamtinvestition stehen vor Projektstart fest" nimmt die Angst vor offenen Kosten.
2. **ki-business-agenten.de (FAQ "Was kostet das, und wie kommst du rein?")**: Erklärt offen, warum es keinen Preis gibt ("keine Ausweichantwort") und verspricht: Preis im Gespräch, vor der Entscheidung, vorher keine Kosten. Dazu der Weg in drei Schritten und drei Terminvorschläge statt Kalender.
3. **digitalapes.de/preise (als Bauplan, nicht als Preisvorbild)**: Die FAQ-Fragen passen genau zum neuen Modell: Mindestlaufzeit, was nach 12 Monaten passiert, Mehrverbrauch ("wir melden uns von selbst"), Ratenzahlung, Jahreszahlung, "Wo ist der Haken?". Dazu ein Rechner, der auch ehrlich ein Minus zeigt.

Nebenkandidaten:
- level-worker.de: "niedriger vierstelliger Bereich" plus Festpreis plus kostenloses Konzept mit "was es kostet, was es bringt".
- fullcircleautomations.de/ai-voice-agent: erklärt die drei Kostenblöcke ohne Zahl.
