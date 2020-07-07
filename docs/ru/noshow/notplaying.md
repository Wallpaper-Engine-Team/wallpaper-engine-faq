- - -
tags:
  - activemovie window
  - active movie
  - black
- - -


# Черный экран / Видео не проигрывается

Черный экран и другие проблемы с обоями типа *«видео»* вызваны либо неисправными драйверами видеокарты, либо неисправными видеокодеками *во всех случаях*. Попробуйте проделать перечисленные ниже шаги в строгой очередности. Если вы полностью выполните инструкцию, проблема будет решена:

::: предупреждение Обратите внимание В данной статье рассматривается проблема Wallpaper Engine, при которой **обои** замещаются черным экраном или не проигрываются как надо. В случае, если вы столкнулись с **черным интерфейсом Wallpaper Engine**, вам нужна статья [«Черный пользовательский интерфейс Wallpaper Engine»](/interface/broken.html#wallpaper-engine-interface-is-black). :::

## Чистая переустановка драйверов видеокарты

В большинстве случаев чистая переустановка драйверов видеокарты решает практически все распространенные проблемы, затрагивающие видеообои. В этот список входят проблемы черного экрана и отображения обоев в виде отдельного окна (под названием **«ActiveMovie Window»**).

1. Загрузите последнюю версию драйверов для вашей видеокарты (или для всех видеокарт, если у вас их несколько разных, например Nvidia и Intel):

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx)
* [AMD Radeon](https://www.amd.com/support)
* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)

2. Удалите устаревшие драйвера видеокарты полностью и согласитесь на сброс настроек, если такой вариант будет предложен. В случае Nvidia вы можете просто поставить галочку в пункте «Выполнить чистую установку».

На этом этапе вы также можете использовать [Display Driver Uninstaller (DDU)](https://www.guru3d.com/files-details/display-driver-uninstaller-download.html), если не уверены, как правильно удалить драйвера.

3. Установите новые драйвера, которые вы скачали на этапе 1.
4. Еще раз перегрузите ваш компьютер и проверьте, была ли исправлена ошибка.

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