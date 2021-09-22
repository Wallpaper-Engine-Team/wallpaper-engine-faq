# 「內容檔案已鎖定」/磁碟寫入錯誤

若 Steam 無法在安裝或更新應用程式時下載 Wallpaper Engine，很有可能是您的防毒應用程式在刪除檔案、隔離檔案或或封鎖磁碟上的整個目錄，但是並未告知您。 您將在 Steam 中收到「內容檔案已鎖定」或「存取遭拒」的錯誤。 這項問題需要在您的防毒應用程式中解決，方法是取消復原該程式對電腦所做的變更。大多數防毒程式都有一個隔離視窗，供您還原檔案或建立白名單。 請確保防毒應用程式忽略以下目錄：

* `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine`
* `C:\Program Files (x86)\Steam\steamapps\workshop\downloads`
* `C:\Program Files (x86)\Steam\steamapps\downloading`

*如果您的 Steam 或 Wallpaper Engine 安裝在不同目錄中，您必須將目錄調整至符合實際的 Steam 安裝路徑。*

如果你已將防毒應用程式設定為忽略這些目錄，但此問題仍在，有時候必須透過 Steam 解除安裝 Wallpaper Engine，接著手動刪除 `wallpaper_engine` 目錄剩餘的檔案，來解除任何防毒應用程式的鎖定，以免又繼續阻擋 Steam 下載檔案。 刪除整個 `wallpaper_engine` 資料夾後，嘗試重新透過 Steam 再次安裝。