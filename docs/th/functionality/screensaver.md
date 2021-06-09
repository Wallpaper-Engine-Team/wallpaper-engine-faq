# สกรีนเซฟเวอร์กับ Wallpaper Engine

Wallpaper Engine ให้คุณใช้วอลเปเปอร์เป็นสกรีนเซฟเวอร์ได้ ปกติแล้วสกรีนเซฟเวอร์มีไว้เพื่อป้องกันไม่ให้รูปภาพบนหน้าจอเกิดการเบิร์นอินอย่างถาวร อย่างไรก็ตาม เทคโนโลยีการแสดงผลที่ทันสมัยส่วนใหญ่ไม่ทำให้เกิดการเบิร์นอินอีกต่อไป คุณจึงสามารถใช้วอลเปเปอร์ทุกประเภทเป็นสกรีนเซฟเวอร์ได้อย่างปลอดภัยและสวยงาม หากคุณใช้เทคโนโลยีหน้าจอแบบ CRT, Plasma, OLED หรือประเภทอื่นที่เสี่ยงต่อการเบิร์นอิน เราขอแนะนำให้ใช้วอลเปเปอร์แบบเพลย์ลิสต์หรือวอลเปเปอร์ที่มีการเคลื่อนไหวปกติเป็นสกรีนเซฟเวอร์

## การตั้งค่าสกรีนเซฟเวอร์เริ่มต้น

ในการเริ่มต้นใช้งาน Wallpaper Engine เป็นสกรีนเซฟเวอร์ ให้วางเมาส์เหนือแท็บ **ติดตั้งแล้ว** ในหน้าต่าง Wallpaper Engine แล้วเลือก **ปรับแต่งสกรีนเซฟเวอร์** Wallpaper Engine จะตรวจสอบว่าคุณได้ติดตั้งสกรีนเซฟเวอร์ Wallpaper Engine สำหรับ Windows แล้วหรือยัง ระบบจะขอให้คุณติดตั้งสกรีนเซฟเวอร์หากคุณยังไม่ได้ทำการติดตั้ง โปรดตรวจสอบให้แน่ใจว่าบัญชีผู้ใช้ Windows ของคุณมีสิทธิ์ในฐานะผู้ดูแลระบบ และไม่มีโปรแกรมป้องกันไวรัสที่ปิดกั้น Wallpaper Engine จากการติดตั้งสกรีนเซฟเวอร์

เมื่อติดตั้งเบื้องต้นแล้ว การตั้งค่าสกรีนเซฟเวอร์ Windows จะเปิดขึ้นโดยอัตโนมัติ หรือคุณสามารถเปิดการตั้งค่าด้วยตนเองโดยใช้ปุ่ม **การตั้งค่า & แสดงตัวอย่าง** หรือเข้าถึงการตั้งค่าสกรีนเซฟเวอร์ผ่าน Windows ได้โดยตรง

## การกำหนดค่าสกรีนเซฟเวอร์

### การกำหนดค่า Windows

คุณต้องเลือก Wallpaper Engine เป็นสกรีนเซฟเวอร์ที่ใช้งานอยู่ใน **การตั้งค่า Windows** เพื่อให้สกรีนเซฟเวอร์ Wallpaper Engine ทำงาน คุณสามารถเปิดการตั้งค่าสกรีนเซฟเวอร์ของ Windows ผ่านแผงควบคุมของ Windows หรือโดยคลิกที่ **การตั้งค่า & แสดงตัวอย่าง** ขณะอยู่ในโหมดสกรีนเซฟเวอร์ใน Wallpaper Engine ดูขั้นตอนที่จำเป็นได้จากวิดีโอด้านล่าง:

<video width="100%" controls autoplay loop>
  <source src="/videos/screensaver_setup.mp4" type="video/mp4">
  เบราว์เซอร์ของคุณไม่รองรับแท็กวิดีโอ
</video>

ในการตั้งค่า Windows คุณสามารถกำหนดเวลาก่อนแสดงสกรีนเซฟเวอร์ และกำหนดว่าต้องการให้แสดงหน้าจอล็อกของ Windows หรือไม่เมื่อกลับมาใช้คอมพิวเตอร์ Windows เป็นผู้ดูแลการตั้งค่าทั้งหมด Wallpaper Engine ไม่ได้ควบคุมระยะเวลาของหน้าจอหรืออื่น ๆ ที่คล้ายคลึงกัน

### การกำหนดค่า Wallpaper Engine

เมื่อคุณตั้งค่าสกรีนเซฟเวอร์ใน Windows แล้ว คุณสามารถเริ่มกำหนดค่าสกรีนเซฟเวอร์ Wallpaper Engine ได้ทันที วางเมาส์เหนือแท็บ **ติดตั้งแล้ว** ใน Wallpaper Engine แล้วเลือก **ปรับแต่งสกรีนเซฟเวอร์** Wallpaper Engine จะแสดงตัวอย่างสกรีนเซฟเวอร์แทนที่วอลเปเปอร์ และจะกลับสู่การกำหนดค่าวอลเปเปอร์เมื่อคุณออกจากโหมดสกรีนเซฟเวอร์

ในสถานะเริ่มต้น Wallpaper Engine จะใช้การตั้งค่าพื้นฐานที่สุด โดยจะใช้สกรีนเซฟเวอร์แบบเดียวกับวอลเปเปอร์ที่กำลังทำงานอยู่ คุณสามารถเปลี่ยนได้โดยการเปลี่ยนตัวเลือก **สกรีนเซฟเวอร์** เป็น **ปรับแต่งแยกต่างหาก** ที่ด้านบน เมื่อเปิดใช้งานตัวเลือกดังกล่าวแล้ว คุณจะสามารถเลือกวอลเปเปอร์ที่จะใช้ในแต่ละหน้าจอเป็นสกรีนเซฟเวอร์ได้ หรือแม้แต่ตั้งค่าสกรีนเซฟเวอร์โดยใช้โปรไฟล์การแสดงผล (Display Profile) หรือเพลย์ลิสต์ที่ต่างไปจากเดิมโดยสิ้นเชิง You can always return to the wallpaper configuration by clicking on the red **Quit** button in the upper left corner.

## การแก้ปัญหาสกรีนเซฟเวอร์

The Wallpaper Engine screensaver is activated through Windows itself, if the screensaver is not working correctly, please double-check to see if any of the default Windows screensavers work correctly for you. Check the Windows screensaver settings and your Windows energy settings to make sure that your screensaver is configured with the correct timeout that you expect and that Wallpaper Engine is set as your active screensaver.

The screensaver will be installed in `C:\Windows\System32\wpxscreensaver64.scr`, make sure no antivirus app is deleting this file by mistake or preventing it from being installed. You can also manually uninstall the screensaver by deleting that specific file, but be sure to not delete any other important Windows files in the `System32` directory when doing so.