# Taskleistensymbol von Wallpaper Engine verstecken

Es ist möglich, das Taskleistensymbol von Wallpaper Engine zu verstecken, indem ein Schlüssel in der Windows-Registry angelegt wird, welcher Wallpaper Engine mitteilt, dass es das Symbol neben der Windows-Uhr verstecken soll.

::: warning
Wir empfehlen diesen Schritt nicht, außer du bist dir absolut sicher, dass dich das Symbol in der Taskleiste so viel nervt, dass du ganz bewusst die Nachteile die durch das Verstecken des Taskleistensymbols in Kauf nimmst.
:::

Sobald das Icon in der Taskleiste versteckt ist, kannst du Wallpaper Engine nur noch deaktivieren, indem du es über den Windows Task Manager terminierst. Du bist dann auch nur in der Lage die Benutzeroberfläche über Steam oder durch das Anklicken der .exe-Dateien zu öffnen, was unter Umständen relativ lästig sein und für Verwirrung sorgen kann.

Wenn du trotzdem fortfahren möchtest und das Taskleistensymbol verstecken möchtest, kannst du dies wie folgt tun:

In order to create the registry key, open up the Windows start menu and type "regedit.exe" which will open the "Registry Editor".

1. Go to the following registry directory: *HKEY_CURRENT_USER\Software\WallpaperEngine*
2. Right-click on the *WallpaperEngine* registry folder, select *New* and then *DWORD (32 Bit) Value*.
3. Give the registry the following name: *hideTrayIcon*
4. Make sure that the name is correct, it must have no spaces and must be written exactly like that.
5. Double-click on the registry key and give it the value: *1*
6. Restart Wallpaper Engine, the application will now not show a tray icon.

You can reverse this process by setting *hideTrayIcon* to *0* or deleting it altogether, followed by restarting Wallpaper Engine. 