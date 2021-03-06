---
tags:
  - แอพพลิเคชัน
  - กฎ
  - ข้อยกเว้น
  - รายการที่ปลอดภัย
  - รายการที่ไม่ยอมรับ
  - ล่าช้า
  - ล้าหลัง
  - เกม
  - ประสิทธิภาพการทำงาน
  - FPS
  - ข้อผิดพลาด
  - เสียง
  - สัญญาณเสียง
  - ไม่ต่อเนื่อง
---

# แก้ไขปัญหาเฉพาะบางแอพพลิเคชันหรือบางเกม

หากคุณพบปัญหาเฉพาะบางแอพพลิเคชันหรือบางเกม คุณสามารถกำหนดค่า Wallpaper Engine ให้ทำงานได้อย่างเหมาะสม เช่น เมื่อคุณตรวจพบว่าแอพพลิเคชันที่คุณกำลังประสบปัญหานั้นเริ่มการทำงานหรือกำลังเล่นไฟล์เสียง

## การตั้งค่ากฎของแอพพลิเคชัน

ในส่วนการตั้งค่า Wallpaper Engine ที่แท็บ *ประสิทธิภาพการทำงาน* ให้คลิกที่ปุ่ม *แก้ไข* ถัดจากสัญลักษณ์ *กฎของแอพพลิเคชัน* จะแสดงภาพรวมของกฎที่กำหนดเองทั้งหมดที่คุณได้ตั้งไว้ เมื่อคลิกที่ *สร้างกฎใหม่* คุณจะสามารถตั้งค่าลักษณะพิเศษของ Wallpaper Engine โดยเจาะจงแอพพลิเคชันได้

![ภาพรวมกฎของแอพพลิเคชัน](./applicationrule.gif)

รายการไฟล์ .exe ที่ทำงานอยู่ทั้งหมดในระบบจะปรากฏขึ้น คุณอาจเลือก .exe จากรายการหรือพิมพ์ชื่อของ .exe ที่เป็นปัญหา คุณสามารถใช้สองตัวเลือกอื่นเพื่อกำหนดค่าเงื่อนไขและลักษณะการทำงาน สำหรับข้อมูลเพิ่มเติมและตัวอย่างที่เฉพาะเจาะจงสามารถดูได้ที่ด้านล่าง

::: tip
Wallpaper Engine ให้ความสำคัญกับชื่อ .exe ที่ถูกต้องเท่านั้น ตำแหน่งไม่ใช่เรื่องสำคัญ ดังนั้นคุณสามารถพิมพ์ .exe ใดก็ได้ลงในช่อง *ชื่อแอพพลิเคชัน* เพียงตรวจสอบให้แน่ใจว่าชื่อ .exe ตรงกันทุกตัวอักษร รวมถึงตัวพิมพ์ใหญ่และตัวพิมพ์เล็ก
:::

### แก้ไขปัญหาประสิทธิภาพการทำงานของแอพพลิเคชันหรือเกม

เลือก .exe ของโปรแกรมที่คุณต้องการให้มีกฎพิเศษจากรายการ หรือพิมพ์ชื่อ .exe ลงในช่อง **ชื่อแอพพลิเคชัน** จากนั้นจึงตั้งค่า **เงื่อนไข** เป็น **กำลังทำงาน** และจาก **การเล่นวอลเปเปอร์** เป็น **หยุด (ลดการใช้หน่วยความจำ)** ซึ่งหมายความว่า Wallpaper Engine จะลบวอลเปเปอร์ทั้งหมดในหน่วยความจำเมื่อมีการเปิดแอพพลิเคชันหรือเกม ดังนั้นจึงแก้ปัญหาความเข้ากันได้ทั้งหมด

### แก้ไขเสียงไม่ต่อเนื่องด้วยเครื่องมือบันทึกพื้นหลัง

เลือก .exe ของโปรแกรมที่คุณต้องการให้มีกฎพิเศษจากรายการ หรือพิมพ์ชื่อ .exe ลงในช่อง **ชื่อแอพพลิเคชัน** จากนั้นจึงตั้งค่า **เงื่อนไข** เป็น **กำลังเล่นไฟล์เสียง** และจาก **การเล่นวอลเปเปอร์** เป็น **ทำงานต่อไป** ซึ่งหมายความว่า Wallpaper Engine จะไม่ปิดเสียงเมื่อแอพพลิเคชันที่เกี่ยวข้องเล่นหรือบันทึกเสียง Windows ไม่สามารถแยกความแตกต่างระหว่างการเล่นไฟล์เสียงและการบันทึกเสียงได้ ดังนั้นหากคุณกำลังบันทึกเสียง Wallpaper Engine จะปิดและเปิดเสียงตัวเองอย่างต่อเนื่อง สิ่งนี้อาจเกิดขึ้นได้กับแอพพลิเคชันเพื่อสตรีมเกมจำนวนมากอย่างไม่ได้ตั้งใจโดยที่คุณไม่รู้ตัว

### ลักษณะอื่น ๆ

ตรวจสอบเงื่อนไขที่เป็นไปได้ทั้งหมดและตัวเลือกการเล่นวอลเปเปอร์เพื่อเรียนรู้เกี่ยวกับกฎของแอพพลิเคชันเพิ่มเติม คุณยังสามารถกำหนดค่า Wallpaper Engine ให้ปิดเสียงหรือหยุดชั่วคราวเมื่อคุณเปิดใช้งานแอพพลิเคชันบางตัว

::: tip
คุณสามารถเปลี่ยนการตั้งค่าเหล่านี้กับแอพพลิเคชันทั้งหมดในแท็บ **ประสิทธิภาพการทำงาน** ในส่วนการตั้งค่า Wallpaper Engine หากคุณพบปัญหาประสิทธิภาพการทำงานในหลาย ๆ เกม คุณอาจต้องเปลี่ยนตัวเลือก **แอพพลิเคชันอื่นทำงานแบบเต็มหน้าจอ** เป็น **หยุด (ลดการใช้หน่วยความจำ)** เพื่อให้ Wallpaper Engine ปิดตัวเองเมื่อคุณเปิดเกมหรือแอพพลิเคชันอื่นแบบเต็มหน้าจอ
:::
