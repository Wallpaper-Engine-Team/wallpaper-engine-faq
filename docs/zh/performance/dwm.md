# 配有集成和专用 GPU 的台式机性能不佳 (dwm.exe)

尽管安装了专用 GPU，但如果您在 BIOS 中启用台式电脑上的集成 GPU，您可能会遇到 *dwm.exe* 性能不佳和 CPU 使用率过高的问题。 如有可能，请不要启用集成 GPU，而要将显示器插入专用 GPU。 同时使用两个独立的图形解决方案将破坏桌面窗口管理器的硬件加速，请务必将所有显示器均插入主显卡。 这并非 Wallpaper Engine 中的错误或问题，但如果采用了并非所有显示器都插入主显卡的硬件设置，所有多显示器软件都会受到影响。

如果不具备 Nvidia Optimus 技术或类似的技术，Windows 就得把壁纸图像从一个 GPU 复制到另一个 GPU — 这一操作的速度非常缓慢。 事实上，两个 GPU 之间的任何共享操作都会因此受到影响，这与在两台显示器之间移动游戏窗口是一样的。

这一问题与专门为多 GPU 设置（例如 Nvidia Optimus 笔记本电脑或 SLI/Crossfire）构建的硬件无关。 它们具有物理解决方案，可让多 GPU 设置正常工作。

## Poor Performance using Secondary GPU on Desktop without Nvidia SLI / Nvidia Optimus / AMD CrossFire

Many users assume that switching Wallpaper Engine to a secondary GPU will increase the overall system performance. However, this is merely a common misconception and the overall system performance will actually degrade.

Wallpaper Engine creates wallpapers which are part of the desktop which means they are part of the Windows Explorer process. Therefore, Wallpaper Engine must use the same GPU as Windows Explorer. If this is not the case, then Windows has to force both GPUs to cooperate in order to render an image for your monitors. This has to be done by the processor which ultimately means the overall computer performance degrades significantly and often takes much more performance than the wallpapers themselves. Some proper multi-GPU technologies (Nvidia SLI, Nvidia Optimus, AMD CrossFire) solve this problem on a hardware-level but this is not applicable in cases where you use an Nvidia GPU and an Intel on-board graphics card, for example.

You can still change the GPU of your choice in your graphics card drivers or in your overall system settings, however we strongly advise against doing this as the outcome is not an increase in system performance.