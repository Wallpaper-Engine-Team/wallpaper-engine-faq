- - -
  tags:
  - screensavers
  - hibernation
  - sleep
  - power saving
- - -

# Hazırda bekletme / Ekran koruyucular çalışmıyor

Windows, herhangi bir aktif ses akışı açıkken hazırda beklemez. You can get around this by either disabling audio output in the "General" tab of the Wallpaper Engine settings to prevent Windows from blocking hibernation in the first place. If you want to continue to have audio output, follow the steps in this guide on how to achieve that.

## Windows güç ayarlarını değiştirin

Windows does not hibernate with any active audio streams open. You can get around this by either disabling audio output in the "General" tab of the Wallpaper Engine settings or re-configuring your Windows to allow it to sleep with audio playback enabled:

1. Windows arama kısmına yazarak "Güç ve uyku ayarları"na gidin.
2. "Ek güç ayarları"na tıklayın
3. Seçilen planın yanındaki "Plan ayarlarını değiştir"e tıklayın
4. "Gelişmiş güç ayarlarını değiştir"e tıklayın
5. Aşağı inin ve "Multimedya ayarları"nı açın
6. "Medya paylaşılırken" seçeneğini "Bilgisayarın Uzakta Modu'na girmesine izin ver" (ekran koruyucular) **veya** "Bilgisayarın uyku moduna geçmesine izin ver" (hazırda bekletme) olarak ayarlayın

![Enable "Allow the computer to sleep"](./power.gif)

## "Web" duvar kâğıtlarındaki hazırda bekletme sorunları

"Web" wallpapers use a web browser similar to Google Chrome ("CEF") which will prevent hibernation mode. Until this is fixed in the browser, you can get around this with some command-line prompts.

1. Windows'ta "cmd.exe"yi aratarak sağ tıklayın ve "Yönetici olarak çalıştır"ı (çok önemli, aksi hâlde bu işe yaramayacaktır!) seçin.
2. Sisteminizi hazırda bekletme konusunda engelleyen tüm işlemleri görüntülemek için `powercfg /requests` komutunu kullanın (ayrıca başka programların hatalı olup olmadığını da kontrol edin).
3. Wallpaper Engine çalışırken sisteminizin uyumasına izin vermek için şu üç komutu kullanın:

```
powercfg /requestsoverride PROCESS webwallpaper32.exe AWAYMODE DISPLAY SYSTEM
powercfg /requestsoverride PROCESS wallpaper32.exe AWAYMODE DISPLAY SYSTEM
powercfg /requestsoverride PROCESS wallpaper64.exe AWAYMODE DISPLAY SYSTEM
```

Additionally, you can also set the **Display asleep** option in the **Performance** tab of the Wallpaper Engine settings to *Stop (free memory)* and turn off your display. That way Wallpaper Engine stops all playback when you turn your display off when leaving your computer unattended.