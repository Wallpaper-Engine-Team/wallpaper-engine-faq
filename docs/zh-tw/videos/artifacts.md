---
tags:
  - 顏色
  - 亮
  - 暗
  - 縮放
  - 放大
  - 像素化
  - 邊框
  - 色差補正
  - 品質
  - 錯誤
  - 醜
---

# 視訊桌布看起來不對勁

Wallpaper Engine 使用了適用於視訊的硬體加速將效能最佳化，與大多數視訊播放器不同。 這表示，顯示卡驅動程式可能影響視訊看起來的樣子。

**如果視訊桌布顏色錯誤、過亮或過暗、放大、像素化，或是桌布周圍出現邊框**，您可以在圖形控制面板中替 Nvidia、AMD 或 Intel 的顯示卡重設視訊選項，解決這項問題。 如果電腦有多個 GPU (例如主卡為 Nvidia，第二 GPU 為 Intel)，請務必替所有 GPU 重設選項。

您也能重新安裝顯示卡驅動程式，再選擇重設所有設定 (「全新重新安裝」)，例如 Nvidia 的驅動程式就能做到這點。 這表示，您需要先解除安裝驅動程式，等現有的驅動程式完全解除安裝後，再重新安裝最新的驅動程式。 有一些驅動程式在進階區段中提供了「執行全新重新安裝」的選項，請啟用此選項，自動清除不完整驅動程式遺留的任何檔案。 您可以從以下大廠取得最新的顯示卡驅動程式：

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx)
* [AMD Radeon](https://www.amd.com/support)
* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)

若您不確定該怎麼做：請下載適用您的顯示卡的最新驅動程式，再用 DDU 解除安裝顯示卡驅動程式並刪除所有設定：

* [Display Driver Uninstaller 下載](https://www.guru3d.com/files-details/display-driver-uninstaller-download.html)

之後，請安裝您下載的驅動程式。 若執行正確，此方法將解決問題。

::: 提示 重新安裝顯示卡驅動程式後，如果顏色依然不對勁，您可能有一個以上的 GPU，或是並未執行「全新」的重新安裝。 請先解除安裝所有現有的顯示卡驅動程式，並清除所有驅動程式的設定。 :::