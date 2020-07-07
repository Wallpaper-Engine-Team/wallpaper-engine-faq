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

::: Подсказка Если у вас установлен антивирус (за исключением Windows Defender), с большой вероятностью именно в нем причина проблем. Take some time to investigate this further if your first attempts do not fix this issue. :::

## Conflicts with other desktop modification software

Wallpaper Engine works well with most desktop-modification applications. However, some applications such as StarDock DeskScapes also modify the Windows wallpaper and it is not possible to run both applications at the same time. If you use a similar application to Wallpaper Engine, you will need to decide on one which you want to continue to use.

### Fences

Generally, Wallpaper Engine works fine with *Fences*. However, **if you have Fences installed but have disabled it**, it will hide the wallpaper from Wallpaper Engine. You need to either enable or uninstall it completely.

## Gray Wallpaper or missing textures on Windows 7

Make sure that the Windows 7 update **KB2533623** is installed. Either install it manually with that link or ensure that your Windows Update is working right and installing it by itself. You can download it manually from the Microsoft website, restart your system afterwards and the problem should go away:

* [KB2533623](https://support.microsoft.com/en-us/help/2533623/microsoft-security-advisory-insecure-library-loading-could-allow-remot)