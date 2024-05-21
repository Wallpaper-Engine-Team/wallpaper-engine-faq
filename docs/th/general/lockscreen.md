---
tags:
  - หน้าจอล็อก
  - หน้าจอเข้าสู่ระบบ
---

# Wallpaper Engine บนหน้าจอล็อกของ Windows

The Windows login screen is not meant to be modified as a design decision by Microsoft. Making changes to it essentially requires hacking Windows in an unsafe and unstable manner. This means that if a Windows update modifies the lock screen or if the app crashes, you would be unable to login to your computer entirely. The feature could potentially stop working at any time, causing unpredictable side effects.

If Microsoft officially makes this possible or if we discover a safe way to add live wallpapers to the Windows lock screen, we will implement this feature. Currently, there are no known safe ways to accomplish this, which is why live wallpapers cannot be set on the lock screen by Wallpaper Engine.

## Setting a static wallpaper

แต่คุณยังสามารถกำหนดค่า Wallpaper Engine เพื่อแทนที่รูปภาพหน้าจอล็อกแบบภาพนิ่งด้วยภาพบันทึกวอลเปเปอร์ภาพเคลื่อนไหวปัจจุบันของคุณได้ โดยเปิดใช้งานตัวเลือก**แทนที่รูปภาพหน้าจอล็อก**ในแท็บ**ทั่วไป** ของการตั้งค่า Wallpaper Engine

## ฟังก์ชันสกรีนเซฟเวอร์

เพื่อเป็นอีกทางเลือกแทนการใช้หน้าจอล็อก เราขอแนะนำให้ตั้งค่า Wallpaper Engine เป็นสกรีนเซฟเวอร์ร่วมกับการเปิดใช้งานตัวเลือก **On resume, display logon screen** (เมื่อดำเนินการต่อ ให้แสดงหน้าจอการเข้าสู่ระบบ) ในการตั้งค่าสกรีนเซฟเวอร์ของ Windows ดูวิธีกำหนดค่า Wallpaper Engine เป็นสกรีนเซฟเวอร์ได้ทางคู่มือสกรีนเซฟเวอร์ของเรา:

* [สกรีนเซฟเวอร์กับ Wallpaper Engine](/functionality/screensaver.html)