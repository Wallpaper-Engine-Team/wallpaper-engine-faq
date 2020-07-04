# สำรองข้อมูล Steam Workshop

หากคุณลบวอลเปเปอร์ออกจาก Steam ไม่ว่าด้วยเหตุผลใดก็ตาม Steam จะลบวอลเปเปอร์เหล่านั้นออกจากคอมพิวเตอร์ของคุณด้วย Wallpaper Engine ไม่สามารถป้องกันสิ่งนี้ได้ แต่หากคุณกังวลคุณสามารถสำรองข้อมูลวอลเปเปอร์ของคุณได้

ผู้ใช้หลายคนรายงานว่า Steam จะสุ่มดาวน์โหลดไฟล์เวิร์กชอปทั้งหมดอีกครั้งซึ่งอาจสร้างความรำคาญหากคุณมีข้อมูลปริมาณมาก หากเกิดเหตุการณ์นี้หลายครั้ง การสร้างการสำรองข้อมูลและการยกเลิกการเชื่อมต่อทั้งหมดกับ Steam สามารถหลีกเลี่ยงได้

# การสร้างการสำรองข้อมูล

The following guide expects that your Steam and Wallpaper Engine are installed in `C:\Program Files (x86)\Steam\`, if you have installed your Steam / Wallpaper Engine somewhere else, be sure to check in those locations.

1. Locate the folder in which Steam stores your wallpapers, by default it is in `C:\Program Files (x86)\Steam\steamapps\workshop\content\431960` ::: tip **431960** is the Steam ID of Wallpaper Engine, Steam uses this directory for all Wallpaper Engine downloads. :::
2. Copy the folder 431960 to Wallpaper Engine's installation path here: `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\projects\431960`
3. **Rename** the folder `431960` into `backup` so that the complete path looks like this: `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\projects\backup`
4. The `backup` directory now includes all your previously downloaded wallpapers, each in their own sub-directory (the numbers represent the Steam Workshop ID of the wallpaper)
5. Restart the wallpaper browser and you should see the backed up wallpapers now. You can now unsubscribe the duplicate Steam ones and only use your personal copy of them

::: warning Do **not** manually delete the Steam Workshop folder `C:\Program Files (x86)\Steam\steamapps\workshop\content\431960`. This will cause your Steam to be confused and re-download all wallpapers. Simply unsubscribe from your wallpapers and let Steam delete the duplicate files itself. :::