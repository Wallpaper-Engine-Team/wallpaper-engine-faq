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

Maalesef ki Steam indirme önbelleği her bozulduğunda bunu tekrarlamanız gerekir. Please keep in mind that we have not built Steam and cannot fix Steam ourselves.

## Reinstall Steam

The most reliable long-term fix for most users affected by this Steam bug regularly appears to be to reinstall Steam as some Steam files may simply be broken on your system. Try to reinstall Steam completely:

1. Uninstall Wallpaper Engine through Steam.
2. Uninstall Steam itself, make sure to follow the official guide:
  * [Uninstall Steam](https://support.steampowered.com/kb_article.php?ref=9609-OBMP-2526)
  * Specifically check the Manually Removing Steam section in the Steam Support article above and make a backup of your *steamapps* directory as described there to ensure you will not have to redownload all your games.

## Use local backups as a workaround

If the issue continues happening to you, you can also make local backups of all wallpapers and then unsubscribe from all wallpapers. Steam will not redownload wallpapers that you are not subscribed to, so the work-around is to simply only rely on local backups. You can find our guide on how to create backups here:

* [Using wallpaper backups](/steam/backup)

Afterwards, simply unsubscribe from all wallpapers. Make sure to not delete any files manually, Steam must delete the wallpaper files itself or it will attempt to redownload the wallpapers again just to delete the files on its own.