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

## Duvar kağıdı indirirken %0 veya %100'de (veya herhangi bir yüzdede) takılı kalıyor
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
* Steam ayarlarından farklı bir içerik sunucusu seçin. Bu seçenek, Steam ayarlarındaki "İndirmeler" sekmesinde bulunur.
* **Steam ayarlarından** zamana, bant genişliğine, uygulama içi olmaya bağlı olarak Steam indirmelerini kısıtlamadığınızdan emin olun.
* Open the 'Downloads' tab in Steam (Library -> Downloads). Look for paused downloads. If you can see any, click on 'Resume'.
* Right-click Wallpaper Engine in Steam, then Properties, then select **Allow Background Downloads**.
* Make sure you do not have pending game updates in Steam, it could pause or disable wallpaper downloads.
* Try again after waiting at least for a day in case there are Steam server issues.
* **As a last resort**, try to re-install Wallpaper Engine to clear any broken Steam files (this will re-download all wallpapers!). :::

::: tip Steam servers go offline every week for maintenance at a fixed time:

* United States West Coast: **Tuesday at 4 pm (UTC - 7)**
* Same time in Central Europe: **Wednesday at 1 am (UTC + 1)**
* Same time in China: **Wednesday at 8 am (UTC + 8)**

If you are reading this while it is roughly this time of the week, it may be that the servers are temporarily offline. Wait one or two hours and try again. :::

## Steam: "Missing Downloaded Files" error

Steam is unable to download some files, this can be due to anti-virus applications blocking Steam or just absolutely random. It can usually be fixed this way:

* Turn off Steam.
* Delete the contents of this directory: `C:\Program Files (x86)\Steam\steamapps\workshop\downloads`
* Delete the contents of this directory: `C:\Program Files (x86)\Steam\steamapps\downloading\431960`
  * **Note:** `C:\Program Files (x86)\Steam` is the default Steam path, if you have installed it somewhere else, check there.
* Start Steam and verify the Wallpaper Engine files:
  * [Verify Wallpaper Engine files](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

If you have an antivirus-app installed: Configure an exception for this directory to prevent it from blocking Steam's Workshop downloads: `C:\Program Files (x86)\Steam\steamapps\workshop\downloads`

#### Related article: [Steam re-downloading all wallpapers](/steam/redownload)