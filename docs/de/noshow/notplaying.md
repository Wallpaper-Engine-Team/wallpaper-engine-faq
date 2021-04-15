---
tags:
  - activemovie window
  - active movie
  - schwarz
---

# Videos sind schwarz oder spielen nicht richtig ab

Wenn du ein schwarzes Bild oder andere Probleme mit der Wiedergabe von Hintergründen des Typs *Video* hast, so ist dies *immer* ein Problem mit deinen Grafikkartentreibern oder fehlerhaften Video-Codecs. Versuche die folgenden Schritte in der vorgegebenen Reihenfolge. Wenn du diese Anleitung von oben nach unten befolgst, sollte dein Problem gelöst werden:

::: warning
Bitte beachte Dieser Artikel handelt über den Fall, in dem **Hintergründe** von Wallpaper Engine schwarz sind oder nicht richtig abgespielt werden. Wenn die **Benutzeroberfläche von Wallpaper Engine schwarz ist**, musst du den folgenden Artikel lesen: [Benutzeroberfläche von Wallpaper Engine ist schwarz oder weiß](/interface/broken.html).
:::

## Saubere Neuinstallations der Grafikkartentreiber

For the majority of users, a clean re-installation of the graphics card drivers will fix most type of issues related to video wallpapers. This includes black screens and users whose wallpapers are shown in a separate window (titled **"ActiveMovie Window"**).

1. Download the latest graphics card drivers for your graphics card (or all of them if you have two, for example Nvidia and Intel):

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx?lang=de-de)
* [AMD Radeon](https://www.amd.com/de/support)
* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)

2. Uninstall your current graphics card drivers completely and delete all existing settings if asked. Nvidia drivers have a checkbox which says "Perform clean re-installation" which also works.

You can also use [Display Driver Uninstaller ("DDU")](https://www.guru3d.com/files-details/display-driver-uninstaller-download.html) if you are unsure on how to do that.

3. Install the drivers you have just downloaded in step 1.
4. Restart your PC again, see if it works now.

::: tip
It's very important that you do a clean re-installation - this means your current graphics card drivers and driver settings have to be completely deleted before you install the new drivers, otherwise it will not work.
:::

## Codec Tweak Tool

If it does not work after doing a clean re-installation of your graphics card drivers, try resetting your video codecs:

* Download the Codec Tweak Tool: [Click here](https://www.codecguide.com/download_other.htm)
* Make sure that all checkboxes in the "Media Foundation" menu are **not** checked, then apply the settings:

![Deaktiviere alle Optionen in den Media Foundationen-Einstellungen](./codectweak.gif)

* Restart the PC and try the affected wallpapers again.

## Weitere Video-Codecs

Wenn die jeweiligen Video-Hintergründe immer noch nicht funktionieren nach den vorherigen Schritten, lade LAV herunter und nutze DirectShow, wie im folgenden Artikel beschrieben wird:

* [LAV und DirectShow nutzen](/videos/lav.html).
