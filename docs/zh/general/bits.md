# 32 位和 64 位版本

我们建议使用 64 位版本的 Wallpaper Engine，因为 64 位版本可以处理较大的文档（超过 2GB）。 除此之外，这两个版本是一样的，也提供了相同的视觉保真度和性能。

In rare cases, switching to the 32-bit version may help you resolve issues with broken 64-bit Windows components, drivers, video codec packs and other app incompatibilities. This may help you fix specific Wallpaper Engine problems without resolving the underlying issue on your system.

**Please Note:** *"Web"*-type wallpapers will always be executed with a 32-bit executable *(webwallpaper32.exe)*. The same applies to the user interface of Wallpaper Engine *(ui32.exe)*. The 64-bit option only applies when selecting wallpapers of the type *"Scene"* or *"Video"*.

## 如何将 Wallpaper Engine 设置为在 Windows 启动时以 32 位或 64 位版本自动启动？

First, completely turn off Wallpaper Engine via the tray icon (right-click on the Wallpaper Engine icon in the Windows tray, then select "Quit"). Do not skip this step, as Steam will otherwise not restart Wallpaper Engine and only bring the already running version to the foreground.

Once Wallpaper Engine is turned off, go to Steam and start either the 32-bit or 64-bit version, depending on which version you want to automatically start. Next, go to the Wallpaper Engine settings and at the top of the "General" tab, enable the automatic startup functionality. 如果已启用该功能，则将其完全关闭，然后再重新打开。 这会将当前版本注册为要随 Windows 自动启动的版本。