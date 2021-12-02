# Fehlerbehebung bei Verbindung mit Mobilgeräten

::: tip
Verbindung schlägt nach allen nachfolgenden Schritten immer noch fehl? Schaue dir am Ende dieser Seite unsere Backup-Lösung an, mit der du Hintergründe über USB oder eine andere Methode deiner Wahl importieren kannst.
:::

Falls du dein Mobilgerät nicht mit deinem Computer verbinden kannst, so ist oft eine Firewall oder eine Einstellung in deinem lokalen Netzwerk das Problem. Überprüfe die folgenden Problemquellen:

* **Stelle sicher, dass dein Mobilgerät und Computer zum gleichen lokalen Netzwerk verbunden sind.**
  * Dein Computer benötigt kein WLAN, im Normalfall bist du im gleichen Netzwerk auch wenn du ein LAN-Kabel verwendest.
* **Stelle sicher, dass keine Firewall Wallpaper Engine daran hindert mit deinem lokalen Netzwerk zu kommunizieren.**
  * Wallpaper Engine sendet einen Multi-Cast auf den Netzwerk-Ports 7884 (UDP) und 7889 (TCP), stelle sicher, dass keine Firewall dies blockiert.
* **Schalte jegliche VPN- oder Proxy-Anwendungen auf deinem Computer und deinem Mobilgerät aus, welche gegebenenfalls die Verbindung zwischen deinen Geräten stören.**
* **Stelle sicher, dass dein Netzwerk-Router deine Geräte nicht daran hindert untereinander zu kommunizieren.**
    * Stelle sicher, dass dein Router keine Netzwerkverbindungen zwischen Geräten blockiert.
    * Schalte **UPnP** (**"Univeral Plug and Play"**) in deinen Router-Einstellungen ein.
* **Überprüfe, dass das Wallpaper Engine auf Windows und Wallpaper Engine auf deinem Mobilgerät beide auf dem neuesten Stand sind und gleichzeitig laufen.**

### Windows-Firewall

Besonders wenn dein Mobilgerät deinen Computer finden kann, die Verbindung jedoch fehlschlägt, so liegt dies fast immer an einer Firewall auf dem Computer. Wenn du Wallpaper Engine zum ersten mal startest, wirst du gefragt, ob du der Anwendung Zugriff auf dein Netzwerk erlauben möchtest. Wenn du das Fenster einfach geschlossen hast oder **ui32.exe** nicht die notwendigen Zugriffsrechte auf dein Netzwerk gegeben hast, dann wird die Windows-Firewall Wallpaper Engine blockieren. Stelle sicher, dass **ui32.exe** mit deinem Netzwerk kommunizieren kann, wie im folgenden Screenshot zu sehen ist:

![Windows Firewall-Zugriffsrechte](/img/faq/windows_defender.png)

Wallpaper Engine wird automatisch versuchen, deine Firewall zu reparieren, wenn es Probleme erkennt. Dieser Prozess ist relativ verlässlich, in einigen Fällen musst du aber selbst die Blockierungen entfernen, die du gegebenenfalls in der Vergangenheit aus Versehen erstellt hast.

Wenn du Wallpaper Engine diese Zugriffsrechte nicht aktiv eingeräumt hast, wird die Windows-Firewall Wallpaper Engine automatisch blockieren. Öffne die Windows-Firewall-Einstellungen und klicke dann auf **Zugriff von App durch Firewall zulassen**. Suche nach einem Eintrag namens **ui32** und lösche diesen entweder oder stelle sicher, dass die Spalten *Privat* als auch *Öffentlich* mit einem Häkchen versehen sind, dann bestätige deine Auswahl und starte Wallpaper Engine neu.

Stelle sicher, dass du nach **ui32** oder **Wallpaper Engine UI** suchst - du könntest eine Anzahl an Einträgen namens **Wallpaper Engine** finden, diese sind jedoch irrelevant an dieser Stelle.

**Bitte beachte:** Diese Sektion ist speziell nur über die eingebaute Windows-Firewall, wenn du weitere Antiviren- oder Firewall-Programme verwendest, musst du sicherstellen, dass Wallpaper Engine von diesen nicht blockiert wird.

## Backup-Lösung: Manuelles Importieren einer Hintergrund-Datei (.mpkg)

Solltest du nicht in der Lage sein, die Verbindung zwischen deinem Computer und deinem Mobilgerät zu beheben, so kannst du trotzdem deine Hintergründe manuell auf dein Mobilgerät übertragen. Wähle zunächst die Hintergründe aus, welche du in Wallpaper Engine exportieren möchtest, dann klicke mit Rechtsklick auf diese und wähle **An Mobilgerät senden** aus, gefolgt von **.mpkg exportieren**.

<video width="100%" controls autoplay loop>
  <source src="/videos/mobile_export.mp4" type="video/mp4">
  Dein Browser unterstützt das Video-Tag nicht.
</video>

Sobald Wallpaper Engine die .mpkg-Dateien für deine Hintergründe erstellt hat, kannst du diese entweder auf dein Mobilgerät übertragen, indem du die Dateien mit einem USB-Kabel übertragst oder auf eine SD-Karte speicherst. Alternativ kannst du auch jegliche andere Form von Datei-Upload-Dienst nutzen, um die Hintergründe auf dein Mobilgerät zu laden, du könntest dir die Dateien auch selbst über einen Nachrichten-Dienst oder per E-Mail senden (solange die Dateigröße kein Problem darstellt).

Sobald die Dateien auf deinem Mobilgerät gespeichert sind, öffne Wallpaper Engine auf deinem Mobilgerät und nutze die **Datei importieren**-Funktionalität, um die .mpkg-Dateien direkt aus dem Verzeichnis einzulesen, in welchem du diese zuvor gespeichert hast.

::: danger
Es ist wichtig, dass die .mpkg-Dateien im **Downloads**-Ordner deines Mobilgeräts platziert werden. Android ist sehr restriktiv, wenn es darum geht, dass Apps den Zugriff auf Dateien deines Geräts erhalten. Wenn die App dir keine .mpkg-Dateien auf deinem Gerät anzeigt oder diese sich nicht öffnen lassen, versuche sie im **Downloads**-Verzeichnis zu platzieren, dieses ist funktioniert relativ verlässlich.
:::