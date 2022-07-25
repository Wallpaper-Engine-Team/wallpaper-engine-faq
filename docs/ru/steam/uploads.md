# Загрузка в Steam застряла на 45%

После 45% загрузки Steam начинает непосредственно загружать файлы на свои сервера. Если вы пытались опубликовать контент Wallpaper Engine в Мастерской Steam, и загрузка застряла на 45%, это значит, что Steam не может загрузить файлы на свой сервер. Удостоверьтесь, что процесс загрузки Steam не был заблокирован антивирусом или брандмауэром. Также прочитайте официальное руководство по портам, необходимым для работы Steam:

* [Порты, необходимые для работы Steam](https://support.steampowered.com/kb_article.php?ref=8571-GLVN-8711)

Эта проблема всегда вызвана какими-то проблемами в сети, поэтому вам необходимо выяснить, что именно блокирует сообщение между Steam на вашем компьютере и серверами Steam.

Also make sure that your router or a firewall is not blocking the IP address range of the Steam servers, make sure that direct IP connections are possible. Exclude the following IP address range from any block list: `208.64.200.0` - `208.64.203.255`.

::: tip
This network issue can also be caused by a firewall in your network router. Make sure that no network router is blocking Steam's upload. Try If  uploads work through a mobile wi-fi hotspot - in that case your router is likely at fault and not any software on your computer.
:::