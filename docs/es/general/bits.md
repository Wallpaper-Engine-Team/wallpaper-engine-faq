# Versiones 32-Bit y 64-Bit

La versión 64-bit puede soportar archivos más grandes (de más de 2GB), pero utiliza más memoria sin tener el cuenta el tamaño de los fondos. Por ejemplo, con un fondo de vídeo normal, la versión 64-bit podría usar 50MB más de RAM que la versión 32-bit. Esa es la única diferencia.

::: consejo Le recomendamos utilizar la versión 32-bit, a no ser que tenga fondos tan grandes que hagan que se cuelgue. La mayoría de los usuarios jamás tienen este probema. :::

Puede optar por la versión 64-bit si el sistema de vídeo de su equipo tiene errores que afectan solo a los programas 32-bit. Si ha tenido que instalar paquetes de codecs o similares, es posible que hayan dañado de forma permanente el sistema de vídeo de Windows que utiliza Wallpaper Engine. Si el sistema 64-bit no se ha visto afectado, podrá utilizar la versión 64-bit de Wallpaper Engine y así evitar tener que arreglar lo que sea que haya quedado dañado.

::: advertencia Tenga en cuenta que los fondos de tipo web siempre se ejecutarán con un ejecutable de 32-bit (webwallpaper32.exe). Ocurre lo mismo con la interfaz de usuario (ui32.exe). Solo se utiliza 64-bit al seleccionar fondos de tipo «Escena» o «Vídeo». :::

## ¿Cómo configuro Wallpaper Engine para iniciarse automáticamente al iniciar Windows con las versiones 32 o 64-bit?

Primero, cierre Wallpaper Engine desde el icono de la bandeja (haga clic en el icono de Wallpaper Engine en la bandeja de Windows y después -> «Salir»). Este paso es muy importante porque si no, Steam no abrirá Wallpaper Engine desde cero, sino que abrirá la versión que se encuentra en segundo plano.

Una vez que haya cerrado Wallpaper Engine, diríjase a Steam y abra la versión 32 o 64-bit, dependiendo de cuál quiera que se inicie de forma automática. Vaya a la configuración de Wallpaper Engine y active la opción «Inicio automático» en la pestaña «General». Si ya está activada, desmárquela y vuelva a marcarla. Así se registrará la versión actual como la que tiene que iniciarse automáticamente a la vez que Windows. 