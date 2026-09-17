# Arbeitsanweisung: Buchungsfragen in Cal.eu einrichten

**Für:** Claude in der Desktop-App mit Cloud-Browser
**Auftraggeber:** Pantelis Nanis, Logik Agentur
**Stand:** 16.09.2026

---

## 1. Worum es geht

Die Logik Agentur richtet KI-Assistenten für kleine und mittlere Betriebe ein. Interessenten buchen auf logik-agentur.de ein kostenloses Erstgespräch über Cal.eu. Damit Pantelis vorbereitet ins Gespräch geht, sollen sie vorher ein paar Fragen beantworten. Je nach Thema passen andere Fragen. Deshalb gibt es künftig **drei Buchungslinks**:

| Nr. | Titel | Link (Slug) | Für wen |
|---|---|---|---|
| A | Kostenloses Erstgespräch | `30min` (bleibt!) | Allgemein, Buttons oben, im Menü und unten auf der Webseite |
| B | Erstgespräch Telefon und Chat | `erstgespraech-telefon-chat` | Voice-Agent, Website-Chatbot, Termin- und Buchungsanbindung |
| C | Erstgespräch Automatisierung | `erstgespraech-automatisierung` | E-Mail-Assistent, Prozess-Automatisierung, Onboarding-Assistent |

Konto: `https://app.cal.eu` (EU-Fassung von Cal.com, Oberfläche auf Deutsch, Version 6.8).

## 2. Feste Regeln

1. **Keine Passwörter eingeben.** Ist der Browser nicht angemeldet, halte an und bitte Pantelis, sich selbst anzumelden.
2. **Nichts löschen.** Keine Termin-Art, keine Buchung, keine bestehende Frage. Die Standardfragen (Ihr Name, E-Mail Adresse, Telefonnummer, Worum geht es in diesem Termin?, Zusätzliche Notizen, Weitere Gäste, Grund für die Neuplanung) bleiben so, wie sie sind.
3. **Nicht anfassen:** Verfügbarkeit, Kalender, Ort (MS Teams), Dauer, Limits, Workflows, Webhooks, Teams, den Menüpunkt "Veranstaltungen" (das ist ein anderes Werkzeug für Workshops, nicht die Buchungslinks).
4. **Der Slug `30min` darf sich nicht ändern.** Die Webseite verlinkt ihn an 13 Stellen.
5. **Keine Testbuchung abschicken.** Zum Prüfen die öffentliche Seite nur bis zum Formular öffnen.
6. Nach jeder hinzugefügten Frage oben rechts **Speichern** klicken.
7. Weicht die Oberfläche von dieser Anleitung ab, halte an, mach einen Screenshot und frag nach, statt zu raten.

## 3. So sieht die Oberfläche aus (von Pantelis per Screenshot bestätigt)

- Linkes Hauptmenü: **Links** (hier liegen die Buchungslinks), Veranstaltungen, Buchungen, Verfügbarkeit, Teams, Apps, Routing, Workflows, Insights, Einstellungen.
- **Links** zeigt eine Liste: "Geheimer Termin" (`/secret`, versteckt), "15 Minuten Termin" (`/15min`), "30 Minuten Termin" (`/30min`). Rechts je Zeile ein Schalter und die Knöpfe Öffnen, Link kopieren und "..." (drei Punkte). Oben rechts "+ Neu".
- Klick auf den Namen öffnet die Einstellungen. Linke Unterliste: Einrichtung (**Termin-Einrichtung**, Verfügbarkeit), Buchungserlebnis (**Buchungsformular**, Bestätigung, Darstellung, Zahlungen & Plätze, Wiederkehrende), Richtlinien, KI & Automatisierung. Oben rechts **Speichern**.
- **Termin-Einrichtung** hat die Felder Titel, Beschreibung, URL, Dauer, Ort (MS Teams), Zum Kalender hinzufügen.
- **Buchungsformular** zeigt den Abschnitt "Buchungsfragen" mit der Liste der Fragen und unten den Knopf **+ Frage hinzufügen**.
- Das Fenster "Frage hinzufügen" hat: **Eingabetyp** (Auswahlliste), **Bezeichnung**, **Bezeichner**, ein Kästchen "Eingabe deaktivieren, wenn die URL-Kennung vorausgefüllt ist" (nicht anhaken), **Platzhalter**, bei Auswahl-Typen zusätzlich **Options** mit zwei Feldern "Option 1", "Option 2" und dem Knopf **+ Add an Option**, dann das Kästchen **Dieses Feld als erforderlich markieren** (ist vorab angehakt). Unten **Stornieren** und **Hinzufügen**.
- Werte in der Auswahlliste Eingabetyp (englisch, auch bei deutscher Oberfläche): Email, Phone, Address, Short Text, Number, Long Text, Select, MultiSelect, Multiple Emails, Checkbox Group, Radio Group, Checkbox, URL.

