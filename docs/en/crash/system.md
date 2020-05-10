---
tags:
  - hardware
  - bsod
  - blue screen
---
# System crash / System Freeze
Wallpaper Engine alone cannot crash your system and it does not affect other programs. If you experience system crashes, system freezes, blue screens or other programs crashing while Wallpaper Engine is running, one of these things is likely the reason:

* Hardware required by Wallpaper Engine is broken.
* A driver for some hardware Wallpaper Engine needs is buggy or broken.
* Intrusive software is installed that messes with drivers or Windows while Wallpaper Engine is running.

Wallpaper Engine does not install any drivers, it does not replace system files and it does not perform anything dangerous or questionable that could lead to a system crash or crash another program.

Any bugs in Wallpaper Engine could only lead to a crash of Wallpaper Engine itself in the worst case, but no bug in Wallpaper Engine could crash your entire system or other programs. This is impossible, Microsoft has designed Windows this way and Wallpaper Engine adheres to this.

## Finding the cause of system crashes
Wallpaper Engine needs this from your PC: 3D acceleration, video acceleration, audio. You can try to isolate what is wrong with the PC by using different wallpaper types. For example, if you only have issues with 'video' type wallpapers, the issue might be coming from the video decoding hardware on your graphics card. It won't be used by Windows alone and most games don't use it, so you wouldn't experience issues with it in games.

If it's a blue screen you are getting, web-search the error code. There will be a lot of results on the web that may help since it is a global system problem.

Any kind of overlay and recording program can cause problems, that includes Geforce Experience, try removing all of that.

Try the scan tool which will check if any well known and confirmed conflicting application is running: [Click here](/debug/scantool.html).