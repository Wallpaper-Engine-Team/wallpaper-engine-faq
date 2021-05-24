# จับคู่อุปกรณ์มือถือกับ Windows

คุณสามารถจับคู่อุปกรณ์มือถือของคุณกับคอมพิวเตอร์เพื่อถ่ายโอนคอลเลคชันวอลเปเปอร์ของคุณแบบไร้สายไปยังแอปคู่หู Wallpaper Engine บนอุปกรณ์มือถือของคุณ แอป Android ไม่สามารถดาวน์โหลดวอลเปเปอร์ได้โดยตรงจาก Steam Workshop เนื่องจากมีเพียง Steam เท่านั้นที่สามารถดาวน์โหลดไฟล์วอลเปเปอร์ได้

Should you run into any problems with pairing your mobile devices, you can still import wallpapers by manually exporting the **.mpkg** that the Wallpaper Engine mobile app uses to render wallpapers.

### กำลังเตรียม Wallpaper Engine บน Windows

ในแอป **Windows** ให้คลิกปุ่ม **โทรศัพท์** ที่มุมขวาบนของส่วนต่อประสานกับผู้ใช้ ภาพรวมอุปกรณ์มือถือจะเปิดขึ้น ด้านล่างของภาพรวมอุปกรณ์ ให้คลิกที่ปุ่ม **เชื่อมต่ออุปกรณ์ใหม่** Wallpaper Engine จะแสดง PIN 4 หลักซึ่งคุณสามารถใช้เพื่อจับคู่กับอุปกรณ์มือถือหนึ่งเครื่อง

![PIN มือถือ](/img/faq/mobile_pin.gif)

### กำลังเชื่อมต่ออุปกรณ์มือถือของคุณ

ในแอปคู่หูโทรศัพท์มือถือ Wallpaper Engine ให้คลิก **เพิ่ม** ที่มุมล่างขวา จากนั้นคลิก **จับคู่กับคอมพิวเตอร์** แอป Wallpaper Engine จะค้นหาเครือข่ายภายในของคุณเพื่อเรียกใช้ตัวอย่างของ Wallpaper Engine สำหรับ Windows คอมพิวเตอร์ Windows ของคุณจะปรากฏขึ้นภายในเวลาไม่นานเพื่อให้คุณเชื่อมต่อได้ในคลิกเดียว หากคุณเชื่อมต่อเป็นครั้งแรก ระบบจะขอให้คุณป้อน PIN 4 หลัก (ดูหัวข้อ Windows ด้านบน) PIN เป็นมาตรการรักษาความปลอดภัยเพิ่มเติมที่ช่วยเพิ่มความมั่นใจว่าผู้ใช้ที่ไม่ได้รับอนุญาตจะไม่สามารถเชื่อมต่อกับคอมพิวเตอร์ของคุณได้โดยที่คุณไม่รู้ตัว

หลังจากป้อน PIN แล้ว แถบสถานะในแอปมือถือจะเปลี่ยนเป็นสีเขียวและแสดงคอมพิวเตอร์ที่เชื่อมต่อ ปุ่ม **โทรศัพท์** ในแอป Windows จะเปลี่ยนเป็นสีเขียวเพื่อแสดงว่ากำลังการเชื่อมต่อมือถือทำงานอยู่

![PIN มือถือ](/img/faq/mobile_pair.gif)

## กำลังแก้ปัญหาการจับคู่มือถือ

หากคุณไม่สามารถจับคู่อุปกรณ์มือถือกับคอมพิวเตอร์ได้ อาจเกิดจากความผิดพลาดของไฟร์วอลล์หรือการตั้งค่าเครือข่ายภายใน ตรวจสอบสาเหตุที่อาจทำให้เกิดปัญหาดังต่อไปนี้:

* ตรวจสอบให้แน่ใจว่าโทรศัพท์และคอมพิวเตอร์ของคุณเชื่อมต่อกับเครือข่ายภายในเดียวกัน
* ตรวจสอบให้แน่ใจว่าไฟร์วอลล์ไม่ได้ป้องกันไม่ให้ Wallpaper Engine สื่อสารกับเครือข่ายภายในของคุณ
* ตรวจสอบให้แน่ใจว่าเราเตอร์เครือข่ายไม่ได้ปิดกั้นอุปกรณ์ของคุณไม่ให้สื่อสารกัน
* Disable any sort of VPN or proxy software on your computer and your mobile device which can interfere with the communication between your devices.
* ตรวจสอบอีกครั้งว่า Wallpaper Engine บน Windows และอุปกรณ์มือถือของคุณเป็นรุ่นล่าสุดและกำลังทำงาน

## Backup solution: Manually importing a Wallpaper File (.mpkg)

Should you be able unable to fix the connection between your computer and your mobile device, you can still manually transfer your wallpapers onto your mobile device. First, select the wallpapers you want to export in Wallpaper Engine, then right-click on them and select **Send to Mobile Device**, followed by clicking on **Export .mpkg**.

Once Wallpaper Engine has created the .mpkg files for your wallpapers, you can either transfer them to your mobile device by moving the files onto your mobile device via USB or by copying the files onto an SD card. Alternatively you can also use any file sharing service on your mobile device or send them to yourself via a messaging service or even via email (if the file size is not a problem).

Once the files are on your mobile device, open up Wallpaper Engine on your mobile device and use the **Import File** functionality to directly import the .mpkg files into the app by selecting them from the directory that you have placed them in.