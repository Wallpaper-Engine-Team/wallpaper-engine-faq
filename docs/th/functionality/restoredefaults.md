# การกู้คืนวอลเปเปอร์เริ่มต้นที่ถูกลบ

หากคุณลบวอลเปเปอร์ที่ติดตั้งไว้ล่วงหน้าใน Wallpaper Engine ไป คุณสามารถนำกลับมาได้โดยการลบไฟล์ config ในไดเรกทอรีการติดตั้ง *wallpaper_engine* ของคุณ:

1. ปิด Wallpaper Engine (คลิกขวาที่ Wallpaper Engine ในแถบงาน -> "ออกจากโปรแกรม")

2. ไปที่ไดเรกทอรี Wallpaper Engine ของคุณและลบไฟล์ชื่อ "visible.json" The file can be found here by default:

* *C:\Program Files (x86)\Steam\SteamApps\common\wallpaper_engine\projects\defaultprojects\visibility.json*

If your Steam or Wallpaper Engine are installed in a different place / directory, the directory will be slightly different, but *wallpaper_engine\projects\defaultprojects\visibility.json* sub-directory is always the same.

3. Once the file is deleted, start Wallpaper Engine again, you will have all default wallpapers back.

::: tip If you are unable to find the "visibility.json" file for some reason, you can also always just re-install Wallpaper Engine. This will also restore all default wallpapers but will require you to re-download all wallpapers which you can avoid by following the steps above. :::