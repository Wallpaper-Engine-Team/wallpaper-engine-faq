# การไฮเบอร์เนต / สกรีนเซฟเวอร์ไม่ทำงาน

หากมีการเปิดใช้งานสตรีมข้อมูลเสียงอยู่ Windows จะไม่เข้าสู่โหมดไฮเบอร์เนต คุณสามารถหลีกเลี่ยงปัญหานี้ได้โดยการปิดใช้งานอุปกรณ์เสียงในแท็บ "ทั่วไป" ในส่วนการตั้งค่า Wallpaper Engine เพื่อป้องกันไม่ให้ Windows ปิดกั้นการไฮเบอร์เนต หากคุณต้องการใช้อุปกรณ์เสียงต่อ โปรดทำตามขั้นตอนในคู่มือนี้

## เปลี่ยนการตั้งค่าพลังงานของ Windows

หากมีการเปิดใช้งานสตรีมข้อมูลเสียงอยู่ Windows จะไม่เข้าสู่โหมดไฮเบอร์เนต คุณสามารถหลีกเลี่ยงปัญหานี้ได้โดยการปิดใช้งานอุปกรณ์เสียงในแท็บ "ทั่วไป" ในส่วนการตั้งค่า Wallpaper Engine หรือกำหนดค่า Windows ของคุณใหม่เพื่อให้เข้าสู่โหมดสลีปได้เมื่อเปิดใช้งานการเล่นเสียง:

1. ไปที่ "Power and sleep settings" (การตั้งค่าพลังงานและโหมดสลีป) ของ Windows โดยพิมพ์ชื่อลงในการค้นหาของ Windows
2. คลิกที่ "Additional power settings" (การตั้งค่าพลังงานอื่น ๆ)
3. คลิกที่ "Change plan settings" (เปลี่ยนค่าแผนการทำงาน) ถัดจากแผนที่เลือก
4. คลิกที่ "Change advanced power settings" (เปลี่ยนการตั้งค่าพลังงานขั้นสูง)
5. เลื่อนลงและขยาย "Multimedia settings" (การตั้งค่ามัลติมีเดีย)
6. ตั้งค่า "When sharing media" (เมื่อแบ่งปันสื่อ) เป็น "Allow the computer to enter away mode" (สกรีนเซฟเวอร์) **หรือ** "Allow the computer to sleep" (ไฮเบอร์เนต)

![Enable "Allow the computer to sleep"](./power.gif)

## ปัญหาการไฮเบอร์เนตกับวอลเปเปอร์ประเภท "เว็บ"

"Web" wallpapers use a web browser similar to Google Chrome ("CEF") which will prevent hibernation mode. Until this is fixed in the browser, you can get around this with some command-line prompts.

1. Search Windows for "cmd.exe" and right-click on it and select "Run as administrator" (very important, otherwise this will not work!).
2. Use the command `powercfg /requests` to view all processes that are blocking your system from hibernation (also check if other programs may be at fault here).
3. Use the following three commands to permit your system to sleep with Wallpaper Engine running:

```
powercfg /requestsoverride PROCESS webwallpaper32.exe AWAYMODE DISPLAY SYSTEM
powercfg /requestsoverride PROCESS wallpaper32.exe AWAYMODE DISPLAY SYSTEM
powercfg /requestsoverride PROCESS wallpaper64.exe AWAYMODE DISPLAY SYSTEM
```

Additionally, you can also set the **Display asleep** option in the **Performance** tab of the Wallpaper Engine settings to *Stop (free memory)* and turn off your display. That way Wallpaper Engine stops all playback when you turn your display off when leaving your computer unattended.