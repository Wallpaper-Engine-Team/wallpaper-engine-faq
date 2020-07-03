- - -
etiquetas:
  - ventana activemovie
  - active movie
  - negro
- - -


# Vídeos en negro / no se reproducen correctamente

Las pantallas negras y otros problemas con los fondos de tipo *vídeo* son *siempre* culpa de codecs de vídeo o controladores de tarjeta gráfica dañados. Siga los siguientes pasos en orden. Si sigue la guía de principio a fin, se solucionará el problema:

::: advertencia Tenga en cuenta que esta sección trata de que los **fondos** de Wallpaper Engine se quedan en negro o no se reproducen correctamente. Si la **interfaz de Wallpaper Engine se queda negra**, visite esta sección: [La interfaz a de Wallpaper Engine se queda en negro](/interface/broken.html#wallpaper-engine-interface-is-black). :::

## Vuelva a instalar los controladores de la tarjeta gráfica

La mayoría de problemas con los fondos de vídeo se resuelven después de volver a instalar los controladores de la tarjeta gráfica. Funciona tanto como para las pantallas en negro como para los fondos de pantalla que aparecen en otra ventana (conocido como **«Ventana ActiveMovie»**).

1. Descargue los controladores más recientes de su tarjeta gráfica (si tiene dos, como Nvidia o Intel, descárguelos todos):

* [Nvidia GeForce](https://www.nvidia.es/Download/index.aspx?lang=es)
* [AMD Radeon](https://www.amd.com/support/hc/es/categories/360001506152-Servicio-al-cliente)
* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers/)

2. Desinstale los controladores que tiene instalados y borre todos los archivos si le preguntan. Los controladores de Nvidia tienen una casilla llamada «Realizar instalación limpia», que también sirve.

También puede usar [Display Driver Uninstaller («DDU»)](https://www.guru3d.com/files-details/display-driver-uninstaller-download.html) si no sabe cómo hacerlo.

3. Instale los controladores que descargó en el paso 1.
4. Reinicie el equipo y compruebe si ha funcionado.

::: consejo Es muy importante que haga una instalación limpia. Es decir, tiene que eliminar por completo los controladores de la tarjeta gráfica y la configuración antes de instalar los nuevos, si no, no funcionará. :::

## Codec Tweak Tool

Si tras hacer una instalación limpia de los controladores sigue sin funcionar, reinicie los codecs de vídeo:

* Descargue Codec Twear Tool: [haga clic aquí](https://www.codecguide.com/download_other.htm).
* Asegúrese de que **no** están seleccionadas todas las casillas de «Media Foundation» y aplique la configuración:

![Deseleccione todas las opciones de «Media Foundations».](./codectweak.gif)

* Reinicie el equipo y compruebe los fondos afectados de nuevo.

## Codecs de vídeo adicionales

Si los fondos de vídeo afectados sigue sin funcionar tras seguir los pasos anteriores, descargue LAV y use DirectShow tal y como se explica en esta guía:

* [Usar LAV y DirectShow](/videos/lav.html).