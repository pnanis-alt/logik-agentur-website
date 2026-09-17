# Arbeitsanweisung: Ein Buchungslink je Modul in Cal.eu

**Für:** einen KI-Assistenten mit Cloud-Browser (Claude Desktop oder ChatGPT)
**Auftraggeber:** Pantelis Nanis, Logik Agentur
**Stand:** 17.09.2026
**Vorgänger:** `cal-eu-buchungsfragen-einrichten.md` (am 16.09.2026 umgesetzt)

---

## 1. Worum es geht

Auf logik-agentur.de hat jedes der sechs Module einen Button "Angebot anfragen". Bisher teilen sich
je drei Module einen Buchungslink. Dadurch bekommt zum Beispiel wer sich für den Website-Chatbot
interessiert die Frage nach Anrufen pro Tag, und beim E-Mail-Assistenten fehlt die Frage nach dem
E-Mail-Anbieter. Künftig bekommt **jedes Modul einen eigenen Link mit eigenen Fragen**.

Konto: `https://app.cal.eu` (EU-Fassung von Cal.com, Oberfläche auf Deutsch, Version 6.8).
Öffentliche Adresse: `https://cal.eu/pantelis-nanis-m54voh/<slug>`

### Ausgangslage (so ist es heute eingerichtet)

| Titel heute | Slug | Fragen heute |
|---|---|---|
| Kostenloses Erstgespräch | `30min` | Firmenname, Branche, Falls Sonstiges, Wobei soll dich die KI entlasten?, Deine Website |
| Erstgespräch Telefon und Chat | `erstgespraech-telefon-chat` | wie oben, Entlastungsfrage ausgeblendet, dazu "Wie viele Anrufe bekommt ihr ungefähr pro Tag?" |
| Erstgespräch Automatisierung | `erstgespraech-automatisierung` | wie oben, Entlastungsfrage ausgeblendet, dazu "Welche Programme nutzt ihr heute, zum Beispiel für Buchungen, Kunden oder Rechnungen?" (freiwillig) |

Daneben gibt es "15 Minuten Termin" (`15min`) und "Geheimer Termin" (`secret`). Beide nicht anfassen.

### Ziel

| Nr. | Modul | Titel | Slug | Aktion |
|---|---|---|---|---|
| A | allgemein | Kostenloses Erstgespräch | `30min` | **nicht ändern** |
| B | Voice-Agent | Erstgespräch Voice-Agent | `erstgespraech-telefon-chat` | umbenennen, Slug bleibt |
| C | Prozess-Automatisierung | Erstgespräch Prozess-Automatisierung | `erstgespraech-automatisierung` | umbenennen, Fragen ergänzen, Slug bleibt |
| D | Website-Chatbot | Erstgespräch Website-Chatbot | `erstgespraech-website-chatbot` | neu |
| E | E-Mail-Assistent | Erstgespräch E-Mail-Assistent | `erstgespraech-email-assistent` | neu |
| F | Onboarding-Assistent | Erstgespräch Onboarding-Assistent | `erstgespraech-onboarding-assistent` | neu |
| G | Termin- und Buchungsanbindung | Erstgespräch Termin- und Buchungsanbindung | `erstgespraech-terminanbindung` | neu |

**Die Slugs von B und C dürfen sich nicht ändern.** Die Webseite verlinkt sie gerade.

## 2. Feste Regeln

1. **Keine Passwörter eingeben.** Ist der Browser nicht angemeldet, anhalten und Pantelis bitten, sich selbst anzumelden.
2. **Nichts löschen.** Keine Termin-Art, keine Buchung, keine Frage. Nicht mehr gebrauchte Fragen werden nur **ausgeblendet** (Schalter in der Fragenzeile aus).
3. **Nicht anfassen:** Link A (`30min`), `15min`, `secret`, Verfügbarkeit, Kalender, Ort (MS Teams), Dauer, Limits, Workflows, Webhooks, Teams, der Menüpunkt "Veranstaltungen".
4. **Keine Testbuchung abschicken.**
5. Nach jeder Änderung oben rechts **Speichern**.
6. Weicht die Oberfläche von dieser Anleitung ab: anhalten, Screenshot, nachfragen.
7. Bei allen Auswahlfragen die Antwortmöglichkeiten **genau so schreiben und in dieser Reihenfolge** eintragen.

## 3. So sieht die Oberfläche aus (bestätigt)

- Hauptmenü links: **Links** enthält die Buchungslinks. Je Zeile rechts der Knopf **...** mit **Duplizieren**. Oben rechts "+ Neu".
- Einstellungen eines Links, Unterliste links: **Termin-Einrichtung** (Titel, Beschreibung, URL, Dauer, Ort, Kalender) und **Buchungsformular** (Abschnitt "Buchungsfragen", je Frage ein Schalter und **Bearbeiten**, unten **+ Frage hinzufügen**). Oben rechts **Speichern**.
- Fenster "Frage hinzufügen": **Eingabetyp**, **Bezeichnung**, **Bezeichner**, Kästchen "Eingabe deaktivieren, wenn die URL-Kennung vorausgefüllt ist" (nicht anhaken), **Platzhalter**, bei Auswahl-Typen **Options** mit **+ Add an Option**, Kästchen **Dieses Feld als erforderlich markieren** (vorab angehakt). Unten **Hinzufügen**.
- Werte bei Eingabetyp: Short Text, Long Text, Select, MultiSelect, URL und weitere.

