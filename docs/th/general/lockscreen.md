---
tags:
  - หน้าจอล็อก
  - หน้าจอเข้าสู่ระบบ
---

# Wallpaper Engine บนหน้าจอล็อกของ Windows

The login screen is very secure and not accessible by normal means. Only dangerous Windows hacks may accomplish this by patching or hooking into the login screen process. Due to this, you could get permanently locked out of your PC when an error occurs or a Windows update changes the lockscreen structure in an unexpected way.

If a safe method is made public or reverse-engineered by us, we will implement this feature. Currently there are no known safe ways to accomplish this, which is why live wallpapers cannot be set on the lockscreen.

แต่คุณยังสามารถกำหนดค่า Wallpaper Engine เพื่อแทนที่รูปภาพหน้าจอล็อกแบบภาพนิ่งด้วยภาพบันทึกวอลเปเปอร์ภาพเคลื่อนไหวปัจจุบันของคุณได้ โดยเปิดใช้งานตัวเลือก**แทนที่รูปภาพหน้าจอล็อก**ในแท็บ**ทั่วไป** ของการตั้งค่า Wallpaper Engine

## ฟังก์ชันสกรีนเซฟเวอร์

เพื่อเป็นอีกทางเลือกแทนการใช้หน้าจอล็อก เราขอแนะนำให้ตั้งค่า Wallpaper Engine เป็นสกรีนเซฟเวอร์ร่วมกับการเปิดใช้งานตัวเลือก **On resume, display logon screen** (เมื่อดำเนินการต่อ ให้แสดงหน้าจอการเข้าสู่ระบบ) ในการตั้งค่าสกรีนเซฟเวอร์ของ Windows ดูวิธีกำหนดค่า Wallpaper Engine เป็นสกรีนเซฟเวอร์ได้ทางคู่มือสกรีนเซฟเวอร์ของเรา:

* [สกรีนเซฟเวอร์กับ Wallpaper Engine](/functionality/screensaver.html)