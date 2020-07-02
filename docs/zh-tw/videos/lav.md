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

For legal reasons, we cannot bundle LAV with Wallpaper Engine which means you need to download and install it yourself. After you have installed LAV, you also need to configure Wallpaper Engine to use DirectShow:

## 1. Install LAV
* Download the x86 **AND** x64 versions of LAV Filters:
  * Mirror #1: [Github](https://github.com/Nevcairiel/LAVFilters/releases)
  * Mirror #2: [Fosshub](https://www.fosshub.com/LAV-Filters.html)
* Install LAV, make sure your Windows user has admin rights
* Restart Wallpaper Engine.

## 2. Enable DirectShow
* Open the Wallpaper Engine settings and navigate to the "General" tab
* Change the **Video framework** option to **Prefer DirectShow**
* Restart the application and try using your video wallpaper again

## Enabling WebM Hardware Acceleration
If you are experiencing stutters at the end of your video wallpapers, you can use .webm files which do not suffer from the same issue. It's best if you also enable hardware acceleration for .webm videos which will reduce the CPU usage for them significantly and still allows video wallpapers to loop without a notable cut after the last frame. This is a continuation of the steps above, make sure you have installed LAV and enabled DirectShow as instructed in the previous section.
* Open the Wallpaper Engine settings and navigate to the "General" tab
* Change the **WebM framework** option to **Prefer Native**
* Restart the application and try using your video wallpaper again

Check if the LAV system tray icon shows up and if the CPU usage is nearly zero, then your .webm content is now hardware accelerated. If it does not seem to work, make sure all options are configured correctly and LAV is correctly installed.