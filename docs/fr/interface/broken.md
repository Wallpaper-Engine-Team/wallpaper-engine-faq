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

## L'interface de Wallpaper Engine est parasitée par des artefacts verts ou des lignes blanches

Les pilotes de votre carte graphique sont corrompus ou mal configurés. Téléchargez les derniers pilotes pour vos cartes graphiques (même si vous les aviez déjà) et effectuez une réinstallation propre de ces pilotes. Désinstallez d'abord vos pilotes actuels avant d'installer les dernières versions pour vous assurer que tous les fichiers ou paramètres corrompus sont bien supprimés.

Si le problème persiste, quittez Wallpaper Engine. Relancez ensuite Wallpaper Engine en utilisant la troisième option de lancement Steam : "Désactiver l'accélération matérielle de l'interface utilisateur".

### L'overlay Steam entre en conflit avec Wallpaper Engine

C'est plus rare, mais le problème peut également venir de l'overlay Steam. Voici ce que vous pouvez faire :

Fermez complètement Wallpaper Engine (clic droit sur l'icône dans la barre des tâches "Quitter"). Ouvrez Steam, faites un clic droit sur Wallpaper Engine, sélectionnez "Propriétés" puis désactivez l'option "Activer l'overlay de Steam". Après avoir désactivé cette option, redémarrez Wallpaper Engine avec Steam. 