# 32 位 & 64 位版本

64 位版本可处理更大的文件（大于 2GB），但无论壁纸文件大小如何，它都始终占用更多内存。 例如，对于普通视频壁纸，与 32 位版本相比，64 位版本可能使用大约 50 MB 以上的 RAM，此外没有任何区别或改进。

::: 提示 我们建议您坚持使用 32 位版本，除非您的壁纸非常大，会使 32 位版本崩溃。 绝大多数用户从未遇到此问题。 :::

如果 PC 上的视频系统出现仅影响 32 位程序的错误，您也可以选择 64 位版本。 如果您曾经安装过编解码器包或类似程序，它们可能已经永久损坏了 Wallpaper Engine 使用的 32 位 Windows 视频系统。 如果 64 位系统不受影响，您可以使用 64 位版本的 Wallpaper Engine，这样就不必修复任何损坏的内容了。

::: 警告 注意 请注意，“Web”类型的壁纸将始终使用 32 位可执行文件 (webwallpaper32.exe) 来执行。 用户界面本身也是如此 (ui32.exe)。 仅当选择了“场景”或“视频”类型的壁纸时，才适用 64 位可执行文件。 :::

## 如何将 Wallpaper Engine 设置为在 Windows 启动时以 32 位或 64 位版本自动启动？

首先，通过托盘图标完全关闭 Wallpaper Engine（右键单击 Windows 托盘中的 Wallpaper Engine 图标 ->“退出”）。 This is important as Steam will otherwise not launch Wallpaper Engine and only bring the already running version to the foreground.

Once Wallpaper Engine is turned off, go to Steam and start either the 32 Bit or 64 Bit version, depending on which version you want to automatically start. Go to the Wallpaper Engine settings and at the top of the "General" tab, enable autostart. If it is already enabled, turn it off completely and then turn it back on. This will register the current version as the one which will be automatically started alongside Windows. 