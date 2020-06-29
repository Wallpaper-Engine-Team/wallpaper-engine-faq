# 视频冻结/卡顿/效果不佳

出现这种问题的原因可能是硬件不够强大，无法正确显示特定视频。 视频壁纸无法与标准的视频播放器相比，它还必须包含图标，并可能延伸到多个屏幕上。 默认情况下，它还使用 GPU 的视频解码器，以最大限度地降低 CPU 使用率。

## Background recording hooks
It could also come from any kind of driver features to record applications like ReLive, Shadow Play/Nvidia Share or Windows GameDVR. Try disabling them and see if it makes a difference, then exclude Wallpaper Engine from them. Also make sure no other recording/overlay programs load themselves into Wallpaper Engine and slow down rendering.

You can try to use our scan tool to determine if any programs with know recording hooks are installed but it does not catch everything, especially common recording hooks like the ones coming with Nvidia GeForce Experience:

* [Wallpaper Engine Scan Tool](/debug/scantool.html)

## Dynamic Super Resolution (DSR) / GPU Scaling
Driver level hacks like GPU Scaling/DSR could cause issues as well, try disabling them and if that helps, disable them for Wallpaper Engine specifically.

## Bad performance in dwm.exe in systems with multiple GPUs / multiple screens
If you have enabled the integrated GPU on your desktop PC in the BIOS although a dedicated graphics card is installed, you can experience bad performance and high CPU usage of DWM.exe. If possible, do not enable your integrated GPU. **It's very important to plug all your monitors into your dedicated graphics card.** Using both GPUs at the same time will break hardware acceleration of the desktop window manager. Without Nvidia Optimus technology or similar, Windows will be forced to copy the wallpaper image from one GPU to the other - a slow operation. In fact any shared action between your GPUs will suffer from this, it is the same as moving a game window right between both monitors.

This specific issue does not affect hardware built for multi-GPU setups like laptops with Nvidia Optimus or proper Nvidia SLI / AMD Crossfire setups with a hardware bridge.