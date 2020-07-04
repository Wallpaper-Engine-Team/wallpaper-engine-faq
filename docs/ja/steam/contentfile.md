# "コンテンツファイルがロックされています" / ディスク書き込みエラー

SteamがWallpaper Engineのインストールまたはアップデート中にダウンロードに失敗した場合、最も可能性が高いのはアンチウイルスが通知することなくファイルを削除したか、ファイルを隔離したか、ディスク上のディレクトリ全体をブロックしたかです。 Steamで「コンテンツファイルがロックされています」または「アクセスが拒否されました」エラーが出ます。 This needs to be resolved in your antivirus by undoing the changes it did to your PC, most antivirus programs have a quarantine window from where you can restore files or create a whitelist. Make sure your antivirus application ignores the following directories:

* `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine`
* `C:\Program Files (x86)\Steam\steamapps\workshop\downloads`
* `C:\Program Files (x86)\Steam\steamapps\downloading`

*If your Steam or Wallpaper Engine is installed in a different directory, you need to adjust the directories to your actual Steam installation path.*
