# Mobile Pairing Problem Solving

::: tip
Connection still does not work after all of this? Scroll to the bottom of this page to see the manual backup solution to import wallpapers via USB or another method.
:::

If you cannot pair your mobile device to your computer, a firewall or local network setting is very likely at fault. Check the following possible problem sources:

* **Telefonunuzun ve bilgisayarınızın aynı yerel ağa bağlandığından emin olun.**
  * Your computer does not need wifi, it is still the same network even if it is connected through a network cable.
* **Hiçbir güvenlik duvarının Wallpaper Engine'ın yerel ağınızla iletişime geçmesine engel olmadığından emin olun.**
  * Wallpaper Engine sends a multi-casts on the network ports 7884 (UDP) and 7889 (TCP), make sure no firewall is blocking this.
* **Bilgisayarınızdaki ve mobil cihazınızdaki, cihazlarınız arasındaki iletişimi engelleyebilecek her türlü VPN veya proxy yazılımını devre dışı bırakın.**
* **Ağ yönlendiricinizin cihazlarınızın birbirleriye iletişime geçmesini engellemediğinden emin olun.**
    * Yönlendiricinizin cihazlar arasındaki ağ trafiğini engellemediğinden emin olun.
    * Yönlendirici ayarlarınızda **UPnP**'ı (**"Evrensel Tak ve Çalıştır"**) açın.
* **Hem Windows'daki hem de mobil cihazınızdaki Wallpaper Engine'ın güncel olduğunu ve çalışır durumda olup olmadığını kontrol edin.**

### Windows Firewall

Especially if your mobile device can find your computer but fails to connect to it, it's almost definitely caused by a firewall on your computer. When you first launch Wallpaper Engine, it will prompt you to grant it permission to your network. If you closed this window or did not specifically allow **ui32.exe** to communicate with your network, the Windows firewall will block Wallpaper Engine. Make sure to allow **ui32.exe** to communicate as shown in this screenshot:

![Windows Firewall Permissions](/img/faq/windows_defender.png)

Wallpaper Engine will automatically suggest firewall fixes if it detects any problems. This process is somewhat reliable but in some cases you may still need to manually clear any blocks you may have created in the past by accident.

If you have not granted Wallpaper Engine these permissions, the Windows firewall will automatically block Wallpaper Engine. Open the Windows firewall settings, then click on **Allow an app through firewall**. Search for an entry called **ui32** and either delete it or make sure both check marks in the *Private* and *Public* column are enabled, then confirm your changes and restart Wallpaper Engine.

Make sure to look for **ui32** or **Wallpaper Engine UI** - you may find entries called just **Wallpaper Engine** but these are irrelevant here.

**Please note:** This section is specifically only about the built-in Windows firewall, if you use any other antivirus app or firewall, you need to make sure Wallpaper Engine is not being blocked by them.

## Backup solution: Manually importing a Wallpaper File (.mpkg)

Should you be able unable to fix the connection between your computer and your mobile device, you can still manually transfer your wallpapers onto your mobile device. First, select the wallpapers you want to export in Wallpaper Engine, then right-click on them and select **Send to Mobile Device**, followed by clicking on **Export .mpkg**.

<video width="100%" controls autoplay loop>
  <source src="/videos/mobile_export.mp4" type="video/mp4">
  Tarayıcınız video etiketini desteklemiyor.
</video>

Once Wallpaper Engine has created the .mpkg files for your wallpapers, you can either transfer them to your mobile device by moving the files onto your mobile device via USB or by copying the files onto an SD card. Alternatively you can also use any file sharing service on your mobile device or send them to yourself via a messaging service or even via email (if the file size is not a problem).

Once the files are on your mobile device, open up Wallpaper Engine on your mobile device and use the **Import File** functionality to directly import the .mpkg files into the app by selecting them from the directory that you have placed them in.

::: danger
It is import that you place the .mpkg files in the **Downloads** folder on the mobile device. Android is very restrictive when it comes to letting apps access files. If you cannot find or open the .mpkg files on your device, try placing them in another directory, usually the **Downloads** folder is the most reliable choice for this.
:::