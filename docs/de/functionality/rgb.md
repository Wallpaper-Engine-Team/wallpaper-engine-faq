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

Starting with iCUE 4, you need to manually enable software control in the iCUE settings first, otherwise Wallpaper Engine cannot connect to iCUE. If you have any issues with RGB lighting in combination with Corsair iCUE, make sure to check the iCUE settings first.

* Open iCUE.
* Click the Settings icon in the upper right corner.
* Click **Software and Games** on the left menu of the settings window.
* Make sure that the *software integrations* options are enabled. Check the **Devices** tab to make sure all your hardware devices are also enabled for this type of RGB lighting.

If you still have issues with your Corsair lighting setup, try a full reinstallation of your Corsair iCUE software, then restart your computer and reinstall. Many issues can be resolved by reinstalling the Corsair software suite, followed by manually enabling the software integration options.

Note that iCUE is used in *exclusive mode*, this means that Wallpaper Engine will take priority over other iCUE-compatible software such as games. If you want your games to animate your keyboard, go to the **Performance** tab of the Wallpaper Engine settings and set the **Other applications fullscreen** option to **Stop (free memory)** to stop wallpapers while in-game. Alternatively, disable either the RGB plugin or disable the RGB option on individual wallpapers.

For support with Corsair iCUE hardware, please contact Corsair directly:

[help.corsair.com](https://help.corsair.com/)

Should you run into any issues with Corsair's support, you can still reach out to us and we will see if we can help you.

### Razer

Most problems related to Razer RGB hardware can be fixed by doing a clean reinstallation of the Razer software suite while Wallpaper Engine is turned off:

1. Schalte Wallpaper Engine vollständig aus. Dies ist sehr wichtig, überspringe diesen Schritt nicht.
2. Deinstalliere jegliche Razer-Software von deinem Computer über die Windows-Systemsteuerung.
3. Lade die neueste Version von Razer Synapse 3 herunter und installiere es. **Wichtig:** Stelle sicher, dass du auch das **Chroma Connect**-Modul in Razer Synapse selbst neu installierst.
4. Starte deinen Computer neu, starte Wallpaper Engine nicht bis nach einem System-Neustart.

See if this resolves your issues with your RGB hardware. For additional support with Razer hardware, please contact Razer directly:

[support.razer.com](https://support.razer.com/)

Should you run into any issues with Razer's support, you can still reach out to us and we will see if we can help you.

#### Razer Synapse 2 oder älter

We only support Razer Synapse 3 or newer. If you are using Razer Synapse 1 or Razer Synapse 2, make sure to fully uninstall them and upgrade to the latest version of Razer Synapse. In the past, some users had issues with remnants of old Razer Synapse having been left on their system. If you had Razer Synapse 2 or older installed and have issues with your RGB lighting or even experience crashes with the RGB plugin being enabled, you may need to find any leftovers of old Razer Synapse versions on your system and delete it.

If your Razer hardware is relatively old and does not support Razer Synapse 3 or newer, unfortunately its RGB lighting is not compatible with Wallpaper Engine.