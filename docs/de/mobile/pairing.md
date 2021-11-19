# Verbinden eines Mobilgerätes mit Windows

Du kannst dein Mobilgerät mit deinem Computer kabellos verbinden, um deine Sammlung an Hintergründe auf die Begleit-App von Wallpaper Engine auf deinem Mobilgerät zu laden.

Aus technischen und rechtlichen Gründen ist es nicht möglich, dass die Android-App direkt Hintergründe aus dem Workshop lädt.

::: tip
Wenn die Verbindung für dich nicht funktioniert, schaue dir die Sektion zur **Backup-Lösung** des Problems weiter unten auf dieser Seite an, um zu lernen, wie du mobile Wallpaper Pakete (**.mpkg**) erstellen und diese auf dein Mobilgerät übertragen kannst.
:::

[[toc]]

## 1. Installiere die kostenlose Begleit-App für Wallpaper Engine

Bevor du fortfährst, stelle sicher, dass du die neueste Version der Begleit-App von Wallpaper Engine für Android installiert hast.

Wir empfehlen die App über den offiziellen App-Store-Link zu installieren, du kannst aber auch die neueste App-Version direkt von unserer Homepage herunterladen. Für Download-Links und weitere Informationen, schaue dir bitte unsere Android-Downloadseite an:

* [Wallpaper Engine für Android herunterladen](https://www.wallpaperengine.io/android/)

Aus Sicherheitsgründen, empfehlen wir nicht, die App von Quellen herunterzuladen, die nicht auf unserer Website gelistet sind.

## 2. Wallpaper Engine auf Windows vorbereiten

In der **Windows**-App, klicke auf die Schaltfläche **Mobil** oben rechts in der Benutzeroberfläche. Die Übersicht für Mobilgeräte öffnet sich nun. Unten in der Übersicht, klicke auf die Schaltfläche **Neues Gerät verbinden**. Wallpaper Engine zeigt dir nun einen 4-stelligen PIN an, welchen du nutzen kannst, um dein Mobilgerät im nächsten Schritt zu verbinden.

<video width="100%" controls autoplay loop>
  <source src="/videos/mobile_pin.mp4" type="video/mp4">
  Dein Browser unterstützt das Video-Tag nicht.
</video>

## 3. Mobilgerät verbinden

In der mobilen Begleit-App für Wallpaper Engine, klicke unten rechts auf **Hinzufügen**, gefolgt von **Mit Computer verbinden**. Die Wallpaper Engine-App durchsucht nun dein lokales Netzwerk nach Wallpaper Engine auf Windows. Dein Computer sollte nach wenigen Sekunden in der Liste auftauchen, was es dir erlaubt dich zu diesem mit einem Klick zu verbinden. Wenn du dich zum ersten mal verbindest, wirst du nach dem vierstelligen PIN aus der Windows-Sektion oben gefragt.

<video height="590px" style="display:block;margin:0 auto;" controls autoplay loop>
  <source src="/videos/mobile_connect.mp4" type="video/mp4">
  Dein Browser unterstützt das Video-Tag nicht.
</video>

Sobald du die PIN korrekt eingegeben hast, färbt sich die Status-Leiste in der Anwendung grün und zeigt an zu welchem Computer die App verbunden ist. In der Windows-App färbt sich gleichzeitig die Schaltfläche **Mobil** in grün, wodurch sichtbar wird, dass eine Verbindung zu einem Mobilgerät aktiv ist.

Standardmäßig wird Wallpaper Engine nun immer versuchen automatisch eine Verbindung zu deinem Computer aufzubauen, sobald du die Wallpaper Engine-App auf deinem Mobilgerät und deinem Computer startest.

## 4. Hintergründe auf dein Mobilgerät übertragen

Sobald die Verbindung besteht, färbt sich die **Mobil**-Schaltfläche oben rechts grün.

Du kannst nun rechts auf die Schaltfläche **An Mobilgerät senden** klicken oder bei jedem kompatiblen Hintergrund mit Rechtsklick auf **An Mobilgerät senden** klicken und dann dein Gerät aus der angezeigten Liste auswählen.

#### Szene-Hintergründe

Dynamische und interaktive Hintergründe, welche vom Typen **Szene** sind, werden zunächst für die Nutzung auf Mobilgeräten optimiert, sodass die Kompatibilität mit der Hardware von Mobilgeräten sichergestellt werden kann. Dieser Prozess kann ein etwas Zeit in Anspruch nehmen. Wallpaper Engine fragt außerdem, welche Qualität der Hintergrund auf deinem Mobilgerät haben soll. Besonders für Hintergründe mit höherer Auflösung empfehlen wir die Qualitätsstufe **Ausgewogen** zu nutzen, wenn du Leistungsprobleme auf deinem Mobilgerät feststellst.

<video width="100%" controls autoplay loop>
  <source src="/videos/mobile_transfer.mp4" type="video/mp4">
  Dein Browser unterstützt das Video-Tag nicht.
</video>

::: tip
Du kannst mehrere Hintergründe zur gleichen Zeit übertragen, indem du mehrere Hintergründe anklickst während du die STRG-Taste auf deiner Tastatur gedrückt hältst.
:::

## Fehlerbehebung bei Verbindung mit Mobilgeräten

Falls du dein Mobilgerät nicht mit deinem Computer verbinden kannst, so ist oft eine Firewall oder eine Einstellung in deinem lokalen Netzwerk das Problem. Überprüfe die folgenden Problemquellen:

* Stelle sicher, dass dein Mobilgerät und Computer zum gleichen lokalen Netzwerk verbunden sind.
* Stelle sicher, dass keine Firewall Wallpaper Engine daran hindert mit deinem lokalen Netzwerk zu kommunizieren.
* Stelle sicher, dass dein Netzwerk-Router deine Geräte nicht daran hindert untereinander zu kommunizieren.
    * Stelle sicher, dass dein Router keine Netzwerkverbindungen zwischen Geräten blockiert.
    * Schalte **UPnP** (**"Univeral Plug and Play"**) in deinen Router-Einstellungen ein.
* Schalte jegliche VPN- oder Proxy-Anwendungen auf deinem Computer und deinem Mobilgerät aus, welche gegebenenfalls die Verbindung zwischen deinen Geräten stören.
* Überprüfe, dass das Wallpaper Engine auf Windows und Wallpaper Engine auf deinem Mobilgerät beide auf dem neuesten Stand sind und gleichzeitig laufen.

### Backup-Lösung: Manuelles Importieren einer Hintergrund-Datei (.mpkg)

Solltest du nicht in der Lage sein, die Verbindung zwischen deinem Computer und deinem Mobilgerät zu beheben, so kannst du trotzdem deine Hintergründe manuell auf dein Mobilgerät übertragen. First, select the wallpapers you want to export in Wallpaper Engine, then right-click on them and select **Send to Mobile Device**, followed by clicking on **Export .mpkg**.

<video width="100%" controls autoplay loop>
  <source src="/videos/mobile_export.mp4" type="video/mp4">
  Dein Browser unterstützt das Video-Tag nicht.
</video>

Once Wallpaper Engine has created the .mpkg files for your wallpapers, you can either transfer them to your mobile device by moving the files onto your mobile device via USB or by copying the files onto an SD card. Alternatively you can also use any file sharing service on your mobile device or send them to yourself via a messaging service or even via email (if the file size is not a problem).

Once the files are on your mobile device, open up Wallpaper Engine on your mobile device and use the **Import File** functionality to directly import the .mpkg files into the app by selecting them from the directory that you have placed them in.