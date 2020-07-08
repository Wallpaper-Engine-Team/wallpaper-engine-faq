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
* Redémarrez l'application et essayez d'utiliser à nouveau le fond d'écran

## Activer l'accélération matérielle WebM
Si vous rencontrez des problèmes avec la fin de vos fonds d'écran vidéo, vous pouvez utiliser des fichiers .webm qui ne souffrent pas du même problème. Il vaut mieux activer l'accélération matérielle pour les vidéos .webm. L'utilisation du processeur sera réduite et permettra toujours aux fonds d'écran vidéo tourner en boucle sans coupure. Assurez-vous d'avoir installé LAV et activé DirectShow comme indiqué dans la section précédente.
* Allez dans les paramètres de Wallpaper Engine et trouvez l'onglet "Général"
* Changer l'option **Framework WebM** sur **Préférer Natif**
* Redémarrez l'application et essayez d'utiliser à nouveau le fond d'écran

Vérifiez si l'icône LAV apparaît bien et si l'utilisation du processeur est presque nulle. Votre contenu .webm est maintenant accéléré. Si cela ne semble pas fonctionner, assurez-vous que toutes les options sont correctement configurées et que LAV est correctement installé.