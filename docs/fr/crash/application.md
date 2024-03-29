---
tags:
  - mdmp
---

# Wallpaper Engine plante

Wallpaper Engine est un logiciel utilisé maintenant par des millions de personnes et bien testé. Les bugs capables de faire planter l'application sont très rares. Si le message d'erreur que vous voyez mentionne des fichiers **. dll **, veuillez consulter la liste ci-dessous pour trouver une description plus précise du **. dll ** qui provoque ce problème :

[[toc]]

::: tip
Presque tous les rapports d'erreur que nous recevons concernent des pilotes de carte graphique corrompus, des antivirus ou d'autres applications défectueuses qui rendent l'ordinateur instable.
:::

## Réparations rapides en cas de plantage de Wallpaper Engine

Si vous ne savez pas ce qui provoque le crash de Wallpaper Engine, nous vous conseillons de réinstaller les pilotes de votre carte graphique. Cela signifie que vous devez d'abord désinstaller les pilotes, puis réinstaller les dernières versions de ces pilotes après cette opération. Certains pilotes proposent l'option "Effectuer une réinstallation propre". Assurez-vous d'activer cette option pour nettoyer automatiquement les restes de pilotes corrompus. Voici les sites des grands fournisseurs de carte graphique où vous trouverez les dernières versions de leurs pilotes :

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx)
* [AMD Radeon](https://www.amd.com/support)
* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)

