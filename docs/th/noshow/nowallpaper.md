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

## Wallpapers disappearing / fading away in regular intervals

If your wallpapers keep disappearing for a brief moment, you likely have a slideshow configured as your Windows wallpaper. Open the Windows wallpaper settings and set a solid color or a static image as your regular Windows wallpaper, this will fix this problem.

## Conflicts with other desktop modification software

Wallpaper Engine works well with most desktop-modification applications. However, some applications such as StarDock DeskScapes also modify the Windows wallpaper and it is not possible to run both applications at the same time. If you use a similar application to Wallpaper Engine, you will need to decide on one which you want to continue to use.

### Fences

Generally, Wallpaper Engine works fine with *Fences*. However, **if you have Fences installed but have disabled it**, it will hide the wallpaper from Wallpaper Engine. You need to either enable or uninstall it completely.

If you are using Fences and your Wallpaper Engine wallpapers are not visible, ensure that you are using **Fences 3.13 or newer** to avoid these compatibility issues with Wallpaper Engine. Fences 3.13 and newer versions contain important compatibility fixes with Wallpaper Engine, so it is important that you ensure your Fences is up-to-date.

## Gray Wallpaper or missing textures on Windows 7

Make sure that the Windows 7 update **KB2533623** is installed. Either install it manually with that link or ensure that your Windows Update is working right and installing it by itself. You can download it manually from the Microsoft website, restart your system afterwards and the problem should go away:

* [KB2533623](https://support.microsoft.com/th-th/help/2533623/microsoft-security-advisory-insecure-library-loading-could-allow-remot)