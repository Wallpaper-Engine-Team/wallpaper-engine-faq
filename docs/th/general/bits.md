# เวอร์ชัน 32-Bit และ 64-Bit

เวอร์ชัน 64-bit สามารถรองรับไฟล์ที่มีขนาดใหญ่กว่า (มากกว่า 2GB) แต่จะใช้หน่วยความจำมากขึ้นเสมอ โดยไม่คำนึงถึงขนาดไฟล์วอลเปเปอร์ เช่น สำหรับวิดีโอวอลเปเปอร์ปกติ เวอร์ชัน 64-bit อาจใช้ RAM มากกว่าเวอร์ชัน 32-bit ประมาณ 50 MB โดยไม่เกิดความแตกต่างหรือมีการปรับปรุงให้ดีขึ้น

::: tip
เราขอแนะนำให้คุณใช้งานเวอร์ชัน 32-bit เว้นแต่ว่าวอลเปเปอร์ของคุณจะมีขนาดใหญ่มากจนทำให้เวอร์ชัน 32-bit เกิดความขัดข้อง ผู้ใช้ส่วนใหญ่ไม่เคยประสบปัญหานี้
:::

ในกรณีที่ระบบวิดีโอบนคอมพิวเตอร์ของคุณพบข้อผิดพลาดที่มีผลต่อโปรแกรม 32-bit เท่านั้น คุณสามารถเลือกเวอร์ชัน 64-bit ได้ หากคุณเคยติดตั้งชุดตัวแปลงสัญญาณหรือโปรแกรมที่คล้ายกัน ตัวแปลงเหล่านั้นอาจสร้างความเสียหายอย่างถาวรต่อระบบวิดีโอ 32-bit ของ Windows ที่ใช้โดย Wallpaper Engine หากระบบ 64-bit ไม่ได้รับผลกระทบ คุณสามารถใช้ Wallpaper Engine เวอร์ชัน 64-bit ได้โดยไม่จำเป็นต้องซ่อมแซมในส่วนที่เสียหาย

::: warning
คำเตือน
โปรดทราบว่าวอลเปเปอร์ประเภท "เว็บ" จะถูกเรียกใช้งานโดยการดำเนินการแบบ 32-Bit เสมอ (webwallpaper32.exe) เช่นเดียวกับส่วนต่อประสานกับผู้ใช้ (ui32.exe) การดำเนินการแบบ 64-Bit จะใช้งานได้เฉพาะเมื่อมีการเลือกวอลเปเปอร์ประเภท "ฉาก" หรือ "วิดีโอ"
:::

## วิธีการตั้งค่า Wallpaper Engine ให้เริ่มต้นโดยอัตโนมัติในเวอร์ชัน 32 Bit หรือ 64 Bit เมื่อ Windows เริ่มทำงาน

ก่อนอื่นให้ปิด Wallpaper Engine ทางไอคอนที่แถบงาน (คลิกขวาที่ไอคอน Wallpaper Engine ที่แถบงาน Windows -> "ออกจากโปรแกรม") สิ่งนี้มีความสำคัญเนื่องจาก Steam จะไม่เปิดใช้งาน Wallpaper Engine และจะเรียกใช้เฉพาะเวอร์ชันที่เปิดอยู่เบื้องหน้าเท่านั้น

เมื่อปิด Wallpaper Engine แล้วให้ไปที่ Steam และเริ่มต้นเวอร์ชัน 32 Bit หรือ 64 Bit ขึ้นอยู่กับเวอร์ชันที่คุณต้องการให้เริ่มต้นโดยอัตโนมัติ ไปที่การตั้งค่า Wallpaper Engine และที่ด้านบนของแท็บ "ทั่วไป" ให้เปิดใช้งานการเริ่มต้นอัตโนมัติ หากมีการเปิดใช้งานอยู่แล้ว ให้ปิดโดยสมบูรณ์จากนั้นเปิดใหม่อีกครั้ง วิธีนี้จะเป็นการลงทะเบียนเวอร์ชันปัจจุบันให้เป็นเวอร์ชันที่เริ่มต้นโดยอัตโนมัติพร้อม Windows 