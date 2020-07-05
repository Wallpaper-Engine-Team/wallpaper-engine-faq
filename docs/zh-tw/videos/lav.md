---
tags:
  - webm
  - 視訊
  - 黑
  - 轉碼器
  - 篩選器
  - 4K
  - HEVC
  - mkv
  - mp4
---

# 使用 LAV 與 DirectShow
如果您碰到破碎視訊轉碼器的相關問題，或想在系統上使用額外的視訊格式，可以安裝 LAV，並在 Wallpaper Engine 設定中啟用 DirectShow。 這樣應該能為 **Windows 7 上的 4K 與 HEVC 視訊**提供更好的支援，可以開啟 **.mkv** 檔案。

出於法律因素，我們不能將 LAV 與 Wallpaper Engine 一起搭售，必須請您自行下載並安裝 LAV。 安裝 LAV 後，還需要設定 Wallpaper Engine 以使用 DirectShow：

## 1. 安裝 LAV
* 下載 LAV Filters 的 x86 **以及** x64 版本：
  * 鏡像 #1：[Github](https://github.com/Nevcairiel/LAVFilters/releases)
  * 鏡像 #2：[Fosshub](https://www.fosshub.com/LAV-Filters.html)
* 安裝 LAV，請確保您的 Windows 使用者擁有管理員權限
* 重新啟動 Wallpaper Engine。

## 2. 啟用 DirectShow
* 開啟 Wallpaper Engine 設定後前往「一般」分頁
* 將**視訊架構**選項變更為**偏好 DirectShow**
* 重新啟動應用程式後再次使用視訊桌布

## 啟用 WebM 硬體加速
如果視訊桌布結尾出現間斷，您可以使用不會有相同問題的 .webm 檔案。 建議您同時啟用 .webm 視訊的硬體加速，這樣能大幅降低視訊的 CPU 使用率，允許視訊桌布順暢循環播放，最後影格播放之後不會有明顯間斷。 以下是前述步驟的延續，請確保您已經依照說明指示安裝 LAV 並啟用 DirectShow。
* 開啟 Wallpaper Engine 設定後前往「一般」分頁
* 將 **WebM 架構**選項變更為**偏好原始設定**
* 重新啟動應用程式後再次使用視訊桌布

請檢查 LAV 系統匣圖示是否出現，以及 CPU 使用是否接近零，接著 .webm 內容便會進行硬體加速。 若此方法未見成效，請確保所有選項設定正確，LAV 依照指示安裝。