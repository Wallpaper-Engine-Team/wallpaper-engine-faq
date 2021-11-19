# Vorschaubilder / Suchergebnisse werden nicht angezeigt

Wenn die die Vorschaubilder von nicht installierten Hintergründen in Wallpaper Engine nicht sehen kannst, so liegt dies normalerweise an einer Firewall oder Sicherheits-Software, welche Wallpaper Engine daran hindert, auf die Bild-Server von Steam zuzugreifen.

## Teste deine Verbindung zu den Bild-Servern von Steam

Überprüfe zunächst, ob eine Verbindung zu den Bild-Servern von Steam überhaupt von deinem Computer aus möglich ist. Öffne den folgenden Link in deinem Web-Browser, um deine Verbindung zu überprüfen:

* [**KLICKE HIER, UM DIE BILD-SERVER VON STEAM ZU TESTEN**](https://steamuserimages-a.akamaihd.net/ugc/1796366854776537259/C541D485E7156010D92284B082D13A2377FD1F8F/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false)

Du solltest eine Nachricht sehen, auf der **OK** und ein **grünes Häkchen** zu sehen ist, wenn du den Link oben anklickst.

### Ich kann die OK-Nachricht sehen

Wenn du beim Klicken des Links die **OK**-Nachricht siehst:

* Dies bedeutet definitiv, dass nur Wallpaper Engine von einer Art von Sicherheits-Software auf deinem Computer blockiert wird. Stelle jegliches Antivirenprogramm, jegliche Firewall und jeglichen Netzwerk-Optimierer so ein, dass diese Wallpaper Engine ignorieren, besonders den **ui32.exe**-Prozess, welcher zu Wallpaper Engine gehört.

### Ich kann die OK-Nachricht NICHT sehen

Wenn du die **OK**-Nachricht **nicht** sehen kannst, wenn du den Link oben anklickst, bedeutet dies, dass dein gesamter Computer oder dein gesamtes Netzwerk nicht auf die Bild-Server von Steam zugreifen kann. Gründe für dies können sein:

* Ein Antivirenprogramm, eine Firewall oder ein Netzwerkbeschleunigungsprogramm blockt die Verbindung zu den Bild-Servern von Steam auf deinem Computer.
* Dein Netzwer-Router ist falsch konfiguriert. Take a closer look at the firewall settings of your router and other advanced router settings that may play a role here.
    * You can easily test if your router is at fault by connecting your computer to a wifi hotspot through your smartphone. If you start seeing preview images while connected to a mobile wifi hotspot, the problem is definitely in your network router or in the network of your internet service provider.
    * Your internet service provider may also be blocking the Steam image servers or there is a temporary connection issue. This is very rare but it can happen, try again later.