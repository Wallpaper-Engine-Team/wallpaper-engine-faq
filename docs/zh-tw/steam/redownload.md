---
tags:
  - 下載
  - 重新下載
  - 已刪除
  - 刪除項目
---

# Steam 重新下載桌布

Steam 的下載快取損壞，現在 Steam 開始重新下載所有檔案 (沒有特別原因，或是 Steam 當機，並未正常關閉)。 這並不是 Wallpaper Engine 所造成，因此無法在 Wallpaper Engine 中解決，Steam 上所有的工作坊應用程式都可能發生這個 Steam 錯誤。 若您常常碰到上述問題，以下是因應辦法：

## 自動修復 Steam
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