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

## Fonds d'écran qui disparaissent / s'effacent à intervalles réguliers

Si vos fonds d'écran disparaissent pendant un bref instant, il est probable qu'un diaporama soit configuré comme fond d'écran Windows. Pour régler le problème, ouvrez les paramètres du fond d'écran de Windows et définissez une couleur unie ou une image statique comme fond d'écran normal de Windows.

## Conflits avec d'autres logiciels de modification du bureau

Wallpaper Engine est compatible avec les autres applications de modification du bureau. Cependant, certaines applications, comme StarDock DeskScapes, modifient également le fond d'écran et il n'est pas possible d'exécuter les deux applications en même temps. Vous allez devoir faire un choix entre Wallpaper Engine et ces autres applications.

### Fences

Wallpaper Engine est compatible avec *Fences*. Mais, **si vous avez installé Fences, mais que vous l'avez désactivé**, cela empêchera Wallpaper Engine d'accéder au fond d'écran. Vous devez l'activer et le désinstaller totalement.

Si vous utilisez Fences et que vos fonds d'écran Wallpaper Engine ne sont pas visibles, assurez-vous d'utiliseer **Fences 3.13 ou plus récent** pour éviter ces problèmes de compatibilité avec Wallpaper Engine. Fences 3.13 et les versions plus récentes contiennent d'importants correctifs de compatibilité avec Wallpaper Engine, il est donc important de vérifier que votre version de Fences est à jour.

## Fond d'écran gris ou textures manquantes avec Windows 7

Assurez-vous que la mise à jour **KB2533623** de Windows 7 est installée. Installez-le manuellement avec ce lien ou assurez-vous que Windows se met à jour correctement et s'en occupe pour vous. Vous pouvez le télécharger manuellement depuis le site de Microsoft. Redémarrez votre ordinateur et le problème devrait être résolu :

* [KB2533623](https://support.microsoft.com/fr-fr/help/2533623/microsoft-security-advisory-insecure-library-loading-could-allow-remot)