---
tags:
  - เริ่มต้นอัตโนมัติ
  - เริ่มการทำงาน
---

# เริ่มต้นอัตโนมัติเมื่อบูตเครื่อง

คุณสามารถตั้งค่า Wallpaper Engine ให้เริ่มทำงานเมื่อคุณเปิดใช้งานคอมพิวเตอร์ โดยไปที่การตั้งค่า Wallpaper Engine แล้วไปที่แท็บ "ทั่วไป" ที่ด้านบนสุด คุณสามารถเปิดใช้งานตัวเลือกการเริ่มต้นอัตโนมัติซึ่งจะเปิดแอปพลิเคชันอย่างเงียบ ๆ ในพื้นหลังทุกครั้งที่ระบบเริ่มทำงาน

## อะไรคือความแตกต่างระหว่างตัวเลือกการเริ่มต้นแบบ "ลำดับความสำคัญสูง" และ "ปกติ"

หากคุณเลือกตัวเลือกแบบลำดับความสำคัญสูง Wallpaper Engine จะลงทะเบียน Windows service ซึ่งหมายความว่า Wallpaper Engine จะเริ่มต้นก่อนโปรแกรมอื่น ๆ ที่คุณกำหนดค่าให้เริ่มต้นโดยอัตโนมัติพร้อมกับ Windows ตัวเลือกนี้จะไม่ส่งผลต่อประสิทธิภาพการทำงานของแอพพลิเคชันแต่อย่างใด

การใช้ตัวเลือกแบบลำดับความสำคัญสูงนั้นมีข้อเสียเพราะอาจลดความน่าเชื่อถือของโปรแกรม เพราะซอฟต์แวร์ป้องกันไวรัสบางตัวจะทำงานเกินจริงและปิดกั้น Wallpaper Engine ไม่ให้เริ่มทำงานในโหมดนี้เพราะเข้าใจว่านี่เป็นลักษณะที่เป็นอันตราย

## ฉันควรทำอย่างไรถ้าการเริ่มต้นอัตโนมัติไม่ทำงานหลังจากเปิดใช้งานปกติ

หากคุณใช้ตัวเลือก *ลำดับความสำคัญสูง* ให้ลองเปลี่ยนไปใช้การเริ่มต้นอัตโนมัติแบบ *ปกติ* โดยปิดใช้งานตัวเลือกแบบลำดับความสำคัญสูง ตามที่อธิบายไว้ข้างต้น โหมดลำดับความสำคัญสูงจะทำให้เริ่มต้นได้เร็วกว่า แต่โดยมากจะลดความน่าเชื่อถือของโปรแกรม เพราะบางครั้งทำให้ถูกปิดกั้นโดยซอฟต์แวร์ป้องกันไวรัส

หากคุณใช้ตัวเลือกแบบลำดับความสำคัญปกติและแอพพลิเคชันไม่ได้เริ่มการทำงานพร้อมกับ Windows ให้ลองเปลี่ยนตัวเลือกเป็นลำดับความสำคัญสูงและดูว่าปัญหาหายไปหรือไม่

หากตัวเลือกแบบลำดับความสำคัญสูงหรือลำดับความสำคัญปกติไม่ทำงาน ให้ตรวจสอบซอฟต์แวร์ป้องกันไวรัสที่ติดตั้งในระบบ บางครั้งแอพพลิเคชันป้องกันไวรัสและไฟร์วอลล์จะป้องกันไม่ให้ Wallpaper Engine เริ่มทำงานอัตโนมัติเมื่อเปิดใช้งาน ซอฟต์แวร์ป้องกันไวรัสของคุณอาจมีหมวด "รายการที่ปลอดภัย" ที่อนุญาตให้คุณละเว้นบางโฟลเดอร์หรือแอพพลิเคชัน โปรดตรวจสอบให้แน่ใจว่าไดเรกทอรีการติดตั้ง wallpaper_engine และไฟล์ปฏิบัติการทั้งหมดอยู่รายการที่ปลอดภัย

Another rare cause can be that if you (or an application on your system) set the Wallpaper Engine .exe files to be run as admin only then it cannot automatically start either, you will need to remove the admin setting and toggle the automatic startup off and back on.

If the automatic startup does not work, the answer virtually always is somehow related to overzealous antivirus software. If you have antivirus or firewall applications installed, please double-check all their settings and security levels.

## Wallpaper Engine starts with Windows but (some) wallpapers are not shown

 Check if the Wallpaper Engine icon is visible in the Windows tray next to the clock after you start your computer. If the icon is there after your system starts but either some or none of your monitors have their respective wallpapers shown, there is a problem with your graphics card drivers. Essentially, your graphics card drivers keep assigning your monitors new identifiers which leads Wallpaper Engine to believe that you are trying to configure a new monitor. You can fix this by changing the *"Monitor identification"* option in the *General* tab of the Wallpaper Engine settings to *Layout* or *GDI*. We also recommend that you do a clean re-installation of your graphics card drivers in this case, as it's an indicator for an underlying problem with your Windows installation.

 ## Wallpaper Engine assigns wrong wallpapers at system start-up

 This is the same problem as in the previous section, if you have multiple monitors and the wallpapers are being assigned to the wrong monitor at start-up, try changing the *Monitor identification* option in the *General* tab of the Wallpaper Engine settings to *Layout* or *GDI*.