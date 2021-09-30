---
tags:
  - ฮาร์ดแวร์
---

# รองรับฮาร์ดแวร์ RGB (iCUE และ Chroma)

Wallpaper Engine รองรับระบบนิเวศของ [**Razer Chroma**](https://www.razer.com/chroma) และ [**Corsair iCUE**](https://www.corsair.com/icue) รวมถึงระบบที่อาจรวมเข้าเป็นหนึ่งในนั้น

## ฉันจะเปิด / ปิดการใช้งานฮาร์ดแวร์ RGB ได้อย่างไร

ในส่วน "ปลั๊กอิน" ของการตั้งค่า Wallpaper Engine คุณสามารถค้นหา **ปลั๊กอิน iCUE และ Chroma SDK** คุณสามารถเปิดหรือปิดใช้งานการโหลดปลั๊กอิน RGB สากลนี้โดยการทำเครื่องหมายที่ช่องทำเครื่องหมายทางด้านซ้าย คุณยังสามารถคลิกที่สัญลักษณ์รูปเฟืองถัดจากปลั๊กอินเพื่อกำหนดค่าส่วนต่าง ๆ เพิ่มเติม

นอกจากนี้คุณสามารถปิดการรองรับ RGB สำหรับแต่ละวอลเปเปอร์ หากเปิดใช้งานปลั๊กอิน คุณจะพบตัวเลือก **เปิดใช้งานเอฟเฟ็กต์ LED** ที่ด้านบนของรายการคุณสมบัติของวอลเปเปอร์แต่ละรายการ ตัวเลือกนี้ช่วยให้คุณสามารถควบคุมได้ว่าคุณต้องการให้วอลเปเปอร์เดี่ยวควบคุมไฟ RGB หรือไม่

## สีของฮาร์ดแวร์ RGB ดูสว่างเกินไป

เราเพิ่มสีสันของสี RGB เล็กน้อยในค่าเริ่มต้น สิ่งนี้มักจะทำให้วอลเปเปอร์ส่วนใหญ่ดูดีขึ้น แต่หากคุณไม่ชอบคุณสามารถปิดได้โดยปิดการใช้งานตัวเลือก **บูสต์สี LED** ในการตั้งค่าปลั๊กอิน RGB

## ฮาร์ดแวร์ RGB ของฉันไม่ทำงาน

Wallpaper Engine ไม่สามารถสื่อสารกับฮาร์ดแวร์ RGB ของคุณได้โดยตรงข้อมูลสีทั้งหมดจะถูกส่งไปยังไดรเวอร์ RGB ก่อน หากฮาร์ดแวร์ตั้งแต่หนึ่งตัวขึ้นไปไม่ทำงาน จะเป็นปัญหาซอฟต์แวร์ของผู้จำหน่ายฮาร์ดแวร์ของคุณ ฮาร์ดแวร์บางตัวที่เก่ามากจะไม่ได้รับการสนับสนุนอย่างเต็มที่จากผู้จำหน่ายฮาร์ดแวร์อีกต่อไปและจะไม่ทำงาน โปรดทราบว่านี่คือสิ่งที่เราไม่สามารถทำอะไรได้เลย

หากส่วน *ปลั๊กอิน* ของการตั้งค่า Wallpaper Engine ไม่ปรากฏให้คุณเห็น อาจเป็นเพราะคุณไม่ได้ติดตั้ง *Visual C++ Redistributable for Visual Studio 2015* หรือการติดตั้งอาจเสียหาย คุณต้องทำการติดตั้งเพื่อให้คุณสมบัติเหล่านี้ทำงานได้อย่างถูกต้อง คุณสามารถดาวน์โหลดและติดตั้งแพ็กเกจนี้ได้จากเว็บไซต์ของ Microsoft ซึ่งควรแก้ไขปัญหานี้ได้หลังจากระบบรีสตาร์ท:

* [Visual C++ Redistributable for Visual Studio 2015](https://www.microsoft.com/download/details.aspx?id=48145)

## ปัญหาเกี่ยวกับฮาร์ดแวร์ RGB หลังการไฮเบอร์เนต

ในบางกรณี การไฮเบอร์เนตอาจทำให้ฮาร์ดแวร์ RGB หยุดทำงานร่วมกับ Wallpaper Engine หากฮาร์ดแวร์ RGB บางส่วนหรือทั้งหมดทำงานไม่ถูกต้องหลังจากที่ระบบของคุณตื่นจากโหมดไฮเบอร์เนต โปรดลองเปิดใช้งานตัวเลือก **เริ่มต้นอย่างปลอดภัยหลังการไฮเบอร์เนต** ในแท็บ **ทั่วไป** ของการตั้งค่า Wallpaper Engine ซึ่งจะช่วยแก้ปัญหาประเภทนี้ให้กับผู้ใช้ส่วนใหญ่ที่ได้รับผลกระทบ

นอกจากนี้คุณยังสามารถใช้ตัวเลือก **ชะลอการโหลดปลั๊กอิน** ที่ด้านล่างของแท็บ **ปลั๊กอิน** ของการตั้งค่า Wallpaper Engine เพื่อชะลอความพยายามในการเชื่อมต่อระหว่าง Wallpaper Engine และฮาร์ดแวร์ RGB คุณสามารถลองใช้ค่า **30 วินาที** แล้วทดสอบว่าแก้ปัญหาให้คุณได้หรือไม่

### Corsair

Starting with iCUE 4, you need to manually enable software control in the iCUE settings first, otherwise Wallpaper Engine cannot connect to iCUE. If you have any issues with RGB lighting in combination with Corsair iCUE, make sure to check the iCUE settings first.

* Open iCUE.
* Click the Settings icon in the upper right corner.
* Click **Software and Games** on the left menu of the settings window.
* Make sure that the *software integrations* options are enabled. Check the **Devices** tab to make sure all your hardware devices are also enabled for this type of RGB lighting.

If you still have issues with your Corsair lighting setup, try a full reinstallation of your Corsair iCUE software, then restart your computer and reinstall. Many issues can be resolved by reinstalling the Corsair software suite, followed by manually enabling the software integration options.

Note that iCUE is used in *exclusive mode*, this means that Wallpaper Engine will take priority over other iCUE-compatible software such as games. If you want your games to animate your keyboard, go to the **Performance** tab of the Wallpaper Engine settings and set the **Other applications fullscreen** option to **Stop (free memory)** to stop wallpapers while in-game. Alternatively, disable either the RGB plugin or disable the RGB option on individual wallpapers.

For support with Corsair iCUE hardware, please contact Corsair directly:

[help.corsair.com](https://help.corsair.com/)

Should you run into any issues with Corsair's support, you can still reach out to us and we will see if we can help you.

### Razer

Most problems related to Razer RGB hardware can be fixed by doing a clean reinstallation of the Razer software suite while Wallpaper Engine is turned off:

1. ปิด Wallpaper Engine โดยสมบูรณ์ ขั้นตอนนี้สำคัญมาก โปรดอย่าข้ามขั้นตอนนี้
2. ถอนการติดตั้งซอฟต์แวร์ Razer ทั้งหมดจากคอมพิวเตอร์ของคุณผ่านทาง Windows
3. ดาวน์โหลด Razer Synapse 3 เวอร์ชันล่าสุดและติดตั้งอีกครั้ง **สำคัญ:** ตรวจสอบให้แน่ใจว่าได้ติดตั้งโมดูล **Chroma Connect** อีกครั้งใน Razer Synapse
4. รีสตาร์ทคอมพิวเตอร์ โปรดปิด Wallpaper Engine ก่อนที่จะรีสตาร์ท Windows

See if this resolves your issues with your RGB hardware. For additional support with Razer hardware, please contact Razer directly:

[support.razer.com](https://support.razer.com/)

Should you run into any issues with Razer's support, you can still reach out to us and we will see if we can help you.

#### Razer Synapse 2 หรือรุ่นเก่ากว่า

We only support Razer Synapse 3 or newer. If you are using Razer Synapse 1 or Razer Synapse 2, make sure to fully uninstall them and upgrade to the latest version of Razer Synapse. In the past, some users had issues with remnants of old Razer Synapse having been left on their system. If you had Razer Synapse 2 or older installed and have issues with your RGB lighting or even experience crashes with the RGB plugin being enabled, you may need to find any leftovers of old Razer Synapse versions on your system and delete it.

If your Razer hardware is relatively old and does not support Razer Synapse 3 or newer, unfortunately its RGB lighting is not compatible with Wallpaper Engine.