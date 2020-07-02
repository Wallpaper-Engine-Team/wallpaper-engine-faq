# การกู้คืนวอลเปเปอร์เริ่มต้นที่ถูกลบ

If you have deleted wallpapers that come pre-installed with Wallpaper Engine, you can get them back by deleting a config file in your *wallpaper_engine* installation directory:

1. Turn off Wallpaper Engine completely (right-click on it in the tray -> "Quit")

2. Go to your Wallpaper Engine directory and delete a file called "visibility.json". The file can be found here by default:

* *C:\Program Files (x86)\Steam\SteamApps\common\wallpaper_engine\projects\defaultprojects\visibility.json*

If your Steam or Wallpaper Engine are installed in a different place / directory, the directory will be slightly different, but *wallpaper_engine\projects\defaultprojects\visibility.json* sub-directory is always the same.

3. Once the file is deleted, start Wallpaper Engine again, you will have all default wallpapers back.

::: tip If you are unable to find the "visibility.json" file for some reason, you can also always just re-install Wallpaper Engine. This will also restore all default wallpapers but will require you to re-download all wallpapers which you can avoid by following the steps above. :::