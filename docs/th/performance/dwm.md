# ประสิทธิภาพ GPU แบบในตัวและแบบเฉพาะในเดสก์ทอปทำงานได้ไม่ดี (dwm.exe)

แม้ว่าจะมีการติดตั้ง GPU เฉพาะไว้ แต่หากคุณเปิดใช้งาน GPU แบบในตัวใน BIOS ของคอมพิวเตอร์เดสก์ทอป คุณอาจประสบปัญหากับประสิทธิภาพที่ไม่ดีและ *dwm.exe* ใช้งาน CPU สูง หากเป็นไปได้อย่าเปิดใช้งาน GPU ในตัวและเสียบจอแสดงผลเข้ากับ GPU เฉพาะของคุณ การใช้โซลูชันการ์ดจออิสระทั้งสองตัวในเวลาเดียวกันจะทำลายการเร่งความเร็วของฮาร์ดแวร์ในตัวจัดการหน้าต่างเดสก์ทอป โปรดตรวจสอบให้แน่ใจว่าคุณได้เสียบจอแสดงผลทั้งหมดเข้ากับการ์ดจอหลัก นี่ไม่ใช่ข้อผิดพลาดหรือปัญหาในโปรแกรม Wallpaper Engine แต่เป็นปัญหาที่เกิดจากการกำหนดค่าฮาร์ดแวร์โดยจอแสดงผลทั้งหมดไม่ได้เชื่อมต่อกับการ์ดจอหลัก

หากคุณไม่มีเทคโนโลยี Nvidia Optimus หรือเทคโนโลยีที่คล้ายคลึงกัน Windows จะต้องคัดลอกรูปภาพวอลเปเปอร์จาก GPU หนึ่งไปยังอีก GPU ซึ่งการดำเนินการนี้ใช้เวลามาก ในความเป็นจริงการดำเนินการแบ่งปันใด ๆ ระหว่าง GPU ทั้งสองจะได้รับผลกระทบซึ่งเหมือนกับการย้ายหน้าต่างเกมระหว่างจอแสดงสองจอ

ปัญหานี้ไม่เกี่ยวข้องกับฮาร์ดแวร์ที่สร้างขึ้นเป็นพิเศษสำหรับการตั้งค่าหลาย GPU เช่นแล็ปท็อป Nvidia Optimus หรือ SLI/Crossfire ซึ่งมีวิธีแก้ไขปัญหาทางกายภาพที่ช่วยให้ทำงานได้อย่างถูกต้อง

## ประสิทธิภาพการทำงานต่ำเมื่อใช้ GPU สำรองบนเดสก์ทอปโดยไม่มี Nvidia SLI / Nvidia Optimus / AMD CrossFire

ผู้ใช้หลายคนเชื่อว่าการเปลี่ยน Wallpaper Engine ไปใช้กับ GPU สำรองจะปรับปรุงประสิทธิภาพของระบบโดยรวม อย่างไรก็ตามนี่เป็นเพียงความเข้าใจผิดและจะลดประสิทธิภาพโดยรวมของระบบ

วอลเปเปอร์ที่สร้างโดย Wallpaper Engine เป็นส่วนหนึ่งของเดสก์ทอปซึ่งหมายความว่าเป็นส่วนหนึ่งของกระบวนการ Windows Explorer ดังนั้น Wallpaper Engine ต้องใช้ GPU เดียวกันกับ Windows Explorer If this is not the case, then Windows has to force both GPUs to cooperate in order to render an image for your monitors. This has to be done by the processor which ultimately means the overall computer performance degrades significantly and often takes much more performance than the wallpapers themselves. Some proper multi-GPU technologies (Nvidia SLI, Nvidia Optimus, AMD CrossFire) solve this problem on a hardware-level but this is not applicable in cases where you use an Nvidia GPU and an Intel on-board graphics card, for example.

You can still change the GPU of your choice in your graphics card drivers or in your overall system settings, however we strongly advise against doing this as the outcome is not an increase in system performance.