# Performans sorunları / belirli oyunlar veya uygulamalarda düşük FPS

Varsayılan ayar olarak Wallpaper Engine siz oyundayken kendini durdurur. Bu özelliği Wallpaper Engine ayarlarında bulunan **Performans** sekmesinden yapılandırabilirsiniz.

Belirli oyunlarda veya uygulamalarda performans sorunları yaşıyorsanız bu davranışa ince ayar uygulayabilirsiniz. Genellikle performans sorunları, sisteminizde RAM veya Video RAM'in azaldığı anlamına gelir (grafik kartınızdaki bellek). Wallpaper Engine ayarlarında bulunan **Performans** sekmesindeki **Diğer uygulamalar tam ekranken** seçeneğini **Dur (boş bellek)** olarak değiştirerek Wallpaper Engine'i oyun sırasında herhangi bir belleği boşaltması için yapılandırabilirsiniz.

## Uygulama Kuralı

Yalnızca belirli bir oyun veya yazılımla ilgili sorun yaşıyorsanız bunu da **Uygulama Kuralı** oluşturarak yalnızca sorun yaşadığınız yazılım için yapılandırabilirsiniz:

1. Wallpaper Engine ayarlarında bulunun **Performans** sekmesini açın
2. **Uygulama kuralları**'nın yanındaki **Düzenle** tuşuna tıklayın
3. Gelen açılır pencerede **Yeni kural oluştur**'a tıklayın
4. Aşağıdaki ayarlarla yeni bir kural oluşturun:
    * **Uygulama adı:** "game.exe" *(bunu oyununuzun gerçek .exe dosyasıyla değiştirin)*
    * **Koşul:** "Çalışıyor"
    * **Duvar kâğıdını oynatma:** "Dur (boş bellek)"
5. **Oluştur**'a tıklayarak onaylayın

Wallpaper Engine artık yapılandırdığınız *.exe* başlatıldığında tüm duvar kâğıtlarını tamamen bellekten kaldıracaktır.

## Ekran kayıt araçları veya yer paylaşımı ile çakışma

Herhangi bir yer paylaşımlı oyun akışı, oyun kaydı veya yazılım kullanıyorsanız Wallpaper Engine'i yanlışlıkla arka planda kaydetmediklerinden emin olun. Grafik kartı sürücülerinizden herhangi bir oyun akışı işlevini kullanmanız da buna neden olabilir (örneğin Nvidia ShadowPlay, Nvidia Share veya AMD ReLive).
