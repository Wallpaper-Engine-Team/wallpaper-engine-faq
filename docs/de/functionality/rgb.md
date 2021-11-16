---
tags:
  - hardware
---

# Unterstützung für RGB-Hardware (iCUE & Chroma)

Wallpaper Engine unterstützt [**Razer Chroma**](https://www.razer.com/chroma) und [**Corsair iCUE**](https://www.corsair.com/icue), inklusive von weiteren Systemen, welche im Ökosystem dieser beiden eingebunden sind.

## Wie aktiviere / deaktiviere ich RGB-Hardware?

Im Reiter "Plugins" in den Einstellungen von Wallpaper Engine, kannst du das Plugin namens **iCUE & Chroma SDK** finden. Du kannst dieses RGB-Plugin aktivieren oder deaktivieren, indem du das Kontrollkästchen links jeweils nach belieben einstellst. Du kannst auch auf das Zahnrad-Symbol klicken, um weitere Detail-Einstellungen vorzunehmen.

Darüber hinaus kannst du auch die Unterstützung für RGB-Hardware für jeden Hintergrund einzeln einstellen. Am oberen Ende der Einstellungen jedes Hintergrundes kannst du die Option **LED-Effekte aktivieren** finden, wenn das Plugin aktiviert ist. Dies erlaubt es dir festzulegen, ob ein einzelner Hintergrund deine RGB-Lichter steuern darf.

## Die RGB-Hardware wirkt zu hell

Standardmäßig erhöhen wir die RGB-Farben ein wenig. Auf vielen Hintergründen wirkt dies subjektiv aus unserer Sicht erst einmal besser, aber wenn du diesen Effekt nicht magst, kannst du die Option **LED Farben boosten** in den Einstellungen des RGB-Plugins deaktivieren.

## Meine RGB-Hardware funktioniert nicht

Wallpaper Engine ist nicht in der Lage direkt mit deiner RGB-Hardware zu kommunizieren, alle Farbinformationen werden an den RGB-Treiber vom Hersteller gesendet. Wenn ein oder mehrere Hardware-Teile nicht funktionieren muss das Problem in der Software deines Hardware-Herstellers liegen. Einige sehr alte Hardware-Teile werden gegebenenfalls nicht mehr vollständig vom Hardware-Hersteller unterstützt und können daher nicht funktionieren. Probleme dieser Art können von uns nicht behoben werden.

Wenn die *Plugin*-Sektion in den Einstellungen von Wallpaper Engine gar nicht für dich sichtbar ist, so ist die dafür benötigte Installation der *Visual C++ Redistributable für Visual Studio 2015* wahrscheinlich defekt oder fehlt vollständig. In diesem Fall kannst du das Paket von der Microsoft-Website herunterladen und installieren, dies sollte das Problem nach einem System-Neustart beheben:

* [Visual C++ Redistributable für Visual Studio 2015](https://www.microsoft.com/de-de/download/details.aspx?id=48145)

## Probleme mit RGB-Hardware nach Standby

In seltenen Fällen kann der Ruhemodus von Windows Probleme mit RGB-Hardware verursachen, sodass diese gar nicht oder nur beschränkt in Verbindung mit Wallpaper Engine funktioniert. Wenn ein Teil oder deine gesamte RGB-Hardware nach dem Aufwachen aus dem Standby nicht mehr funktioniert, versuche die Option **Sicherer Start nach Ruhemodus** im Reiter **Allgemein** der Einstellungen von Wallpaper Engine zu aktivieren, dies behebt Probleme dieser Art für die meisten betroffenen Nutzer.

Zudem kannst du noch die **Plugin-Lade-Verzögerung** am unteren Ende des Reiters **Plugins** in den Wallpaper Engine-Einstellungen benutzen, um die Verbindung zwischen deiner RGB-Hardware und Wallpaper Engine leicht zu verzögern. Du kannst beispielsweise einen Wert von **30 Sekunden** ausprobieren und schauen, ob dies dein Problem löst.

### Corsair

Seit iCUE 4 musst du die Software-Steuerung in den iCUE-Einstellungen zunächst aktivieren, ansonsten kann sich Wallpaper Engine nicht zu iCUE verbinden. Falls du Probleme mit der RGB-Beleuchtung in Kombination mit Corsair iCUE hast, überprüfe zunächst die iCUE-Einstellungen.

* Öffne iCUE.
* Klicke auf das Symbol für die Einstellungen oben rechts.
* Klicke auf **Software und Spiele** im linken Menü des Einstellungsfensters.
* Stelle sicher, dass die Optionen für *Software-Integrationen* aktiviert sind. Überprüfe den **Geräte**-Reiter und stelle sicher, dass deine Hardware-Geräte für diese Art von RGB-Beleuchtung freigegeben sind.

Falls du immer noch Probleme mit deiner Corsair-Beleuchtung hast, versuche eine vollständige Neuinstallation deiner Corsair iCUE-Software, dann starte deinen Computer neu und installiere es erneut. Die meisten Probleme können damit gelöst werden, dass die gesamte Corsair-Software neu installiert wird, gefolgt vom erneuten Aktivieren der Software-Integration wie oben beschrieben.

Bitte beachte, dass iCUE im *exklusiven Modus* benutzt wird, dies bedeutet, dass Wallpaper Engine eine höhere Priorität hat als andere iCUE-kompatible Software hat, so wie zum Beispiel Spiele. Wenn du möchtest, dass deine Spiele die Kontrolle über deine RGB-Hardware haben, gehe zum Reiter **Leistung** in den Einstellungen von Wallpaper Engine und setze die Einstellung **Andere Anwendungen vollbild** auf **Stoppen (Speicher freigeben)** um die Hintergründe vollständig zu stoppen, wenn du in einem Spiel bist. Alternativ kannst du das RGB-Plugin auch vollständig deaktivieren oder die RGB-Option auf einzelnen Hintergründen ausschalten.

Für weitere Unterstützung mit Corsair iCUE-Hardware, kontaktiere Corsair bitte direkt:

[help.corsair.com](https://help.corsair.com/)

Wenn du Probleme mit dem Support von Corsair hast, kannst du uns natürlich auch kontaktieren und wir können schauen, ob wir dir helfen können.

### Razer

Die meisten Probleme mit Razer RGB-Hardware können geläst werden, indem eine saubere Neuinstallation durchgeführt wird, während Wallpaper Engine ausgeschaltet ist:

1. Schalte Wallpaper Engine vollständig aus. Dies ist sehr wichtig, überspringe diesen Schritt nicht.
2. Deinstalliere jegliche Razer-Software von deinem Computer über die Windows-Systemsteuerung.
3. Lade die neueste Version von Razer Synapse 3 herunter und installiere es. **Wichtig:** Stelle sicher, dass du auch das **Chroma Connect**-Modul in Razer Synapse selbst neu installierst.
4. Starte deinen Computer neu, starte Wallpaper Engine nicht bis nach einem System-Neustart.

Überprüfe nun, ob deine Probleme mit deiner RGB-Hardware nun gelöst wurden. Für weitere Unterstützung mit Razer-Hardware, kontaktiere bitte Razer direkt:

[support.razer.com](https://support.razer.com/)

Wenn du Probleme mit dem Support von Razer hast, kannst du uns natürlich auch kontaktieren und wir können schauen, ob wir dir helfen können.

#### Razer Synapse 2 oder älter

Wir unterstützen nur Razer Synapse 3 oder neuer. Wenn du Razer Synapse 1 oder Razer Synapse 2 nutzt, stelle sicher, dass du diese zunächst vollständig deinstallierst und dann auf die neueste Version von Razer Synapse aktualisierst. In der Vergangenheit gab es einige Probleme mit Systemen, auf welchen Überreste von alten Razer Synapse-Versionen übrig waren. Falls du Razer Synapse 2 oder älter je installiert hattest und du Probleme mit deiner Beleuchtung hast oder sogar Abstürze mit dem RGB-Plugin hast, suche nach Überresten dieser alten Versionen von Razer Synapse und lösche diese.

Wenn deine Razer-Hardware relativ alt ist und Razer Synapse 3 oder neuer nicht unterstützt, so ist die RGB-Beleuchtung leider nicht mit Wallpaper Engine kompatibel.