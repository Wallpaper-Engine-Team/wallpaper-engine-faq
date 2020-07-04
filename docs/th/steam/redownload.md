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
* Go to the `wallpaper_engine` installation directory
  * Default location: `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine`
* Run `wallpaper_engine\bin\steamredownloadfixer32.exe`
  * If the tool gives you any error messages, please send us an email and we will investigate if we can improve it
* Restart Steam and verify the Wallpaper Engine files:
  * [Verify the Wallpaper Engine files](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

You have to repeat this every time the Steam download cache breaks up, unfortunately. Please keep in mind that we have not built Steam and cannot fix Steam ourselves.

## Reinstall Steam

The most reliable long-term fix for most users affected by this Steam bug regularly appears to be to reinstall Steam as some Steam files may simply be broken on your system. Try to reinstall Steam completely:

1. Uninstall Wallpaper Engine through Steam.
2. Uninstall Steam itself, make sure to follow the official guide:
  * [Uninstall Steam](https://support.steampowered.com/kb_article.php?ref=9609-OBMP-2526)
  * Specifically check the Manually Removing Steam section in the Steam Support article above and make a backup of your *steamapps* directory as described there to ensure you will not have to redownload all your games.

## Use local backups as a workaround

If the issue continues happening to you, you can also make local backups of all wallpapers and then unsubscribe from all wallpapers. Steam will not redownload wallpapers that you are not subscribed to, so the work-around is to simply only rely on local backups. You can find our guide on how to create backups here:

* [Using wallpaper backups](/steam/backup)

Afterwards, simply unsubscribe from all wallpapers. Make sure to not delete any files manually, Steam must delete the wallpaper files itself or it will attempt to redownload the wallpapers again just to delete the files on its own.