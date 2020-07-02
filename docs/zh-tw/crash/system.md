---
tags:
  - 硬體
  - bsod
  - 藍色當機畫面
---

# 系統當機/系統凍結
Wallpaper Engine 本身不會導致系統當機，也不會影響其他程式。 如果 Wallpaper Engine 運作時系統當機、系統凍結、出現藍色當機畫面、其他程式當機，可能的原因如下：

* Wallpaper Engine 所需的硬體已損壞。
* A driver for some hardware Wallpaper Engine needs is buggy or broken.
* Intrusive software is installed that messes with drivers or Windows while Wallpaper Engine is running.

Wallpaper Engine does not install any drivers, it does not replace system files and it does not perform anything dangerous or questionable that could lead to a system crash or crash another program.

Any bugs in Wallpaper Engine could only lead to a crash of Wallpaper Engine itself in the worst case, but no bug in Wallpaper Engine could crash your entire system or other programs. This is impossible, Microsoft has designed Windows this way and Wallpaper Engine adheres to this.

## Finding the cause of system crashes
Wallpaper Engine needs this from your PC: 3D acceleration, video acceleration, audio. You can try to isolate what is wrong with the PC by using different wallpaper types. For example, if you only have issues with 'video' type wallpapers, the issue might be coming from the video decoding hardware on your graphics card. It won't be used by Windows alone and most games don't use it, so you wouldn't experience issues with it in games.

If it's a blue screen you are getting, web-search the error code. There will be a lot of results on the web that may help since it is a global system problem.

Any kind of overlay and recording program can cause problems, that includes Geforce Experience, try removing all of that.

Try the scan tool which will check if any well known and confirmed conflicting application is running: [Click here](/debug/scantool.html).