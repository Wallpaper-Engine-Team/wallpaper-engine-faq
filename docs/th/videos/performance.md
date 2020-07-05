# วิดีโอค้าง / กระตุก / ประสิทธิภาพการทำงานไม่ดี

สาเหตุของปัญหานี้อาจเป็นเพราะฮาร์ดแวร์ไม่มีประสิทธิภาพเพียงพอที่จะแสดงบางวิดีโออย่างถูกต้อง วิดีโอวอลเปเปอร์กับเครื่องเล่นวิดีโอมาตรฐานนั้นไม่สามารถนำมาเปรียบเทียบกันได้ วิดีโอวอลเปเปอร์จะต้องมีไอคอนและอาจขยายไปหลายหน้าจอ นอกจากนี้ยังใช้ตัวถอดรหัสวิดีโอของ GPU ตามค่าเริ่มต้นเพื่อลดการใช้งาน CPU ให้น้อยที่สุด

## Background recording hooks
It could also come from any kind of driver features to record applications like ReLive, Shadow Play/Nvidia Share or Windows GameDVR. Try disabling them and see if it makes a difference, then exclude Wallpaper Engine from them. Also make sure no other recording/overlay programs load themselves into Wallpaper Engine and slow down rendering.

You can try to use our scan tool to determine if any programs with know recording hooks are installed but it does not catch everything, especially common recording hooks like the ones coming with Nvidia GeForce Experience:

* [เครื่องมือสแกน Wallpaper Engine](/debug/scantool.html)

## Dynamic Super Resolution (DSR) / การปรับสเกล GPU
การเจาะเข้าไดรเวอร์โดยการปรับสเกล GPU/DSR อาจทำให้เกิดปัญหาได้เช่นกัน โปรดลองปิดการใช้งานเฉพาะสำหรับ Wallpaper Engine และดูว่าช่วยแก้ปัญหาได้หรือไม่

## dwm.exe มีประสิทธิภาพไม่ดีบนระบบที่มี GPU หลายตัว / หลายหน้าจอ
แม้ว่าจะมีการติดตั้ง GPU เฉพาะไว้ แต่หากคุณเปิดใช้งานการ์ดจอแบบในตัวใน BIOS ของคอมพิวเตอร์เดสก์ทอป คุณอาจประสบปัญหากับประสิทธิภาพที่ไม่ดีและ DWM.exe ใช้งาน CPU สูง หากเป็นไปได้อย่าเปิดใช้งาน GPU ในตัว **โปรดตรวจสอบให้แน่ใจว่าคุณได้เสียบจอแสดงผลทั้งหมดเข้ากับการ์ดจอเฉพาะ** การใช้ GPU สองตัวในเวลาเดียวกันจะทำลายการเร่งความเร็วของฮาร์ดแวร์ในตัวจัดการหน้าต่างเดสก์ทอป หากคุณไม่มีเทคโนโลยี Nvidia Optimus หรือเทคโนโลยีที่คล้ายคลึงกัน Windows จะต้องคัดลอกรูปภาพวอลเปเปอร์จาก GPU หนึ่งไปยังอีก GPU ซึ่งการดำเนินการนี้ใช้เวลามาก ในความเป็นจริงการดำเนินการแบ่งปันใด ๆ ระหว่าง GPU ทั้งสองจะได้รับผลกระทบซึ่งเหมือนกับการย้ายหน้าต่างเกมระหว่างจอแสดงสองจอ

This specific issue does not affect hardware built for multi-GPU setups like laptops with Nvidia Optimus or proper Nvidia SLI / AMD Crossfire setups with a hardware bridge.