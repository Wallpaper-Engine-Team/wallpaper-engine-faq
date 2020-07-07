# Versiones 32-Bit y 64-Bit

La versión 64-bit puede soportar archivos más grandes (de más de 2GB), pero utiliza más memoria sin tener el cuenta el tamaño de los fondos. Por ejemplo, con un fondo de vídeo normal, la versión 64-bit podría usar 50MB más de RAM que la versión 32-bit. Esa es la única diferencia.

::: tip Te recomendamos utilizar la versión 32-bit, a no ser que tengas fondos tan grandes que hagan que se cuelgue. La mayoría de los usuarios jamás tienen este probema. :::

Puedes optar por la versión 64-bit si el sistema de vídeo del equipo tiene errores que afectan solo a los programas 32-bit. Si has tenido que instalar paquetes de codecs o similares, es posible que hayan dañado de forma permanente el sistema de vídeo de Windows que utiliza Wallpaper Engine. Si el sistema 64-bit no se ha visto afectado, podrás utilizar la versión 64-bit de Wallpaper Engine y así evitar tener que arreglar lo que sea que haya quedado dañado.

::: warning ¡Aviso! Ten en cuenta que los fondos de tipo web siempre se ejecutarán con un ejecutable de 32-bit (webwallpaper32.exe). Ocurre lo mismo con la interfaz de usuario (ui32.exe). Solo se utiliza 64-bit al seleccionar fondos de tipo «Escena» o «Vídeo». :::

## ¿Cómo configuro Wallpaper Engine para iniciarse automáticamente con las versiones 32 o 64-bit al arrancar Windows?

Primero, cierra Wallpaper Engine desde el icono de la bandeja (haz clic en el icono de Wallpaper Engine en la bandeja de Windows y después -> «Salir»). Este paso es muy importante porque si no, Steam no abrirá Wallpaper Engine desde cero, sino que abrirá la versión que se encuentra en segundo plano.

Una vez que hayas cerrado Wallpaper Engine, dirígete a Steam y abre la versión 32 o 64-bit, dependiendo de cuál quieras que se inicie de forma automática. Ve a la configuración de Wallpaper Engine y activa la opción «Inicio automático» en la pestaña «General». Si ya está activada, desmárcala y vuelve a marcarla. Así se registrará la versión actual como la que tiene que iniciarse automáticamente a la vez que Windows. 