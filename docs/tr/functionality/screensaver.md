# Wallpaper Engine ile Ekran koruyucu

Wallpaper Engine, duvar kâğıtlarınızı ekran koruyucu olarak kullanmanıza olanak sağlar. Geleneksel olarak, ekranları kalıcı görüntü yanmasından korumak için ekran koruyucular kullanılırdı. Ancak çoğu modern ekran teknolojisi artık bu tür ekran hasarlarından etkilenmez ve bu yüzden estetik amaçlar için herhangi bir duvar kâğıdını ekran koruyucu olarak güvenle kullanabilirsiniz. Yanıklara karşı hassas olan bir CRT, Plazma, OLED veya benzeri ekran teknolojisi kullanıyorsanız, ekran koruyucu olarak duvar kâğıtlarından oluşan bir oynatma listesi veya düzenli hareketli bir duvar kâğıdı kullanmanızı öneririz.

## Ekran Koruyucu Kurulumu

Wallpaper Engin'i ekran koruyucu olarak kullanmaya başlamak için Wallpaper Engine penceresindeki **Yüklü** sekmesinin üzerine gelin ve **Ekran Koruyucuyu Yapılandır** öğesini seçin. Wallpaper Engine, şimdi Windows'a Wallpaper Engin ekran koruyucu yükleyip yüklemediğinizi kontrol edecek. Ekran koruyucuyu henüz yüklemediyseniz, yüklemeniz istenecek. Windows kullanıcınızın yönetici haklarına sahip olduğuna ve hiçbir antivirüs programının Wallpaper Engin'in ekran koruyucuyu kurmasını engellemediğinden emin olun.

İlk yükleme sonrasında Windows ekran koruyucu ayarları otomatik olarak açılır, alternatif olarak **Ayarlar & Ön izleme** düğmesi veya Windows üzerinden ekran koruyucu ayarlarına doğrudan erişebilirsiniz.

## Ekran koruyucu Yapılandırması

### Windows Yapılandırması

Wallpaper Engine ekran koruyucunun çalışması için ilk önce **Windows ayarlarından** Wallpaper Engine'i etkin ekran koruyucunuz olarak seçmelisiniz. Windows ekran koruyucu ayarlarını, Windows kontrol paneli üzerinden veya Wallpaper Engine ekran koruyucu modundayken **Ayarlar & Ön izleme** seçeneklerine tıklayarak açabilirsin. Gerekli adımlar için aşağıdaki videoyu izleyin:

<video width="100%" controls autoplay loop>
  <source src="/videos/screensaver_setup.mp4" type="video/mp4">
  Tarayıcınız video etiketini desteklemiyor.
</video>

Windows ayarlarında, ekran koruyucu belirene kadar geçecek süreyi ve bilgisayarınıza döndüğünüzde size Windows kilit ekranının gösterilip gösterilmeyeceğini kontrol edebilirsiniz. Bu ayarlar tamamen Windows tarafından yönetilir, Wallpaper Engine ekran zaman aşımı ve benzeri şeyleri kontrol edemez.

### Wallpaper Engine Yapılandırması

Windows'ta ekran koruyucuyu kurduktan sonra, Wallpaper Engine ekran koruyucusunu yapılandırmaya başlayabilirsiniz. Duvar Kağıdı Motorunda **Yüklenenler** sekmesinin üzerine gelin ve **Ekran Koruyucuyu Yapılandır**'ı seçin. Wallpaper Engine artık duvar kâğıtları yerine ekran koruyucularınızı ön izleyecek. Ekran koruyucu modundan çıktığınızda duvar kâğıdı yapılandırmanıza geri döneceksiniz.

Wallpaper Engine, varsayılan durumunda ekran koruyucularınızın aktif olarak çalışan duvar kâğıtlarınızla tamamen aynı olan en temel kurulumu kullanır. Üstteki **Ekran Koruyucu** seçeneğini **Ayrı olarak yapılandırılmış** olarak değiştirerek bunu değiştirebilirsiniz. Bu seçenek etkinleştirildiğinde, ekran koruyucu olarak kullanılacak her ekran için bir duvar kâğıdı seçebilir veya ekran koruyucu kurulumunuz için tamamen farklı bir ekran profili veya oynatma listesi kullanabilirsiniz. Sol üst köşedeki kırmızı **Çıkış** düğmesini tıklayarak duvar kâğıdı yapılandırmasına istediğiniz zaman dönebilirsiniz.

## Ekran koruyucu Sorun Çözme

Wallpaper Engine ekran koruyucu Windows üzerinden etkinleştirilir, ekran koruyucu düzgün çalışmıyorsa, varsayılan Windows ekran koruyucularından herhangi birinin sizin için doğru çalışıp çalışmadığını görmek için lütfen iki kez kontrol edin. Ekran koruyucunuzun beklediğiniz doğru zaman aşımı ile yapılandırıldığından ve Wallpaper Engine'in etkin ekran koruyucunuz olarak ayarlandığından emin olmak için Windows ekran koruyucu ayarlarını ve Windows enerji ayarlarınızı kontrol edin.

Ekran koruyucu `C:\Windows\System32\wpxscreensaver64.scr` dizinine yüklenecek, hiçbir antivirüs uygulamasının bu dosyayı yanlışlıkla silmediğinden veya yüklenmesini engellemediğinden emin olun. Bu dosyayı silerek ekran koruyucuyu manuel olarak kaldırabilirsini ama bunu yaparken `System32` dizininden önemli Windows dosyalarını silmediğinizden emin olun.