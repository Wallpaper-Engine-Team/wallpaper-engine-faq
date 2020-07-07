---
tags:
  - antivirus
  - showing
---

# Обои не отображаются

Если часть ваших обоев или они все не отображаются, часто это значит, что Wallpaper Engine был по ошибке заблокирован программой-антивирусом. Если вы используете антивирус, пожалуйста, удостоверьтесь, что в его список игнорируемых исключений занесены каталог установки *wallpaper_engine* и все важные загрузочные файлы Wallpaper Engine:

* *wallpaper_engine/wallpaper32.exe*
* *wallpaper_engine/wallpaper64.exe*
* *wallpaper_engine/launcher.exe*
* *wallpaper_engine/bin/webwallpaper32.exe*
* *wallpaper_engine/bin/ui32.exe*

::: Подсказка Если у вас установлен антивирус (за исключением Windows Defender), с большой вероятностью именно в нем причина проблем. Если с первой попытки у вас не получилось решить проблему, попробуйте «поковыряться» с антивирусом немного подольше. :::

## Конфликты с другими программами для модификации рабочего стола

Wallpaper Engine успешно сочетаем с большинством программ для модификации рабочего стола. Тем не менее, в случае программ, которые тоже модифицируют обои Windows, например DeskScapes от StarDock, совместная работа невозможна. Если вы используете программу, выполняющую схожие с Wallpaper Engine функции, вам придется выбрать, какой программой вы предпочитаете пользоваться.

### Программа Fences

В целом, Wallpaper Engine успешно работает совместно с *Fences*. However, **if you have Fences installed but have disabled it**, it will hide the wallpaper from Wallpaper Engine. You need to either enable or uninstall it completely.

## Gray Wallpaper or missing textures on Windows 7

Make sure that the Windows 7 update **KB2533623** is installed. Either install it manually with that link or ensure that your Windows Update is working right and installing it by itself. You can download it manually from the Microsoft website, restart your system afterwards and the problem should go away:

* [KB2533623](https://support.microsoft.com/en-us/help/2533623/microsoft-security-advisory-insecure-library-loading-could-allow-remot)