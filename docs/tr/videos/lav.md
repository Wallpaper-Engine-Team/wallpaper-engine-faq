---
tags:
  - webm
  - video
  - siyah
  - codec
  - filters
  - 4K
  - HEVC
  - mkv
  - mp4
---

# LAV ve DirectShow'u kullanma
Bozuk video codec bileşenleriyle ilgili sorunlarınız varsa veya sisteminizde ek video formatları kullanmak istiyorsanız LAV'ı yüklemeyi ve Wallpaper Engine ayarlarında DirectShow'u etkinleştirmeyi deneyebilirsiniz. Bu işlem, **Windows 7'de 4K ve HEVC videoları** için daha iyi destek sağlar ve **.mkv** dosyalarının açılmasına izin verir.

Yasal nedenlerden dolayı LAV'ı Wallpaper Engine ile birlikte sunamıyoruz. Yani bunu sizin indirip yüklemeniz gerekiyor. Ayrıca LAV'ı kurduktan sonra Wallpaper Engine'i DirectShow'u kullanacak şekilde yapılandırmanız gerekir:

## 1. LAV kurun
* LAV Filters'ın x86 **VE** x64 sürümlerini indirin:
  * Ayna #1: [Github](https://github.com/Nevcairiel/LAVFilters/releases)
  * Ayna #2: [Fosshub](https://www.fosshub.com/LAV-Filters.html)
* LAV kurun, Windows kullanıcınızın yönetici haklarına sahip olduğundan emin olun
* Wallpaper Engine'i yeniden başlatın.

## 2. DirectShow'u etkinleştirin
* Wallpaper Engine ayarlarını açın ve "Genel" sekmesine gidin
* **Video altyapısı** seçeneğini **DirectShow'u Tercih Et** olarak değiştirin
* Uygulamayı yeniden başlatın ve video duvar kâğıdınızı tekrar kullanmayı deneyin

## WebM Donanım Hızlandırmasını Etkinleştirme
Video duvar kâğıtlarınızın sonunda takılmalar yaşıyorsanız aynı sorunu yaşamayan .webm dosyalarını kullanabilirsiniz. It's best if you also enable hardware acceleration for .webm videos which will reduce the CPU usage for them significantly and still allows video wallpapers to loop without a notable cut after the last frame. This is a continuation of the steps above, make sure you have installed LAV and enabled DirectShow as instructed in the previous section.
* Open the Wallpaper Engine settings and navigate to the "General" tab
* Change the **WebM framework** option to **Prefer Native**
* Restart the application and try using your video wallpaper again

Check if the LAV system tray icon shows up and if the CPU usage is nearly zero, then your .webm content is now hardware accelerated. If it does not seem to work, make sure all options are configured correctly and LAV is correctly installed.