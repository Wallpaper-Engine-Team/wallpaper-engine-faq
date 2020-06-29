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

出于法律原因，我们无法将 LAV 与 Wallpaper Engine 捆绑在一起，这意味着您需要自行下载和安装 LAV。 安装 LAV 之后，您还需要配置 Wallpaper Engine 以使用 DirectShow：

## 1. 安装 LAV
* 下载 x86 **和** x64 版本的 LAV 筛选器：
  * 镜像 1：[Github](https://github.com/Nevcairiel/LAVFilters/releases)
  * 镜像 2：[Fosshub](https://www.fosshub.com/LAV-Filters.html)
* 安装 LAV，确保您的 Windows 用户具有管理员权限
* 重新启动 Wallpaper Engine。

## 2. 启用 DirectShow
* 打开 Wallpaper Engine 设置，然后导航到“常规”选项卡
* 将**视频框架**选项更改为**首选 DirectShow**
* Restart the application and try using your video wallpaper again

## Enabling WebM Hardware Acceleration
If you are experiencing stutters at the end of your video wallpapers, you can use .webm files which do not suffer from the same issue. It's best if you also enable hardware acceleration for .webm videos which will reduce the CPU usage for them significantly and still allows video wallpapers to loop without a notable cut after the last frame. This is a continuation of the steps above, make sure you have installed LAV and enabled DirectShow as instructed in the previous section.
* Open the Wallpaper Engine settings and navigate to the "General" tab
* Change the **WebM framework** option to **Prefer Native**
* Restart the application and try using your video wallpaper again

Check if the LAV system tray icon shows up and if the CPU usage is nearly zero, then your .webm content is now hardware accelerated. If it does not seem to work, make sure all options are configured correctly and LAV is correctly installed.