# Audio-Visualisierer funktionieren nicht / Kein Ton erkannt

Es gibt verschiedene Gründe, warum Audio-Visualisierer nicht funktionieren können. Wir listen alle bekannten Gründe hier auf, bitte lies diese Seite komplett um sicherzustellen, dass du nicht aus Versehen einen der möglichen Gründe überspringst.

## 1. Einstellungen des Audio-Geräts
Öffne die Wallpaper Engine-Einstellungen und navigier zum Reiter "Allgemein". Zur Mitte findest du die "Media"-Sektion, in welcher du ein Audio-Eingabe-Gerät auswählen kannst. Stelle sicher, dass das korrekte Gerät ausgewählt ist. Wenn du dir unsicher bist, welches Gerät das korrekte ist, probiere alle möglichen Geräte durch, während du Musik hörst und schaue ob die Audio-Visualisierer anfangen zu funktionieren.

Falls das korrekte Audio-Gerät ausgewählt ist aber du trotzdem keinen Ton hörst oder deine Audio-Visualisierer nicht funktionieren, stelle sicher, dass Wallpaper Engine nicht in den Windows Audio-Einstellungen stumm geschaltet ist oder auf eine sehr niedrige Lautstärke gesetzt wurde. Windows unterscheidet nicht zwischen der Lautstärke für Audio-Aufnahmen und Audio-Wiedergabe. Dies bedeutet, dass wenn du eine sehr niedrige Lautstärke in Windows eingestellt hast, funktionieren Audio-Aufnahmen ebenfalls nicht:

![Raise volume and unmute Wallpaper Engine in the Windows audio mixer](./audiomixer.png)

Wenn Ton erkannt wird aber zu leise ist, vergiss nicht dass die Lautstärke deiner Anwendung (deines Musik-Wiedergabeprogramms, Web-Browsers, etc.) maßgeblich darüber entscheidet, wie gut Ton erkannt wird. Du kannst die Ton-Erkennung im Reiter "Allgemein" in den Wallpaper Engine-Einstellungen verstärken, wenn du die Lautstärke deiner Anwendung nicht erhöhen willst (die standardmäßige Lautstärke ist 50).

## 2. Hardware-spezifische Probleme

### Corsair Void Pro / Bluetooth / USB-Headsets

USB & Funk-Headsets weisen öfter Treiberprobleme auf. Bei vielen Geräten kann man das Problem lösen, indem man die Abtastrate in den Windows-Geräteeinstellungen auf 44100 Hz stellt:

Right-click on the audio icon in the tray area in the lower right corner of Windows, select "Open Sound Settings". Click on "Device Properties" in the "Output" section of the window that opens up. Afterwards, click on "Additional device properties", then navigate to the "Advanced" tab. You can change the sampling rate in the menu shown there. The exact location is different on different versions of Windows. if you cannot find this option, search the web for guides on how to change the sampling rate of sound devices for your version of Windows.

![Set the sampling rate to "24 bit, 44100 Hz"](./samplingrate.png)

### Razer headsets with THX

Change the audio input in Wallpaper Engine to the 'Speakers (Razer XYZ)' device. This option is in the general settings and any Razer headset with THX effects should work with this solution.

## 3. Conflicting applications

If you believe your audio settings are correct but audio responsive wallpapers do not react to audio, you most likely have sound hardware or software that disables the loopback recording feature on the entire PC. It needs to be configured correctly or removed:

* Nahimic
* Sonic Suite
* Alienware Audio
* Various other applications, especially pre-installed ones on notebooks

If you are unsure if you have any such applications installed, you can also use the Wallpaper Engine scan tool and it will report some programs which are known to cause these issues:

* [Wallpaper Engine Scan Tool](/debug/scantool.html)

