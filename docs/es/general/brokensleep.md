# No funcionan los salvapantallas / hibernación

Windows no puede hibernar si hay transmisiones de audio activas. Puedes solventar esto si deshabilitas la salida de audio en la pestaña «General» de la configuración de Wallpaper Engine para evitar que Windows bloquee la hibernación. Si quieres conservar la salida de audio, sigue los pasos de esta guía.

## Cambiar la configuración de energía de Windows

Windows no puede hibernar si hay transmisiones de audio activas. Puedes solventar esto si deshabilitas la salida de audio en la pestaña «General» de la configuración de Wallpaper Engine o si reconfiguras Windows para que pueda hibernar con el sonido activado:

1. Escribe «Configuración de energía y suspensión» en la búsqueda de Windows.
2. Haz clic en «Configuración adicional de energía».
3. Haz clic en «Cambiar la configuración del plan» junto al plan seleccionado.
4. Haz clic en «Cambiar la configuración avanzada de energía».
5. Baja hasta encontrar «Configuración multimedia».
6. Cambia la configuración de «Al compartir multimedia» a «Permitir que el equipo entre en modo ausente» (salvapantallas) **o** «Permitir que el equipo entre en modo de suspensión» (hibernación).

![Habilitar «Permitir que el equipo entre en modo de suspensión».](./power.gif)

## Problemas de hibernación con fondos de pantalla tipo web

Los fondos de pantalla web utilizan un navegador similar a Google Chrome («CEF») que impide que el equipo hiberne. Hasta que se solucione, puedes solventar el problema con unas líneas de comandos.

1. Busca «cmd.exe» en Windows, haz clic derecho y selecciona «Ejecutar como administrador» (este paso es muy importante, si no, no funcionará).
2. Usa el comando `powercfg /requests` para ver todos los procesos que impiden que el equipo hiberne (fíjate en si hay otros programas pueden tener la culpa).
3. Usa los tres comandos siguientes para permitirle al sistema hibernar mientras esté activo Wallpaper Engine:

```
powercfg /requestsoverride PROCESS webwallpaper32.exe AWAYMODE DISPLAY SYSTEM
powercfg /requestsoverride PROCESS wallpaper32.exe AWAYMODE DISPLAY SYSTEM
powercfg /requestsoverride PROCESS wallpaper64.exe AWAYMODE DISPLAY SYSTEM
```

Además, puedes cambiar la opción **Monitor en suspensión** en la pestaña **Rendimiento** de Wallpaper Engine a *Detener (liberar memoria)* y apagar la pantalla. Así, Wallpaper Engine dejará de reproducir todo cuando apagues la pantalla al dejar el ordenador desatendido.