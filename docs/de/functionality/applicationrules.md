---
tags:
  - anwendung
  - regeln
  - ausnahme
  - whitelist
  - blacklist
  - lags
  - laggy
  - spiele
  - leistung
  - fps
  - crash
  - sound
  - audio
  - absturz
---

# Probleme mit bestimmten Anwendungen oder Spielen lösen

Falls du Probleme mit bestimmten Anwendungen oder Spielen hast, kannst du Wallpaper Engine so einstellen, dass es das eigene Verhalten anpasst wenn du eine Anwendung ausführst, mit der du Probleme hast oder wenn diese beispielsweise Ton wiedergibt.

## Erstellen einer Anwendungsregel

Im Reiter *Leistung* der Wallpaper Engine-Einstellungen kannst du mit einem Klick auf den *Bearbeiten*-Knopf in der Zeile *Anwendungsregeln* eine Übersicht aller von dir erstellten Anwendungsregeln aufrufen. Durch einen Klick auf *Neue Regel erstellen* kannst du ein spezielles Verhalten für Wallpaper Engine für eine bestimmte Anwendung einrichten.

![Übersicht für Anwendungsregeln](./applicationrule.gif)

Dir wird eine Liste mit allen laufenden .exe-Dateien auf deinem System angezeigt. Entweder kannst du eine .exe aus der Liste auswählen oder du kannst den exakten Namen der .exe eintippen, mit welcher du Probleme hast. Du kannst die Bedingung und das Verhalten von Wallpaper Engine mit den zwei anderen Optionen konfigurieren. Siehe weiter unten für mehr Informationen und konkrete Beispiele.

::: tip Für Wallpaper Engine ist nur der exakte Name der .exe relevant. Der genaue Dateipfad ist dabei egal, du kannst also jede beliebige .exe im Feld *Anwendungsname* eintragen. Stelle dabei sicher, dass der Name der .exe genau gleich ist, inklusiver Groß- und Kleinschreibung.
:::

### Leistungsprobleme mit Anwendungen und Spielen lösen

Wähle die .exe des Programms aus der Liste aus oder tippe den Namen der .exe in das Feld **Anwendungsname**, für welches du eine spezielle Regel anlegen möchtest. Setze danach die **Bedingung** auf **Ist gestartet** und **Hintergrundwiedergabe** auf **Stoppen (Speicher freigeben)**. Dies bedeutet, dass Wallpaper Engine alle Hintergründe aus dem aktiven Systemspeicher entfernt wenn die Anwendung oder das Spiel gestartet wird. Dies beseitigt in jedem Fall jegliche Kompatibilitätsprobleme.

### Aussetzende Ton-Wiedergabe durch Aufnahmeprogramme beheben

Wähle die .exe des Programms aus der Liste aus oder tippe den Namen der .exe in das Feld **Anwendungsname**, für welches du eine spezielle Regel anlegen möchtest. Setze danach die **Bedingung** auf **Spielt Ton ab** und **Hintergrundwiedergabe** auf **Weiter ausführen**. Dies bedeutet, dass Wallpaper Engine sich nicht von alleine stumm schaltet, wenn die jeweilige Anwendung Ton wiedergibt oder aufnimmt. Windows unterscheidet nicht zwischen Tonwiedergabe und Tonaufnahme, daher schaltet sich Wallpaper Engine in einer Dauerschleife stumm und dann wieder laut, wenn eine andere Anwendung Wallpaper Engine filmt. Viele Anwendungen zum Spiele-Streaming können dies auch aus Versehen und ohne dein Wissen tun.

### Anderes Verhalten

Schaue dir über diesen Artikel hinaus die anderen Möglichkeiten zur Hintergrundwiedergabe an für alle möglichen Arten von Anwendungsregeln. Du kannst Wallpaper Engine auch so konfigurieren, dass es sich stumm schaltet oder pausiert, wenn du eine bestimmte Anwendung startest.

::: tip
Du kannst diese Einstellungen auch für alle Anwendungen verändern, indem du die entsprechenden Optionen im Reiter **Leistung** der Wallpaper Engine-Einstellungen anpasst. Falls du beispielsweise Leistungsprobleme in mehrere Spielen hast, könnte es sinnvoll sein einfach die Einstellung **Andere Anwendung vollbild** auf **Stoppen (Speicher freigeben)** zu setzen, sodass Wallpaper Engine sich selbst abschaltet, wenn du ein Spiel oder eine Vollbildanwendung startest.
:::
