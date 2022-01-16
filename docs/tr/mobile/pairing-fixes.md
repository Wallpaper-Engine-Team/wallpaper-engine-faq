# Mobil Eşleme Sorun Çözme

::: tip Tüm bunlardan sonra bağlantı yine de çalışmıyor mu? Duvar kâğıtlarını USB veya başka bir yöntemle içe aktarmak üzere manuel yedekleme çözümünü görmek için bu sayfanın en altına gidin.
:::

Eğer mobil cihazınızı bilgisayarınızla eşleştiremiyorsanız büyük ihtimalle sebebi bir güvenlik duvarı veya yerel ağdır. Şu muhtemel sorun kaynaklarını kontrol edin:

* **Telefonunuzun ve bilgisayarınızın aynı yerel ağa bağlandığından emin olun.**
  * Bilgisayarınızın WIFI bağlantısına ihtiyacı yoktur, ağ kablosu ile bağlansa bile yine aynı ağ üzerindedir.
* **Hiçbir güvenlik duvarının Wallpaper Engine'ın yerel ağınızla iletişime geçmesine engel olmadığından emin olun.**
  * Wallpaper Engine uses the network ports 7884 (UDP) and 7889 (TCP), make sure no firewall is blocking them.
* **Bilgisayarınızdaki ve mobil cihazınızdaki, cihazlarınız arasındaki iletişimi engelleyebilecek her türlü VPN veya proxy yazılımını devre dışı bırakın.**
* **Ağ yönlendiricinizin cihazlarınızın birbirleriye iletişime geçmesini engellemediğinden emin olun.**
    * Yönlendiricinizin cihazlar arasındaki ağ trafiğini engellemediğinden emin olun.
    * Yönlendirici ayarlarınızda **UPnP**'ı (**"Evrensel Tak ve Çalıştır"**) açın.
* **Hem Windows'daki hem de mobil cihazınızdaki Wallpaper Engine'ın güncel olduğunu ve çalışır durumda olup olmadığını kontrol edin.**
* **If your computer never even becomes visible in the Android app:** It could be that a firewall is only blocking the broadcasts used to discover your device, you can attempt to directly enter the IP address of your computer. Navigate to the connection overview on your mobile device and click on the three dots in the upper right corner, then select **Enter IP manually**. You can now try to manually input the IP address of your computer. Make sure Wallpaper Engine is running on your computer and that you have opened the **Connect New Device** overview, otherwise a connection is not possible.

### Windows Güvenlik Duvarı

Özellikle mobil cihazınız bilgisayarınızı bulabiliyor ancak ona bağlanamıyorsa bunun nedeni neredeyse kesin olarak bilgisayarınızdaki güvenlik duvarıdır. Wallpaper Engine'i ilk kez başlattığınızda ağınızda ona izin vermenizi ister. Bu pencereyi kapattıysanız veya **ui32.exe**'nin ağınızla iletişim kurmasına özel olarak izin vermediyseniz Windows güvenlik duvarı Wallpaper Engine'i engeller. Bu ekran görüntüsünde gösterildiği gibi **ui32.exe**'nin iletişim kurmasına izin verdiğinizden emin olun:

![Windows Güvenlik Duvarı İzinleri](/img/faq/windows_defender.png)

Wallpaper Engine, bir sorun algılarsa otomatik olarak güvenlik duvarı düzeltmeleri tavsiye eder. Bu işlem güvenilir sayılır ancak bazı durumlarda geçmişte kazara oluşturmuş olabileceğiniz blokları manuel olarak temizlemeniz gerekebilir.

Wallpaper Engine'e bu izinleri vermediyseniz Windows güvenlik duvarı Wallpaper Engine'i otomatik olarak engeller. Windows güvenlik duvarı ayarlarını açın ve **Bir uygulamaya güvenlik duvarı üzerinden izin ver** seçeneğine tıklayın. **ui32** adlı bir girdiyi bulup silin veya *Özel* ve *Genel* sütunundaki her iki onay işaretinin de etkinleştirildiğinden emin olarak ardından onaylayın ve Wallpaper Engine'i yeniden başlatın.

**ui32** veya **Wallpaper Engine Arayüzünü** aramayı unutmayın; yalnızca **Wallpaper Engine** adlı girdiler bulabilirsiniz ancak bunlar, burada önem arz etmezler.

**Lütfen unutmayın:** Bu bölüm, özellikle yalnızca yerleşik Windows güvenlik duvarı ile ilgilidir ve başka bir virüsten koruma uygulaması veya güvenlik duvarı kullanıyorsanız Wallpaper Engine'in onlar tarafından engellenmediğinden de emin olmalısınız.

## Yedekleme çözümü: Bir Duvar Kâğıdı Dosyasını (.mpkg) manuel olarak içe aktarma

Bilgisayarınız ve mobil cihazınız arasındaki bağlantıyı düzeltemezseniz, duvar kâğıtlarınızı mobil cihazınıza manuel olarak aktarabilirsiniz. Öncelikle Wallpaper Engine'e dışa aktarmak istediğiniz duvar kâğıtlarını seçin ve ardından onlara sağ tıklayıp **Mobil Cihaza Gönder** diyerek **.mpkg'yi dışa aktar** seçeneğini seçin.

<video width="100%" controls autoplay loop>
  <source src="/videos/mobile_export.mp4" type="video/mp4">
  Tarayıcınız video etiketini desteklemiyor.
</video>

Wallpaper Engine, duvar kâğıtlarınız için .mpkg dosyalarını oluşturduktan sonra, dosyaları USB üzerinden mobil cihazınıza taşıyarak veya dosyaları bir SD karta kopyalayarak mobil cihazınıza aktarabilirsiniz. Alternatif olarak, mobil cihazınızdaki herhangi bir dosya paylaşım servisini kullanabilir veya bunları bir mesajlaşma servisi veya hatta e-posta yoluyla (dosya boyutu sorun değilse) kendinize gönderebilirsiniz.

Dosyaları mobil cihazınıza aldıktan sonra cihazınızdan Wallpaper Engine'i açın ve .mpkg dosyalarını yerleştirdiğiniz dizinden seçerek uygulamaya doğrudan aktarmak için **Dosyayı İçe Aktar** işlevini kullanın.

::: danger
.mpkg dosyalarını, mobil cihazda **İndirilenler** klasörüne yerleştirmeniz önemlidir. Uygulamaların dosyalara erişmesine izin verme konusunda Android oldukça kısıtlayıcıdır. Cihazınızda .mpkg dosyalarını bulamıyor veya açamıyorsanız bunları başka bir dizine yerleştirmeyi deneyin; genellikle **İndirilenler** klasörü bunun için en güvenilir seçimdir.
:::