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

In der mobilen Begleit-App für Wallpaper Engine, klicke unten rechts auf **Hinzufügen**, gefolgt von **Mit Computer verbinden**. The Wallpaper Engine app will search your local network for running instances of Wallpaper Engine for Windows. Your Windows computer should appear after a few seconds, allowing you to connect to it by clicking on it. If you are connecting for the first time, you will be asked to enter the 4-digit PIN (see Windows section above).

<video height="590px" style="display:block;margin:0 auto;" controls autoplay loop>
  <source src="/videos/mobile_connect.mp4" type="video/mp4">
  Dein Browser unterstützt das Video-Tag nicht.
</video>

Once you have entered your PIN, the status bar in the mobile app turns green and shows which computer its connected to. On the Windows app, the **Mobile** button is also colored green now to indicate that a mobile connection is active.

By default, Wallpaper Engine will now always automatically connect to your computer if you start Wallpaper Engine on your mobile device and your computer at the same time.

## 4. Transferring Wallpapers to Your Mobile Device

Once the connection has been established, the **Mobile** button in the upper right corner turns green.

You can now simply click on the **Send to Mobile Device** button on the right-hand side or right-click on any compatible wallpaper and select **Send to Mobile Device**, followed by selecting your device from the list.

#### Scene Wallpapers

Dynamic and interactive wallpapers that are of the **Scene** type will first be optimized for use on mobile phones and to ensure compatibility with mobile hardware. This process may take a short while. You will also be asked which quality option you would like to use, especially for high-resolution wallpapers, we recommend trying the **Balanced** option if you notice performance issues on your mobile device.

<video width="100%" controls autoplay loop>
  <source src="/videos/mobile_transfer.mp4" type="video/mp4">
  Dein Browser unterstützt das Video-Tag nicht.
</video>

::: tip
You can also transfer multiple wallpapers at the same time by clicking on multiple wallpapers while holding the CTRL key on your keyboard.
:::

## Mobile Pairing Problem Solving

If you cannot pair your mobile device to your computer, a firewall or local network setting is very likely at fault. Check the following possible problem sources:

* Ensure that your phone and computer are connected to the same local network.
* Ensure no firewall is blocking Wallpaper Engine from communicating with your local network.
* Ensure your network router is not blocking your devices from communicating with each other.
    * Make sure your router is not blocking network traffic between devices.
    * Turn on **UPnP** (**"Universal Plug and Play"**) in your router settings.
* Disable any sort of VPN or proxy software on your computer and your mobile device which can interfere with the communication between your devices.
* Double-check that Wallpaper Engine on Windows and your mobile device are both up-to-date and running.

### Backup solution: Manually importing a Wallpaper File (.mpkg)

Should you be able unable to fix the connection between your computer and your mobile device, you can still manually transfer your wallpapers onto your mobile device. First, select the wallpapers you want to export in Wallpaper Engine, then right-click on them and select **Send to Mobile Device**, followed by clicking on **Export .mpkg**.

<video width="100%" controls autoplay loop>
  <source src="/videos/mobile_export.mp4" type="video/mp4">
  Dein Browser unterstützt das Video-Tag nicht.
</video>

Once Wallpaper Engine has created the .mpkg files for your wallpapers, you can either transfer them to your mobile device by moving the files onto your mobile device via USB or by copying the files onto an SD card. Alternatively you can also use any file sharing service on your mobile device or send them to yourself via a messaging service or even via email (if the file size is not a problem).

Once the files are on your mobile device, open up Wallpaper Engine on your mobile device and use the **Import File** functionality to directly import the .mpkg files into the app by selecting them from the directory that you have placed them in.