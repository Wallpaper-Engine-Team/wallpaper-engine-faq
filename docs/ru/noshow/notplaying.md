- - -
tags:
  - activemovie window
  - active movie
  - black
- - -


# Черный экран / Видео не проигрывается

Черный экран и другие проблемы с обоями типа *«видео»* вызваны либо неисправными драйверами видеокарты, либо неисправными видеокодеками *во всех случаях*. Попробуйте проделать перечисленные ниже шаги в строгой очередности. Если вы полностью выполните инструкцию, проблема будет решена:

::: предупреждение Обратите внимание В данной статье рассматривается проблема Wallpaper Engine, при которой **обои** замещаются черным экраном или не проигрываются как надо. If your **Wallpaper Engine interface is black** you need to go here: [Wallpaper Engine User Interface is Black](/interface/broken.html#wallpaper-engine-interface-is-black). :::

## Clean graphics card driver re-installation

For the majority of users, a clean re-installation of the graphics card drivers will fix most type of issues related to video wallpapers. This includes black screens and users whose wallpapers are shown in a separate window (titled **"ActiveMovie Window"**).

1. Download the latest graphics card drivers for your graphics card (or all of them if you have two, for example Nvidia and Intel):

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx)
* [AMD Radeon](https://www.amd.com/support)
* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)

2. Uninstall your current graphics card drivers completely and delete all existing settings if asked. Nvidia drivers have a checkbox which says "Perform clean re-installation" which also works.

You can also use [Display Driver Uninstaller ("DDU")](https://www.guru3d.com/files-details/display-driver-uninstaller-download.html) if you are unsure on how to do that.

3. Install the drivers you have just downloaded in step 1.
4. Restart your PC again, see if it works now.

::: tip It's very important that you do a clean re-installation - this means your current graphics card drivers and driver settings have to be completely deleted before you install the new drivers, otherwise it will not work. :::

## Codec Tweak Tool

If it does not work after doing a clean re-installation of your graphics card drivers, try resetting your video codecs:

* Download the Codec Tweak Tool: [Click here](https://www.codecguide.com/download_other.htm)
* Make sure that all checkboxes in the "Media Foundation" menu are **not** checked, then apply the settings:

![Uncheck all options in the Media Foundation options](./codectweak.gif)

* Restart the PC and try the affected wallpapers again.

## Additional video codecs

If affected video wallpapers still do not work after the previous steps, download LAV and use DirectShow as described in this guide:

* [Using LAV and DirectShow](/videos/lav.html).