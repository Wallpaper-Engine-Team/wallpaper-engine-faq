# 32 位元與 64 位元版本

64 位元版本得以處理更大的檔案 (大於 2GB)，但無論桌布檔案大小為何，勢必佔用更多記憶體。 舉例來說，如果是一般的視訊桌布，64 位元版本可能比 32 位元版本多佔用約 50 MB 以上的 RAM，此外並無任何區別或改善。

::: 提示 我們建議您繼續使用 32 位元版本，除非您的桌布檔案超大，大到使 32 位元當機。 絕大多數使用者從未遇上此問題。 :::

如果個人電腦的視訊系統出現僅影響 32 位元版本程式的錯誤，您也可以選用 64 位元版本。 如果您曾安裝轉碼器套件之類的程式，這些程式可能已造成 Wallpaper Engine 使用的 32 位元 Windows 視訊系統永久損壞。 If the 64-bit system is not affected, you'll be able to take advantage of that by using the 64-bit version of Wallpaper Engine and so you can avoid having to fix whatever got broken.

::: warning Note Note that "Web" type wallpapers will always be executed with a 32-Bit executable (webwallpaper32.exe). The same applies to the user interface itself (ui32.exe). 64-Bit only applies when selecting wallpapers of the type "Scene" or "Video". :::

## How to set-up Wallpaper Engine to autstart with either the 32 or 64 Bit version when Windows launches?

First, completely turn off Wallpaper Engine via the tray icon (right-click on the Wallpaper Engine icon in the Windows tray -> "Quit"). This is important as Steam will otherwise not launch Wallpaper Engine and only bring the already running version to the foreground.

Once Wallpaper Engine is turned off, go to Steam and start either the 32 Bit or 64 Bit version, depending on which version you want to automatically start. Go to the Wallpaper Engine settings and at the top of the "General" tab, enable autostart. If it is already enabled, turn it off completely and then turn it back on. This will register the current version as the one which will be automatically started alongside Windows. 