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
若您碰到破碎視訊轉碼器的相關問題，或想在系統上使用額外的視訊格式，可以安裝 LAV 並在 Wallpaper Engine 設定中啟用 DirectShow。 這樣應該能為 **Windows 7 上的 4K 與 HEVC 視訊**提供更好的支援，可以開啟 **.mkv** 檔案。

出於法律因素，我們不能將 LAV 與 Wallpaper Engine 一起搭售，這表示您需要自行下載並安裝 LAV。 安裝 LAV 後，您還需要設定 Wallpaper Engine 以使用 DirectShow：

## 1. 安裝 LAV
* 下載 LAV 篩選器的 x86 **以及** x64 版本：
  * 鏡像 #1：[Github](https://github.com/Nevcairiel/LAVFilters/releases)
  * 鏡像 #2：[Fosshub](https://www.fosshub.com/LAV-Filters.html)
* 安裝 LAV，請確保您的 Windows 使用者擁有管理員權限
* 重新啟動 Wallpaper Engine。

## 2. 啟用 DirectShow
* 開啟 Wallpaper Engine 設定後前往「一般」分頁
* 將**視訊架構**選項變更為**偏好 DirectShow**
* 重新啟動應用程式後再次使用視訊桌布

## 啟用 WebM 硬體加速
若您的視訊桌布結尾出現間斷，您可以使用不會有相同問題的 .webm 檔案。 It's best if you also enable hardware acceleration for .webm videos which will reduce the CPU usage for them significantly and still allows video wallpapers to loop without a notable cut after the last frame. This is a continuation of the steps above, make sure you have installed LAV and enabled DirectShow as instructed in the previous section.
* 開啟 Wallpaper Engine 設定後前往「一般」分頁
* 將 **WebM 架構**選項變更為**偏好原始設定**
* Restart the application and try using your video wallpaper again

Check if the LAV system tray icon shows up and if the CPU usage is nearly zero, then your .webm content is now hardware accelerated. If it does not seem to work, make sure all options are configured correctly and LAV is correctly installed.