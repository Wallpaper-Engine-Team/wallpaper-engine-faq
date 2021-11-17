# Vorschaubilder / Suchergebnisse werden nicht angezeigt

Wenn die die Vorschaubilder von nicht installierten Hintergründen in Wallpaper Engine nicht sehen kannst, so liegt dies normalerweise an einer Firewall oder Sicherheits-Software, welche Wallpaper Engine daran hindert, auf die Bild-Server von Steam zuzugreifen.

## Teste deine Verbindung zu den Bild-Servern von Steam

Überprüfe zunächst, ob eine Verbindung zu den Bild-Servern von Steam überhaupt von deinem Computer aus möglich ist. Öffne den folgenden Link in deinem Web-Browser, um deine Verbindung zu überprüfen:

* [**KLICKE HIER, UM DIE BILD-SERVER VON STEAM ZU TESTEN**](https://steamuserimages-a.akamaihd.net/ugc/1796366854776537259/C541D485E7156010D92284B082D13A2377FD1F8F/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false)

You should see a message that says **OK** and shows a **green checkmark** when clicking on the link above.

### I can see the OK message

If you see the **OK** message when clicking the test link above:

* This definitely means that only Wallpaper Engine is being blocked by some security software on your computer. Configure any antivirus, firewall or network accelerator app to ignore Wallpaper Engine, especially the **ui32.exe** process that belongs to Wallpaper Engine.

### I can NOT see the OK message

If you did **not** see the **OK** message when clicking the test link above, this means your entire computer or even your entire network is not able to load images from the Steam image servers. Reasons for this can be:

* An antivirus, firewall or network accelerator app is entirely blocking the connection to the Steam image servers for all applications on your computer.
* Your network router is somehow misconfigured. Take a closer look at the firewall settings of your router and other advanced router settings that may play a role here.
    * You can easily test if your router is at fault by connecting your computer to a wifi hotspot through your smartphone. If you start seeing preview images while connected to a mobile wifi hotspot, the problem is definitely in your network router or in the network of your internet service provider.
    * Your internet service provider may also be blocking the Steam image servers or there is a temporary connection issue. This is very rare but it can happen, try again later.