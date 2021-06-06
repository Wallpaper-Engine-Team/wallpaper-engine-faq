# Audio-Visualisierer funktionieren nicht / Kein Ton erkannt

Es gibt verschiedene Gründe, warum Audio-Visualisierer nicht funktionieren können. Wir listen alle bekannten Gründe hier auf, bitte lies diese Seite komplett um sicherzustellen, dass du nicht aus Versehen einen der möglichen Gründe überspringst.

::: warning
Achtung Dieser Artikel handelt von nicht-funktionierenden Audio-Visualisierern. Falls du Probleme mit der Audio-Ausgabe von Hintergründen hast, schaue dir stattdessen diesen Hilfe-Artikel an:

* [Kein Ton wird abgespielt / Probleme mit der Audio-Ausgabe](/audio/nosound)
:::


## 1. Einstellungen des Audio-Geräts
Öffne die Wallpaper Engine-Einstellungen und navigier zum Reiter "Allgemein". Zur Mitte findest du die "Medien"-Sektion, in welcher du das **Audio-Aufnahmegerät** auswählen kannst. Stelle sicher, dass das korrekte Gerät ausgewählt ist. Wenn du dir unsicher bist, welches Gerät das korrekte ist, probiere alle möglichen Geräte durch, während du Musik hörst und schaue ob die Audio-Visualisierer anfangen zu funktionieren.

Falls das korrekte Audio-Gerät ausgewählt ist aber du trotzdem keinen Ton hörst oder deine Audio-Visualisierer nicht funktionieren, stelle sicher, dass Wallpaper Engine nicht in den Windows Audio-Einstellungen stumm geschaltet ist oder auf eine sehr niedrige Lautstärke gesetzt wurde. Windows unterscheidet nicht zwischen der Lautstärke für Audio-Aufnahmen und Audio-Wiedergabe. Dies bedeutet, dass wenn du eine sehr niedrige Lautstärke in Windows eingestellt hast, funktionieren Audio-Aufnahmen ebenfalls nicht:

![Erhöhe die Lautstärke und stelle sicher, dass Wallpaper Engine im Windows Lautstärke-Mixer nicht stumm geschaltet ist](./audiomixer.png)

Wenn Ton erkannt wird aber zu leise ist, vergiss nicht dass die Lautstärke deiner Anwendung (deines Musik-Wiedergabeprogramms, Web-Browsers, etc.) maßgeblich darüber entscheidet, wie gut Ton erkannt wird. Du kannst die Ton-Erkennung im Reiter "Allgemein" in den Wallpaper Engine-Einstellungen verstärken, wenn du die Lautstärke deiner Anwendung nicht erhöhen willst (die standardmäßige Lautstärke ist 50).

## 2. Hardware-spezifische Probleme

### Corsair Void Pro / Bluetooth / USB-Headsets

USB & Funk-Headsets weisen öfter Treiberprobleme auf. Bei vielen Geräten kann man das Problem lösen, indem man die Abtastrate in den Windows-Geräteeinstellungen auf 44100 Hz stellt:

Klicke mit Rechtsklick auf das Ton-Symbol rechts unten in der Windows-Taskleiste und wähle "Sound-Einstellungen öffnen" aus. Klicke auf "Geräte-Eigenschaften" in der "Ausgabe"-Sektion des Fensters was erscheint. Danach klicke auf "Erweiterte Geräte-Eigenschaften" und gehe dann auf den Reiter "Erweitert". Du kannst du Abtastrate dann in dem dort angezeigten Menü ändern. Der genaue Ort dieser Einstellung unterscheidet sich leicht zwischen verschiedenen Windows-Versionen. Wenn du diese Einstellung nicht finden kannst, durchsuche das Internet nach Anleitungen, wie du die Abtastrate für Audio-Geräte für deine Windows-Version ändern kannst.

![Setze die Abtastrate auf "24 bit, 44100 Hz"](./samplingrate.png)

### Razer-Headsets mit THX

Ändere die Ton-Eingabe in Wallpaper Engine zum "Lautsprecher (Razer XYZ)"-Gerät. Diese Option kann in den allgemeinen Einstellungen gefunden werden und alle Razer-Headsets mit THX-Effekten sollten mit dieser Änderung funktionieren.

## 3. Konflikt mit anderen Anwendungen

Falls du meinst, dass deine Audio-Einstellungen korrekt sind aber Hintergründe mit audio-visualisierenden Elementen nicht auf Ton reagieren, hast du wahrscheinlich Sound-Hardware oder Sound-Software, welche Loopback-Tonaufnahmen auf dem gesamten PC verhindern. Diese müssen korrekt eingestellt oder entfernt werden:

* Nahimic
* Sonic Suite
* Alienware Audio
* Zahlreiche weitere Anwendungen, besonders solche welche auf Notebooks vorinstalliert sind

Wenn du dir unsicher bist, ob du irgendwelche Anwendungen dieser Art installiert hast, kannst du auch das Scan-Tool von Wallpaper Engine verwenden, welches einige bekannte Anwendungen meldet, welche Probleme dieser Art verursachen:

* [Wallpaper Engine Scan-Tool](/debug/scantool.html)

