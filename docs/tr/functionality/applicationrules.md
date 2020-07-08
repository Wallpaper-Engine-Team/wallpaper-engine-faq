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

::: tip Wallpaper Engine yalnızca tam .exe adını önemser, konum önemli değildir. Bu nedenle *Uygulama ismi* alanına herhangi bir .exe adını yazabilirsiniz. Sadece büyük ve küçük harfler de dâhil olmak üzere .exe adının tam olarak eşleştiğinden emin olun. :::

### Uygulamalar veya oyunlarla ilgili performans sorunlarını çözme

Özel bir kurala sahip olmasını istediğiniz programın .exe dosyasını listeden seçin veya adını **Uygulama ismi** alanına yazın. Sonrasında **Koşul**'u **Çalışıyor** ve **Duvar kâğıdını oynatma**'yı **Dur (boş bellek)** olarak ayarlayın. Bu durumda uygulama veya oyun başlatıldığında Wallpaper Engine tüm duvar kâğıtlarını bellekten tamamen kaldıracaktır ve tüm uyumluluk sorunları çözülecektir.

### Arka plan kayıt araçlarıyla kesintili sesi düzeltme

Özel bir kurala sahip olmasını istediğiniz programın .exe dosyasını listeden seçin veya adını **Uygulama ismi** alanına yazın. Sonrasında **Koşul**'u **Ses oynatıyor** ve **Duvar kâğıdını oynatma**'yı **Çalıştırmaya devam et** olarak ayarlayın. Bu durumda söz konusu uygulama ses çalarken veya kayıt yaparken Wallpaper Engine kendisini sessize almayacaktır. Windows, ses çalma ve kayıt arasında ayrım gözetmez. Bu nedenle Wallpaper Engine, kayıt yapıyorsanız sürekli olarak sesi kapatır ve açar. Birçok oyun akış uygulaması bunu yanlışlıkla ve sizin bilginiz olmadan yapabilir.

### Diğer davranışlar

Daha fazla uygulama kuralı için olası tüm koşulları ve duvar kâğıdı oynatma seçeneklerini inceleyin. Ayrıca Wallpaper Engine'i belirli bir uygulamayı başlattığınızda sessize alacak veya duraklatacak şekilde de yapılandırabilirsiniz.

::: tip Ayrıca tüm bu uygulama ayarlarını, Wallpaper Engine ayarlarındaki **Performans** sekmesinden de değiştirebilirsiniz. Örneğin birden fazla oyunda performans sorunlarıyla karşılaşıyorsanız, **Diğer uygulamalar tam ekranken** seçeneğini **Dur (boş bellek)** olarak değiştirmek mantıklı olabilir. Bu durumda, oyun ya da tam ekran uygulama açtığınızda Wallpaper Engine kendisini kapatacaktır. :::
