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

![Raise volume and unmute Wallpaper Engine in the Windows audio mixer](./audiomixer.png)

## Seçili ses cihazını kontrol edin
Ses çıkışı olmamasının bir başka olası nedeni de Windows'un, Wallpaper Engine için yanlış ses çıkış cihazını seçmesi olabilir. Kullanmak istediğiniz ses çıkış cihazını manuel olarak zorlamayı deneyin:

1. Windows tepsisindeki saatin yanında bulunan ses simgesine sağ tıklayın ve **Ses ayarlarını aç**'ı seçin.
2. Açılan sayfanın en altına ilerleyin ve **Uygulama birimi ve cihaz tercihleri** seçeneğine tıklayın.
3. Ses çalan tüm uygulamaların bir listesi gösterilecektir. Wallpaper Engine'i bulun ve **Çıkış** sütunundan doğru ses çıkış cihazını seçin. Emin değilseniz tüm olası seçenekleri deneyin. Bu işlemin etkinleşmesi için Wallpaper Engine'in yeniden başlatılması gerekebilir.

Birden fazla ses cihazı kullanıyorsanız (özellikle USB veya Bluetooth ses cihazları kullanırken) ve bir cihazın bağlantısı kesildiğinde veya yeniden bağlandığında sesin kesildiğini fark ettiyseniz bunun nedeni Windows'un, bazen çalışan programlar için ses cihazlarını anında güvenilir bir şekilde değiştirmemesidir. Bu durum bizim tarafımızdan düzeltilemez. Bu gibi nadir durumlarda Windows'un ses çıkışını yeniden doğru şekilde işlemeye başlaması için Wallpaper Engine'i yeniden başlatmanız gerekebilir. You can also try and reinstall and update any audio drivers and see if that alleviates these types of issues.

## Reset all audio codecs

If audio output is still not playing at this point, some audio codecs may be broken, this is mainly relevant when using **Video** type wallpapers. You can double-check this by right-clicking on your wallpaper in Wallpaper Engine and selecting **Open in Explorer**. You should see the source video file (usually an **.mp4** file), open that file with Windows Media Player and check if it plays audio. **Please note:** It is very important that you test this with Windows Media Player only - other video players are irrelevant for this test as the underlying audio codecs are used by Wallpaper Engine as well. If no audio is playing in Windows Media Player, then either the video file does not have audio or the audio codecs on your system are indeed broken or missing.

In that case, you can use the *Codec Tweak Tool* as explained on the following page to reset all audio and video codecs on your system, afterwards restart Wallpaper Engine and try again:

* [Videos Black / Not Playing Properly - Codec Tweak Tool](noshow/notplaying.html#codec-tweak-tool)