## 4. Link B: Voice-Agent

1. **Links**, "Erstgespräch Telefon und Chat" öffnen.
2. **Termin-Einrichtung:**
   - Titel: `Erstgespräch Voice-Agent`
   - Beschreibung: `30 Minuten per Microsoft Teams. Es geht um einen Telefonassistenten, der Anrufe annimmt, Anliegen aufnimmt und an dein Team übergibt. Kostenlos und unverbindlich.`
   - URL bleibt `erstgespraech-telefon-chat`.
3. **Speichern.**
4. **Buchungsformular:** nichts ändern. Nur prüfen, dass "Wie viele Anrufe bekommt ihr ungefähr pro Tag?" als Pflicht sichtbar ist und die Entlastungsfrage ausgeblendet.

## 5. Link C: Prozess-Automatisierung

1. **Links**, "Erstgespräch Automatisierung" öffnen.
2. **Termin-Einrichtung:**
   - Titel: `Erstgespräch Prozess-Automatisierung`
   - Beschreibung: `30 Minuten per Microsoft Teams. Es geht um Abläufe, die heute von Hand zwischen deinen Programmen laufen, und wie sie automatisch weiterlaufen können. Kostenlos und unverbindlich.`
   - URL bleibt `erstgespraech-automatisierung`.
3. **Speichern.**
4. **Buchungsformular:**
   1. Bei "Welche Programme nutzt ihr heute, zum Beispiel für Buchungen, Kunden oder Rechnungen?" auf **Bearbeiten**, Haken **Dieses Feld als erforderlich markieren** setzen, speichern.
   2. **+ Frage hinzufügen:**
      - Eingabetyp: `Long Text`
      - Bezeichnung: `Welcher Ablauf kostet euch heute am meisten Zeit?`
      - Bezeichner: `zeitfresser`
      - Platzhalter: `z. B. Rechnungen abtippen, Anfragen weiterleiten`
      - Erforderlich: **nein**
5. **Speichern.**

## 6. Vorgehen für die neuen Links D bis G

Für jeden neuen Link:
1. **Links**, beim "Kostenloses Erstgespräch" (`30min`) auf **...** und **Duplizieren**.
2. Titel, Slug und Beschreibung laut Abschnitt 7 bis 10 setzen. **Speichern.**
3. **Buchungsformular:** "Wobei soll dich die KI entlasten?" **ausblenden** (Schalter aus, nicht löschen).
4. Prüfen, dass Firmenname, Branche, Falls Sonstiges und Deine Website vorhanden sind.
5. Die modulspezifischen Fragen aus Abschnitt 7 bis 10 anlegen. **Speichern.**

## 7. Link D: Website-Chatbot

- Titel: `Erstgespräch Website-Chatbot`
- Slug: `erstgespraech-website-chatbot`
- Beschreibung: `30 Minuten per Microsoft Teams. Es geht um einen Chat auf deiner Website, der Fragen zu deinem Betrieb rund um die Uhr beantwortet. Kostenlos und unverbindlich.`

Buchungsformular:
1. Bei "Deine Website" auf **Bearbeiten** und **erforderlich** anhaken (hier brauchen wir die Adresse immer).
2. Neue Frage:
   - Eingabetyp: `Select`
   - Bezeichnung: `Womit ist eure Website gebaut?`
   - Bezeichner: `website_system`
   - Options:
     1. `WordPress`
     2. `Wix`
     3. `Jimdo`
     4. `Shopify`
     5. `IONOS-Baukasten`
     6. `Squarespace`
     7. `Von einer Agentur programmiert`
     8. `Weiß ich nicht`
   - Erforderlich: ja

## 8. Link E: E-Mail-Assistent

- Titel: `Erstgespräch E-Mail-Assistent`
- Slug: `erstgespraech-email-assistent`
- Beschreibung: `30 Minuten per Microsoft Teams. Es geht um einen Assistenten, der eingehende E-Mails liest und Antwortentwürfe in deinem Ton vorbereitet. Kostenlos und unverbindlich.`

Buchungsformular, zwei neue Fragen:
1. Anbieter:
   - Eingabetyp: `Select`
   - Bezeichnung: `Welchen E-Mail-Anbieter nutzt ihr?`
   - Bezeichner: `email_anbieter`
   - Options:
     1. `Microsoft 365 / Outlook`
     2. `Google Workspace / Gmail`
     3. `IONOS`
     4. `Strato`
     5. `GMX oder Web.de`
     6. `Telekom / T-Online`
     7. `Anderer Anbieter`
     8. `Weiß ich nicht`
   - Erforderlich: ja
