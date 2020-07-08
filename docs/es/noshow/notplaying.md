- - -
tags:
  - ventana activemovie
  - active movie
  - negro
- - -


# Vídeos en negro / no se reproducen correctamente

Las pantallas negras y otros problemas con los fondos de tipo *vídeo* son *siempre* culpa de codecs de vídeo o controladores de tarjeta gráfica dañados. Sigue los siguientes pasos en orden. Si sigues la guía de principio a fin, se solucionará el problema:

::: warning ¡Aviso! Ten en cuenta que esta sección trata de que los **fondos** de Wallpaper Engine se quedan en negro o no se reproducen correctamente. Si la **interfaz de Wallpaper Engine se queda negra**, visita esta sección: [La interfaz a de Wallpaper Engine se queda en negro](/interface/broken.html#wallpaper-engine-interface-is-black). :::

## Vuelva a instalar los controladores de la tarjeta gráfica

La mayoría de problemas con los fondos de vídeo se resuelven después de volver a instalar los controladores de la tarjeta gráfica. Funciona tanto como para las pantallas en negro como para los fondos de pantalla que aparecen en otra ventana (conocido como **«Ventana ActiveMovie»**).

1. Descarga los controladores más recientes de la tarjeta gráfica (si tienes dos, como Nvidia o Intel, descárgalos todos):

* [Nvidia GeForce](https://www.nvidia.es/Download/index.aspx?lang=es)
* [AMD Radeon](https://www.amd.com/support/hc/es/categories/360001506152-Servicio-al-cliente)
* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers/)

2. Desinstala los controladores que tienes instalados y borra todos los archivos si te preguntan. Los controladores de Nvidia tienen una casilla llamada «Realizar instalación limpia», que también cumple la función.

También puedes usar [Display Driver Uninstaller («DDU»)](https://www.guru3d.com/files-details/display-driver-uninstaller-download.html) si no sabes cómo hacerlo.

3. Instala los controladores que descargaste en el paso 1.
4. Reinicia el equipo y comprueba si ha funcionado.

::: tip Es muy importante que hagas una instalación limpia. Es decir, tienes que eliminar por completo los controladores de la tarjeta gráfica y la configuración antes de instalar los nuevos, si no, no funcionará. :::

## Codec Tweak Tool

Si tras hacer una instalación limpia de los controladores sigue sin funcionar, restablece los codecs de vídeo:

* Descarga Codec Twear Tool: [haz clic aquí](https://www.codecguide.com/download_other.htm).
* Asegúrate de que **no** están seleccionadas las casillas de «Media Foundation» y aplica la configuración:

![Deselecciona todas las opciones de «Media Foundations».](./codectweak.gif)

* Reinicia el equipo y comprueba los fondos afectados de nuevo.

## Codecs de vídeo adicionales

Si los fondos de vídeo afectados siguen sin funcionar tras seguir los pasos anteriores, descarga LAV y usa DirectShow tal y como se explica en esta guía:

* [Usar LAV y DirectShow](/videos/lav.html).