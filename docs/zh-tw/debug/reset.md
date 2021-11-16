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

**If you are using an antivirus app, make sure that it ignores your `wallpaper_engine` installation directory before you proceed with the steps outlined on this page. Check your antivirus settings for a way to exclude folders entirely.**

Most antivirus apps can block Wallpaper Engine files without informing you about it and certain Wallpaper Engine files will be permanently blocked.
:::

## Fully Uninstalling Wallpaper Engine

To fully uninstall Wallpaper Engine to clear any corrupted files:

1. If you have enabled the automatic startup functionality: Open the Wallpaper Engine settings, turn off the automatic startup at the top of the **General** tab in the Wallpaper Engine settings.
2. Open Steam and right-click on Wallpaper Engine, then select click on **Manage**, followed by **Uninstall**.
3. Navigate to the Wallpaper Engine installation directory and delete the remaining `wallpaper_engine` directory entirely. by default, it is located here:

* `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine`

If you have installed Wallpaper Engine in a different directory, please look for the `wallpaper_engine` directory there. Make sure the folder is entirely deleted to clear any invisible antivirus file locks or corrupted files.

You can now reinstall Wallpaper Engine. If you want to start from a clean slate, please read the next section on how to fully reset all your wallpaper subscriptions - this is not necessary in most cases.

## Resetting all Steam Workshop Subscriptions

If you are experiencing issues related to wallpaper downloads by Steam, you can try to do a full reset of your Steam Workshop subscriptions. In rare cases, this can help with broken Workshop subscriptions that are not visible in the app. If you notice that Steam keeps redownloading all your wallpapers or that Steam keeps downloading wallpapers that have been deleted from the Steam Workshop in the past, you can attempt a full reset.

請依循以下步驟：

1. 關閉 Steam。 **Optional:** Uninstall Wallpaper Engine first.
2. Open the Wallpaper Engine Steam Workshop website and log in to your Steam account:

* [Steam Workshop for Wallpaper Engine](https://steamcommunity.com/app/431960/workshop/)

3. On the right-hand side, hover over **Your files** and then **Subscribed Items**.
4. You will be presented a page with your subscriptions. Click the **Unsubscribe From All** button on the right-hand side to clear all your Workshop subscription (including any hidden broken subscriptions).
5. **重新啟動 Steam**，您的訂閱現在已重設完成。
