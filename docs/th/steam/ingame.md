# Steam ขึ้นว่า "อยู่ในเกม" เสมอ
โปรแกรม Wallpaper Engine ควรแสดงอยู่บน Steam ในขณะที่เข้าถึงคุณสมบัติ Workshop เท่านั้น (การดำเนินการนี้บังคับใช้โดย Valve / Steam เมื่อเปิดเบราเซอร์หรือตัวแก้ไข) อย่างไรก็ตามหาก Wallpaper Engine ยังคงปรากฏขึ้นหลังจากปิดหน้าต่างทั้งหมดแล้ว อาจเป็นเพราะปิดหน้าต่างไม่เรียบร้อย (มองหา ui32.exe ในตัวจัดการงาน) หรือคุณอาจพบข้อผิดพลาดของ Steam ที่รู้จักกันดี คุณสามารถหลีกเลี่ยงได้ด้วยวิธีการต่อไปนี้

หากคุณพบปัญหานี้บ่อยครั้ง คุณสามารถหลีกเลี่ยงปัญหานี้ได้โดยไม่เปิดตัวโปรแกรมผ่าน Steam แต่ให้เริ่มโปรแกรมโดยตรงจากไดเรกทอรีการติดตั้ง wallpaper_engine โดยค่าเริ่มต้นคือ `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\wallpaper32.exe` หาก Wallpaper Engine กำลังทำงานอยู่ โปรดปิดลงอย่างสมบูรณ์จากนั้นเปิดใช้งานโปรแกรมอีกครั้งทางไดเรกทอรีนี้ นอกจากนี้คุณอาจต้องปิดและเปิดการเริ่มต้นอัตโนมัติในการตั้งค่า Wallpaper Engine อีกครั้ง

ทุกครั้งที่ Steam เชื่อมต่ออินเทอร์เน็ตใหม่เนื่องจากคุณปิดและเปิดการเชื่อมต่ออินเทอร์เน็ต Steam อาจแสดงสถานะ "อยู่ในเกม" ซึ่งอาจทำให้เกิดปัญหาเช่นนั้น โปรดเริ่มโปรแกรมโดยตรงหรือใช้การเริ่มต้นอัตโนมัติแทน Steam สิ่งนี้อาจป้องกันไม่ให้ปัญหาเกิดขึ้นกับคุณ

## ปิดการใช้งานเวิร์กชอป / Steam Integration โดยสมบูรณ์
คุณสามารถปิดการใช้งาน Steam Integration ทั้งหมดโดยการสร้างไฟล์ข้อความเปล่าชื่อ `nosteam.txt` และวางลงในไดเรกทอรี `wallpaper_engine/bin` (พาธเต็มในค่าเริ่มต้นคือ `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\bin`) คุณจะไม่สามารถดาวน์โหลด อัพเดตหรืออัปโหลดวอลเปเปอร์ใด ๆ ได้หากปิดใช้งาน แต่คุณยังสามารถเข้าถึงทุกสิ่งที่เคยดาวน์โหลดมาก่อนหน้านี้ได้ 