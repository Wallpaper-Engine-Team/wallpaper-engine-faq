# Uygulamaya göre duvar kâğıdı seçimi

Wallpaper Engine, sisteminizde belirli bir .exe başlatıldığında otomatik olarak farklı duvar kâğıtlarını başlatmanıza olanak sağlar. Bu durum örneğin oyun oynarken daha az dikkat dağıtan duvar kâğıtları kullanmak istediğinizde veya müzik çalarınızı başlatırken otomatik olarak bir ses görselleştirici başlatmak istediğinizde faydalı olabilir.

::: tip
Belirli oyunlar veya uygulamalarla ilgili teknik sorunlar yaşıyorsanız belirli bir .exe başlatıldığında Wallpaper Engine'i devre dışı bırakmak için uygulama kurallarını da kullanabilirsiniz. Teknik bir sorunu farklı bir uygulamayla çözmek istiyorsanız şu rehbere göz atın: [Belirli uygulamalar veya oyunlarla ilgili sorunları giderme](/functionality/applicationrules.html)
:::

## Bir uygulama kuralı oluşturma

Wallpaper Engine ayarlarındaki **Performans** sekmesinden **Uygulama kuralları** bölümündeki **Düzenle** tuşuna tıklayın. Seçtiğiniz bir .exe'ye yeni bir duvar kâğıdı seti ayarlamak için **Yeni kural oluştur** seçeneğine tıklayın. **Uygulama ismi** giriş alanında .exe'nizin ismini girin ve ismin tam olarak eşleştiğinden emin olun. Örneğin: *musicplayer.exe*. **Koşul**'u **Çalışıyor** olarak ayarlayın. **Duvar kâğıdını oynatma** seçeneğinden aşağıdakilerden birini seçebilirsiniz:

* Duvar kâğıdını yükle
* Oynatma listesini yükle
* Profil yükle

Buradaki önemli nokta, **Duvar kâğıdını yükle** ve **Oynatma listesini yükle** seçeneklerinin her ikisinin de yalnızca bir duvar kâğıdı yüklemesi ve bunu tüm ekranlara dağıtmasıdır. Birden fazla monitörünüz varsa ve her ekran için bağımsız duvar kâğıtları (hatta her ekran için farklı oynatma listeleri) yüklemek istiyorsanız **Profil yükle** seçeneğini kullanmanız gerekir. Bunun nasıl ayarlanacağına dair daha fazla bilgi için aşağıdaki bölümü okuyun.

### Çoklu monitör profili oluşturma

Uygulama kurallarındaki **Profil Yükle** seçeneği, monitöre genel bakış (arayüzün sağ üst köşesindeki ekran simgesi) kısmından yapılandırılabilen çoklu monitör profillerini ifade etmektedir. Profil, mevcut olarak seçili tüm duvar kâğıtlarınız ve tüm ekranlarınızdaki oynatma listelerinin anlık görüntüsüdür. Bir profil yüklendiğinde tüm duvar kâğıtları ve oynatma listeleri profil yapılandırmasına göre yerleştirilir.

Duvar kâğıtlarınızı ve oynatma listelerinizi, tüm monitörlerde olmasını istediğiniz şekilde yapılandırın ve sonra monitör ayarlarındaki **Profili kaydet** tuşuna tıklayarak seçeceğiniz bir isimle mevcut kurulumu kaydedin. Kurulumuzdaki yapacağınız sonraki değişikliklerin, **Profili kaydet** tuşunu tekrar kullanana kadar profili değiştirmeyeceğini unutmayın. Birden fazla profil oluşturup bunları aynı anda birden fazla uygulamaya atayabilirsiniz. Örneğin **Müzik**, **Oyun** ve **Filmler** profillerini oluşturup her bir profili, bu kategorilerle eşleşen tüm .exe dosyalarına atayabilirsiniz.

<video width="100%" controls autplay loop>
  <source src="/videos/apprules.mp4" type="video/mp4">
  Tarayıcınız video etiketini desteklemiyor.
</video>