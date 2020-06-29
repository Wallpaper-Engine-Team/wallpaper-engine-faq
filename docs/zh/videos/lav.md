---
tags:
  - WebM
  - 视频
  - 黑屏
  - 编解码器
  - 筛选器
  - 4K
  - HEVC
  - mkv
  - mp4
---

# 使用 LAV 和 DirectShow
如果您遇到与视频编解码器损坏有关的问题，或者想在系统上使用其他视频格式，您可以尝试安装 LAV，并在 Wallpaper Engine 设置中启用 DirectShow。 这应该可以为 **Windows 7 上的 4K 和 HEVC 视频**提供更好的支持，并允许您打开 **.mkv** 文件。

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