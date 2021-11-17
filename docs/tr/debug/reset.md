# Wallpaper Engine'i Tamamen Sıfırlama

Wallpaper Engine ile ilgili teknik sorunlar yaşıyorsanız, Wallpaper Engine kurulumunuzu tamamen sıfırlamak isteyebilirsiniz. Bozuk duvar kağıdı abonelikleri de dahil olmak üzere Wallpaper Engine'i nasıl tamamen sıfırlayabileceğiniz hakkında bu rehberi takip edin.

::: tehlike Virüs koruma uygulaması kullanıyorsanız önce burayo okuyun (Microsoft Defender hariç)

Karşılaştığımız sorunların büyük çoğunluğu Wallpaper Engine'i veya Steam'in çalışmasını yanlışlıkla engelleyen virüs koruma uygulamalarından kaynaklanır. Virüs koruma uygulamaları sıklıkla şunlara neden olur:

* Wallpaper Engine'in çökmesi
* Bozuk veya boş Wallpaper Engine kullanıcı arayüzü
* Wallpaper Engine, herhangi bir hata mesajı olmaksızın başlatılamıyor
* Wallpaper Engine kendi kendini yükleyemiyor veya güncelleyemiyor
* Bozuk veya erişilemeyen dosyalardan kaynaklanan diğer farklı sorunlar

**Bir virüs koruma uygulaması kullanıyorsanız, bu sayfada özetlenen adımlara geçmeden önce `wallpaper_engine` uygulamanın yükleme dizinini yok saydığından emin olun. Klasörleri tamamen hariç tutmak yolu için virüsten koruma ayarlarınızı kontrol edin.**

Çoğu virüs koruma uygulaması, Wallpaper Engine dosyalarını size haber vermeden engelleyebilir ve belirli Wallpaper Engine dosyaları kalıcı olarak engellenir.
:::

## Fully Uninstalling Wallpaper Engine

To fully uninstall Wallpaper Engine to clear any corrupted files:

1. If you have enabled the automatic startup functionality: Open the Wallpaper Engine settings, turn off the automatic startup at the top of the **General** tab in the Wallpaper Engine settings.
2. Open Steam and right-click on Wallpaper Engine, then select click on **Manage**, followed by **Uninstall**.
3. Navigate to the Wallpaper Engine installation directory and delete the remaining `wallpaper_engine` directory entirely. by default, it is located here:

* `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine`

If you have installed Wallpaper Engine in a different directory, please look for the `wallpaper_engine` directory there. Make sure the folder is entirely deleted to clear any invisible antivirus file locks or corrupted files.

You can now reinstall Wallpaper Engine. If you want to start from a clean slate, please read the next section on how to fully reset all your wallpaper subscriptions - this is not necessary in most cases.

## Resetting all Steam Workshop Subscriptions

If you are experiencing issues related to wallpaper downloads by Steam, you can try to do a full reset of your Steam Workshop subscriptions. In rare cases, this can help with broken Workshop subscriptions that are not visible in the app. If you notice that Steam keeps redownloading all your wallpapers or that Steam keeps downloading wallpapers that have been deleted from the Steam Workshop in the past, you can attempt a full reset.

Şu adımları takip edin:

1. Steam'i kapatın. **Optional:** Uninstall Wallpaper Engine first.
2. Open the Wallpaper Engine Steam Workshop website and log in to your Steam account:

* [Steam Workshop for Wallpaper Engine](https://steamcommunity.com/app/431960/workshop/)

3. On the right-hand side, hover over **Your files** and then **Subscribed Items**.
4. You will be presented a page with your subscriptions. Tüm Atölye aboneliklerinizi (gizli bozuk abonelikler dahil) temizlemek için sağ taraftaki **Tüm Abonelikten Çık** butonuna tıklayın.
5. **Steam'i yeniden başlatın**, abonelikleriniz artık sıfırlandı.
