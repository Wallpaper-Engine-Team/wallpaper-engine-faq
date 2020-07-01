---
tags:
  - mdmp
---

# Wallpaper Engine หยุดทำงาน

Wallpaper Engine เป็นซอฟต์แวร์ที่มีการใช้งานมาเป็นเวลานานโดยคนนับล้านและผ่านการทดสอบมาเป็นอย่างดี - มีข้อบกพร่องเพียงเล็กน้อยที่อาจทำให้แอพพลิเคชันเกิดปัญหา หากข้อความผิดพลาดที่คุณเห็นมีการกล่าวถึงไฟล์ **.dll** โปรดตรวจสอบรายการต่อไปนี้และดูว่าคุณสามารถหาไฟล์ **.dll** เฉพาะเจาะจงที่ทำให้ระบบล่มได้หรือไม่:

[[toc]]

::: เคล็ดลับ รายงานความผิดพลาดเกือบทั้งหมดที่เราได้รับจากผู้ใช้นั้นเกิดจากไดรเวอร์การ์ดจอที่เสียหาย แอพพลิเคชันป้องกันไวรัสหรือซอฟต์แวร์ที่มีข้อบกพร่องอื่น ๆ ซึ่งทำให้คอมพิวเตอร์เกิดความไม่เสถียร :::

## วิธีแก้ไข Wallpaper Engine หยุดทำงานเบื้องต้น

หากคุณไม่แน่ใจว่าเกิดอะไรขึ้นกับ Wallpaper Engine โปรดทำการติดตั้งไดรเวอร์การ์ดจอของคุณใหม่อีกครั้ง ซึ่งหมายความว่าคุณต้องถอนการติดตั้งไดรเวอร์ของคุณก่อน แล้วจึงติดตั้งไดรเวอร์ล่าสุดอีกครั้ง ไดรเวอร์บางตัวมีตัวเลือก "ทำการติดตั้งใหม่ทั้งหมด" ในส่วน "ขั้นสูง" ตรวจสอบให้แน่ใจว่าได้เปิดใช้งานตัวเลือกนี้เพื่อลบรายการที่เหลือทั้งหมดของไดรเวอร์ที่เสียหายโดยอัตโนมัติ คุณสามารถหาไดรเวอร์การ์ดจอรุ่นล่าสุดได้จากผู้จำหน่ายรายใหญ่ทั้งหมดที่นี่:

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx)
* [AMD Radeon](https://www.amd.com/support)
* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)

หากคุณติดตั้งแอพพลิเคชันป้องกันไวรัส (ยกเว้น Windows Defender) ตรวจสอบให้แน่ใจว่าได้ตั้งข้อยกเว้นสำหรับ Wallpaper Engine ในการตั้งค่าป้องกันไวรัส หากโปรแกรมป้องกันไวรัสของคุณเสียหายหรือถูกล็อกไฟล์บางไฟล์อย่างถาวร คุณอาจต้องติดตั้ง Wallpaper Engine ใหม่

พยายามตรวจสอบไฟล์ Wallpaper Engine ผ่านทาง Steam อยู่เสมอเพื่อให้แน่ใจว่าไฟล์ไม่เสียหาย:

