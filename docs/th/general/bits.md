# เวอร์ชัน 32-Bit และ 64-Bit

เวอร์ชัน 64-bit สามารถรองรับไฟล์ที่มีขนาดใหญ่กว่า (มากกว่า 2GB) แต่จะใช้หน่วยความจำมากขึ้นเสมอ โดยไม่คำนึงถึงขนาดไฟล์วอลเปเปอร์ เช่น สำหรับวิดีโอวอลเปเปอร์ปกติ เวอร์ชัน 64-bit อาจใช้ RAM มากกว่าเวอร์ชัน 32-bit ประมาณ 50 MB โดยไม่เกิดความแตกต่างหรือมีการปรับปรุงให้ดีขึ้น

::: เคล็ดลับ เราขอแนะนำให้คุณใช้งานเวอร์ชัน 32-bit เว้นแต่ว่าวอลเปเปอร์ของคุณจะมีขนาดใหญ่มากจนทำให้เวอร์ชัน 32-bit เกิดความขัดข้อง ผู้ใช้ส่วนใหญ่ไม่เคยประสบปัญหานี้ :::

ในกรณีที่ระบบวิดีโอบนคอมพิวเตอร์ของคุณพบข้อผิดพลาดที่มีผลต่อโปรแกรม 32-bit เท่านั้น คุณสามารถเลือกเวอร์ชัน 64-bit ได้ หากคุณเคยติดตั้งชุดตัวแปลงสัญญาณหรือโปรแกรมที่คล้ายกัน ตัวแปลงเหล่านั้นอาจสร้างความเสียหายอย่างถาวรต่อระบบวิดีโอ 32-bit ของ Windows ที่ใช้โดย Wallpaper Engine หากระบบ 64-bit ไม่ได้รับผลกระทบ คุณสามารถใช้ Wallpaper Engine เวอร์ชัน 64-bit ได้โดยไม่จำเป็นต้องซ่อมแซมในส่วนที่เสียหาย

::: หมายเหตุ คำเตือน โปรดทราบว่าวอลเปเปอร์ประเภท "เว็บ" จะถูกเรียกใช้งานโดยการดำเนินการแบบ 32-Bit เสมอ (webwallpaper32.exe) เช่นเดียวกับส่วนต่อประสานกับผู้ใช้ (ui32.exe) การดำเนินการแบบ 64-Bit จะใช้งานได้เฉพาะเมื่อมีการเลือกวอลเปเปอร์ประเภท "ฉาก" หรือ "วิดีโอ" :::

## วิธีการตั้งค่า Wallpaper Engine ให้เริ่มต้นโดยอัตโนมัติในเวอร์ชัน 32 Bit หรือ 64 Bit เมื่อ Windows เริ่มทำงาน

ก่อนอื่นให้ปิด Wallpaper Engine ทางไอคอนที่แถบงาน (คลิกขวาที่ไอคอน Wallpaper Engine ที่แถบงาน Windows -> "ออกจากโปรแกรม") This is important as Steam will otherwise not launch Wallpaper Engine and only bring the already running version to the foreground.

Once Wallpaper Engine is turned off, go to Steam and start either the 32 Bit or 64 Bit version, depending on which version you want to automatically start. Go to the Wallpaper Engine settings and at the top of the "General" tab, enable autostart. If it is already enabled, turn it off completely and then turn it back on. This will register the current version as the one which will be automatically started alongside Windows. 