# ประสิทธิภาพ GPU แบบในตัวและแบบเฉพาะในเดสก์ทอปทำงานได้ไม่ดี (dwm.exe)

แม้ว่าจะมีการติดตั้ง GPU เฉพาะไว้ แต่หากคุณเปิดใช้งาน GPU แบบในตัวใน BIOS ของคอมพิวเตอร์เดสก์ทอป คุณอาจประสบปัญหากับประสิทธิภาพที่ไม่ดีและ *dwm.exe* ใช้งาน CPU สูง หากเป็นไปได้อย่าเปิดใช้งาน GPU ในตัวและเสียบจอแสดงผลเข้ากับ GPU เฉพาะของคุณ การใช้โซลูชันการ์ดจออิสระทั้งสองตัวในเวลาเดียวกันจะทำลายการเร่งความเร็วของฮาร์ดแวร์ในตัวจัดการหน้าต่างเดสก์ทอป โปรดตรวจสอบให้แน่ใจว่าคุณได้เสียบจอแสดงผลทั้งหมดเข้ากับการ์ดจอหลัก นี่ไม่ใช่ข้อผิดพลาดหรือปัญหาในโปรแกรม Wallpaper Engine แต่เป็นปัญหาที่เกิดจากการกำหนดค่าฮาร์ดแวร์โดยจอแสดงผลทั้งหมดไม่ได้เชื่อมต่อกับการ์ดจอหลัก

หากคุณไม่มีเทคโนโลยี Nvidia Optimus หรือเทคโนโลยีที่คล้ายคลึงกัน Windows จะต้องคัดลอกรูปภาพวอลเปเปอร์จาก GPU หนึ่งไปยังอีก GPU ซึ่งการดำเนินการนี้ใช้เวลามาก ในความเป็นจริงการดำเนินการแบ่งปันใด ๆ ระหว่าง GPU ทั้งสองจะได้รับผลกระทบซึ่งเหมือนกับการย้ายหน้าต่างเกมระหว่างจอแสดงสองจอ

This is unrelated to hardware built for multi-GPU setups like Nvidia Optimus laptops or SLI/Crossfire. They have a physical solution to make this work correctly.

## Poor Performance using Secondary GPU on Desktop without Nvidia SLI / Nvidia Optimus / AMD CrossFire

Many users assume that switching Wallpaper Engine to a secondary GPU will increase the overall system performance. However, this is merely a common misconception and the overall system performance will actually degrade.

Wallpaper Engine creates wallpapers which are part of the desktop which means they are part of the Windows Explorer process. Therefore, Wallpaper Engine must use the same GPU as Windows Explorer. If this is not the case, then Windows has to force both GPUs to cooperate in order to render an image for your monitors. This has to be done by the processor which ultimately means the overall computer performance degrades significantly and often takes much more performance than the wallpapers themselves. Some proper multi-GPU technologies (Nvidia SLI, Nvidia Optimus, AMD CrossFire) solve this problem on a hardware-level but this is not applicable in cases where you use an Nvidia GPU and an Intel on-board graphics card, for example.

You can still change the GPU of your choice in your graphics card drivers or in your overall system settings, however we strongly advise against doing this as the outcome is not an increase in system performance.