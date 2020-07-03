---
tags:
  - ส่วนต่อประสานกับผู้ใช้
  - สีเขียว
  - สีขาว
  - เป็นพิกเซล
  - ไม่สามารถอ่านได้
---

# หน้าต่าง Engine Wallpaper แสดงผลไม่ถูกต้อง

หากหน้าต่างเรียกดู Wallpaper Engine ไม่ทำงาน สาเหตุมักเกิดจากความผิดปกติของไดรเวอร์การ์ดจอหรือแอพพลิเคชันป้องกันไวรัส โปรดอ่านด้านล่างสำหรับข้อมูลเพิ่มเติม

::: คำเตือน โปรดทราบ เนื้อหาส่วนนี้เกี่ยวข้องกับปัญหาที่ **ส่วนต่อประสาน** ของ Wallpaper Engine เป็นสีดำหรือเสียหาย หาก **วอลเปเปอร์เป็นสีดำ** คุณต้องไปที่: [ หน้าจอสีดำ / ไม่เล่นไฟล์วิดีโอ](/noshow/notplaying.html) :::

## เบราเซอร์ Wallpaper Engine เป็นสีดำหรือสีขาว

สำหรับผู้ใช้ส่วนใหญ่สิ่งนี้หมายความว่าส่วนต่อประสานกับผู้ใช้ของ Wallpaper Engine ถูกปิดกั้นโดยแอพพลิเคชันป้องกันไวรัสโดยไม่ได้ตั้งใจ ตรวจสอบให้แน่ใจว่าได้ตั้งค่าข้อยกเว้นในแอพพลิเคชันป้องกันไวรัสของคุณให้ละเว้น Wallpaper Engine โดยเฉพาะไฟล์ปฏิบัติการทั้งหมดในไดเรกทอรีการติดตั้ง wallpaper_engine โดยเฉพาะ **wallpaper_engine/bin/ui32.exe**

ในบางกรณีหากแอพพลิเคชันป้องกันไวรัสล็อคไฟล์สำคัญของ Wallpaper Engine บางไฟล์ไว้อย่างถาวร คุณจำเป็นต้องตรวจสอบไฟล์ Wallpaper Engine หรือติดตั้ง Wallpaper Engine ใหม่อีกครั้ง

* [ฝ่ายสนับสนุน Steam: ตรวจสอบความถูกต้องของไฟล์แอพพลิเคชัน](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

หากคุณกำหนดค่าแอพพลิเคชันป้องกันไวรัสของคุณแล้ว แต่การตรวจสอบผ่าน Steam ยังไม่สามารถแก้ไขปัญหานี้ได้ ให้ลองติดตั้ง Wallpaper Engine ผ่าน Steam อีกครั้ง หากไม่สามารถควบคุมซอฟต์แวร์ป้องกันไวรัสได้ ซอฟต์แวร์อาจปิดกั้นพาธไฟล์ที่ใช้โดย Wallpaper Engine อย่างถาวร ในกรณีนี้โปรดถอนการติดตั้งซอฟต์แวร์ป้องกันไวรัสก่อนที่จะติดตั้ง Wallpaper Engine ไปยังไดเรกทอรีอื่น คุณสามารถเลือกสร้างคลังเกมใหม่ใน Steam เพื่อวัตถุประสงค์นี้

## ส่วนต่อประสาน Wallpaper Engine กับสิ่งประดิษฐ์สีเขียวหรือเส้นสีขาว

ไดรเวอร์การ์ดจอของคุณเสียหายหรือกำหนดค่าไม่ถูกต้อง ดาวน์โหลดไดรเวอร์ล่าสุดสำหรับการ์ดจอของคุณ (แม้ว่าคุณจะมีไดรเวอร์ล่าสุดแล้ว) และทำการติดตั้งไดรเวอร์ใหม่อีกครั้ง คุณจำเป็นต้องถอนการติดตั้งไดรเวอร์ปัจจุบันก่อนติดตั้งไดรเวอร์ล่าสุดเพื่อให้แน่ใจว่าไฟล์หรือการตั้งค่าที่เสียหายทั้งหมดถูกลบ

หากยังคงพบปัญหาอยู่ โปรดปิด Wallpaper Engine Then re-launch Wallpaper Engine using the third launch option in Steam labeled "disable UI hardware acceleration".

### Rare Steam Overlay Bug Breaking Wallpaper Engine User Interface

The other possible reason for a black application window is a rare Steam bug with the Steam overlay. You can try the following:

Turn off Wallpaper Engine completely (right-click on the tray icon and then select "Quit"). Afterwards, open up Steam, right-click on Wallpaper Engine, select "Properties" and then disable the "Enable Steam Overlay while in-game" option. After disabling the option, try to restart Wallpaper Engine via Steam. 