# Mobil Cihazı Windows ile eşleştirme

Mobil cihazlarınızı bilgisayarınızla eşleştirerek duvar kâğıdı koleksiyonunuzu mobil cihazınızdaki Wallpaper Engine tamamlayıcı uygulamasına kablosuz olarak aktarabilirsiniz.

Android uygulamasının doğrudan Atölye'ye bağlanmasını engelleyen teknik ve yasal sınırlamalar nedeniyle Android uygulamasının duvar kağıtlarını Atölye'den doğrudan indirmesi mümkün değildir.

::: ipucu Eşleştirme işe yaramazsa, mobil duvar kağıdı paketlerinin (**.mpkg**) nasıl oluşturulacağını ve bunları mobil cihazınıza nasıl aktaracağınızı öğrenmek için bu sayfanın altındaki **Yedekleme Çözümü** bölümüne bakın.
:::

[[toc]]

## 1. Ücretsiz Wallpaper Engine Android Arkadaş Uygulaması'nı yükleyin

Devam etmeden önce, Wallpaper Engine Android arkadaş uygulamasının en son sürümünü yüklediğinizden emin olun.

Uygulumayı resmi uygulama mağazasından indirmenizi öneririz ancak direkt olarak ana sayfamızdan da indirebilirsiniz. İndirme bağlantıları ve daha fazla bilgi için lütfen Android indirme sayfamıza bakın:

