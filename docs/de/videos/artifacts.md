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

Du kannst außerdem alle Grafikkartentreiber neu installieren und dabei alle Einstellungen zurücksetzen (eine "saubere Neuinstallation"), viele Grafikkartentreiber bieten dazu eine Option an. Dies bedeutet, dass du zunächst deine Grafikkartentreiber deinstallieren und dann die neuesten Treiber erneut installieren musst, nachdem die alten Treiber vollständig entfernt wurden. Eine Treiber bieten eine Option zur "sauberen Neuinstallation" in den erweiterten Installationseinstellungen an. Stelle sicher, dass du diese Option aktivierst um jegliche Überbleibsel von defekten Treibern zu entfernen. Du kannst die neuesten Grafikkartentreiber von allen Herstellern hier herunterladen:

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx)
* [AMD Radeon](https://www.amd.com/support)
* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)

If you are uncertain what to do: Download the latest drivers for your graphics card, then use DDU to uninstall your graphics card drivers and delete all settings:

* [Display Driver Uninstaller Download](https://www.guru3d.com/files-details/display-driver-uninstaller-download.html)

Afterwards, install the drivers you have just downloaded. This will definitely fix the problem if done right.

::: tip
If the colors are still wrong even after re-installing your graphics card drivers, you may have more than one GPU or you did not perform a "clean" re-installation. Make sure you first uninstall all your current graphics card drivers and clear up all driver settings.
:::