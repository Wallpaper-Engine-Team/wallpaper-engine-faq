# No funcionan los salvapantallas / hibernación

Windows no puede hibernar si hay transmisiones de audio activas. Puede solventar esto si deshabilita la salida de audio en la pestaña «General» de la configuración de Wallpaper Engine para evitar que Windows bloquee la hibernación. Si quiere conservar la salida de audio, siga los pasos de esta guía para hacerlo.

## Cambiar la configuración de energía de Windows

Windows no puede hibernar si hay transmisiones de audio activas. Puede solventar esto si deshabilita la salida de audio en la pestaña «General» de la configuración de Wallpaper Engine o si reconfigura Windows para que pueda hibernar con el sonido activado:

1. Escriba «Configuración de energía y suspensión» en la búsqueda de Windows.
2. Haga clic en «Configuración adicional de energía».
3. Haga clic en «Cambiar la configuración del plan» junto al plan seleccionado.
4. Haga clic en «Cambiar la configuración avanzada de energía».
5. Baje hasta encontrar «Configuración multimedia».
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