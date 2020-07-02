# Ocultar el icono de Wallpaper Engine de la bandeja

Se puede ocultar el icono de Wallpaper Engine de la bandeja si crea una clave de registro que obligue a Wallpaper Engine a ocultar el icono junto al reloj de Windows.

::: advertencia No recomendamos hacerlo a no ser que el icono le moleste tanto que se vea en la tesitura de aceptar los inconvenientes que trae consigo ocultar el icono de la bandeja. :::

Una vez quede oculto el icono, la única forma de cerrar Wallpaper Engine será forzar la detención desde el Administrador de tareas de Windows. Además, solo podrá abrir la interfaz desde Steam o con el .exe, lo cual es muy poco práctico y confuso.

Si, a pesar de todo, quiere ocultar el icono de la bandeja, siga los pasos siguientes:

Para crear una clave de registro tiene que abrir el menú de Windows y escribir «regedit.exe» para abrir el «Editor del Registro».

1. Vaya al directorio del registro: *HKEY_CURRENT_USER\Software\WallpaperEngine*
2. Haga clic derecho en la carpeta de registro *WallpaperEngine*, seleccione *Nuevo* y, a continuación, *Valor DWORD (32 Bit)*.
3. Give the registry the following name: *hideTrayIcon*
4. Make sure that the name is correct, it must have no spaces and must be written exactly like that.
5. Double-click on the registry key and give it the value: *1*
6. Restart Wallpaper Engine, the application will now not show a tray icon.

You can reverse this process by setting *hideTrayIcon* to *0* or deleting it altogether, followed by restarting Wallpaper Engine. 