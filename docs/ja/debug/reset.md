# Wallpaper Engineのフルリセット

Wallpaper Engineで技術的な問題が発生する場合は、Wallpaper Engineのフルリセットが必要な場合があります。 破損したサブスクリプションを含むWallpaper Engineの完全なリセットを実行するには、このガイドの指示にしたがってください、

::: 重要: Microsoft Defender以外のウイルス対策ソフトをお使いの場合は、必ずお読みください。

発生する問題の大部分は、ウイルス対策ソフトが誤ってWallpaper EngineまたはSteamをブロックしてしまうことが原因です。 ウイルス対策ソフトが原因となって発生する問題の例:

* Wallpaper Engineのクラッシュ
* Wallpaper Engineのユーザーインターフェースの破損または表示エラー
* エラーメッセージが表示されずにでWallpaper Engineの起動に失敗する
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

次の手順に従ってください。

1. Steamを終了します。 **Optional:** Uninstall Wallpaper Engine first.
2. Open the Wallpaper Engine Steam Workshop website and log in to your Steam account:

* [Steam Workshop for Wallpaper Engine](https://steamcommunity.com/app/431960/workshop/)

3. On the right-hand side, hover over **Your files** and then **Subscribed Items**.
4. You will be presented a page with your subscriptions. Click the **Unsubscribe From All** button on the right-hand side to clear all your Workshop subscription (including any hidden broken subscriptions).
5. **Restart Steam**, your subscriptions are now reset.