## 4. Bausteine, die in mehreren Links vorkommen

**Frage "Firmenname"**
- Eingabetyp: `Short Text`
- Bezeichnung: `Firmenname`
- Bezeichner: `firmenname`
- Platzhalter: `Name deines Betriebs`
- Erforderlich: ja

**Frage "Branche"**
- Eingabetyp: `Select`
- Bezeichnung: `Branche`
- Bezeichner: `branche`
- Options, genau in dieser Reihenfolge (die beiden vorhandenen Felder überschreiben, dann mit "+ Add an Option" ergänzen):
  1. `Hotellerie & Tourismus`
  2. `Handwerk & Notdienste`
  3. `Autohaus & Kfz-Werkstatt`
  4. `Immobilien & Hausverwaltung`
  5. `Energie & Solar`
  6. `Fitness- & Sportstudios`
  7. `Kosmetik, Friseur & Wellness`
  8. `Einzelhandel & Onlineshops`
  9. `Fahrschulen & Bildungsanbieter`
  10. `Freie Berufe (Notare, Ärzte, Anwälte)`
  11. `Sonstiges`
- Erforderlich: ja

**Frage "Falls Sonstiges"**
- Eingabetyp: `Short Text`
- Bezeichnung: `Falls Sonstiges: kurz beschreiben`
- Bezeichner: `branche_sonstiges`
- Erforderlich: **nein** (Haken entfernen)

**Frage "Website"**
- Eingabetyp: `URL`
- Bezeichnung: `Deine Website`
- Bezeichner: `website`
- Platzhalter: `https://`
- Erforderlich: **nein** (Haken entfernen)

## 5. Link A: "30 Minuten Termin" umbauen

1. Links, dann auf **30 Minuten Termin** klicken.
2. **Termin-Einrichtung:**
   - Titel ändern auf: `Kostenloses Erstgespräch`
   - Beschreibung: `30 Minuten per Microsoft Teams. Wir schauen uns deinen Betrieb an und klären, wobei dich ein KI-Assistent entlasten kann. Kostenlos und unverbindlich.`
   - URL bleibt `30min`.
   - **Speichern.**
3. **Buchungsformular**, dann nacheinander über **+ Frage hinzufügen** anlegen, nach jeder Frage Hinzufügen und Speichern:
   1. Firmenname (Baustein)
   2. Branche (Baustein)
   3. Falls Sonstiges (Baustein)
   4. Neue Frage:
      - Eingabetyp: `MultiSelect`
      - Bezeichnung: `Wobei soll dich die KI entlasten?`
      - Bezeichner: `entlastung`
      - Options: `Anrufe annehmen`, `Fragen auf der Website beantworten`, `E-Mails beantworten`, `Abläufe und Systeme verbinden`, `Wissen für mein Team`, `Weiß ich noch nicht`
      - Erforderlich: ja
   5. Website (Baustein)

## 6. Link B: "Erstgespräch Telefon und Chat" anlegen

1. Zurück zu **Links**. Beim "Kostenloses Erstgespräch" (ehemals 30 Minuten Termin) auf **...** klicken und **Duplizieren** wählen, falls es diese Option gibt. Das übernimmt Dauer, Ort, Kalender und Verfügbarkeit.
   - Gibt es kein Duplizieren: **+ Neu**, Dauer 30 Minuten, dann Ort **MS Teams** und bei "Zum Kalender hinzufügen" denselben Kalender wie beim 30-Minuten-Termin wählen, Verfügbarkeit ebenfalls gleich. Vorher beim Original nachsehen und exakt übernehmen.
