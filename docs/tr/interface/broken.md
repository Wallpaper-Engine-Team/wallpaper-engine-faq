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

::: uyarı Lütfen unutmayın Bu bölüm, Wallpaper Engine **arayüzünün** siyah veya bozuk olmasıyla ilgilidir. **Duvar kâğıtlarınız siyahsa** şuraya bakın: [Siyah Ekran / Videolar Oynatılmıyor](/noshow/notplaying.html). :::

## Wallpaper Engine tarayıcısı Siyah veya Beyaz

Çoğu kişi için bu Wallpaper Engine kullanıcı arayüzünün bir antivirüs uygulaması tarafından yanlışlıkla engellendiği anlamına gelir. Antivirüs uygulamanızın Wallpaper Engine'i, özellikle de wallpaper_engine yükleme dizinindeki tüm yürütülebilir dosyalar ve **wallpaper_engine/bin/ui32.exe**'yi yoksayması için uygulama içerisinde bir istisna oluşturun.

Bazı durumlarda daha sonra Wallpaper Engine dosyalarını doğrulamanız veya antivirüs uygulamanız bazı önemli Wallpaper Engine dosyalarına kalıcı bir kilit yerleştirdiyse Wallpaper Engine'i yeniden kurmanız gerekebilir:

* [Steam Desteği: Uygulama Dosyalarının Bütünlüğünü Doğrulayın](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

Antivirüs uygulamanızı yapılandırdıktan sonra Steam üzerindeki doğrulama da bu sorunu çözmezse Wallpaper Engine'i Steam üzerinden yeniden yüklemeyi deneyin. If your antivirus has gone berserk, it might even have permanently blocked the filepaths used by Wallpaper Engine. In that case make sure to uninstall the antivirus first and then install Wallpaper Engine into a different directory, you can choose to create a new Steam games library in Steam for this.

## Wallpaper Engine interface with green artifacts or white lines

Your graphics card drivers are broken or misconfigured. Download the latest drivers for your graphics cards (even if you already have the latest drivers) and perform a clean re-installation of the drivers. Is is important that you first uninstall your current drivers and then install the latest drivers to ensure any broken files or settings are removed.

If the problem persists, turn off Wallpaper Engine. Then re-launch Wallpaper Engine using the third launch option in Steam labeled "disable UI hardware acceleration".

### Rare Steam Overlay Bug Breaking Wallpaper Engine User Interface

The other possible reason for a black application window is a rare Steam bug with the Steam overlay. You can try the following:

Turn off Wallpaper Engine completely (right-click on the tray icon and then select "Quit"). Afterwards, open up Steam, right-click on Wallpaper Engine, select "Properties" and then disable the "Enable Steam Overlay while in-game" option. After disabling the option, try to restart Wallpaper Engine via Steam. 