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

Wallpaper Engine will now completely remove all wallpapers from memory when the *.exe* you configured is launched.

## Conflicts with screen-recording tools or overlays

If you are using any game streaming, game recording or software with overlays, make sure they are not accidentally recording Wallpaper Engine in the background. This can also be the case if you use any game streaming functionalities from your graphics card drivers (Nvidia ShadowPlay, Nvidia Share or AMD ReLive for example).
