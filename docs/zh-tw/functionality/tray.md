# 隱藏 Wallpaper Engine 在通知區域的圖示

Wallpaper Engine 在通知區域的圖示是可以隱藏的。您可手動建立一組登錄機碼，讓時鐘旁邊的 Wallpaper Engine 圖示隱藏起來。

::: 警告 我們不建議您執行此操作，除非您百分百肯定通知區域的圖示造成您莫大困擾，因此無論如何都願意接受圖示隱藏之後的不便。 :::

一旦通知區域圖示隱藏，關閉 Wallpaper Engine 的唯一方式是從 Windows 工作管理員結束工作。 You will only be able to open up the user interface through Steam or the .exe files which is rather inconvenient and confusing.

If you still want to proceed with hiding the tray icon, this is how you do it:

In order to create the registry key, open up the Windows start menu and type "regedit.exe" which will open the "Registry Editor".

1. Go to the following registry directory: *HKEY_CURRENT_USER\Software\WallpaperEngine*
2. Right-click on the *WallpaperEngine* registry folder, select *New* and then *DWORD (32 Bit) Value*.
3. Give the registry the following name: *hideTrayIcon*
4. Make sure that the name is correct, it must have no spaces and must be written exactly like that.
5. Double-click on the registry key and give it the value: *1*
6. Restart Wallpaper Engine, the application will now not show a tray icon.

You can reverse this process by setting *hideTrayIcon* to *0* or deleting it altogether, followed by restarting Wallpaper Engine. 