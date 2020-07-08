# Ses görselleştiricileri çalışmıyor / ses algılanmıyor

Ses görselleştiricilerinin çalışmamasının birden çok nedeni olabilir. Bilinen tüm olası nedenleri burada listeliyoruz. Çalışmamasının olası nedenlerinden herhangi birini gözden kaçırmamak için lütfen tüm rehberi okuyun.

## 1. Ses cihazı kurulumu
Wallpaper Engine ayarlarına ve sonrasında "Genel" sekmesine gidin. Merkeze gelince bir ses giriş cihazı seçebileceğiniz "Medya" bölümünü bulabilirsiniz. Doğru cihazın seçili olduğundan emin olun. Hangi cihazın doğru olduğundan emin değilseniz ses görselleştiriciler çalışmaya başlayana kadar müzik dinleyerek tüm olası cihazları deneyin.

Doğru ses cihazı seçiliyse ancak yine de ses duyamıyorsanız veya ses görselleştiricileriniz çalışmıyorsa, Wallpaper Engine'in sesini Windows ses karıştırıcısında kapatmadığınızdan veya çok düşük bir sese ayarlamadığınızdan emin olun. Windows, ses kaydı ve ses çalma için sesler arasında ayrım gözetmez. Yani Windows'ta düşük bir ses seviyesi ayarladıysanız ses kaydı da çalışmayacaktır:

![Windows ses karıştırıcısında sesi artırın ve Wallpaper Engine'in sesini açın](./audiomixer.png)

Ses algılandıysa ancak çok azsa uygulama ses düzeyinin (müzik çalarınızın, web tarayıcınızın vb.), sesin ne kadar iyi tespit edildiğini etkilediğini aklınızda bulundurun. Uygulamanın ses düzeyini artırmak istemiyorsanız Wallpaper Engine ayarlarındaki "Genel" sekmesinden ses algılamayı artırabilirsiniz (varsayılan kayıt ses değeri 50'dir).

## 2. Donanımla ilgili sorunlar

### Corsair Void Pro / Bluetooth / USB kulaklıklar

USB / kablosuz kulaklıklar, ses sürücüsü sorunlarına eğilimlidir. Birçok cihazda Windows aygıt ayarlarındaki ses örnek hızını kalıcı olarak 44100 Hz olarak değiştirmek sorunu gidermektedir:

Windows'un sağ alt köşesinde bulunan alandaki ses simgesine sağ tıklayın, "Ses Ayarlarını Aç"ı seçin. Açılan penceredeki "Çıkış" bölümünde "Cihaz Özellikleri"ne tıklayın. Sonrasında "Ek cihaz özellikleri"ne ve ardından "Gelişmiş" sekmesine tıklayın. Buradaki menüden örnek hızını değiştirebilirsiniz. Tam konum, Windows'un farklı sürümlerinde farklılık göstermektedir. bu seçeneği bulamıyorsanız Windows sürümünüz için ses cihazlarının örnek hızını nasıl değiştireceğiniz konusunda internetteki yönergelere göz atın.

![Örnek hızını "24 bit, 44100" olarak ayarlayın](./samplingrate.png)

### THX'li razer kulaklıklar

Wallpaper Engine'deki ses girişini "Hoparlörler (Razer XYZ)" cihazı olarak değiştirin. Bu seçenek genel ayarlardadır ve THX efektli tüm Razer kulaklıklar bu çözümle çalışacaktır.

## 3. Çakışan uygulamalar

Ses ayarlarınızın doğru olduğunu ancak sese duyarlı duvar kâğıtlarının sese tepki vermediğini düşünüyorsanız muhtemelen tüm PC'deki geri döngü kayıt özelliğini devre dışı bırakan bir ses donanımı veya yazılımına sahipsiniz. Doğru şekilde yapılandırılması veya kaldırılması gerekir:

* Nahimic
* Sonic Suite
* Alienware Audio
* Diğer çeşitli uygulamalar, özellikle dizüstü bilgisayarlara önceden yüklenmiş olanlar

Bu tür uygulamaların yüklü olup olmadığından emin değilseniz Wallpaper Engine tarama aracını da kullanabilirsiniz. Bu araç, sorunlara neden olduğu bilinen bazı programları bildirecektir:

* [Wallpaper Engine Tarama Aracı](/debug/scantool.html)

