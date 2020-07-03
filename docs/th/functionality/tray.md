# ซ่อนไอคอน Wallpaper Engine ที่แถบงาน

คุณสามารถสร้างคีย์รีจิสทรีด้วยตนเองเพื่อให้ Wallpaper Engine ซ่อนไอคอนที่แถบงานถัดจากนาฬิกา Windows

::: คำเตือน เราไม่แนะนำให้คุณทำเช่นนี้ เว้นแต่ว่าไอคอนที่แถบงานนั้นสร้างปัญหาให้กับคุณมากจนคุณยินดีที่จะยอมรับข้อเสียของการซ่อนไอคอนที่แถบงาน :::

หลังจากซ่อนไอคอนที่แถบงานแล้ว วิธีเดียวที่จะปิด Wallpaper Engine คือการปิดผ่านตัวจัดการงานของ Windows คุณจะสามารถเปิดส่วนต่อประสานกับผู้ใช้ได้ทาง Steam หรือทางไฟล์ .exe เท่านั้น ซึ่งเป็นวิธีการที่ค่อนข้างไม่สะดวกและก่อให้เกิดความสับสน

หากคุณยังคงต้องการซ่อนไอคอนที่แถบงาน โปรดทำตามคำแนะนำด้านล่าง:

ในการสร้างคีย์รีจิสทรี ให้เปิดเมนู Start ของ Windows ขึ้นมาแล้วพิมพ์ "regedit.exe" ซึ่งจะเปิด "Registry Editor"

1. ไปที่ไดเรกทอรีรีจิสทรีต่อไปนี้: *HKEY_CURRENT_USER\Software\WallpaperEngine*
2. คลิกขวาที่โฟลเดอร์รีจิสทรี *WallpaperEngine* เลือก *New* จากนั้น *DWORD (32 Bit) Value*
3. Give the registry the following name: *hideTrayIcon*
4. Make sure that the name is correct, it must have no spaces and must be written exactly like that.
5. Double-click on the registry key and give it the value: *1*
6. Restart Wallpaper Engine, the application will now not show a tray icon.

You can reverse this process by setting *hideTrayIcon* to *0* or deleting it altogether, followed by restarting Wallpaper Engine. 