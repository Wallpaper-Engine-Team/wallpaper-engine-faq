# Wallpaper Engine 트레이 아이콘 숨기기

It is possible to hide the Wallpaper Engine tray icon by manually creating a registry key which tells Wallpaper Engine to hide the tray icon next to the Windows clock.

::: warning We do not recommend to do this unless you are absolutely sure that the tray icon is annoying you so much that you are willing to accept the downsides of hiding the tray icon. :::

Once the tray icon is hidden, the only way to turn off Wallpaper Engine will be to kill it through the Windows Task Manager. You will only be able to open up the user interface through Steam or the .exe files which is rather inconvenient and confusing.

If you still want to proceed with hiding the tray icon, this is how you do it:

In order to create the registry key, open up the Windows start menu and type "regedit.exe" which will open the "Registry Editor".

1. Go to the following registry directory: *HKEY_CURRENT_USER\Software\WallpaperEngine*
2. Right-click on the *WallpaperEngine* registry folder, select *New* and then *DWORD (32 Bit) Value*.
3. Give the registry the following name: *hideTrayIcon*
4. Make sure that the name is correct, it must have no spaces and must be written exactly like that.
5. Double-click on the registry key and give it the value: *1*
6. Restart Wallpaper Engine, the application will now not show a tray icon.

You can reverse this process by setting *hideTrayIcon* to *0* or deleting it altogether, followed by restarting Wallpaper Engine. 