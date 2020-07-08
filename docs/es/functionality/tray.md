# Ocultar el icono de Wallpaper Engine de la bandeja

Se puede ocultar el icono de Wallpaper Engine de la bandeja si creas una clave de registro que obligue a Wallpaper Engine a ocultar el icono junto al reloj de Windows.

::: warning No recomendamos hacerlo a no ser que el icono te moleste tanto que te veas en la tesitura de aceptar los inconvenientes que trae consigo ocultar el icono de la bandeja. :::

Una vez quede oculto el icono, la única forma de cerrar Wallpaper Engine será forzar la detención desde el Administrador de tareas de Windows. Además, solo podrás abrir la interfaz desde Steam o con el .exe, lo cual es muy poco práctico y confuso.

Si, a pesar de todo, quieres ocultar el icono de la bandeja, sigue los pasos siguientes:

Para crear una clave de registro tienes que abrir el menú de Windows y escribir «regedit.exe» para abrir el «Editor del Registro».

1. Ve al directorio del registro: *HKEY_CURRENT_USER\Software\WallpaperEngine*.
2. Haz clic derecho en la carpeta de registro *WallpaperEngine*, selecciona *Nuevo* y, a continuación, *Valor DWORD (32 Bit)*.
3. Llama al registro: *hideTrayIcon*
4. Asegúrate de que el nombre es correcto y de que no hay ningún espacio entre las palabras. Tienes que escribirlo exactamente así.
5. Haz doble clic en la clave de registro y otórgale el valor: *1*
6. Reinicia Wallpaper Engine. Ahora no aparecerá el icono en la bandeja.

Puedes revertir el proceso si cambias el valor de *hideTrayIcon* a *0* o si borras la clave de registro y luego reinicias Wallpaper Engine. 