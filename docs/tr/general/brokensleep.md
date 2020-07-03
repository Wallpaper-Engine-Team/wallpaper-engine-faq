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

![Enable "Allow the computer to sleep"](./power.gif)

## "Web" duvar kâğıtlarındaki hazırda bekletme sorunları

"Web" duvar kâğıtları, hazırda bekletme modunu engelleyecek Google Chrome ("CEF") benzeri bir web tarayıcısı kullanır. Bu durum tarayıcıda çözülene kadar bazı komut satırı bilgi istemleriyle bu sorunu çözebilirsiniz.

1. Windows'ta "cmd.exe"yi aratarak sağ tıklayın ve "Yönetici olarak çalıştır"ı (çok önemli, aksi hâlde bu işe yaramayacaktır!) seçin.
2. Use the command `powercfg /requests` to view all processes that are blocking your system from hibernation (also check if other programs may be at fault here).
3. Use the following three commands to permit your system to sleep with Wallpaper Engine running:

```
powercfg /requestsoverride PROCESS webwallpaper32.exe AWAYMODE DISPLAY SYSTEM
powercfg /requestsoverride PROCESS wallpaper32.exe AWAYMODE DISPLAY SYSTEM
powercfg /requestsoverride PROCESS wallpaper64.exe AWAYMODE DISPLAY SYSTEM
```

Additionally, you can also set the **Display asleep** option in the **Performance** tab of the Wallpaper Engine settings to *Stop (free memory)* and turn off your display. That way Wallpaper Engine stops all playback when you turn your display off when leaving your computer unattended.