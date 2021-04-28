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

## Problems with RGB hardware after hibernation

In rare cases, hibernation may cause RGB hardware to stop working in combination with Wallpaper Engine. If some or all of your RGB hardware stops working correctly after your system wakes up from hibernation, try enabling the **Safe start after hibernation** option in the **General** tab of the Wallpaper Engine settings, this solves these types of issues for the majority of affected users.

Additionally, you can use the **Plugin load delay** option at the bottom of the **Plugins** tab of the Wallpaper Engine settings to delay the connection attempt that Wallpaper Engine makes to your RGB hardware. You can try a value of **30 seconds** and test if that fixes the problem for you.

### Corsair

Some hardware such as **Corsair system memory (RAM) have software controls disabled by default**, meaning that your memory modules will not light up according to Wallpaper Engine unless you allow this in the iCUE software settings. Make sure the "Enable full software control" option in your iCUE device settings in the memory section is selected:

![Enable full software control in iCUE](./icue.png)

Double-check this option for any other hardware parts which are not working properly.

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