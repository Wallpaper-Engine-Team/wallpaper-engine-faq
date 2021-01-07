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

::: warning
¡Aviso! Ten en cuenta que esta sección trata de que la **interfaz** de Wallpaper Engine se queda blanca o negra. Si los **fondos aparecen en negro**, dirígete aquí: [Pantalla negra / los vídeos no se reproducen](/noshow/notplaying.html).
:::

## El buscador de Wallpaper Engine aparece blanco o negro

Para la mayoría de usuarios, esto significa que el antivirus bloquea la interfaz de usuario de Wallpaper Engine por error. Asegúrate de crear una excepción en el antivirus para que ignore Wallpaper Engine, especialmente todos los ejecutables en el directorio de instalación wallpaper_engine y, sobre todo, **wallpaper_engine/bin/ui32.exe**.

En algunos casos es necesario verificar los archivos de Wallpaper Engine después o incluso volver a instalar el programa si el antivirus ha bloqueado de forma permanente algunos archivos importantes de Wallpaper Engine:

* [Steam Support: Verificar la integridad de los archivos del juego](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

Si la verificación de archivos de Steam no soluciona el problema tras configurar el antivirus, intenta volver a instalar Wallpaper Engine en Steam. Si el antivirus ha enloquecido, es probable que haya bloqueado de forma permanente las rutas de acceso que utiliza Wallpaper Engine. En ese caso, desinstala primero el antivirus y después instala Wallpaper Engine en un directorio diferente: puedes crear una biblioteca de juegos nueva en Steam para hacerlo.

If the problem persists, turn off Wallpaper Engine. Then re-launch Wallpaper Engine using the third launch option in Steam labeled "disable UI hardware acceleration".

![Launch option: Disable UI hardware acceleration](/img/faq/steam_launch_option.jpg)

## La interfaz de Wallpaper Engine tiene artefactos verdes o líneas blancas

Your graphics card drivers are broken or misconfigured. Download the latest drivers for your graphics cards (even if you already have the latest drivers) and perform a clean re-installation of the drivers. Is is important that you first uninstall your current drivers and then install the latest drivers to ensure any broken files or settings are removed.

If the problem persists, turn off Wallpaper Engine. Then re-launch Wallpaper Engine using the third launch option in Steam labeled "disable UI hardware acceleration".

**If the Wallpaper Engine user interface has white lines**: You have **Nvidia Image Sharpening** turned on for all applications. Turn it off in your Nvidia drivers or do a clean reinstallation of your Nvidia drivers by uninstalling your current ones first.

![Nvidia Image Sharpening Issue](./imagesharpening.png) *White lines will be visible all over the application window if Nvidia image sharpening is turned on for Wallpaper Engine by mistake.*

### Error de la interfaz de Steam que destroza la interfaz de Wallpaper Engine

The other possible reason for a black application window is a rare Steam bug with the Steam overlay. You can try the following:

Turn off Wallpaper Engine completely (right-click on the tray icon and then select "Quit"). Afterwards, open up Steam, right-click on Wallpaper Engine, select "Properties" and then disable the "Enable Steam Overlay while in-game" option. After disabling the option, try to restart Wallpaper Engine via Steam. 