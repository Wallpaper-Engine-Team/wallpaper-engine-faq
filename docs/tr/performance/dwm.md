# Tümleşik ve Ayrılmış GPU'su Kötü Performans sergileyen masaüstleri (dwm.exe)

Masaüstü PC'nizde ayrılmış bir GPU yüklü olmasına rağmen BIOS üzerinden tümleşik GPU etkinleştirdiyseniz kötü performans ve *dwm.exe*'nin yüksek CPU kullanımıyla karşı karşıya kalabilirsiniz. Mümkünse tümleşik GPU'yu etkinleştirmeyin ve monitörlerinizi ayrılmış GPU'nuza bağlayın. Her iki bağımsız grafik çözümünü aynı anda kullanmak, masaüstü pencere yöneticisinin donanım ivmesini bozacaktır. Tüm monitörlerin ana grafik kartınıza takılı olması önemlidir. Bu, Wallpaper Engine ile ilgili bir hata veya sorun değildir. Bu sorun, tüm monitörlerin ana grafik kartına takılı olmadığı donanım kurulumlarına sahip tüm çoklu monitör yazılımlarını etkiler.

Nvidia Optimus teknolojisi veya benzeri olmadığında Windows, duvar kâğıdı görüntüsünü bir GPU'dan diğerine kopyalamak zorunda kalacaktır ve bu oldukça yavaş bir işlemdir. Hatta GPU'larınız arasındaki tüm ortak eylemler bundan etkilenecektir. Bu durum bir oyun penceresini iki monitör arasında hareket ettirmeye benzer.

Bu Nvidia Optimus dizüstü bilgisayarlar veya SLI/Crossfire gibi çoklu GPU kurulumları için üretilmiş donanımları etkilemez. Bunun doğru şekilde işlemesi için fiziksel bir çözümleri vardır.

## Poor Performance using Secondary GPU on Desktop without Nvidia SLI / Nvidia Optimus / AMD CrossFire

Many users assume that switching Wallpaper Engine to a secondary GPU will increase the overall system performance. However, this is merely a common misconception and the overall system performance will actually degrade.

Wallpaper Engine creates wallpapers which are part of the desktop which means they are part of the Windows Explorer process. Therefore, Wallpaper Engine must use the same GPU as Windows Explorer. If this is not the case, then Windows has to force both GPUs to cooperate in order to render an image for your monitors. This has to be done by the processor which ultimately means the overall computer performance degrades significantly and often takes much more performance than the wallpapers themselves. Some proper multi-GPU technologies (Nvidia SLI, Nvidia Optimus, AMD CrossFire) solve this problem on a hardware-level but this is not applicable in cases where you use an Nvidia GPU and an Intel on-board graphics card, for example.

You can still change the GPU of your choice in your graphics card drivers or in your overall system settings, however we strongly advise against doing this as the outcome is not an increase in system performance.