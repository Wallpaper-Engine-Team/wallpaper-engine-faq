# 32 位 & 64 位版本

64 位版本可处理更大的文件（大于 2GB），但无论壁纸文件大小如何，它都始终占用更多内存。 例如，对于普通视频壁纸，与 32 位版本相比，64 位版本可能使用大约 50 MB 以上的 RAM，此外没有任何区别或改进。

::: 提示 我们建议您坚持使用 32 位版本，除非您的壁纸非常大，会使 32 位版本崩溃。 绝大多数用户从未遇到此问题。 :::

如果 PC 上的视频系统出现仅影响 32 位程序的错误，您也可以选择 64 位版本。 如果您曾经安装过编解码器包或类似程序，它们可能已经永久损坏了 Wallpaper Engine 使用的 32 位 Windows 视频系统。 如果 64 位系统不受影响，您可以使用 64 位版本的 Wallpaper Engine，这样就不必修复任何损坏的内容了。

::: warning Note Note that "Web" type wallpapers will always be executed with a 32-Bit executable (webwallpaper32.exe). The same applies to the user interface itself (ui32.exe). 64-Bit only applies when selecting wallpapers of the type "Scene" or "Video". :::

## How to set-up Wallpaper Engine to autstart with either the 32 or 64 Bit version when Windows launches?

First, completely turn off Wallpaper Engine via the tray icon (right-click on the Wallpaper Engine icon in the Windows tray -> "Quit"). This is important as Steam will otherwise not launch Wallpaper Engine and only bring the already running version to the foreground.

Once Wallpaper Engine is turned off, go to Steam and start either the 32 Bit or 64 Bit version, depending on which version you want to automatically start. Go to the Wallpaper Engine settings and at the top of the "General" tab, enable autostart. If it is already enabled, turn it off completely and then turn it back on. This will register the current version as the one which will be automatically started alongside Windows. 