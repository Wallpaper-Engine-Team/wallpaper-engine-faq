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

![Set the sampling rate to "24 bit, 44100 Hz"](./samplingrate.png)

### Razer headsets with THX

Change the audio input in Wallpaper Engine to the 'Speakers (Razer XYZ)' device. This option is in the general settings and any Razer headset with THX effects should work with this solution.

## 3. Conflicting applications

If you believe your audio settings are correct but audio responsive wallpapers do not react to audio, you most likely have sound hardware or software that disables the loopback recording feature on the entire PC. It needs to be configured correctly or removed:

* Nahimic
* Sonic Suite
* Alienware Audio
* Various other applications, especially pre-installed ones on notebooks

If you are unsure if you have any such applications installed, you can also use the Wallpaper Engine scan tool and it will report some programs which are known to cause these issues:

* [Wallpaper Engine Scan Tool](/debug/scantool.html)

