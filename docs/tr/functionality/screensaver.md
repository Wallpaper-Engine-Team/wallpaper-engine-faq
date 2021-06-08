# Wallpaper Engine ile Ekran koruyucu

Wallpaper Engine, duvar kâğıtlarınızı ekran koruyucu olarak kullanmanıza olanak sağlar. Geleneksel olarak, ekranları kalıcı görüntü yanmasından korumak için ekran koruyucular kullanılırdı. Ancak çoğu modern ekran teknolojisi artık bu tür ekran hasarlarından etkilenmez ve bu yüzden estetik amaçlar için herhangi bir duvar kağıdını ekran koruyucu olarak güvenle kullanabilirsiniz. Yanıklara karşı hassas olan bir CRT, Plazma, OLED veya benzeri ekran teknolojisi kullanıyorsanız, ekran koruyucu olarak duvar kağıtlarından oluşan bir oynatma listesi veya düzenli hareketli bir duvar kağıdı kullanmanızı öneririz.

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

Wallpaper Engine, varsayılan durumunda ekran koruyucularınızın aktif olarak çalışan duvar kâğıtlarınızla tamamen aynı olan en temel kurulumu kullanır. You can change this by changing the **Screensaver is** option to **Configured separately** at the top. With that option enabled, you can choose a wallpaper for each screen which is to be used as a screensaver or even use a completely different display profile or playlists for your screensaver setup. You can always return to the wallpaper configuration by clicking on the red **Quit** button in the upper left corner.

## Screensaver Problem Solving

The Wallpaper Engine screensaver is activated through Windows itself, if the screensaver is not working correctly, please double-check to see if any of the default Windows screensavers work correctly for you. Check the Windows screensaver settings and your Windows energy settings to make sure that your screensaver is configured with the correct timeout that you expect and that Wallpaper Engine is set as your active screensaver.

The screensaver will be installed in `C:\Windows\System32\wpxscreensaver64.scr`, make sure no antivirus app is deleting this file by mistake or preventing it from being installed. You can also manually uninstall the screensaver by deleting that specific file, but be sure to not delete any other important Windows files in the `System32` directory when doing so.