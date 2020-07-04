# 隱藏 Wallpaper Engine 在通知區域的圖示

Wallpaper Engine 在通知區域的圖示是可以隱藏的。您可手動建立一組登錄機碼，讓時鐘旁邊的 Wallpaper Engine 圖示隱藏起來。

::: 警告 我們不建議您執行此操作，除非您百分百肯定通知區域的圖示造成您莫大困擾，因此無論如何都願意接受圖示隱藏之後的不便。 :::

一旦通知區域圖示隱藏，關閉 Wallpaper Engine 的唯一方式是從 Windows 工作管理員結束工作。 您將只能透過 Steam 或 .exe 檔開啟使用者介面，但這樣極不方便也令人不知所以然。

如果您仍想隱藏通知區域圖示，請按照以下說明：

若要建立登錄機碼，開啟 Windows 的開始功能表，輸入「regedit.exe」即能開啟「登錄編輯程式」。

1. 前往下列登錄目錄： *HKEY_CURRENT_USER\Software\WallpaperEngine*
2. 以滑鼠右鍵按一下 *WallpaperEngine* 登錄資料夾，選取*新建*，然後選取 *DWORD (32 位元) 值*。
3. 為該登錄指定以下名稱：*hideTrayIcon*
4. 確保名稱正確無誤，不能包含空格，而且書寫方式必須與上文一模一樣。
5. 在登錄機碼上按兩下，並指定其值：*1*
6. 重新啟動 Wallpaper Engine，此時將不會在通知區域顯示圖示。

您可將 *hideTrayIcon* 設定為 *0* 或將其完全刪除，接著重新啟動 Wallpaper Engine，圖示即可再次顯示。 