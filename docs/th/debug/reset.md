# การรีเซ็ต Wallpaper Engine โดยสมบูรณ์

คุณอาจต้องรีเซ็ตการติดตั้ง Wallpaper Engine โดยสมบูรณ์หากพบปัญหาทางเทคนิคกับ Wallpaper Engine โปรดทำตามคำแนะนำนี้เพื่อรีเซ็ต Wallpaper Engine โดยสมบูรณ์ รวมถึงการสมัครรับข้อมูลวอลเปเปอร์ที่เสียหาย

::: danger
โปรดอ่านตรงนี้ก่อนหากคุณใช้แอพพลิเคชันป้องกันไวรัส (ยกเว้น Microsoft Defender)

ปัญหาส่วนใหญ่ที่เราพบเกิดจากการที่แอพพลิเคชันป้องกันไวรัสปิดกั้น Wallpaper Engine หรือ Steam โดยไม่ได้ตั้งใจ แอพพลิเคชันป้องกันไวรัสมักเป็นสาเหตุให้เกิด:

* Wallpaper Engine หยุดทำงาน
* ส่วนต่อประสานกับผู้ใช้ Wallpaper Engine เสียหายหรือว่างเปล่า
* Wallpaper Engine ไม่สามารถเริ่มทำงานได้โดยไม่แจ้งข้อผิดพลาด
* Wallpaper Engine ไม่สามารถติดตั้งหรืออัปเดตตัวเองได้
* ปัญหาอื่น ๆ ที่เกิดจากไฟล์เสียหายหรือไม่สามารถเข้าถึงได้

**หากคุณกำลังใช้แอปป้องกันไวรัส โปรดตรวจสอบให้แน่ใจว่าแอปนั้นละเว้นไดเรกทอรีการติดตั้ง `wallpaper_engine` ก่อนจะดำเนินการตามขั้นตอนที่ระบุไว้ในหน้านี้ ตรวจสอบการตั้งค่าโปรแกรมป้องกันไวรัสของคุณเพื่อดูวิธีละเว้นโฟลเดอร์ทั้งหมด**

แอปป้องกันไวรัสส่วนใหญ่สามารถปิดกั้นไฟล์ Wallpaper Engine ได้โดยแจ้งให้คุณทราบ และไฟล์ Wallpaper Engine บางไฟล์จะถูกปิดกั้นอย่างถาวร
:::

## การถอนการติดตั้ง Wallpaper Engine โดยสมบูรณ์

การถอนการติดตั้ง Wallpaper Engine โดยสมบูรณ์เพื่อล้างไฟล์ที่เสียหาย:

1. หากคุณได้เปิดใช้งานฟังก์ชันการเริ่มต้นอัตโนมัติ: ให้เปิดการตั้งค่า Wallpaper Engine แล้วปิดการเริ่มต้นอัตโนมัติที่ด้านบนของแท็บ **ทั่วไป** ในการตั้งค่า Wallpaper Engine
2. เปิด Steam และคลิกขวาที่ Wallpaper Engine จากนั้นเลือกคลิกที่ **จัดการ** ตามด้วย **ถอนการติดตั้ง**
3. ไปที่ไดเร็กทอรีการติดตั้ง Wallpaper Engine และลบไดเร็กทอรี `wallpaper_engine` ที่เหลือทั้งหมด ตามค่าเริ่มต้นจะอยู่ที่นี่:

* `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine`

หากคุณได้ติดตั้ง Wallpaper Engine ในไดเร็กทอรีอื่น ให้หาไดเร็กทอรี `wallpaper_engine` จากที่นั่น ตรวจสอบให้แน่ใจว่าโฟลเดอร์นั้นถูกลบโดยสมบูรณ์เพื่อลบการล็อกไฟล์ป้องกันไวรัสที่มองไม่เห็นหรือไฟล์ที่เสียหาย

ตอนนี้คุณสามารถติดตั้ง Wallpaper Engine ใหม่ได้แล้ว หากคุณต้องการเริ่มต้นใหม่ทั้งหมด โปรดอ่านหัวข้อถัดไปซึ่งจะอธิบายวิธีรีเซ็ตการสมัครรับข้อมูลวอลเปเปอร์ทั้งหมดของคุณโดยสมบูรณ์ (ไม่จำเป็นสำหรับกรณีส่วนใหญ่)

## การรีเซ็ตการสมัครรับข้อมูล Steam Workshop ทั้งหมด

หากคุณพบปัญหาการดาวน์โหลดวอลเปเปอร์โดย Steam คุณอาจลองรีเซ็ตการสมัครรับข้อมูล Steam Workshop ของคุณโดยสมบูรณ์ วิธีนี้อาจช่วยเรื่องการสมัครรับข้อมูลเวิร์กชอปที่เสียหายและไม่สามารถมองเห็นในแอปได้แม้จะไม่บ่อยนัก หากคุณสังเกตเห็นว่า Steam ดาวน์โหลดวอลเปเปอร์ทั้งหมดซ้ำ หรือ Steam ยังคงดาวน์โหลดวอลเปเปอร์ที่เคยถูกลบออกจาก Steam Workshop คุณสามารถลองรีเซ็ตโดยสมบูรณ์ได้

โปรดทำตามขั้นตอนเหล่านี้:

1. ปิด Steam **ตัวเลือก:** ถอนการติดตั้ง Wallpaper Engine ก่อน
2. Open the Wallpaper Engine Steam Workshop website and log in to your Steam account:

* [Steam Workshop for Wallpaper Engine](https://steamcommunity.com/app/431960/workshop/)

3. On the right-hand side, hover over **Your files** and then **Subscribed Items**.
4. You will be presented a page with your subscriptions. Click the **Unsubscribe From All** button on the right-hand side to clear all your Workshop subscription (including any hidden broken subscriptions).
5. **Restart Steam**, your subscriptions are now reset.
