# จับคู่อุปกรณ์มือถือกับ Windows

คุณสามารถจับคู่อุปกรณ์มือถือของคุณกับคอมพิวเตอร์เพื่อถ่ายโอนคอลเลคชันวอลเปเปอร์ของคุณแบบไร้สายไปยังแอปคู่หู Wallpaper Engine บนอุปกรณ์มือถือของคุณ

ด้วยข้อจำกัดทางเทคนิคและกฎหมายที่ป้องกันไม่ให้แอป Android เชื่อมต่อโดยตรงกับเวิร์กชอป แอป Android จึงไม่สามารถดาวน์โหลดวอลเปเปอร์โดยตรงจากเวิร์กชอป

::: tip
หากการจับคู่ไม่ได้ผลสำหรับคุณ โปรดดูส่วน**วิธีแก้ปัญหาสำรอง**ที่ด้านล่างของหน้านี้เพื่อเรียนรู้วิธีสร้างแพ็กเกจวอลเปเปอร์มือถือ (**.mpkg**) และวิธีนำเข้ามายังอุปกรณ์มือถือของคุณ
:::

[[toc]]

## 1. ติดตั้งแอปคู่หู Android Wallpaper Engine ฟรี

Before continuing, make sure to install the latest version of the Wallpaper Engine Android companion app.

เราขอแนะนำให้ติดตั้งแอปผ่านทาง App Store อย่างเป็นทางการ แต่คุณสามารถดาวน์โหลดแอปล่าสุดได้โดยตรงจากหน้าแรกของเรา โปรดดูลิงก์ดาวน์โหลดและข้อมูลเพิ่มเติมได้ที่หน้าดาวน์โหลด Android ของเรา:

