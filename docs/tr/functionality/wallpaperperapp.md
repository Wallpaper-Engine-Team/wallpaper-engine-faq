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

What is important to note here is that **Load wallpaper** and **Load playlist** will both only load one wallpaper and span it across all screens. If you have multiple monitors and want to load independent wallpapers for each screen (or even different playlists on each screen), you need to use the **Load Profile** option. Read the following section for more infos on how to set this up.

### Setting up a multi-monitor profile

**Load Profile** in the application rules refers to mulit-monitor profiles which can be configured in the monitor overview (screen icon in the upper right corner of the interface). A profile is a snapshot of all your currently selected wallpapers and playlists across all your screens. Whenever a profile is loaded, all wallpapers and playlists will be placed according to the profile configuration.

Configure your wallpapers and playlists across all monitors the the way you want them to be, then click on the **Save profile** button in the monitor settings and save the current setup under a name of your choice. Keep in mind that any subsequent changes you make to your setup will not change the profile until you use the **Save profile** button again. You can set up multiple profiles and assign them to multiple apps at once. For example, you may create a **Music**, a **Gaming** and a **Movies** profile and then assign each profile to all .exe files that match these categories.

<video width="100%" controls autplay loop>
  <source src="/videos/apprules.mp4" type="video/mp4">
  Tarayıcınız video etiketini desteklemiyor.
</video>