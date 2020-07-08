# 削除したデフォルトの壁紙の復元

Wallpaper Engineと一緒にプリインストールされた壁紙を削除してしまった場合、*wallpaper_engine*インストールディレクトリにある設定ファイルを削除することで復元できます。

1. Wallpaper Engineを完全に終了します（トレイで右クリックし、「終了」）

2. Wallpaper Engineディレクトリを開き、"visibility.json"というファイルを削除します。 デフォルトでは次の場所にあります。

* *C:\Program Files (x86)\Steam\SteamApps\common\wallpaper_engine\projects\defaultprojects\visibility.json*

SteamまたはWallpaper Engineが別の場所にインストールされている場合、ディレクトリはわずかに異なりますが、*wallpaper_engine\projects\defaultprojects\visibility.json*サブディレクトリはいつも同じです。

3. ファイルを削除したあとWallpaper Engineを起動すると、すべてのデフォルト壁紙が戻っています。

::: tip なんらかの理由で"visibility.json"ファイルが見つからない場合は、Wallpaper Engineを再インストールすることができます。 これによってすべてのデフォルト壁紙が復元されますが、すべての壁紙の再ダウンロードが必要になります。これは、上の手順を行うと必要ありません。 :::