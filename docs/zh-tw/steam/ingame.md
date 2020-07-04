# Steam 隨時顯示「在遊戲中」
Wallpaper Engine 應該只有在存取工作坊功能時 (瀏覽器或編輯器開啟時，這點是由 Valve / Steam 執行)，才會在 Steam 上顯示。 若 Wallpaper Engine 在關閉所有視窗後繼續顯示，您可能是碰到一個已知的 Steam 錯誤，這個錯誤可用以下修復方式避免。也可能是視窗並未正確關閉 (請在工作管理員中檢查 ui32.exe)。

若您會固定碰上這項問題，解決方法是不透過 Steam 啟動程式，而是直接從 wallpaper_engine 安裝目錄啟動。 按照預設，路徑為 `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\wallpaper32.exe`。 若 Wallpaper Engine 已經在執行，請先完全關閉，再從上述目錄重新執行，也可以關閉 Wallpaper Engine 設定中的自動啟動然後再開啟。

每次 Steam 重新連線至網際網路時，由於網際網路關閉開啟，Steam 在顯示您的遊戲中狀態上可能有些不準確，因此可能造成前述問題。 如上所述，別透過 Steam 啟動，而是直接啟動軟體或透過自動啟動功能，這麼做應該就能防止同樣問題發生。

## 完全停用工作坊 / Steam 整合
您可以停用整個 Steam 整合，方法是建立一個空白的文字檔案，命名為 `nosteam.txt`，將檔案放進 `wallpaper_engine/bin` 目錄內 (按照預設，完整路徑為 `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\bin`)。 若停用整合，您將無法下載/更新或上傳任何桌布，但您依然可以存取先前下載的任何內容。 