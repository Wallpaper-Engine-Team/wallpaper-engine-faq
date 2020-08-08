# เลือกวอลเปเปอร์ตามแอพพลิเคชัน

Wallpaper Engine ช่วยให้คุณเปิดใช้วอลเปเปอร์ต่าง ๆ โดยอัตโนมัติเมื่อใดก็ตามที่มีการเปิด .exe บางอย่างในระบบของคุณ ตัวอย่างเช่น คุณสมบัตินี้อาจมีประโยชน์หากคุณต้องการใช้วอลเปเปอร์ที่รบกวนสมาธิน้อยลงในขณะที่เล่นเกมหรือเปิดโปรแกรม Visualizer เสียงโดยอัตโนมัติเมื่อคุณเปิดเครื่องเล่นเพลง

::: tip
หากบางเกมหรือแอพพลิเคชันมีปัญหาทางเทคนิค คุณยังสามารถใช้กฎของแอพพลิเคชันเพื่อปิดใช้งาน Wallpaper Engine เมื่อมีการเปิด .exe หากคุณต้องการแก้ไขปัญหาทางเทคนิคกับแอพพลิเคชันอื่น โปรดดูคู่มือนี้: [แก้ไขปัญหาเฉพาะบางแอพพลิเคชันหรือบางเกม](/functionality/applicationrules.html)
:::

## การตั้งค่ากฎของแอพพลิเคชัน

ในแท็บ **ประสิทธิภาพ** ของการตั้งค่า Wallpaper Engine ให้คลิกที่ปุ่ม **แก้ไข** ในส่วน **กฎของแอพพลิเคชัน** คลิกที่ **สร้างกฎใหม่** เพื่อตั้งค่าวอลเปเปอร์ชุดใหม่สำหรับ .exe ที่คุณเลือก ป้อนชื่อ .exe ของคุณในช่องอินพุต **ชื่อแอพพลิเคชัน** โปรดตรวจสอบให้แน่ใจว่าชื่อตรงกัน เช่น *musicplayer.exe* ตั้งค่า **เงื่อนไข** เป็น **กำลังทำงาน** ในตัวเลือก **การเล่นวอลเปเปอร์** คุณสามารถเลือกหนึ่งในตัวเลือกต่อไปนี้:

* โหลดวอลเปเปอร์
* โหลดเพลย์ลิสต์
* โหลดโปรไฟล์

What is important to note here is that **Load wallpaper** and **Load playlist** will both only load one wallpaper and span it across all screens. If you have multiple monitors and want to load independent wallpapers for each screen (or even different playlists on each screen), you need to use the **Load Profile** option. Read the following section for more infos on how to set this up.

### Setting up a multi-monitor profile

**Load Profile** in the application rules refers to mulit-monitor profiles which can be configured in the monitor overview (screen icon in the upper right corner of the interface). A profile is a snapshot of all your currently selected wallpapers and playlists across all your screens. Whenever a profile is loaded, all wallpapers and playlists will be placed according to the profile configuration.

Configure your wallpapers and playlists across all monitors the the way you want them to be, then click on the **Save profile** button in the monitor settings and save the current setup under a name of your choice. Keep in mind that any subsequent changes you make to your setup will not change the profile until you use the **Save profile** button again. You can set up multiple profiles and assign them to multiple apps at once. For example, you may create a **Music**, a **Gaming** and a **Movies** profile and then assign each profile to all .exe files that match these categories.

<video width="100%" controls autplay loop>
  <source src="/videos/apprules.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>