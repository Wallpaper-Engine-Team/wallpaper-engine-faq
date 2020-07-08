---
tags:
  - download
  - re-download
  - deleted
  - deletes
---

# Steam заново загружает обои

У Steam неисправен кэш загрузок, поэтому теперь он заново загружает все файлы (без особых на то причин, например, аварийного завершения работы Steam). Причина ошибки не в Wallpaper Engine, поэтому ее невозможно исправить через Wallpaper Engine. Эта проблема может затронуть любую программу в Мастерской Steam. Если вы часто сталкиваетесь с данной проблемой, есть несколько обходных решений:

## Исправить ошибку Steam автоматически
Мы создали инструмент для автоматического исправления ошибок Steam, который вы можете использовать, чтобы предотвратить возникновение проблемы в дальнейшем (будем надеяться)! Выполните эти шаги:
* Выключите Steam
* Зайдите в каталог установки `wallpaper_engine`
  * По умолчанию он находится здесь: `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine`
* Запустите файл `wallpaper_engine\bin\steamredownloadfixer32.exe`
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