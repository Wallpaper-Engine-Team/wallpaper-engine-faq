---
tags:
  - interfaz de usuario
  - verde
  - blanco
  - pixelado
  - ilegible
---

# La ventana de Wallpaper Engine no se ve correctamente

Si la ventana de búsqueda de Wallpaper Engine no funciona, suele ser a causa de que los controladores de la tarjeta gráfica están dañados o por culpa del antivirus. Siga leyendo para obtener más información.

::: advertencia Tenga en cuenta que esta sección trata de la **interfaz** de Wallpaper Engine se queda blanca o negra. Si los **fondos aparecen en negro**, diríjase aquí: [Pantalla negra / los vídeos no se reproducen](/noshow/notplaying.html). :::

## El buscador de Wallpaper Engine aparece blanco o negro

Para la mayoría de usuarios, esto significa que el antivirus bloquea la interfaz de usuario de Wallpaper Engine por error. Asegúrese de crear una excepción en el antivirus para que ignore Wallpaper Engine, especialmente todos los ejecutables en el directorio de instalación wallpaper_engine y, sobre todo, **wallpaper_engine/bin/ui32.exe**.

En algunos casos es necesario verificar los archivos de Wallpaper Engine después o incluso volver a instalar el programa si el antivirus ha bloqueado de forma permanente algunos archivos importantes de Wallpaper Engine:

* [Steam Support: Verificar la integridad de los archivos del juego](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

If the verification through Steam does not fix this issue after you have configured your antivirus application, try to re-install Wallpaper Engine through Steam. If your antivirus has gone berserk, it might even have permanently blocked the filepaths used by Wallpaper Engine. In that case make sure to uninstall the antivirus first and then install Wallpaper Engine into a different directory, you can choose to create a new Steam games library in Steam for this.

## Wallpaper Engine interface with green artifacts or white lines

Your graphics card drivers are broken or misconfigured. Download the latest drivers for your graphics cards (even if you already have the latest drivers) and perform a clean re-installation of the drivers. Is is important that you first uninstall your current drivers and then install the latest drivers to ensure any broken files or settings are removed.

If the problem persists, turn off Wallpaper Engine. Then re-launch Wallpaper Engine using the third launch option in Steam labeled "disable UI hardware acceleration".

### Rare Steam Overlay Bug Breaking Wallpaper Engine User Interface

The other possible reason for a black application window is a rare Steam bug with the Steam overlay. You can try the following:

Turn off Wallpaper Engine completely (right-click on the tray icon and then select "Quit"). Afterwards, open up Steam, right-click on Wallpaper Engine, select "Properties" and then disable the "Enable Steam Overlay while in-game" option. After disabling the option, try to restart Wallpaper Engine via Steam. 