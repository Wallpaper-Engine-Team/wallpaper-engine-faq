- - -
  tags:
  - screensavers
  - hibernation
  - sleep
  - power saving
- - -

# No funcionan los salvapantallas / hibernación

Windows no puede hibernar si hay transmisiones de audio activas. You can get around this by either disabling audio output in the "General" tab of the Wallpaper Engine settings to prevent Windows from blocking hibernation in the first place. If you want to continue to have audio output, follow the steps in this guide on how to achieve that.

## Cambiar la configuración de energía de Windows

Windows does not hibernate with any active audio streams open. You can get around this by either disabling audio output in the "General" tab of the Wallpaper Engine settings or re-configuring your Windows to allow it to sleep with audio playback enabled:

1. Escribe «Configuración de energía y suspensión» en la búsqueda de Windows.
2. Haz clic en «Configuración adicional de energía».
3. Haz clic en «Cambiar la configuración del plan» junto al plan seleccionado.
4. Haz clic en «Cambiar la configuración avanzada de energía».
5. Baja hasta encontrar «Configuración multimedia».
6. Cambia la configuración de «Al compartir multimedia» a «Permitir que el equipo entre en modo ausente» (salvapantallas) **o** «Permitir que el equipo entre en modo de suspensión» (hibernación).

![Enable "Allow the computer to sleep"](./power.gif)

## Problemas de hibernación con fondos de pantalla tipo web

"Web" wallpapers use a web browser similar to Google Chrome ("CEF") which will prevent hibernation mode. Until this is fixed in the browser, you can get around this with some command-line prompts.

1. Busca «cmd.exe» en Windows, haz clic derecho y selecciona «Ejecutar como administrador» (este paso es muy importante, si no, no funcionará).
2. Usa el comando `powercfg /requests` para ver todos los procesos que impiden que el equipo hiberne (fíjate en si hay otros programas pueden tener la culpa).
3. Usa los tres comandos siguientes para permitirle al sistema hibernar mientras esté activo Wallpaper Engine:

```
powercfg /requestsoverride PROCESS webwallpaper32.exe AWAYMODE DISPLAY SYSTEM
powercfg /requestsoverride PROCESS wallpaper32.exe AWAYMODE DISPLAY SYSTEM
powercfg /requestsoverride PROCESS wallpaper64.exe AWAYMODE DISPLAY SYSTEM
```

Additionally, you can also set the **Display asleep** option in the **Performance** tab of the Wallpaper Engine settings to *Stop (free memory)* and turn off your display. That way Wallpaper Engine stops all playback when you turn your display off when leaving your computer unattended.