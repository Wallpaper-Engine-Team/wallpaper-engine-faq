---
tags:
  - kullanıcı arayüzü
  - yeşil
  - beyaz
  - pikselli
  - okunamaz
---

# Wallpaper Engine penceresi düzgün görüntülenmiyor

Wallpaper Engine tarayıcı pencereniz çalışmıyorsa bunun sebebi genellikle hatalı grafik kartı sürücüleri veya antivirüs uygulamalarıdır. Daha fazla bilgi için aşağıya bakın.

::: warning Lütfen unutmayın Bu bölüm, Wallpaper Engine **arayüzünün** siyah veya bozuk olmasıyla ilgilidir. **Duvar kâğıtlarınız siyahsa** şuraya bakın: [Siyah Ekran / Videolar Oynatılmıyor](/noshow/notplaying.html).
:::

## Wallpaper Engine tarayıcısı Siyah veya Beyaz

Çoğu kişi için bu Wallpaper Engine kullanıcı arayüzünün bir antivirüs uygulaması tarafından yanlışlıkla engellendiği anlamına gelir. Antivirüs uygulamanızın Wallpaper Engine'i, özellikle de wallpaper_engine yükleme dizinindeki tüm yürütülebilir dosyalar ve **wallpaper_engine/bin/ui32.exe**'yi yoksayması için uygulama içerisinde bir istisna oluşturun.

Bazı durumlarda daha sonra Wallpaper Engine dosyalarını doğrulamanız veya antivirüs uygulamanız bazı önemli Wallpaper Engine dosyalarına kalıcı bir kilit yerleştirdiyse Wallpaper Engine'i yeniden kurmanız gerekebilir:

* [Steam Desteği: Uygulama Dosyalarının Bütünlüğünü Doğrulayın](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

Antivirüs uygulamanızı yapılandırdıktan sonra Steam üzerindeki doğrulama da bu sorunu çözmezse Wallpaper Engine'i Steam üzerinden yeniden yüklemeyi deneyin. Eğer antivirüs uygulamanız aşırı tepki veriyorsa Wallpaper Engine'in kullandığı dosya yollarını kalıcı olarak engellemiş de olabilir. Bu durumda önce antivirüs yazılımını kaldırın ve sonrasında Wallpaper Engine'i farklı bir dizine kurun. Bunun için Steam'de yeni bir Steam oyun kütüphanesi oluşturmayı tercih edebilirsiniz.

If the problem persists, turn off Wallpaper Engine. Then re-launch Wallpaper Engine using the third launch option in Steam labeled "disable UI hardware acceleration".

![Launch option: Disable UI hardware acceleration](/img/faq/steam_launch_option.jpg)

## Yeşil yapıtlı veya beyaz çizgili Wallpaper Engine arayüzü

Your graphics card drivers are broken or misconfigured. Download the latest drivers for your graphics cards (even if you already have the latest drivers) and perform a clean re-installation of the drivers. Is is important that you first uninstall your current drivers and then install the latest drivers to ensure any broken files or settings are removed.

If the problem persists, turn off Wallpaper Engine. Then re-launch Wallpaper Engine using the third launch option in Steam labeled "disable UI hardware acceleration".

**If the Wallpaper Engine user interface has white lines**: You have **Nvidia Image Sharpening** turned on for all applications. Turn it off in your Nvidia drivers or do a clean reinstallation of your Nvidia drivers by uninstalling your current ones first.

![Nvidia Image Sharpening Issue](./imagesharpening.png) *White lines will be visible all over the application window if Nvidia image sharpening is turned on for Wallpaper Engine by mistake.*

### Wallpaper Engine Kullanıcı Arayüzünü Bozan Nadir Steam Arayüzü Hatası

The other possible reason for a black application window is a rare Steam bug with the Steam overlay. You can try the following:

Turn off Wallpaper Engine completely (right-click on the tray icon and then select "Quit"). Afterwards, open up Steam, right-click on Wallpaper Engine, select "Properties" and then disable the "Enable Steam Overlay while in-game" option. After disabling the option, try to restart Wallpaper Engine via Steam. 