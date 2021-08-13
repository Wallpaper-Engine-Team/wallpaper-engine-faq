---
tags:
  - antivirüs
  - gösterim
---

# Duvar kâğıtları görünmüyor

Duvar kâğıtlarınızın bir kısmı veya hiçbiri görünmüyorsa bunun nedeni genellikle Wallpaper Engine'i yanlışlıkla engelleyen bir antivirüs uygulamasıdır. Eğer bir antivirüs uygulaması kullanıyorsanız lütfen bunu *wallpaper_engine* yükleme dizini ve tüm önemli Wallpaper Engine yürütülebilir dosyalarını yoksayacak şekilde yapılandırdığınızdan emin olun:

* *wallpaper_engine/wallpaper32.exe*
* *wallpaper_engine/wallpaper64.exe*
* *wallpaper_engine/launcher.exe*
* *wallpaper_engine/bin/webwallpaper32.exe*
* *wallpaper_engine/bin/ui32.exe*

::: tip Yüklü bir antivirüs uygulamanız varsa (Windows Defender hariç) sorunlarınızın sebebi büyük olasılıkla bu uygulamadır. İlk denemeleriniz bu sorunu çözmüyorsa bunu araştırmak için biraz daha zaman ayırın.
:::

## Windows'ta yüksek kontrast modu

Windows 10 tema ayarlarınızdan **Yüksek Kontrast Beyaz** temasını seçerek **yüksek kontrast modunu** etkinleştirdiyseniz, Windows zorla Wallpaper Engine duvar kâğıtlarını kapatır. Windows yüksek kontrast ayarlarını kullanıyorsanıza yüksek kontrast temasını değiştirmeyi ya da yüksek kontrast modunu tamamen kapatmayı deneyin, sorun ortadan kalkacaktır.

## Wallpapers disappearing / fading away in regular intervals

If your wallpapers keep disappearing for a brief moment, you likely have a slideshow configured as your Windows wallpaper. Open the Windows wallpaper settings and set a solid color or a static image as your regular Windows wallpaper, this will fix this problem.

## Conflicts with other desktop modification software

Wallpaper Engine works well with most desktop-modification applications. However, some applications such as StarDock DeskScapes also modify the Windows wallpaper and it is not possible to run both applications at the same time. If you use a similar application to Wallpaper Engine, you will need to decide on one which you want to continue to use.

### Fences

Generally, Wallpaper Engine works fine with *Fences*. However, **if you have Fences installed but have disabled it**, it will hide the wallpaper from Wallpaper Engine. You need to either enable or uninstall it completely.

If you are using Fences and your Wallpaper Engine wallpapers are not visible, ensure that you are using **Fences 3.13 or newer** to avoid these compatibility issues with Wallpaper Engine. Fences 3.13 and newer versions contain important compatibility fixes with Wallpaper Engine, so it is important that you ensure your Fences is up-to-date.

## Gray Wallpaper or missing textures on Windows 7

Make sure that the Windows 7 update **KB2533623** is installed. Either install it manually with that link or ensure that your Windows Update is working right and installing it by itself. You can download it manually from the Microsoft website, restart your system afterwards and the problem should go away:

* [KB2533623](https://support.microsoft.com/tr-tr/help/2533623/microsoft-security-advisory-insecure-library-loading-could-allow-remot)