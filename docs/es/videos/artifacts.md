---
tags:
  - colores
  - claros
  - oscuros
  - zoom
  - acercar
  - pixelado
  - borde
  - gamma
  - calidad
  - mala
  - feo
---

# Los fondos de vídeo se ven mal

Wallpaper Engine, al contrario que la mayoría de reproductores de vídeo, usa la aceleración de hardware con los vídeos para tener el máximo rendimiento, por lo que los controladores de la tarjeta gráfica podrían afectar al aspecto de los vídeos.

**Si los fondos muestran colores incorrectos, son muy claros o muy oscuros, aparecen enfocados, pixelados o hay un borde alrededor del fondo**, puede restablecer las opciones de vídeo en el panel de control de gráficos de su tarjeta gráfica Nvidia, AMD o Intel. Si tiene un ordenador con varias GPU (por ejemplo, una tarjeta principal de Nvidia y una secundaria de Intel), restablezca las de todas ellas.

You can also reinstall the graphics card drivers and choose to reset all settings ("clean re-installation") to do this, this is possible with Nvidia's drivers, for example. That means you need to first uninstall your drivers and then re-install the latest drivers after your current drivers have been fully uninstalled. Some drivers offer a "Perform clean re-installation" option in the advanced section, be sure to enable that option to automatically clean any remnants of broken drivers. You can get the latest graphics card drivers from all big vendors here:

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx)
* [AMD Radeon](https://www.amd.com/support)
* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)

If you are uncertain what to do: Download the latest drivers for your graphics card, then use DDU to uninstall your graphics card drivers and delete all settings:

* [Display Driver Uninstaller Download](https://www.guru3d.com/files-details/display-driver-uninstaller-download.html)

Afterwards, install the drivers you have just downloaded. This will definitely fix the problem if done right.

::: tip If the colors are still wrong even after re-installing your graphics card drivers, you may have more than one GPU or you did not perform a "clean" re-installation. Make sure you first uninstall all your current graphics card drivers and clear up all driver settings. :::