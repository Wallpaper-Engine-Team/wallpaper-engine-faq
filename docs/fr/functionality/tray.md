# Cacher Wallpaper Engine dans la zone de notification

Il est possible de masquer l'icône de Wallpaper Engine dans la zone de notification en créant manuellement une clé de registre qui indique à Wallpaper Engine de masquer cette icône.

::: warning Nous vous déconseillons de le faire, sauf si cette icône vous gâche la vie au point que vous êtes prêt·e à accepter les inconvénients que nous allons vous expliquer maintenant. :::

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