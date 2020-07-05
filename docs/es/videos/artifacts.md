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

Puede volver a instalar los controladores de la tarjeta gráfica y restablecer toda la configuración (reinstalación limpia), que es posible con los de Nvidia, por ejemplo. Es decir, tendrá que desinstalar los controladores y volver a instalar los más actuales cuando se hayan desinstalado por completo los antiguos. Algunos controladores ofrecen la opción de reinstalar desde cero en la sección avanzada, así que asegúrese de activarla para deshacerse de los restos de los controladores dañados. Puede obtener controladores de las tarjetas gráficas más recientes de todos los proveedores principales aquí:

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx)
* [AMD Radeon](https://www.amd.com/support)
* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)

If you are uncertain what to do: Download the latest drivers for your graphics card, then use DDU to uninstall your graphics card drivers and delete all settings:

* [Display Driver Uninstaller Download](https://www.guru3d.com/files-details/display-driver-uninstaller-download.html)

Afterwards, install the drivers you have just downloaded. This will definitely fix the problem if done right.

::: tip If the colors are still wrong even after re-installing your graphics card drivers, you may have more than one GPU or you did not perform a "clean" re-installation. Make sure you first uninstall all your current graphics card drivers and clear up all driver settings. :::