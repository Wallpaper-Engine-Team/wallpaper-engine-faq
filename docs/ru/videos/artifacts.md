---
tags:
  - colors
  - bright
  - dark
  - zoom
  - zoomed-in
  - pixelated
  - border
  - gamma
  - quality
  - wrong
  - ugly
---

# Видеообои отображаются неправильно

В отличие от большинства других плееров, Wallpaper Engine использует аппаратное ускорение видео для лучшей производительности. А в этом случае драйвера видеокарты могут влиять на то, как в результате будет выглядеть видео.

**Если ваши видеообои отображаются неправильно: не того цвета, слишком яркие или слишком темные, растянуты, выглядят некачественно, окружены рамкой**, это можно исправить, сбросив настройки видео в панели управления видеокарт Nvidia, AMD или Intel. Если у вас в компьютере установлено несколько графических процессоров (например, основная видеокарта фирмы Nvidia и дополнительная фирмы Intel), вам понадобится сбросить настройки для каждого из них.

Вы можете достичь того же результата, переустановив драйвера видеокарты при выбранной опции «Провести чистую переустановку». Этот вариант доступен, например, для драйверов Nvidia. Это значит, что сначала вам надо будет удалить драйвера, и, после того, как они будут полностью деинсталлированы, заново установить последнюю версию. Некоторые драйвера предлагают опцию «Провести чистую переустановку» в разделе расширенных настроек. Убедитесь, что эта опция выбрана, чтобы автоматически удалить все остаточные файлы, связанные с неисправными драйверами. Вы можете скачать последние версии драйверов от основных производителей видеокарт по ссылкам:

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx)
* [AMD Radeon](https://www.amd.com/support)
* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)

If you are uncertain what to do: Download the latest drivers for your graphics card, then use DDU to uninstall your graphics card drivers and delete all settings:

* [Display Driver Uninstaller Download](https://www.guru3d.com/files-details/display-driver-uninstaller-download.html)

Afterwards, install the drivers you have just downloaded. This will definitely fix the problem if done right.

::: tip If the colors are still wrong even after re-installing your graphics card drivers, you may have more than one GPU or you did not perform a "clean" re-installation. Make sure you first uninstall all your current graphics card drivers and clear up all driver settings. :::