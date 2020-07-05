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

**비디오 배경화면 색상이 잘못된 경우, 너무 밝거나 어두운 경우, 확대되어 표시되는 경우, 픽셀화가 되는 경우 또는 배경화면 주변에 테두리가 있는 경우**, Nvidia, AMD 또는 Intel 그래픽 카드의 그래픽 제어판에서 비디오 옵션을 초기화하여 해결할 수 있습니다. 컴퓨터에 GPU가 여러 개이면(예: Nvidia의 메인 카드와 Intel의 보조 GPU) , 초기화하세요.

You can also reinstall the graphics card drivers and choose to reset all settings ("clean re-installation") to do this, this is possible with Nvidia's drivers, for example. That means you need to first uninstall your drivers and then re-install the latest drivers after your current drivers have been fully uninstalled. Some drivers offer a "Perform clean re-installation" option in the advanced section, be sure to enable that option to automatically clean any remnants of broken drivers. You can get the latest graphics card drivers from all big vendors here:

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx)
* [AMD Radeon](https://www.amd.com/suppor)
* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)

어떻게 해야할지 모르는 경우: 그래픽 카드의 최신 드라이버를 다운로드 후, DDU를 사용하여 그래픽 카드 드라이버를 삭제하고 모든 설정을 지우세요.

* [디스플레이 드라이버 제거 다운로드](https://www.guru3d.com/files-details/display-driver-uninstaller-download.html)

Afterwards, install the drivers you have just downloaded. 제대로 수행하면 문제를 확실히 해결할 수 있습니다.

::: tip If the colors are still wrong even after re-installing your graphics card drivers, you may have more than one GPU or you did not perform a "clean" re-installation. 일단 기존 그래픽 카드 드라이버를 모두 삭제하고, 모든 드라이버 설정을 제거했는지 확인하세요. ::