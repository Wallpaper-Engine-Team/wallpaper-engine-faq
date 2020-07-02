# Ocultar el icono de Wallpaper Engine de la bandeja

Se puede ocultar el icono de Wallpaper Engine de la bandeja si crea una clave de registro que obligue a Wallpaper Engine a ocultar el icono junto al reloj de Windows.

::: advertencia No recomendamos hacerlo a no ser que el icono le moleste tanto que se vea en la tesitura de aceptar los inconvenientes que trae consigo ocultar el icono de la bandeja. :::

Una vez quede oculto el icono, la única forma de cerrar Wallpaper Engine será forzar la detención desde el Administrador de tareas de Windows. Además, solo podrá abrir la interfaz desde Steam o con el .exe, lo cual es muy poco práctico y confuso.

Si, a pesar de todo, quiere ocultar el icono de la bandeja, siga los pasos siguientes:

Para crear una clave de registro tiene que abrir el menú de Windows y escribir «regedit.exe» para abrir el «Editor del Registro».

1. Vaya al directorio del registro: *HKEY_CURRENT_USER\Software\WallpaperEngine*
2. Haga clic derecho en la carpeta de registro *WallpaperEngine*, seleccione *Nuevo* y, a continuación, *Valor DWORD (32 Bit)*.
3. Llame al registro: *hideTrayIcon*
4. Asegúrese de que el nombre es correcto y de que no hay ningún espacio entre las palabras. Tiene que escribirlo exactamente así.
5. Haga doble clic en la clave de registro y otórguele el valor: *1*
6. Reinicie Wallpaper Engine. Ahora no aparecerá el icono en la bandeja.

Puede revertir el proceso si cambia el valor de *hideTrayIcon* a *0* o si borra la clave de registro y luego reinicia Wallpaper Engine. 