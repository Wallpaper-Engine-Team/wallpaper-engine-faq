# ซ่อนไอคอน Wallpaper Engine ที่แถบงาน

คุณสามารถสร้างคีย์รีจิสทรีด้วยตนเองเพื่อให้ Wallpaper Engine ซ่อนไอคอนที่แถบงานถัดจากนาฬิกา Windows

::: คำเตือน เราไม่แนะนำให้คุณทำเช่นนี้ เว้นแต่ว่าไอคอนที่แถบงานนั้นสร้างปัญหาให้กับคุณมากจนคุณยินดีที่จะยอมรับข้อเสียของการซ่อนไอคอนที่แถบงาน :::

หลังจากซ่อนไอคอนที่แถบงานแล้ว วิธีเดียวที่จะปิด Wallpaper Engine คือการปิดผ่านตัวจัดการงานของ Windows You will only be able to open up the user interface through Steam or the .exe files which is rather inconvenient and confusing.

If you still want to proceed with hiding the tray icon, this is how you do it:

In order to create the registry key, open up the Windows start menu and type "regedit.exe" which will open the "Registry Editor".

1. Go to the following registry directory: *HKEY_CURRENT_USER\Software\WallpaperEngine*
2. Right-click on the *WallpaperEngine* registry folder, select *New* and then *DWORD (32 Bit) Value*.
3. Give the registry the following name: *hideTrayIcon*
4. Make sure that the name is correct, it must have no spaces and must be written exactly like that.
5. Double-click on the registry key and give it the value: *1*
6. Restart Wallpaper Engine, the application will now not show a tray icon.

You can reverse this process by setting *hideTrayIcon* to *0* or deleting it altogether, followed by restarting Wallpaper Engine. 