# Steam 隨時顯示「在遊戲中」
Wallpaper Engine 應該只有在存取工作坊功能時 (瀏覽器或編輯器開啟時，這點是由 Valve / Steam 執行)，才會在 Steam 上顯示。 若 Wallpaper Engine 在關閉所有視窗後繼續顯示，您可能是碰到一個已知的 Steam 錯誤，這個錯誤可用以下修復方式避免。也可能是視窗並未正確關閉 (請在工作管理員中檢查 ui32.exe)。

If you regularly have this problem you can get around this by not launching the program through Steam but directly from the wallpaper_engine installation directory. By default this would be `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\wallpaper32.exe`. If Wallpaper Engine is running already, completely turn it off first and then re-run it from this directory and possibly turn the autostart off and back on in the Wallpaper Engine settings.

Every time Steam reconnects to the internet, due to your internet turning off and on, Steam may go a little crazy when it comes to your in-game status which can cause issues like that. As mentioned above, start the program directly or via the autostart functionality and not through Steam, this will likely prevent the issue from happening for you.

## Completely disable Workshop / Steam integration
You can disable the entire Steam integration by creating an empty text file named `nosteam.txt` and putting it into the `wallpaper_engine/bin` directory (by default the complete path is `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\bin`). You cannot download/update or upload any wallpapers if this is disabled, but you can still access everything that was previously downloaded. 