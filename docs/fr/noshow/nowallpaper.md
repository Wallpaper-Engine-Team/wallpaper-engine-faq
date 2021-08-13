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

## Mode de contraste élevé de Windows

Si vous utilisez le **mode de contraste élevé** de Windows 10 avec le **thème blanc**, Windows risque de désactiver Wallpaper Engine. Essayez de changer votre thème ou de désactiver le mode de contraste élevé pour résoudre ce problème.

## Wallpapers disappearing / fading away in regular intervals

If your wallpapers keep disappearing for a brief moment, you likely have a slideshow configured as your Windows wallpaper. Open the Windows wallpaper settings and set a solid color or a static image as your regular Windows wallpaper, this will fix this problem.

## Conflits avec d'autres logiciels de modification du bureau

Wallpaper Engine est compatible avec les autres applications de modification du bureau. Cependant, certaines applications, comme StarDock DeskScapes, modifient également le fond d'écran et il n'est pas possible d'exécuter les deux applications en même temps. Vous allez devoir faire un choix entre Wallpaper Engine et ces autres applications.

### Fences

Wallpaper Engine est compatible avec *Fences*. Mais, **si vous avez installé Fences, mais que vous l'avez désactivé**, cela empêchera Wallpaper Engine d'accéder au fond d'écran. Vous devez l'activer et le désinstaller totalement.

If you are using Fences and your Wallpaper Engine wallpapers are not visible, ensure that you are using **Fences 3.13 or newer** to avoid these compatibility issues with Wallpaper Engine. Fences 3.13 and newer versions contain important compatibility fixes with Wallpaper Engine, so it is important that you ensure your Fences is up-to-date.

## Fond d'écran gris ou textures manquantes avec Windows 7

Assurez-vous que la mise à jour **KB2533623** de Windows 7 est installée. Installez-le manuellement avec ce lien ou assurez-vous que Windows se met à jour correctement et s'en occupe pour vous. Vous pouvez le télécharger manuellement depuis le site de Microsoft. Redémarrez votre ordinateur et le problème devrait être résolu :

* [KB2533623](https://support.microsoft.com/fr-fr/help/2533623/microsoft-security-advisory-insecure-library-loading-could-allow-remot)