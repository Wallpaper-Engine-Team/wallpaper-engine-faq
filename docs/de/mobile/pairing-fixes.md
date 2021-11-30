# Fehlerbehebung bei Verbindung mit Mobilgeräten

::: tip
Connection still does not work after all of this? Scroll to the bottom of this page to see the manual backup solution to import wallpapers via USB or another method.
:::

Falls du dein Mobilgerät nicht mit deinem Computer verbinden kannst, so ist oft eine Firewall oder eine Einstellung in deinem lokalen Netzwerk das Problem. Überprüfe die folgenden Problemquellen:

* **Stelle sicher, dass dein Mobilgerät und Computer zum gleichen lokalen Netzwerk verbunden sind.**
  * Your computer does not need wifi, it is still the same network even if it is connected through a network cable.
* **Stelle sicher, dass keine Firewall Wallpaper Engine daran hindert mit deinem lokalen Netzwerk zu kommunizieren.**
  * Wallpaper Engine sends a multi-casts on the network ports 7884 (UDP) and 7889 (TCP), make sure no firewall is blocking this.
* **Schalte jegliche VPN- oder Proxy-Anwendungen auf deinem Computer und deinem Mobilgerät aus, welche gegebenenfalls die Verbindung zwischen deinen Geräten stören.**
* **Stelle sicher, dass dein Netzwerk-Router deine Geräte nicht daran hindert untereinander zu kommunizieren.**
    * Stelle sicher, dass dein Router keine Netzwerkverbindungen zwischen Geräten blockiert.
    * Schalte **UPnP** (**"Univeral Plug and Play"**) in deinen Router-Einstellungen ein.
* **Überprüfe, dass das Wallpaper Engine auf Windows und Wallpaper Engine auf deinem Mobilgerät beide auf dem neuesten Stand sind und gleichzeitig laufen.**

### Windows Firewall

Especially if your mobile device can find your computer but fails to connect to it, it's almost definitely caused by a firewall on your computer. When you first launch Wallpaper Engine, it will prompt you to grant it permission to your network. If you closed this window or did not specifically allow **ui32.exe** to communicate with your network, the Windows firewall will block Wallpaper Engine. Make sure to allow **ui32.exe** to communicate as shown in this screenshot:

![Windows Firewall Permissions](/img/faq/windows_defender.png)

Wallpaper Engine will automatically suggest firewall fixes if it detects any problems. This process is somewhat reliable but in some cases you may still need to manually clear any blocks you may have created in the past by accident.

If you have not granted Wallpaper Engine these permissions, the Windows firewall will automatically block Wallpaper Engine. Open the Windows firewall settings, then click on **Allow an app through firewall**. Search for an entry called **ui32** and either delete it or make sure both check marks in the *Private* and *Public* column are enabled, then confirm your changes and restart Wallpaper Engine.

Make sure to look for **ui32** or **Wallpaper Engine UI** - you may find entries called just **Wallpaper Engine** but these are irrelevant here.

**Please note:** This section is specifically only about the built-in Windows firewall, if you use any other antivirus app or firewall, you need to make sure Wallpaper Engine is not being blocked by them.

## Backup-Lösung: Manuelles Importieren einer Hintergrund-Datei (.mpkg)

Solltest du nicht in der Lage sein, die Verbindung zwischen deinem Computer und deinem Mobilgerät zu beheben, so kannst du trotzdem deine Hintergründe manuell auf dein Mobilgerät übertragen. Wähle zunächst die Hintergründe aus, welche du in Wallpaper Engine exportieren möchtest, dann klicke mit Rechtsklick auf diese und wähle **An Mobilgerät senden** aus, gefolgt von **.mpkg exportieren**.

<video width="100%" controls autoplay loop>
  <source src="/videos/mobile_export.mp4" type="video/mp4">
  Dein Browser unterstützt das Video-Tag nicht.
</video>

Sobald Wallpaper Engine die .mpkg-Dateien für deine Hintergründe erstellt hat, kannst du diese entweder auf dein Mobilgerät übertragen, indem du die Dateien mit einem USB-Kabel übertragst oder auf eine SD-Karte speicherst. Alternativ kannst du auch jegliche andere Form von Datei-Upload-Dienst nutzen, um die Hintergründe auf dein Mobilgerät zu laden, du könntest dir die Dateien auch selbst über einen Nachrichten-Dienst oder per E-Mail senden (solange die Dateigröße kein Problem darstellt).

Sobald die Dateien auf deinem Mobilgerät gespeichert sind, öffne Wallpaper Engine auf deinem Mobilgerät und nutze die **Datei importieren**-Funktionalität, um die .mpkg-Dateien direkt aus dem Verzeichnis einzulesen, in welchem du diese zuvor gespeichert hast.

::: danger
It is import that you place the .mpkg files in the **Downloads** folder on the mobile device. Android is very restrictive when it comes to letting apps access files. If you cannot find or open the .mpkg files on your device, try placing them in another directory, usually the **Downloads** folder is the most reliable choice for this.
:::