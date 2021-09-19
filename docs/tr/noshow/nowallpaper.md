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

## Belirli aralıklarla yok olan arka planlar

Arka planlarınız sürekli kısa süreliğine yok oluyor ise slayt gösteriniz Windows arka planınız olarak yapılandırılmış olabilir. Windows arka plan ayarlarınız açıp normal Windows arka planınız olarak düz bir renk veya hareketsiz bir görüntü ayarlayarak sorunu çözebilirsiniz.

## Diğer masaüstü değişiklik yazılımlarıyla çakışmalar

Wallpaper Engine, çoğu masaüstü değişiklik uygulamasıyla uyumlu çalışır. Ancak StarDock DeskScapes gibi bazı uygulamalar Windows duvar kâğıdını da değiştirir ve iki uygulamayı da aynı anda çalıştırmak mümkün değildir. Wallpaper Engine'e benzer bir uygulama kullanıyorsanız hangisini kullanmaya devam edeceğinize karar vermeniz gerekir.

### Fences

Wallpaper Engine genellikle *Fences* ile uyumlu çalışır. Ancak **Fences yüklüyse ve bunu devre dışı bıraktıysanız** duvar kâğıdını Wallpaper Engine'den gizleyecektir. Uygulamayı tamamen etkinleştirmeniz veya kaldırmanız gerekir.

Fences kullanıyorsanız ve Wallpaper Engine arka planlarınız görünmüyor ise bu tür Wallpaper Engine uyum sorunlarından kaçınmak için **Fences 3.13 veya daha güncelini** kullandığınızdan emin olun. Fences 3.13 ve daha güncel sürümlerinde Wallpaper Engine'e yönelik önemli uyum ayarları mevcut olduğundan Fences uygulamanızın güncel olması önemlidir.

## Windows 7'deki Gri Duvar Kâğıdı veya eksik dokular

**KB2533623** Windows 7 güncellemesinin yüklü olduğundan emin olun. Ya bu bağlantıyla manuel olarak yükleyin ya da Windows Update'in düzgün çalışıp kendi başına yüklediğinden emin olun. Microsoft web sitesinden manuel olarak indirebilir ve sonrasında sistemi yeniden başlatarak sorunu çözebilirsiniz:

* [KB2533623](https://support.microsoft.com/tr-tr/help/2533623/microsoft-security-advisory-insecure-library-loading-could-allow-remot)