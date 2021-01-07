---
tags:
  - ส่วนต่อประสานกับผู้ใช้
  - สีเขียว
  - สีขาว
  - เป็นพิกเซล
  - ไม่สามารถอ่านได้
---

# หน้าต่าง Wallpaper Engine แสดงผลไม่ถูกต้อง

หากหน้าต่างเรียกดู Wallpaper Engine ไม่ทำงาน สาเหตุมักเกิดจากความผิดปกติของไดรเวอร์การ์ดจอหรือแอพพลิเคชันป้องกันไวรัส โปรดอ่านด้านล่างสำหรับข้อมูลเพิ่มเติม

::: warning
โปรดทราบ เนื้อหาส่วนนี้เกี่ยวข้องกับปัญหาที่ **ส่วนต่อประสาน** ของ Wallpaper Engine เป็นสีดำหรือเสียหาย หาก **วอลเปเปอร์เป็นสีดำ** คุณต้องไปที่: [ หน้าจอสีดำ / ไม่เล่นไฟล์วิดีโอ](/noshow/notplaying.html)
:::

## เบราเซอร์ Wallpaper Engine เป็นสีดำหรือสีขาว

สำหรับผู้ใช้ส่วนใหญ่สิ่งนี้หมายความว่าส่วนต่อประสานกับผู้ใช้ของ Wallpaper Engine ถูกปิดกั้นโดยแอพพลิเคชันป้องกันไวรัสโดยไม่ได้ตั้งใจ ตรวจสอบให้แน่ใจว่าได้ตั้งค่าข้อยกเว้นในแอพพลิเคชันป้องกันไวรัสของคุณให้ละเว้น Wallpaper Engine โดยเฉพาะไฟล์ปฏิบัติการทั้งหมดในไดเรกทอรีการติดตั้ง wallpaper_engine โดยเฉพาะ **wallpaper_engine/bin/ui32.exe**

ในบางกรณีหากแอพพลิเคชันป้องกันไวรัสล็อคไฟล์สำคัญของ Wallpaper Engine บางไฟล์ไว้อย่างถาวร คุณจำเป็นต้องตรวจสอบไฟล์ Wallpaper Engine หรือติดตั้ง Wallpaper Engine ใหม่อีกครั้ง

* [ฝ่ายสนับสนุน Steam: ตรวจสอบความถูกต้องของไฟล์แอพพลิเคชัน](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

หากคุณกำหนดค่าแอพพลิเคชันป้องกันไวรัสของคุณแล้ว แต่การตรวจสอบผ่าน Steam ยังไม่สามารถแก้ไขปัญหานี้ได้ ให้ลองติดตั้ง Wallpaper Engine ผ่าน Steam อีกครั้ง หากไม่สามารถควบคุมซอฟต์แวร์ป้องกันไวรัสได้ ซอฟต์แวร์อาจปิดกั้นพาธไฟล์ที่ใช้โดย Wallpaper Engine อย่างถาวร ในกรณีนี้โปรดถอนการติดตั้งซอฟต์แวร์ป้องกันไวรัสก่อนที่จะติดตั้ง Wallpaper Engine ไปยังไดเรกทอรีอื่น คุณสามารถเลือกสร้างคลังเกมใหม่ใน Steam เพื่อวัตถุประสงค์นี้

If the problem persists, turn off Wallpaper Engine. Then re-launch Wallpaper Engine using the third launch option in Steam labeled "disable UI hardware acceleration".

![Launch option: Disable UI hardware acceleration](/img/faq/steam_launch_option.jpg)

## ส่วนต่อประสาน Wallpaper Engine กับสัญญาณรบกวนสีเขียวหรือเส้นสีขาว

Your graphics card drivers are broken or misconfigured. Download the latest drivers for your graphics cards (even if you already have the latest drivers) and perform a clean re-installation of the drivers. Is is important that you first uninstall your current drivers and then install the latest drivers to ensure any broken files or settings are removed.

If the problem persists, turn off Wallpaper Engine. Then re-launch Wallpaper Engine using the third launch option in Steam labeled "disable UI hardware acceleration".

**If the Wallpaper Engine user interface has white lines**: You have **Nvidia Image Sharpening** turned on for all applications. Turn it off in your Nvidia drivers or do a clean reinstallation of your Nvidia drivers by uninstalling your current ones first.

![Nvidia Image Sharpening Issue](./imagesharpening.png) *White lines will be visible all over the application window if Nvidia image sharpening is turned on for Wallpaper Engine by mistake.*

### ข้อผิดพลาดของการโอเวอร์เลย์ที่หาได้ยากบน Steam ทำให้เกิดความเสียหายกับส่วนต่อประสานกับผู้ใช้ของ Wallpaper Engine

The other possible reason for a black application window is a rare Steam bug with the Steam overlay. You can try the following:

Turn off Wallpaper Engine completely (right-click on the tray icon and then select "Quit"). Afterwards, open up Steam, right-click on Wallpaper Engine, select "Properties" and then disable the "Enable Steam Overlay while in-game" option. After disabling the option, try to restart Wallpaper Engine via Steam. 