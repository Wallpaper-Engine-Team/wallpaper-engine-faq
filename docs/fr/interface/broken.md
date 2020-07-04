---
tags:
  - interface utilisateur
  - vert
  - blanc
  - pixelisé
  - illisible
---

# Wallpaper Engine ne s'affiche pas correctement

Si la fenêtre de navigation de Wallpaper Engine ne fonctionne pas correctement, c'est dû généralement à des pilotes de carte graphique ou à un antivirus défectueux. Vous aurez plus d'informations ci-dessous.

::: warning Attention Cette section va aborder les problèmes liés l'**interface** de Wallpaper Engine. Si vos **fonds d'écran sont noirs**, nous vous renvoyez à cette section de la FAQ : [Écran noir / La vidéo ne se lance pas](noshow/notplaying.html). :::

## Le navigateur de Wallpaper Engine est noir ou blanc

Dans la plupart des cas, cela veut dire que l'interface utilisateur de Wallpaper Engine est bloquée par un antivirus. Assurez-vous de configurer une exception dans votre antivirus afin qu'il ignore Wallpaper Engine, en particulier tous les fichiers du répertoire d'installation de wallpaper_engine, notamment **wallpaper_engine/bin/ui32.exe**.

Il est parfois nécessaire de vérifier les fichiers de Wallpaper Engine ou même de les réinstaller si votre antivirus a bloqué de façon permanente certains fichiers importants de Wallpaper Engine :

* [Steam : vérifier l'intégrité des fichiers d'un jeu](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

Si la vérification Steam ne résout pas ce problème non plus, essayez de réinstaller Wallpaper Engine avec Steam. Si votre antivirus est devenu fou, il a peut-être entièrement bloqué Wallpaper Engine. Dans ce cas-ci, assurez-vous de désinstaller l'antivirus en premier, puis installez Wallpaper Engine dans un répertoire différent. Vous pouvez même choisir de créer une nouvelle bibliothèque de jeux Steam.

## Wallpaper Engine interface with green artifacts or white lines

Your graphics card drivers are broken or misconfigured. Download the latest drivers for your graphics cards (even if you already have the latest drivers) and perform a clean re-installation of the drivers. Is is important that you first uninstall your current drivers and then install the latest drivers to ensure any broken files or settings are removed.

If the problem persists, turn off Wallpaper Engine. Then re-launch Wallpaper Engine using the third launch option in Steam labeled "disable UI hardware acceleration".

### Rare Steam Overlay Bug Breaking Wallpaper Engine User Interface

The other possible reason for a black application window is a rare Steam bug with the Steam overlay. You can try the following:

Turn off Wallpaper Engine completely (right-click on the tray icon and then select "Quit"). Afterwards, open up Steam, right-click on Wallpaper Engine, select "Properties" and then disable the "Enable Steam Overlay while in-game" option. After disabling the option, try to restart Wallpaper Engine via Steam. 