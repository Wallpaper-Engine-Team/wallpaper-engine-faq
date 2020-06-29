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

**如果视频壁纸颜色错误、太亮或太暗、看似已放大、像素化或者壁纸周围存在边框**，对于 Nvidia、AMD 或 Intel 显卡，您可以通过在图形控制面板中重置视频选项来解决这些问题。 If you have a computer with multiple GPUs (for example, the main card from Nvidia and the secondary GPU from Intel), make sure to reset it for all of them.

You can also reinstall the graphics card drivers and choose to reset all settings ("clean re-installation") to do this, this is possible with Nvidia's drivers, for example. That means you need to first uninstall your drivers and then re-install the latest drivers after your current drivers have been fully uninstalled. Some drivers offer a "Perform clean re-installation" option in the advanced section, be sure to enable that option to automatically clean any remnants of broken drivers. You can get the latest graphics card drivers from all big vendors here:

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx)
* [AMD Radeon](https://www.amd.com/support)
* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)

If you are uncertain what to do: Download the latest drivers for your graphics card, then use DDU to uninstall your graphics card drivers and delete all settings:

* [Display Driver Uninstaller Download](https://www.guru3d.com/files-details/display-driver-uninstaller-download.html)

Afterwards, install the drivers you have just downloaded. This will definitely fix the problem if done right.

::: tip If the colors are still wrong even after re-installing your graphics card drivers, you may have more than one GPU or you did not perform a "clean" re-installation. Make sure you first uninstall all your current graphics card drivers and clear up all driver settings. :::