---
tags:
  - mdmp
---

# Wallpaper Engine çöktü

Wallpaper Engine, milyonlarca kişi tarafından kullanılan ve iyi test edilmiş sağlam bir yazılımdır. Uygulamada çökmelere neden olan hataların olması oldukça nadirdir. Gördüğünüz çökme mesajı **.dll** dosyaları içeriyorsa sisteminizde çökmeye neden olan **.dll** için daha doğru bir tanımlama olup olmadığını öğrenmek üzere lütfen aşağıdaki listeye bakın:

[[toc]]

::: tip
Kullanıcılardan aldığımız çökme raporlarının hemen hemen hepsi bozuk grafik kartı sürücüleri, antivirüs uygulamaları ya da bilgisayarın dengesini bozan başka kusurlu yazılımlardan kaynaklanmaktadır.
:::

## Wallpaper Engine Çökmesi Hızlı Çözüm Denemesi

Wallpaper Engine'i neyin çöktürdüğünden emin değilseniz lütfen grafik kartı sürücülerinizi düzgün bir şekilde yeniden yükleyin. Öncelikle sürücülerinizi kaldırın, mevcut sürücüleriniz tamamen kaldırıldıktan sonra da en son sürücüleri yeniden yükleyin. Bazı sürücülerin gelişmiş bölümünde "Temiz bir şekilde yeniden yükle" seçeneği bulunur; bozuk sürücülerin kalıntılarından otomatik olarak kurtulmak için bu seçeneği etkinleştirin. Tüm büyük sağlayıcıların en son grafik kartı sürücülerine buradan ulaşabilirsiniz:

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx)
* [AMD Radeon](https://www.amd.com/support)
* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)

Bilgisayarınızda Windows Defender haricinde bir antivirüs programı yüklüyse antivirüs ayarlarınızda Wallpaper Engine için istisna oluşturmayı unutmayın. Antivirüs programınız geçici olarak bozuksa ya da bazı dosyaları kilitlediyse Wallpaper Engine'in bundan sonra yeniden yüklenmesi gerekebilir. Antivirüs uygulamanızın *wallpaper_engine* dizinini ve özellikle tüm .exe dosyalarını yok saydığından emin olun:

* *wallpaper_engine/wallpaper32.exe*
* *wallpaper_engine/wallpaper64.exe*
* *wallpaper_engine/launcher.exe*
* *wallpaper_engine/bin/webwallpaper32.exe*
* *wallpaper_engine/bin/ui32.exe*

Bozulmamaları için Wallpaper Engine dosyalarınızı her zaman steam üzerinden doğrulamaya çalışın:

