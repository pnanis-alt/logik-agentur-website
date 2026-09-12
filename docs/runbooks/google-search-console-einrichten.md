# Google Search Console einrichten

**Stand:** 11.09.2026
**Gilt fuer:** logik-agentur.de, Startseite `index.html`
**Doku geprueft am 11.09.2026:**
- Inhaberschaft bestaetigen: https://support.google.com/webmasters/answer/9008080?hl=de
- Property hinzufuegen: https://support.google.com/webmasters/answer/34592?hl=de
- Sitemap einreichen: https://support.google.com/webmasters/answer/7451001?hl=de
- Indexierung beantragen: https://support.google.com/webmasters/answer/9012289?hl=de

## Warum

Ein Webentwickler hat am 11.09.2026 gemeldet, dass Google nichts zur Logik Agentur findet.
Geprueft am selben Tag:

- `index, follow` steht auf allen 5 Seiten, auch live. Die `robots.txt` erlaubt alles,
  die Sitemap ist erreichbar, es gibt keinen sperrenden `X-Robots-Tag`-Header.
- Die Google-Suche `site:logik-agentur.de` liefert trotzdem **0 Treffer**.
- Es gibt keine Spur einer Anmeldung bei Google: kein `google-site-verification` im
  HTML, kein passender TXT-Eintrag im DNS bei IONOS.

Die Seite blockiert Google also nicht. Google weiss nur nicht, dass es sie gibt.
Die Search Console ist Googles kostenloses Werkzeug, um das zu aendern.

## Gewaehlter Weg

**URL-Praefix-Property mit HTML-Tag.** Das Tag kommt in den `<head>` von `index.html`.
So muss niemand die DNS-Einstellungen bei IONOS anfassen, an denen auch die E-Mail haengt.
`www.` und `http://` leiten bereits auf `https://logik-agentur.de/` um, eine
Domain-Property bringt deshalb keinen spuerbaren Vorteil.

**Wichtig:** Das Tag nie wieder aus `index.html` entfernen. Google prueft regelmaessig,
ob es noch da ist. Fehlt es, erlischt der Zugang zur Search Console nach einer Frist.

## Ablauf

### Teil A: Pantelis, in der Search Console

0. **Welches Google-Konto:** das normale persoenliche Google-Konto von Pantelis, in dem
   auch das Unternehmensprofil des Hotels liegt. Ein Google-Konto darf mehrere
   Unternehmensprofile und mehrere Search-Console-Properties verwalten
   (https://support.google.com/business/answer/4669092?hl=de, geprueft 11.09.2026).
   Ein eigenes Agentur-Konto ist nur noetig, wenn andere Personen dieses Login mitbenutzen.
   Wer beim Hotel mitarbeitet, bekommt Zugriff besser ueber ein eigenes Google-Konto
   als Administrator (https://support.google.com/business/answer/3403100?hl=de).
1. Oeffne in Chrome https://search.google.com/search-console
2. Melde dich mit dem Google-Konto aus Schritt 0 an.
   Andere Personen oder Konten lassen sich spaeter unter **Einstellungen > Nutzer und
   Berechtigungen** hinzufuegen, die Wahl ist also nicht endgueltig.
3. Hast du noch keine Property, siehst du die Auswahl sofort. Sonst oeffne oben links
   die Property-Auswahl und klicke auf **+ Property hinzufuegen**.
4. Waehle **URL-Praefix**.
5. Trage ein: `https://logik-agentur.de/`
6. Klicke auf **Weiter**.
7. Waehle bei den Bestaetigungsmethoden **HTML-Tag**.
8. Kopiere das Tag. Es sieht so aus:
   `<meta name="google-site-verification" content="..." />`
9. Schick das Tag an Claude in den Chat. Es ist kein Kennwort, es steht spaeter
   ohnehin oeffentlich im Quelltext der Seite.
10. **Noch nicht auf Bestaetigen klicken.** Das Fenster offen lassen.

### Variante zu Teil A: Claude in Chrome klicken lassen

Wenn du nicht selbst klicken willst, kann der Claude in der Chrome-Erweiterung die
Search Console bedienen. Das ist eine eigene Sitzung, sie kennt weder dieses Gespraech
noch das Repo und kann nichts live schalten. Deshalb in zwei Schritten.

**Auftrag 1, vor dem Einbau des Codes.** In die Chrome-Erweiterung einfuegen:

> Ich bin in der Google Search Console angemeldet. Bitte lege eine neue Property vom
> Typ URL-Praefix fuer https://logik-agentur.de/ an. Waehle als Bestaetigungsmethode
> HTML-Tag und gib mir das vollstaendige Meta-Tag als Text aus, damit ich es kopieren
> kann. Klicke NICHT auf Bestaetigen und aendere sonst nichts.

Das ausgegebene Meta-Tag an Claude Code schicken. Der baut es ein und schaltet live.

**Auftrag 2, erst nachdem das Tag live ist.** In die Chrome-Erweiterung einfuegen:

> Das Bestaetigungs-Tag ist jetzt auf https://logik-agentur.de/ eingebaut. Bitte
> klicke in der Search Console auf Bestaetigen. Danach oeffne links Sitemaps, trage
> unter Neue Sitemap hinzufuegen https://logik-agentur.de/sitemap.xml ein und klicke
> Senden. Danach oben ueber URL pruefen nacheinander https://logik-agentur.de/ und
> https://logik-agentur.de/presse.html pruefen und jeweils Indexierung beantragen.
> Sag mir nach jedem Schritt, was auf dem Bildschirm steht.

### Teil B: Claude, im Repo

1. Tag in den `<head>` von `index.html` einsetzen, direkt unter `<meta name="robots">`.
2. Commit, dann Push nach Freigabe durch Pantelis.
3. Live pruefen: `curl -s https://logik-agentur.de/ | grep google-site-verification`
   muss das Tag zeigen. Wegen des Caches kann das bis zu 10 Minuten dauern.

### Teil C: Pantelis, zurueck in der Search Console

1. Klicke auf **Bestaetigen**.
2. Klicke links im Menue auf **Sitemaps**.
3. Trage unter **Neue Sitemap hinzufuegen** ein: `https://logik-agentur.de/sitemap.xml`
   Steht die Adresse schon vorne im Feld, reicht `sitemap.xml`.
4. Klicke auf **Senden**.
5. Klicke oben in die Suchleiste der Search Console (URL pruefen).
6. Trage ein: `https://logik-agentur.de/` und druecke Enter.
7. Klicke auf **Indexierung beantragen**.

## Was danach passiert

- Laut Google dauert die Indexierung meist einen Tag, manchmal ein bis zwei Wochen.
- Eine Garantie gibt es nicht.
- Pro Tag sind nur wenige Indexierungsanfragen erlaubt. Fuer mehrere Seiten ist die
  Sitemap der richtige Weg.
- Erste Daten in der Search Console brauchen einige Tage.

## Offene Punkte

- [ ] Teil A bis C durchgefuehrt
- [ ] Nach ein paar Tagen `site:logik-agentur.de` bei Google pruefen
- [ ] Google Search Console in "Wofuer ist das nochmal?" eintragen, sobald das Konto steht
- [ ] Google Unternehmensprofil fuer die Agentur: erst klaeren, ob die Agentur ueberhaupt
      darf. Google erlaubt ein Profil nur mit Standort, den Kunden besuchen, oder mit
      Dienstleistungen beim Kunden vor Ort (dann Adresse ausblenden, Einzugsgebiet angeben).
      Reine Fernarbeit reicht nicht. Richtlinie, geprueft am 11.09.2026:
      https://support.google.com/business/answer/3038177?hl=de
