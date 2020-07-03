---
tags:
  - otomatik başlatma
  - başlat
---

# Açılışta otomatik başlatma

Wallpaper Engine ayarlarına ve daha sonra "Genel" sekmesine giderek Wallpaper Engine'in bilgisayarınız açıldığında başlatılmasını sağlayabilirsiniz. Üst kısımdan sisteminiz her açıldığında uygulamayı arka planda sessizce başlatacak olan otomatik başlatma seçeneğini etkinleştirebilirsiniz.

## "Yüksek öncelikli" ve "normal" başlatma seçeneği arasındaki fark nedir?

Yüksek öncelikli seçeneğini seçtiğinizde Wallpaper Engine bir Windows hizmeti kaydedecektir. Yani Wallpaper Engine, Windows'la birlikte otomatik olarak başlayacak şekilde yapılandırdığınız diğer programlardan önce başlayacaktır. Uygulamanın performansını başka hiçbir şekilde etkilemeyecektir.

Ancak bazı antivirüsler bunun kötü amaçlı davranış olduğu yönünde yanlış tanımlama yaparak aşırı tepki verecek ve Wallpaper Engine'in bu modda başlatılmasını engelleyecektir. Dolayısıyla yüksek öncelikli seçeneğini kullanmanın dezavantajı daha az güvenilir olmasıdır.

## Otomatik başlatmayı etkinleştirdim ama çalışmıyor, ne yapabilirim?

*Yüksek öncelikli* seçeneğini kullanıyorsanız bu seçeneği devre dışı bırakarak *normal* otomatik başlatmaya geçiş yapmayı deneyin. Yukarıda da açıklandığı üzere yüksek öncelikli mod daha hızlı başlar ancak çeşitli nedenlerle, özellikle de bazen antivirüs yazılımları tarafından engellendiği için daha az güvenilirdir.

Normal öncelikli seçeneğini kullanıyorsanız ve uygulama Windows ile birlikte başlamıyorsa yüksek öncelikli seçeneğine geçmeyi deneyin ve sorunun ortadan kalkıp kalkmadığına bakın.

Yüksek öncelikli veya normal öncelikli seçeneklerinden her ikisi de çalışmıyorsa sisteminize yüklediğiniz antivirüs yazılımını kontrol edin. Bazı antivirüs ve güvenlik duvarı uygulamaları, bilgisayarınız başlatıldığında Wallpaper Engine'in otomatik olarak başlamasını engelleyebilir. Antivirüs yazılımınız, muhtemelen belirli klasörleri ve uygulamaları yoksaymanızı sağlayan bir "güvenilir adresler" özelliğine sahiptir. wallpaper_engine yükleme dizinini ve içindeki tüm yürütülebilir dosyaları bu listeye ekleyin.

Nadir ortaya çıkan başka bir neden, Wallpaper Engine .exe dosyalarını yönetici olarak çalıştırılacak şekilde ayarlamanız (veya sisteminizdeki bir uygulamanın ayarlaması) durumunda da otomatik olarak başlayamamasıdır. Yönetici ayarını kaldırmanız ve otomatik başlatmayı kapatıp tekrar açmanız gerekecektir.

Otomatik başlatma çalışmazsa bunun nedeni neredeyse her zaman aşırı duyarlı antivirüs yazılımıdır. Yüklü antivirüs veya güvenlik duvarı uygulamalarınız varsa lütfen bunların ayarlarını ve güvenlik seviyelerini iki kez kontrol edin.

## Wallpaper Engine starts with Windows but (some) wallpapers are not shown

 Check if the Wallpaper Engine icon is visible in the Windows tray next to the clock after you start your computer. If the icon is there after your system starts but either some or none of your monitors have their respective wallpapers shown, there is a problem with your graphics card drivers. Essentially, your graphics card drivers keep assigning your monitors new identifiers which leads Wallpaper Engine to believe that you are trying to configure a new monitor. You can fix this by changing the *"Monitor identification"* option in the *General* tab of the Wallpaper Engine settings to *Layout* or *GDI*. We also recommend that you do a clean re-installation of your graphics card drivers in this case, as it's an indicator for an underlying problem with your Windows installation.

 ## Wallpaper Engine assigns wrong wallpapers at system start-up

 This is the same problem as in the previous section, if you have multiple monitors and the wallpapers are being assigned to the wrong monitor at start-up, try changing the *Monitor identification* option in the *General* tab of the Wallpaper Engine settings to *Layout* or *GDI*.