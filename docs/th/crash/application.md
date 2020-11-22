---
tags:
  - mdmp
---

# Wallpaper Engine หยุดทำงาน

Wallpaper Engine เป็นซอฟต์แวร์ที่มีการใช้งานมาเป็นเวลานานโดยคนนับล้านและผ่านการทดสอบมาเป็นอย่างดี - มีข้อบกพร่องเพียงเล็กน้อยที่อาจทำให้แอพพลิเคชันเกิดปัญหา หากข้อความผิดพลาดที่คุณเห็นมีการกล่าวถึงไฟล์ **.dll** โปรดตรวจสอบรายการต่อไปนี้และดูว่าคุณสามารถหาไฟล์ **.dll** เฉพาะเจาะจงที่ทำให้ระบบล่มได้หรือไม่:

[[toc]]

::: tip
รายงานความผิดพลาดเกือบทั้งหมดที่เราได้รับจากผู้ใช้นั้นเกิดจากไดรเวอร์การ์ดจอที่เสียหาย แอพพลิเคชันป้องกันไวรัสหรือซอฟต์แวร์ที่มีข้อบกพร่องอื่น ๆ ซึ่งทำให้คอมพิวเตอร์เกิดความไม่เสถียร
:::

## วิธีแก้ไข Wallpaper Engine หยุดทำงานเบื้องต้น

หากคุณไม่แน่ใจว่าเกิดอะไรขึ้นกับ Wallpaper Engine โปรดทำการติดตั้งไดรเวอร์การ์ดจอของคุณใหม่อีกครั้ง ซึ่งหมายความว่าคุณต้องถอนการติดตั้งไดรเวอร์ของคุณก่อน แล้วจึงติดตั้งไดรเวอร์ล่าสุดอีกครั้ง ไดรเวอร์บางตัวมีตัวเลือก "ทำการติดตั้งใหม่ทั้งหมด" ในส่วน "ขั้นสูง" ตรวจสอบให้แน่ใจว่าได้เปิดใช้งานตัวเลือกนี้เพื่อลบรายการที่เหลือทั้งหมดของไดรเวอร์ที่เสียหายโดยอัตโนมัติ คุณสามารถหาไดรเวอร์การ์ดจอรุ่นล่าสุดได้จากผู้จำหน่ายรายใหญ่ทั้งหมดที่นี่:

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx)
* [AMD Radeon](https://www.amd.com/support)
* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)

หากคุณติดตั้งแอพพลิเคชันป้องกันไวรัส (ยกเว้น Windows Defender) ตรวจสอบให้แน่ใจว่าได้ตั้งข้อยกเว้นสำหรับ Wallpaper Engine ในการตั้งค่าป้องกันไวรัส หากโปรแกรมป้องกันไวรัสของคุณเสียหายหรือถูกล็อกไฟล์บางไฟล์อย่างถาวร คุณอาจต้องติดตั้ง Wallpaper Engine ใหม่ Make sure your antivirus app ignores the *wallpaper_engine* directory and especially all .exe files:

* *wallpaper_engine/wallpaper32.exe*
* *wallpaper_engine/wallpaper64.exe*
* *wallpaper_engine/launcher.exe*
* *wallpaper_engine/bin/webwallpaper32.exe*
* *wallpaper_engine/bin/ui32.exe*

พยายามตรวจสอบไฟล์ Wallpaper Engine ผ่านทาง Steam อยู่เสมอเพื่อให้แน่ใจว่าไฟล์ไม่เสียหาย:

