- - -
标签：
  - ActiveMovie 窗口
  - Active Movie
  - 黑屏
- - -


# 视频黑屏/无法正常播放

*视频*类型的壁纸出现黑屏和其他问题，*通常*由显卡驱动程序故障或视频编解码器故障导致。 请按照完全相同的顺序，尝试执行以下步骤。 如果完全遵循本指南的指示，您就可以解决该问题：

::: 警告 请注意 本主题涉及到 Wallpaper Engine **壁纸**为黑色或无法正常播放的问题。 如果 **Wallpaper Engine 界面为黑色**，您需要访问此处：[Wallpaper Engine 用户界面为黑色](/interface/broken.html#wallpaper-engine-interface-is-black)。 :::

## 显卡驱动程序全新安装

对大多数用户而言，全新安装显卡驱动程序将解决与视频壁纸有关的大多数问题。 包括黑屏以及用户壁纸显示在单独的窗口中（标题为**“ActiveMovie 窗口”**）。

1. 为您的显卡下载最新版显卡驱动程序（如果您有两个显卡，例如 Nvidia 和 Intel，则要为二者均下载最新版驱动程序）：

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx)
* [AMD Radeon](https://www.amd.com/support)
* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)

2. 如果系统要求，请完全卸载当前的显卡驱动程序，并删除所有现有设置。 对于 Nvidia 驱动程序，您还可以选中显示“执行全新安装”的复选框。

如果不确定该如何执行此操作，您还可以使用[显示驱动程序卸载程序（“DDU”）](https://www.guru3d.com/files-details/display-driver-uninstaller-download.html)。

3. 安装您在第 1 步中刚刚下载的驱动程序。
4. 再次重新启动 PC，看看现在是否可以正常工作。

::: 提示 请您务必执行全新安装 — 这意味着，在安装新驱动程序之前，必须完全删除当前的显卡驱动程序和驱动程序设置，否则将无法正常工作。 :::

## 编解码器调整工具

如果执行显卡驱动程序的全新安装以后仍无法正常工作，请尝试重置视频编解码器：

* 下载编解码器调整工具：[单击此处](https://www.codecguide.com/download_other.htm)
* 请确保“Media Foundation”菜单中的所有复选框均**未**选中，然后应用该设置：

![Uncheck all options in the Media Foundation options](./codectweak.gif)

* 重新启动 PC，然后重试受到影响的壁纸。

## 其他视频编解码器

如果执行上述步骤以后，受到影响的视频壁纸仍无法正常工作，请下载 LAV，并按照本指南中的说明使用 DirectShow：

* [使用 LAV 和 DirectShow](/videos/lav.html)。