2. Titel: `Erstgespräch Telefon und Chat`
3. URL/Slug: `erstgespraech-telefon-chat`
4. Beschreibung: `30 Minuten per Microsoft Teams. Es geht um deinen Telefonassistenten, den Chat auf deiner Website oder die Anbindung an deinen Kalender. Kostenlos und unverbindlich.`
5. **Speichern.**
6. **Buchungsformular:** Wurde dupliziert, sind die Fragen von Link A schon da. Dann die Frage **"Wobei soll dich die KI entlasten?"** hier **ausblenden** (Schalter in der Zeile aus), nicht löschen. Ob ein Schalter vorhanden ist, prüfen; ist keiner da, anhalten und nachfragen.
7. Sicherstellen, dass vorhanden sind: Firmenname, Branche, Falls Sonstiges, Website (Bausteine). Fehlen sie (bei "+ Neu"), anlegen.
8. Neue Frage:
   - Eingabetyp: `Select`
   - Bezeichnung: `Wie viele Anrufe bekommt ihr ungefähr pro Tag?`
   - Bezeichner: `anrufe_pro_tag`
   - Options: `Unter 10`, `10 bis 30`, `30 bis 80`, `Über 80`, `Weiß ich nicht genau`
   - Erforderlich: ja
9. **Speichern.**

## 7. Link C: "Erstgespräch Automatisierung" anlegen

1. Wie bei Link B vom "Kostenloses Erstgespräch" duplizieren (oder "+ Neu" mit denselben Einstellungen).
2. Titel: `Erstgespräch Automatisierung`
3. URL/Slug: `erstgespraech-automatisierung`
4. Beschreibung: `30 Minuten per Microsoft Teams. Es geht um E-Mail-Entwürfe, automatische Abläufe zwischen deinen Programmen oder das Wissen deines Teams. Kostenlos und unverbindlich.`
5. **Speichern.**
6. **Buchungsformular:** "Wobei soll dich die KI entlasten?" ausblenden wie bei Link B. Firmenname, Branche, Falls Sonstiges, Website müssen vorhanden sein.
7. Neue Frage:
   - Eingabetyp: `Long Text`
   - Bezeichnung: `Welche Programme nutzt ihr heute, zum Beispiel für Buchungen, Kunden oder Rechnungen?`
   - Bezeichner: `programme`
   - Platzhalter: `z. B. Outlook, Lexware, ein Buchungssystem`
   - Erforderlich: **nein**
8. **Speichern.**

## 8. Prüfen

1. In **Links** müssen stehen: "Kostenloses Erstgespräch" (`/30min`), "Erstgespräch Telefon und Chat" (`/erstgespraech-telefon-chat`), "Erstgespräch Automatisierung" (`/erstgespraech-automatisierung`), alle mit eingeschaltetem Schalter. "15 Minuten Termin" und "Geheimer Termin" unverändert.
2. Jeden der drei Links öffentlich öffnen:
   - `https://cal.eu/pantelis-nanis-m54voh/30min`
   - `https://cal.eu/pantelis-nanis-m54voh/erstgespraech-telefon-chat`
   - `https://cal.eu/pantelis-nanis-m54voh/erstgespraech-automatisierung`
3. Einen freien Termin anklicken, bis das Formular erscheint. Prüfen, dass genau die vorgesehenen Fragen in der vorgesehenen Reihenfolge erscheinen und Pflichtfelder mit Stern markiert sind. **Nicht abschicken.**
4. Die Mehrfachauswahl bei Link A kurz antesten (zwei Antworten anklicken, wieder abwählen).

## 9. Rückmeldung an Pantelis

Liefere am Ende:
1. Die drei öffentlichen Links, jeweils als "funktioniert" oder mit dem Problem.
2. Je Link einen Screenshot des ausgefüllten Formulars ohne Absenden.
3. Jede Abweichung von dieser Anleitung, zum Beispiel "Duplizieren gab es nicht, per + Neu angelegt" oder "Ausblenden-Schalter fehlte".
4. Ob die Slugs exakt so gesetzt werden konnten.

## 10. Danach (nicht Teil dieses Auftrags)

Claude Code tauscht auf logik-agentur.de die Links in den sechs Modulkarten:
- Voice-Agent, Website-Chatbot, Termin- und Buchungsanbindung auf `/erstgespraech-telefon-chat`
- E-Mail-Assistent, Prozess-Automatisierung, Onboarding-Assistent auf `/erstgespraech-automatisierung`
- Alle übrigen Buttons bleiben auf `/30min`.
