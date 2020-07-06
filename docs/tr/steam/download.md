---
tags:
  - kesinti
  - sunucu
  - indirmeler
  - ilerleme
  - atölye
  - bağlantı
---

# Steam Duvar Kâğıdı İndirme Sorunları

**Tüm indirmelerin Steam tarafından gerçekleştirildiğini** unutmayın. Wallpaper Engine yalnızca Steam indirme durumunu gösterir. Tüm indirme sorunları, doğrudan Wallpaper Engine ile ilgili değil, Steam'inizle ilgili konularla bağlantılıdır. Bu rehberde indirmelerle ilgili en yaygın sorunlar bir araya getirilmiştir. Sorunların ilk nedeni, çoğu durumda aşırı duyarlı antivirüs uygulamaları veya engellenmiş ağ bağlantı noktalarıdır.

Steam indirmeleriyle ilgili sorun yaşıyorsanız hiçbir antivirüs uygulamasının Steam'inizi engellemediğinden ve ağ yönlendiricilerinizdeki güvenlik duvarları da dâhil olmak üzere güvenlik duvarınızdaki gerekli tüm bağlantı noktalarının açık olduğundan emin olun.

::: ipucu Akıllı telefonunuzdaki mobil etkin noktasına geçerek ve bu şekilde bir duvar kâğıdı indirmeye çalışarak ağ yönlendiricinizin Steam indirmelerini engelleyip engellemediğini kolayca kontrol edebilirsiniz. :::

## Duvar kâğıdı indirirken %0 veya %100'de (veya herhangi bir yüzdede) takılı kalıyor
Steam dosyaları indirip doğrulamıyor. Steam indirmeleriniz belirli bir süre takılı kalıyorsa ve bir süre bekledikten sonra bile çalışmıyorsa şunları deneyin:

* Steam ayarlarından Steam'in indirme önbelleğini temizleyin:
  * [Steam İndirme önbelleğini temizle](https://support.steampowered.com/kb_article.php?ref=3134-TIAL-4638)
* Sonrasında Steam'deki Wallpaper Engine dosyalarını doğrulayın:
  * [Wallpaper Engine dosyalarını doğrula](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)
* Tüm indirmeler hâlâ takılı kalıyorsa: **Steam'i kapatın** ve sonra şu dizindeki **içerikleri silin**:
  * `C:\Program Files (x86)\Steam\steamapps\workshop\downloads`
    * Yüklü bir antivirüs uygulamanız varsa özellikle bu dizini hariç tuttuğundan emin olun
    * **Unutmayın:** `C:\Program Files (x86)\Steam` varsayılan Steam yoludur. Eğer bunu farklı bir yere kurduysanız orayı kontrol edin.
* Steam'i yeniden başlatın. Herhangi bir oyunu başlatmayın. İlerleme için Steam indirme sekmesine bakın ve duraklatılmış indirme işlemlerini devam ettirin.

::: detaylar Yukarıdaki adımlar indirme sorunlarınıza çözüm bulmadıysa daha fazla alternatif görmek için buraya tıklayın
* Herhangi bir antivirüs veya güvenlik duvarının Steam'i engellemediğinden emin olun. Antivirüs uygulama ayarlarınızda tüm Steam dizinini hariç tutun.
* İndirilemeyen duvar kâğıtlarının aboneliğinden çıkın ve Steam'i yeniden başlattıktan sonra bunlara tekrar abone olun.
* Steam ayarlarından farklı bir içerik sunucusu seçin. Bu seçenek, Steam ayarlarındaki "İndirilenler" sekmesinde bulunur.
* **Steam ayarlarından** zamana, bant genişliğine, uygulama içi olmaya bağlı olarak Steam indirmelerini kısıtlamadığınızdan emin olun.
* Steam'deki "İndirilenler" sekmesini açın (Kütüphane -> İndirilenler). Duraklatılmış indirmeleri arayın. Duraklatılmış varsa "Devam et"e tıklayın.
* Steam'de Wallpaper Engine'e sağ tıklayın, Özellikler ve ardından **Arka Plan İndirmelerine İzin Ver** seçeneklerine tıklayın.
* Steam'de bekleyen oyun güncellemeleriniz olmadığından emin olun. Bunlar duvar kâğıdı indirmelerini duraklatabilir veya devre dışı bırakabilir.
* Steam sunucu sorunları olması durumunda en az bir gün bekledikten sonra tekrar deneyin.
* **Son çare olarak** bozuk Steam dosyalarını temizlemek için Wallpaper Engine'i yeniden yüklemeye çalışın (bu işlem tüm duvar kâğıtlarını yeniden indirecektir!). :::

::: ipucu Steam sunucuları, bakım için her hafta belirli bir zamanda çevrimdışı olur:

* Amerika Birleşik Devletleri Batı Yakası: **Salı 16.00 (UTC - 7)**
* Orta Avrupa'da aynı saat: **Çarşamba 01.00 (UTC + 1)**
* Çin'de aynı saat: **Çarşamba 08.00 (UTC + 8)**

Bu yazıyı neredeyse haftanın bu zamanlarında okuyorsanız sunucular geçici olarak çevrimdışı olabilir. Birkaç saat bekleyip tekrar deneyin. :::

## Steam: "İndirilen Dosyalar Eksik" hatası

Steam bazı dosyaları indiremiyor. Bunun nedeni Steam'i engelleyen antivirüs uygulamaları veya herhangi bir şey olabilir. Bu sorun genellikle şu şekilde düzeltilebilir:

* Steam'i kapatın.
* Şu dizindeki içerikleri silin: `C:\Program Files (x86)\Steam\steamapps\workshop\downloads`
* Şu dizindeki içerikleri silin: `C:\Program Files (x86)\Steam\steamapps\downloading\431960`
  * **Unutmayın:** `C:\Program Files (x86)\Steam` varsayılan Steam yoludur. Eğer bunu farklı bir yere kurduysanız orayı kontrol edin.
* Steam'i başlatın ve Wallpaper Engine dosyalarını doğrulayın:
  * [Wallpaper Engine dosyalarını doğrula](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

Yüklü bir antivirüs uygulamanız varsa: Steam Atölye indirmelerini engellemesini önlemek için şu dizin için bir istisna yapılandırın: `C:\Program Files (x86)\Steam\steamapps\workshop\downloads`

#### İlgili makale: [Steam tüm duvar kâğıtlarını yeniden indirme](/steam/redownload)