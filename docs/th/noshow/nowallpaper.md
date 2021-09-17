---
tags:
  - โปรแกรมป้องกันไวรัส
  - แสดง
---

# มองไม่เห็นวอลเปเปอร์

หากวอลเปเปอร์ของคุณบางส่วนหรือทั้งหมดไม่ปรากฏขึ้น สาเหตุมักเกิดจากแอพพลิเคชันป้องกันไวรัสที่ปิดกั้นการใช้งาน Wallpaper Engine โดยไม่ได้ตั้งใจ หากคุณใช้แอพพลิเคชันป้องกันไวรัส โปรดตรวจสอบให้แน่ใจว่าได้ตั้งค่าเพื่อให้ละเว้นไดเร็กทอรีการติดตั้ง *wallpaper_engine* และไฟล์ปฏิบัติการที่สำคัญทั้งหมดของ Wallpaper Engine:

* *wallpaper_engine/wallpaper32.exe*
* *wallpaper_engine/wallpaper64.exe*
* *wallpaper_engine/launcher.exe*
* *wallpaper_engine/bin/webwallpaper32.exe*
* *wallpaper_engine/bin/ui32.exe*

::: tip
หากคุณติดตั้งแอปพลิเคชันป้องกันไวรัส (ยกเว้น Windows Defender) เป็นไปได้มากว่านี่คือสาเหตุของปัญหาของคุณ หากความพยายามครั้งแรกของคุณไม่สามารถแก้ไขปัญหานี้ได้ โปรดใช้เวลาสักครู่เพื่อตรวจสอบเพิ่มเติม
:::

## โหมด High-contrast ใน Windows

หากคุณเปิดใช้งาน **โหมด high-contrast** ในการตั้งค่าธีม Windows 10 ของคุณโดยเลือกธีม **High Contrast สีขาว** ไว้ Windows จะบังคับปิดวอลเปเปอร์ของ Wallpaper Engine ลองเปลี่ยนธีม high-contrast ที่คุณใช้ในการตั้งค่า high-contrast ของ Windows หรือปิดโหมด high-contrast ทั้งหมดแล้วปัญหาจะหายไป

## วอลเปเปอร์หายไป / จางหายเป็นรอบสม่ำเสมอ

หากวอลเปเปอร์ของคุณหายไปชั่วขณะ อาจเป็นเพราะคุณกำหนดค่าการนำเสนอภาพนิ่ง (Slideshow) เป็นวอลเปเปอร์ Windows ให้เปิดการตั้งค่าวอลเปเปอร์ Windows และตั้งค่าสีทึบหรือภาพนิ่งเป็นวอลเปเปอร์ Windows ทั่วไป วิธีนี้จะช่วยแก้ไขปัญหาได้

## ความขัดแย้งกับซอฟต์แวร์การแก้ไขเดสก์ทอปอื่น ๆ

Wallpaper Engine ทำงานได้ดีกับแอพพลิเคชันการแก้ไขเดสก์ทอปส่วนใหญ่ อย่างไรก็ตาม แอพพลิเคชันบางตัว (เช่น StarDock DeskScapes) ก็สามารถใช้แก้ไขวอลเปเปอร์ของ Windows ได้ ดังนั้นแอพพลิเคชั่นทั้งสองนี้จึงไม่สามารถทำงานได้ในเวลาเดียวกันเดียวกัน หากคุณใช้แอพพลิเคชันที่คล้ายกับ Wallpaper Engine คุณจะต้องตัดสินใจว่าจะใช้แอพพลิเคชันใดต่อไป

### Fences

โดยทั่วไปแล้ว Wallpaper Engine ทำงานได้ดีกับ *Fences* อย่างไรก็ตาม **หากคุณติดตั้ง Fences แต่ปิดการใช้งานไว้** มันจะซ่อนวอลเปเปอร์จาก Wallpaper Engine คุณต้องเปิดใช้งานหรือถอนการติดตั้งอย่างสมบูรณ์

If you are using Fences and your Wallpaper Engine wallpapers are not visible, ensure that you are using **Fences 3.13 or newer** to avoid these compatibility issues with Wallpaper Engine. Fences 3.13 and newer versions contain important compatibility fixes with Wallpaper Engine, so it is important that you ensure your Fences is up-to-date.

## วอลเปเปอร์สีเทาหรือพื้นผิวหายไปใน Windows 7

โปรดตรวจสอบให้แน่ใจว่าได้ติดตั้ง Windows 7 Update **KB2533623** แล้ว คุณสามารถติดตั้งการอัพเดตด้วยตนเองผ่านลิงก์ด้านล่างหรือตรวจสอบให้แน่ใจว่า Windows Update ของคุณทำงานได้อย่างถูกต้องและติดตั้งการอัพเดตอัตโนมัติ คุณสามารถดาวน์โหลดได้ด้วยตนเองจากเว็บไซต์ Microsoft แล้วรีสตาร์ทระบบของคุณในภายหลัง ปัญหาข้างต้นควรจะหายไป:

* [KB2533623](https://support.microsoft.com/th-th/help/2533623/microsoft-security-advisory-insecure-library-loading-could-allow-remot)