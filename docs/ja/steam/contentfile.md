# "コンテンツファイルがロックされています" / ディスク書き込みエラー

SteamがWallpaper Engineのインストールまたはアップデート中にダウンロードに失敗した場合、最も可能性が高いのはアンチウイルスが通知することなくファイルを削除したか、ファイルを隔離したか、ディスク上のディレクトリ全体をブロックしたかです。 Steamで「コンテンツファイルがロックされています」または「アクセスが拒否されました」エラーが出ます。 この場合、アンチウイルスがPCに行った変更を戻す必要があります。ほとんどのアンチウイルスプログラムには隔離ウィンドウがあり、そこからファイルを復元したり、ホワイトリストを作成したりすることができます。 アンチウイルスアプリケーションが、次のディレクトリを無視するようにしてください。

* `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine`
* `C:\Program Files (x86)\Steam\steamapps\workshop\downloads`
* `C:\Program Files (x86)\Steam\steamapps\downloading`

*SteamまたはWallpaper Engineが別のディレクトリにインストールされている場合は、実際のSteamインストールパスに合わせてディレクトリを変更する必要があります。*

If you have configured your antivirus app to ignore these directories but the issue persists, it is sometimes necessary to uninstall Wallpaper Engine through Steam, followed by manually deleting the remains of the `wallpaper_engine` directory to clear any antivirus locks which may continue to block Steam from downloading files. After deleting the entire `wallpaper_engine` folder, try reinstalling the app through Steam again.