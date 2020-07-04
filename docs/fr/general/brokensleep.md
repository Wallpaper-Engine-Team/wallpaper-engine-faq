# Veille / L'écran de veille ne marche pas

Windows ne se met pas en veille si du son est actuellement en lecture. Vous pouvez contourner ce problème en désactivant la sortie audio dans l'onglet "Général" des paramètres de Wallpaper Engine pour empêcher Windows de bloquer la mise en veille. Si vous souhaitez quand même avoir de l'audio, voici la marche à suivre.

## Changer les paramètres d'alimentation de Windows

Windows ne se met pas en veille si du son est actuellement en lecture. Vous pouvez contourner ce problème en désactivant la sortie audio dans l'onglet "Général" des paramètres de Wallpaper Engine ou en reconfigurant Windows :

1. Cherchez les "paramètres d'alimentation et mise en veille" dans la barre de recherche de Windows.
2. Cliquez sur "Paramètres d'alimentation supplémentaires"
3. Cliquez sur "Modifier les paramètres du mode" à côté du mode que vous avez choisi
4. Cliquez sur "Modifier les paramètres d'alimentation avancés"
5. Cherchez "Paramètres multimédias"
6. Set "When sharing media" to "Allow the computer to enter away mode" (screensavers) **or** "Allow the computer to sleep" (hibernation)

![Enable "Allow the computer to sleep"](./power.gif)

## Hibernation issues with "Web" type wallpapers

"Web" wallpapers use a web browser similar to Google Chrome ("CEF") which will prevent hibernation mode. Until this is fixed in the browser, you can get around this with some command-line prompts.

1. Search Windows for "cmd.exe" and right-click on it and select "Run as administrator" (very important, otherwise this will not work!).
2. Use the command `powercfg /requests` to view all processes that are blocking your system from hibernation (also check if other programs may be at fault here).
3. Use the following three commands to permit your system to sleep with Wallpaper Engine running:

```
powercfg /requestsoverride PROCESS webwallpaper32.exe AWAYMODE DISPLAY SYSTEM
powercfg /requestsoverride PROCESS wallpaper32.exe AWAYMODE DISPLAY SYSTEM
powercfg /requestsoverride PROCESS wallpaper64.exe AWAYMODE DISPLAY SYSTEM
```

Additionally, you can also set the **Display asleep** option in the **Performance** tab of the Wallpaper Engine settings to *Stop (free memory)* and turn off your display. That way Wallpaper Engine stops all playback when you turn your display off when leaving your computer unattended.