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

::: warning
Lütfen unutmayın Bu bölüm, Wallpaper Engine **arayüzünün** siyah veya bozuk olmasıyla ilgilidir. **Duvar kâğıtlarınız siyahsa** şuraya bakın: [Siyah Ekran / Videolar Oynatılmıyor](/noshow/notplaying.html).
:::

## Wallpaper Engine tarayıcısı Siyah veya Beyaz

Çoğu kişi için bu Wallpaper Engine kullanıcı arayüzünün bir antivirüs uygulaması tarafından yanlışlıkla engellendiği anlamına gelir. Antivirüs uygulamanızın Wallpaper Engine'i, özellikle de wallpaper_engine yükleme dizinindeki tüm yürütülebilir dosyalar ve **wallpaper_engine/bin/ui32.exe**'yi yoksayması için uygulama içerisinde bir istisna oluşturun.

Bazı durumlarda daha sonra Wallpaper Engine dosyalarını doğrulamanız veya antivirüs uygulamanız bazı önemli Wallpaper Engine dosyalarına kalıcı bir kilit yerleştirdiyse Wallpaper Engine'i yeniden kurmanız gerekebilir:

* [Steam Desteği: Uygulama Dosyalarının Bütünlüğünü Doğrulayın](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

Antivirüs uygulamanızı yapılandırdıktan sonra Steam üzerindeki doğrulama da bu sorunu çözmezse Wallpaper Engine'i Steam üzerinden yeniden yüklemeyi deneyin. Eğer antivirüs uygulamanız aşırı tepki veriyorsa Wallpaper Engine'in kullandığı dosya yollarını kalıcı olarak engellemiş de olabilir. Bu durumda önce antivirüs yazılımını kaldırın ve sonrasında Wallpaper Engine'i farklı bir dizine kurun. Bunun için Steam'de yeni bir Steam oyun kütüphanesi oluşturmayı tercih edebilirsiniz.

## Yeşil yapıtlı veya beyaz çizgili Wallpaper Engine arayüzü

Grafik kartı sürücüleriniz bozuk veya yanlış yapılandırılmış. Grafik kartlarınız için en güncel sürücüleri indirin (en güncel sürücülere sahip olsanız bile) ve sürücüler için temiz bir yeniden kurulum gerçekleştirin. Bozuk dosyaların veya ayarların kaldırılmasını sağlamak için öncelikle mevcut sürücülerinizi kaldırmanız ve sonrasında en güncel sürücüleri kurmanız önemlidir.

Sorun devam ederse Wallpaper Engine'i kapatın. Daha sonra Steam'deki "Kullanıcı arayüzü donanım hızlandırmayı devre dışı bırak" etiketli üçüncü başlatma seçeneğini kullanarak Wallpaper Engine'i yeniden başlatın.

**If the Wallpaper Engine user interface has white lines**: You have **Nvidia Image Sharpening** turned on for all applications. Turn it off in your Nvidia drivers or do a clean reinstallation of your Nvidia drivers by uninstalling your current ones first.

![Nvidia Image Sharpening Issue](./imagesharpening.png) *White lines will be visible all over the application window if Nvidia image sharpening is turned on for Wallpaper Engine by mistake.*

### Wallpaper Engine Kullanıcı Arayüzünü Bozan Nadir Steam Arayüzü Hatası

The other possible reason for a black application window is a rare Steam bug with the Steam overlay. You can try the following:

Turn off Wallpaper Engine completely (right-click on the tray icon and then select "Quit"). Afterwards, open up Steam, right-click on Wallpaper Engine, select "Properties" and then disable the "Enable Steam Overlay while in-game" option. After disabling the option, try to restart Wallpaper Engine via Steam. 