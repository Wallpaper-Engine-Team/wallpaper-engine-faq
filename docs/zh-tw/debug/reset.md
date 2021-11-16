# 完全重設 Wallpaper Engine

If you experience technical issues with Wallpaper Engine, you may want to do a full reset of your Wallpaper Engine installation. Follow this guide on how to reset Wallpaper Engine completely, including corrupted wallpaper subscriptions.

::: danger
Read this first if you use an antivirus app (except Microsoft Defender)

A vast majority of issues we deal with are caused by antivirus apps blocking Wallpaper Engine or Steam by mistake. Antivirus apps are frequently the cause of:

* Wallpaper Engine crashes
* Broken or empty Wallpaper Engine user interface
* Wallpaper Engine failing to start at all without any error message
* Wallpaper Engine failing to install or update itself
* Various other issues caused by broken or inaccessible files

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
