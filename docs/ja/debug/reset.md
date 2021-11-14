# Wallpaper Engineのフルリセット

Wallpaper Engineで技術的な問題が発生する場合は、Wallpaper Engineのフルリセットが必要な場合があります。 破損したサブスクリプションを含むWallpaper Engineの完全なリセットを実行するには、このガイドの指示にしたがってください、

::: 重要: Microsoft Defender以外のウイルス対策ソフトをお使いの場合は、必ずお読みください。

発生する問題の大部分は、ウイルス対策ソフトが誤ってWallpaper EngineまたはSteamをブロックしてしまうことが原因です。 ウイルス対策ソフトが原因となって発生する問題の例:

* Wallpaper Engineのクラッシュ
* Wallpaper Engineのユーザーインターフェースの破損または表示エラー
* エラーメッセージが表示されずにでWallpaper Engineの起動に失敗する
* Wallpaper Engineのインストールまたはアップデートの失敗
* 破損またはアクセスできないファイルによるさまざまな問題の発生

**ウイルス対策ソフトを使用している場合、このページに記載されているステップを試す前に`wallpaper_engine`というインストールのディレクトリが除外されていることを確認してください。 ウイルス対策ソフトの設定を確認し、すべてのフォルダを除外するように設定してください。**

多くのウイルス対策ソフトは、通知することなくWallpaper Engine関連のファイルをブロックの対象とします。その中には永久にブロックされてしまうファイルも含まれます。
:::

## Wallpaper Engineのアンインストール

Wallpaper Engineを完全にアンインストールするには、破損ファイルをすべて削除する必要があります。

1. 自動スタートアップ機能が有効になっている場合: Wallpaper Engineの設定を開き、**一般**タブの最上部から自動スタートアップ機能を無効にしてください。
2. Steamを開いてWallpaper Engineを右クリックした後、**管理**、**アンインストール**の産んでクリックしてください。
3. Wallpaper Engineのインストールディレクトリへと進み、残っている`wallpaper_engine`のディレクトリをすべて消去してください。 デフォルト設定では下記に格納されています:

* `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine`

Wallpaper Engineが他の場所にインストールされている場合は、`wallpaper_engine`のディレクトリを検索してください。 フォルダを完全に削除し、見えないウイルス対策ファイルのロックまたは破損ファイルが消去してください。

Wallpaper Engineを再インストールしてください。 If you want to start from a clean slate, please read the next section on how to fully reset all your wallpaper subscriptions - this is not necessary in most cases.

## Resetting all Steam Workshop Subscriptions

If you are experiencing issues related to wallpaper downloads by Steam, you can try to do a full reset of your Steam Workshop subscriptions. In rare cases, this can help with broken Workshop subscriptions that are not visible in the app. If you notice that Steam keeps redownloading all your wallpapers or that Steam keeps downloading wallpapers that have been deleted from the Steam Workshop in the past, you can attempt a full reset.

次の手順に従ってください。

1. Steamを終了します。 **Optional:** Uninstall Wallpaper Engine first.
2. Open the Wallpaper Engine Steam Workshop website and log in to your Steam account:

* [Steam Workshop for Wallpaper Engine](https://steamcommunity.com/app/431960/workshop/)

3. On the right-hand side, hover over **Your files** and then **Subscribed Items**.
4. You will be presented a page with your subscriptions. Click the **Unsubscribe From All** button on the right-hand side to clear all your Workshop subscription (including any hidden broken subscriptions).
5. **Restart Steam**, your subscriptions are now reset.
