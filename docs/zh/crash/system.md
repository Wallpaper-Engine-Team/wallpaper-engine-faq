---
tags:
  - 硬件
  - bsod
  - 蓝屏
---

# 系统崩溃/系统死机
单单 Wallpaper Engine 不会导致系统崩溃，也不会影响其他程序。 如果运行 Wallpaper Engine 时遇到系统崩溃、系统死机、蓝屏或其他程序崩溃，原因可能是以下之一：

* Wallpaper Engine 所需的硬件已损坏。
* Wallpaper Engine 所需硬件的驱动程序有错误或已损坏。
* Wallpaper Engine 运行时，安装了干扰驱动程序或 Windows 的侵入性软件。

Wallpaper Engine does not install any drivers, it does not replace system files and it does not perform anything dangerous or questionable that could lead to a system crash or crash another program.

Any bugs in Wallpaper Engine could only lead to a crash of Wallpaper Engine itself in the worst case, but no bug in Wallpaper Engine could crash your entire system or other programs. This is impossible, Microsoft has designed Windows this way and Wallpaper Engine adheres to this.

## Finding the cause of system crashes
Wallpaper Engine needs this from your PC: 3D acceleration, video acceleration, audio. You can try to isolate what is wrong with the PC by using different wallpaper types. For example, if you only have issues with 'video' type wallpapers, the issue might be coming from the video decoding hardware on your graphics card. It won't be used by Windows alone and most games don't use it, so you wouldn't experience issues with it in games.

If it's a blue screen you are getting, web-search the error code. There will be a lot of results on the web that may help since it is a global system problem.

Any kind of overlay and recording program can cause problems, that includes Geforce Experience, try removing all of that.

Try the scan tool which will check if any well known and confirmed conflicting application is running: [Click here](/debug/scantool.html).