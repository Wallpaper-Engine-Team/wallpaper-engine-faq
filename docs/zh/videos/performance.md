# 视频冻结/卡顿/效果不佳

出现这种问题的原因可能是硬件不够强大，无法正确显示特定视频。 视频壁纸无法与标准的视频播放器相比，它还必须包含图标，并可能延伸到多个屏幕上。 默认情况下，它还使用 GPU 的视频解码器，以最大限度地降低 CPU 使用率。

## 后台录制挂钩
这还可能由旨在录制 ReLive、Shadow Play/Nvidia Share 或 Windows GameDVR 等应用程序的任何类型的驱动程序功能导致。 尝试禁用这些驱动程序功能，看看是否有效果，然后从这些功能中排除 Wallpaper Engine。 此外，还要确保没有任何其他录制/覆盖程序自行加载到 Wallpaper Engine 中，减缓渲染速度。

您可以尝试使用我们的扫描工具，来确定是否安装了任何具有已知录制挂钩的程序，但该工具无法捕获所有内容，尤其是像 Nvidia GeForce Experience 附带的常见录制挂钩这样的内容：

* [Wallpaper Engine 扫描工具](/debug/scantool.html)

## Dynamic Super Resolution (DSR) / GPU Scaling
Driver level hacks like GPU Scaling/DSR could cause issues as well, try disabling them and if that helps, disable them for Wallpaper Engine specifically.

## Bad performance in dwm.exe in systems with multiple GPUs / multiple screens
If you have enabled the integrated GPU on your desktop PC in the BIOS although a dedicated graphics card is installed, you can experience bad performance and high CPU usage of DWM.exe. If possible, do not enable your integrated GPU. **It's very important to plug all your monitors into your dedicated graphics card.** Using both GPUs at the same time will break hardware acceleration of the desktop window manager. Without Nvidia Optimus technology or similar, Windows will be forced to copy the wallpaper image from one GPU to the other - a slow operation. In fact any shared action between your GPUs will suffer from this, it is the same as moving a game window right between both monitors.

This specific issue does not affect hardware built for multi-GPU setups like laptops with Nvidia Optimus or proper Nvidia SLI / AMD Crossfire setups with a hardware bridge.