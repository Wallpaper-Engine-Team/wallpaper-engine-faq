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

If you are experiencing issues related to wallpaper downloads by Steam, you can try to do a full reset of your Steam Workshop subscriptions. In rare cases, this can help with broken Workshop subscriptions that are not visible in the app. If you notice that Steam keeps redownloading all your wallpapers or that Steam keeps downloading wallpapers that have been deleted from the Steam Workshop in the past, you can attempt a full reset.

請依循以下步驟：

1. 關閉 Steam。 **Optional:** Uninstall Wallpaper Engine first.
2. Open the Wallpaper Engine Steam Workshop website and log in to your Steam account:

* [Steam Workshop for Wallpaper Engine](https://steamcommunity.com/app/431960/workshop/)

3. On the right-hand side, hover over **Your files** and then **Subscribed Items**.
4. You will be presented a page with your subscriptions. Click the **Unsubscribe From All** button on the right-hand side to clear all your Workshop subscription (including any hidden broken subscriptions).
5. **重新啟動 Steam**，您的訂閱現在已重設完成。
