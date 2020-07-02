---
tags:
  - แอพพลิเคชัน
  - กฎ
  - ข้อยกเว้น
  - รายการที่ปลอดภัย
  - รายการที่ไม่ยอมรับ
  - ล่าช้า
  - ล้าหลัง
  - เกม
  - ประสิทธิภาพการทำงาน
  - FPS
  - ข้อผิดพลาด
  - เสียง
  - สัญญาณเสียง
  - ไม่ต่อเนื่อง
---

# แก้ไขปัญหาเฉพาะบางแอพพลิเคชันหรือบางเกม

หากคุณพบปัญหาเฉพาะบางแอพพลิเคชันหรือบางเกม คุณสามารถกำหนดค่า Wallpaper Engine ให้ทำงานได้อย่างเหมาะสม เช่น เมื่อคุณตรวจพบว่าแอพพลิเคชันที่คุณกำลังประสบปัญหานั้นเริ่มการทำงานหรือกำลังเล่นไฟล์เสียง

## การตั้งค่ากฎของแอพพลิเคชัน

ในส่วนการตั้งค่า Wallpaper Engine ที่แท็บ *ประสิทธิภาพการทำงาน* ให้คลิกที่ปุ่ม *แก้ไข* ถัดจากสัญลักษณ์ *กฎของแอพพลิเคชัน* จะแสดงภาพรวมของกฎที่กำหนดเองทั้งหมดที่คุณได้ตั้งไว้ เมื่อคลิกที่ *สร้างกฎใหม่* คุณจะสามารถตั้งค่าลักษณะพิเศษของ Wallpaper Engine โดยเจาะจงแอพพลิเคชันได้

![Application Rules Overview](./applicationrule.gif)

รายการไฟล์ .exe ที่ทำงานอยู่ทั้งหมดในระบบจะปรากฏขึ้น คุณอาจเลือก .exe จากรายการหรือพิมพ์ชื่อของ .exe ที่เป็นปัญหา คุณสามารถใช้สองตัวเลือกอื่นเพื่อปรับแต่งเงื่อนไขและลักษณะการทำงาน สำหรับข้อมูลเพิ่มเติมและตัวอย่างที่เฉพาะเจาะจงสามารถดูได้ที่ด้านล่าง

::: tip Wallpaper Engine only cares about the exact .exe name, the location does not matter so you can just type any .exe into the *Application name* field. Just make sure the .exe name matches exactly, including uppercase and lowercase letters. :::

### Fixing performance problems with apps or games

Select the .exe of the program you want to have a special rule for from the list or type it into the **Application name** field. Afterwards, set **Condition** to **Is running** and **Wallpaper playback** to **Stop (free memory)**. This means Wallpaper Engine will completely remove all wallpapers from memory when the application or game is launched, which means any compatibility issues will be resolved.

### Fixing intermittent sound with background recording tools

Select the .exe of the program you want to have a special rule for from the list or type it into the **Application name** field. Afterwards, set **Condition** to **Is playing audio** and **Wallpaper playback** to **Keep running**. This means Wallpaper Engine will not mute itself when the application in question is playing or recording audio. Windows does not differentiate between playing or recording audio, this is why Wallpaper Engine will constantly mute and unmute itself if you are recording it. Many game streaming applications can do this by accident and without your knowledge.

### Other behavior

Check out all possible conditions and wallpaper playback options for more types of application rules. You can also configure Wallpaper Engine to mute or pause when you launch a certain application.

::: tip You can also change these settings for all applications in the **Performance** tab of the Wallpaper Engine settings. If you are having performance issues in multiple games, for example, it may make sense to just change the **Other applications fullscreen** option to **Stop (free memory)** so that Wallpaper Engine will turn itself off when you launch any game or fullscreen application. :::