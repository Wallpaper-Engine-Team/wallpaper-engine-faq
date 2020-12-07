---
tags:
  - antivirus
  - voir
---

# Fonds d'écran invisibles

Si certains ou tous vos fonds d'écran ne s'affichent pas, c'est souvent dû à un antivirus qui bloque Wallpaper Engine. Votre antivirus a probablement une fonctionnalité de "liste blanche" qui vous permet de lui demander d'ignorer certains dossiers ou applications. Assurez-vous de mettre dans cette liste le répertoire d'installation de *wallpaper_engine* et tous les exécutables qu'il contient :

* *wallpaper_engine/wallpaper32.exe*
* *wallpaper_engine/wallpaper64.exe*
* *wallpaper_engine/launcher.exe*
* *wallpaper_engine/bin/webwallpaper32.exe*
* *wallpaper_engine/bin/ui32.exe*

::: tip
Si vous avez installé un antivirus (à l'exception de Windows Defender), il est très probable que cela soit la cause de vos problèmes. N'abandonnez pas et prenez le temps de chercher davantage d'informations si vos premières tentatives ne résolvent pas ce problème.
:::

## High-contrast mode in Windows

If you have enabled **high-contrast mode** in your Windows 10 theme settings, Wallpaper Engine sometimes does not work on some systems. If your wallpapers do not appear but you have high-contrast mode enabled, please disable it in your Windows 10 theme settings, then restart Wallpaper Engine and try again.

## Conflicts with other desktop modification software

Wallpaper Engine works well with most desktop-modification applications. However, some applications such as StarDock DeskScapes also modify the Windows wallpaper and it is not possible to run both applications at the same time. If you use a similar application to Wallpaper Engine, you will need to decide on one which you want to continue to use.

### Fences

Generally, Wallpaper Engine works fine with *Fences*. However, **if you have Fences installed but have disabled it**, it will hide the wallpaper from Wallpaper Engine. You need to either enable or uninstall it completely.

## Gray Wallpaper or missing textures on Windows 7

Make sure that the Windows 7 update **KB2533623** is installed. Either install it manually with that link or ensure that your Windows Update is working right and installing it by itself. You can download it manually from the Microsoft website, restart your system afterwards and the problem should go away:

* [KB2533623](https://support.microsoft.com/fr-fr/help/2533623/microsoft-security-advisory-insecure-library-loading-could-allow-remot)