# Steamワークショップのバックアップ

なんらかの理由によって壁紙がSteamから削除された場合、SteamはそれをあなたのPCからも削除します。 Wallpaper Engineにはそれを防ぐことはできませんが、心配ならば、壁紙のバックアップを取ることができます。

それと似た問題で、Steamがランダムにすべてのワークショップファイルを再ダウンロードするという報告が多数あります。何GBものデータを持っている場合には、かなりうっとうしいことになります。 こういうことが頻繁に起きるときは、バックアップを作ってSteamとのつながりを断っておくとそれを防げます。

# バックアップの作成

次のガイドは、SteamとWallpaper Engineが`C:\Program Files (x86)\Steam\`にインストールされていることを想定しています。別の場所にインストールされている場合は、その場所をチェックしてください。

::: tip
**431960** is the Steam ID of Wallpaper Engine, Steam uses this directory for all Wallpaper Engine downloads.
:::

1. Locate the folder in which Steam stores your wallpapers, by default it is in `C:\Program Files (x86)\Steam\steamapps\workshop\content\431960`
2. Copy the folder 431960 to Wallpaper Engine's installation path here: `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\projects\431960`
3. `431960`フォルダを`backup`に**名前変更**します。完全なパスは次のようになります：`C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\projects\backup`
4. `backup`ディレクトリには、これまでにダウンロードした壁紙が、それぞれのサブディレクトリにすべて保存されています（数字は壁紙のSteamワークショップIDです）
5. 壁紙ブラウザを再起動すると、バックアップされた壁紙が見えるはずです。 重複しているSteamのサブスクライブを解除すれば、自分が持っているコピーだけを使うことができます

::: warning
Do **not** manually delete the Steam Workshop folder `C:\Program Files (x86)\Steam\steamapps\workshop\content\431960`. This will cause your Steam to be confused and re-download all wallpapers. Simply unsubscribe from your wallpapers and let Steam delete the duplicate files itself.
:::