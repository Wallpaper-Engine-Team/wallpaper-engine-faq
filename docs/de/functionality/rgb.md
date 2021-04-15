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

Wallpaper Engine is not capable of directly communicating to your RGB hardware, all color information are sent to the RGB drivers first. If one or more pieces of hardware are not working, the issue must be on the software side of your hardware vendor. Some very old hardware is not fully supported anymore by these hardware vendors and will not work. Keep in mind that this is nothing we can fix on our end.

If the *Plugin* section of Wallpaper Engine settings is not visible at all to you, you are likely missing or have a broken installation of the *Visual C++ Redistributable for Visual Studio 2015* which is mandatory for these features to work. You can download this package from the Microsoft website and install it, this should fix the issue after a system restart:

* [Visual C++ Redistributable for Visual Studio 2015](https://www.microsoft.com/de-de/download/details.aspx?id=48145)

### Corsair

Some hardware such as **Corsair system memory (RAM) have software controls disabled by default**, meaning that your memory modules will not light up according to Wallpaper Engine unless you allow this in the iCUE software settings. Make sure the "Enable full software control" option in your iCUE device settings in the memory section is selected:

![Volle Software-Kontrolle in iCUE aktivieren](./icue.png)

Double-check this option for any other hardware parts which are not working properly.

Note that iCUE is used in *exclusive mode*, this means that Wallpaper Engine will take priority over other iCUE-compatible software such as games. If you want your games to animate your keyboard, go to the **Performance** tab of the Wallpaper Engine settings and set the **Other applications fullscreen** option to **Stop (free memory)** to stop wallpapers while in-game. Alternatively, disable either the RGB plugin or disable the RGB option on individual wallpapers.

For support with Corsair iCUE hardware, please contact Corsair directly:

[help.corsair.com](https://help.corsair.com/)

Should you run into any issues with Corsair's support, you can still reach out to us and we will see if we can help you.

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