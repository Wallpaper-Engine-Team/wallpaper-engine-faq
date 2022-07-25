# アップロードが45%で止まる

アップロードプロセスの45%で、Steamは実際にSteamサーバーへのファイルのアップロードを始めます。 Wallpaper EngineコンテンツをSteamワークショップで公開しようとしていて、45%で止まった場合、SteamがSteamサーバーにファイルをアップロードできないということです。 ファイアーウォールやアンチウイルスのアプリケーションがSteamのファイルアップロードをブロックしていないことを確認してください。 また、Steamのネットワークポートに関する公式ガイドもご覧ください。

* [Steamの必要ポート](https://support.steampowered.com/kb_article.php?ref=8571-GLVN-8711)

この問題は、常にネットワーク関連です。SteamのSteamサーバーとの正しい通信をブロックしているのが何なのか、調べる必要があります。

Also make sure that your router or a firewall is not blocking the IP address range of the Steam servers, make sure that direct IP connections are possible. Exclude the following IP address range from any block list: `208.64.200.0` - `208.64.203.255`.

::: tip
This network issue can also be caused by a firewall in your network router. Make sure that no network router is blocking Steam's upload. Try If  uploads work through a mobile wi-fi hotspot - in that case your router is likely at fault and not any software on your computer.
:::