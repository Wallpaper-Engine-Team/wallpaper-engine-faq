# "İçerik dosyası kilitli" / Disk Yazma Hatası

Steam, uygulamayı yüklerken veya güncellerken Wallpaper Engine'i indiremiyorsa bunun nedeni büyük olasılıkla antivirüsünüzün dosyaları silmesi, karantinaya alması veya diskinizdeki tüm dizinleri size bildirmeden engellemesidir. Bu durumda Steam'de "içerik dosyası kilitli" veya "erişim reddedildi" hatalarını alacaksınız. Bu durum, PC'nizde yaptığı değişiklikleri geri alarak antivirüsünüz üzerinde çözülmelidir. Çoğu antivirüs programının dosyaları geri yükleyebileceğiniz veya güvenilir adresler listesi oluşturabileceğiniz bir karantina penceresi vardır. Antivirüs uygulamanızın aşağıdaki dizinleri yok saydığından emin olun:

* `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine`
* `C:\Program Files (x86)\Steam\steamapps\workshop\downloads`
* `C:\Program Files (x86)\Steam\steamapps\downloading`

*Steam veya Wallpaper Engine farklı bir dizine kurulmuşsa dizinleri gerçek Steam yükleme yolunuza göre ayarlamanız gerekir.*

Antivirüs uygulamanızı bu tür dizinleri yok sayma yönünde yapılandırdığınız hâlde sorun devam ettiği takdirde, bazen Wallpaper Engine Steam yoluyla silinmelidir ve ardından Steam'in dosya indirmesini engellemeye devam edebilecek olan antivirüs sınırlamalarının kaldırılması için `wallpaper_engine` dizini kalıntılarının silinmesi gerekir. `wallpaper_engine` klasörünün tamamının silinmesinin ardından uygulamayı tekrar Steam üzerinden indirmeyi deneyin.