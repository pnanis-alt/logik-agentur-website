---
version: "1.1"
date: "2026-05-30"
status: "Entwurf — vor Erstverwendung anwaltlich prüfen lassen"
dokument: "AGB Logik-Agentur"
ablage: "docs/legal/vertragsdokumente/AGB_Logik_Agentur_v1_1.md"
modell: "AGB als Hauptvertrag (Hybrid Werk-/Dienstvertrag); AVV = Anlage 1, SLA = Anlage 2"
zielgruppe: "B2B, branchenneutral (Hotels, DACH-KMU)"
changelog: "v1.0 -> v1.1: Drittanbieter-Risikoprotokoll mit Eskalationsstufen (neu, § 9); Klausel zu missbräuchlicher Nutzung + Kostenzurechnung + § 307-Zumutbarkeitsgrenze (neu, § 10); Zustimmungsfiktion ersetzt durch aktive Zustimmung + Kündigungsfallback (§ 18); präzisierte Initial-Prüfpflicht (50 Konversationen, längstens 14 Tage; § 254 anspruchsmindernd statt Ausschluss; § 5/§ 12); beidseitiges Sonderkündigungsrecht bei Drittanbieter-Kostenexplosion; ergänzt: Rücklastschriftkosten, fester Ansprechpartner, Erfüllungsort, Transparenz-Manipulationsschutz, 5-WT-Setup-Frist, produktive Nutzung als Abnahme-Fallback. SEPA-Core bestätigt (kein Firmenlastschriftverfahren)."
referenzen:
  - "Phase1_Gruendung_Rechtsrahmen_v3_1.md (§4.1, §5.2, §7.3, §8.1-8.3)"
  - "Phase3_Geschaeftsbetrieb_Onboarding_v2_10.md (§1, §2.1-2.4, §3.1-3.2, §4, §5)"
  - "compliance-memo-marketing-wording-v1_0.md (Deployer-Wording, Z.118/144)"
  - "interessenabwaegung-voice-transkripte-v1_0.md (Art. 6 Abs. 1 lit. f, Rollenverteilung)"
  - "AVV_Mustertext_Logik_Agentur_v2_1.md (Anlage 1, Stand v2.2 i.V.)"
  - "sepa-payment-setup-v1_0.md (SEPA-Core, Pre-Notification 5 Werktage)"
entscheidungen:
  - "A: Mindestlaufzeit 3 Monate"
  - "C: Gerichtsstand Hannover mit Kaufmanns-Bedingung (§ 38 ZPO)"
  - "E: formales Abnahmeprotokoll + Fiktion als Fallback (§ 640 BGB)"
  - "F: Zufriedenheitsgarantie nur Retainer, Setup-Werkleistung bleibt vergütet"
  - "Verzugsschwelle: 30 Tage + Betragsschwelle (eine Monatsvergütung)"
---

# Allgemeine Geschäftsbedingungen der Logik-Agentur

**Stand: Mai 2026 | Rechtsstand: Deutschland / EU | Fassung v1.1**

> ⚠️ **Entwurf — keine Rechtsberatung i.S.d. RDG.** Vor Erstverwendung durch einen zugelassenen Fachanwalt für IT-Recht prüfen lassen. Der Vertragstext (§ 1–§ 20 nebst Anlagenverzeichnis) ist der unterschriftsreife Teil; der anschließende Abschnitt „Klausel-Kommentar & Anwalts-Prüfliste" ist **nicht Vertragsbestandteil**.

---

## § 1 Geltungsbereich, Vertragspartner, Begriffsbestimmungen

(1) Diese Allgemeinen Geschäftsbedingungen (nachfolgend „AGB") gelten für sämtliche Verträge zwischen der **Logik-Agentur, Inhaber Pantelis Nanis, [ADRESSE — Straße, Hausnummer, PLZ Wunstorf], E-Mail: kontakt@logik-agentur.de** (nachfolgend „Agentur") und ihren Kunden über die in § 2 beschriebenen Leistungen.

(2) Diese AGB bilden den **Hauptvertrag**. Der Auftragsverarbeitungsvertrag (Anlage 1) und das Service Level Agreement (Anlage 2) sind Bestandteil dieses Vertrages.

(3) Die Agentur erbringt ihre Leistungen **ausschließlich gegenüber Unternehmern** im Sinne des § 14 BGB, juristischen Personen des öffentlichen Rechts und öffentlich-rechtlichen Sondervermögen. Ein Vertragsschluss mit Verbrauchern (§ 13 BGB) ist ausgeschlossen.

(4) Es gelten ausschließlich diese AGB. Abweichende, entgegenstehende oder ergänzende Bedingungen des Kunden werden nicht Vertragsbestandteil, es sei denn, die Agentur stimmt ihnen ausdrücklich in Textform zu.

