# เสียงไม่เล่น / ปัญหาของอุปกรณ์เสียง
คู่มือนี้จะช่วยให้คุณทราบปัญหาเกี่ยวกับการเล่นเสียงกับวอลเปเปอร์ ขั้นแรกคุณควรตรวจสอบให้แน่ใจว่าวอลเปเปอร์ที่ใช้มีเสียงอยู่จริง ทำได้โดยการลองใช้วอลเปเปอร์อื่น ๆ วอลเปเปอร์จำนวนมากไม่มีเสียงเลย หากคุณแน่ใจว่าวอลเปเปอร์ของคุณมีเสียง โปรดดำเนินการตามคู่มือนี้

::: warning
โปรดทราบ หากเสียงปิดและเปิดใหม่ซ้ำ ๆ ภายในเวลาไม่กี่วินาที โปรดอ่านคู่มือต่อไปนี้แทน:

* [เสียงเปิดและปิดเป็นระยะ](/audio/intermittent)
:::

## ตรวจสอบให้แน่ใจว่าไม่ได้ปิดเสียง Wallpaper Engine
มีสามที่ในแอพพลิเคชันที่คุณสามารถปิดอุปกรณ์เสียงได้:

1. ในแท็บ **ทั่วไป** ของการตั้งค่าจะมีตัวเลือก **อุปกรณ์เสียง** โปรดตรวจสอบให้แน่ใจเปิดใช้งานอยู่
2. คลิกที่ปุ่ม **หน้าจอ** ที่มุมขวาบนของหน้าต่างหลักของ Wallpaper Engine ภาพรวมของหน้าจอทั้งหมดของคุณจะแสดงขึ้น แต่ละหน้าจอมีปุ่มปิดเสียงที่มุมล่างซ้าย โปรดตรวจสอบให้แน่ใจว่าไม่ได้ปิดเสียงหน้าจอของคุณ
3. คุณจะพบตัวเลือก **ระดับเสียง** ทางด้านขวามือเมื่อเลือกวอลเปเปอร์ โปรดตรวจสอบว่าไม่ได้ตั้งค่าศูนย์หรือระดับเสียงเบา หากขึ้นตัวเลือก **เสียงถูกปิดใช้งานในการตั้งค่าหน้าจอ** หมายถึงหน้าจอถูกปิดเสียง ให้ตรวจสอบขั้นตอนที่ 2 อีกครั้งและเปิดเสียงหน้าจอของคุณ

## ตรวจสอบตัวปรับแต่งเสียง Windows
Wallpaper Engine อนุญาตให้ Windows จัดการอุปกรณ์เสียงได้ทั้งหมด หาก Wallpaper Engine ไม่ได้ปิดเสียงอยู่ ปัญหาจะต้องอยู่ในการตั้งค่า Windows ของคุณ ขั้นแรกให้ตรวจสอบตัวปรับแต่งเสียง Windows เพื่อให้แน่ใจว่า Wallpaper Engine ไม่ได้ปิดเสียงหรือตั้งค่าเป็นระดับเสียงเบามาก ดังที่แสดงในภาพหน้าจอต่อไปนี้:

![Raise volume and unmute Wallpaper Engine in the Windows audio mixer](./audiomixer.png)

## ตรวจสอบอุปกรณ์เสียงที่เลือก
อีกสาเหตุหนึ่งที่ทำให้ไม่ได้ยินเสียงจากอุปกรณ์เสียงอาจเป็นเพราะ Windows เลือกอุปกรณ์เสียงสำหรับ Wallpaper Engine ไม่ถูกต้อง ลองบังคับใช้อุปกรณ์เสียงที่คุณต้องการด้วยตนเอง:

1. คลิกขวาที่ไอคอนเสียงข้างนาฬิกาที่แถบงาน Windows แล้วเลือก **เปิดการตั้งค่าเสียง** (Open Sound Settings)
2. เลื่อนลงไปที่ด้านล่างสุดของหน้าที่เปิดขึ้นมา แล้วคลิกที่ **การตั้งค่าระดับเสียงและอุปกรณ์** (App volume and device preferences)
3. รายการแอพพลิเคชันทั้งหมดที่เล่นไฟล์เสียงจะปรากฏขึ้น ค้นหา Wallpaper Engine และเลือกอุปกรณ์เสียงที่ถูกต้องในคอลัมน์ **เอาต์พุต** (Output) If you are unsure, try all possible options. A restart of Wallpaper Engine may be necessary for this to take effect.

If you use multiple audio devices (especially when using USB or Bluetooth audio devices) and notice that audio cuts out when a device disconnects or reconnects, Windows sometimes does not reliably switch audio devices on-the-fly for running programs. This cannot be fixed from our end, in these rare cases you may need to restart Wallpaper Engine so that Windows starts to correctly handle the audio output again. You can also try and reinstall and update any audio drivers and see if that alleviates these types of issues.

## Reset all audio codecs

If audio output is still not playing at this point, some audio codecs may be broken, this is mainly relevant when using **Video** type wallpapers. You can double-check this by right-clicking on your wallpaper in Wallpaper Engine and selecting **Open in Explorer**. You should see the source video file (usually an **.mp4** file), open that file with Windows Media Player and check if it plays audio. **Please note:** It is very important that you test this with Windows Media Player only - other video players are irrelevant for this test as the underlying audio codecs are used by Wallpaper Engine as well. If no audio is playing in Windows Media Player, then either the video file does not have audio or the audio codecs on your system are indeed broken or missing.

In that case, you can use the *Codec Tweak Tool* as explained on the following page to reset all audio and video codecs on your system, afterwards restart Wallpaper Engine and try again:

* [Videos Black / Not Playing Properly - Codec Tweak Tool](noshow/notplaying.html#codec-tweak-tool)

