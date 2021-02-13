# การสำรองข้อมูล Steam Workshop

หากคุณลบวอลเปเปอร์ออกจาก Steam ไม่ว่าด้วยเหตุผลใดก็ตาม Steam จะลบวอลเปเปอร์เหล่านั้นออกจากคอมพิวเตอร์ของคุณด้วย Wallpaper Engine ไม่สามารถป้องกันสิ่งนี้ได้ แต่หากคุณกังวลคุณสามารถสำรองข้อมูลวอลเปเปอร์ของคุณได้

ผู้ใช้หลายคนรายงานว่า Steam จะสุ่มดาวน์โหลดไฟล์เวิร์กชอปทั้งหมดอีกครั้งซึ่งอาจสร้างความรำคาญหากคุณมีข้อมูลปริมาณมาก หากเกิดเหตุการณ์นี้หลายครั้ง การสร้างการสำรองข้อมูลและการยกเลิกการเชื่อมต่อทั้งหมดกับ Steam สามารถหลีกเลี่ยงได้

# การสร้างการสำรองข้อมูล

คำแนะนำต่อไปนี้คาดการณ์ว่าคุณได้ติดตั้ง Steam และ Wallpaper Engine ใน "C:\Program Files (x86)\Steam\" หากคุณติดตั้งในไดเรกทอรีอื่น ๆ โปรดตรวจสอบที่ตั้งเหล่านี้

::: tip
**431960** is the Steam ID of Wallpaper Engine, Steam uses this directory for all Wallpaper Engine downloads.
:::

1. Locate the folder in which Steam stores your wallpapers, by default it is in `C:\Program Files (x86)\Steam\steamapps\workshop\content\431960`
2. Copy the folder 431960 to Wallpaper Engine's installation path here: `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\projects\431960`
3. **เปลี่ยนชื่อ** โฟลเดอร์ `431960` เป็น `backup` เพื่อให้พาธที่สมบูรณ์มีลักษณะดังนี้: `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\projects\backup`
4. ตอนนี้ไดเรกทอรี `backup` จะมีวอลเปเปอร์ทั้งหมดที่คุณดาวน์โหลดมาก่อนหน้านี้ และวอลเปเปอร์แต่ละรายการจะอยู่ในไดเรกทอรีย่อยของตัวเอง (ตัวเลขแสดงถึงรหัส Steam Workshop ของวอลเปเปอร์)
5. คุณควรเห็นวอลเปเปอร์สำรองหลังจากรีสตาร์ทเบราเซอร์วอลเปเปอร์ ตอนนี้คุณสามารถยกเลิกสมัครรับข้อมูลวอลเปเปอร์ Steam ที่ซ้ำกันและใช้สำเนาวอลเปเปอร์ส่วนตัวของคุณเท่านั้น

::: warning
Do **not** manually delete the Steam Workshop folder `C:\Program Files (x86)\Steam\steamapps\workshop\content\431960`. This will cause your Steam to be confused and re-download all wallpapers. Simply unsubscribe from your wallpapers and let Steam delete the duplicate files itself.
:::