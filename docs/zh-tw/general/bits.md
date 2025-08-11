# 32 位元與 64 位元版本

我們建議使用 64 位元版本的 Wallpaper Engine，因為 64 位元版本可處理容量更大的檔案（超過 2GB）。 除此之外，兩個版本皆相同，也能提供相同等級的視覺逼真度與性能。

在少數的情況下，切換至 32 位元版本，就能解決 64 位元版本 Windows 的元件損壞、驅動程式、視訊轉碼器套件及其他應用程式無法相容的問題。 這麼做也許能協助修復特定的 Wallpaper Engine 問題，不過無法解決系統的潛在問題。

**請注意：** *「網頁」*類型的桌布必須以 32 位元的可執行檔*（webwallpaper32.exe）*執行。 相同的情況適用於 Wallpaper Engine 的使用者介面*（ui32.exe）*。 The 64-bit option only applies when selecting wallpapers of the type *"Scene"* or *"Video"*.

## 如何將 Wallpaper Engine 設定為在 Windows 啟動時以 32 位元或 64 位元版本自動啟動？

First, completely turn off Wallpaper Engine via the tray icon (right-click on the Wallpaper Engine icon in the Windows tray, then select "Quit"). Do not skip this step, as Steam will otherwise not restart Wallpaper Engine and only bring the already running version to the foreground.

Once Wallpaper Engine is turned off, go to Steam and start either the 32-bit or 64-bit version, depending on which version you want to automatically start. Next, go to the Wallpaper Engine settings and at the top of the "General" tab, enable the automatic startup functionality. 如果該功能已顯示啟用，請完全關閉後再重新開啟。 如此將使目前版本登錄為隨 Windows 開機而自動啟動的版本。