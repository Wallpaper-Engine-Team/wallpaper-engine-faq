# Mobil Cihazı Windows ile eşleştirme

Mobil cihazlarınızı bilgisayarınızla eşleştirerek duvar kâğıdı koleksiyonunuzu mobil cihazınızdaki Wallpaper Engine tamamlayıcı uygulamasına kablosuz olarak aktarabilirsiniz. Android uygulamasının duvar kağıtlarını direkt olarak Steam Atölyesi üzerinden indirmek mümkün değildir çünkü yalnızca Steam'in kendisi duvar kağıtlarını indirebilir.

Should you run into any problems with pairing your mobile devices, you can still import wallpapers by manually exporting the **.mpkg** that the Wallpaper Engine mobile app uses to render wallpapers.

### Windows üzerinde Wallpaper Engine hazırlama

**Windows** uygulamasında kullanıcı arayüzünün sağ üst köşesinden **Mobil** butonuna tıklayın. Mobil cihaz genel bakışı açılır. Cihaz genel bakışında alt tarafta **yeni Cihaz Bağla** butonuna tıkla. Wallpaper Engine size, bir mobil cihaz eşlemek için kullanabileceğin 4 haneli bir PIN gösterecek.

![Mobil PIN](/img/faq/mobile_pin.gif)

### Mobil Cihazını Bağlama

Wallpaper Engine mobil tamamlayıcı uygulamasında sağ alt köşede **Ekle**'ye tıklayın, ardından **Bilgisayar ile Eşleştir**'e tıklayın. Wallpaper Engine uygulaması Windows için çalışan Wallpaper Engine uygulamaları için yerel ağınızı arar. Windows bilgisayarınız birkaç saniyenin ardından görünmeli ve üzerine tıklayarak bağlanmanıza izin vermeli. Eğer ilk kez bağlanıyorsanız 4 haneli PIN'i girmeniz istenecek (yukarıdaki Windows kısmına bakınız). PIN, yetkili olmayan kullanıcıların sizin bilginiz olmadan bilgisayarınıza bağlanamaması için koyulmuş bir ek güvenlik önlemidir.

PIN'inizi girdikten sonra mobil uygulamadaki durum çubuğu yeşile döner ve hangi bilgisayara bağlandığını gösterir. Windows uygulamasında **Mobil** butonu da yeşile döner ve mobil bağlantının aktif olduğunu gösterir.

![Mobil PIN](/img/faq/mobile_pair.gif)

## Mobil Eşleme Sorun Çözme

Eğer mobil cihazınızı bilgisayarınızla eşleştiremiyorsanız büyük ihtimalle sebebi bir güvenlik duvarı veya yerel ağdır. Şu muhtemel sorun kaynaklarını kontrol edin:

* Telefonunuzun ve bilgisayarınızın aynı yerel ağa bağlandığından emin olun.
* Hiçbir güvenlik duvarının Wallpaper Engine'ın yerel ağınızla iletişime geçmesine engel olmadığından emin olun.
* Ağ yönlendiricinizin cihazlarınızın birbirleriye iletişime geçmesini engellemediğinden emin olun.
* Disable any sort of VPN or proxy software on your computer and your mobile device which can interfere with the communication between your devices.
* Hem Windows'daki hem de mobil cihazınızdaki Wallpaper Engine'ın güncel olduğunu ve çalışır durumda olup olmadığını kontrol edin.

## Backup solution: Manually importing a Wallpaper File (.mpkg)

Should you be able unable to fix the connection between your computer and your mobile device, you can still manually transfer your wallpapers onto your mobile device. First, select the wallpapers you want to export in Wallpaper Engine, then right-click on them and select **Send to Mobile Device**, followed by clicking on **Export .mpkg**.

Once Wallpaper Engine has created the .mpkg files for your wallpapers, you can either transfer them to your mobile device by moving the files onto your mobile device via USB or by copying the files onto an SD card. Alternatively you can also use any file sharing service on your mobile device or send them to yourself via a messaging service or even via email (if the file size is not a problem).

Once the files are on your mobile device, open up Wallpaper Engine on your mobile device and use the **Import File** functionality to directly import the .mpkg files into the app by selecting them from the directory that you have placed them in.