* [ดาวน์โหลด Wallpaper Engine สำหรับ Android](https://www.wallpaperengine.io/android/)

For security reasons, we advise against installing the app from any sources not listed on our website.

## 2. กำลังเตรียม Wallpaper Engine บน Windows

ในแอป **Windows** ให้คลิกปุ่ม **โทรศัพท์** ที่มุมขวาบนของส่วนต่อประสานกับผู้ใช้ ภาพรวมอุปกรณ์มือถือจะเปิดขึ้น ด้านล่างของภาพรวมอุปกรณ์ ให้คลิกที่ปุ่ม **เชื่อมต่ออุปกรณ์ใหม่** Wallpaper Engine will show you a 4-digit PIN that you can use to pair one mobile device in the next step.

<video width="100%" controls autoplay loop>
  <source src="/videos/mobile_pin.mp4" type="video/mp4">
  เบราว์เซอร์ของคุณไม่รองรับแท็กวิดีโอ
</video>

## 3. กำลังเชื่อมต่ออุปกรณ์มือถือของคุณ

ในแอปคู่หูโทรศัพท์มือถือ Wallpaper Engine ให้คลิก **เพิ่ม** ที่มุมล่างขวา จากนั้นคลิก **จับคู่กับคอมพิวเตอร์** แอป Wallpaper Engine จะค้นหาเครือข่ายภายในของคุณเพื่อเรียกใช้ตัวอย่างของ Wallpaper Engine สำหรับ Windows คอมพิวเตอร์ Windows ของคุณจะปรากฏขึ้นภายในเวลาไม่นานเพื่อให้คุณเชื่อมต่อได้ในคลิกเดียว หากคุณเชื่อมต่อเป็นครั้งแรก ระบบจะขอให้คุณป้อน PIN 4 หลัก (ดูหัวข้อ Windows ด้านบน)

<video height="590px" style="display:block;margin:0 auto;" controls autoplay loop>
  <source src="/videos/mobile_connect.mp4" type="video/mp4">
  เบราว์เซอร์ของคุณไม่รองรับแท็กวิดีโอ
</video>

หลังจากป้อน PIN แล้ว แถบสถานะในแอปมือถือจะเปลี่ยนเป็นสีเขียวและแสดงคอมพิวเตอร์ที่เชื่อมต่อ ปุ่ม **โทรศัพท์** ในแอป Windows จะเปลี่ยนเป็นสีเขียวเพื่อแสดงว่ากำลังการเชื่อมต่อมือถือทำงานอยู่

By default, Wallpaper Engine will now always automatically connect to your computer if you start Wallpaper Engine on your mobile device and your computer at the same time.

## 4. Transferring Wallpapers to Your Mobile Device

Once the connection has been established, the **Mobile** button in the upper right corner turns green.

You can now simply click on the **Send to Mobile Device** button on the right-hand side or right-click on any compatible wallpaper and select **Send to Mobile Device**, followed by selecting your device from the list.

#### Scene Wallpapers

Dynamic and interactive wallpapers that are of the **Scene** type will first be optimized for use on mobile phones and to ensure compatibility with mobile hardware. This process may take a short while. You will also be asked which quality option you would like to use, especially for high-resolution wallpapers, we recommend trying the **Balanced** option if you notice performance issues on your mobile device.

<video width="100%" controls autoplay loop>
  <source src="/videos/mobile_transfer.mp4" type="video/mp4">
  เบราว์เซอร์ของคุณไม่รองรับแท็กวิดีโอ
</video>

::: tip
You can also transfer multiple wallpapers at the same time by clicking on multiple wallpapers while holding the CTRL key on your keyboard.
:::

## กำลังแก้ปัญหาการจับคู่มือถือ

หากคุณไม่สามารถจับคู่อุปกรณ์มือถือกับคอมพิวเตอร์ได้ อาจเกิดจากความผิดพลาดของไฟร์วอลล์หรือการตั้งค่าเครือข่ายภายใน ตรวจสอบสาเหตุที่อาจทำให้เกิดปัญหาดังต่อไปนี้:

* ตรวจสอบให้แน่ใจว่าโทรศัพท์และคอมพิวเตอร์ของคุณเชื่อมต่อกับเครือข่ายภายในเดียวกัน
* ตรวจสอบให้แน่ใจว่าไฟร์วอลล์ไม่ได้ป้องกันไม่ให้ Wallpaper Engine สื่อสารกับเครือข่ายภายในของคุณ
* ตรวจสอบให้แน่ใจว่าเราเตอร์เครือข่ายไม่ได้ปิดกั้นอุปกรณ์ของคุณไม่ให้สื่อสารกัน
    * Make sure your router is not blocking network traffic between devices.
    * Turn on **UPnP** (**"Universal Plug and Play"**) in your router settings.
* ปิดการใช้งาน VPN หรือซอฟต์แวร์พร็อกซีบนคอมพิวเตอร์และอุปกรณ์มือถือซึ่งอาจรบกวนการสื่อสารระหว่างอุปกรณ์ของคุณ
* ตรวจสอบอีกครั้งว่า Wallpaper Engine บน Windows และอุปกรณ์มือถือของคุณเป็นรุ่นล่าสุดและกำลังทำงาน

### วิธีแก้ปัญหาสำรอง: นำเข้าไฟล์วอลเปเปอร์ (.mpkg) ด้วยตนเอง

หากคุณแก้ไขปัญหาการเชื่อมต่อระหว่างคอมพิวเตอร์และอุปกรณ์มือถือไม่ได้ คุณยังสามารถโอนวอลเปเปอร์ไปยังอุปกรณ์มือถือได้ด้วยตนเอง ขั้นแรกให้เลือกวอลเปเปอร์ใน Wallpaper Engine ที่ต้องการส่งออก จากนั้นคลิกขวาที่วอลเปเปอร์เหล่านั้นแล้วเลือก **ส่งไปยังอุปกรณ์มือถือ** ตามด้วยคลิกที่ **ส่งออก .mpkg**

<video width="100%" controls autoplay loop>
  <source src="/videos/mobile_export.mp4" type="video/mp4">
  เบราว์เซอร์ของคุณไม่รองรับแท็กวิดีโอ
</video>

เมื่อ Wallpaper Engine สร้างไฟล์ .mpkg สำหรับวอลเปเปอร์ของคุณแล้ว คุณสามารถถ่ายโอนไฟล์เหล่านั้นไปยังอุปกรณ์มือถือได้ได้โดยการย้ายไฟล์ผ่าน USB หรือคัดลอกไฟล์ไปยังการ์ด SD คุณยังสามารถใช้บริการ File Sharing บนอุปกรณ์มือถือ หรือส่งผ่านบริการส่งข้อความให้ตัวเอง หรือส่งทางอีเมลก็ได้เช่นกัน (หากขนาดไฟล์ไม่เกินที่กำหนด)

เมื่อไฟล์อยู่ในอุปกรณ์มือถือของคุณแล้ว ให้เปิด Wallpaper Engine บนอุปกรณ์มือถือของคุณและใช้ฟังก์ชัน **นำเข้าไฟล์** เพื่อนำเข้าไฟล์ .mpkg จากไดเร็กทอรีที่คุณวางไว้เข้าสู่แอปโดยตรง