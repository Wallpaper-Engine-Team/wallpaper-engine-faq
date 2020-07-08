# Tümleşik ve Ayrılmış GPU'su Kötü Performans sergileyen masaüstleri (dwm.exe)

Masaüstü PC'nizde ayrılmış bir GPU yüklü olmasına rağmen BIOS üzerinden tümleşik GPU etkinleştirdiyseniz kötü performans ve *dwm.exe*'nin yüksek CPU kullanımıyla karşı karşıya kalabilirsiniz. Mümkünse tümleşik GPU'yu etkinleştirmeyin ve monitörlerinizi ayrılmış GPU'nuza bağlayın. Her iki bağımsız grafik çözümünü aynı anda kullanmak, masaüstü pencere yöneticisinin donanım ivmesini bozacaktır. Tüm monitörlerin ana grafik kartınıza takılı olması önemlidir. Bu, Wallpaper Engine ile ilgili bir hata veya sorun değildir. Bu sorun, tüm monitörlerin ana grafik kartına takılı olmadığı donanım kurulumlarına sahip tüm çoklu monitör yazılımlarını etkiler.

Nvidia Optimus teknolojisi veya benzeri olmadığında Windows, duvar kâğıdı görüntüsünü bir GPU'dan diğerine kopyalamak zorunda kalacaktır ve bu oldukça yavaş bir işlemdir. Hatta GPU'larınız arasındaki tüm ortak eylemler bundan etkilenecektir. Bu durum bir oyun penceresini iki monitör arasında hareket ettirmeye benzer.

Bu Nvidia Optimus dizüstü bilgisayarlar veya SLI/Crossfire gibi çoklu GPU kurulumları için üretilmiş donanımları etkilemez. Bunun doğru şekilde işlemesi için fiziksel bir çözümleri vardır.

## Nvidia SLI / Nvidia Optimus / AMD CrossFire olmaksızın Masaüstünde İkincil GPU Kullanıldığında Düşük Performans

Birçok kullanıcı, Wallpaper Engine'i ikincil bir GPU'ya geçirmenin genel sistem performansını artıracağını düşünür. Ancak bu yalnızca genel bir yanlış algıdır ve esasında genel sistem performansı düşecektir.

Wallpaper Engine, masaüstünün bir parçası olan duvar kâğıtları oluşturur, yani bunlar Windows Gezgini'nin bir parçasıdır. Bu nedenle Wallpaper Engine, Windows Gezgini ile aynı GPU'yu kullanmalıdır. Durum böyle olmazsa Windows'un monitörlerinizde bir görüntü oluşturmak için her iki GPU'yu da birlikte çalışmaya zorlaması gerekir. Bunun işlemci tarafından yapılması gerekir. Sonuçta genel bilgisayar performansı önemli ölçüde düşmekte ve genellikle duvar kâğıtlarının kendisinden çok daha fazla performans harcamaktadır. Bazı uygun çoklu GPU teknolojileri (Nvidia SLI, Nvidia Optimus, AMD CrossFire), bu sorunu donanım düzeyinde çözer ancak bu, örneğin Nvidia GPU ve Intel yerleşik grafik kartı kullandığınız durumlarda geçerli değildir.

Grafik kartı sürücülerinizde veya genel sistem ayarlarınızda seçtiğiniz GPU'yu yine de değiştirebilirsiniz. Ancak sistem performansında bir artış meydana gelmediği için bunu yapmamanızı öneririz.