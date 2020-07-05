- - -
태그:
  - 활성영화 창
  - 활성 영화
  - 검은색
- - -


# 비디오 검은 색 / 제대로 재생되지 않습니다

검은 화면 및 *비디오* 유형의 배경화면 관련 기타 문제는 *항상* 잘못된 그래픽 카드 드라이버나 비디오 코덱이 원인입니다. 다음 단계를 정확한 순서대로 따라하세요. 이 가이드를 처음부터 끝까지 따라하면 문제가 해결됩니다:

:: 경고 이 항목은 검은색이 되거나 제대로 재생되지 않는 Wallpaper Engine **배경화면**에 대한 내용입니다. **Wallpaper Engine 인터페이스가 검은색**이면, 여기를 확인하세요: [Wallpaper Engine 사용자 인터페이스가 검은색입니다](/interface/broken.html#wallpaper-engine-interface-is-black). :::

## 그래픽 카드 드라이버 완전히 새로 설치

대부분의 경우 그래픽 카드 드라이버를 새로 설치하면 비디오 배경화면 관련 문제 유형은 거의 다 해결할 수 있습니다. This includes black screens and users whose wallpapers are shown in a separate window (titled **"ActiveMovie Window"**).

1. Download the latest graphics card drivers for your graphics card (or all of them if you have two, for example Nvidia and Intel):

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx)
* [AMD Radeon](https://www.amd.com/support)
* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)

2. Uninstall your current graphics card drivers completely and delete all existing settings if asked. Nvidia drivers have a checkbox which says "Perform clean re-installation" which also works.

You can also use [Display Driver Uninstaller ("DDU")](https://www.guru3d.com/files-details/display-driver-uninstaller-download.html) if you are unsure on how to do that.

3. Install the drivers you have just downloaded in step 1.
4. Restart your PC again, see if it works now.

::: tip It's very important that you do a clean re-installation - this means your current graphics card drivers and driver settings have to be completely deleted before you install the new drivers, otherwise it will not work. :::

## Codec Tweak Tool

If it does not work after doing a clean re-installation of your graphics card drivers, try resetting your video codecs:

* Download the Codec Tweak Tool: [Click here](https://www.codecguide.com/download_other.htm)
* Make sure that all checkboxes in the "Media Foundation" menu are **not** checked, then apply the settings:

![Uncheck all options in the Media Foundation options](./codectweak.gif)

* Restart the PC and try the affected wallpapers again.

## Additional video codecs

If affected video wallpapers still do not work after the previous steps, download LAV and use DirectShow as described in this guide:

* [Using LAV and DirectShow](/videos/lav.html).