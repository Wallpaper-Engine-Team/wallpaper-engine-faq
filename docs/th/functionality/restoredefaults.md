# การกู้คืนวอลเปเปอร์เริ่มต้นที่ถูกลบ

หากคุณลบวอลเปเปอร์ที่ติดตั้งไว้ล่วงหน้าใน Wallpaper Engine ไป คุณสามารถนำกลับมาได้โดยการลบไฟล์ config ในไดเรกทอรีการติดตั้ง *wallpaper_engine* ของคุณ:

1. ปิด Wallpaper Engine (คลิกขวาที่ Wallpaper Engine ในแถบงาน -> "ออกจากโปรแกรม")

2. ไปที่ไดเรกทอรี Wallpaper Engine ของคุณและลบไฟล์ชื่อ "visible.json" สามารถพบไฟล์ได้ที่นี่โดยค่าเริ่มต้น:

* *C:\Program Files (x86)\Steam\SteamApps\common\wallpaper_engine\projects\defaultprojects\visibility.json*

หาก Steam หรือ Wallpaper Engine ของคุณถูกติดตั้งในตำแหน่งหรือไดเรกทอรีอื่น ไดเรกทอรีจะแตกต่างกันเล็กน้อย แต่ไดเรกทอรีย่อย *wallpaper_engine\projects\defaultprojects\visibility.json* จะเหมือนเดิมเสมอ

3. หลังจากลบไฟล์แล้วให้เริ่มต้น Wallpaper Engine อีกครั้งและวอลเปเปอร์เริ่มต้นทั้งหมดจะถูกกู้คืน

::: tip หากคุณไม่พบไฟล์ "visible.json" ด้วยเหตุผลบางประการ คุณสามารถติดตั้ง Wallpaper Engine ใหม่ได้ตลอดเวลา วิธีนี้จะเป็นการกู้คืนวอลเปเปอร์เริ่มต้นทั้งหมด แต่คุณจะต้องดาวน์โหลดวอลเปเปอร์ทั้งหมดอีกครั้ง คุณสามารถหลีกเลี่ยงได้โดยทำตามขั้นตอนด้านบน :::