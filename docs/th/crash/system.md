---
tags:
  - ฮาร์ดแวร์
  - bsod
  - หน้าจอสีน้ำเงิน
---

# ระบบเกิดความผิดพลาด / ระบบหยุดทำงาน
Wallpaper Engine เพียงอย่างเดียวจะไม่ทำให้ระบบขัดข้องหรือส่งผลกระทบต่อโปรแกรมอื่น ๆ หากคุณพบว่าระบบเกิดความผิดพลาด ระบบหยุดทำงาน หน้าจอสีน้ำเงินหรือหรือโปรแกรมอื่น ๆ หยุดทำงานในขณะที่เรียกใช้ Wallpaper Engine สิ่งเหล่านี้อาจเป็นสาเหตุ:

* ฮาร์ดแวร์ที่จำเป็นสำหรับ Wallpaper Engine ใช้งานไม่ได้
* ไดรเวอร์ที่จำเป็นบางตัวสำหรับฮาร์ดแวร์ของ Wallpaper Engine เกิดผิดพลาดหรือเสียหาย
* มีการติดตั้งซอฟต์แวร์ที่รบกวนไดรเวอร์หรือ Windows ขณะที่ Wallpaper Engine กำลังทำงาน

Wallpaper Engine ไม่ได้ติดตั้งไดรเวอร์ใด ๆ ไม่ได้แทนที่ไฟล์ระบบและไม่ดำเนินการใด ๆ ที่เป็นอันตรายหรือน่าสงสัยซึ่งอาจทำให้ระบบเกิดความผิดพลาดหรือทำให้โปรแกรมอื่นเกิดความขัดข้อง

แม้ในกรณีที่เลวร้ายที่สุด ข้อผิดพลาดใด ๆ ที่เกิดขึ้นใน Wallpaper Engine อาจทำให้ Wallpaper Engine ทำงานผิดพลาด แต่จะไม่มีผลต่อระบบทั้งหมดหรือโปรแกรมอื่น ๆ ด้วยการออกแบบ Microsoft ของ Windows จะป้องกันไม่ให้ระบบหรือโปรแกรมอื่น ๆ หยุดทำงานและ Wallpaper Engine ก็ใช้วิธีการออกแบบนี้เช่นกัน

## ค้นหาสาเหตุความผิดพลาดของระบบ
ในการใช้ Wallpaper Engine ต้องมีสิ่งเหล่านี้ในเครื่อง: การเร่ง 3D การเร่งวิดีโอ และเสียง คุณสามารถลองใช้วอลเปเปอร์ประเภทต่าง ๆ เพื่อค้นหาสิ่งผิดปกติกับคอมพิวเตอร์ของคุณ ตัวอย่างเช่น หากคุณมีปัญหากับวอลเปเปอร์ประเภท 'วิดีโอ' ปัญหาอาจมาจากฮาร์ดแวร์ถอดรหัสวิดีโอในการ์ดจอของคุณ Windows จะไม่ใช้งานฮาร์ดแวร์นี้เพียงอย่างเดียวและเกมส่วนใหญ่ก็ไม่ได้ใช้งาน ดังนั้นคุณจะไม่ประสบปัญหาในเกม

If it's a blue screen you are getting, web-search the error code. There will be a lot of results on the web that may help since it is a global system problem.

Any kind of overlay and recording program can cause problems, that includes Geforce Experience, try removing all of that.

Try the scan tool which will check if any well known and confirmed conflicting application is running: [Click here](/debug/scantool.html).