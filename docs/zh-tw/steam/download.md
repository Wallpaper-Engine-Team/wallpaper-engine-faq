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

## 桌布下載停在 0% 或 100% (或任何百分比)
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

::: 詳細資料：若以上步驟並未解決下載問題，按一下這裡檢視更多可行的解決方法
* 避免防毒軟體或防火牆阻擋 Steam。 在防毒應用程式設定中排除整個 Steam 目錄。
* 取消訂閱無法下載的桌布，重新啟動 Steam 之後再訂閱一次。
* 在 Steam 的設定中選擇不同的內容伺服器。 此選項可在 Steam 設定的「下載」分頁中找到。
* 避免在 **Steam 設定**中依照時間、頻寬、使用應用程式時而限制 Steam 的下載。
* 開啟 Steam 的「下載」分頁（收藏庫 -> 下載）。 尋找已暫停的下載。 若有，按一下「繼續」。
* 在 Steam 中以滑鼠右鍵按一下 Wallpaper Engine，按一下「內容」後選取**允許背景下載**。
* 確保 Steam 中沒有擱置中的遊戲更新，這可能使桌布下載暫停或停用。
* 等至少一天後再重試一次，以免碰上 Steam 伺服器的問題。
* **最後方法**是重新安裝 Wallpaper Engine，清除任何損壞的 Steam 檔案（此項方法將重新下載所有桌布！）。 :::

::: 提示 Steam 伺服器會在每週固定時間停機，進行維修：

* 美國西岸：**週二下午 4 點（UTC - 7）**
* 歐洲中部同樣時間：**週三上午 1 點（UTC + 1）**
* 中國同樣時間：**週三上午 8 點（UTC + 8）**

若您閱讀本篇指南時接近上述時間，伺服器可能暫時停機中。 請稍候一或兩小時後再試一次。 :::

## Steam：「已下載的檔案遺失」錯誤

Steam 無法下載某些檔案，這可能是因為防毒應用程式阻擋了 Steam 或只是隨機發生。 通常能用以下方法解決：

* 關閉 Steam。
* 刪除以下目錄的內容：`C:\Program Files (x86)\Steam\steamapps\workshop\downloads`
* 刪除以下目錄的內容：`C:\Program Files (x86)\Steam\steamapps\downloading\431960`
  * **請注意：** `C:\Program Files (x86)\Steam` 是 Steam 的預設路徑，若您將 Steam 安裝至別處，請指定該處。
* 開啟 Steam 並驗證 Wallpaper Engine 的檔案：
  * [驗證 Wallpaper Engine 的檔案](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

若安裝了防毒應用程式：將以下目錄設定為例外，避免防毒程式阻擋 Steam 的工作坊下載：`C:\Program Files (x86)\Steam\steamapps\workshop\downloads`

#### 相關文章：[Steam 重新下載所有桌布](/steam/redownload)