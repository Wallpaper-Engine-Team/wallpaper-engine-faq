# «Archivo de contenido bloqueado» / Error de escritura en disco

Si Steam no puede descargar Wallpaper Engine al instalar o al actualizar el programa, es posible que el antivirus esté borrando archivos, poniendo archivos en cuarentena o bloqueando directorios enteros sin notificártelo. Si es el caso, te aparecerán los errores «Archivo de contenido bloqueado» o «Acceso denegado» en Steam. Tienes que ponerle solución desde el antivirus y deshacer los cambios que ha hecho en el equipo. La mayoría de antivirus tienen una ventana de cuarentena desde la que puedes recuperar archivos o crear una lista blanca. Asegúrate de que el antivirus ignore los siguientes directorios:

* `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine`
* `C:\Program Files (x86)\Steam\steamapps\workshop\downloads`
* `C:\Program Files (x86)\Steam\steamapps\downloading`

*Si tienes Steam o Wallpaper Engine instalado en un directorio distinto, tendrás que cambiar los directorios a la ruta de instalación de Steam.*

Si has configurado el antivirus para que ignore estos directorios y el problema persiste, puede que sea necesario desinstalar Wallpaper Engine a través de Steam. Después, tendrás que borrar manualmente los restos del directorio `wallpaper_engine` para eliminar cualquier bloqueo del antivirus que pueda seguir afectando a la descarga de archivos de Steam. Cuando borres toda la carpeta `wallpaper_engine`, vuelve a reinstalar el programa a través de Steam.