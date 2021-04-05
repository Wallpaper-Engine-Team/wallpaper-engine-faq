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

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx?lang=de-de)
* [AMD Radeon](https://www.amd.com/de/support)
* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)

Wenn du dir unsicher bist, was du tun kannst: Lade die neuesten Treiber für deine Grafikkarte herunter, dann nutze DDU um eine Grafikkartentreiber zu deinstallieren und lösche alle Einstellungen:

* [Display Driver Uninstaller herunterladen](https://www.guru3d.com/files-details/display-driver-uninstaller-download.html)

Danach kannst du die Treiber die du zuvor heruntergeladen hast installieren. Dies sollte das Problem lösen, wenn du alle Schritte korrekt befolgt hast.

::: tip
Wenn die Farben weiterhin falsch angezeigt werden nach einer Neuinstallation deiner Grafikkartentreiber, dann hast du wahrscheinlich mehr als eine GPU oder du hast keine "saubere" Neuinstallation durchgeführt. Stelle sicher, dass du zuerst deine derzeitigen Grafikkartentreiber deinstallierst um alle bestehenden Treiber-Einstellungen zurückzusetzen.
:::