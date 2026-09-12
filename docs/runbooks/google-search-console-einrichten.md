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

- [x] Teil A bis C durchgefuehrt am 12.09.2026, von Claude per Chrome-Erweiterung:
      URL-Praefix-Property `https://logik-agentur.de/` angelegt, per HTML-Tag bestaetigt
      (Google-Konto nanpan81@gmail.com), Sitemap `sitemap.xml` eingereicht, Indexierung
      fuer die Startseite und fuer `presse.html` beantragt. Beide URLs waren zu dem
      Zeitpunkt "nicht auf Google" und liegen jetzt in der Crawling-Warteschlange.
- [ ] Nach ein paar Tagen `site:logik-agentur.de` bei Google pruefen
- [ ] Google Search Console in "Wofuer ist das nochmal?" eintragen, sobald das Konto steht
- [~] Google Unternehmensprofil fuer die Agentur, angelegt am 12.09.2026 im selben
      Google-Konto wie das Hotelprofil. Zulaessig, weil Pantelis Kunden auch vor Ort
      besucht, also "Unternehmen ohne festen Standort" mit Einzugsgebiet. Richtlinie
      geprueft am 11.09.2026: https://support.google.com/business/answer/3038177?hl=de
      Gesetzt: Name "Logik-Agentur", Hauptkategorie "Automationsunternehmen" (Google hat
      keine KI-Kategorie, "KI" liefert nur Kino und Kiosk), Telefon, Webseite,
      Beschreibung 654 Zeichen mit Voice-Agent als Hauptbegriff.
      Bewusst uebersprungen: Foto der Aussenansicht (Wohnhaus), Fotogalerie,
      Google-Ads-Guthaben 450 Euro, Google Workspace (Microsoft 365 ist im Einsatz).
      Status im Dashboard: "Inhalte werden ueberprueft", Geschaeftscode
      11949288074443089549. **Noch offen:** Bestaetigung (Methode bestimmt Google, meist
      Video oder Telefon, bis zu fuenf Werktage), Kontrolle ob die Privatadresse
      ausgeblendet ist, Einzugsgebiete Wunstorf und Region Hannover pruefen, Logo als
      Profilbild hochladen, Zweitkategorie "Unternehmensberater" ergaenzen.
      Bis die Bestaetigung durch ist: Name, Adresse und Kategorie nicht aendern.
      Logo-PNG fuer Google entsteht aus `assets/logo.svg`, 512 mal 512 auf weissem Grund.
- [x] Indexierung: am 12.09.2026, rund eine Stunde nach dem Antrag, liefert
      `site:logik-agentur.de` zwei Treffer, Startseite und `presse.html`. Vorher null.
- [x] Adresse: im Profil steht "Kein Geschaeftsstandort vorhanden". Die Privatadresse
      wird also nicht oeffentlich angezeigt, geprueft am 12.09.2026.
- [x] Einzugsgebiet: stand zuerst auf "Deutschland", das verstoesst gegen Googles
      Zwei-Stunden-Regel. Am 12.09.2026 ersetzt durch 13 Gebiete: Hannover, Wunstorf,
      Barsinghausen, Neustadt am Ruebenberge, Stadthagen, Bad Nenndorf, Rehburg-Loccum,
      Lauenhagen, Pollhagen, Hagenburg, Woelpinghausen, Auhagen, Sachsenhagen.
      Status "ausstehend", Google prueft das laut Hinweis bis zu zehn Minuten.
- [ ] Der Profilname lautet bei Google **"Logik Agentur" ohne Bindestrich**, obwohl
      "Logik-Agentur" eingegeben wurde. Nicht jetzt korrigieren: Name, Adresse und
      Kategorie waehrend der laufenden Bestaetigung zu aendern macht Bestaetigungscodes
      ungueltig. Nach der Bestaetigung nachziehen.
- [ ] Aus demselben Grund wartet die Zweitkategorie "Unternehmensberater" bis nach der
      Bestaetigung.
- [ ] Logo als Profilbild: Claude kann es nicht hochladen. Das Bearbeitungsfenster liegt
      in einem Bereich, den die Browser-Werkzeuge nicht auslesen koennen, und der
      Hochladen-Knopf oeffnet ein Systemfenster, das Claude nicht bedienen darf.
      Pantelis laedt hoch: `~/Desktop/logo-logik-agentur-512.png`, 512 mal 512, weisser
      Grund, erzeugt aus `assets/logo.svg`.
- [ ] Falle: Das Bearbeiten des Unternehmensprofils laeuft bei Google inzwischen auf
      `www.google.com/search`. Die Claude-Chrome-Erweiterung braucht fuer diese Domain
      eine eigene Freigabe, sonst kann Claude dort nichts sehen und nichts klicken.
