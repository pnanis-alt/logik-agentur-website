# Umami-Zaehlskript aktualisieren

**Stand:** 24.08.2026
**Gilt fuer:** `assets/umami.js` in diesem Repo

## Warum das Skript hier liegt

Frueher hat jede Seite dieser Website das Zaehlskript direkt vom Statistikserver
`stats.logik-agentur.de` geladen. Damit lief auf jeder Seite fremder Code, den der
Statistikserver bestimmt. Wer diesen Server uebernimmt, haette Code im Namen der
Website ausfuehren koennen: Formulare mitlesen, Besucher umleiten, alles.

Seit dem 24.08.2026 liegt eine feste Kopie des Skripts im Repo und wird von
GitHub Pages ausgeliefert. Der Statistikserver bekommt nur noch die fertigen
Messmeldungen (`data-host-url`). Aus einem moeglichen Totalschaden werden im
schlimmsten Fall falsche Besuchszahlen.

Hintergrund: Sicherheitsbericht `~/docs/security/bericht-website-audit-2026-08-19.md`,
Punkt P1-4.

## Der Preis dafuer

Die Kopie altert nicht mit. Wird Umami auf dem Server aktualisiert, bringt das neue
Umami oft auch ein neues Zaehlskript mit. Die Kopie hier bleibt dann alt. Meist ist
das harmlos, kann aber dazu fuehren, dass neue Umami-Funktionen nicht greifen oder
im Extremfall gar nicht mehr gezaehlt wird.

**Deshalb: nach jedem Umami-Update auf dem Server diesen Ablauf durchgehen.**

## Aktueller Stand der Kopie

| Feld | Wert |
|---|---|
| Heruntergeladen am | 24.08.2026 |
| Quelle | `https://stats.logik-agentur.de/script.js` |
| Groesse | 4655 Bytes |
| Pruefsumme (SHA-256) | `1ad1145d19d4558c20f5469ca4a5fc50a1a46f860858c9c91bfcd56fd29a522a` |
| `last-modified` des Servers | Wed, 24 Jun 2026 23:36:36 GMT |

## Ablauf: pruefen, ob sich etwas geaendert hat

Ein Befehl. Er laedt das aktuelle Skript vom Server und vergleicht es mit der Kopie.

```
curl -sS "https://stats.logik-agentur.de/script.js" | shasum -a 256
```

Kommt die gleiche Pruefsumme heraus wie in der Tabelle oben, ist nichts zu tun.
Kommt eine andere heraus, weiter mit dem naechsten Abschnitt.

## Ablauf: Kopie erneuern

```
cd "/Users/pantelis/Logik Agentur/logik-agentur-website"
git checkout main
git pull
curl -sS -o assets/umami.js "https://stats.logik-agentur.de/script.js"
shasum -a 256 assets/umami.js
wc -c assets/umami.js
```

Danach:

1. Die neue Pruefsumme, Groesse und das heutige Datum oben in die Tabelle eintragen.
2. Pruefen, dass das Skript noch `data-host-url` versteht:
   `grep -c "host-url" assets/umami.js` muss `1` ergeben. Ergibt es `0`, **nicht
   committen** und erst klaeren, wie die neue Umami-Fassung konfiguriert wird.
3. Committen und pushen.
4. Nach ein bis zwei Minuten auf `https://logik-agentur.de` gehen, Seite neu laden,
   dann in Umami unter "Realtime" nachsehen, ob der eigene Besuch ankommt.

## Wenn gar nichts mehr gezaehlt wird

Der haeufigste Grund ist, dass der Statistikserver die Messmeldungen nicht mehr
von der Website annimmt. Pruefen mit:

```
curl -sS -i -X OPTIONS "https://stats.logik-agentur.de/api/send" \
  -H "Origin: https://logik-agentur.de" \
  -H "Access-Control-Request-Method: POST" | grep -i "access-control-allow-origin"
```

Erwartet wird eine Zeile mit `access-control-allow-origin`. Fehlt sie, muss der
Statistikserver angepasst werden, nicht diese Website.

## Wiedervorlage

Dieser Punkt steht als **C2b** in `~/docs/security/offene-punkte.md` und wird bei
jedem Umami-Update auf dem Server faellig.
