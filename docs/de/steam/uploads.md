# Uploads stecken bei 45% fest

Beim Hochladen von Hintergründen startet Steam bei 45% mit dem tatsächlichen Senden von Dateien an die Steam-Server. Wenn du versuchst einen Hintergrund mit Wallpaper Engine im Steam Workshop zu veröffentlichen und der Upload bei 45% stecken bleibt, bedeutet dies, dass Steam nicht in der Lage ist, Dateien an die Steam-Server zu senden. Stelle sicher, dass keine Firewall und kein Antivirenprogramm Steam daran hindert Dateien hochzuladen. Siehe dazu außerdem die offizielle Hilfeseite von Steam über Netzwerk-Ports:

* [Benötigte Ports für Steam](https://support.steampowered.com/kb_article.php?ref=8571-GLVN-8711&l=german)

Bei diesem Problem handelt es sich immer um eine Art von Netzwerkproblem, du musst an dieser Stelle herausfinden, was die Kommunikation zu den Steam-Servern verhindert.

Also make sure that your router or a firewall is not blocking the IP address range of the Steam servers, make sure that direct IP connections are possible. Exclude the following IP address range from any block list: `208.64.200.0` - `208.64.203.255`.

::: tip
This network issue can also be caused by a firewall in your network router. Make sure that no network router is blocking Steam's upload. Try If  uploads work through a mobile wi-fi hotspot - in that case your router is likely at fault and not any software on your computer.
:::