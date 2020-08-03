- - -
  tags:
  - screensavers
  - hibernation
  - sleep
  - power saving
- - -

# การไฮเบอร์เนต / สกรีนเซฟเวอร์ไม่ทำงาน

หากมีการเปิดใช้งานสตรีมข้อมูลเสียงอยู่ Windows จะไม่เข้าสู่โหมดไฮเบอร์เนต You can get around this by either disabling audio output in the "General" tab of the Wallpaper Engine settings to prevent Windows from blocking hibernation in the first place. If you want to continue to have audio output, follow the steps in this guide on how to achieve that.

## เปลี่ยนการตั้งค่าพลังงานของ Windows

Windows does not hibernate with any active audio streams open. You can get around this by either disabling audio output in the "General" tab of the Wallpaper Engine settings or re-configuring your Windows to allow it to sleep with audio playback enabled:

1. ไปที่ "Power and sleep settings" (การตั้งค่าพลังงานและโหมดสลีป) ของ Windows โดยพิมพ์ชื่อลงในการค้นหาของ Windows
2. คลิกที่ "Additional power settings" (การตั้งค่าพลังงานอื่น ๆ)
3. คลิกที่ "Change plan settings" (เปลี่ยนค่าแผนการทำงาน) ถัดจากแผนที่เลือก
4. คลิกที่ "Change advanced power settings" (เปลี่ยนการตั้งค่าพลังงานขั้นสูง)
5. เลื่อนลงและขยาย "Multimedia settings" (การตั้งค่ามัลติมีเดีย)
6. ตั้งค่า "When sharing media" (เมื่อแบ่งปันสื่อ) เป็น "Allow the computer to enter away mode" (สกรีนเซฟเวอร์) **หรือ** "Allow the computer to sleep" (ไฮเบอร์เนต)

![Enable "Allow the computer to sleep"](./power.gif)

## ปัญหาการไฮเบอร์เนตกับวอลเปเปอร์ประเภท "เว็บ"

"Web" wallpapers use a web browser similar to Google Chrome ("CEF") which will prevent hibernation mode. Until this is fixed in the browser, you can get around this with some command-line prompts.

1. ค้นหา "cmd.exe" ใน Windows จากนั้นคลิกขวาแล้วเลือก "Run as administrator" (สำคัญมาก มิฉะนั้นจะใช้งานไม่ได้!)
2. ใช้คำสั่ง `powercfg /requests` เพื่อดูกระบวนการทั้งหมดที่ปิดกั้นระบบของคุณจากโหมดไฮเบอร์เนต (ตรวจสอบด้วยว่ามีโปรแกรมอื่น ๆ ที่อาจมีข้อผิดพลาดหรือไม่)
3. ใช้สามคำสั่งต่อไปนี้เพื่อให้ระบบเข้าสู่โหมดสลีปขณะที่ Wallpaper Engine กำลังทำงาน:

```
powercfg /requestsoverride PROCESS webwallpaper32.exe AWAYMODE DISPLAY SYSTEM
powercfg /requestsoverride PROCESS wallpaper32.exe AWAYMODE DISPLAY SYSTEM
powercfg /requestsoverride PROCESS wallpaper64.exe AWAYMODE DISPLAY SYSTEM
```

Additionally, you can also set the **Display asleep** option in the **Performance** tab of the Wallpaper Engine settings to *Stop (free memory)* and turn off your display. That way Wallpaper Engine stops all playback when you turn your display off when leaving your computer unattended.