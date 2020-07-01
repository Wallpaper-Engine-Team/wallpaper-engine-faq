# Ses aralıklarla açılıp kapanıyor

Windows, kayıt ve ses çalma arasında ayrım gözetmez, bu nedenle Wallpaper Engine'e başka bir programın ses ürettiğini bildirir ancak aslında bilgisayarınızın sesini kaydediyordur.

Wallpaper Engine ayarlarındaki "Performans" sekmesine bakın. Eğer *"Diğer uygulamadan ses çalarken"* seçeneği *"Sessiz"*e ayarlanmışsa ve Wallpaper Engine'den gelen sesin kendini açıp kapadığını fark ederseniz arka planda ekranınızı ve sesi kaydeden bir kayıt programınız olabilir.

Bunu çözmek için şu üç şeyden birini yapın:

* Masaüstünüzdeki kayıt programını kapatın veya Wallpaper Engine'i yanlışlıkla kaydetmeyecek şekilde yeniden yapılandırın.
    * Birçok kullanıcı için bu sorunun nedeni **Nvidia Share / Nvidia GameStream / Nvidia ShadowPlay**'dir ve bu da **Nvidia GeForce Experience** ayarlarından kapatılabilir. AMD grafik kartı kullanıcıları için **AMD ReLive** aynı şekilde bu sorunlara neden olabilir ve bu da AMD grafik kartı sürücülerinin bir parçasıdır. Masaüstünüzü neyin kaydettiğinden emin değilseniz önce bunu kontrol edin.
    * Buna hangi uygulamanın neden olduğunu bilmiyorsanız Windows ses karıştırıcınızı kontrol edin ve şu anda sesinize hangi uygulamaların eriştiğine bakın, bu da size yardımcı olabilir. Alternatif olarak mümkün olduğunca programı kapatın ve Windows görev yöneticisi işlem listesinden belirli .exe dosyalarına sınırlandırın.
* Arka plan ses kaydı kasıtlıysa veya kapatmanın bir yolunu bulamıyorsanız Wallpaper Engine ayarlarındaki "Performans" sekmesinde bir *uygulama kuralı* belirleyebilirsiniz. "Koşul"u "Ses oynatıyor olarak ve "Duvar kâğıdı oynatma"yı "Çalıştırmaya Devam Et" olarak ayarlayın:

![Uygulama Kurallarına Wallpaper Engine ayarlarındaki "Performans" sekmesinden ulaşabilirsiniz](./applicationrule.png)

Sorumlu .exe ile sınırlandırana kadar bazı .exe dosyalarını görev yöneticisinde bulabileceğiniz .exe dosyalarıyla değiştirin.

* Lastly, you can also change the option 'other application playing audio' to 'keep running'. However, this means Wallpaper Engine will not automatically mute audio output from wallpapers when you listen to music or watch videos that are not full-screen.
