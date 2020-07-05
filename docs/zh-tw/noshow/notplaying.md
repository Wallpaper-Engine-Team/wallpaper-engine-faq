- - -
標籤：
  - activemovie 視窗
  - active movie
  - 黑色
- - -


# 視訊螢幕變黑/無法正常播放

*視訊*類型的桌布變黑或出現其他問題，*必定*是因為顯示卡驅動程式故障或視訊轉碼器故障。 請完全按照以下步驟嘗試解決。 如果由上至下完全遵循本指南的步驟，即可解決該問題：

::: 警告 請注意 本主題涉及 Wallpaper Engine **桌布**呈現黑色或無法正常運作的問題。 如果**Wallpaper Engine 介面變黑**，您必須參看此篇：[Wallpaper Engine 使用者介面呈現黑色](/interface/broken.html#wallpaper-engine-interface-is-black)。 :::

## 顯示卡驅動程式全新重新安裝

大部分的使用者如果全新重新安裝顯示卡驅動程式，即可解決大部分與視訊桌布有關的問題， 包括螢幕呈現黑色以及桌布單獨呈現在視窗中 (標題為 **「ActiveMovie Window」**)。

1. 下載最新的顯示卡驅動程式 (如果您有兩張顯示卡，例如 Nvidia 及 Intel，則皆須下載)：

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