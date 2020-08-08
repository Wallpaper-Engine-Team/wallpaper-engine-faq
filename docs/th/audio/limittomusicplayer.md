# การจำกัด Visualizer เสียงให้กับเครื่องเล่นเพลง

Wallpaper Engine ไม่สามารถจำกัด Visualizer เสียงให้กับเครื่องเล่นเพลงที่คุณเลือกได้เนื่องจากระบบการทำงานของเสียงใน Windows ไม่รองรับ แต่คุณสามารถทำได้โดยการใช้ซอฟต์แวร์ภายนอกอื่น ๆ เพื่อสร้างอุปกรณ์เสียง *ปลอม* คู่มือนี้จะอธิบายวิธีหนึ่งในการตั้งค่าอุปกรณ์เสียงปลอมดังกล่าวและวิธีกำหนดค่า Windows 10 และ Wallpaper Engine เพื่อให้การตั้งค่านี้ทำงานได้อย่างถูกต้อง

โปรดทราบว่าเราไม่ให้การสนับสนุนอุปกรณ์เสียงปลอมใด ๆ และไม่สามารถรับประกันได้ว่าวิธีการนี้จะใช้งานได้ เนื่องจากนี่คือการตั้งค่าขั้นสูงเกินกว่าที่ Wallpaper Engine นำเสนอ เรามอบคำแนะนำนี้เพื่อช่วยเหลือผู้ใช้ที่ต้องการปรับแต่งระบบของตนเองไปอีกขั้น

::: warning
โปรดทราบ คำแนะนำนี้ใช้ได้กับ Windows 10 เวอร์ชันอัปเดตเท่านั้น Windows เวอร์ชันเก่าอาจขาดคุณสมบัติบางอย่างซึ่งทำให้ไม่สามารถทำตามคู่มือนี้ได้
:::

### การติดตั้งอุปกรณ์เสียงปลอม

เราขอแนะนำให้คุณใช้ **อุปกรณ์เสียงเสมือน VB-CABLE ** ฟรีซึ่งสามารถดาวน์โหลดได้จากเว็บไซต์ต่อไปนี้:

* [ดาวน์โหลดอุปกรณ์เสียงเสมือน](https://www.vb-audio.com/Cable/)

ดาวน์โหลดและแตกไฟล์ จากนั้นจึงใช้ **VBCABLE_Setup.exe** หรือ **VBCABLE_Setup_x64.exe** ติดตั้งอุปกรณ์เสียง 32-Bit หรือ 64-Bit โดยขึ้นอยู่กับเวอร์ชันของ Windows 10 ของคุณ เปิดไฟล์ติดตั้งในฐานะแอดมินโดยการคลิกขวาแล้วเลือก *Run as administrator* Follow the instructions of the setup and make sure the audio device has been installed successfully.

### Setting up Windows and Wallpaper Engine

Check the video below which shows all the steps on an Windows 10 (English interface) from start to finish if you need some help with any of the steps below.

1. Start playing music using the software that you later want to be used for Wallpaper Engine
2. Right-click on the audio icon next to the clock in the Windows tray and select **Open Sound settings**.
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