Si un antivirus est installé (à l'exception de Windows Defender), assurez-vous de configurer une exception pour Wallpaper Engine dans vos paramètres. Une réinstallation de Wallpaper Engine est parfois nécessaire si votre antivirus a corrompu ou verrouillé certains fichiers. Vérifiez que votre application antivirale ignore le répertoire *wallpaper_engine* et surtout tous les fichiers ".exe" :

* *wallpaper_engine/wallpaper32.exe*
* *wallpaper_engine/wallpaper64.exe*
* *wallpaper_engine/launcher.exe*
* *wallpaper_engine/bin/webwallpaper32.exe*
* *wallpaper_engine/bin/ui32.exe*

Essayez également de vérifier l'intégrité de Wallpaper Engine grâce à Steam :

* [Steam : vérifier l'intégrité des fichiers d'un jeu](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

Dans les cas les plus extrêmes, il est possible que vous ayez besoin de désinstaller Wallpaper Engine et de supprimer manuellement le répertoire *wallpaper_engine*, puis de réinstaller l'application lorsque l'antivirus aura été configuré pour être moins restrictif.

## Plantage après la mise en veille

Si Wallpaper Engine se bloque après la mise en veille prolongée de Windows, c'est que Windows ne parvient pas à restaurer correctement les pilotes de votre carte graphique avec Wallpaper Engine. La mise en veille prolongée de Windows n'est pas fiable. Activez l'option **"Lancement sécurisé après la mise en veille prolongée"** de Wallpaper Engine pour régler ce problème. Cette option tentera de redémarrer automatiquement Wallpaper Engine après la mise en veille prolongée.

## Wallpaper Engine has crashed / Code erreur "0xC0000005"

Ce message d'erreur est généralement toujours causé par des **applications antivirus** ou des **pilotes défectueux**. Si vous utilisez une application antivirus, il est très probable que celle-ci soit responsable de ce plantage, même si aucune activité n'a été signalée par votre antivirus. Veillez à configurer l'application antivirus pour que celle-ci ignore le répertoire d'installation *wallpaper_engine* et tous les fichiers ". exe" importants de Wallpaper Engine. Voir la section *Réparations rapides en cas de plantage de Wallpaper Engine* ci-dessous pour obtenir plus de renseignements.

Si vous n'avez pas d'application antivirus installée, veuillez réinstaller tous les pilotes importants et essayer de passer à la version 64 bits de Wallpaper Engine (ou la version 32 bits si vous avez déjà utilisé la version 64 bits).

Dans certains cas, ce problème peut également être causé par d'autres applications qui entrent en conflit avec Wallpaper Engine. Il s'agit généralement d'applications qui "injectent" du code dans Wallpaper Engine ou qui modifient votre installation de Windows de manière importante.

!["0xC0000005" - Message de plantage de Wallpaper Engine](/img/faq/0xC0000005.png)

## Wallpaper a planté à cause d'une autre application

### KERNELBASE.dll / ntdll.dll

Il s'agit d'un crash dans le noyau de Windows. C'est généralement dû à un antivirus ou à des pilotes de carte graphique corrompus. Nous vous renvoyons à la section sur les réparations rapides pour plus d'informations. Ce problème peut également être causé par des composants système corrompus. Utilisez le vérificateur des fichiers système Microsoft pour trouver de potentiels fichiers corrompus :

* [Vérificateur des fichiers système Microsoft](https://support.microsoft.com/fr-fr/help/929833/use-the-system-file-checker-tool-to-repair-missing-or-corrupted-system)

### d3d11.dll

Il s'agit d'un crash de DirectX. C'est généralement dû à un antivirus ou à des pilotes de carte graphique corrompus. Nous vous renvoyons à la section sur les réparations rapides pour plus d'informations. Ce problème peut également être causé par des composants système corrompus. Utilisez le vérificateur des fichiers système Microsoft pour trouver de potentiels fichiers corrompus :

* [Vérificateur des fichiers système Microsoft](https://support.microsoft.com/en-us/help/929833/use-the-system-file-checker-tool-to-repair-missing-or-corrupted-system)

### mfplat.dll

Il s'agit d'un plantage dans Windows Media Foundation. Il peut être causé par des pilotes de carte graphique corrompus, mais la cause la plus fréquente est un codec vidéo corrompu ou manquant dans votre système. Suivez les instructions de notre guide de réparation vidéo pour corriger ce type de plantages :

[Cliquez ici](/noshow/notplaying.html)

### AudioSes.dll

Ce crash est généralement dû à Windows lui-même. Essayez de réinstaller la dernière version de vos pilotes de carte son pour essayer de résoudre le problème. Vous pouvez corriger ce problème en changeant l'option *"Une autre application émet du son"* sur *"Continuer d’exécuter"* dans l'onglet *"Performances*" des paramètres de Wallpaper Engine.

### atiumdag.dll / atiumd64.dll

* [AMD Radeon](https://www.amd.com/support)

::: tip
Attention
N'oubliez pas de sélectionner "Effectuer une réinstallation propre" ou désinstaller manuellement vos pilotes. Si vos pilotes actuels sont corrompus, il faut les éliminer en premier.
:::

### nvwgf2umx.dll / nvwgf2um.dll

Les pilotes Nvidia de votre système ont un problème. Rendez-vous sur le site Nvidia pour télécharger la dernière version de vos pilotes :

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx)

::: tip
Attention
N'oubliez pas de sélectionner "Effectuer une réinstallation propre" ou désinstaller manuellement vos pilotes. Si vos pilotes actuels sont corrompus, il faut les éliminer en premier.
:::

### igdumd64.dll / igd10umd64.dll / igdumdx32.dll / igd10umd32.dll

Les pilotes Intel de votre système ont un problème. Rendez-vous sur le site Intel pour télécharger la dernière version de vos pilotes :

* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)

### RZChromaSDK.dll / RzChromaSDK64.dll

Ces types de plantages sont causés par Razer Chroma qui fait partie de **Razer Synapse**. Généralement, une mauvaise installation de Razer Synapse en est la cause. Dans la plupart des cas, il suffit de réinstaller correctement Razer Synapse pour régler le problème :

**Réinstallation propre de tous les logiciels de Razer**

::: avertissement
Veillez à ce que Wallpaper Engine soit désactivé pendant la réinstallation de Razer Synapse.
:::

1. Désactivez complètement Wallpaper Engine lorsque l'application est en cours d'exécution (faites un clic droit sur l'icône de la barre d'état de Windows, puis sélectionnez **Quitter**)
2. Désinstallez tous les logiciels Razer de votre ordinateur via Windows
3. Rendez-vous sur le site Internet de Razer pour y télécharger la version la plus récente de la suite de logiciels, puis installez-la :

* [Téléchargez Razer Synapse 3](https://www.razer.com/synapse-3)

4. Ensuite, redémarrez votre ordinateur sans relancer préalablement Wallpaper Engine.

**La réinstallation ne règle pas le problème**

Si une réinstallation de Razer Synapse n'arrange pas la situation, il y a peut-être un problème sous-jacent avec Razer Synapse. Certaines causes de ces plantages se sont avérées être des mises à jour défectueuses de Razer Synapse. Essayez de désactiver le plug-in LED (*"iCUE & Chroma SDK"*) via l'onglet **Plug-ins** des paramètres de Wallpaper Engine, et ce, jusqu'à ce que le problème soit réglé lors d'une future mise à jour de Razer Synapse.

Si les plantages continuent, même après une installation propre de Razer Synapse, veuillez directement contacter les membres de l'équipe d'assistance de Razer pour les informer de ces crashs. S'ils ne sont pas en mesure de vous aider, veuillez nous contacter : nous examinerons ces plantages et transmettront également nos conclusions à l'équipe de développement de Razer Synapse (même si Razer doit être votre interlocuteur principale dans ce genre de situation).

### MMDEvAPI.dll

Ce type de crash se produit en raison d'un logiciel audio défectueux installé sur votre système. Cela est généralement dû à un logiciel d'amélioration du son, comme ceux préinstallés sur certains ordinateurs portables. Ce type de logiciels provoquera souvent des plantages, car ils ne sont pas toujours compatibles avec Windows. Essayez de rechercher "Sonic Studio" ou "Nahimic" et mettez ces logiciels à jour. Si vous ne trouvez pas de mise à jour pour ces programmes, vous pouvez également les désinstaller. Ils ne sont pas nécessaires au bon fonctionnement de votre ordinateur.

### fraps32.dll

Ce crash est dû à Fraps, un logiciel permettant de filmer son écran, de faire des captures d'écran et d'afficher le framerate en surimpression. Fraps n'est plus mis à jour depuis 2013 et commence à être dépassé. Nous vous conseillons de trouver une alternative à Fraps. Fraps n'étant plus mis à jour, ce problème ne peut pas être résolu si vous ne désinstallez pas ce logiciel.

## Erreur 0xc000007b

Cela signifie qu'un module de Windows a été corrompu. Il s'agit en général de DirectX. Essayez de désinstaller manuellement ces fichiers :

* C:\Windows\SysWOW64\d3dx9_43.dll
* C:\Windows\System32\d3dx9_43.dll

Installez-les à nouveau avec le programme d'installation DirectX 9 : *C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\_CommonRedist\DirectX\Jun2010\dxsetup.exe* (L'emplacement de ce fichier dépend du dossier d'installation de wallpaper_engine).

Si vous obtenez toujours cette erreur, il peut s'agir d'un autre module similaire à DirectX qui a été corrompu. Cela indique généralement un problème sous-jacent plus important avec Windows que vous devrez corriger avant de pouvoir à nouveau lancer Wallpaper Engine.