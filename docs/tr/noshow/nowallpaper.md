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

::: ipucu Yüklü bir antivirüs uygulamanız varsa (Windows Defender hariç) sorunlarınızın sebebi büyük olasılıkla bu uygulamadır. İlk denemeleriniz bu sorunu çözmüyorsa bunu araştırmak için biraz daha zaman ayırın. :::

## Diğer masaüstü değişiklik yazılımlarıyla çakışmalar

Wallpaper Engine, çoğu masaüstü değişiklik uygulamasıyla uyumlu çalışır. Ancak StarDock DeskScapes gibi bazı uygulamalar Windows duvar kâğıdını da değiştirir ve iki uygulamayı da aynı anda çalıştırmak mümkün değildir. Wallpaper Engine'e benzer bir uygulama kullanıyorsanız hangisini kullanmaya devam edeceğinize karar vermeniz gerekir.

### Fences

Wallpaper Engine genellikle *Fences* ile uyumlu çalışır. Ancak **Fences yüklüyse ve bunu devre dışı bıraktıysanız** duvar kâğıdını Wallpaper Engine'den gizleyecektir. Uygulamayı tamamen etkinleştirmeniz veya kaldırmanız gerekir.

## Windows 7'deki Gri Duvar Kâğıdı veya eksik dokular

**KB2533623** Windows 7 güncellemesinin yüklü olduğundan emin olun. Ya bu bağlantıyla manuel olarak yükleyin ya da Windows Update'in düzgün çalışıp kendi başına yüklediğinden emin olun. Microsoft web sitesinden manuel olarak indirebilir ve sonrasında sistemi yeniden başlatarak sorunu çözebilirsiniz:

* [KB2533623](https://support.microsoft.com/en-us/help/2533623/microsoft-security-advisory-insecure-library-loading-could-allow-remot)