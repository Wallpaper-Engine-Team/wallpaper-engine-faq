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
我們打造了一個 Steam 自動修復氣，(希望) 可以讓您用來防止 Steam 繼續出現上述問題！ 請依循以下步驟：
* 關閉 Steam。
* 前往 `wallpaper_engine` 安裝目錄
  * 預設路徑：`C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine`
* 執行 `wallpaper_engine\bin\steamredownloadfixer32.exe`
  * 若工具顯示任何錯誤訊息，請傳送電子郵件告訴我們，我們將調查能否改善此狀況
* 重新啟動 Steam 並驗證 Wallpaper Engine 的檔案：
  * [驗證 Wallpaper Engine 的檔案](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

麻煩的是，每次 Steam 下載快取損壞時，您都必須重複以上步驟。 請記住，我們並未設計 Steam，無法自行修復 Steam。

## 重新安裝 Steam

The most reliable long-term fix for most users affected by this Steam bug regularly appears to be to reinstall Steam as some Steam files may simply be broken on your system. Try to reinstall Steam completely:

1. Uninstall Wallpaper Engine through Steam.
2. Uninstall Steam itself, make sure to follow the official guide:
  * [Uninstall Steam](https://support.steampowered.com/kb_article.php?ref=9609-OBMP-2526)
  * Specifically check the Manually Removing Steam section in the Steam Support article above and make a backup of your *steamapps* directory as described there to ensure you will not have to redownload all your games.

## Use local backups as a workaround

If the issue continues happening to you, you can also make local backups of all wallpapers and then unsubscribe from all wallpapers. Steam will not redownload wallpapers that you are not subscribed to, so the work-around is to simply only rely on local backups. You can find our guide on how to create backups here:

* [Using wallpaper backups](/steam/backup)

Afterwards, simply unsubscribe from all wallpapers. Make sure to not delete any files manually, Steam must delete the wallpaper files itself or it will attempt to redownload the wallpapers again just to delete the files on its own.