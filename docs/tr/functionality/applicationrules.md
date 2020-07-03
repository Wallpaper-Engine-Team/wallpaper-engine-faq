---
tags:
  - uygulama
  - kurallar
  - istisna
  - güvenilir adresler
  - kara liste
  - gecikmeler
  - gecikmeli
  - oyun
  - performans
  - fps
  - çökme
  - ses
  - müzik
  - aralıklı
---

# Belirli uygulamalar veya oyunlarla ilgili sorunları giderme

Belirli uygulamalar veya oyunlarla ilgili sorun yaşıyorsanız Wallpaper Engine'in örneğin sorun yaşadığınız uygulamanın başlatıldığını veya ses çaldığını tespit ettiğinde belirli bir şekilde davranması için Wallpaper Engine'i yapılandırabilirsiniz.

## Uygulama kuralı oluşturma

Wallpaper Engine ayarlarında, *Performans* sekmesindeki *Uygulama Kuralları* etiketinin yanında bulunan *Düzenle* tuşuna tıklayarak ayarladığınız tüm özel kurallara göz atabilirsiniz. Belirli bir uygulama için *Yeni kural oluştur*'a tıklayarak Wallpaper Engine'e belirli bir davranış atayabilirsiniz.

![Uygulama Kurallarına Genel Bakış](./applicationrule.gif)

Sisteminizde çalışan tüm .exe dosyalarının bir listesi sunulur. Listeden bir .exe seçebilir veya sorun yaşadığınız .exe'nin tam adını yazabilirsiniz. Koşul ve davranışı diğer iki seçenekle yapılandırabilirsiniz. Daha fazla bilgi ve somut örnek için aşağıya bakın.

::: ipucu Wallpaper Engine yalnızca tam .exe adını önemser, konum önemli değildir. Bu nedenle *Uygulama ismi* alanına herhangi bir .exe adını yazabilirsiniz. Sadece büyük ve küçük harfler de dâhil olmak üzere .exe adının tam olarak eşleştiğinden emin olun. :::

### Uygulamalar veya oyunlarla ilgili performans sorunlarını çözme

Select the .exe of the program you want to have a special rule for from the list or type it into the **Application name** field. Afterwards, set **Condition** to **Is running** and **Wallpaper playback** to **Stop (free memory)**. This means Wallpaper Engine will completely remove all wallpapers from memory when the application or game is launched, which means any compatibility issues will be resolved.

### Fixing intermittent sound with background recording tools

Select the .exe of the program you want to have a special rule for from the list or type it into the **Application name** field. Afterwards, set **Condition** to **Is playing audio** and **Wallpaper playback** to **Keep running**. This means Wallpaper Engine will not mute itself when the application in question is playing or recording audio. Windows does not differentiate between playing or recording audio, this is why Wallpaper Engine will constantly mute and unmute itself if you are recording it. Many game streaming applications can do this by accident and without your knowledge.

### Other behavior

Check out all possible conditions and wallpaper playback options for more types of application rules. You can also configure Wallpaper Engine to mute or pause when you launch a certain application.

::: tip You can also change these settings for all applications in the **Performance** tab of the Wallpaper Engine settings. If you are having performance issues in multiple games, for example, it may make sense to just change the **Other applications fullscreen** option to **Stop (free memory)** so that Wallpaper Engine will turn itself off when you launch any game or fullscreen application. :::