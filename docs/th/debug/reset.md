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

หากคุณได้ติดตั้ง Wallpaper Engine ในไดเร็กทอรีอื่น ให้หาไดเร็กทอรี `wallpaper_engine` จากที่นั่น Make sure the folder is entirely deleted to clear any invisible antivirus file locks or corrupted files.

You can now reinstall Wallpaper Engine. If you want to start from a clean slate, please read the next section on how to fully reset all your wallpaper subscriptions - this is not necessary in most cases.

## Resetting all Steam Workshop Subscriptions

If you are experiencing issues related to wallpaper downloads by Steam, you can try to do a full reset of your Steam Workshop subscriptions. In rare cases, this can help with broken Workshop subscriptions that are not visible in the app. If you notice that Steam keeps redownloading all your wallpapers or that Steam keeps downloading wallpapers that have been deleted from the Steam Workshop in the past, you can attempt a full reset.

โปรดทำตามขั้นตอนเหล่านี้:

1. ปิด Steam **Optional:** Uninstall Wallpaper Engine first.
2. Open the Wallpaper Engine Steam Workshop website and log in to your Steam account:

* [Steam Workshop for Wallpaper Engine](https://steamcommunity.com/app/431960/workshop/)

3. On the right-hand side, hover over **Your files** and then **Subscribed Items**.
4. You will be presented a page with your subscriptions. Click the **Unsubscribe From All** button on the right-hand side to clear all your Workshop subscription (including any hidden broken subscriptions).
5. **Restart Steam**, your subscriptions are now reset.
