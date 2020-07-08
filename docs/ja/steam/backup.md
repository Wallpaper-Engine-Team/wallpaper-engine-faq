# Steamワークショップのバックアップ

なんらかの理由によって壁紙がSteamから削除された場合、SteamはそれをあなたのPCからも削除します。 Wallpaper Engineにはそれを防ぐことはできませんが、心配ならば、壁紙のバックアップを取ることができます。

それと似た問題で、Steamがランダムにすべてのワークショップファイルを再ダウンロードするという報告が多数あります。何GBものデータを持っている場合には、かなりうっとうしいことになります。 こういうことが頻繁に起きるときは、バックアップを作ってSteamとのつながりを断っておくとそれを防げます。

# バックアップの作成

次のガイドは、SteamとWallpaper Engineが`C:\Program Files (x86)\Steam\`にインストールされていることを想定しています。別の場所にインストールされている場合は、その場所をチェックしてください。

1. Steamが壁紙を保管しているフォルダの場所を見つけます。デフォルトでは`C:\Program Files (x86)\Steam\steamapps\workshop\content\431960`です。 ::: tip Wallpaper EngineのSteam IDは**431960**です。Steamはこのディレクトリを、すべてのWallpaper Engineのダウンロードに使用します。 :::
2. 431960フォルダを、次の場所にあるWallpaper Engineのインストールパスにコピーします：`C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\projects\431960`
3. `431960`フォルダを`backup`に**名前変更**します。完全なパスは次のようになります：`C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\projects\backup`
4. `backup`ディレクトリには、これまでにダウンロードした壁紙が、それぞれのサブディレクトリにすべて保存されています（数字は壁紙のSteamワークショップIDです）
5. 壁紙ブラウザを再起動すると、バックアップされた壁紙が見えるはずです。 重複しているSteamのサブスクライブを解除すれば、自分が持っているコピーだけを使うことができます

::: warning Steamワークショップのフォルダ `C:\Program Files (x86)\Steam\steamapps\workshop\content\431960` を手動で削除**しないでください**。 Steamが混乱し、すべての壁紙を再ダウンロードしてしまいます。 壁紙のサブスクライブを解除するだけにしておけば、Steamが自分で重複ファイルを削除します。 :::