* [ฝ่ายสนับสนุน Steam: ตรวจสอบความถูกต้องของไฟล์แอพพลิเคชัน](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

## ความผิดพลาดของ Wallpaper Engine อาจเกิดจากแอพพลิเคชันอื่น

### KERNELBASE.dll / ntdll.dll

นี่เป็นความผิดพลาดในเคอร์เนลของ Windows ซึ่งมักเกิดจากแอพพลิเคชันป้องกันไวรัสหรือไดรเวอร์การ์ดจอที่เสียหาย ดูส่วนการแก้ไขเบื้องต้นด้านบนสำหรับข้อมูลเพิ่มเติม นอกจากนี้ยังอาจเกิดจากความเสียหายของส่วนประกอบของระบบ ใช้เครื่องมือตรวจสอบไฟล์ระบบ Microsoft เพื่อซ่อมแซมไฟล์ Windows ที่อาจเสียหาย:

* [เครื่องมือตรวจสอบไฟล์ระบบ Microsoft](https://support.microsoft.com/en-us/help/929833/use-the-system-file-checker-tool-to-repair-missing-or-corrupted-system)

### d3d11.dll

นี่เป็นความผิดพลาดของ DirectX ซึ่งมักเกิดจากแอพพลิเคชันป้องกันไวรัสหรือไดรเวอร์การ์ดจอที่เสียหาย ดูส่วนการแก้ไขเบื้องต้นด้านบนสำหรับข้อมูลเพิ่มเติม นอกจากนี้ยังอาจเกิดจากความเสียหายของส่วนประกอบของระบบ ใช้เครื่องมือตรวจสอบไฟล์ระบบ Microsoft เพื่อซ่อมแซมไฟล์ Windows ที่อาจเสียหาย:

* [เครื่องมือตรวจสอบไฟล์ระบบ Microsoft](https://support.microsoft.com/en-us/help/929833/use-the-system-file-checker-tool-to-repair-missing-or-corrupted-system)

### mfplat.dll

นี่เป็นความผิดพลาดใน Windows Media Foundation ซึ่งอาจเกิดจากไดรเวอร์การ์ดจอที่เสียหาย แต่สาเหตุที่พบบ่อยคือตัวแปลงสัญญาณวิดีโอในระบบของคุณที่เสียหายหรือหายไป โปรดปฏิบัติตามขั้นตอนการซ่อมแซมในคู่มือการซ่อมแซมวิดีโอของเราเพื่อแก้ไขปัญหาการขัดข้องดังต่อไปนี้:

[คลิกที่นี่](/noshow/notplaying.html)

### AudioSes.dll

ความผิดพลาดนี้มักจะเกิดขึ้นเนื่องจากปัญหาในตัว Windows เอง ลองติดตั้งไดรเวอร์การ์ดเสียงเวอร์ชันล่าสุดอีกครั้งเพราะอาจช่วยแก้ไขปัญหาได้ คุณยังสามารถแก้ไขข้อขัดข้องเหล่านี้ได้โดยเปลี่ยนตัวเลือก *แอพพลิเคชันอื่นกำลังเล่นไฟล์เสียง* ในแท็บ *ประสิทธิภาพการทำงาน* ในส่วนการตั้งค่า Wallpaper Engine เป็น *ทำงานต่อไป*

### atiumdag.dll / atiumd64.dll

* [AMD Radeon](https://www.amd.com/support)

::: เคล็ดลับ โปรดทราบ โปรดตรวจสอบให้แน่ใจว่าคุณได้เลือกช่องทำเครื่องหมาย "ทำการติดตั้งใหม่ทั้งหมด" ในระหว่างการติดตั้งหรือถอนการติดตั้งไดรเวอร์ปัจจุบันด้วยตนเองก่อน หากไดรเวอร์ปัจจุบันของคุณได้รับความเสียหาย สิ่งสำคัญคือการลบข้อมูลทั้งหมดก่อน :::

### nvwgf2umx.dll

ไดรเวอร์ Nvidia ในระบบของคุณหยุดทำงาน โปรดเยี่ยมชมเว็บไซต์ Nvidia เพื่อดาวน์โหลดไดรเวอร์ล่าสุดจากที่นั่นและทำการติดตั้ง:

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx)

::: เคล็ดลับ โปรดทราบ โปรดตรวจสอบให้แน่ใจว่าคุณได้เลือกช่องทำเครื่องหมาย "ทำการติดตั้งใหม่ทั้งหมด" ในระหว่างการติดตั้งหรือถอนการติดตั้งไดรเวอร์ปัจจุบันด้วยตนเองก่อน หากไดรเวอร์ปัจจุบันของคุณได้รับความเสียหาย สิ่งสำคัญคือการลบข้อมูลทั้งหมดก่อน :::

### igdumd64.dll / igd10umd64.dll / igdumdx32.dll / igd10umd32.dll

ไดรเวอร์ Intel Graphics ในระบบของคุณหยุดทำงาน โปรดเยี่ยมชมเว็บไซต์ Intel เพื่อดาวน์โหลดไดรเวอร์ล่าสุดจากที่นั่นและทำการติดตั้ง:

* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)


### MMDEvAPI.dll

ความผิดพลาดประเภทนี้เกิดขึ้นเนื่องจากซอฟต์แวร์เสียงที่ติดตั้งอยู่ในระบบของคุณนั้นเสียหาย ซึ่งมักจะเกิดจากซอฟต์แวร์ "การปรับปรุงคุณภาพเสียง" โดยเฉพาะซอฟต์แวร์ดังกล่าวที่ถูกติดตั้งไว้ล่วงหน้าในคอมพิวเตอร์โน้ตบุ๊คต่าง ๆ ซอฟต์แวร์ประเภทนี้มักจะทำให้เกิดปัญหาเนื่องจากซอฟต์แวร์ดังกล่าวทำงานโต้ตอบกับ Windows ในทางที่ผิด ลองค้นหา "Sonic Studio" หรือ "Nahimic" แล้วอัพเดท หากคุณไม่พบการอัพเดตสำหรับโปรแกรมเหล่านี้ คุณสามารถถอนการติดตั้งได้เพราะโปรแกรมข้างต้นไม่มีผลต่อการทำงานปกติของเสียงคอมพิวเตอร์

### fraps32.dll

ความผิดพลาดประเภทนี้เกิดจากจอแสดงผล FPS และแอพพลิเคชันบันทึกหน้าจอ Fraps แอพพลิเคชัน Fraps นั้นไม่ได้รับการอัพเดตมาตั้งแต่ปี 2013 และล้าสมัยอย่างมาก โปรดใช้แอพพลิเคชันอื่นแทนที่ Fraps เนื่องจากนี่เป็นข้อบกพร่องที่เกิดจาก Fraps ซึ่งไม่สามารถซ่อมแซมได้

## ข้อผิดพลาด 0xc000007b

This means that a Windows module has been corrupted by something on your system - usually DirectX itself is broken in this case. Try manually deleting these files:

* C:\Windows\SysWOW64\d3dx9_43.dll
* C:\Windows\System32\d3dx9_43.dll

Now install them again with the DirectX 9 installer: *C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\_CommonRedist\DirectX\Jun2010\dxsetup.exe* (The exact location depends on where your wallpaper_engine installation directory is).

If you still get this error it might be another, similar DirectX module that has been broken by something. This usually indicates a bigger underlying issues with your Windows installation which you need to fix before you can run Wallpaper Engine.

## Crashing after Hibernation / Sleep

If Wallpaper Engine crashes after Windows hibernation, then Windows is failing to correctly restore your graphics card drivers and Wallpaper Engine together. Hibernation in Windows is simply not a reliable process. You can enable the option **Safe start after hibernation** in Wallpaper Engine to mitigate this issue. This option will attempt to automatically restart Wallpaper Engine instead of expecting Windows to correctly work after hibernation.