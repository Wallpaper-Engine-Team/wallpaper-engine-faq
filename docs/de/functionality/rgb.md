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

### Corsair

Einige Hardware-Teile, wie **Corsairs Arbeitsspeicher (RAM) haben Software-Steuerung standardmäßig deaktiviert**, was bedeutet dass diese Speichermodule nicht dem Farbverlauf von Wallpaper Engine verfolgen, außer du konfigurierst diese explizit so in den Einstellungen. Stelle sicher, dass du die Option zur "vollen Software-Steuerung" in den Geräteeinstellungen deines Arbeitsspeichers in iCUE aktivierst:

![Volle Software-Kontrolle in iCUE aktivieren](./icue.png)

Überprüfe alle Einstellungen dieser Art für andere Hardware-Teile, welche ebenfalls nicht richtig funktionieren.

Bitte beachte, dass iCUE im *exklusiven Modus* benutzt wird, dies bedeutet, dass Wallpaper Engine eine höhere Priorität hat als andere iCUE-kompatible Software hat, so wie zum Beispiel Spiele. Wenn du möchtest, dass deine Spiele die Kontrolle über deine RGB-Hardware haben, gehe zum Reiter **Leistung** in den Einstellungen von Wallpaper Engine und setze die Einstellung **Andere Anwendungen vollbild** auf **Stoppen (Speicher freigeben)** um die Hintergründe vollständig zu stoppen, wenn du in einem Spiel bist. Alternativ kannst du das RGB-Plugin auch vollständig deaktivieren oder die RGB-Option auf einzelnen Hintergründen ausschalten.

Für weitere Unterstützung mit Corsair iCUE-Hardware, kontaktiere Corsair bitte direkt:

[help.corsair.com](https://help.corsair.com/)

Wenn du Probleme mit dem Support von Corsair hast, kannst du uns natürlich auch kontaktieren und wir können schauen, ob wir dir helfen können.

### Razer

Most problems related to Razer RGB hardware can be fixed by doing a clean reinstallation of the Razer software suite while Wallpaper Engine is turned off:

1. Turn off Wallpaper Engine completely. This is very important, do not skip this.
2. Deinstalliere jegliche Razer-Software von deinem Computer über die Windows-Systemsteuerung.
3. Redownload the latest version of Razer Synapse 3 and install it. **Important:** Make sure to also reinstall the **Chroma Connect** module in Razer Synapse itself.
4. Restart your computer, do not launch Wallpaper Engine before restarting Windows.

See if this resolves your issues with your RGB hardware. For additional support with Razer hardware, please contact Razer directly:

[support.razer.com](https://support.razer.com/)

Should you run into any issues with Razer's support, you can still reach out to us and we will see if we can help you.

#### Razer Synapse 2 and older

We only support Razer Synapse 3 or newer. If you are using Razer Synapse 1 or Razer Synapse 2, make sure to fully uninstall them and upgrade to the latest version of Razer Synapse. In the past, some users had issues with remnants of old Razer Synapse having been left on their system. If you had Razer Synapse 2 or older installed and have issues with your RGB lighting or even experience crashes with the RGB plugin being enabled, you may need to find any leftovers of old Razer Synapse versions on your system and delete it.

If your Razer hardware is relatively old and does not support Razer Synapse 3 or newer, unfortunately its RGB lighting is not compatible with Wallpaper Engine.