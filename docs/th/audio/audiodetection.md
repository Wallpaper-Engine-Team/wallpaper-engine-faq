# Visualizer เสียงไม่ทำงาน / ตรวจไม่พบเสียง

มีหลายสาเหตุที่ Visualizer เสียงอาจไม่ทำงาน เราแสดงรายการสาเหตุที่เป็นไปได้ทั้งหมดที่นี่ โปรดอ่านคู่มือฉบับเต็มเพื่อให้แน่ใจว่าคุณไม่พลาดสาเหตุที่เป็นไปได้ว่าทำไมมันไม่ทำงาน

## 1. การตั้งค่าอุปกรณ์เสียง
ไปที่การตั้งค่า Wallpaper Engine และไปที่แท็บ "ทั่วไป" คุณจะพบหมวด "สื่อ" ในส่วนกลางซึ่งคุณสามารถเลือกอุปกรณ์รับข้อมูลเสียงได้ ตรวจสอบให้แน่ใจว่าได้เลือกอุปกรณ์ที่ถูกต้อง หากคุณไม่แน่ใจว่าอุปกรณ์ใดถูกต้อง ให้ลองใช้อุปกรณ์ที่เป็นไปได้ทั้งหมดในขณะที่ฟังเพลงจนกว่า Visualizer เสียงเริ่มทำงาน

หากเลือกอุปกรณ์เสียงถูกต้องแล้วแต่คุณยังไม่ได้ยินเสียงใด ๆ หรือหาก Visualizer เสียงไม่ทำงาน ให้ตรวจสอบว่าคุณไม่ได้ปิดเสียง Wallpaper Engine ในตัวปรับแต่งเสียงของ Windows หรือตั้งค่าระดับเสียงที่เบามาก Windows ไม่แยกความแตกต่างระหว่างระดับเสียงสำหรับการบันทึกเสียงและการเล่นเสียง ซึ่งหมายความว่าหากคุณตั้งค่าระดับเสียงเบาใน Windows การบันทึกเสียงจะไม่ทำงาน:

![Raise volume and unmute Wallpaper Engine in the Windows audio mixer](./audiomixer.png)

หากตรวจพบเสียงแต่ว่าเสียงเงียบเกินไป โปรดจำไว้ว่าจำนวนแอพพลิเคชัน (ของเครื่องเล่นเพลง เว็บเบราเซอร์ ฯลฯ) มีผลต่อการตรวจจับเสียง คุณสามารถบูสต์การตรวจจับเสียงในแท็บ "ทั่วไป" ของการตั้งค่า Wallpaper Engine หากคุณไม่ต้องการเพิ่มระดับเสียงแอพพลิเคชัน (ค่าระดับเสียงเริ่มต้นของการบันทึกคือ 50)

## 2. ปัญหาเฉพาะของฮาร์ดแวร์

### Corsair Void Pro / บลูทูธ / ชุดหูฟัง USB

ชุดหูฟัง USB และแบบไร้สายมีแนวโน้มที่จะเกิดปัญหากับไดรเวอร์เสียง สำหรับอุปกรณ์จำนวนมากนั้น การเปลี่ยนความถี่เสียงในการตั้งค่าอุปกรณ์ Windows เป็น 44100 Hz จะแก้ไขปัญหาอย่างถาวร:

คลิกขวาที่ไอคอนเสียงในพื้นที่แถบงานที่มุมล่างขวาของ Windows เลือก "เปิดการตั้งค่าเสียง" คลิกที่ "คุณสมบัติอุปกรณ์" ในส่วน "เอาต์พุต" ของหน้าต่างที่เปิดขึ้น หลังจากนั้นคลิกที่ "คุณสมบัติอุปกรณ์เพิ่มเติม" จากนั้นไปที่แท็บ "ขั้นสูง" คุณสามารถเปลี่ยนความถี่ได้ในเมนูที่แสดงขึ้นมา ตำแหน่งที่แน่นอนนั้นแตกต่างกันไปใน Windows แต่ละรุ่น หากคุณไม่พบตัวเลือกนี้ ให้ค้นหาคำแนะนำเกี่ยวกับวิธีการเปลี่ยนความถี่เสียงของอุปกรณ์เสียงสำหรับ Windows รุ่นที่คุณใช้

![Set the sampling rate to "24 bit, 44100 Hz"](./samplingrate.png)

### ชุดหูฟัง Razer (พร้อมเสียง THX)

เปลี่ยนอุปกรณ์รับข้อมูลเสียงใน Wallpaper Engine เป็นอุปกรณ์ "ลำโพง (Razer XYZ)" ตัวเลือกนี้อยู่ในการตั้งค่าทั่วไป ชุดหูฟัง Razer ใด ๆ ที่มีเอฟเฟ็กต์ THX ควรใช้งานวิธีนี้ได้

## 3. แอพพลิเคชันที่ขัดแย้งกัน

If you believe your audio settings are correct but audio responsive wallpapers do not react to audio, you most likely have sound hardware or software that disables the loopback recording feature on the entire PC. It needs to be configured correctly or removed:

* Nahimic
* Sonic Suite
* Alienware Audio
* Various other applications, especially pre-installed ones on notebooks

If you are unsure if you have any such applications installed, you can also use the Wallpaper Engine scan tool and it will report some programs which are known to cause these issues:

* [Wallpaper Engine Scan Tool](/debug/scantool.html)