2. Menge:
   - Eingabetyp: `Select`
   - Bezeichnung: `Wie viele E-Mails kommen ungefähr pro Tag rein?`
   - Bezeichner: `emails_pro_tag`
   - Options:
     1. `Unter 20`
     2. `20 bis 50`
     3. `50 bis 150`
     4. `Über 150`
     5. `Weiß ich nicht genau`
   - Erforderlich: ja

## 9. Link F: Onboarding-Assistent

- Titel: `Erstgespräch Onboarding-Assistent`
- Slug: `erstgespraech-onboarding-assistent`
- Beschreibung: `30 Minuten per Microsoft Teams. Es geht um einen Assistenten, der dein Team mit dem Wissen deines Betriebs versorgt, vom ersten Arbeitstag an. Kostenlos und unverbindlich.`

Buchungsformular, zwei neue Fragen:
1. Team:
   - Eingabetyp: `Select`
   - Bezeichnung: `Wie viele Mitarbeiter sollen damit arbeiten?`
   - Bezeichner: `mitarbeiter_nutzung`
   - Options:
     1. `1 bis 5`
     2. `6 bis 20`
     3. `21 bis 50`
     4. `Über 50`
   - Erforderlich: ja
2. Wissen:
   - Eingabetyp: `MultiSelect`
   - Bezeichnung: `Wo liegt euer Betriebswissen heute?`
   - Bezeichner: `wissen_ablage`
   - Options:
     1. `Ordner auf einem Laufwerk oder Server`
     2. `Microsoft SharePoint oder OneDrive`
     3. `Google Drive`
     4. `Notion oder Confluence`
     5. `Auf Papier`
     6. `In den Köpfen der Mitarbeiter`
     7. `Weiß ich nicht`
   - Erforderlich: ja

## 10. Link G: Termin- und Buchungsanbindung

- Titel: `Erstgespräch Termin- und Buchungsanbindung`
- Slug: `erstgespraech-terminanbindung`
- Beschreibung: `30 Minuten per Microsoft Teams. Es geht darum, deinen Kalender oder dein Buchungsprogramm anzubinden, damit Termine direkt eingetragen werden. Kostenlos und unverbindlich.`

Buchungsformular, zwei neue Fragen:
1. Programm:
   - Eingabetyp: `Select`
   - Bezeichnung: `Welches Kalender- oder Buchungsprogramm nutzt ihr?`
   - Bezeichner: `kalender_system`
   - Options:
     1. `Google Kalender`
     2. `Microsoft 365 / Outlook`
     3. `Hotelsoftware (z. B. Protel, Apaleo, Mews)`
     4. `Online-Terminbuchung (z. B. Doctolib, Shore, Treatwell)`
     5. `Anderes Programm`
     6. `Noch keins`
   - Erforderlich: ja
2. Name:
   - Eingabetyp: `Short Text`
   - Bezeichnung: `Welches Programm genau?`
   - Bezeichner: `kalender_system_name`
   - Platzhalter: `Name des Programms`
   - Erforderlich: **nein**

## 11. Prüfen

1. In **Links** stehen neun Einträge: Kostenloses Erstgespräch, die sechs Modul-Links, 15 Minuten Termin, Geheimer Termin. Die sechs Modul-Links und A sind eingeschaltet.
2. Jeden der sechs Modul-Links öffentlich öffnen, einen freien Termin anklicken, bis das Formular erscheint:
   - `https://cal.eu/pantelis-nanis-m54voh/erstgespraech-telefon-chat`
   - `https://cal.eu/pantelis-nanis-m54voh/erstgespraech-automatisierung`
   - `https://cal.eu/pantelis-nanis-m54voh/erstgespraech-website-chatbot`
   - `https://cal.eu/pantelis-nanis-m54voh/erstgespraech-email-assistent`
   - `https://cal.eu/pantelis-nanis-m54voh/erstgespraech-onboarding-assistent`
   - `https://cal.eu/pantelis-nanis-m54voh/erstgespraech-terminanbindung`
3. Je Link prüfen: richtiger Titel oben, Entlastungsfrage nicht sichtbar, die modulspezifischen Fragen sichtbar, Pflichtfelder mit Stern. **Nicht abschicken.**
4. Link A (`30min`) kurz öffnen und prüfen, dass er unverändert ist.

## 12. Rückmeldung an Pantelis

1. Die sechs Modul-Links, je "funktioniert" oder das Problem.
2. Je Link ein Screenshot des Formulars ohne Absenden.
3. Jede Abweichung von dieser Anleitung.
4. Ob alle Slugs exakt so gesetzt werden konnten.

## 13. Danach (nicht Teil dieses Auftrags)

Claude Code setzt auf logik-agentur.de jeden Modul-Button auf seinen eigenen Link:

| Modulkarte | Link |
|---|---|
| Voice-Agent | `/erstgespraech-telefon-chat` |
| Website-Chatbot | `/erstgespraech-website-chatbot` |
| E-Mail-Assistent | `/erstgespraech-email-assistent` |
| Prozess-Automatisierung | `/erstgespraech-automatisierung` |
| Onboarding-Assistent | `/erstgespraech-onboarding-assistent` |
| Termin- und Buchungsanbindung | `/erstgespraech-terminanbindung` |
