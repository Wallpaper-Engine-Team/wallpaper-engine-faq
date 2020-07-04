# Hazırda bekletme / Ekran koruyucular çalışmıyor

Windows, herhangi bir aktif ses akışı açıkken hazırda beklemez. Windows'un en başta hazırda bekletmeyi engellemesini önlemek için Wallpaper Engine ayarlarında bulunan "Genel" sekmesindeki ses çıkışını devre dışı bırakarak bunu çözebilirsiniz. Ses çıkışı almaya devam etmek istiyorsanız nasıl yapacağınızı görmek için bu rehberdeki adımlara uyun.

## Windows güç ayarlarını değiştirin

Windows, herhangi bir aktif ses akışı açıkken hazırda beklemez. Wallpaper Engine ayarlarında bulunan "Genel" sekmesindeki ses çıkışını devre dışı bırakarak veya Windows'u ses çalma etkinken uykuya geçmesini sağlayacak şekilde yeniden yapılandırarak bunu çözebilirsiniz:

1. Windows arama kısmına yazarak "Güç ve uyku ayarları"na gidin.
2. Click on "Additional power settings"
3. Seçilen planın yanındaki "Plan ayarlarını değiştir"e tıklayın
4. "Gelişmiş güç ayarlarını değiştir"e tıklayın
5. Aşağı inin ve "Multimedya ayarları"nı açın
6. "Medya paylaşılırken" seçeneğini "Bilgisayarın Uzakta Modu'na girmesine izin ver" (ekran koruyucular) **veya** "Bilgisayarın uyku moduna geçmesine izin ver" (hazırda bekletme) olarak ayarlayın

!["Bilgisayarın uyku moduna geçmesine izin ver"'i etkinleştirin](./power.gif)

## "Web" duvar kâğıtlarındaki hazırda bekletme sorunları

"Web" duvar kâğıtları, hazırda bekletme modunu engelleyecek Google Chrome ("CEF") benzeri bir web tarayıcısı kullanır. Bu durum tarayıcıda çözülene kadar bazı komut satırı bilgi istemleriyle bu sorunu çözebilirsiniz.

1. Windows'ta "cmd.exe"yi aratarak sağ tıklayın ve "Yönetici olarak çalıştır"ı (çok önemli, aksi hâlde bu işe yaramayacaktır!) seçin.
2. Sisteminizi hazırda bekletme konusunda engelleyen tüm işlemleri görüntülemek için `powercfg /requests` komutunu kullanın (ayrıca başka programların hatalı olup olmadığını da kontrol edin).
3. Wallpaper Engine çalışırken sisteminizin uyumasına izin vermek için şu üç komutu kullanın:

```
powercfg /requestsoverride PROCESS webwallpaper32.exe AWAYMODE DISPLAY SYSTEM
powercfg /requestsoverride PROCESS wallpaper32.exe AWAYMODE DISPLAY SYSTEM
powercfg /requestsoverride PROCESS wallpaper64.exe AWAYMODE DISPLAY SYSTEM
```

Ek olarak Wallpaper Engine ayarlarında bulunan **Performans** sekmesindeki **Uykuda göster** seçeneğini *Dur (boş bellek)* olarak değiştirebilir ve ekranınızı kapatabilirsiniz. Bu şekilde Wallpaper Engine bilgisayarınızı boş bırakıp ekranınızı kapattığınızda tüm oynatmaları durduracaktır.