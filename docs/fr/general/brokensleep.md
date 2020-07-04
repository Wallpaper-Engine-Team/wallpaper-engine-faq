# Veille / L'écran de veille ne marche pas

Windows ne se met pas en veille si du son est actuellement en lecture. Vous pouvez contourner ce problème en désactivant la sortie audio dans l'onglet "Général" des paramètres de Wallpaper Engine pour empêcher Windows de bloquer la mise en veille. Si vous souhaitez quand même avoir de l'audio, voici la marche à suivre.

## Changer les paramètres d'alimentation de Windows

Windows ne se met pas en veille si du son est actuellement en lecture. Vous pouvez contourner ce problème en désactivant la sortie audio dans l'onglet "Général" des paramètres de Wallpaper Engine ou en reconfigurant Windows :

1. Cherchez les "paramètres d'alimentation et mise en veille" dans la barre de recherche de Windows.
2. Cliquez sur "Paramètres d'alimentation supplémentaires"
3. Cliquez sur "Modifier les paramètres du mode" à côté du mode que vous avez choisi
4. Cliquez sur "Modifier les paramètres d'alimentation avancés"
5. Cherchez "Paramètres multimédias"
6. Dans "Lors du partage de fichiers multimédias", choisissez "Autoriser l'ordinateur à se mettre en mode Absence" (économiseur d'écran) **ou** "Autorisez l'ordinateur à se mettre en veille"

![Enable "Allow the computer to sleep"](./power.gif)

## La mise en veille les fonds d'écran Web

Les fonds d'écran Web utilisent un navigateur similaire au "CFE" de Google Chrome qui empêche la mise en veille. Vous pouvez contourner ce problème avec des invites de ligne de commande.

1. Cherchez "cmd.exe" dans Windows et faites un clic droit pour sélectionner "Exécuter en tant qu'administrateur" (sinon ça ne fonctionnera pas !).
2. Utilisez la commande `powercfg /requests` pour afficher tous les processus qui bloquent la mise en veille (vous pourrez alors vérifier si d'autres programmes posent également problème).
3. Utilisez les trois commandes suivantes pour permettre à votre système de se mettre en veille alors que Wallpaper Engine est en cours d'exécution :

```
powercfg /requestsoverride PROCESS webwallpaper32.exe AWAYMODE DISPLAY SYSTEM
powercfg /requestsoverride PROCESS wallpaper32.exe AWAYMODE DISPLAY SYSTEM
powercfg /requestsoverride PROCESS wallpaper64.exe AWAYMODE DISPLAY SYSTEM
```

Additionally, you can also set the **Display asleep** option in the **Performance** tab of the Wallpaper Engine settings to *Stop (free memory)* and turn off your display. That way Wallpaper Engine stops all playback when you turn your display off when leaving your computer unattended.