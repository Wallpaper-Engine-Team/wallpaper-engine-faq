---
tags:
  - descarga
  - vuelve a descargar
  - borrado
  - borra
---

# Steam vuelve a descargar los fondos

Steam's download cache was broken and now Steam redownloads all files (for no particular reason or i.e. Steam crashing instead of properly closing). This is not caused by Wallpaper Engine so it cannot be fixed in Wallpaper Engine, all Workshop apps on Steam can suffer from this Steam bug. If you frequently have this problem, there are work-arounds:

## Fix Steam automatically
We have built an automatic Steam fixer that you can use to attempt to make Steam stop this issue from continuing (hopefully)! Follow these steps:
* Turn off Steam
* Go to the `wallpaper_engine` installation directory
  * Default location: `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine`
* Run `wallpaper_engine\bin\steamredownloadfixer32.exe`
  * If the tool gives you any error messages, please send us an email and we will investigate if we can improve it
* Restart Steam and verify the Wallpaper Engine files:
  * [Verify the Wallpaper Engine files](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

You have to repeat this every time the Steam download cache breaks up, unfortunately. Please keep in mind that we have not built Steam and cannot fix Steam ourselves.

## Reinstall Steam

The most reliable long-term fix for most users affected by this Steam bug regularly appears to be to reinstall Steam as some Steam files may simply be broken on your system. Try to reinstall Steam completely:

1. Uninstall Wallpaper Engine through Steam.
2. Uninstall Steam itself, make sure to follow the official guide:
  * [Uninstall Steam](https://support.steampowered.com/kb_article.php?ref=9609-OBMP-2526)
  * Specifically check the Manually Removing Steam section in the Steam Support article above and make a backup of your *steamapps* directory as described there to ensure you will not have to redownload all your games.

## Use local backups as a workaround

If the issue continues happening to you, you can also make local backups of all wallpapers and then unsubscribe from all wallpapers. Steam will not redownload wallpapers that you are not subscribed to, so the work-around is to simply only rely on local backups. You can find our guide on how to create backups here:

* [Using wallpaper backups](/steam/backup)

Afterwards, simply unsubscribe from all wallpapers. Make sure to not delete any files manually, Steam must delete the wallpaper files itself or it will attempt to redownload the wallpapers again just to delete the files on its own.