(5) Begriffsbestimmungen:
- **„KI-Assistenz"** bezeichnet sprach- oder textbasierte, automatisierte Assistenzdienste (Telefon, Website-Chat, Messaging), die auf Standard-Schnittstellen (APIs) von Drittanbietern aufsetzen.
- **„Drittanbieter"** sind die eingesetzten externen Plattform- und Modellbetreiber (insbesondere ElevenLabs, Twilio, make.com, Google, Anthropic, OpenAI, Brevo).
- **„Setup"** ist die einmalige Einrichtung, Konfiguration und Integration der Leistung (Werkleistung).
- **„Betrieb"** ist die laufende Bereitstellung, Wartung und Pflege (Dienstleistung).
- **„Handover"** ist die Weiterleitung einer Anfrage per SMS, WhatsApp, E-Mail oder Rückruf auf eine Buchungs-, Bestell- oder Anfrageseite des Kunden.
- **„Endkunde"** ist der Anrufer, Besucher oder Kontakt des Kunden (z. B. ein Hotelgast).
- **„Werktage"** sind Montag bis Freitag mit Ausnahme bundeseinheitlicher sowie am Sitz der Agentur geltender gesetzlicher Feiertage.

## § 2 Vertragsgegenstand und Leistungsbeschreibung

(1) Gegenstand des Vertrages ist die **Konfiguration, der Betrieb und die Wartung von KI-Assistenz sowie verbundener Automatisierungsdienste auf Basis von Drittanbieter-APIs.** Der konkrete Leistungsumfang ergibt sich aus dem jeweiligen Angebot bzw. Leistungsschein (nachfolgend „Leistungsschein"), der diesem Vertrag als Individualvereinbarung vorgeht.

(2) **Rolle der Agentur (Klarstellung).** Die Agentur ist Betreiber (Deployer) gemäß Art. 3 Nr. 4 der Verordnung (EU) 2024/1689 (KI-VO). Die eingesetzten KI-Systeme sind Standardprodukte der jeweiligen Drittanbieter. Die Agentur betreibt **kein Fine-Tuning, keine Modellmodifikation und kein eigenes Modell-Hosting.** Ihre Leistung ist eine Integrations-, Konfigurations- und Wartungsdienstleistung; sie bringt **kein eigenes KI-Produkt in Verkehr.**

(3) Mögliche Leistungsmodule sind insbesondere KI-Sprachassistenz, Website-Chatassistenz, WhatsApp-Automatisierung, Bewertungs-Management und Prozessautomatisierung. Welche Module geschuldet sind, regelt der Leistungsschein. Beim Modul **Bewertungs-Management** erzeugt das System lediglich Antwortvorschläge zur **manuellen Freigabe durch den Kunden; ein automatisches Veröffentlichen erfolgt nicht.**

(4) **Kein verbindlicher Vertragsschluss über die Assistenz.** Die KI-Assistenz qualifiziert Anfragen und leitet sie per Handover auf eine Seite des Kunden weiter. Ein verbindlicher Vertrag zwischen Kunde und Endkunde kommt **ausschließlich auf der Seite des Kunden** zustande, nicht über den Sprach-, Chat- oder Messaging-Kanal. Bis zu einer Bestätigung durch den Kunden bleibt jede Anfrage unverbindlich.

(5) **Leistungsabgrenzung.** Nicht geschuldet sind insbesondere: schreibender Zugriff auf Fremdsysteme des Kunden (z. B. PMS/Warenwirtschaft), die Blockierung oder Reservierung von Verfügbarkeiten durch die Assistenz sowie Rechts-, Steuer- oder Anlageberatung. Inhalt, Preise, Verfügbarkeit und Rechtskonformität der Zielseite verantwortet allein der Kunde (§ 5, § 12).

## § 3 Vertragsstruktur und Vertragsschluss

(1) Der Vertrag ist ein **Hybridvertrag**: Die einmalige Setup-Leistung wird als **Werkvertrag (§ 631 BGB)**, der laufende Betrieb als **Dienstvertrag mit Dauerschuldcharakter (§ 611 BGB)** erbracht.

(2) Der Vertrag kommt durch Angebot der Agentur und dessen Annahme durch den Kunden in Textform (§ 126b BGB) zustande, spätestens mit Beginn der Setup-Leistung auf Veranlassung des Kunden.

(3) Leistungsschein, diese AGB sowie die Anlagen 1 (AVV) und 2 (SLA) bilden eine Einheit. Bei Widersprüchen gilt die Rangfolge: Leistungsschein → AGB → SLA. **Für Fragen der Verarbeitung personenbezogener Daten geht der AVV (Anlage 1) diesen AGB vor.**

## § 4 Setup-Leistung, Mitwirkung und Abnahme

(1) Die Setup-Leistung umfasst Einrichtung, Konfiguration und Integration der vereinbarten Module gemäß Leistungsschein. Der Kunde stellt alle erforderlichen Informationen, Daten und Zugänge vollständig und **spätestens innerhalb von fünf Werktagen nach Vertragsschluss** bereit; er wirkt nach der gewählten Setup-Variante mit (Selbstausfüllung des Onboarding-Formulars oder „Sorglos"-Variante).

(2) **Mitwirkungsverzug.** Stellt der Kunde erforderliche Daten, Zugänge oder Freigaben trotz Aufforderung nicht innerhalb angemessener Frist bereit, verschieben sich vereinbarte Termine entsprechend. Mehraufwand infolge verspäteter, unvollständiger oder fehlerhafter Mitwirkung kann die Agentur nach Ankündigung gesondert nach Aufwand berechnen.

(3) **Abnahme (§ 640 BGB).** Nach Mitteilung der Betriebsbereitschaft (Go-Live) prüft der Kunde das System unverzüglich und erklärt die Abnahme durch ein **formales Abnahmeprotokoll in Textform.**

(4) **Abnahmefiktion (Fallback).** Erklärt der Kunde die Abnahme nicht, gilt die Werkleistung als abgenommen, wenn (a) er innerhalb von sieben Kalendertagen nach Go-Live keine wesentlichen, die Nutzbarkeit einschränkenden Mängel in Textform rügt, oder (b) er das System produktiv nutzt (z. B. durch Freischaltung für reale Endkundenanrufe) (§ 640 Abs. 2 BGB).

(5) Mit der Abnahme gilt die Setup-Werkleistung als vertragsgemäß erbracht, beginnt die Gewährleistungsfrist und beginnt der laufende Betrieb (§ 5).

(6) Die Verjährungsfrist für Mängelansprüche aus der Setup-Werkleistung beträgt **ein Jahr ab Abnahme.** Dies gilt nicht für Schäden aus Vorsatz oder grober Fahrlässigkeit, aus der Verletzung von Leben, Körper oder Gesundheit sowie für Ansprüche nach Art. 82 DSGVO; insoweit gelten die gesetzlichen Fristen.

## § 5 Laufender Betrieb; Mitwirkungs- und Prüfpflichten des Kunden

(1) Im laufenden Betrieb stellt die Agentur die konfigurierten Leistungen nach Maßgabe des SLA (Anlage 2) bereit und pflegt sie. Geschuldet ist die sorgfältige Leistungserbringung als Dienstleistung, **nicht ein bestimmter Gesprächs-, Buchungs- oder Vertriebserfolg.**

(2) **Mitwirkungspflichten.** Der Kunde stellt die für den Betrieb erforderlichen Inhalts- und Stammdaten (z. B. Preise, Leistungen, FAQ, Öffnungszeiten) vollständig, richtig und aktuell bereit und benennt eine Failover-Rufnummer für die Anrufweiterleitung. Inhaltliche Änderungen (z. B. Preise, Öffnungszeiten, Stornobedingungen) meldet er unverzüglich in Textform.

(3) **Laufende Prüfpflicht.** Der Kunde prüft die von ihm bereitgestellten und im System hinterlegten Inhalte — insbesondere Preise und Verfügbarkeitsangaben — eigenverantwortlich und zeigt Fehler unverzüglich an. Zur Risikobegrenzung gelten folgende **Verhaltensregeln der Assistenz:** Sie nennt keine verbindlichen Preise, bestätigt keine verbindlichen Buchungen oder Bestellungen und leitet bei Unsicherheit weiter, statt zu schätzen.

(4) **Initiale Prüfpflicht.** Der Kunde überprüft nach Go-Live die **ersten 50 generierten Konversationen, längstens jedoch innerhalb von 14 Kalendertagen** (je nachdem, was zuerst eintritt), auf inhaltliche Abweichungen. Festgestellte systematische Fehler oder wiederkehrende Abweichungen meldet er unverzüglich über den SLA-Support-Prozess.

(5) Fehlerhafte Ausgaben, die auf vom Kunden **nicht oder verspätet gemeldete Inhalts- oder Preisänderungen** zurückgehen, fallen in den Verantwortungsbereich des Kunden.

## § 6 Vergütung und Zahlungsbedingungen

(1) Die Vergütung besteht aus einer **einmaligen Setup-Gebühr** (Werkvertrag, fällig mit Abnahme) und einem **monatlichen Retainer** (Dienstvertrag, fällig monatlich im Voraus zum Ersten des Kalendermonats). Die Höhe ergibt sich aus dem Leistungsschein. Alle Preise sind Nettopreise.

(2) Die Agentur ist Kleinunternehmer im Sinne des **§ 19 UStG**; es wird keine Umsatzsteuer berechnet oder ausgewiesen.

(3) **Fair-Use / Inklusivkontingent.** Der Retainer umfasst das im Leistungsschein genannte Kontingent. Eine reguläre Überschreitung führt nicht zum Verbindungsabbruch. Bei dauerhafter Überschreitung (mehr als 20 % über zwei aufeinanderfolgende Monate) erfolgt eine Anpassung in das nächsthöhere Paket nach vorheriger Ankündigung oder eine Nachberechnung der Überschussmenge zum vereinbarten Preis. Der Kunde wird bei Erreichen von 80 % des Kontingents informiert.

(4) **SEPA-Lastschrift.** Die Zahlung erfolgt im **SEPA-Basislastschriftverfahren (SEPA Core)**; der Kunde erteilt der Agentur bei Vertragsschluss ein SEPA-Mandat. Die Parteien vereinbaren abweichend von der regulären Frist eine **Vorabankündigung (Pre-Notification) von fünf Werktagen** vor Fälligkeit.

(5) Kosten, die der Agentur durch vom Kunden zu vertretende Rücklastschriften (z. B. mangels Kontodeckung oder unberechtigtem Widerruf) entstehen, sind vom Kunden in voller Höhe zu erstatten.

(6) Gerät der Kunde in Zahlungsverzug, ist die Agentur nach vorheriger Androhung und Ablauf einer Frist von sieben Tagen berechtigt, die Leistung bis zur vollständigen Zahlung **vorübergehend zu pausieren.** Die eingehende Erreichbarkeit bleibt durch Rufweiterleitung auf die Failover-Rufnummer gewahrt; die Vergütungspflicht bleibt während der Pausierung bestehen.

(7) Ein Aufrechnungs- oder Zurückbehaltungsrecht steht dem Kunden nur zu, soweit seine Gegenforderung unbestritten oder rechtskräftig festgestellt ist; das Zurückbehaltungsrecht aus demselben Vertragsverhältnis bleibt unberührt.

## § 7 Laufzeit, Verlängerung, Kündigung, Testphase

(1) Der Dienstvertrag beginnt mit der Abnahme der Setup-Leistung (§ 4) und hat eine **Mindestlaufzeit von drei Monaten.** Danach verlängert er sich **automatisch um jeweils einen weiteren Monat**, sofern er nicht fristgerecht gekündigt wird.

(2) **Ordentliche Kündigung.** Frist: **ein Monat zum Monatsende**, frühestens zum Ablauf der Mindestlaufzeit. Textform genügt (E-Mail ausreichend).

(3) **Außerordentliche Kündigung.** Das Recht zur Kündigung aus wichtigem Grund (§ 314 BGB) bleibt unberührt. Ein wichtiger Grund liegt **für den Kunden** insbesondere bei einem ununterbrochenen Totalausfall der Leistung von mehr als fünf Werktagen vor, **für die Agentur** insbesondere, wenn der Kunde sich mit einer Zahlung in Höhe von mindestens einer monatlichen Vergütung für mehr als 30 Tage in Verzug befindet.

(4) **Testphase (Zufriedenheitsgarantie).** Der Kunde kann den laufenden Betrieb **innerhalb von 14 Tagen ab Go-Live** ohne Angabe von Gründen in Textform beenden. Bereits gezahlte **monatliche Retainer-Beträge werden erstattet.** Die einmalige **Setup-Gebühr wird nicht erstattet**, da die Setup-Werkleistung abgenommen und vollständig erbracht wurde. Ein Verbraucher-Widerrufsrecht besteht im B2B-Verhältnis nicht; die Zufriedenheitsgarantie ist eine freiwillige vertragliche Leistung.

(5) **Folgen der Beendigung.** Mit Vertragsende deaktiviert die Agentur die Leistung und stellt die Rufweiterleitung auf die Rufnummer des Kunden um. Für Datenexport und Löschung gilt § 13; für das geistige Eigentum gilt § 14.

## § 8 Verfügbarkeit und Service Level (SLA)

(1) Die Einzelheiten zu Verfügbarkeit, Support-Zeiten, Reaktionszeiten und Störungsklassen (P0/P1/P2) regelt das **SLA (Anlage 2).**

(2) Die Agentur erbringt den laufenden Betrieb mit einer Zielverfügbarkeit von **99 % im Monatsmittel.** Bei Störungen greift ein automatischer Failover, der eingehende Anrufe auf die Failover-Rufnummer des Kunden umleitet. Persönlicher Support wird werktags von 9 bis 18 Uhr geleistet; außerhalb dieser Zeiten erfolgt automatisiertes Monitoring mit Failover.

(3) Unterschreitet die tatsächliche Verfügbarkeit die zugesagte Verfügbarkeit, gewährt die Agentur eine anteilige Gutschrift auf den Retainer nach Maßgabe der Anlage 2. Weitergehende Ansprüche richten sich nach § 12.

## § 9 Drittanbieter-Ereignisse und Eskalationsstufen

Die Leistung ist technisch und wirtschaftlich an Drittanbieter-APIs gebunden. Zur Absicherung beider Parteien gilt folgendes Stufenmodell:

(1) **Stufe 1 — Ausfall.** Bei einem ungeplanten Ausfall eines wesentlichen Drittanbieters greift die Notlaufeigenschaft: Die Agentur leitet eingehende Anrufe auf die Failover-Rufnummer des Kunden um. Der Kunde wird unverzüglich informiert. Ein Drittanbieter-Ausfall stellt keinen von der Agentur zu vertretenden Mangel dar.

(2) **Stufe 2 — dauerhafte API- oder Modelländerung.** Ändert, beschränkt oder beendet ein Drittanbieter einen wesentlichen Dienst dauerhaft, ist die Agentur berechtigt, das betroffene Modell bzw. den Dienst durch eine **funktional gleichwertige Alternative** (z. B. Wechsel des LLM-Anbieters) zu ersetzen, ohne dass dies einen Mangel darstellt.

(3) **Stufe 3 — Kostensteigerung.** Erhöht ein wesentlicher Drittanbieter seine Preise um mehr als 10 %, ist die Agentur berechtigt, den Retainer in entsprechendem Umfang mit einer Vorankündigung von 30 Tagen in Textform anzupassen. In diesem Fall steht **beiden Parteien** ein Sonderkündigungsrecht mit einer Frist von 14 Tagen ab Zugang der Mitteilung zu.

## § 10 Missbräuchliche und anomale Nutzung; Kostenzurechnung

(1) **Zurechnung.** Verbrauch, der über die dem Kunden zugeordnete Rufnummer oder Website ausgelöst wird, fällt in den Risikobereich des Kunden. Sämtliche verbrauchten Einheiten (z. B. Gesprächsminuten) werden zum vereinbarten Preis berechnet, unabhängig davon, ob sie durch reguläre Endkundenkontakte oder durch missbräuchliche Nutzung Dritter (z. B. automatisierte Massenanrufe, Bot- oder Spam-Angriffe) verursacht wurden.

(2) **Schutzmaßnahmen und Berechtigung.** Die Agentur ergreift zumutbare technische Schutzmaßnahmen gegen missbräuchliche Nutzung (insbesondere Tages- und Parallelitätslimits sowie Begrenzungen der Gesprächsdauer). Sie ist **berechtigt**, bei missbräuchlicher oder erkennbar anomaler Nutzung die Leistung zu drosseln oder vorübergehend zu deaktivieren und das Failover zu aktivieren. Der Kunde wird unverzüglich informiert.

(3) **Zumutbarkeitsgrenze.** Kosten, die nach Kenntnis der Agentur von einer missbräuchlichen Nutzung durch unterlassenes zumutbares Eingreifen weiterlaufen, trägt die Agentur. Im Übrigen verbleibt die Kostentragung beim Kunden gemäß Absatz 1.

(4) Die konkreten Schwellenwerte der Schutzmaßnahmen werden im technischen Setup bzw. im SLA (Anlage 2) festgelegt und können je Kunde angepasst werden.

## § 11 Beschaffenheit der Leistung; probabilistische Natur generativer KI

(1) Die eingesetzten KI-Systeme sind **generativer, probabilistischer Natur.** Ihre Ausgaben werden statistisch erzeugt und können trotz sorgfältiger Konfiguration im Einzelfall unvollständig, unpräzise oder fehlerhaft sein. **Der Kunde bestätigt, diese Funktionsweise verstanden zu haben.**

(2) Eine bestimmte prozentuale Fehlerfreiheit wird nicht geschuldet und nicht zugesichert; sie ist bei nicht-deterministischen Systemen technisch nicht messbar. Die Risikobegrenzung erfolgt über die in § 5 Abs. 3 vereinbarten Verhaltensregeln sowie die Prüfpflichten des Kunden.

(3) Die Agentur hat keinen Einfluss auf Modell-Updates, Verfügbarkeit oder Leistungsmerkmale der Drittanbieter (§ 9); insoweit übernimmt sie keine Gewähr für deren Leistungen.

## § 12 Haftung

(1) Die Agentur haftet **unbeschränkt** bei Vorsatz und grober Fahrlässigkeit, bei der Verletzung von Leben, Körper oder Gesundheit, bei arglistigem Verschweigen von Mängeln, im Rahmen einer übernommenen Garantie sowie nach dem Produkthaftungsgesetz.

(2) Bei **einfacher Fahrlässigkeit** haftet die Agentur nur bei Verletzung einer **wesentlichen Vertragspflicht** (Kardinalpflicht — einer Pflicht, deren Erfüllung die ordnungsgemäße Durchführung des Vertrages überhaupt erst ermöglicht und auf deren Einhaltung der Kunde regelmäßig vertraut), begrenzt auf den **vertragstypischen, vorhersehbaren Schaden.**

(3) Die Haftung nach Absatz 2 ist der Höhe nach **begrenzt auf die Summe der in den letzten zwölf Monaten vor dem Schadensereignis vom Kunden gezahlten Netto-Vergütung.** Die Haftung für mittelbare Schäden und entgangenen Gewinn ist im Rahmen von Absatz 2 ausgeschlossen.

(4) **Vorrangige Ausnahme: Datenschutzhaftung.** Die Haftungsbegrenzungen der Absätze 2 und 3 gelten **nicht für Ansprüche nach Art. 82 DSGVO.** Eine solche Haftung kann durch Allgemeine Geschäftsbedingungen nicht begrenzt oder ausgeschlossen werden; insoweit gelten die gesetzlichen Bestimmungen.

(5) **Mitwirkung bei KI-Fehlern (§ 254 BGB).** Meldet der Kunde bekannte, wiederkehrende fehlerhafte KI-Ausgaben (insbesondere systematische Falschauskünfte) entgegen § 5 Abs. 3 und 4 nicht unverzüglich, kann dies bei daraus resultierenden Folgeschäden als anspruchsminderndes Mitverschulden berücksichtigt werden.

(6) **Klarstellung zur Außenhaftung.** Für Auskünfte der KI-Assistenz gegenüber Endkunden haftet im Außenverhältnis primär der Kunde als Betreiber des Dienstes. Ein etwaiger Regressanspruch des Kunden gegen die Agentur wird durch die vorstehenden Haftungsbegrenzungen erfasst.

(7) Schadensersatzansprüche gegen die Agentur verjähren in einem Jahr ab dem gesetzlichen Verjährungsbeginn; dies gilt nicht für Ansprüche nach Absatz 1 und Absatz 4.

## § 13 Datenschutz

(1) Bei der Verarbeitung personenbezogener Daten ist der **Kunde Verantwortlicher** (Art. 4 Nr. 7 DSGVO) und die **Agentur Auftragsverarbeiterin** (Art. 28 DSGVO). Die Einzelheiten regelt der **Auftragsverarbeitungsvertrag (Anlage 1)**, der diesen AGB in Datenschutzfragen vorgeht.

(2) Soweit eingesetzte Unter-Auftragsverarbeiter in einem Drittland (insbesondere USA) verarbeiten, gewährleistet die Agentur eine geeignete Übermittlungsgrundlage nach Art. 44 ff. DSGVO (EU-US Data Privacy Framework bzw. EU-Standardvertragsklauseln) nebst Transfer Impact Assessment; Einzelheiten regelt Anlage 1.

(3) **Gesprächstranskripte.** Die Entscheidung über Zweck, Rechtsgrundlage und Dauer der Speicherung von Gesprächstranskripten trifft der **Kunde als Verantwortlicher** im Wege einer Interessenabwägung nach Art. 6 Abs. 1 lit. f DSGVO. Die Agentur stellt hierfür ein Muster sowie die technisch-organisatorischen Maßnahmen bereit; die Regel-Speicherdauer beträgt **90 Tage.**

(4) **Rückgabe und Löschung.** Nach Vertragsende stellt die Agentur dem Kunden dessen Daten innerhalb von 14 Tagen in einem gängigen Format zum Export bereit und löscht die personenbezogenen Daten, CRM-Daten und Gesprächstranskripte innerhalb von 30 Tagen nach Vertragsende, soweit keine gesetzliche Aufbewahrungspflicht entgegensteht (Art. 28 Abs. 3 lit. g DSGVO).

## § 14 Geistiges Eigentum und Nutzungsrechte

(1) **Eigentum der Agentur.** Sämtliche von der Agentur entwickelten Strukturen und Konfigurationen — insbesondere System-Prompt-Architektur und -Logik, make.com-Szenarien (Blueprints), Tool- und Webhook-Konfigurationen sowie Onboarding-Templates — sind und bleiben geistiges Eigentum der Agentur. Der Kunde erhält für die Vertragslaufzeit ein einfaches, nicht übertragbares und nicht unterlizenzierbares Nutzungsrecht für den vertragsgemäßen Betrieb. Ein Zugang zu den Plattform-Accounts der Agentur wird nicht eingeräumt.

(2) **Kein gemeinsames Werk (§ 8 UrhG).** Die Einbindung von Inhaltsdaten des Kunden begründet keine Miturheberschaft an der Systemarchitektur; die Prompt-Struktur verbleibt auch dann bei der Agentur, wenn Kundeninhalte eingeflossen sind.

(3) **Eigentum des Kunden.** Die vom Kunden bereitgestellten Inhalts- und Stammdaten, die Gesprächstranskripte sowie die erzeugten CRM-/Kontaktdaten stehen im Eigentum des Kunden und werden gemäß § 13 herausgegeben. Die Agentur-IP (Blueprints, Prompts, Konfigurationen) wird ohne gesonderte Vereinbarung über einen vollumfänglichen Rechteerwerb (IP-Buyout) nicht herausgegeben.

## § 15 Vertraulichkeit

(1) Die Parteien behandeln alle im Rahmen der Zusammenarbeit erlangten, nicht offenkundigen Informationen der jeweils anderen Partei vertraulich und nutzen sie ausschließlich zu Vertragszwecken. Dies umfasst auf Seiten der Agentur insbesondere die Prompt-Architektur und Automatisierungslogik, auf Seiten des Kunden dessen Geschäfts- und Endkundendaten.

(2) Echte Geschäftsgeheimnisse im Sinne des GeschGehG sind zeitlich unbegrenzt geschützt, solange sie geheim bleiben. Im Übrigen besteht die Vertraulichkeitspflicht für die Dauer des Vertrages und **drei Jahre über dessen Beendigung hinaus.** Datenschutzrechtliche Pflichten aus dem AVV (Anlage 1) gelten unabhängig fort.

## § 16 KI-Verordnung (EU AI Act)

(1) Die Agentur ist Betreiber (Deployer) gemäß Art. 3 Nr. 4 KI-VO (§ 2 Abs. 2). Der Kunde ist hinsichtlich des Einsatzes der Assistenz in seinem Geschäftsbetrieb gleichfalls Betreiber im Sinne der KI-VO.

(2) **KI-Kompetenz (Art. 4 KI-VO).** Die Agentur stellt dem Kunden im Onboarding eine Einweisung in Funktionsweise, Grenzen und sachgemäße Nutzung bereit. Der Kunde stellt sicher, dass die mit der Assistenz befassten Personen über ausreichende KI-Kompetenz verfügen.

(3) **Transparenz (Art. 50 KI-VO).** Endkunden werden zu Beginn der Interaktion darüber informiert, dass sie mit einem KI-System kommunizieren. Die Agentur konfiguriert die Ansage technisch; die rechtliche Verantwortung gegenüber Endkunden trägt der Kunde als Betreiber. Die Kennzeichnung ist bereits nach Art. 13 DSGVO und § 5a UWG geboten; die spezifische Transparenzpflicht des Art. 50 KI-VO gilt **ab dem 2. August 2026.** Der Kunde ist verpflichtet, diese Transparenzhinweise nicht zu entfernen, zu umgehen oder die Agentur zu deren Entfernung anzuweisen.

## § 17 Preisanpassung

(1) Die Agentur kann den monatlichen Retainer **einmal jährlich zum Jahreswechsel um bis zu 5 % anpassen.** Die Anpassung wird dem Kunden mindestens **30 Tage** im Voraus in Textform mitgeteilt; dem Kunden steht zum Zeitpunkt des Wirksamwerdens ein **Sonderkündigungsrecht** zu.

(2) Anpassungen aufgrund von Preissteigerungen wesentlicher Drittanbieter richten sich nach § 9 Abs. 3.

## § 18 Änderungen dieser AGB (aktive Zustimmung)

(1) Die Agentur kann diese AGB mit Wirkung für die Zukunft ändern, soweit dies zur Anpassung an geänderte Rechtslage, höchstrichterliche Rechtsprechung oder geänderte Leistungen der Drittanbieter erforderlich ist und der Kunde dadurch nicht unangemessen benachteiligt wird.

(2) **Auf eine passive Zustimmungsfiktion wird verzichtet.** Änderungen werden dem Kunden mindestens sechs Wochen vor Inkrafttreten in Textform mitgeteilt und bedürfen zu ihrer Wirksamkeit der **aktiven Zustimmung des Kunden (Opt-in)**, die auch in digitale Reporting- oder SLA-Prozesse integriert werden kann. Stimmt der Kunde einer erforderlichen Änderung nicht innerhalb der Frist zu, ist die Agentur berechtigt, den Vertrag zum Wirksamwerden der Änderung ordentlich zu kündigen.

## § 19 Besondere Pflichten des Kunden

(1) Der Kunde benennt einen festen, zeichnungsberechtigten Ansprechpartner für die vertragliche Kommunikation, Systemfreigaben und inhaltliche Änderungen.

## § 20 Schlussbestimmungen

(1) Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts (CISG).

(2) Erfüllungsort für alle Leistungen aus diesem Vertrag ist Wunstorf (Sitz der Agentur).

(3) **Gerichtsstand.** Soweit der Kunde Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist, ist ausschließlicher Gerichtsstand Hannover (§ 38 ZPO). Handelt es sich beim Kunden um einen Nichtkaufmann (z. B. eine nicht ins Handelsregister eingetragene GbR), gelten die allgemeinen gesetzlichen Gerichtsstände.

(4) Änderungen und Ergänzungen dieses Vertrages sowie Nebenabreden bedürfen der Textform. Dies gilt auch für die Aufhebung des Textformerfordernisses selbst. Der Vorrang individueller Vereinbarungen (§ 305b BGB) bleibt unberührt.

(5) **Keine geltungserhaltende salvatorische Klausel.** Sollte eine Bestimmung dieses Vertrages ganz oder teilweise unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. An die Stelle der unwirksamen Bestimmung tritt die gesetzliche Regelung (§ 306 Abs. 2 BGB).

(6) Diese AGB treten in der Fassung v1.1 mit Stand Mai 2026 in Kraft.

---

## Anlagenverzeichnis

| Anlage | Dokument | Status |
|---|---|---|
| **Anlage 1** | Auftragsverarbeitungsvertrag (AVV) nach Art. 28 DSGVO | Stand v2.2 (Basis v2.1 anwaltlich geprüft + Brevo/Meta-Ergänzung) |
| **Anlage 2** | Service Level Agreement (SLA) — Verfügbarkeit, Support, Störungsklassen P0/P1/P2 | gesonderte Konsolidierung |
| **Individualvereinbarung** | Leistungsschein / Angebot (Module, Preise, Kontingente) | je Vertrag |

---
---

# Klausel-Kommentar & Anwalts-Prüfliste

> **Nicht Vertragsbestandteil.** Interne Dokumentation. Vor Weitergabe an Kunden entfernen.

## Herkunft der konsolidierten Klauseln (v1.1)

| § | Inhalt | Herkunft | Confidence |
|---|---|---|---|
| 1 (5) | Begriffsbestimmungen inkl. „Werktage" | v1.0 (Gemini-Lücke) | Praktisch sicher |
| 2 (2) | Deployer-Wording | compliance-memo Z.118 | Praktisch sicher |
| 4 (3)(4) | Formales Protokoll + Fiktion-Fallback (produktive Nutzung) | v1.0 (E) + Gemini-Trigger | Praktisch sicher |
| 5 (4) | Initiale Prüfpflicht „50 Konversationen, längstens 14 Tage" | NotebookLM/Gemini, präzisiert | Sehr zuversichtlich |
| 6 (4) | SEPA-**Core** (nicht Firmenlastschrift) | sepa-payment-setup Z.25/48 | Praktisch sicher |
| 6 (5) | Rücklastschriftkosten | Gemini | Sehr zuversichtlich |
| 7 (3) | Verzug 30 Tage + Betragsschwelle, beidseitig | Gemini + Kunden-Seite ergänzt | Sehr zuversichtlich |
| 7 (4) | Testphase nur Retainer | v1.0 (F) | Sehr zuversichtlich |
| 9 | Drittanbieter-Risikoprotokoll, 3 Stufen | Gemini/NotebookLM | Sehr zuversichtlich |
| 9 (3) | Beidseitiges Sonderkündigungsrecht | NotebookLM-Korrektur | Sehr zuversichtlich |
| 10 | Missbrauch: Zurechnung + Schutzmaßnahmen + § 307-Zumutbarkeit | dieser Chat | Sehr zuversichtlich |
| 12 (4) | Art. 82 DSGVO Ausnahme | Phase1 §8.1 | Praktisch sicher (kritischste Klausel) |
| 12 (5) | KI-Fehler: § 254 anspruchsmindernd (kein Ausschluss) | NotebookLM-Korrektur an Gemini | Sehr zuversichtlich |
| 13 (1)(3) | DS-Rollen + Transkript-Abwägung beim Verantwortlichen | Interessenabwägung Z.12 | Praktisch sicher |
| 13 (4) | Löschung 14/30 Tage | Phase3 §3.2 (Gemini-Regression behoben) | Praktisch sicher |
| 15 (2) | Vertraulichkeit differenziert (GeschGehG / 3 Jahre) | v1.0, gegen Gemini „unbegrenzt" | Sehr zuversichtlich |
| 16 (3) | Art. 50 + Manipulationsschutz | Phase1 §5.2 + Gemini | Praktisch sicher |
| 17 (1) | Preisanpassung 5 % p.a. | Phase1 §8.3 (Gemini-Lücke) | Praktisch sicher |
| 18 | Opt-in + Kündigungsfallback | NotebookLM, ergänzt | Mäßig zuversichtlich |
| 20 (5) | Keine geltungserhaltende salvatorische Klausel | v1.0, § 306 BGB | Sehr zuversichtlich |

## Vorrangige Punkte für die anwaltliche Prüfung

1. **§ 12 Abs. 4 (Art. 82 DSGVO):** ohne diese Ausnahme kippt die Haftungsbegrenzung nach § 307 BGB komplett.
2. **§ 18 (Opt-in mit Kündigungsfallback):** schwächster Punkt; die aktive Zustimmung ist sicherer als die Fiktion, aber der Kündigungsfallback bei Nichtzustimmung gegenlesen.
3. **§ 11 / § 12 Abs. 5 (probabilistische Klausel + KI-Mitverschulden):** im Lichte der anhängigen BGH-Revision zu OLG Hamm (ISF GmbH) prüfen.
4. **§ 10 Abs. 3 (Zumutbarkeitsgrenze):** sichert, dass die Kostenabwälzung bei Missbrauch der AGB-Kontrolle standhält — Formulierung bestätigen.
5. **§ 2 Abs. 2 / § 16 (Deployer-Wording):** prüfen, ob der Deployer-Status durchgängig gewahrt ist.

## Offene / nachzuziehende Punkte

- **[ADRESSE]** in § 1 Abs. 1 ergänzen (Impressum).
- **Technische Schutzmaßnahmen (§ 10 Abs. 2/4)** im SLA/Setup konkretisieren: ElevenLabs Tageslimit (z. B. 30–50), max. Gesprächsdauer (z. B. 5–10 Min), Bursting aus. Diese Werte NICHT in die AGB (sonst Garantiehaftung).
- **Anlage 1 (AVV v2.2)** und **Anlage 2 (SLA)** vor Live-Gang finalisieren.
- **Cross-Phase:** Phase3 §2.1↔§2.3 (Verzug 30/42/56 Tage) einheitlich auf 30 ziehen; §2.4 SEPA-Anbieter (Core, Variante C) nachziehen.
- **Cross-Phase:** Phase1 §4.1/§5.2/§7.3/§8 auf Cross-References zur AGB v1.1 reduzieren.

---

*Entwurf auf Basis der zum Mai 2026 geltenden Rechtslage. Keine Rechtsberatung. Vor Verwendung durch einen zugelassenen Fachanwalt für IT-Recht prüfen lassen.*
