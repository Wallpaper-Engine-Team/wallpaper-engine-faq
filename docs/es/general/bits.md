# Versiones 32-Bit y 64-Bit

La versión 64-bit puede soportar archivos más grandes (de más de 2GB), pero utiliza más memoria sin tener el cuenta el tamaño de los fondos. Por ejemplo, con un fondo de vídeo normal, la versión 64-bit podría usar 50MB más de RAM que la versión 32-bit. Esa es la única diferencia.

::: consejo Le recomendamos utilizar la versión 32-bit, a no ser que tenga fondos tan grandes que hagan que se cuelgue. La mayoría de los usuarios jamás tienen este probema. :::

Puede optar por la versión 64-bit si el sistema de vídeo de su equipo tiene errores que afectan solo a los programas 32-bit. Si ha tenido que instalar paquetes de codecs o similares, es posible que hayan dañado de forma permanente el sistema de vídeo de Windows que utiliza Wallpaper Engine. Si el sistema 64-bit no se ha visto afectado, podrá utilizar la versión 64-bit de Wallpaper Engine y así evitar tener que arreglar lo que sea que haya quedado dañado.

::: advertencia Tenga en cuenta que los fondos de tipo web siempre se ejecutarán con un ejecutable de 32-bit (webwallpaper32.exe). Ocurre lo mismo con la interfaz de usuario (ui32.exe). Solo se utiliza 64-bit al seleccionar fondos de tipo «Escena» o «Vídeo». :::

## How to set-up Wallpaper Engine to autstart with either the 32 or 64 Bit version when Windows launches?

First, completely turn off Wallpaper Engine via the tray icon (right-click on the Wallpaper Engine icon in the Windows tray -> "Quit"). This is important as Steam will otherwise not launch Wallpaper Engine and only bring the already running version to the foreground.

Once Wallpaper Engine is turned off, go to Steam and start either the 32 Bit or 64 Bit version, depending on which version you want to automatically start. Go to the Wallpaper Engine settings and at the top of the "General" tab, enable autostart. If it is already enabled, turn it off completely and then turn it back on. This will register the current version as the one which will be automatically started alongside Windows. 