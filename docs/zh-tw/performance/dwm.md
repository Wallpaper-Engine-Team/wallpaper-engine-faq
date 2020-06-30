# 搭載整合式和專用 GPU 的桌上型電腦效能不佳（dwm.exe）

已經安裝專用 GPU 時，若在桌上型電腦的 BIOS 中啟用整合式 GPU，電腦可能效能不佳，*dwm.exe* 的 CPU 使用率偏高。 若可行，請勿啟用您的整合式 GPU，並將螢幕接入專用 GPU。 同時使用二項獨立顯示解決方案將中斷桌面視窗管理員的硬體加速，請確保所有螢幕皆接入主顯示卡。 這並不是 Wallpaper Engine 存在錯誤或問題，而是硬體設定影響所有多螢幕軟體的問題，其中不是所有螢幕都接入主顯示卡。

沒有 Nvidia Optimus 或類似技術時，Windows 會被迫將桌布圖像從一個 GPU 複製到另一個 GPU 上，這是一項非常緩慢的作業。 其實，GPU 之間的任何共用行動都會發生這項問題，跟將遊戲視窗移動到兩個螢幕之間一樣。

這與為了多重 GPU 設定而製造的硬體無關，例如 Nvidia Optimus 筆記型電腦或 SLI/Crossfire。 前述硬體有實體解決方案，讓上述狀況正確運作。

## Poor Performance using Secondary GPU on Desktop without Nvidia SLI / Nvidia Optimus / AMD CrossFire

Many users assume that switching Wallpaper Engine to a secondary GPU will increase the overall system performance. However, this is merely a common misconception and the overall system performance will actually degrade.

Wallpaper Engine creates wallpapers which are part of the desktop which means they are part of the Windows Explorer process. Therefore, Wallpaper Engine must use the same GPU as Windows Explorer. If this is not the case, then Windows has to force both GPUs to cooperate in order to render an image for your monitors. This has to be done by the processor which ultimately means the overall computer performance degrades significantly and often takes much more performance than the wallpapers themselves. Some proper multi-GPU technologies (Nvidia SLI, Nvidia Optimus, AMD CrossFire) solve this problem on a hardware-level but this is not applicable in cases where you use an Nvidia GPU and an Intel on-board graphics card, for example.

You can still change the GPU of your choice in your graphics card drivers or in your overall system settings, however we strongly advise against doing this as the outcome is not an increase in system performance.