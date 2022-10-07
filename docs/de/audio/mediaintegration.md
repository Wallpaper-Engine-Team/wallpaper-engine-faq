# Integration von Alben-Covern & Medien-Daten

Wallpaper Engine erlaubt es Erstellern von Hintergründen spezielle Elemente in die Hintergründe einzufügen, welche Alben-Cover, Song-Titel, Alben-Namen und weitere Song-Informationen im Hintergrund anzeigen. Diese Seite erklärt, wie du häufige Probleme mit diesem Feature lösen kannst.

::: warning
Bitte beachte
Dieser Artikel handelt speziell das Hintergrund-Feature für Alben-Cover und weiteren Song-Informationen. Falls du Probleme mit Audio-Visualisierungen hast oder falls du Audio-Visualisierungen auf bestimmte Musik-Wiedergabeprogramme beschränken willst, schau dir stattdessen bitte die jeweiligen Artikel zu diesen Themen an:

* [Audio-Visualisierer auf Musik-Programme beschränken](/audio/limittomusicplayer)
* [Audio-Visualisierer funktionieren nicht / Kein Ton erkannt](/audio/audiodetection)
:::

<video width="100%" controls autoplay loop>
  <source src="/videos/media_controls.mp4" type="video/mp4">
  Dein Browser unterstützt das Video-Tag nicht.
</video>

*Wallpaper Engine nimmt das Album-Cover und Song-Daten vom Windows Medien-Overlay, sichtbar oben links am Bildschirm.*

## Aktivieren des Features für Alben-Cover & Medien-Daten

Damit dieses Feature funktioniert, musst du sicherstellen, dass die folgenden Anforderungen erfüllt sind:

1. Du verwendest Windows 10 oder neuer.
2. Du hast die Option **Unterstützung für Medien-Integration** im Reiter **Allgemein** der Wallpaper Engine-Einstellungen aktiviert.
3. Dein Musik-Programm stellt Mediendaten für das Windows Medien-Overlay bereit (so wie oben dargestellt). Weitere Details folgen unten.
4. Deine Audio-Dateien enthalten Alben-Cover und Medien-Daten (Song-Titel, Interpret, Alben-Name, etc.).

### Einstellen deines Musik-Programms

Die meisten modernen Musik-Programme unterstützen das Windows Medien-Overlay, welches Wallpaper Engine für diese Funktion benötigt. Manchmal musst du dieses zunächst aktivieren. Öffne die Einstellungen deines Musik-Programms und suche nach der jeweiligen Option (manchmal in den erweiterten Einstellungen zu finden). Die Option hat normalerweise etwas wie *"Medien-Overlay"* oder "*Medien-Tastenkürzel"* im Namen. Falls du dir nicht sicher bist, suche im Internet nach dem Namen deines Musikprogramms, gefolgt von *"Medien Overlay"*.

## Ausschließen von Apps wie Web-Browsern vom Alben-Cover-Feature

Falls du bemerkst, dass ein Web-Browser oder eine andere Anwendung die Kontrolle über das Album-Cover-Feature übernimmt, kannst du es zur Medien-Blockliste hinzufügen. Öffne den Reiter **Allgemein** in den Wallpaper Engine-Einstellungen, navigiere zur **Windows**-Sektion und klicke auf die Schaltfläche **Bearbeiten** neben der Option **Medien-Sperrliste**. Stelle sicher, dass die App in diesem Moment mit dem Album-Cover-Feature interagiert, dann sollte diese als Vorschlag in der Blockliste angezeigt werden. Klicke auf die **Blockieren**-Schaltfläche neben der jeweiligen App, diese sollte nur nicht mehr mit dem Alben-Cover-Feature interagieren.