# Albüm Kapağı & Medya Veri Özelliği

Wallpaper Engine, duvar kağıdı yaratıcılarının duvar kağıtlarına; duvar kağıdındaki albüm kapağını, şarkı adını, albüm adını ve daha fazlasını kullanacak özel öğeler eklemesine olanak tanır. Bu rehber, bu özellikteki genel sorunları nasıl çözeceğinizi anlatır.

::: warning Lütfen unutmayın
Bu makale, albüm kapakları ve şarkı bilgileri için belirli bir duvar kağıdı özelliği ile ilgilidir. Ses görselleştiricilerle ilgili sorun yaşıyorsanız veya sesli görselleştiricileri medya yürütücünüzle sınırlamak istiyorsanız, lütfen bunun yerine uygun makaleleri kullanın:

* [Ses görselleştiricilerini müzik çalarlarla sınırlama](/audio/limittomusicplayer)
* [Ses görselleştiricileri çalışmıyor / ses algılanmıyor](/audio/audiodetection)
:::

<video width="100%" controls autoplay loop>
  <source src="/videos/media_controls.mp4" type="video/mp4">
  Tarayıcınız video etiketini desteklemiyor.
</video>

*Wallpaper Engine, sol üst köşede gösterilen Windows medya katmanından albüm kapağı ve şarkı verilerini alır.*

## Albüm Kapağı & Medya Veri Özelliği Etkinleştiriliyor

Bu özelliğin çalışması için aşağıdaki koşulların karşılandığından emin olmanız gerekir:

1. Windows 10 veya daha yeni sürümünü kullanıyorsunuz.
2. Wallpaper Engine ayarlarının **Genel** sekmesinde **Medya entegrasyonu desteği** seçeneğini etkinleştirdiniz.
3. Medya yürütücünüz, Windows medya katmanına medya verileri sağlar (yukarıda gösterilmiştir). Aşağıda daha fazla bilgi bulabilirsiniz.
4. Ses dosyalarınız, albüm kapaklarını ve medya verilerini (şarkı adı, sanatçı adı, albüm adı vb.) içerir.

### Medya Oynatıcınız Yapılandırılıyor

Çoğu modern medya oynatıcılar bu özelliğin çalışması için gerekli olan Windows medya yerleşimini destekler. Bazen önce etkinleştirmeniz gerekir. Medya yürütücünüzün ayarlarını açın ve uygun seçeneği arayın (bazen gelişmiş ayarlarda da gizlenir). Seçenek genellikle bir *"medya yerleşimi"* veya *"medya kısayol tuşlarından"* bahseder. Emin değilseniz, medya yürütücünüzün adını ve *"medya yerleşimi"* gibi sözcükleri içeren bir web araması yapın.

## Web Tarayıcıları gibi Uygulamaları Albüm Kapağı Özelliğinden Hariç Tutma

Web tarayıcınızın veya sisteminizdeki başka bir uygulamanın albüm kapağı özelliğini engellemeye başladığını fark ederseniz, bunu engellenen medya listesine ekleyebilirsiniz. Wallpaper Engine ayarlarının **Genel** sekmesini açın, **Windows** bölümüne gidin ve **Medya engel listesi** seçeneğinin yanındaki **Düzenle** düğmesine tıklayın. Söz konusu uygulamanın albüm kapağı özelliğine müdahale ettiğinden emin olduktan sonra artık engellenenler listesinde öneri olarak görünür. Uygulamanın yanındaki **Engelle** düğmesine tıklayın, artık albüm kapağı özelliğine müdahale etmeyi bırakmalıdır.