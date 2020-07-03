# 32 Bit & 64 Bit Sürümü

64 bit sürüm daha büyük dosyaları (2GB üzeri) işleyebilir ancak duvar kâğıtlarının dosya boyutu ne olursa olsun her zaman daha fazla bellek kullanır. Örneğin normal bir video duvar kâğıdı ile 64 bit sürümü, 32 bit sürüme kıyasla yaklaşık 50 MB daha fazla RAM kullanabilir. Bunun dışında farklı ya da gelişmiş bir şey yoktur.

::: ipucu 32 bit sürümün çökmesine neden olacak büyük duvar kâğıtlarınız yoksa 32 bit sürümü kullanmanızı öneririz. Kullanıcıların büyük çoğunluğu bu sorunla karşılaşmıyor. :::

PC'nizdeki video sisteminde yalnızca 32 bit programları etkileyen hatalar olduğunda da 64 bit sürümü tercih edebilirsiniz. Codec paketleri ya da benzerlerini kurduysanız bunlar, Wallpaper Engine'in kullandığı 32 bit Windows video sistemine kalıcı olarak zarar vermiş olabilir. If the 64-bit system is not affected, you'll be able to take advantage of that by using the 64-bit version of Wallpaper Engine and so you can avoid having to fix whatever got broken.

::: warning Note Note that "Web" type wallpapers will always be executed with a 32-Bit executable (webwallpaper32.exe). The same applies to the user interface itself (ui32.exe). 64-Bit only applies when selecting wallpapers of the type "Scene" or "Video". :::

## How to set-up Wallpaper Engine to autstart with either the 32 or 64 Bit version when Windows launches?

First, completely turn off Wallpaper Engine via the tray icon (right-click on the Wallpaper Engine icon in the Windows tray -> "Quit"). This is important as Steam will otherwise not launch Wallpaper Engine and only bring the already running version to the foreground.

Once Wallpaper Engine is turned off, go to Steam and start either the 32 Bit or 64 Bit version, depending on which version you want to automatically start. Go to the Wallpaper Engine settings and at the top of the "General" tab, enable autostart. If it is already enabled, turn it off completely and then turn it back on. This will register the current version as the one which will be automatically started alongside Windows. 