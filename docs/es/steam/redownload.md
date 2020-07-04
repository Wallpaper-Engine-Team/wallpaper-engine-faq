---
tags:
  - descarga
  - vuelve a descargar
  - borrado
  - borra
---

# Steam vuelve a descargar los fondos

El caché de descarga de Steam está dañado y por eso vuelve a descargar todos los archivos (sin motivo aparente o Steam se cuelga en vez de cerrarse correctamente). Esto no es culpa de Wallpaper Engine, por lo que no puede arreglarse desde el programa. Todos los programas de Steam Workshop sufren este problema, que es propio de Steam. Si le ocurre a menudo, aquí tiene algunas soluciones:

## Arregle Steam de forma automática
Hemos creado un reparador de Steam automátivo y puede usarlo para ver si se soluciona el problema (¡esperamos que sí!). Siga los pasos siguientes:
* Cierre Steam.
* Diríjase al directorio de instalación `wallpaper_engine`.
  * Ubicación por defecto: `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine`.
* Abra `wallpaper_engine\bin\steamredownloadfixer32.exe`.
  * Si la herramienta le da algún mensaje de error, envíenos un correo e intentaremos solucionarlo.
* Reinicie Steam y compruebe los archivos de Wallpaper Engine:
  * [Verificar los archivos de Wallpaper Engine.](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

Por desgracia, tendrá que repetir este paso cada vez que el caché de Steam esté dañado. Tenga en cuenta que no hemos creado Steam y, por lo tanto, no podemos solucionar sus errores.

## Volver a instalar Steam

La solución más fiable para la mayoría de usuarios que sufren este error de Steam de forma regular es volver a instalar Steam, ya que puede que haya archivos dañados en el sistema. Instale Steam desde cero:

1. Desinstale Wallpaper Engine desde Steam.
2. Desinstale Steam (siga la guía oficial):
  * [Uninstall Steam](https://support.steampowered.com/kb_article.php?ref=9609-OBMP-2526)
  * Specifically check the Manually Removing Steam section in the Steam Support article above and make a backup of your *steamapps* directory as described there to ensure you will not have to redownload all your games.

## Use local backups as a workaround

If the issue continues happening to you, you can also make local backups of all wallpapers and then unsubscribe from all wallpapers. Steam will not redownload wallpapers that you are not subscribed to, so the work-around is to simply only rely on local backups. You can find our guide on how to create backups here:

* [Using wallpaper backups](/steam/backup)

Afterwards, simply unsubscribe from all wallpapers. Make sure to not delete any files manually, Steam must delete the wallpaper files itself or it will attempt to redownload the wallpapers again just to delete the files on its own.