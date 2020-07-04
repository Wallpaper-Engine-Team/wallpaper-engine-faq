---
tags:
  - ดาวน์โหลด
  - ดาวน์โหลดอีกครั้ง
  - ถูกลบ
  - ลบ
---

# Steam ดาวน์โหลดวอลเปเปอร์อีกครั้ง

แคชดาวน์โหลดของ Steam มีปัญหา ตอนนี้ Steam จึงดาวน์โหลดไฟล์ทั้งหมดใหม่อีกครั้ง (ไม่มีเหตุผลใดเป็นพิเศษ หรือเพราะ Steam หยุดทำงานโดยไม่ใช่การปิดโปรแกรมตามปกติ) ปัญหานี้ไม่ได้เกิดจาก Wallpaper Engine ดังนั้นจึงไม่สามารถแก้ไขได้ใน Wallpaper Enginee และแอพพลิเคชันเวิร์กชอปทั้งหมดใน Steam อาจถูกรบกวนจากข้อผิดพลาดของ Steam หากคุณพบปัญหานี้บ่อยครั้ง โปรดใช้วิธีแก้ไขปัญหาต่อไปนี้:

## แก้ไข Steam โดยอัตโนมัติ
เราได้สร้างโปรแกรมแก้ไข Steam แบบอัตโนมัติซึ่งคุณสามารถใช้เพื่อป้องกันไม่ให้เกิดปัญหานี้ขึ้นอีกใน Steam (หวังว่า)! โปรดทำตามขั้นตอนเหล่านี้:
* ปิด Steam
* ไปที่ไดเรกทอรีการติดตั้ง `wallpaper_engine`
  * ตำแหน่งเริ่มต้น: `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine`
* เรียกใช้ `wallpaper_engine\bin\steamredownloadfixer32.exe`
  * หากเครื่องมือแจ้งข้อผิดพลาดให้คุณ โปรดส่งอีเมลถึงเราและเราจะตรวจสอบว่าสามารถปรับปรุงได้หรือไม่
* รีสตาร์ท Steam และตรวจสอบไฟล์ Wallpaper Engine:
  * [ตรวจสอบไฟล์ Wallpaper Engine](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

คุณต้องทำสิ่งนี้ซ้ำทุกครั้งที่แคชดาวน์โหลดของ Steam เสียหาย โปรดทราบว่าเราไม่ได้มีส่วนร่วมในการสร้าง Steam ดังนั้นจึงไม่สามารถซ่อมแซม Steam ได้ด้วยตัวเอง

## ติดตั้ง Steam ใหม่อีกครั้ง

สำหรับผู้ใช้ส่วนใหญ่ที่ได้รับผลกระทบจากข้อผิดพลาดของ Steam นี้เป็นประจำ การแก้ไขระยะยาวที่น่าเชื่อถือที่สุดคือการติดตั้ง Steam ใหม่ เนื่องจากไฟล์ Steam บางไฟล์ในระบบของคุณอาจเสียหาย โปรดลองติดตั้ง Steam ใหม่ทั้งหมด:

1. ถอนการติดตั้ง Wallpaper Engine ผ่าน Steam
2. ถอนการติดตั้ง Steam ด้วยตนเอง โปรดปฏิบัติตามคำแนะนำอย่างเป็นทางการ:
  * [ถอนการติดตั้ง Steam](https://support.steampowered.com/kb_article.php?ref=9609-OBMP-2526)
  * ตรวจสอบบทความ ฝ่ายสนับสนุน Steam ด้านบนในส่วนการถอนการติดตั้ง Steam โดยเฉพาะ จากนั้นทำตามคำแนะนำเพื่อสำรองข้อมูลไดเรกทอรี *steamapps* เพื่อให้แน่ใจว่าคุณไม่จำเป็นต้องดาวน์โหลดเกมทั้งหมดอีกครั้ง

## ใช้การสำรองข้อมูลภายในเป็นวิธีแก้ปัญหา

หากคุณยังคงพบปัญหา คุณสามารถทำการสำรองข้อมูลภายในของวอลเปเปอร์ทั้งหมดแล้วยกเลิกสมัครรับข้อมูลวอลเปเปอร์ทั้งหมด Steam will not redownload wallpapers that you are not subscribed to, so the work-around is to simply only rely on local backups. You can find our guide on how to create backups here:

* [Using wallpaper backups](/steam/backup)

Afterwards, simply unsubscribe from all wallpapers. Make sure to not delete any files manually, Steam must delete the wallpaper files itself or it will attempt to redownload the wallpapers again just to delete the files on its own.