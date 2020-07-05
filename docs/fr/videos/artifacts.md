---
tags:
  - couleurs
  - luminosité
  - sombre
  - zoom
  - zoomé
  - pixelisé
  - bord
  - gamma
  - qualité
  - erreur
  - moche
---

# Les fonds d'écran vidéo sont moches

Wallpaper Engine utilise l'accélération matérielle pour les vidéos afin d'obtenir des performances optimales, contrairement à la plupart des lecteurs vidéo. Les pilotes de votre carte graphique peuvent donc influencer les rendus de vos vidéos.

**Si vos fonds d'écran vidéo ont des couleurs étranges, sont trop lumineux ou trop sombres, semblent zoomés, pixellisés ou s'il y a une bordure autour**, vous pouvez résoudre ce problème en réinitialisant les options vidéo dans les paramètres de votre carte graphique Nvidia, AMD ou Intel. Si vous avez plusieurs GPU (par exemple, une carte graphique Nvidia et un GPU secondaire Intel), assurez-vous de les réinitialiser pour chacun d'entre eux.

Vous pouvez également réinstaller les pilotes de votre carte graphique et pour réinitialiser tous les paramètres ("réinstallation propre"). C'est par exemple possible avec les pilotes Nvidia, par exemple. Cela signifie que vous devez d'abord désinstaller les pilotes, puis réinstaller les dernières versions de ces pilotes après cette opération. Certains pilotes proposent l'option "Effectuer une réinstallation propre". Assurez-vous d'activer cette option pour nettoyer automatiquement les restes de pilotes corrompus. Voici les sites des grands fournisseurs de carte graphique où vous trouverez les dernières versions de leurs pilotes :

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx)
* [AMD Radeon](https://www.amd.com/support)
* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)

Si vous ne savez pas comment faire : téléchargez les derniers pilotes pour votre carte graphique, puis utilisez DDU pour désinstaller les pilotes actuels et supprimez tous les paramètres :

* [Télécharger Display Driver Uninstaller](https://www.guru3d.com/files-details/display-driver-uninstaller-download.html)

Il ne vous reste plus qu'à installer les pilotes fraîchement téléchargés. Si vous suivez bien ces étapes, vous ne rencontrerez plus ce problème.

::: tip Si les couleurs sont toujours fausses, c'est que vous avez probablement plusieurs GPU ou que vous n'avez pas effectué une réinstallation "propre". Assurez-vous d'abord de désinstaller tous vos pilotes de carte graphique et de supprimer tous leurs paramètres avant de les réinstaller. :::