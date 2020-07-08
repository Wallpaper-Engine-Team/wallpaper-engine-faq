# 搭載整合式和專用 GPU 的桌上型電腦效能不佳 (dwm.exe)

已經安裝專用 GPU 時，若在桌上型電腦的 BIOS 中啟用整合式 GPU，電腦可能效能不佳，*dwm.exe* 的 CPU 使用率偏高。 若可行，請勿啟用您的整合式 GPU，並將螢幕接入專用 GPU。 同時使用兩項獨立顯示解決方案將中斷桌面視窗管理員的硬體加速，請確保所有螢幕皆接入主顯示卡。 這並不是 Wallpaper Engine 存在錯誤或問題，而是硬體設定影響所有多螢幕軟體的問題，其中不是所有螢幕都接入主顯示卡。

沒有 Nvidia Optimus 或類似技術時，Windows 會被迫將桌布圖像從一個 GPU 複製到另一個 GPU 上，這是一項非常緩慢的作業。 其實，GPU 之間的任何共用行動都會發生這項問題，跟將遊戲視窗移動到兩個螢幕之間一樣。

這與為了多重 GPU 設定而製造的硬體無關，例如 Nvidia Optimus 筆記型電腦或 SLI/Crossfire。 前述硬體有實體解決方案，讓上述狀況正確運作。

## 無 Nvidia SLI/Nvidia Optimus/AMD CrossFire 的桌上型電腦使用第二個 GPU 時效能不佳

許多使用者認為，將 Wallpaper Engine 切換到第二個 GPU 能增加整體系統效能。 然而，這是一項常見的迷思，反而會導致整體系統效能下降。

Wallpaper Engine 會建立桌布成為桌面的一部分，這表示桌布是 Windows 檔案總管程序的一部分。 因此，Wallpaper Engine 使用的 GPU 必須和 Windows 檔案總管所用的相同。 假如不同，Windows 就必須強制兩個 GPU 合作，以便為螢幕呈現圖像。 這必須由處理器完成，到頭來代表整體電腦效能會顯著下降，使用的電腦效能常常遠超過桌布。 有一些適當的多 GPU 技術 (Nvidia SLI、Nvidia Optimus、AMD CrossFire) 從硬體層級著手解決這項問題，但是其他情況中並不適用，例如同時使用 Nvidia GPU 和 Intel 內建顯示卡。

您還是能在顯示卡驅動程式中自行變更 GPU，或在整體系統設定中變更，不過，我們強烈建議不要這麼做，因為結果並不會提升系統效能。