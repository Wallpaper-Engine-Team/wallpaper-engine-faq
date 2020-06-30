# เปิดและปิดเสียงตัวเองเป็นระยะ

Windows ไม่สามารถแยกความแตกต่างระหว่างการบันทึกเสียงและระดับการเล่นเสียงได้ ดังนั้น Windows จะแจ้งให้ Wallpaper Engine ทราบว่าโปรแกรมอื่นกำลังส่งเสียงในขณะที่กำลังบันทึกเสียงคอมพิวเตอร์ของคุณ

ตรวจสอบแท็บ "ประสิทธิภาพการทำงาน" ในส่วนของการตั้งค่า Wallpaper Engine หากคุณมีตัวเลือก *"แอพพลิเคชันอื่นกำลังเล่นไฟล์เสียง"* ที่ตั้งค่าเป็น *"ปิดเสียง"* แล้วคุณสังเกตเห็นว่าเสียงจาก Wallpaper Engine เปิดและปิดตัวเองเป็นระยะ แสดงว่าคุณอาจมีโปรแกรมบันทึกที่กำลังบันทึกหน้าจอและเสียงของคุณในพื้นหลัง

ในการแก้ไขปัญหาดังกล่าว ให้ดำเนินการหนึ่งในสามสิ่งต่อไปนี้:

* ปิดโปรแกรมบันทึกบนเดสก์ทอปของคุณหรือกำหนดค่าใหม่เพื่อไม่ให้มีการบันทึก Wallpaper Engine โดยไม่ได้ตั้งใจ
    * ผู้ใช้หลายคนพบปัญหานี้จาก **Nvidia Share / Nvidia GameStream / Nvidia ShadowPlay** ซึ่งคุณสามารถปิดได้ในการตั้งค่า **Nvidia GeForce Experience** สำหรับผู้ใช้การ์ดจอ AMD **AMD ReLive** อาจทำให้เกิดปัญหาเหล่านี้และเป็นส่วนหนึ่งของไดรเวอร์การ์ดจอของ AMD หากคุณไม่แน่ใจว่าโปรแกรมใดที่อาจบันทึกเดสก์ทอปของคุณ โปรดลองตรวจสอบสิ่งนี้ก่อน
    * หากคุณไม่ทราบว่าแอพพลิเคชันใดที่ทำให้เกิดปัญหานี้ ให้ตรวจสอบตัวปรับแต่งเสียง Windows ของคุณและดูว่าแอพพลิเคชันใดกำลังเข้าถึงเสียงของคุณอยู่ วิธีนี้อาจช่วยได้ อีกวิธีหนึ่งคือการปิดโปรแกรมให้มากที่สุดเท่าที่จะทำได้ และจำกัดจำนวนไฟล์ให้เหลือไฟล์ .exe บางตัวจากรายการในตัวจัดการงาน (Task Manager) ของ Windows
* หากคุณต้องการบันทึกเสียงพื้นหลังหรือหากไม่สามารถหาวิธีปิดได้ คุณสามารถตั้งค่า *กฎแอพพลิเคชัน* ในแท็บ "ประสิทธิภาพการทำงาน" ในส่วนการตั้งค่า Wallpaper Engine ตั้งค่า "เงื่อนไข" เป็น "กำลังเล่นไฟล์เสียง" และ "การเล่นวอลเปเปอร์" เป็น "ทำงานต่อไป":

![Application Rules can be found in the "Performance" tab of the Wallpaper Engine settings](./applicationrule.png)

Replace some.exe with .exe files you can find in the task manager until you have narrowed it down to the responsible .exe.

* Lastly, you can also change the option 'other application playing audio' to 'keep running'. However, this means Wallpaper Engine will not automatically mute audio output from wallpapers when you listen to music or watch videos that are not full-screen.
