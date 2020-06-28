# Steam 始终显示“游戏中”
Wallpaper Engine 仅应在访问创意工坊功能时显示在 Steam 上（浏览器或编辑器打开时，此操作由 Valve/Steam 强制执行）。 但如果关闭所有窗口后仍然显示 Wallpaper Engine，那么您可能遇到了一个已知的 Steam 错误（可通过以下修复避免），或者窗口未正确关闭（请在任务管理器中查找 ui32.exe）。

如果经常遇到此问题，您可以通过以下方法予以解决：不通过 Steam 启动程序，而是直接从 wallpaper_engine 安装目录启动程序。 默认情况下，程序路径应为 `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\wallpaper32.exe`。 If Wallpaper Engine is running already, completely turn it off first and then re-run it from this directory and possibly turn the autostart off and back on in the Wallpaper Engine settings.

Every time Steam reconnects to the internet, due to your internet turning off and on, Steam may go a little crazy when it comes to your in-game status which can cause issues like that. As mentioned above, start the program directly or via the autostart functionality and not through Steam, this will likely prevent the issue from happening for you.

## Completely disable Workshop / Steam integration
You can disable the entire Steam integration by creating an empty text file named `nosteam.txt` and putting it into the `wallpaper_engine/bin` directory (by default the complete path is `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\bin`). You cannot download/update or upload any wallpapers if this is disabled, but you can still access everything that was previously downloaded. 