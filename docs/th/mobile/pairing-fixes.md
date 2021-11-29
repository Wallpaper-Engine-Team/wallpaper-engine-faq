## กำลังแก้ปัญหาการจับคู่มือถือ

หากคุณไม่สามารถจับคู่อุปกรณ์มือถือกับคอมพิวเตอร์ได้ อาจเกิดจากความผิดพลาดของไฟร์วอลล์หรือการตั้งค่าเครือข่ายภายใน ตรวจสอบสาเหตุที่อาจทำให้เกิดปัญหาดังต่อไปนี้:

* **ตรวจสอบให้แน่ใจว่าโทรศัพท์และคอมพิวเตอร์ของคุณเชื่อมต่อกับเครือข่ายภายในเดียวกัน**
  * Your computer does not need wifi, it is still the same network even if it is connected through a network cable.
* **ตรวจสอบให้แน่ใจว่าไฟร์วอลล์ไม่ได้ป้องกันไม่ให้ Wallpaper Engine สื่อสารกับเครือข่ายภายในของคุณ**
  * Wallpaper Engine sends a multi-casts on the network ports 7884 (UDP) and 7889 (TCP), make sure no firewall is blocking this.
* **ปิดการใช้งาน VPN หรือซอฟต์แวร์พร็อกซีบนคอมพิวเตอร์และอุปกรณ์มือถือซึ่งอาจรบกวนการสื่อสารระหว่างอุปกรณ์ของคุณ**
* **ตรวจสอบให้แน่ใจว่าเราเตอร์เครือข่ายไม่ได้ปิดกั้นอุปกรณ์ของคุณไม่ให้สื่อสารกัน**
    * ตรวจสอบให้แน่ใจว่าเราเตอร์ของคุณไม่ได้ปิดกั้นการรับส่งข้อมูลเครือข่ายระหว่างอุปกรณ์
    * เปิด **UPnP** (**"Universal Plug and Play"**) ในการตั้งค่าเราเตอร์ของคุณ
* **ตรวจสอบอีกครั้งว่า Wallpaper Engine บน Windows และอุปกรณ์มือถือของคุณเป็นรุ่นล่าสุดและกำลังทำงาน**

## Windows Firewall

Especially if your mobile device can find your computer but fails to connect to it, it's almost definitely caused by a firewall on your computer. When you first launch Wallpaper Engine, it will prompt you to grant it permission to your network. If you closed this window or did not specifically allow **ui32.exe** to communicate with your network, the Windows firewall will block Wallpaper Engine. Make sure to allow **ui32.exe** to communicate as shown in this screenshot:

![Windows Firewall Permissions](/img/faq/windows_defender.png)

Wallpaper Engine will automatically suggest firewall fixes if it detects any problems. This process is somewhat reliable but in some cases you may still need to manually clear any blocks you may have created in the past by accident.

If you have not granted Wallpaper Engine these permissions, the Windows firewall will automatically block Wallpaper Engine. Open the Windows firewall settings, then click on **Allow an app through firewall**. Search for an entry called **ui32** and either delete it or make sure both check marks in the *Private* and *Public* column are enabled, then confirm your changes and restart Wallpaper Engine.

Make sure to look for **ui32** or **Wallpaper Engine UI** - you may find entries called just **Wallpaper Engine** but these are irrelevant here.

**Please note:** This section is specifically only about the built-in Windows firewall, if you use any other antivirus app or firewall, you need to make sure Wallpaper Engine is not being blocked by them.

### วิธีแก้ปัญหาสำรอง: นำเข้าไฟล์วอลเปเปอร์ (.mpkg) ด้วยตนเอง

หากคุณแก้ไขปัญหาการเชื่อมต่อระหว่างคอมพิวเตอร์และอุปกรณ์มือถือไม่ได้ คุณยังสามารถโอนวอลเปเปอร์ไปยังอุปกรณ์มือถือได้ด้วยตนเอง ขั้นแรกให้เลือกวอลเปเปอร์ใน Wallpaper Engine ที่ต้องการส่งออก จากนั้นคลิกขวาที่วอลเปเปอร์เหล่านั้นแล้วเลือก **ส่งไปยังอุปกรณ์มือถือ** ตามด้วยคลิกที่ **ส่งออก .mpkg**

<video width="100%" controls autoplay loop>
  <source src="/videos/mobile_export.mp4" type="video/mp4">
  เบราว์เซอร์ของคุณไม่รองรับแท็กวิดีโอ
</video>

เมื่อ Wallpaper Engine สร้างไฟล์ .mpkg สำหรับวอลเปเปอร์ของคุณแล้ว คุณสามารถถ่ายโอนไฟล์เหล่านั้นไปยังอุปกรณ์มือถือได้ได้โดยการย้ายไฟล์ผ่าน USB หรือคัดลอกไฟล์ไปยังการ์ด SD คุณยังสามารถใช้บริการ File Sharing บนอุปกรณ์มือถือ หรือส่งผ่านบริการส่งข้อความให้ตัวเอง หรือส่งทางอีเมลก็ได้เช่นกัน (หากขนาดไฟล์ไม่เกินที่กำหนด)

เมื่อไฟล์อยู่ในอุปกรณ์มือถือของคุณแล้ว ให้เปิด Wallpaper Engine บนอุปกรณ์มือถือของคุณและใช้ฟังก์ชัน **นำเข้าไฟล์** เพื่อนำเข้าไฟล์ .mpkg จากไดเร็กทอรีที่คุณวางไว้เข้าสู่แอปโดยตรง