# 32-разрядная и 64-разрядная версии

64-разрядная версия позволяет работать с более «тяжелыми» файлами (больше 2 Гб), но она всегда потребляет больше памяти, вне зависимости от размера обоев. Например, при работе со стандартными видеообоями, 64-разрядная версия будет потреблять примерно на 50 Мб больше ОЗУ в сравнении с 32-разрядной. В остальном в работе версий нет никаких различий.

::: tip We recommend you stick to the 32-bit version unless you have huge wallpapers that would make the 32-bit version crash. The large majority of users never encounter this problem. :::

You may also opt for the 64-bit version when the video system on your PC has errors that only affect 32-bit programs. Should you ever have installed codec packs or alike, they may have permanently damaged the 32-bit Windows video system that Wallpaper Engine uses. If the 64-bit system is not affected, you'll be able to take advantage of that by using the 64-bit version of Wallpaper Engine and so you can avoid having to fix whatever got broken.

::: warning Note Note that "Web" type wallpapers will always be executed with a 32-Bit executable (webwallpaper32.exe). The same applies to the user interface itself (ui32.exe). 64-Bit only applies when selecting wallpapers of the type "Scene" or "Video". :::

## How to set-up Wallpaper Engine to autstart with either the 32 or 64 Bit version when Windows launches?

First, completely turn off Wallpaper Engine via the tray icon (right-click on the Wallpaper Engine icon in the Windows tray -> "Quit"). This is important as Steam will otherwise not launch Wallpaper Engine and only bring the already running version to the foreground.

Once Wallpaper Engine is turned off, go to Steam and start either the 32 Bit or 64 Bit version, depending on which version you want to automatically start. Go to the Wallpaper Engine settings and at the top of the "General" tab, enable autostart. If it is already enabled, turn it off completely and then turn it back on. This will register the current version as the one which will be automatically started alongside Windows. 