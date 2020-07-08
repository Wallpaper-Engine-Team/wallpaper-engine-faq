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

## Wallpaper Engine, Windows ile birlikte başlar ancak (bazı) duvar kâğıtları gözükmez

 Bilgisayarınızı başlattıktan sonra saatin yanındaki Windows tepsisinde Wallpaper Engine simgesinin görünüp görünmediğini kontrol edin. Sisteminiz başladıktan sonra simge oradaysa ancak monitörlerinizden bazılarının veya hiçbirinin duvar kâğıtları gösterilmiyorsa grafik kartı sürücülerinizde bir sorun var demektir. Esasında grafik kartı sürücüleriniz, Wallpaper Engine'i yeni bir monitör yapılandırmaya çalıştığınıza inandıracak şekilde monitörlerinize yeni tanımlayıcılar atamaya devam eder. Wallpaper Engine ayarlarındaki *Genel* sekmesinde bulunan *"Ekran kimliği"* seçeneğini *Düzen* veya *GDI* olarak değiştirerek bunu çözebilirsiniz. Ayrıca bu durum Windows kurulumunuzda altta yatan bir sorunun göstergesi olduğu için grafik kartı sürücülerinizi temiz bir şekilde yeniden yüklemenizi de öneririz.

 ## Wallpaper Engine sistem başlangıcında yanlış duvar kâğıtları atıyor

 Bu sorun önceki bölümdekiyle aynıdır. Birden fazla monitörünüz varsa ve duvar kâğıtları başlangıçta yanlış monitöre atanıyorsa Wallpaper Engine ayarlarındaki *Genel* sekmesinde bulunan *Ekran kimliği* seçeneğini *Düzen* veya *GDI* olarak değiştirmeyi deneyin.