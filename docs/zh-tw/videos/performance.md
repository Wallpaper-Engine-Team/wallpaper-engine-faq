# 視訊凍結 / 間斷 / 效能不佳

這個問題可能源自硬體效能不足，無法正確顯示特定視訊。 視訊桌布無法與標準的視訊播放器相比，必須以圖示組成，可能還有多個畫面自動縮放。 按照預設，視訊桌布也會使用 GPU 的視訊解碼器將 CPU 使用率降至最低。

## 背景錄製勾點
上述問題也可能源自各種驅動程式錄製應用程式的功能，例如 ReLive、Shadow Play/Nvidia Share 或 Windows GameDVR。 請停用這些功能，看看狀況是否改善，再前往這些功能中將 Wallpaper Engine 排除。 此外，請避免其他錄製/重疊程式自行載入進 Wallpaper Engine，降低視訊呈現速度。

您可以使用我們的掃描工具，找出有已知錄製勾點，但並未擷取任何東西的已安裝程式，常見的錄製勾點尤其會出現這種情形，例如來自 Nvidia GeForce Experience 的錄製勾點。

* [Wallpaper Engine 掃描工具](/debug/scantool.html)

## 動態超解析度 (DSR) / GPU 縮放
GPU 縮放/DSR 這樣的驅動程式層級處理功能也可能造成問題，請停用該功能。若停用有效，請將該功能設定為使用 Wallpaper Engine 時停用。

## dwm.exe 在擁有多個 GPU / 螢幕的系統上效能不佳
已經安裝專用顯示卡時，若在桌上型電腦的 BIOS 中啟用整合式 GPU，則 DWM.exe 可能效能不佳，CPU 使用率偏高。 可行時，請勿啟用整合式 GPU。 **請務必確保所有螢幕皆接入主顯示卡。**同時使用兩個 GPU 將中斷桌面視窗管理員的硬體加速。 沒有 Nvidia Optimus 或類似技術時，Windows 會被迫將桌布圖像從一個 GPU 複製到另一個 GPU 上，這是一項緩慢的作業。 其實，GPU 之間的任何共用行動都會發生這項問題，跟將遊戲視窗移動到兩個螢幕之間一樣。

這項問題不會影響為了多重 GPU 設定而製造的硬體，例如搭載 Nvidia Optimus 或適當 Nvidia SLI / AMD Crossfire 設定與硬體橋接器的筆記型電腦。