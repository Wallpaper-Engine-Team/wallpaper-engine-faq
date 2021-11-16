# 完全重設 Wallpaper Engine

如果您使用 Wallpaper Engine 時遇到技術問題，可能需要全新重設 Wallpaper Engine。 請參照本指南的說明將 Wallpaper Engine 完全重設，包括損壞的桌布訂閱。

::: danger
如果您使用防毒應用程式 (除了 Microsoft Defender) 請先閱讀此內容

我們處理的絕大多數問題，原因始自防毒應用程式錯誤阻擋 Wallpaper Engine 或 Steam。 防毒應用程式通常造成以下問題：

* Wallpaper Engine 當機
* Wallpaper Engine 使用者介面損壞或空白
* Wallpaper Engine 根本無法啟動，但沒有任何錯誤訊息
* Wallpaper Engine 無法自行安裝或更新
* 由損壞或無法存取的檔案引起的各種問題

**如果您使用了防毒應用程式，請確保該程式已忽略 `wallpaper_engine` 安裝目錄，再繼續執行此頁面上列出的步驟。 檢查防毒應用程式的設定，以完全排除資料夾。**

大多數的防毒應用程式可以在不通知您的情況下，阻擋 Wallpaper Engine 檔案，有些 Wallpaper Engine 的檔案會永久阻擋。
:::

## 完全解除安裝 Wallpaper Engine

以下為完全解除安裝 Wallpaper Engine 的步驟：

1. 如果您已啟用自動啟動功能： 開啟 Wallpaper Engine 設定頁面，到**一般**分頁上方關閉自動啟動功能。
2. 開啟 Steam 並以滑鼠右鍵按一下 Wallpaper Engine，接著點選**管理**，接著點選 **解除安裝**。
3. 前往 Wallpaper Engine 安裝目錄，徹底刪除剩餘的 `wallpaper_engine` 目錄。 目錄預設位置在：

* `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine`

如果您將 Wallpaper Engine 安裝在其他目錄，請在其中找到 `wallpaper_engine` 目錄。 確保完全刪除該資料夾，以清除任何不可見的防毒應用程式檔案鎖定或損壞的檔案。

現在即可重新安裝 Wallpaper Engine。 如果您想從頭開始，請參閱下一節，了解如何完全重設所有桌布訂閱，不過在大多數情況下並非必要。

## 重設所有 Steam 工作坊訂閱

如果您遇到有關 Steam 下載桌布的問題，可以嘗試完全重設 Steam 工作坊訂閱。 在極少見的情況下，若是應用程式中工作坊訂閱出現了不可見的問題，此做法有助於解決問題。 如果您發現 Steam 不斷重新下載您所有桌布，或者 Steam 不斷下載已經從工作坊刪除的桌布，您即可嘗試完全重設。

請依循以下步驟：

1. 關閉 Steam。 **選用：**先解除安裝 Wallpaper Engine。
2. 開啟 Wallpaper Engine Steam 工作坊，並登入您的 Steam 帳戶：

* [Wallpaper Engine 的 Steam 工作坊](https://steamcommunity.com/app/431960/workshop/)

3. On the right-hand side, hover over **Your files** and then **Subscribed Items**.
4. You will be presented a page with your subscriptions. Click the **Unsubscribe From All** button on the right-hand side to clear all your Workshop subscription (including any hidden broken subscriptions).
5. **重新啟動 Steam**，您的訂閱現在已重設完成。
