# Seç Çalmıyor / Ses Çıkışı Sorunları
Bu yardım rehberi, duvar kâğıtlarındaki ses çalma ile ilgili herhangi bir sorunu çözmenize yardımcı olacaktır. Öncelikle birkaç tanesini daha deneyerek gerçekten ses içeren bir duvar kâğıdı kullandığınızdan emin olmalısınız. Birçok duvar kâğıdı tamamen sessizdir. Duvar kâğıdınızın ses içerdiğinden eminseniz bu rehbere devam edin.

::: warning Lütfen unutmayın Sesiniz saniyeler içinde kapanıp tekrar açılıyorsa lütfen aşağıdaki yardım rehberini okuyun:

* [Ses aralıklarla açılıp kapanıyor](/audio/intermittent)
:::

## Wallpaper Engine'in kendini sessize almadığından emin olun
Uygulamada ses çıkışını kapatabileceğiniz üç yer vardır:

1. Wallpaper Engine ayarlarının **Genel** sekmesinde **Ses Çıkışı** denilen bir seçenek vardır. Bunun etkin olduğundan emin olun.
2. Wallpaper Engine ana penceresinin sağ üst köşesindeki **Ekranlar** tuşuna tıklayın. Buradan tüm ekranlarınıza genel bakış atabilirsiniz. Her ekranın sol alt köşesinde sessize alma tuşu bulunur. Ekranlarınızın sessize alınmadığından emin olun.
3. Bir duvar kâğıdı seçerken sağ taraftaki **Ses Düzeyi** seçeneğini göreceksiniz; bunun sıfırda veya düşük ses düzeyinde olmadığından emin olun. Seçenekte **Ekran ayarlarında ses etkisizleştirildi** yazıyorsa ekranınız sessize alınmıştır; 2. adımı tekrar edin ve ekranınızın sesini açın.

## Windows ses karıştırıcısını kontrol edin
Wallpaper Engine, tüm ses çıkışlarının Windows tarafından işlenmesine izin verir. Yani Wallpaper Engine'in kendisi sessizde değilse sorun muhtemelen Windows kurulumunuzla ilgilidir. Öncelikle Windows ses karıştırıcısını kontrol edin ve Wallpaper Engine'in aşağıdaki ekran görüntüsünde gösterildiği şekilde sessizde veya çok düşük bir ses düzeyinde olmadığından emin olun:

![Windows ses karıştırıcısında sesi artırın ve Wallpaper Engine'in sesini açın](./audiomixer.png)

## Seçili ses cihazını kontrol edin
Ses çıkışı olmamasının bir başka olası nedeni de Windows'un, Wallpaper Engine için yanlış ses çıkış cihazını seçmesi olabilir. Kullanmak istediğiniz ses çıkış cihazını manuel olarak zorlamayı deneyin:

1. Windows tepsisindeki saatin yanında bulunan ses simgesine sağ tıklayın ve **Ses ayarlarını aç**'ı seçin.
2. Açılan sayfanın en altına ilerleyin ve **Uygulama birimi ve cihaz tercihleri** seçeneğine tıklayın.
3. Ses çalan tüm uygulamaların bir listesi gösterilecektir. Wallpaper Engine'i bulun ve **Çıkış** sütunundan doğru ses çıkış cihazını seçin. Emin değilseniz tüm olası seçenekleri deneyin. Bu işlemin etkinleşmesi için Wallpaper Engine'in yeniden başlatılması gerekebilir.

Birden fazla ses cihazı kullanıyorsanız (özellikle USB veya Bluetooth ses cihazları kullanırken) ve bir cihazın bağlantısı kesildiğinde veya yeniden bağlandığında sesin kesildiğini fark ettiyseniz bunun nedeni Windows'un, bazen çalışan programlar için ses cihazlarını anında güvenilir bir şekilde değiştirmemesidir. Bu durum bizim tarafımızdan düzeltilemez. Bu gibi nadir durumlarda Windows'un ses çıkışını yeniden doğru şekilde işlemeye başlaması için Wallpaper Engine'i yeniden başlatmanız gerekebilir. Ayrıca herhangi bir ses sürücüsünü yeniden yükleyip güncellemeyi deneyerek bu tarz sorunların hafifleyip hafiflemediğine bakabilirsiniz.

## Tüm ses codec bileşenlerini sıfırlayın

Ses çıkışı bu noktada hala çalmıyorsa bazı ses codec bileşenleri bozuk olabilir. Bu genellikle **Video** türündeki duvar kâğıtları kullanılırken meydana gelir. Bunu Wallpaper Engine'deki duvar kâğıdınıza sağ tıklayarak ve **Dosya Gezgini'nde Aç**'ı seçerek bir kez daha kontrol edebilirsiniz. Burada kaynak video dosyasınız (genellikle bir **.mp4** dosyası) göreceksiniz; Windows Media Player ile bu dosyayı açın ve sesi çalıp çalmadığına bakın. **Lütfen unutmayın:** Bunu yalnızca Windows Media Player ile test etmeniz oldukça önemlidir. Temel ses codec bileşenleri Wallpaper Engine tarafından da kullanıldığı için bu testte diğer video oynatıcılarının kullanılması işe yaramaz. Windows Media Player'da hiçbir ses çalışmıyorsa bu durumda ya video dosyasının sesi yoktur ya da sisteminizdeki ses codec bileşenleri gerçekten bozuk veya eksiktir.

Bu durumda, sisteminizdeki tüm ses ve video codec bileşenlerini sıfırlamak için aşağıdaki sayfada açıklandığı şekilde *Codec Tweak Tool*'u kullanabilirsiniz. Sonrasında Wallpaper Engine'i yeniden başlatıp tekrar deneyin:

* [Videolar Siyah / Düzgün Oynatılmıyor - Codec Tweak Tool](/noshow/notplaying.html#codec-tweak-tool)

