---
tags:
  - indirme
  - yeniden indirme
  - silinmiş
  - silmeler
---

# Steam duvar kâğıtlarını yeniden indiriyor

Steam'in indirme önbelleği bozuldu ve şimdi tüm dosyaları yeniden indiriyor (özel bir nedeni yok, yani Steam düzgün kapanmak yerine çöküyor). Bunun nedeni Wallpaper Engine değildir, bu nedenle Wallpaper Engine üzerinden düzeltilemez. Steam'deki tüm Atölye uygulamaları bu Steam hatasıyla karşılaşabilir. Bu sorunu sıkça yaşıyorsanız alternatif çözüm yolları vardır:

## Steam'i otomatik olarak onar
Steam'in bu sorunu durdurmasını sağlamak için kullanabileceğiniz (umarız) otomatik bir Steam onarıcısı yaptık! Şu adımları takip edin:
* Steam'i kapatın
* `wallpaper_engine` yükleme dizinine gidin
  * Varsayılan konum: `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine`
* `wallpaper_engine\bin\steamredownloadfixer32.exe`'yi çalıştırın
  * Araç size herhangi bir hata mesajı veriyorsa lütfen bize bir e-posta gönderin ve geliştirip geliştiremeyeceğimize bakalım
* Steam'i yeniden başlatın ve Wallpaper Engine dosyalarını doğrulayın:
  * [Wallpaper Engine dosyalarını doğrula](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

Maalesef ki Steam indirme önbelleği her bozulduğunda bunu tekrarlamanız gerekir. Steam'i biz yapmadığımız için buradaki sorunları düzeltemeyeceğimizi lütfen unutmayın.

## Steam'i yeniden yükleyin

Bazı Steam dosyaları sisteminizde bozulmuş olabileceği için bu Steam hatasından etkilenen çoğu kullanıcı için en güvenilir ve uzun vadeli düzeltme genellikle Steam'i yeniden yüklemektir. Steam'i tamamen yeniden yüklemeyi deneyin:

1. Steam üzerinden Wallpaper Engine'i kaldırın.
2. Steam'in kendisini kaldırın, resmî kılavuzu takip ettiğinizden emin olun:
  * [Steam'i kaldırın](https://support.steampowered.com/kb_article.php?ref=9609-OBMP-2526)
  * Özellikle yukarıda bulunan Steam Desteği makalesindeki Steam'i Manuel Olarak Kaldırma bölümüne göz atın ve tüm oyunlarınızı yeniden indirmek zorunda kalmamak için burada tarif edildiği şekilde *steamapps* dizininizin bir yedeğini oluşturun.

## Alternatif çözüm olarak yerel yedeklemeleri kullanma

Sorun devam ederse tüm duvar kâğıtlarının yerel yedeklemelerini oluşturabilir ve daha sonra bunların aboneliğinden çıkabilirsiniz. Steam, abone olmadığınız duvar kâğıtlarını yeniden indirmeyecektir. Bu nedenle çözüm yalnızca yerel yedeklemelere bağlıdır. Yedek oluşturma hakkındaki rehberimize buradan ulaşabilirsiniz:

* [Duvar kâğıdı yedeklemelerini kullanma](/steam/yedek)

Sonrasında tüm duvar kâğıtlarının aboneliğinden çıkın. Hiçbir dosyayı manuel olarak silmeyin. Duvar kâğıdı dosyalarını Steam silmelidir, aksi hâlde dosyaları kendisi silmek için duvar kâğıtlarını tekrar indirmeyi deneyecektir.