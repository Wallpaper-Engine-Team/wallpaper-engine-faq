---
tags:
  - user interface
  - green
  - white
  - pixelated
  - unreadable
---

# Некорректное отображение окна Wallpaper Engine

Обозреватель Wallpaper Engine обычно не работает из-за неисправных драйверов видеокарты или проблем с программой-антивирусом. Вы найдете подробную информацию по этой проблеме ниже.

::: warning
Обратите внимание В данной статье рассматривается проблема Wallpaper Engine, которая делает **интерфейс** неисправным или при которой он отображается черным. Если **черными отображаются обои**, вам нужна статья [Черный экран / Видео не воспроизводится](/noshow/notplaying.html).
:::

## Обозреватель Wallpaper Engine черный или белый

В большинстве случаев, данная проблема вызвана ошибочной блокировкой пользовательского интерфейса Wallpaper Engine программой-антивирусом. Пожалуйста, занесите программу Wallpaper Engine в список исключений вашего антивируса. В первую очередь это касается ее загрузочных файлов и в особенности файла **wallpaper_engine/bin/ui32.exe**.

Иногда после этого необходимо провести проверку целостности файлов Wallpaper Engine или даже переустановить программу, если антивирус заблокировал некоторые важные файлы без возможности восстановления:

* [Steam Support: проверка целостности файлов игры](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

Если после того, как вы настроили список исключений антивируса, проверка файлов с помощью Steam не решила ошибку, попробуйте переустановить Wallpaper Engine через Steam. Если ваш антивирус слишком хищный, он может даже заблокировать без возможности восстановления пути к файлам, которые использует Wallpaper Engine. В этом случае необходимо сначала удалить антивирус, а затем установить Wallpaper Engine в другой каталог. По желанию для этого можно создать новую библиотеку игр в Steam.

If the problem persists, turn off Wallpaper Engine. Then re-launch Wallpaper Engine using the third launch option in Steam labeled "disable UI hardware acceleration".

![Launch option: Disable UI hardware acceleration](/img/faq/steam_launch_option.jpg)

## Интерфейс Wallpaper Engine отображается с зелеными артефактами или белыми линиями

Your graphics card drivers are broken or misconfigured. Download the latest drivers for your graphics cards (even if you already have the latest drivers) and perform a clean re-installation of the drivers. Is is important that you first uninstall your current drivers and then install the latest drivers to ensure any broken files or settings are removed.

If the problem persists, turn off Wallpaper Engine. Then re-launch Wallpaper Engine using the third launch option in Steam labeled "disable UI hardware acceleration".

**If the Wallpaper Engine user interface has white lines**: You have **Nvidia Image Sharpening** turned on for all applications. Turn it off in your Nvidia drivers or do a clean reinstallation of your Nvidia drivers by uninstalling your current ones first.

![Nvidia Image Sharpening Issue](./imagesharpening.png) *White lines will be visible all over the application window if Nvidia image sharpening is turned on for Wallpaper Engine by mistake.*

### Пользовательский интерфейс Wallpaper Engine поврежден в результате редкой ошибки в работе оверлея Steam

The other possible reason for a black application window is a rare Steam bug with the Steam overlay. You can try the following:

Turn off Wallpaper Engine completely (right-click on the tray icon and then select "Quit"). Afterwards, open up Steam, right-click on Wallpaper Engine, select "Properties" and then disable the "Enable Steam Overlay while in-game" option. After disabling the option, try to restart Wallpaper Engine via Steam. 