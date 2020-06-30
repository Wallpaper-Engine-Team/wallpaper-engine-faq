---
tags:
  - mdmp
---

# Wallpaper Engine plante

Wallpaper Engine est un logiciel utilisé maintenant par des millions de personnes et bien testé. Les bugs capables de faire planter l'application sont très rares. Si le message d'erreur que vous voyez mentionne des fichiers **. dll **, veuillez consulter la liste ci-dessous pour trouver une description plus précise du **. dll ** qui provoque ce problème :

[[toc]]

::: tip Presque tous les rapports d'erreur que nous recevons concernent des pilotes de carte graphique corrompus, des antivirus ou d'autres logiciels défectueux qui rendent l'ordinateur instable. :::

## Réparations rapides en cas de plantage de Wallpaper Engine

Si vous ne savez pas ce qui provoque le crash de Wallpaper Engine, nous vous conseillons de réinstaller les pilotes de votre carte graphique. Cela signifie que vous devez d'abord désinstaller les pilotes, puis réinstaller les dernières versions de ces pilotes après cette opération. Certains pilotes proposent l'option "Effectuer une réinstallation propre". Assurez-vous d'activer cette option pour nettoyer automatiquement les restes de pilotes corrompus. Voici les sites des grands fournisseurs de carte graphique où vous trouverez les dernières versions de leurs pilotes :

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx)
* [AMD Radeon](https://www.amd.com/support)
* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)

Si une application antivirus est installée (à l'exception de Windows Defender), assurez-vous de configurer une exception pour Wallpaper Engine dans vos paramètres. Une réinstallation de Wallpaper Engine est parfois nécessaire si votre antivirus a corrompu ou verrouillé certains fichiers.

Essayez également de vérifier l'intégrité de Wallpaper Engine grâce à Steam :

* [Steamp : vérifier l'intégrité des fichiers d'un jeu](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

## Wallpaper a planté à cause d'un autre logiciel

### KERNELBASE.dll / ntdll.dll

Il s'agit d'un crash dans le noyau de Windows. C'est généralement dû à un antivirus ou à des pilotes de carte graphique corrompus. Nous vous renvoyons à la section sur les réparations rapides pour plus d'informations. Ce problème peut également être causé par des composants système corrompus. Utilisez le vérificateur des fichiers système Microsoft pour trouver de potentiels fichiers corrompus :

* [Vérificateur des fichiers système Microsoft](https://support.microsoft.com/en-us/help/929833/use-the-system-file-checker-tool-to-repair-missing-or-corrupted-system)

### d3d11.dll

Il s'agit d'un crash de DirectX. C'est généralement dû à un antivirus ou à des pilotes de carte graphique corrompus. Nous vous renvoyons à la section sur les réparations rapides pour plus d'informations. Ce problème peut également être causé par des composants système corrompus. Utilisez le vérificateur des fichiers système Microsoft pour trouver de potentiels fichiers corrompus :

* [Vérificateur des fichiers système Microsoft](https://support.microsoft.com/en-us/help/929833/use-the-system-file-checker-tool-to-repair-missing-or-corrupted-system)

### mfplat.dll

Il s'agit d'un plantage dans Windows Media Foundation. Il peut être causé par des pilotes de carte graphique corrompus, mais la cause la plus fréquente est un codec vidéo corormpu ou manquant dans votre système. Suivez les instructions de notre guide de réparation vidéo pour corriger ce type de plantages :

[Cliquez ici](/noshow/notplaying.html)

### AudioSes.dll

Ce crash est généralement dû à Windows lui-même. Essayez de réinstaller la dernière version de vos pilotes de carte son pour essayer de résoudre le problème. Vous pouvez corriger ce problème en changeant l'option *"Une autre application émet du son"* sur *"Continuer d’exécuter"* dans la section *"Performances*" des paramètres de Wallpaper Engine.

### atiumdag.dll / atiumd64.dll

* [AMD Radeon](https://www.amd.com/support)

::: tip Attention N'oubliez pas de sélectionner "Effectuer une réinstallation propre" ou désinstaller manuellement vos pilotes. Si vos pilotes actuels sont corrompus, il faut les éliminer en premier. :::

### nvwgf2umx.dll

Les pilotes Nvidia de votre système ont un problème. Rendez-vous sur le site Nvidia pour télécharger la dernière version de vos pilotes :

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx)

::: tip Attention N'oubliez pas de sélectionner "Effectuer une réinstallation propre" ou désinstaller manuellement vos pilotes. Si vos pilotes actuels sont corrompus, il faut les éliminer en premier. :::

### igdumd64.dll / igd10umd64.dll / igdumdx32.dll / igd10umd32.dll

Les pilotes Intel de votre système ont un problème. Rendez-vous sur le site Intel pour télécharger la dernière version de vos pilotes :

* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)


### MMDEvAPI.dll

Ce type de crash se produit en raison d'un logiciel audio défectueux installé sur votre système. Cela est généralement dû à un logiciel d'amélioration du son, comme ceux préinstallés sur certains ordinateurs portables. Ce type de logiciels provoquera souvent des plantages car ils ne sont pas toujours compatibles avec Windows. Essayez de rechercher "Sonic Studio" ou "Nahimic" et mettez ces logiciels à jour. Si vous ne trouvez pas de mise à jour pour ces programmes, vous pouvez également les désinstaller. Ils ne sont pas nécessaires au bon fonctionnement de votre ordinateur.

### fraps32.dll

Ce crash est dû à Fraps, un logiciel permettant de filmer son écran, de faire des captures d'écran et d'afficher le framerate en surimpression. Fraps n'est plus mis à jour depuis 2013 et commence à être dépassé. Nous vous conseillons de trouver une alternative à Fraps. Fraps n'étant plus mis à jour, ce problème ne peut pas être résolu si vous ne désinstallez pas ce logiciel.

## Ereur 0xc000007b

Cela signifie qu'un module de Windows a été corrompu. Il s'agit en général de DirectX. Essayez de désinstaller manuellement ces fichiers :

* C:\Windows\SysWOW64\d3dx9_43.dll
* C:\Windows\System32\d3dx9_43.dll

Installez-les à nouveau avec le programme d'installation DirectX 9 : *C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\_CommonRedist\DirectX\Jun2010\dxsetup.exe* (L'emplacement de ce fichier dépend du dossier d'installation de wallpaper_engine).

Si vous obtenez toujours cette erreur, il peut s'agir d'un autre module similaire à DirectX qui a été corrompu. Cela indique généralement un problème sous-jacent plus important avec Windows que vous devrez corriger avant de pouvoir à nouveau lancer Wallpaper Engine.

## Plantage après la mise en veille

Si Wallpaper Engine se bloque après la mise en veille prolongée de Windows, c'est que Windows ne parvient pas à restaurer correctement les pilotes de votre carte graphique avec Wallpaper Engine. La mise en veille prolongé de Windows n'est pas fiable. Activez l'option **"Lancement sécurisé après la mise en veille prolongée"** de Wallpaper Engine pour régler ce problème. Cette option tentera de redémarrer automatiquement Wallpaper Engine après la mise en veille prolongée.