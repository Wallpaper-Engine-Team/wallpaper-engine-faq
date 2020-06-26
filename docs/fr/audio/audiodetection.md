# La visualisation audio ne fonctionne pas / Aucun son détecté

La visualisation audio peut ne pas fonctionner à cause de plusieurs raisons. Voici une liste de tous les facteurs qui pourraient être à la source de vos problèmes.

## 1. Configuration du périphérique audio
Allez dans les paramètres de Wallpaper Engine et trouvez l'onglet "Général". Vers le milieu, vous devriez trouver la section "Média" où vous pourrez choisir le périphérique audio. Assurez vous que le bon périphérique est connecté. Si vous ne savez pas quel périphérique est le bon, essayez-les tous en écoutant de la musique jusqu'à ce que la visualisation fonctionne.

Si le bon périphérique audio est sélectionné, mais que vous n'entendez toujours aucun son ou si vos visualiseurs audio ne fonctionnent pas, assurez-vous de ne pas avoir mis Wallpaper Engine en muet dans le mélangeur de volume de Windows ou de ne pas avoir mis le son trop bas. Windows ne fait pas la différence entre le volume d'enregistrement et le volume de lecture. Cela veut dire que si vous avez choisi un volume faible avec Windows, les enregistrements audio ne fonctionneront pas non plus :

![Raise volume and unmute Wallpaper Engine in the Windows audio mixer](./audiomixer.png)

Si l'audio est bien détecté, mais que le son n'est pas assez fort, n'oubliez pas que le volume des logiciels (votre lecteur de musique, votre navigateur, etc.) joue sur la détection du son. Si vous ne souhaitez pas augmenter le volume de l'application, vous pouvez améliorer la détection du son dans le menu "Général" des paramètres de Wallpaper Engine (le volume d'enregistrement par défaut est de 50).

## 2. Problèmes spécifiques liés au matériel

### Casques Corsair Void Pro / Bluetooth / USB

Les casques sans fil ou USB posent souvent des problèmes de drivers audio. Modifier la fréquence d'échantillonnage audio dans les paramètres de Windows à 44100 Hz peut résoudre définitivement le problème :

Faites un clic droit sur l'icône du volume dans le coin inférieur droit de la barre des tâches et choisissez "Ouvrir les paramètres de son". Allez dans "Sortie", puis "Propriétés du périphérique". Afterwards, click on "Additional device properties", then navigate to the "Advanced" tab. You can change the sampling rate in the menu shown there. The exact location is different on different versions of Windows. if you cannot find this option, search the web for guides on how to change the sampling rate of sound devices for your version of Windows.

![Set the sampling rate to "24 bit, 44100 Hz"](./samplingrate.png)

### Razer headsets with THX

Change the audio input in Wallpaper Engine to the 'Speakers (Razer XYZ)' device. This option is in the general settings and any Razer headset with THX effects should work with this solution.

## 3. Conflicting applications

If you believe your audio settings are correct but audio responsive wallpapers do not react to audio, you most likely have sound hardware or software that disables the loopback recording feature on the entire PC. It needs to be configured correctly or removed:

* Nahimic
* Sonic Suite
* Alienware Audio
* Various other applications, especially pre-installed ones on notebooks

If you are unsure if you have any such applications installed, you can also use the Wallpaper Engine scan tool and it will report some programs which are known to cause these issues:

* [Wallpaper Engine Scan Tool](/debug/scantool.html)

