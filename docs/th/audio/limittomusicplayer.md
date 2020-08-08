# การจำกัด Visualizer เสียงให้กับเครื่องเล่นเพลง

Wallpaper Engine ไม่สามารถจำกัด Visualizer เสียงให้กับเครื่องเล่นเพลงที่คุณเลือกได้เนื่องจากระบบการทำงานของเสียงใน Windows ไม่รองรับ แต่คุณสามารถทำได้โดยการใช้ซอฟต์แวร์ภายนอกอื่น ๆ เพื่อสร้างอุปกรณ์เสียง *ปลอม* คู่มือนี้จะอธิบายวิธีหนึ่งในการตั้งค่าอุปกรณ์เสียงปลอมดังกล่าวและวิธีกำหนดค่า Windows 10 และ Wallpaper Engine เพื่อให้การตั้งค่านี้ทำงานได้อย่างถูกต้อง

โปรดทราบว่าเราไม่ให้การสนับสนุนอุปกรณ์เสียงปลอมใด ๆ และไม่สามารถรับประกันได้ว่าวิธีการนี้จะใช้งานได้ เนื่องจากนี่คือการตั้งค่าขั้นสูงเกินกว่าที่ Wallpaper Engine นำเสนอ เรามอบคำแนะนำนี้เพื่อช่วยเหลือผู้ใช้ที่ต้องการปรับแต่งระบบของตนเองไปอีกขั้น

::: warning
โปรดทราบ คำแนะนำนี้ใช้ได้กับ Windows 10 เวอร์ชันอัปเดตเท่านั้น Windows เวอร์ชันเก่าอาจขาดคุณสมบัติบางอย่างซึ่งทำให้ไม่สามารถทำตามคู่มือนี้ได้
:::

### การติดตั้งอุปกรณ์เสียงปลอม

เราขอแนะนำให้คุณใช้ **อุปกรณ์เสียงเสมือน VB-CABLE ** ฟรีซึ่งสามารถดาวน์โหลดได้จากเว็บไซต์ต่อไปนี้:

* [ดาวน์โหลดอุปกรณ์เสียงเสมือน](https://www.vb-audio.com/Cable/)

ดาวน์โหลดและแตกไฟล์ จากนั้นจึงใช้ **VBCABLE_Setup.exe** หรือ **VBCABLE_Setup_x64.exe** ติดตั้งอุปกรณ์เสียง 32-Bit หรือ 64-Bit โดยขึ้นอยู่กับเวอร์ชันของ Windows 10 ของคุณ เปิดไฟล์ติดตั้งในฐานะแอดมินโดยการคลิกขวาแล้วเลือก *Run as administrator* โปรดปฏิบัติตามคำแนะนำในการตั้งค่าและตรวจสอบให้แน่ใจว่าติดตั้งอุปกรณ์เสียงเรียบร้อยแล้ว

### การตั้งค่า Windows และ Wallpaper Engine

หากคุณต้องการความช่วยเหลือในขั้นตอนใด ๆ ด้านล่าง โปรดดูวิดีโอด้านล่างซึ่งแสดงถึงขั้นตอนทั้งหมดบน Windows 10 (ส่วนต่อประสานภาษาอังกฤษ)

1. เริ่มเล่นเพลงด้วยซอฟต์แวร์ที่คุณต้องการใช้กับ Wallpaper Engine ในภายหลัง
2. คลิกขวาที่ไอคอนเสียงข้างนาฬิกาที่แถบงาน Windows แล้วเลือก **เปิดการตั้งค่าเสียง** (Open Sound Settings)
3. Scroll down to the bottom of the page that opens and click on **App volume and device preferences**.
4. A list of all applications playing audio will be shown. Find your music player and in the **Output** column, change the option from **Default** to **CABLE Input (VB-Audio Virtual Cable)**. Your audio player should immediately turn quiet, this is to be expected.
5. Go back to the main page of the Windows sound settings and in the upper right corner, select **Sound Control Panel**.
6. A small window will appear, navigate to the **Recording** tab, then right-click on the **CABLE Output** audio device and select **Properties**.
7. Another window will appear, click on the **Listen** tab and select **Listen to this device**. Click on **Apply** and **OK** and the music from your music player should return.
8. Windows is now properly configured, open up the **Wallpaper Engine settings** and in the **General** tab, change the **Audio recording device** to **CABLE Input (VB-Audio Virtual Cable)**. Wallpaper Engine should now start reacting to the music from your music player but will ignore any other application on your computer.

*Video showcasing all the steps described above:*

<video width="100%" controls>
  <source src="/videos/audioinputdevice.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
