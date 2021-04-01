---
tags:
  - farben
  - hell
  - dunkel
  - zoom
  - groß
  - verpixelt
  - rand
  - gamma
  - qualität
  - falsch
  - hässlich
---

# Video-Hintergründen werden nicht korrekt dargestellt

Im Gegensatz zu den meisten Video-Playern nutzt Wallpaper Engine Hardware-Beschleunigung für Videos um die Computer-Auslastung zu minimieren. Dies bedeutet, dass deine Grafikkartentreiber das Aussehen von Videos beeinflussen können.

**Falls deine Video-Hintergründe falsche Farben haben, zu hell oder zu dunkel sind, reingezoomt oder verpixelt aussehen oder falls ein Rand um den Hintergrund ist**, kannst du dieses Problem durch das Zurücksetzen deiner Video-Optionen in deinen Grafikkartentreiber-Einstellungen deiner Nvidia-, AMD- oder Intel-Grafikkarte lösen. Falls dein Computer mehrere GPUs hat (zum Beispiel eine Haupt-Karte von Nvidia und eine zweite GPU von Intel), stelle sicher, dass du beide Treiber zurücksetzt.

You can also reinstall the graphics card drivers and choose to reset all settings ("clean re-installation") to do this, this is possible with Nvidia's drivers, for example. That means you need to first uninstall your drivers and then re-install the latest drivers after your current drivers have been fully uninstalled. Some drivers offer a "Perform clean re-installation" option in the advanced section, be sure to enable that option to automatically clean any remnants of broken drivers. You can get the latest graphics card drivers from all big vendors here:

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx)
* [AMD Radeon](https://www.amd.com/support)
* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)

If you are uncertain what to do: Download the latest drivers for your graphics card, then use DDU to uninstall your graphics card drivers and delete all settings:

* [Display Driver Uninstaller Download](https://www.guru3d.com/files-details/display-driver-uninstaller-download.html)

Afterwards, install the drivers you have just downloaded. This will definitely fix the problem if done right.

::: tip
If the colors are still wrong even after re-installing your graphics card drivers, you may have more than one GPU or you did not perform a "clean" re-installation. Make sure you first uninstall all your current graphics card drivers and clear up all driver settings.
:::