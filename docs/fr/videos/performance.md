# La vidéo se fige / saute / est de mauvaise qualité

C'est peut-être dû au fait que votre matériel n'est pas assez puissant pour afficher correctement la vidéo en question. Un fond d'écran vidéo n'est pas comparable à un lecteur vidéo standard, il doit également prendre en compte les icônes et s'étendre potentiellement sur plusieurs écrans. Il utilise également le décodeur vidéo de votre GPU par défaut pour réduire au minimum l'utilisation du processeur.

## Hooks d'enregistrement en arrière-plan
Ce problème peut venir des fonctionnalités des pilotes pour l'enregistrement telles que ReLive, Shadow Play/Nvidia Share ou Windows GameDVR. Essayez de les désactiver et voyez si cela fait une différence, puis excluez-les de Wallpaper Engine. Assurez-vous également qu'aucun autre programme d'enregistrement ne se charge dans Wallpaper Engine, cela peut ralentir les vidéos.

Vous pouvez essayer d'utiliser notre outil d'analyse pour déterminer si des programmes avec des hooks d'enregistrement sont installés, mais il ne pourra pas tout trouver, notamment les hooks d'enregistrement comme ceux fournis avec Nvidia GeForce Experience :

* [Outil d'analyse de Wallpaper Engine](/debug/scantool.html)

## Dynamic Super Resolution (DSR) / Étalonnage du GPU
Létalonnage du GPU/DSR peut également causer des problèmes, essayez de le désactiver et si cela vous aide, désactivez-le uniquement pour Wallpaper Engine.

## Mauvaise performance de dwm.exe pour les systèmes avec plusieurs GPU / plusieurs écrans
Si vous avez activé le GPU intégré de votre ordinateur de bureau dans le BIOS, alors qu'une carte graphique est déjà installée, vous pouvez rencontrer des problème de performances et une utilisation trop élevée de DWM.exe. Si c'est possible, n'activez pas le GPU intégré. **Vous devez brancher tous vos écrans sur une seule carte graphique.** L'utilisation simultanée des deux GPU interdira l'accélération matérielle du gestionnaire de fenêtres. Sans Nvidia Optimus ou une technologie similaire, Windows sera obligé de copier l'image de fond d'écran d'un GPU à l'autre, ce qui prend beaucoup de temps. En fait, toute action partagée entre vos GPU en souffrira. C'est la même chose que que si vous placez une fenêtre de jeu entre deux écrans.

Ce problème ne concerne pas le matériel conçu pour les configurations multi-GPU, comme les ordinateurs portables Nvidia Optimus ou les configurations Nvidia SLI / AMD Crossfire avec un pont matériel.