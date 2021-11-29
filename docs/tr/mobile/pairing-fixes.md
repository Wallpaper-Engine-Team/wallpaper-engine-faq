## Mobil Eşleme Sorun Çözme

Eğer mobil cihazınızı bilgisayarınızla eşleştiremiyorsanız büyük ihtimalle sebebi bir güvenlik duvarı veya yerel ağdır. Şu muhtemel sorun kaynaklarını kontrol edin:

* **Telefonunuzun ve bilgisayarınızın aynı yerel ağa bağlandığından emin olun.**
  * Your computer does not need wifi, it is still the same network even if it is connected through a network cable.
* **Hiçbir güvenlik duvarının Wallpaper Engine'ın yerel ağınızla iletişime geçmesine engel olmadığından emin olun.**
  * Wallpaper Engine sends a multi-casts on the network ports 7884 (UDP) and 7889 (TCP), make sure no firewall is blocking this.
* **Bilgisayarınızdaki ve mobil cihazınızdaki, cihazlarınız arasındaki iletişimi engelleyebilecek her türlü VPN veya proxy yazılımını devre dışı bırakın.**
* **Ağ yönlendiricinizin cihazlarınızın birbirleriye iletişime geçmesini engellemediğinden emin olun.**
    * Yönlendiricinizin cihazlar arasındaki ağ trafiğini engellemediğinden emin olun.
    * Yönlendirici ayarlarınızda **UPnP**'ı (**"Evrensel Tak ve Çalıştır"**) açın.
* **Hem Windows'daki hem de mobil cihazınızdaki Wallpaper Engine'ın güncel olduğunu ve çalışır durumda olup olmadığını kontrol edin.**

## Windows Firewall

Especially if your mobile device can find your computer but fails to connect to it, it's almost definitely caused by a firewall on your computer. When you first launch Wallpaper Engine, it will prompt you to grant it permission to your network. If you closed this window or did not specifically allow **ui32.exe** to communicate with your network, the Windows firewall will block Wallpaper Engine. Make sure to allow **ui32.exe** to communicate as shown in this screenshot:

![Windows Firewall Permissions](/img/faq/windows_defender.png)

Wallpaper Engine will automatically suggest firewall fixes if it detects any problems. This process is somewhat reliable but in some cases you may still need to manually clear any blocks you may have created in the past by accident.

If you have not granted Wallpaper Engine these permissions, the Windows firewall will automatically block Wallpaper Engine. Open the Windows firewall settings, then click on **Allow an app through firewall**. Search for an entry called **ui32** and either delete it or make sure both check marks in the *Private* and *Public* column are enabled, then confirm your changes and restart Wallpaper Engine.

Make sure to look for **ui32** or **Wallpaper Engine UI** - you may find entries called just **Wallpaper Engine** but these are irrelevant here.

**Please note:** This section is specifically only about the built-in Windows firewall, if you use any other antivirus app or firewall, you need to make sure Wallpaper Engine is not being blocked by them.

### Yedekleme çözümü: Bir Duvar Kâğıdı Dosyasını (.mpkg) manuel olarak içe aktarma

Bilgisayarınız ve mobil cihazınız arasındaki bağlantıyı düzeltemezseniz, duvar kâğıtlarınızı mobil cihazınıza manuel olarak aktarabilirsiniz. Öncelikle Wallpaper Engine'e dışa aktarmak istediğiniz duvar kâğıtlarını seçin ve ardından onlara sağ tıklayıp **Mobil Cihaza Gönder** diyerek **.mpkg'yi dışa aktar** seçeneğini seçin.

<video width="100%" controls autoplay loop>
  <source src="/videos/mobile_export.mp4" type="video/mp4">
  Tarayıcınız video etiketini desteklemiyor.
</video>

Wallpaper Engine, duvar kâğıtlarınız için .mpkg dosyalarını oluşturduktan sonra, dosyaları USB üzerinden mobil cihazınıza taşıyarak veya dosyaları bir SD karta kopyalayarak mobil cihazınıza aktarabilirsiniz. Alternatif olarak, mobil cihazınızdaki herhangi bir dosya paylaşım servisini kullanabilir veya bunları bir mesajlaşma servisi veya hatta e-posta yoluyla (dosya boyutu sorun değilse) kendinize gönderebilirsiniz.

Dosyaları mobil cihazınıza aldıktan sonra cihazınızdan Wallpaper Engine'i açın ve .mpkg dosyalarını yerleştirdiğiniz dizinden seçerek uygulamaya doğrudan aktarmak için **Dosyayı İçe Aktar** işlevini kullanın.