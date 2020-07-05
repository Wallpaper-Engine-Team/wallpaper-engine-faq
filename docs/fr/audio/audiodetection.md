# La visualisation audio ne fonctionne pas / Aucun son détecté

La visualisation audio peut ne pas fonctionner à cause de plusieurs raisons. Voici une liste de tous les facteurs qui pourraient être à la source de vos problèmes.

## 1. Configuration du périphérique audio
Allez dans les paramètres de Wallpaper Engine et trouvez l'onglet "Général". Vers le milieu, vous devriez trouver la section "Média" où vous pourrez choisir le périphérique audio. Assurez-vous que le bon périphérique est connecté. Si vous ne savez pas quel périphérique est le bon, essayez-les tous en écoutant de la musique jusqu'à ce que la visualisation fonctionne.

Si le bon périphérique audio est sélectionné, mais que vous n'entendez toujours aucun son ou si vos visualiseurs audio ne fonctionnent pas, assurez-vous de ne pas avoir mis Wallpaper Engine en muet dans le mélangeur de volume de Windows ou de ne pas avoir mis le son trop bas. Windows ne fait pas la différence entre le volume d'enregistrement et le volume de lecture. Cela veut dire que si vous avez choisi un volume faible avec Windows, les enregistrements audio ne fonctionneront pas non plus :

![Augmenter le volume rétablit l'audio de Wallpaper Engine dans le mélangeur de volume Windows](./audiomixer.png)

Si l'audio est bien détecté, mais que le son n'est pas assez fort, n'oubliez pas que le volume des applications (votre lecteur de musique, votre navigateur, etc.) joue sur la détection du son. Si vous ne souhaitez pas augmenter le volume de l'application, vous pouvez améliorer la détection du son dans l'onglet "Général" des paramètres de Wallpaper Engine (le volume d'enregistrement par défaut est de 50).

## 2. Problèmes spécifiques liés au matériel

### Casques Corsair Void Pro / Bluetooth / USB

Les casques sans fil ou USB posent souvent des problèmes de drivers audio. Modifier la fréquence d'échantillonnage audio dans les paramètres de Windows à 44100 Hz peut résoudre définitivement le problème :

Faites un clic droit sur l'icône du volume dans la zone de notification et choisissez "Ouvrir les paramètres de son". Allez dans "Sortie", puis "Propriétés du périphérique". Cliquez sur "Propriétés des périphériques supplémentaires" et choisissez l'onglet "Statistiques avancées". Vous pourrez y définir le taux d'échantillonnage. Ce menu ne se trouve pas toujours au même endroit selon votre version de Windows. Si vous ne trouvez pas cette option, nous vous conseillons de chercher des tutoriels pour changer le taux d'échantillonnage selon votre version de Windows.

![Mettre le taux d'échantillonnage sur "24 bits, 44100 Hz"](./samplingrate.png)

### Casques Razer avec THX

Modifiez l'entrée audio dans Wallpaper Engine par "Haut-parleurs (Razer XYZ)". Cette option se trouve dans les paramètres généraux et cette solution devrait fonctionner avec tous les casques Razer disposant de THX.

## 3. Conflit entre les applications

Si vous pensez que vos paramètres audio sont corrects, mais que les fonds d'écran sensibles à l'audio ne réagissent pas, vous utilisez probablement du matériel ou un logiciel audio qui désactive la fonction d'enregistrement en boucle sur votre PC. Vous devrez configurer ou désinstaller :

* Nahimic
* Sonic Suite
* Alienware Audio
* De nombreuses autres applications, notamment celles installées d'office dans les ordinateurs portables

Si vous ne savez pas si des applications de ce genre sont installées, vous pouvez également utiliser l'outil d'analyse de Wallpaper Engine. Il vous signalera si un programme est susceptible de poser problème :

* [Outil d'analyse de Wallpaper Engine](/debug/scantool.html)

