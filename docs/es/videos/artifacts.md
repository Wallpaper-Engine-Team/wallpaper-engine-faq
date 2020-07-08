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

**Si los fondos muestran colores incorrectos, son muy claros o muy oscuros, aparecen enfocados, pixelados o hay un borde alrededor del fondo**, puedes restablecer las opciones de vídeo en el panel de control de gráficos de la tarjeta gráfica Nvidia, AMD o Intel. Si tienes un ordenador con varias GPU (por ejemplo, una tarjeta principal de Nvidia y una secundaria de Intel), restablece las de todas ellas.

Puedes volver a instalar los controladores de la tarjeta gráfica y restablecer toda la configuración (reinstalación limpia), cosa que es posible con los de Nvidia, por ejemplo. Es decir, tendrás que desinstalar los controladores y volver a instalar los más actuales cuando se hayan desinstalado por completo los antiguos. Algunos controladores ofrecen la opción de reinstalar desde cero en la sección avanzada, así que asegúrate de activarla para deshacerte de los restos de los controladores dañados. Puedes obtener controladores de las tarjetas gráficas más recientes de todos los proveedores principales aquí:

* [Nvidia GeForce](https://www.nvidia.es/Download/index.aspx?lang=es)
* [AMD Radeon](https://www.amd.com/es/support)
* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)

Si no sabes qué hacer, descarga los controladores más recientes para su tarjeta gráfica y usa DDU para desinstalar los que tienes instalados y borrar la configuración:

* [Descargar Display Driver Uninstaller.](https://www.guru3d.com/files-details/display-driver-uninstaller-download.html)

A continuación, instala los controladores que has descargado. Esto solucionará el problema si se hace de la forma correcta.

::: tip Si aún no ves los colores correctamente tras instalar los controladores de nuevo, es posible que tengas más de una GPU o que no hayas hecho una instalación «limpia». Asegúrate de desinstalar todos los controladores de la tarjeta gráfica y de borrar toda la configuración actual. :::