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

Si un antivirus est installé (à l'exception de Windows Defender), assurez-vous de configurer une exception pour Wallpaper Engine dans vos paramètres. Une réinstallation de Wallpaper Engine est parfois nécessaire si votre antivirus a corrompu ou verrouillé certains fichiers.

Essayez également de vérifier l'intégrité de Wallpaper Engine grâce à Steam :

* [Steam : vérifier l'intégrité des fichiers d'un jeu](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

## Wallpaper a planté à cause d'une autre application

### KERNELBASE.dll / ntdll.dll

Il s'agit d'un crash dans le noyau de Windows. C'est généralement dû à un antivirus ou à des pilotes de carte graphique corrompus. Nous vous renvoyons à la section sur les réparations rapides pour plus d'informations. Ce problème peut également être causé par des composants système corrompus. Utilisez le vérificateur des fichiers système Microsoft pour trouver de potentiels fichiers corrompus :

* [Vérificateur des fichiers système Microsoft](https://support.microsoft.com/fr-fr/help/929833/use-the-system-file-checker-tool-to-repair-missing-or-corrupted-system)

### d3d11.dll

Il s'agit d'un crash de DirectX. C'est généralement dû à un antivirus ou à des pilotes de carte graphique corrompus. Nous vous renvoyons à la section sur les réparations rapides pour plus d'informations. Ce problème peut également être causé par des composants système corrompus. Utilisez le vérificateur des fichiers système Microsoft pour trouver de potentiels fichiers corrompus :

* [Vérificateur des fichiers système Microsoft](https://support.microsoft.com/fr-fr/help/929833/use-the-system-file-checker-tool-to-repair-missing-or-corrupted-system)

### mfplat.dll

Il s'agit d'un plantage dans Windows Media Foundation. Il peut être causé par des pilotes de carte graphique corrompus, mais la cause la plus fréquente est un codec vidéo corrompu ou manquant dans votre système. Suivez les instructions de notre guide de réparation vidéo pour corriger ce type de plantages :

[Cliquez ici](/noshow/notplaying.html)

### AudioSes.dll

Ce crash est généralement dû à Windows lui-même. Essayez de réinstaller la dernière version de vos pilotes de carte son pour essayer de résoudre le problème. Vous pouvez corriger ce problème en changeant l'option *"Une autre application émet du son"* sur *"Continuer d’exécuter"* dans l'onglet *"Performances*" des paramètres de Wallpaper Engine.

### atiumdag.dll / atiumd64.dll

* [AMD Radeon](https://www.amd.com/support)

::: tip
Attention N'oubliez pas de sélectionner "Effectuer une réinstallation propre" ou désinstaller manuellement vos pilotes. Si vos pilotes actuels sont corrompus, il faut les éliminer en premier.
:::

### nvwgf2umx.dll

Les pilotes Nvidia de votre système ont un problème. Rendez-vous sur le site Nvidia pour télécharger la dernière version de vos pilotes :

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx)

::: tip
Attention N'oubliez pas de sélectionner "Effectuer une réinstallation propre" ou désinstaller manuellement vos pilotes. Si vos pilotes actuels sont corrompus, il faut les éliminer en premier.
:::

### igdumd64.dll / igd10umd64.dll / igdumdx32.dll / igd10umd32.dll

Les pilotes Intel de votre système ont un problème. Rendez-vous sur le site Intel pour télécharger la dernière version de vos pilotes :

* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)

### RZChromaSDK.dll / RzChromaSDK64.dll

These types of crashes are caused by Razer Chroma which is part of **Razer Synapse**. Usually, this is caused by a faulty installation of Razer Synapse. In most cases, a clean reinstallation of Razer Synapse fixes these types of crashes:

**Clean reinstallation of all Razer software**

::: warning
Make sure Wallpaper Engine is turned off while reinstalling Razer Synapse.
:::

1. Turn off Wallpaper Engine completely if it is running (right-click on the icon in the Windows tray and then select **Quit**)
2. Uninstall all Razer software from your computer through Windows
3. Download the latest version of Razer's software suite from their website and install it:

* [Download Razer Synapse 3](https://www.razer.com/synapse-3)

4. Afterwards restart your computer without restarting Wallpaper Engine beforehand.

**Reinstallation does not fix the problem**

If the issue is not resolved by a reinstallation of Razer Synapse, there may be an underlying issue with Razer Synapse itself, in the past this has been caused by faulty Razer Synapse updates. Try turning off the LED Plugin (*"iCUE & Chroma SDK"*) in the **Plugins** tab of the Wallpaper Engine settings until this problem is fixed in a future Razer Synapse update.

If the crashes persist even after a clean reinstallation of Razer Synapse, please contact Razer support directly and inform them about the crashes. If they are unable to help, please reach out to us for technical support - we can look into these crashes and forward our findings to the Razer Synapse development team as well though Razer should be the main contact for this specific crash.

### MMDEvAPI.dll

This type of crash occurs to due broken audio software installed on your system. This is usually caused by "sound enhancement" software, especially the ones pre-installed on various notebooks. This type of software will often cause crashes because they interact with Windows in a buggy way, try and look for "Sonic Studio" or "Nahimic" and update them. If you cannot find an update for these programs, you can also uninstall them as they are not necessary for your computer audio to function properly.

### fraps32.dll

The crash has been caused by the FPS monitor and screen recording app Fraps. Fraps has not received updates since 2013 and is a heavily outdated application. Please use an alternative to Fraps as this is a Fraps bug which may never be fixed as the software is abandoned.

## Erreur 0xc000007b

This means that a Windows module has been corrupted by something on your system - usually DirectX itself is broken in this case. Try manually deleting these files:

* C:\Windows\SysWOW64\d3dx9_43.dll
* C:\Windows\System32\d3dx9_43.dll

Now install them again with the DirectX 9 installer: *C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\_CommonRedist\DirectX\Jun2010\dxsetup.exe* (The exact location depends on where your wallpaper_engine installation directory is).

If you still get this error it might be another, similar DirectX module that has been broken by something. This usually indicates a bigger underlying issues with your Windows installation which you need to fix before you can run Wallpaper Engine.

## Plantage après la mise en veille

If Wallpaper Engine crashes after Windows hibernation, then Windows is failing to correctly restore your graphics card drivers and Wallpaper Engine together. Hibernation in Windows is simply not a reliable process. You can enable the option **Safe start after hibernation** in Wallpaper Engine to mitigate this issue. This option will attempt to automatically restart Wallpaper Engine instead of expecting Windows to correctly work after hibernation.
