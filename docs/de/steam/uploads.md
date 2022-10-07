# Uploads stecken bei 45% fest

Beim Hochladen von Hintergründen startet Steam bei 45% mit dem tatsächlichen Senden von Dateien an die Steam-Server. Wenn du versuchst einen Hintergrund mit Wallpaper Engine im Steam Workshop zu veröffentlichen und der Upload bei 45% stecken bleibt, bedeutet dies, dass Steam nicht in der Lage ist, Dateien an die Steam-Server zu senden. Stelle sicher, dass keine Firewall und kein Antivirenprogramm Steam daran hindert Dateien hochzuladen. Siehe dazu außerdem die offizielle Hilfeseite von Steam über Netzwerk-Ports:

* [Benötigte Ports für Steam](https://support.steampowered.com/kb_article.php?ref=8571-GLVN-8711&l=german)

Bei diesem Problem handelt es sich immer um eine Art von Netzwerkproblem, du musst an dieser Stelle herausfinden, was die Kommunikation zu den Steam-Servern verhindert.

Stelle außerdem sicher, dass dein Router oder eine Firewall nicht die IP-Adressen der Steam-Server blockieren und dass direkte IP-Verbindungen möglich sind. Stelle sicher, dass die folgenden IP-Adressbereiche von jeglichen Block-Listen ausgeschlossen sind: `208.64.200.0` - `208.64.203.255`.

::: tip
Dieses Netzwerkproblem kann auch durch eine Firewall direkt im Netzwerk-Router verursacht werden. Stelle sicher, dass kein Netzwerk-Router den Upload an Steam blockiert. Probiere ob Uploads funktionieren, wenn du einen mobilen WLAN-Hotspot verwendest - in diesem Fall liegt das Problem höchstwahrscheinlich an deinem Router und nicht an Software, welche auf deinem Computer installiert ist.
:::