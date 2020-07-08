---
tags:
  - interfaz de usuario
  - verde
  - blanco
  - pixelado
  - ilegible
---

# La ventana de Wallpaper Engine no se ve correctamente

Si la ventana de búsqueda de Wallpaper Engine no funciona, suele ser a causa de que los controladores de la tarjeta gráfica están dañados o por culpa del antivirus. Sigue leyendo para obtener más información.

::: warning ¡Aviso! Ten en cuenta que esta sección trata de que la **interfaz** de Wallpaper Engine se queda blanca o negra. Si los **fondos aparecen en negro**, dirígete aquí: [Pantalla negra / los vídeos no se reproducen](/noshow/notplaying.html). :::

## El buscador de Wallpaper Engine aparece blanco o negro

Para la mayoría de usuarios, esto significa que el antivirus bloquea la interfaz de usuario de Wallpaper Engine por error. Asegúrate de crear una excepción en el antivirus para que ignore Wallpaper Engine, especialmente todos los ejecutables en el directorio de instalación wallpaper_engine y, sobre todo, **wallpaper_engine/bin/ui32.exe**.

En algunos casos es necesario verificar los archivos de Wallpaper Engine después o incluso volver a instalar el programa si el antivirus ha bloqueado de forma permanente algunos archivos importantes de Wallpaper Engine:

* [Steam Support: Verificar la integridad de los archivos del juego](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

Si la verificación de archivos de Steam no soluciona el problema tras configurar el antivirus, intenta volver a instalar Wallpaper Engine en Steam. Si el antivirus ha enloquecido, es probable que haya bloqueado de forma permanente las rutas de acceso que utiliza Wallpaper Engine. En ese caso, desinstala primero el antivirus y después instala Wallpaper Engine en un directorio diferente: puedes crear una biblioteca de juegos nueva en Steam para hacerlo.

## La interfaz de Wallpaper Engine tiene artefactos verdes o líneas blancas

Los controladores de la tarjeta gráfica están dañados o desconfigurados. Descarga los más recientes (incluso si ya los tienes instalados) y vuelve a instalarlos de cero. Es necesario que desinstales los controladores que tienes instalados e instales los más recientes para asegurarte de que se eliminen los archivos o ajustes dañados.

Si el problema persiste, cierra Wallpaper Engine y vuelve a abrirlo con la tercera opción en Steam: «Deshabilitar aceleración de hardware».

### Error de la interfaz de Steam que destroza la interfaz de Wallpaper Engine

La interfaz de Steam tiene un error atípico que puede causar que la pantalla del programa se vea negra. Puedes hacer lo siguiente:

Cierra Wallpaper Engine (haz clic en el icono en la bandeja y selecciona «Salir»). Después, abre Steam, haz clic derecho en Wallpaper Engine, ve a «Propiedades» y desactiva la opción «Habilitar interfaz de Steam». Tras desactivar la opción, reinicia Wallpaper Engine a través de Steam. 