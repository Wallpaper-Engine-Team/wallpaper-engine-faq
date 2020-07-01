---
tags:
  - mdmp
---

# Wallpaper Engine çöktü

Wallpaper Engine, milyonlarca kişi tarafından kullanılan ve iyi test edilmiş sağlam bir yazılımdır. Uygulamada çökmelere neden olan hataların olması oldukça nadirdir. Gördüğünüz çökme mesajı **.dll** dosyaları içeriyorsa sisteminizde çökmeye neden olan **.dll** için daha doğru bir tanımlama olup olmadığını öğrenmek üzere lütfen aşağıdaki listeye bakın:

[[toc]]

::: ipucu Kullanıcılardan aldığımız çökme raporlarının hemen hemen hepsi bozuk grafik kartı sürücüleri, antivirüs uygulamaları ya da bilgisayarın dengesini bozan başka kusurlu yazılımlardan kaynaklanmaktadır. :::

## Wallpaper Engine Çökmesi Hızlı Çözüm Denemesi

Wallpaper Engine'i neyin çöktürdüğünden emin değilseniz lütfen grafik kartı sürücülerinizi düzgün bir şekilde yeniden yükleyin. Öncelikle sürücülerinizi kaldırın, mevcut sürücüleriniz tamamen kaldırıldıktan sonra da en son sürücüleri yeniden yükleyin. Bazı sürücülerin gelişmiş bölümünde "Temiz bir şekilde yeniden yükle" seçeneği bulunur; bozuk sürücülerin kalıntılarından otomatik olarak kurtulmak için bu seçeneği etkinleştirin. Tüm büyük sağlayıcıların en son grafik kartı sürücülerine buradan ulaşabilirsiniz:

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx)
* [AMD Radeon](https://www.amd.com/support)
* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)

Bilgisayarınızda Windows Defender haricinde bir antivirüs programı yüklüyse antivirüs ayarlarınızda Wallpaper Engine için istisna oluşturmayı unutmayın. Antivirüs programınız geçici olarak bozuksa ya da bazı dosyaları kilitlediyse Wallpaper Engine'in bundan sonra yeniden yüklenmesi gerekebilir.

Bozulmamaları için Wallpaper Engine dosyalarınızı her zaman steam üzerinden doğrulamaya çalışın:

* [Steam Desteği: Uygulama Dosyalarının Bütünlüğünü Doğrulama](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

## Wallpaper Engine'in çökmesine muhtemelen başka bir uygulama sebep oldu

### KERNELBASE.dll / ntdll.dll

Bu çökme Windows çekirdeğinin kendisinde gerçekleşmiştir. Bu çökmeye çoğunlukla antivirüs programları ya da bozuk grafik kartı sürücüleri sebep olur. Daha fazla bilgi için yukarıdaki hızlı çözüm bölümüne bakabilirsiniz. Ayrıca buna bozuk sistem bileşenleri de sebep olmuş olabilir. Bozuk olabilecek Windows dosyalarını onarmak için Microsoft System File Checker aracını kullanın:

* [Microsoft Sistem Dosya Denetleyicisi Aracı](https://support.microsoft.com/en-us/help/929833/use-the-system-file-checker-tool-to-repair-missing-or-corrupted-system)

### d3d11.dll

Bu çökme DirectX'te meydana gelir ve genellikle antivirüs uygulamalarından ya da bozuk grafik kartı sürücülerinden kaynaklanır. Daha fazla bilgi için yukarıdaki hızlı çözüm bölümüne bakabilirsiniz. Ayrıca buna bozuk sistem bileşenleri de sebep olmuş olabilir. Bozuk olabilecek Windows dosyalarını onarmak için Microsoft Sistem Dosya Denetleyicisi aracını kullanın:

* [Microsoft Sistem Dosya Denetleyicisi Aracı](https://support.microsoft.com/en-us/help/929833/use-the-system-file-checker-tool-to-repair-missing-or-corrupted-system)

### mfplat.dll

Bu çökme Windows Medya Altyapısı'nda meydana gelmiştir; bozuk grafik kartı sürücülerinden kaynaklanmış olabilir fakat daha sıklıkla sisteminizdeki bozuk ya da eksik video codec'lerinden kaynaklanır. Bu tür çökmeleri düzeltmek için video düzeltme rehberimize başvurabilirsiniz:

[Buraya tıklayın](/noshow/notplaying.html)

### AudioSes.dll

Bu çökme, genellikle Windows'un kendisinden kaynaklanır. Sorunu çözmek için ses kartı sürücülerinizin son sürümünü yeniden yüklemeyi deneyin. Bu çökmeleri, Wallpaper Engine ayarlarının *Performans* sekmesindeki *Diğer uygulamadan ses çalarken* seçeneğini *Çalıştırmaya devam et* olarak değiştirerek de düzeltebilirsiniz.

### atiumdag.dll / atiumd64.dll

* [AMD Radeon](https://www.amd.com/support)

::: ipucu Lütfen unutmayın Kurulum sırasında "Temiz bir şekilde yeniden yükle" onay kutusunu seçtiğinizden emin olun veya önce mevcut sürücülerinizi elle kaldırın. Mevcut sürücüleriniz bozuksa önce bunları temizlemeniz önemlidir. :::

### nvwgf2umx.dll

Sisteminizdeki Nvidia sürücüleri çöküyor. Nvidia internet sitesine gidin, buradan en son sürücüleri indirin ve kurun:

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx)

::: tip Please note Make sure to select the "Perform clean re-installation" checkbox during setup or manually uninstall your current drivers first. If your current drivers are broken, it's important to fully clear them first. :::

### igdumd64.dll / igd10umd64.dll / igdumdx32.dll / igd10umd32.dll

The Intel graphics drivers on your system are crashing. Go to the Intel website, download the latest drivers from there and install them:

* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)


### MMDEvAPI.dll

This type of crash occurs to due broken audio software installed on your system. This is usually caused by "sound enhancement" software, especially the ones pre-installed on various notebooks. This type of software will often cause crashes because they interact with Windows in a buggy way, try and look for "Sonic Studio" or "Nahimic" and update them. If you cannot find an update for these programs, you can also uninstall them as they are not necessary for your computer audio to function properly.

### fraps32.dll

The crash has been caused by the FPS monitor and screen recording app Fraps. Fraps has not received updates since 2013 and is a heavily outdated application. Please use an alternative to Fraps as this is a Fraps bug which may never be fixed as the software is abandoned.

## Crash error 0xc000007b

This means that a Windows module has been corrupted by something on your system - usually DirectX itself is broken in this case. Try manually deleting these files:

* C:\Windows\SysWOW64\d3dx9_43.dll
* C:\Windows\System32\d3dx9_43.dll

Now install them again with the DirectX 9 installer: *C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\_CommonRedist\DirectX\Jun2010\dxsetup.exe* (The exact location depends on where your wallpaper_engine installation directory is).

If you still get this error it might be another, similar DirectX module that has been broken by something. This usually indicates a bigger underlying issues with your Windows installation which you need to fix before you can run Wallpaper Engine.

## Crashing after Hibernation / Sleep

If Wallpaper Engine crashes after Windows hibernation, then Windows is failing to correctly restore your graphics card drivers and Wallpaper Engine together. Hibernation in Windows is simply not a reliable process. You can enable the option **Safe start after hibernation** in Wallpaper Engine to mitigate this issue. This option will attempt to automatically restart Wallpaper Engine instead of expecting Windows to correctly work after hibernation.