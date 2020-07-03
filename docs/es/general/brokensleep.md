# No funcionan los salvapantallas / hibernación

Windows no puede hibernar si hay transmisiones de audio activas. Puede solventar esto si deshabilita la salida de audio en la pestaña «General» de la configuración de Wallpaper Engine para evitar que Windows bloquee la hibernación. Si quiere conservar la salida de audio, siga los pasos de esta guía para hacerlo.

## Cambiar la configuración de energía de Windows

Windows no puede hibernar si hay transmisiones de audio activas. Puede solventar esto si deshabilita la salida de audio en la pestaña «General» de la configuración de Wallpaper Engine o si reconfigura Windows para que pueda hibernar con el sonido activado:

1. Escriba «Configuración de energía y suspensión» en la búsqueda de Windows.
2. Haga clic en «Configuración adicional de energía».
3. Haga clic en «Cambiar la configuración del plan» junto al plan seleccionado.
4. Haga clic en «Cambiar la configuración avanzada de energía».
5. Baje hasta encontrar «Configuración multimedia».
6. Cambie la configuración de «Al compartir multimedia» a «Permitir que el equipo entre en modo ausente» (salvapantallas) **o** «Permitir que el equipo entre en modo de suspensión» (hibernación).

![Habilitar «Permitir que el equipo entre en modo de suspensión».](./power.gif)

## Problemas de hibernación con fondos de pantalla tipo web

Los fondos de pantalla web utilizan un navegador similar a Google Chrome («CEF») que impide que el equipo hiberne. Hasta que se solucione, puede solventar el problema con unas líneas de comandos.

1. Busque «cmd.exe» en Windows, haga clic derecho y seleccione «Ejecutar como administrador» (este paso es muy importante, si no, no funcionará).
2. Use el comando `powercfg /requests` para ver todos los procesos que impiden que el equipo hiberne (fíjese si hay otros programas pueden tener la culpa).
3. Use los tres comandos siguientes para permitirle al sistema hibernar mientras esté activo Wallpaper Engine:

```
powercfg /requestsoverride PROCESS webwallpaper32.exe AWAYMODE DISPLAY SYSTEM
powercfg /requestsoverride PROCESS wallpaper32.exe AWAYMODE DISPLAY SYSTEM
powercfg /requestsoverride PROCESS wallpaper64.exe AWAYMODE DISPLAY SYSTEM
```

Además, puede cambiar la opción **Monitor en suspensión** en la pestaña **Rendimiento** de Wallpaper Engine a *Detener (liberar memoria)* y apagar la pantalla. Así, Wallpaper Engine dejará de reproducir todo cuando apague la pantalla al dejar el ordenador desatendido.