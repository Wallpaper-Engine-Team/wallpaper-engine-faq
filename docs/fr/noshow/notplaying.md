- - -
mots-clés :
  - activemovie window
  - activemovie
  - noir
- - -


# Vidéos noires / Vidéos qui ne se lancent pas

Les écrans noirs et les problèmes avec les fonds d'écran *Vidéo* sont *toujours* causés par des pilotes de carte graphique ou des codecs défectueux. Voici les étapes à suivre. Suivez notre guide pour résoudre ce problème :

::: warning Attention Cette section va aborder les problèmes liés aux **fonds d'écran** de Wallpaper Engine. Si c'est l'**interface de Wallpaper Engine qui est noire**, vous devez aller dans cette section : [l’interface utilisateur de Wallpaper Engine est noire](/interface/broken.html#wallpaper-engine-interface-is-black). :::

## Réinstaller proprement les pilotes des cartes graphiques

Pour la grande majorité, une réinstallation propre des pilotes de carte graphique résoudra la plupart des problèmes liés aux fonds d'écran vidéo. Cela inclut les écrans noirs et les fonds d'écran affichés dans une fenêtre séparée (**"ActiveMovie Window"**).

1. Téléchargez les derniers pilotes pour votre carte graphique (refaites ce procédé pour toutes vos cartes si vous en avez plusieurs de marques différentes) :

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx)
* [AMD Radeon](https://www.amd.com/support)
* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)

2. Désinstallez tous les pilotes de votre carte graphique actuelle et supprimez tous les paramètres existants si on vous en donne la possibilité. Les pilotes Nvidia ont une case à cocher qui dit "Effectuer une réinstallation propre", ce qui fonctionne très bien également.

Vous pouvez également utiliser [Display Driver Uninstaller ("DDU")](https://www.guru3d.com/files-details/display-driver-uninstaller-download.html) pour vous aider.

3. Installez tous les pilotes que vous avez téléchargés à l'étape 1.
4. Redémarrez votre PC pour voir si cela a marché.

::: tip Il est très important que vous fassiez une réinstallation propre : vos pilotes de carte graphique et leurs paramètres doivent être complètement supprimés avant d'installer les nouveaux pilotes. :::

## Codec Tweak Tool

Si votre problème n'est toujours pas résolu, essayez de réinitialiser vos codecs vidéo :

* Téléchargez Codec Tweak Tool : [cliquez ici](https://www.codecguide.com/download_other.htm)
* Vérifiez que les cases du menu "Media Foundation" ne sont **pas** cochées et appliquez ces paramètres :

![Décochez toutes les options de Media Foundation](./codectweak.gif)

* Redémarrez votre ordinateur et essayez de relancer les fonds d'écran avec lesquels vous aviez des problèmes.

## Codecs supplémentaires

Si vos fonds d'écran vidéo ne fonctionnent toujours pas après les étapes précédentes, téléchargez LAV et utilisez DirectShow comme expliqué dans ce guide :

* [Utilisez LAV et DirectShow](/videos/lav.html).