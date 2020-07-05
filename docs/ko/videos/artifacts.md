---
tags:
  - 색상
  - 밝음
  - 어두움
  - 확대/축소
  - 확대
  - 픽셀화
  - 테두리
  - 감마
  - 품질
  - wrong
  - ugly
---

# 비디오 배경화면이 이상해 보입니다

Wallpaper Engine은 대부분의 비디오 플레이어와는 다르게 비디오가 최적의 성능을 발휘하도록 하드웨어 가속을 사용합니다. 즉, 그래픽 카드 드라이버가 비디오가 보이는 방식에 영향을 줄 수 있습니다.

**If your video wallpapers have wrong colors, are too bright or too dark, appear zoomed-in, pixelated or if there is a border around the wallpaper**, you can fix this problem by resetting the video options in your graphics control panel for your Nvidia, AMD or Intel graphics card. If you have a computer with multiple GPUs (for example, the main card from Nvidia and the secondary GPU from Intel), make sure to reset it for all of them.

You can also reinstall the graphics card drivers and choose to reset all settings ("clean re-installation") to do this, this is possible with Nvidia's drivers, for example. That means you need to first uninstall your drivers and then re-install the latest drivers after your current drivers have been fully uninstalled. Some drivers offer a "Perform clean re-installation" option in the advanced section, be sure to enable that option to automatically clean any remnants of broken drivers. You can get the latest graphics card drivers from all big vendors here:

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx)
* [AMD Radeon](https://www.amd.com/support)
* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)

If you are uncertain what to do: Download the latest drivers for your graphics card, then use DDU to uninstall your graphics card drivers and delete all settings:

* [Display Driver Uninstaller Download](https://www.guru3d.com/files-details/display-driver-uninstaller-download.html)

Afterwards, install the drivers you have just downloaded. This will definitely fix the problem if done right.

::: tip If the colors are still wrong even after re-installing your graphics card drivers, you may have more than one GPU or you did not perform a "clean" re-installation. Make sure you first uninstall all your current graphics card drivers and clear up all driver settings. :::