# 上傳停在 45%

上傳程序位於 45% 時，Steam 其實會開始將檔案上傳到 Steam 伺服器。 如果您正在將 Wallpaper Engine 內容發佈到 Steam 工作坊，而且上傳進度停在 45%，這表示 Steam 無法將檔案上傳到 Steam 伺服器。 請確定沒有防火牆或防毒應用程式阻擋 Steam 上傳檔案。 另外，請參閱 Steam 網路連接埠的官方指南：

* [Steam 所需的連接埠](https://support.steampowered.com/kb_article.php?ref=8571-GLVN-8711)

這個問題一直都是某種網路的問題，您需要找出阻擋 Steam 正常與 Steam 伺服器通訊的原因。

Also make sure that your router or a firewall is not blocking the IP address range of the Steam servers, make sure that direct IP connections are possible. Exclude the following IP address range from any block list: `208.64.200.0` - `208.64.203.255`.

::: tip
This network issue can also be caused by a firewall in your network router. Make sure that no network router is blocking Steam's upload. Try If  uploads work through a mobile wi-fi hotspot - in that case your router is likely at fault and not any software on your computer.
:::