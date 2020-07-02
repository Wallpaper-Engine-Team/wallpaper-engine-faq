---
tags:
  - 硬體
  - bsod
  - 藍色當機畫面
---

# 系統當機/系統凍結
Wallpaper Engine 本身不會導致系統當機，也不會影響其他程式。 如果 Wallpaper Engine 運作時系統當機、系統凍結、出現藍色當機畫面、其他程式當機，可能的原因如下：

* Wallpaper Engine 所需的硬體已損壞。
* Wallpaper Engine 所需硬體的驅動程式有錯誤或已損壞。
* Wallpaper Engine 運作時，安裝的侵入性軟體干擾驅動程式或 Windows。

Wallpaper Engine 不需要安裝任何驅動程式，不會取代系統檔案，也不會執行危險或可疑的操作而可能導致系統或其他程式當機。

即使在最糟糕的情況下，Wallpaper Engine 的任何錯誤也只會造成 Wallpaper Engine 本身當機，不會造成整個系統或其他程式當機。 Wallpaper Engine 遵循 Microsoft 設計 Windows 的原則，避免一程式造成整個系統或其他程式當機。

## 尋找系統當機的原因
Wallpaper Engine needs this from your PC: 3D acceleration, video acceleration, audio. You can try to isolate what is wrong with the PC by using different wallpaper types. For example, if you only have issues with 'video' type wallpapers, the issue might be coming from the video decoding hardware on your graphics card. It won't be used by Windows alone and most games don't use it, so you wouldn't experience issues with it in games.

If it's a blue screen you are getting, web-search the error code. There will be a lot of results on the web that may help since it is a global system problem.

Any kind of overlay and recording program can cause problems, that includes Geforce Experience, try removing all of that.

Try the scan tool which will check if any well known and confirmed conflicting application is running: [Click here](/debug/scantool.html).