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

หากคุณติดตั้งแอพพลิเคชันป้องกันไวรัส (ยกเว้น Windows Defender) ตรวจสอบให้แน่ใจว่าได้ตั้งข้อยกเว้นสำหรับ Wallpaper Engine ในการตั้งค่าป้องกันไวรัส หากโปรแกรมป้องกันไวรัสของคุณเสียหายหรือถูกล็อกไฟล์บางไฟล์อย่างถาวร คุณอาจต้องติดตั้ง Wallpaper Engine ใหม่

พยายามตรวจสอบไฟล์ Wallpaper Engine ผ่านทาง Steam อยู่เสมอเพื่อให้แน่ใจว่าไฟล์ไม่เสียหาย:

* [ฝ่ายสนับสนุน Steam: ตรวจสอบความถูกต้องของไฟล์แอพพลิเคชัน](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

## Crashing after Hibernation / Sleep

If Wallpaper Engine crashes after Windows hibernation, then Windows is failing to correctly restore your graphics card drivers and Wallpaper Engine together. Hibernation in Windows is simply not a reliable process. You can enable the option **Safe start after hibernation** in Wallpaper Engine to mitigate this issue. This option will attempt to automatically restart Wallpaper Engine instead of expecting Windows to correctly work after hibernation.

## Wallpaper Engine was likely crashed by another application

### KERNELBASE.dll / ntdll.dll

This is a crash in the core of the Windows kernel itself, it is usually caused by antivirus applications or broken graphics card drivers. ดูส่วนการแก้ไขเบื้องต้นด้านบนสำหรับข้อมูลเพิ่มเติม นอกจากนี้ยังอาจเกิดจากความเสียหายของส่วนประกอบของระบบ ใช้เครื่องมือตรวจสอบไฟล์ระบบ Microsoft เพื่อซ่อมแซมไฟล์ Windows ที่อาจเสียหาย:

* [เครื่องมือตรวจสอบไฟล์ระบบ Microsoft](https://support.microsoft.com/th-th/help/929833/use-the-system-file-checker-tool-to-repair-missing-or-corrupted-system)

### d3d11.dll

This is a crash in DirectX, it is usually caused by antivirus applications or broken graphics card drivers. See the quick fix section above for more information. It can also be caused by broken system components. Use the Microsoft System File Checker tool to repair possibly broken Windows files:

* [เครื่องมือตรวจสอบไฟล์ระบบ Microsoft](https://support.microsoft.com/th-th/help/929833/use-the-system-file-checker-tool-to-repair-missing-or-corrupted-system)

### mfplat.dll

This is a crash in the Windows Media Foundation, it can be caused by broken graphics card drivers but it is more commonly caused by broken or missing video codecs on your system. Follow the fixes from our video fix guide to fix these types of crashes:

[Click here](/noshow/notplaying.html)

### AudioSes.dll

This crash usually happens due to an issue in Windows itself. Try to re-install the latest version of your sound card drivers as this may fix the problem. You can also fix these crashes by changing the *Other application playing audio* option in the *Performance* tab of the Wallpaper Engine settings to *Keep running*.

### atiumdag.dll / atiumd64.dll

* [AMD Radeon](https://www.amd.com/support)

::: tip
Please note Make sure to select the "Perform clean re-installation" checkbox during setup or manually uninstall your current drivers first. If your current drivers are broken, it's important to fully clear them first.
:::

### nvwgf2umx.dll

The Nvidia drivers on your system are crashing. Go to the Nvidia website, download the latest drivers from there and install them:

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx)

::: tip
Please note Make sure to select the "Perform clean re-installation" checkbox during setup or manually uninstall your current drivers first. If your current drivers are broken, it's important to fully clear them first.
:::

### igdumd64.dll / igd10umd64.dll / igdumdx32.dll / igd10umd32.dll

The Intel graphics drivers on your system are crashing. Go to the Intel website, download the latest drivers from there and install them:

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

This type of crash occurs to due broken audio software installed on your system. This is usually caused by "sound enhancement" software, especially the ones pre-installed on various notebooks. This type of software will often cause crashes because they interact with Windows in a buggy way, try and look for "Sonic Studio" or "Nahimic" and update them. If you cannot find an update for these programs, you can also uninstall them as they are not necessary for your computer audio to function properly.

### fraps32.dll

The crash has been caused by the FPS monitor and screen recording app Fraps. Fraps has not received updates since 2013 and is a heavily outdated application. Please use an alternative to Fraps as this is a Fraps bug which may never be fixed as the software is abandoned.

## Crash error 0xc000007b

This means that a Windows module has been corrupted by something on your system - usually DirectX itself is broken in this case. Try manually deleting these files:

* C:\Windows\SysWOW64\d3dx9_43.dll
* C:\Windows\System32\d3dx9_43.dll

Now install them again with the DirectX 9 installer: *C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\_CommonRedist\DirectX\Jun2010\dxsetup.exe* (The exact location depends on where your wallpaper_engine installation directory is).

If you still get this error it might be another, similar DirectX module that has been broken by something. This usually indicates a bigger underlying issues with your Windows installation which you need to fix before you can run Wallpaper Engine.