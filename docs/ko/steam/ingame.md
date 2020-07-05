# Steam에 계속 "인게임"이 나타납니다
Wallpaper Engine is only supposed to show on Steam while accessing Workshop features (when the browser or editor is open, this is enforced by Valve / Steam). But if it shows up even after closing all windows, you are either experiencing a known Steam bug, that you can avoid with the fix below, or the window did not close properly (check for ui32.exe in task manager).

If you regularly have this problem you can get around this by not launching the program through Steam but directly from the wallpaper_engine installation directory. By default this would be `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\wallpaper32.exe`. If Wallpaper Engine is running already, completely turn it off first and then re-run it from this directory and possibly turn the autostart off and back on in the Wallpaper Engine settings.

Every time Steam reconnects to the internet, due to your internet turning off and on, Steam may go a little crazy when it comes to your in-game status which can cause issues like that. As mentioned above, start the program directly or via the autostart functionality and not through Steam, this will likely prevent the issue from happening for you.

## 창작마당 / Steam 결합 완전 비활성화
You can disable the entire Steam integration by creating an empty text file named `nosteam.txt` and putting it into the `wallpaper_engine/bin` directory (by default the complete path is `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\bin`). 이게 비활성화되면 배경화면을 다운로드/업데이트 또는 업로드할 수 없지만, 이전에 다운로드한 것에는 모두 접근할 수 있습니다. 