* [ฝ่ายสนับสนุน Steam: ตรวจสอบความถูกต้องของไฟล์แอพพลิเคชัน](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

In severe cases, you may need to uninstall Wallpaper Engine and manually delete the *wallpaper_engine* directory and then reinstall the app once your antivirus app has been configured to be less strict.

## ความผิดพลาดหลังการไฮเบอร์เนต / โหมดสลีป

หาก Wallpaper Engine ขัดข้องหลังจากการไฮเบอร์เนต Windows แสดงว่า Windows ไม่สามารถกู้คืนไดรเวอร์การ์ดจอและ Wallpaper Engine ได้อย่างถูกต้องในเวลาเดียวกัน การไฮเบอร์เนตของ Windows ไม่ใช่กระบวนการที่เชื่อถือได้ คุณสามารถเปิดใช้งานตัวเลือก **เริ่มต้นอย่างปลอดภัยหลังการไฮเบอร์เนต** ใน Wallpaper Engine เพื่อลดปัญหานี้ ตัวเลือกนี้จะพยายามรีสตาร์ท Wallpaper Engine โดยอัตโนมัติแทนที่จะคาดหวังให้ Windows ทำงานตามปกติหลังการไฮเบอร์เนต

## Wallpaper Engine has crashed / Error code "0xC0000005"

This error message is almost always caused by **antivirus applications** or **faulty drivers**. If you are using an antivirus application it is very likely the reason for this crash even if no activity was reported by your antivirus app. Please make sure to configure it so that it ignores the *wallpaper_engine* installation directory and all important Wallpaper Engine executables. See the *Wallpaper Engine Crash Quick Fix Attempt* section above for more detailed information.

If you do not have an antivirus app installed, please reinstall all important drivers and try switching to the 64 Bit version of Wallpaper Engine (or 32 Bit version if you have already used the 64 Bit version).

In some cases, this can also be caused by other applications interfering with Wallpaper Engine in an unusual way. This mainly concerns apps that inject code into Wallpaper Engine or alter your Windows installation significantly in some way.

!["0xC0000005" Wallpaper Engine crash message](/img/faq/0xC0000005.png)

## ความผิดพลาดของ Wallpaper Engine อาจเกิดจากแอพพลิเคชันอื่น

### KERNELBASE.dll / ntdll.dll

นี่เป็นความผิดพลาดในเคอร์เนลของ Windows ซึ่งมักเกิดจากแอพพลิเคชันป้องกันไวรัสหรือไดรเวอร์การ์ดจอที่เสียหาย ดูส่วนการแก้ไขเบื้องต้นด้านบนสำหรับข้อมูลเพิ่มเติม นอกจากนี้ยังอาจเกิดจากความเสียหายของส่วนประกอบของระบบ ใช้เครื่องมือตรวจสอบไฟล์ระบบ Microsoft เพื่อซ่อมแซมไฟล์ Windows ที่อาจเสียหาย:

* [เครื่องมือตรวจสอบไฟล์ระบบ Microsoft](https://support.microsoft.com/th-th/help/929833/use-the-system-file-checker-tool-to-repair-missing-or-corrupted-system)

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

::: เคล็ดลับ โปรดทราบ โปรดตรวจสอบให้แน่ใจว่าคุณได้เลือกช่องทำเครื่องหมาย "ทำการติดตั้งใหม่ทั้งหมด" ในระหว่างการติดตั้งหรือถอนการติดตั้งไดรเวอร์ปัจจุบันด้วยตนเองก่อน หากไดรเวอร์ปัจจุบันของคุณได้รับความเสียหาย สิ่งสำคัญคือการลบข้อมูลทั้งหมดก่อน
:::

### nvwgf2umx.dll

ไดรเวอร์ Nvidia ในระบบของคุณหยุดทำงาน โปรดเยี่ยมชมเว็บไซต์ Nvidia เพื่อดาวน์โหลดไดรเวอร์ล่าสุดจากที่นั่นและทำการติดตั้ง:

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx)

::: เคล็ดลับ โปรดทราบ โปรดตรวจสอบให้แน่ใจว่าคุณได้เลือกช่องทำเครื่องหมาย "ทำการติดตั้งใหม่ทั้งหมด" ในระหว่างการติดตั้งหรือถอนการติดตั้งไดรเวอร์ปัจจุบันด้วยตนเองก่อน หากไดรเวอร์ปัจจุบันของคุณได้รับความเสียหาย สิ่งสำคัญคือการลบข้อมูลทั้งหมดก่อน
:::

### igdumd64.dll / igd10umd64.dll / igdumdx32.dll / igd10umd32.dll

ไดรเวอร์ Intel Graphics ในระบบของคุณหยุดทำงาน โปรดเยี่ยมชมเว็บไซต์ Intel เพื่อดาวน์โหลดไดรเวอร์ล่าสุดจากที่นั่นและทำการติดตั้ง:

* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)

### RZChromaSDK.dll / RzChromaSDK64.dll

These types of crashes are caused by Razer Chroma which is part of **Razer Synapse**. Usually, this is caused by a faulty installation of Razer Synapse. In most cases, a clean reinstallation of Razer Synapse fixes these types of crashes:

