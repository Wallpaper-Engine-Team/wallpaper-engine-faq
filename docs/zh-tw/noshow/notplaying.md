- - -
標籤：
  - activemovie 視窗
  - active movie
  - 黑色
- - -


# 視訊螢幕呈現黑色/無法正常播放

*視訊*類型的桌布呈現黑色或出現其他問題，*必定*是因為顯示卡驅動程式或視訊轉碼器故障。 請完全按照以下步驟嘗試解決。 如果由上至下完全遵循本指南的步驟，即可解決該問題：

::: 警告 請注意 本主題涉及 Wallpaper Engine **桌布**呈現黑色或無法正常運作的問題。 如果 **Wallpaper Engine 介面變成黑色**，您必須參看此篇：[Wallpaper Engine 使用者介面呈現黑色](/interface/broken.html#wallpaper-engine-interface-is-black)。 :::

## 顯示卡驅動程式全新安裝

大部分的使用者如果全新安裝顯示卡驅動程式，即可解決大部分與視訊桌布有關的問題， 包括螢幕呈現黑色以及桌布單獨呈現在視窗中 (標題為 **「ActiveMovie Window」**)。

1. 下載最新的顯示卡驅動程式 (如果您有兩張顯示卡，例如 Nvidia 及 Intel，則皆須下載)：

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx)
* [AMD Radeon](https://www.amd.com/support)
* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)

2. 完全解除安裝目前所有的顯示卡驅動程式，若出現系統提示也應刪除所有現有設定。 Nvidia 驅動程式中有個核取方塊是「執行全新安裝」。

如果您還不確定該如何執行，可以使用 [Display Driver Uninstaller ("DDU")](https://www.guru3d.com/files-details/display-driver-uninstaller-download.html)。

3. 安裝您在步驟 1 下載的驅動程式。
4. 重新啟動電腦，確認是否可正常運作。

::: tip 請務必執行全新安裝：您必須完全刪除目前的顯示卡驅動程式與驅動程式設定，才能安裝新的驅動程式，否則將無法正常運作。 :::

## Codec Tweak Tool (轉碼器調整工具)

如果您的顯示卡驅動程式全新安裝後仍無法正常運作，請重新設定視訊轉碼器：

* 下載 Codec Tweak Tool：[點選這裡](https://www.codecguide.com/download_other.htm)
* 確保「Media Foundation」選單中所有核取方塊**均未**勾選，然後套用此設定：

![取消勾選 Media Foundation 選單中所有選項](./codectweak.gif)

* 重新啟動電腦，重試受影響的桌布。

## 其他視訊轉碼器

如果執行上述步驟以後，受影響的桌布仍無法正常運作，請下載 LAV，並按照本指南的說明使用 DirectShow：

* [使用 LAV 與 DirectShow](/videos/lav.html)。