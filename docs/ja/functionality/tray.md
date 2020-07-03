# Wallpaper Engineトレイアイコンを非表示にする

Windowsの時計の隣にあるトレイアイコンを非表示にするようWallpaper Engineに伝えるレジストリキーを作成することにより、手動でWallpaper Engineのトレイアイコンを非表示にすることは可能です。

::: warning あなたが、トレイアイコンを非表示にすることによる短所を積極的に受け入れてもいいと思うほどトレイアイコンを嫌っているのでない限り、これはお勧めしません。 :::

トレイアイコンが非表示になっていると、Wallpaper Engineを終了させる方法は、Windowsのタスクマネージャを通すしかなくなります。 ユーザーインターフェースは、Steamか.exeファイルからしか開けません。これは不便で、混乱を引き起こす可能性がある方法です。

それでもトレイアイコンを非表示にしたい場合は、次のようにすれば行えます。

レジストリキーを作成するには、Windowsのスタートメニューを開き、"regedit.exe"と入力します。すると"レジストリ エディター"が開きます。

1. 次のレジストリディレクトリに行きます： *HKEY_CURRENT_USER\Software\WallpaperEngine*
2. Right-click on the *WallpaperEngine* registry folder, select *New* and then *DWORD (32 Bit) Value*.
3. Give the registry the following name: *hideTrayIcon*
4. Make sure that the name is correct, it must have no spaces and must be written exactly like that.
5. Double-click on the registry key and give it the value: *1*
6. Restart Wallpaper Engine, the application will now not show a tray icon.

You can reverse this process by setting *hideTrayIcon* to *0* or deleting it altogether, followed by restarting Wallpaper Engine. 