* [Android için Wallpaper Engine İndir](https://www.wallpaperengine.io/android/)

Güvenlik nedeniyle uygulamayı web sitemizde listelenmeyen herhangi bir kaynaktan yüklememenizi tavsiye ederiz.

## 2. Windows üzerinde Wallpaper Engine hazırlama

**Windows** uygulamasında kullanıcı arayüzünün sağ üst köşesinden **Mobil** butonuna tıklayın. Mobil cihaz genel bakışı açılır. Cihaz genel bakışında alt tarafta **yeni Cihaz Bağla** butonuna tıkla. Wallpaper Engine bir sonraki adımda size bir mobil cihaz eşlemek için kullanabileceğiniz 4 haneli bir PIN gösterecek.

<video width="100%" controls autoplay loop>
  <source src="/videos/mobile_pin.mp4" type="video/mp4">
  Tarayıcınız video etiketini desteklemiyor.
</video>

## 3. Mobil Cihazını Bağlama

Wallpaper Engine mobil tamamlayıcı uygulamasında sağ alt köşede **Ekle**'ye tıklayın, ardından **Bilgisayar ile Eşleştir**'e tıklayın. Wallpaper Engine uygulaması Windows için çalışan Wallpaper Engine uygulamaları için yerel ağınızı arar. Windows bilgisayarınız birkaç saniyenin ardından görünmeli ve üzerine tıklayarak bağlanmanıza izin vermeli. Eğer ilk kez bağlanıyorsanız 4 haneli PIN'i girmeniz istenecek (yukarıdaki Windows kısmına bakınız).

<video height="590px" style="display:block;margin:0 auto;" controls autoplay loop>
  <source src="/videos/mobile_connect.mp4" type="video/mp4">
  Tarayıcınız video etiketini desteklemiyor.
</video>

PIN'inizi girdikten sonra mobil uygulamadaki durum çubuğu yeşile döner ve hangi bilgisayara bağlandığını gösterir. Windows uygulamasında **Mobil** butonu da yeşile döner ve mobil bağlantının aktif olduğunu gösterir.

Wallpaper Engine'i mobil cihazınızda ve bilgisayarınızda aynı anda başlatırsanız, Wallpaper Engine artık her zaman bilgisayarınıza varsayılan olarak otomatik bağlanacaktır.

## 4. Duvar Kağıtlarını Mobil Cihazınıza Aktarma

Bağlantı kurulduktan sonra sağ üst köşedeki **Mobil** düğmesi yeşile döner.

Artık sağ taraftaki **Mobil Cihaza Gönder** seçeneğine tıklayabilir veya uyumlu herhangi bir duvar kağıdına sağ tıklayıp **Mobil Cihaza Gönder** seçeneğini seçebilir ve ardından listeden cihazınızı seçebilirsiniz.

#### Sahne Duvar Kâğıtları

**Sahne** türündeki dinamik ve interaktif duvar kağıtları, öncelikle cep telefonlarında kullanılması ve mobil donanımla uyumluluğunun sağlanması için optimize edilecektir. Bu işlem biraz zaman alabilir. Özellikle yüksek çözünürlüklü duvar kağıtları için hangi kalite seçeneğini kullanmak istediğiniz de sorulacak, mobil cihazınızda performans sorunları fark ederseniz **Dengeli** seçeneğini denemenizi öneririz.

<video width="100%" controls autoplay loop>
  <source src="/videos/mobile_transfer.mp4" type="video/mp4">
  Tarayıcınız video etiketini desteklemiyor.
</video>

::: ipucu Ayrıca, klavyenizdeki CTRL tuşuna basılı tutarken birden fazla duvar kağıdına tıklayarak birden fazla duvar kağıdını aynı anda aktarabilirsiniz.
:::

## Mobil Eşleme Sorun Çözme

Eğer mobil cihazınızı bilgisayarınızla eşleştiremiyorsanız büyük ihtimalle sebebi bir güvenlik duvarı veya yerel ağdır. Şu muhtemel sorun kaynaklarını kontrol edin:

* Telefonunuzun ve bilgisayarınızın aynı yerel ağa bağlandığından emin olun.
* Hiçbir güvenlik duvarının Wallpaper Engine'ın yerel ağınızla iletişime geçmesine engel olmadığından emin olun.
* Ağ yönlendiricinizin cihazlarınızın birbirleriye iletişime geçmesini engellemediğinden emin olun.
    * Make sure your router is not blocking network traffic between devices.
    * Turn on **UPnP** (**"Universal Plug and Play"**) in your router settings.
* Bilgisayarınızdaki ve mobil cihazınızdaki, cihazlarınız arasındaki iletişimi engelleyebilecek her türlü VPN veya proxy yazılımını devre dışı bırakın.
* Hem Windows'daki hem de mobil cihazınızdaki Wallpaper Engine'ın güncel olduğunu ve çalışır durumda olup olmadığını kontrol edin.

### Yedekleme çözümü: Bir Duvar Kâğıdı Dosyasını (.mpkg) manuel olarak içe aktarma

Bilgisayarınız ve mobil cihazınız arasındaki bağlantıyı düzeltemezseniz, duvar kâğıtlarınızı mobil cihazınıza manuel olarak aktarabilirsiniz. Öncelikle Wallpaper Engine'e dışa aktarmak istediğiniz duvar kâğıtlarını seçin ve ardından onlara sağ tıklayıp **Mobil Cihaza Gönder** diyerek **.mpkg'yi dışa aktar** seçeneğini seçin.

<video width="100%" controls autoplay loop>
  <source src="/videos/mobile_export.mp4" type="video/mp4">
  Tarayıcınız video etiketini desteklemiyor.
</video>

Wallpaper Engine, duvar kâğıtlarınız için .mpkg dosyalarını oluşturduktan sonra, dosyaları USB üzerinden mobil cihazınıza taşıyarak veya dosyaları bir SD karta kopyalayarak mobil cihazınıza aktarabilirsiniz. Alternatif olarak, mobil cihazınızdaki herhangi bir dosya paylaşım servisini kullanabilir veya bunları bir mesajlaşma servisi veya hatta e-posta yoluyla (dosya boyutu sorun değilse) kendinize gönderebilirsiniz.

Dosyaları mobil cihazınıza aldıktan sonra cihazınızdan Wallpaper Engine'i açın ve .mpkg dosyalarını yerleştirdiğiniz dizinden seçerek uygulamaya doğrudan aktarmak için **Dosyayı İçe Aktar** işlevini kullanın.