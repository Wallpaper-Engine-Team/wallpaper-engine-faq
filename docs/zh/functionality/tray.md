# 隐藏 Wallpaper Engine 托盘图标

您可以手动创建注册表项，让 Wallpaper Engine 隐藏位于 Windows 时钟旁边的托盘图标。

::: 警告 我们不建议您执行此操作，除非您完全确定托盘图标给您造成极大的烦扰，以至于您愿意接受隐藏托盘图标的弊端。 :::

托盘图标隐藏后，关闭 Wallpaper Engine 的唯一方法是通过 Windows 任务管理器结束任务。 您将只能通过 Steam 或 .exe 文件打开用户界面，这非常不便，而且令人困惑。

If you still want to proceed with hiding the tray icon, this is how you do it:

In order to create the registry key, open up the Windows start menu and type "regedit.exe" which will open the "Registry Editor".

1. Go to the following registry directory: *HKEY_CURRENT_USER\Software\WallpaperEngine*
2. Right-click on the *WallpaperEngine* registry folder, select *New* and then *DWORD (32 Bit) Value*.
3. Give the registry the following name: *hideTrayIcon*
4. Make sure that the name is correct, it must have no spaces and must be written exactly like that.
5. Double-click on the registry key and give it the value: *1*
6. Restart Wallpaper Engine, the application will now not show a tray icon.

You can reverse this process by setting *hideTrayIcon* to *0* or deleting it altogether, followed by restarting Wallpaper Engine. 