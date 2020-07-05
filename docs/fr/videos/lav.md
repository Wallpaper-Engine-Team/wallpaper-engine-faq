---
tags:
  - webm
  - vidéo
  - noir
  - codec
  - filtres
  - 4K
  - HEVC
  - mkv
  - mp4
---

# Utilisez LAV et DirectShow
Si vous rencontrez des problèmes liés à vos codecs vidéo ou si vous souhaitez utiliser des formats vidéo supplémentaires sur votre système, vous pouvez choisir d'installer LAV et d'activer DirectShow dans les paramètres de Wallpaper Engine. Vous aurez ainsi une meilleure prise en charge des **vidéos en 4K et HEVC sur Windows 7** et permettre la lecture des fichiers **.mkv**.

Pour des raisons juridiques, nous ne pouvons pas associer LAV et Wallpaper Engine. Vous devez donc le télécharger et l'installer vous-même. Après avoir installé LAV, vous devrez configurer Wallpaper Engine pour utiliser DirectShow :

## 1. Installer LAV
* Téléchargez les versions x86 **et** x64 des filtres LAV :
  * Miroir #1: [Github](https://github.com/Nevcairiel/LAVFilters/releases)
  * Miroir #2: [Fosshub](https://www.fosshub.com/LAV-Filters.html)
* Installez LAV et assurez-vous d'avoir les droits d'administrateur
* Redémarrez Wallpaper Engine.

## 2. Activer DirectShow
* Allez dans les paramètres de Wallpaper Engine et trouvez l'onglet "Général"
* Changer l'option **Cadre vidéo** sur **Préférer DirectShow LAV**
* Redémarrez l'application et essayez d'utiliser à nouveau de fond d'écran

## Activer l'accélération matérielle WebM
Si vous rencontrez des problèmes avec la fin de vos fonds d'écran vidéo, vous pouvez utiliser des fichiers .webm qui ne souffrent pas du même problème. It's best if you also enable hardware acceleration for .webm videos which will reduce the CPU usage for them significantly and still allows video wallpapers to loop without a notable cut after the last frame. This is a continuation of the steps above, make sure you have installed LAV and enabled DirectShow as instructed in the previous section.
* Open the Wallpaper Engine settings and navigate to the "General" tab
* Change the **WebM framework** option to **Prefer Native**
* Restart the application and try using your video wallpaper again

Check if the LAV system tray icon shows up and if the CPU usage is nearly zero, then your .webm content is now hardware accelerated. If it does not seem to work, make sure all options are configured correctly and LAV is correctly installed.