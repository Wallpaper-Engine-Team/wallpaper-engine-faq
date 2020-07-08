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

Yasal nedenlerden dolayı LAV'ı Wallpaper Engine ile birlikte sunamıyoruz. Yani bunu sizin indirip yüklemeniz gerekiyor. Ayrıca LAV'ı kurduktan sonra Wallpaper Engine'i DirectShow'u kullanacak şekilde yapılandırmanız gerekir: Yasal nedenlerden dolayı LAV'ı Wallpaper Engine ile birlikte sunamıyoruz. Yani bunu sizin indirip yüklemeniz gerekiyor. Ayrıca LAV'ı kurduktan sonra Wallpaper Engine'i DirectShow'u kullanacak şekilde yapılandırmanız gerekir:

## 1. LAV kurun
* LAV Filters'ın x86 **VE** x64 sürümlerini indirin:
  * Ayna #1: [Github](https://github.com/Nevcairiel/LAVFilters/releases)
  * Ayna #2: [Fosshub](https://www.fosshub.com/LAV-Filters.html)
* LAV kurun, Windows kullanıcınızın yönetici haklarına sahip olduğundan emin olun
* Wallpaper Engine'i yeniden başlatın.

## 2. 2. DirectShow'u etkinleştirin
* Wallpaper Engine ayarlarını açın ve "Genel" sekmesine gidin
* **Video altyapısı** seçeneğini **DirectShow'u Tercih Et** olarak değiştirin
* Uygulamayı yeniden başlatın ve video duvar kâğıdınızı tekrar kullanmayı deneyin

## WebM Donanım Hızlandırmasını Etkinleştirme
Video duvar kâğıtlarınızın sonunda takılmalar yaşıyorsanız aynı sorunu yaşamayan .webm dosyalarını kullanabilirsiniz. Video duvar kâğıtlarınızın sonunda takılmalar yaşıyorsanız aynı sorunu yaşamayan .webm dosyalarını kullanabilirsiniz. Donanım hızlandırmayı .webm videoları için etkinleştirmeniz de oldukça iyidir. Bu şekilde CPU kullanımı önemli ölçüde azaltılacak ve video duvar kâğıtlarının son kareden sonra önemli bir kesinti olmadan döngüye girmesi sağlanacaktır. Bu işlem yukarıdaki adımların devamıdır. Önceki bölümde açıklandığı şekilde LAV'ı kurduğunuzdan ve DirectShow'u etkinleştirdiğinizden emin olun. Bu işlem yukarıdaki adımların devamıdır. Önceki bölümde açıklandığı şekilde LAV'ı kurduğunuzdan ve DirectShow'u etkinleştirdiğinizden emin olun.
* Wallpaper Engine ayarlarını açın ve "Genel" sekmesine gidin
* **WebM altyapısı** seçeneğini **Doğal Tercih Et** olarak değiştirin
* Uygulamayı yeniden başlatın ve video duvar kâğıdınızı tekrar kullanmayı deneyin

LAV sistem tepsisi simgesinin görünüp görünmediğini ve CPU kullanımının neredeyse sıfır olup olmadığını kontrol edin. Donanım hızlandırma .webm içeriğinize uygulanmıştır. Eğer bu işe yaramazsa tüm seçeneklerin doğru yapılandırıldığından ve LAV'ın doğru şekilde kurulduğundan emin olun. Eğer bu işe yaramazsa tüm seçeneklerin doğru yapılandırıldığından ve LAV'ın doğru şekilde kurulduğundan emin olun.