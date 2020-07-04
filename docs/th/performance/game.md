# บางเกมหรือแอพพลิเคชันมีปัญหาด้านประสิทธิภาพ / FPS ต่ำ

ตามค่าเริ่มต้น Wallpaper Engine จะหยุดโดยอัตโนมัติเมื่อคุณเล่นเกม คุณสามารถกำหนดค่านี้ได้ในแท็บ **ประสิทธิภาพการทำงาน** ในส่วนการตั้งค่า Wallpaper Engine

หากคุณพบปัญหาในเกมหรือแอพพลิเคชันใด ๆ คุณสามารถปรับแต่งลักษณะที่เกิดขึ้นได้ โดยทั่วไปปัญหาประสิทธิภาพการทำงานเกิดจาก RAM ของระบบหรือ RAM วิดีโอ (หน่วยความจำบนการ์ดจอ) ไม่เพียงพอ คุณสามารถตั้งค่า Wallpaper Engine ให้เพิ่มหน่วยความจำเมื่อเล่นเกมโดยเปลี่ยนตัวเลือก **แอพพลิเคชันอื่นทำงานแบบเต็มหน้าจอ** ในแท็บ **ประสิทธิภาพการทำงาน** ในส่วนการตั้งค่า Wallpaper Engine เป็น **หยุด (ลดการใช้หน่วยความจำ)**

## กฎของแอพพลิเคชัน

If you only have issues with a particular game or software, you can also configure this just for the sofware that you are having problems with by creating an **Application Rule**:

1. Open the **Performance** tab in the Wallpaper Engine settings
2. Click on the **Edit** button next to **Application rules**
3. In the pop-up that appears, click on **Create new rule**
4. Create a new rule with the following settings:
    * **Application name:** "game.exe" *(replace this with the actual .exe file of your game)*
    * **Condition:** "Is running"
    * **Wallpaper playback:** "Stop (free memory)"
5. Confirm by clicking on **Create**

Wallpaper Engine will now completely remove all wallpapers from memory when the *.exe* you configured is launched.

## Conflicts with screen-recording tools or overlays

If you are using any game streaming, game recording or software with overlays, make sure they are not accidentally recording Wallpaper Engine in the background. This can also be the case if you use any game streaming functionalities from your graphics card drivers (Nvidia ShadowPlay, Nvidia Share or AMD ReLive for example).
