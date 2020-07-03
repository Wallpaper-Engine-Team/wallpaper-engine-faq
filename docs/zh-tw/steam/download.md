---
tags:
  - 停機
  - 伺服器
  - 下載
  - 進度
  - 工作坊
  - 連線
---

# Steam 桌布下載問題

請記住，**所有下載皆是由 Steam 執行**。 Wallpaper Engine 僅顯示 Steam 的下載狀態，所有下載問題皆與您的 Steam 問題相關，與 Wallpaper Engine 無直接關聯。 本篇指南收錄了下載最常見的問題，許多時候問題的最初肇因是防毒應用程式過於活躍，或是網路連接埠被阻擋。

若 Steam 的下載出現問題，請確定沒有防毒應用程式阻擋 Steam，以及開啟防火牆中所有必要的網路連接埠，包含網路路由器中的任何防火牆。

::: 提示 您可以輕鬆檢查網路路由器是否阻擋了 Steam 的下載，方法是用智慧型手機切換為行動熱點，試著藉由熱點下載桌布。 :::

## 桌布下載停在 0% 或 100%（或任何百分比）
Steam 尚未完成下載與驗證檔案。 下載進度停住一陣子時，若您等了一段時間後 Steam 下載仍未執行，請嘗試以下方法：

* 在 Steam 的選項中清除 Steam 的下載快取：
  * [清除 Steam 下載快取](https://support.steampowered.com/kb_article.php?ref=3134-TIAL-4638)
* 之後，在 Steam 中驗證 Wallpaper Engine 的檔案：
  * [驗證 Wallpaper Engine 的檔案](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)
* 若所有下載仍然停住：**關閉 Steam** 之後**刪除以下目錄的內容**：
  * `C:\Program Files (x86)\Steam\steamapps\workshop\downloads`
    * 若您安裝了防毒應用程式，請確保該程式明確排除上述目錄
    * **請注意：** `C:\Program Files (x86)\Steam` 是 Steam 的預設路徑，若您將 Steam 安裝至別處，請指定該處。
* 重新啟動 Steam。 別開啟任何遊戲。 在 Steam 的下載分頁中檢查進度並繼續任何已暫停的下載。

::: details Click here to see more possible solutions if the steps above did not fix your download problems
* Make sure no anti-virus or firewall is blocking Steam. Exclude the whole Steam directory in your anti-virus app settings.
* Unsubscribe the wallpapers that fail to download and subscribe to them again after restarting Steam.
* Choose a different content server in Steam's settings. The option can be found in the "Downloads" tab of the Steam settings.
* Make sure you did not restrict Steam downloads in the **Steam settings** based on time, bandwidth, being in-app.
* Open the 'Downloads' tab in Steam (Library -> Downloads). Look for paused downloads. If you can see any, click on 'Resume'.
* Right-click Wallpaper Engine in Steam, then Properties, then select **Allow Background Downloads**.
* Make sure you do not have pending game updates in Steam, it could pause or disable wallpaper downloads.
* Try again after waiting at least for a day in case there are Steam server issues.
* **As a last resort**, try to re-install Wallpaper Engine to clear any broken Steam files (this will re-download all wallpapers!). :::

::: tip Steam servers go offline every week for maintenance at a fixed time:

* United States West Coast: **Tuesday at 4 pm (UTC - 7)**
* Same time in Central Europe: **Wednesday at 1 am (UTC + 1)**
* Same time in China: **Wednesday at 8 am (UTC + 8)**

If you are reading this while it is roughly this time of the week, it may be that the servers are temporarily offline. Wait one or two hours and try again. :::

## Steam: "Missing Downloaded Files" error

Steam is unable to download some files, this can be due to anti-virus applications blocking Steam or just absolutely random. It can usually be fixed this way:

* Turn off Steam.
* Delete the contents of this directory: `C:\Program Files (x86)\Steam\steamapps\workshop\downloads`
* Delete the contents of this directory: `C:\Program Files (x86)\Steam\steamapps\downloading\431960`
  * **Note:** `C:\Program Files (x86)\Steam` is the default Steam path, if you have installed it somewhere else, check there.
* Start Steam and verify the Wallpaper Engine files:
  * [Verify Wallpaper Engine files](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

If you have an antivirus-app installed: Configure an exception for this directory to prevent it from blocking Steam's Workshop downloads: `C:\Program Files (x86)\Steam\steamapps\workshop\downloads`

#### Related article: [Steam re-downloading all wallpapers](/steam/redownload)