---
tags:
  - antivirus
  - антивирус
---

# Обои не отображаются

Если часть обоев или никакие обои не отображаются, часто это значит, что Wallpaper Engine был по ошибке заблокирован программой-антивирусом. Если вы используете антивирус, пожалуйста, добавьте в его список исключений каталог установки *wallpaper_engine* и все важные загрузочные файлы Wallpaper Engine:

* *wallpaper_engine/wallpaper32.exe*
* *wallpaper_engine/wallpaper64.exe*
* *wallpaper_engine/launcher.exe*
* *wallpaper_engine/bin/webwallpaper32.exe*
* *wallpaper_engine/bin/ui32.exe*

::: tip
Часто причиной проблем являются именно программы-антивирусы (за исключением Windows Defender). Если с первой попытки у вас не получилось решить проблему, попробуйте поискать еще решения.
:::

## Режим высокой контрастности в Windows

Если вы включили **режим высокой контрастности** в настройках темы Windows 10 с выбранной темой **Контрастная белая**, Windows принудительно отключит обои Wallpaper Engine. Попробуйте изменить тему высокой контрастности, которую вы используете, в настройках высокой контрастности Windows или полностью отключите режим высокой контрастности, и проблема исчезнет.

## Обои исчезают через определенные промежутки времени

Если ваши обои исчезают на короткий промежуток времени, скорее всего, в качестве обоев Windows установлено слайд-шоу. Open the Windows wallpaper settings and set a solid color or a static image as your regular Windows wallpaper, this will fix this problem.

## Конфликты с другими программами для модификации рабочего стола

Wallpaper Engine не конфликтует с большинством программ для модификации рабочего стола. Однако в случае программ, которые тоже модифицируют обои Windows, например DeskScapes от StarDock, совместная работа невозможна. Если вы используете программу, выполняющую схожие с Wallpaper Engine функции, вам придется выбрать, какой программой вы предпочитаете пользоваться.

### Программа Fences

В целом, Wallpaper Engine успешно работает с *Fences*. Однако, **если программа Fences установлена у вас на компьютере, но отключена**, она будет скрывать обои Wallpaper Engine. Ее нужно либо включить, либо полностью удалить.

If you are using Fences and your Wallpaper Engine wallpapers are not visible, ensure that you are using **Fences 3.13 or newer** to avoid these compatibility issues with Wallpaper Engine. Fences 3.13 and newer versions contain important compatibility fixes with Wallpaper Engine, so it is important that you ensure your Fences is up-to-date.

## Серые обои или отсутствующие текстуры на Windows 7

Проверьте, установлено ли на вашей системе обновление **KB2533623** для Windows 7. Либо установите его вручную, скачав по ссылке ниже, либо включите Windows Update и удостоверьтесь, что обновление будет установлено автоматически. Обновление можно вручную скачать на сайте Microsoft. После установки перегрузите компьютер. Это должно решить проблему:

* [KB2533623](https://support.microsoft.com/ru-ru/help/2533623/microsoft-security-advisory-insecure-library-loading-could-allow-remot)