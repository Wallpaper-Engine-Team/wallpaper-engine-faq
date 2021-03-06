# Wallpaper Engineトレイアイコンを非表示にする

Windowsの時計の隣にあるトレイアイコンを非表示にするようWallpaper Engineに伝えるレジストリキーを作成することにより、手動でWallpaper Engineのトレイアイコンを非表示にすることは可能です。

::: warning
あなたが、トレイアイコンを非表示にすることによる短所を積極的に受け入れてもいいと思うほどトレイアイコンを嫌っているのでない限り、これはお勧めしません。
:::

トレイアイコンが非表示になっていると、Wallpaper Engineを終了させる方法は、Windowsのタスクマネージャを通すしかなくなります。 ユーザーインターフェースは、Steamか.exeファイルからしか開けません。これは不便で、混乱を引き起こす可能性がある方法です。

それでもトレイアイコンを非表示にしたい場合は、次のようにすれば行えます。

レジストリキーを作成するには、Windowsのスタートメニューを開き、"regedit.exe"と入力します。すると"レジストリ エディター"が開きます。

1. 次のレジストリディレクトリに行きます： *HKEY_CURRENT_USER\Software\WallpaperEngine*
2. *WallpaperEngine*レジストリフォルダを右クリックし、*新規*、次に*DWORD (32 Bit) Value*を選択します。
3. レジストリに次の名前をつけます：*hideTrayIcon*
4. 名前が正しいことをよく確認します。スペースを入れず、全く同じように入力します。
5. レジストリキーをダブルクリックし、値を入れます：*1*
6. Wallpaper Engineを再起動すると、トレイアイコンはもう表示されません。

元に戻すには、*hideTrayIcon*を*0*にするか、これを削除します。その後Wallpaper Engineを再起動します。 