**Clean reinstallation of all Razer software**

::: warning
Make sure Wallpaper Engine is turned off while reinstalling Razer Synapse.
:::

1. Turn off Wallpaper Engine completely if it is running (right-click on the icon in the Windows tray and then select **Quit**)
2. Uninstall all Razer software from your computer through Windows
3. Download the latest version of Razer's software suite from their website and install it:

* [Download Razer Synapse 3](https://www.razer.com/synapse-3)

4. Afterwards restart your computer without restarting Wallpaper Engine beforehand.

**Reinstallation does not fix the problem**

If the issue is not resolved by a reinstallation of Razer Synapse, there may be an underlying issue with Razer Synapse itself, in the past this has been caused by faulty Razer Synapse updates. Try turning off the LED Plugin (*"iCUE & Chroma SDK"*) in the **Plugins** tab of the Wallpaper Engine settings until this problem is fixed in a future Razer Synapse update.

If the crashes persist even after a clean reinstallation of Razer Synapse, please contact Razer support directly and inform them about the crashes. If they are unable to help, please reach out to us for technical support - we can look into these crashes and forward our findings to the Razer Synapse development team as well though Razer should be the main contact for this specific crash.

### MMDEvAPI.dll

ความผิดพลาดประเภทนี้เกิดขึ้นเนื่องจากซอฟต์แวร์เสียงที่ติดตั้งอยู่ในระบบของคุณนั้นเสียหาย ซึ่งมักจะเกิดจากซอฟต์แวร์ "การปรับปรุงคุณภาพเสียง" โดยเฉพาะซอฟต์แวร์ดังกล่าวที่ถูกติดตั้งไว้ล่วงหน้าในคอมพิวเตอร์โน้ตบุ๊คต่าง ๆ ซอฟต์แวร์ประเภทนี้มักจะทำให้เกิดปัญหาเนื่องจากซอฟต์แวร์ดังกล่าวทำงานโต้ตอบกับ Windows ในทางที่ผิด ลองค้นหา "Sonic Studio" หรือ "Nahimic" แล้วอัพเดท หากคุณไม่พบการอัพเดตสำหรับโปรแกรมเหล่านี้ คุณสามารถถอนการติดตั้งได้เพราะโปรแกรมข้างต้นไม่มีผลต่อการทำงานปกติของเสียงคอมพิวเตอร์

### fraps32.dll

ความผิดพลาดประเภทนี้เกิดจากจอแสดงผล FPS และแอพพลิเคชันบันทึกหน้าจอ Fraps แอพพลิเคชัน Fraps นั้นไม่ได้รับการอัพเดตมาตั้งแต่ปี 2013 และล้าสมัยอย่างมาก โปรดใช้แอพพลิเคชันอื่นแทนที่ Fraps เนื่องจากนี่เป็นข้อบกพร่องที่เกิดจาก Fraps ซึ่งไม่สามารถซ่อมแซมได้

## ข้อผิดพลาด 0xc000007b

ข้อผิดพลาดนี้หมายถึงโมดูล Windows ได้รับความเสียหายจากบางสิ่งบางอย่างในระบบของคุณ - ในกรณีนี้มักจะเป็น DirectX ที่เกิดความเสียหาย ลองลบไฟล์เหล่านี้ด้วยตนเอง:

* C:\Windows\SysWOW64\d3dx9_43.dll
* C:\Windows\System32\d3dx9_43.dll

ตอนนี้ให้ติดตั้งอีกครั้งด้วยตัวติดตั้ง DirectX 9: *C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\_CommonRedist\DirectX\Jun2010\dxsetup.exe* (ตำแหน่งที่แน่นอนขึ้นอยู่กับตำแหน่งของไดเรกทอรีการติดตั้ง wallpaper_engine ของคุณ)

หากข้อผิดพลาดนี้ยังคงเกิดขึ้นแสดงว่าโมดูล DirectX อื่นที่คล้ายคลึงกันมีบางอย่างเสียหาย สิ่งนี้มักบ่งชี้ถึงปัญหาที่อาจเกิดขึ้นกับการติดตั้ง Windows และคุณต้องแก้ไขปัญหาเหล่านี้ก่อนถึงจะสามารถเรียกใช้ Wallpaper Engine ได้