# เปิดและปิดเสียงตัวเองเป็นระยะ

Windows ไม่สามารถแยกความแตกต่างระหว่างการบันทึกเสียงและระดับการเล่นเสียงได้ ดังนั้น Windows จะแจ้งให้ Wallpaper Engine ทราบว่าโปรแกรมอื่นกำลังส่งเสียงในขณะที่กำลังบันทึกเสียงคอมพิวเตอร์ของคุณ

ตรวจสอบแท็บ "ประสิทธิภาพการทำงาน" ในส่วนของการตั้งค่า Wallpaper Engine หากคุณมีตัวเลือก *"แอพพลิเคชันอื่นกำลังเล่นไฟล์เสียง"* ที่ตั้งค่าเป็น *"ปิดเสียง"* แล้วคุณสังเกตเห็นว่าเสียงจาก Wallpaper Engine เปิดและปิดตัวเองเป็นระยะ แสดงว่าคุณอาจมีโปรแกรมบันทึกที่กำลังบันทึกหน้าจอและเสียงของคุณในพื้นหลัง

ในการแก้ไขปัญหาดังกล่าว ให้ดำเนินการหนึ่งในสามสิ่งต่อไปนี้:

* ปิดโปรแกรมบันทึกบนเดสก์ทอปของคุณหรือกำหนดค่าใหม่เพื่อไม่ให้มีการบันทึก Wallpaper Engine โดยไม่ได้ตั้งใจ
    * ผู้ใช้หลายคนพบปัญหานี้จาก **Nvidia Share / Nvidia GameStream / Nvidia ShadowPlay** ซึ่งคุณสามารถปิดได้ในการตั้งค่า **Nvidia GeForce Experience** For AMD graphics card users, **AMD ReLive** can equally cause these issues and is also part of the AMD graphics card drivers. Try checking this first if you are unsure what could be recording your desktop.
    * If you do not know what application is causing this, check your Windows audio mixer and see what applications are currently accessing your audio, that may help. Alternatively, shut down as many programs as possible and narrow it down to certain .exe files from the Windows task manager process list.
* If the background audio recording is on purpose or if you cannot find a way to turn it off, you can set up an *application rule* in the "Performance" tab of the Wallpaper Engine settings. Set the "Condition" to "Is playing audio" and the "Wallpaper playback" to "Keep Running":

![Application Rules can be found in the "Performance" tab of the Wallpaper Engine settings](./applicationrule.png)

Replace some.exe with .exe files you can find in the task manager until you have narrowed it down to the responsible .exe.

* Lastly, you can also change the option 'other application playing audio' to 'keep running'. However, this means Wallpaper Engine will not automatically mute audio output from wallpapers when you listen to music or watch videos that are not full-screen.
