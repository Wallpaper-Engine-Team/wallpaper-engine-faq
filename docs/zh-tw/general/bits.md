# 32 位元與 64 位元版本

64 位元版本得以處理更大的檔案 (大於 2GB)，但無論桌布檔案大小為何，勢必佔用更多記憶體。 舉例來說，如果是一般的視訊桌布，64 位元版本可能比 32 位元版本多佔用約 50 MB 以上的 RAM，此外並無任何區別或改善。

::: 提示 我們建議您繼續使用 32 位元版本，除非您的桌布檔案超大，大到使 32 位元當機。 絕大多數使用者從未遇上此問題。 :::

如果個人電腦的視訊系統出現僅影響 32 位元版本程式的錯誤，您也可以選用 64 位元版本。 如果您曾安裝轉碼器套件之類的程式，這些程式可能已造成 Wallpaper Engine 使用的 32 位元 Windows 視訊系統永久損壞。 如果 64 位元系統不受影響，您便可善用 64 位元版本的 Wallpaper Engine，這樣就不必修復任何損壞的內容了。

::: 警告 注意 「網頁」類型的桌布必定以 32 位元的可執行檔 (webwallpaper32.exe) 執行， 使用者介面本身也是 (ui32.exe)。 僅在選擇「場景」或「視訊」時才適用 64 位元的可執行檔。 :::

## 如何將 Wallpaper Engine 設定為在 Windows 啟動時以 32 位元或 64 位元版本自動啟動？

首先，請先透過通知區域的圖示將 Wallpaper Engine 完全關閉 (在通知區域的 Wallpaper Engine 圖示上按一下滑鼠右鍵 -> [結束])。 This is important as Steam will otherwise not launch Wallpaper Engine and only bring the already running version to the foreground.

Once Wallpaper Engine is turned off, go to Steam and start either the 32 Bit or 64 Bit version, depending on which version you want to automatically start. Go to the Wallpaper Engine settings and at the top of the "General" tab, enable autostart. If it is already enabled, turn it off completely and then turn it back on. This will register the current version as the one which will be automatically started alongside Windows. 