* [Steam Desteği: Uygulama Dosyalarının Bütünlüğünü Doğrulayın](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

Ciddi durumlarda, Wallpaper Engine'i kaldırmanız ve *wallpaper_engine* dizinini manuel olarak silmeniz ve ardından antivirüs uygulamanız daha esnek olacak şekilde yapılandırıldıktan sonra uygulamayı yeniden yüklemeniz gerekebilir.

## Hazırda Bekletme / Uyku modundan sonra çökme

Wallpaper Engine, Windows hazırda bekletme modundan sonra çöküyorsa Windows, grafik kartı sürücülerinizi ve Wallpaper Engine'ini doğru bir şekilde geri yükleyemiyordur. Windows hazırda bekletme güvenilir bir işlem değildir. Bu sorunu hafifletmek için Wallpaper Engine'deki **Uykudan sonra güvenli başlangıç** seçeneğini etkinleştirebilirsiniz. Bu seçenek, Windows'un hazırda bekletmeden sonra düzgün çalışmasını beklemek yerine Wallpaper Engine'i otomatik olarak yeniden başlatmayı deneyecektir.

## Wallpaper Engine has crashed / Hata kodu "0xC0000005"

Bu hata mesajı neredeyse her zaman **antivirüs uygulamaları** veya **hatalı sürücüler** nedeniyle oluşur. Bir antivirüs uygulaması kullanıyorsanız antivirüs uygulamanız tarafından herhangi bir etkinlik raporlanmamış olsa bile çökmenin neden yüksek ihtimalle budur. Lütfen yapılandırdığınızdan emin olun ve *wallpaper_engine* yükleme dizini ile diğer tüm önemli Wallpaper Engine yürütülebilir dosyalarını yoksaymasını sağlayın. Daha detaylı bilgi için yukarıdaki *Wallpaper Engine Çökmesi Hızlı Çözüm Denemesi* bölümüne göz atın.

Yüklü bir antivirüs uygulamanız yoksa lütfen tüm önemli sürücüleri yeniden yükleyin ve Wallpaper Engine'in 64 Bit sürümüne (veya 64 Bit sürümünü zaten kullandıysanız 32 Bit sürümüne) geçmeyi deneyin.

Bazı durumlarda bunun kaynağı Wallpaper Engine'e olağan dışı bir şekilde müdahale eden diğer uygulamalar da olabilir. Bu, esas olarak Wallpaper Engine'e kod ekleyen veya Windows kurulumunuzu önemli ölçüde değiştiren uygulamalarla ilgilidir.

!["0xC0000005" Wallpaper Engine çökme mesajı](/img/faq/0xC0000005.png)

## Wallpaper Engine'in çökmesine muhtemelen başka bir uygulama sebep oldu

### KERNELBASE.dll / ntdll.dll

Bu çökme Windows çekirdeğinin kendisinde gerçekleşmiştir. Bu çökmeye çoğunlukla antivirüs programları ya da bozuk grafik kartı sürücüleri sebep olur. Daha fazla bilgi için yukarıdaki hızlı çözüm bölümüne bakabilirsiniz. Ayrıca buna bozuk sistem bileşenleri de sebep olmuş olabilir. Bozuk olabilecek Windows dosyalarını onarmak için Microsoft System File Checker aracını kullanın:

* [Microsoft Sistem Dosya Denetleyicisi Aracı](https://support.microsoft.com/tr-tr/help/929833/use-the-system-file-checker-tool-to-repair-missing-or-corrupted-system)

### d3d11.dll

Bu çökme DirectX'te meydana gelir ve genellikle antivirüs uygulamalarından ya da bozuk grafik kartı sürücülerinden kaynaklanır. Daha fazla bilgi için yukarıdaki hızlı çözüm bölümüne bakabilirsiniz. Ayrıca buna bozuk sistem bileşenleri de sebep olmuş olabilir. Bozuk olabilecek Windows dosyalarını onarmak için Microsoft System File Checker aracını kullanın:

* [Microsoft Sistem Dosya Denetleyicisi Aracı](https://support.microsoft.com/en-us/help/929833/use-the-system-file-checker-tool-to-repair-missing-or-corrupted-system)

### mfplat.dll

Bu çökme Windows Medya Altyapısı'nda meydana gelmiştir; bozuk grafik kartı sürücülerinden kaynaklanmış olabilir fakat daha sıklıkla sisteminizdeki bozuk ya da eksik video codec'lerinden kaynaklanır. Bu tür çökmeleri düzeltmek için video düzeltme rehberimize başvurabilirsiniz:

[Buraya tıklayın](/noshow/notplaying.html)

### AudioSes.dll

Bu çökme, genellikle Windows'un kendisinden kaynaklanır. Sorunu çözmek için ses kartı sürücülerinizin son sürümünü yeniden yüklemeyi deneyin. Bu çökmeleri, Wallpaper Engine ayarlarının *Performans* sekmesindeki *Diğer uygulamadan ses çalarken* seçeneğini *Çalıştırmaya devam et* olarak değiştirerek de düzeltebilirsiniz.

### atiumdag.dll / atiumd64.dll

* [AMD Radeon](https://www.amd.com/support)

::: tip Lütfen unutmayın
Kurulum sırasında "Temiz bir şekilde yeniden yükle" onay kutusunu seçtiğinizden emin olun veya önce mevcut sürücülerinizi elle kaldırın. Mevcut sürücüleriniz bozuksa önce bunları temizlemeniz önemlidir.
:::

### nvwgf2umx.dll / nvwgf2um.dll

Sisteminizdeki Nvidia sürücüleri çöküyor. Nvidia internet sitesine gidin, buradan en son sürücüleri indirin ve kurun:

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx)

::: tip Lütfen unutmayın
Kurulum sırasında "Temiz bir şekilde yeniden yükle" onay kutusunu seçtiğinizden emin olun veya önce mevcut sürücülerinizi elle kaldırın. Mevcut sürücüleriniz bozuksa önce bunları temizlemeniz önemlidir.
:::

### igdumd64.dll / igd10umd64.dll / igdumdx32.dll / igd10umd32.dll

Sisteminizdeki Intel graphics sürücüleri çöküyor. Intel internet sitesine gidin, buradan en son sürücüleri indirin ve kurun:

* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)

### RZChromaSDK.dll / RzChromaSDK64.dll

Bu tür çökmelere, **Razer Synapse** içerisindeki Razer Chroma sebep olur. Genellikle bunun nedeni Razer Synapse'in hatalı kurulumudur. Çoğu durumda Razer Synapse'in temiz şekilde yeniden yüklenmesi bu tür çökmeleri düzeltir:

**Tüm Razer yazılımının temiz şekilde yeniden yüklenmesi**

::: warning
Razer Synapse'i yeniden yüklerken Wallpaper Engine'in kapalı olduğundan emin olun.
:::

1. Çalışır durumdaysa Wallpaper Engine'i tamamen kapatın (Windows tepsisindeki simgenin üzerine sağ tıklayın ve sonra **Çık** seçeneğini seçin)
2. Windows aracılığıyla bilgisayarınızdaki tüm Razer yazılımlarını kaldırın
3. Razer'in yazılım paketinin en son sürümünü internet sitelerinden indirin ve kurun:

* [Razer Synapse 3'ü indirin](https://www.razer.com/synapse-3)

4. Daha sonra Wallpaper Engine'i öncesinde yeniden başlatmadan bilgisayarınızı yeniden başlatın.

**Yeniden kurulum sorunu çözmüyor**

Sorun, Razer Synapse'in yeniden kurulmasıyla da çözülmüyorsa Razer Synapse'ın kendisiyle ilgili bir sorun olabilir. Geçmişte buna hatalı Razer Synapse güncellemeleri sebep olmuştur. Bu sorun gelecekteki bir Razer Synapse güncellemesinde çözülene kadar Wallpaper Engine ayarlarındaki **Eklentiler** sekmesinden LED Eklentisini (*"iCUE & Chroma SDK"*) kapatmayı deneyin.

Razer Synapse, temiz bir şekilde yeniden kurulduktan sonra bile çökmeler devam ediyorsa lütfen Razer destek birimiyle iletişime geçin ve onları çökmeler konusunda bilgi verin. Yardımcı olamıyorlarsa lütfen teknik destek için bize ulaşın. Bu spesifik çöküş konusunda Razer ana iletişim kişisi olsa da bu çökmeleri inceleyebilir ve bulgularımızı Razer Synapse geliştirme ekibine de iletebiliriz.

### MMDEvAPI.dll

Bu tür bir çökme, sistemizde yüklü olan bozuk ses yazılımından dolayı ortaya çıkar. Bu genellikle "ses iyileştirme" yazılımından, özellikle de çeşitli dizüstü bilgisayarlara önceden kurulmuş yazılımlardan kaynaklanır. Bu tür yazılımlar, Windows ile hatalı bir şekilde etkileşime girdikleri için genellikle çökmelere neden olur. "Sonic Studio" ya da "Nahimic"i arayıp güncelleyin. Bu programlar bilgisayarınızın sesinin düzgün çalışması için gerekli olmadıkları için bir güncelleme bulamazsanız bunları kaldırmayı da seçebilirsiniz.

### fraps32.dll

Bu çökmeye, FPS monitör ve ekran kayıt uygulaması Fraps neden oldu. Fraps 2013 yılından beri güncellenmemiş oldukça eski bir uygulamadır. Bu hata Fraps ile ilgili olduğu ve yazılım artık bırakıldığı için asla düzeltilemeyeceğinden lütfen Fraps yerine başka bir alternatif kullanın.

## Çökme hatası 0xc000007b

Windows modülü sisteminizdeki bir şey tarafından bozulmuş, bu durumda genellikle DirectX'in kendisi bozulur. Şu dosyaları elle silmeyi deneyin:

* C:\Windows\SysWOW64\d3dx9_43.dll
* C:\Windows\System32\d3dx9_43.dll

Şimdi bunları DirectX 9 yükleyicisi ile tekrar yükleyin: *C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\_CommonRedist\DirectX\Jun2010\dxsetup.exe* (Tam konum, wallpaper_engine kurulum dizininizin bulunduğu yere bağlıdır).

Hâlâ bu hatayı alıyorsanız bir şey tarafından bozulmuş başka ve benzer bir DirectX modülü olabilir. Bu durum genellikle Wallpaper Engine'i çalıştırmadan önce düzeltmeniz gereken Windows kurulumunuzla ilgili daha büyük bir soruna işaret eder.