---
tags:
  - 颜色
  - 明亮
  - 黑暗
  - 缩放
  - 放大
  - 像素化
  - 边框
  - 伽玛
  - 质量
  - 错误
  - 难看
---

# 视频壁纸外观错误

与大多数视频播放器不同，Wallpaper Engine 针对视频使用硬件加速来获取最佳性能。 这意味着，显卡驱动程序可能会影响视频的外观。

**如果视频壁纸颜色错误、太亮或太暗、看似已放大、像素化或者壁纸周围存在边框**，对于 Nvidia、AMD 或 Intel 显卡，您可以通过在图形控制面板中重置视频选项来解决这些问题。 如果计算机具有多个 GPU（例如来自 Nvidia 的主显卡和来自 Intel 的辅助 GPU），请确保针对所有 GPU 重置视频选项。

为了解决这些问题，您还可以重新安装显卡驱动程序，然后选择重置所有设置（“全新安装”），举例来说，这对于 Nvidia 驱动程序是可行的。 这意味着，您需要先完全卸载当前的驱动程序，然后再重新安装最新版驱动程序。 有些驱动程序在“高级”部分提供“执行全新安装”的选项，请务必启用该选项，以自动清除损坏驱动程序的所有残留项。 您可以从以下所有大型供应商处获得最新版显卡驱动程序：

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx)
* [AMD Radeon](https://www.amd.com/support)
* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)

如果您不确定该怎么做：下载最新版显卡驱动程序，然后使用 DDU 卸载显卡驱动程序，并删除所有设置：

* [显示驱动程序卸载程序下载](https://www.guru3d.com/files-details/display-driver-uninstaller-download.html)

然后，安装刚刚下载的驱动程序。 如果操作正确，这肯定可以解决问题。

::: tip 如果在重新安装了显卡驱动程序以后，颜色依然不正确，那么您可能拥有多个 GPU，或者未执行“全新”安装。 请务必先卸载当前的所有显卡驱动程序，然后清除所有驱动程序设置。 :::