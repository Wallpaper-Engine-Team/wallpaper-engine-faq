# Video donuyor / takılıyor / kötü performans

Donanımınız videoyu düzgün görüntüleyecek kadar güçlü olmayabilir. Video duvar kâğıtları, standart video oynatıcılarla karşılaştırılamaz. Simgelerle oluşturulmaları ve uzayıp birden fazla ekranı doldurabilmeleri gerekir. Ayrıca CPU kullanımını en aza indirmek için varsayılan olarak GPU'nuzun video şifre çözücüsünü kullanır.

## Arka plan kaydı kancaları
ReLive, Shadow Play/Nvidia Share ya da Windows GameDVR gibi uygulamaları kaydetmek için gerekli sürücü özelliklerinden gelebilir. Devre dışı bırakıp bir fark olacak mı diye bakın, ardından Wallpaper Engine'i programlardan hariç tutun. Ayrıca hiçbir kayıt/katman programının Wallpaper Engine'in içine yüklenip işlemeyi yavaşlatmadığından emin olun.

Tarama aracımızı kullanarak kayıt kancalı herhangi bir programın yüklü olup olmadığına bakabilirsiniz. Fakat Nvidia GeForce Experience ile birlikte gelen yaygın kayıt kancaları gibi tüm kancalar da tarama da gözükmeyebilir:

* [Wallpaper Engine Tarama Aracı](/debug/scantool.html)

## Dinamik Süper Çözünürlük (DSR) / GPU Ölçekleme
GPU Ölçekleme/DSR gibi sürücü düzeyindeki izinsiz girişler de sorunlar çıkarabilir. Önce bunları devre dışı bırakmayı deneyin, daha sonra işe yararsa özel olarak Wallpaper Engine için devre dışı bırakın.

## Birden fazla GPU/ekrana sahip sistemlerde dwm.exe içinde kötü performans
Masaüstü PC'nizde ayrılmış bir grafik kartı yüklü olmasına rağmen BIOS üzerinden tümleşik GPU etkinleştirdiyseniz kötü performans ve yüksek CPU DWM.exe kullanımıyla karşı karşıya kalabilirsiniz. Mümkünse tümleşik GPU'yu etkinleştirmeyin. **Tüm monitörlerinizin ayrılmış grafik kartınıza takılı olması çok önemlidir.** Aynı anda iki GPU'yu birden kullanırsanız masaüstü pencere yöneticisinin donanım ivmesi bozulacaktır. Nvidia Optimus ya da benzer bir teknoloji olmadan Windows bir duvar kâğıdı imgesini bir GPU'dan diğerine kopyalamaya zorlanır ve bu işlem çok yavaş sürer. Hatta GPU'larınız arasındaki tüm ortak eylemler bundan etkilenecektir. Bu durum, iki monitör arasında bir oyun penceresini hareket ettirmeye benzer.

This specific issue does not affect hardware built for multi-GPU setups like laptops with Nvidia Optimus or proper Nvidia SLI / AMD Crossfire setups with a hardware bridge.