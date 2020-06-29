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
* 重新启动该应用程序，然后再次尝试使用视频壁纸

## 启用 WebM 硬件加速
如果视频壁纸结束时出现卡顿，您可以使用 .webm 文件，这些文件不会出现相同的问题。 您最好同时为 .webm 视频启用硬件加速，这不但可以大幅降低它们的 CPU 使用率，还将允许视频壁纸循环播放，而不会在最后一帧之后出现明显的剪切痕迹。 这是上述步骤的延续，请确保已按照上一部分的说明安装了 LAV 并启用 DirectShow。
* 打开 Wallpaper Engine 设置，然后导航到“常规”选项卡
* 将 **WebM 框架**选项更改为**首选 Native**
* 重新启动该应用程序，然后再次尝试使用视频壁纸

查看 LAV 系统托盘图标是否出现以及 CPU 使用率是否接近零，如果答案为是，那么您的 .webm 内容现已经过硬件加速。 If it does not seem to work, make sure all options are configured correctly and LAV is correctly installed.