# 32 位和 64 位版本

We recommend using the 64-bit version of Wallpaper Engine since the 64-bit version can handle larger files (more than 2GB). Other than that, the two versions are the same and also deliver the same level of visual fidelity and performance.

In rare cases, switching to the 32-bit version may help you resolve issues with broken 64-bit Windows components, drivers, video codec packs and other app incompatibilities. This may help you fix specific Wallpaper Engine problems without resolving the underlying issue on your system.

::: warning
注意
请注意，“Web”类型的壁纸将始终使用 32 位可执行文件 (webwallpaper32.exe) 来执行。 用户界面本身也是如此 (ui32.exe)。 仅当选择了“场景”或“视频”类型的壁纸时，才适用 64 位可执行文件。
:::

## 如何将 Wallpaper Engine 设置为在 Windows 启动时以 32 位或 64 位版本自动启动？

First, completely turn off Wallpaper Engine via the tray icon (right-click on the Wallpaper Engine icon in the Windows tray, then select "Quit"). Do not skip this step, as Steam will otherwise not restart Wallpaper Engine and only bring the already running version to the foreground.

Once Wallpaper Engine is turned off, go to Steam and start either the 32-bit or 64-bit version, depending on which version you want to automatically start. Next, go to the Wallpaper Engine settings and at the top of the "General" tab, enable the automatic startup functionality. 如果已启用该功能，则将其完全关闭，然后再重新打开。 这会将当前版本注册为要随 Windows 自动启动的版本。