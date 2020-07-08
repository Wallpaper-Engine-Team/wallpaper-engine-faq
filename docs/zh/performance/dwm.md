# 配有集成和专用 GPU 的台式机性能不佳 (dwm.exe)

尽管安装了专用 GPU，但如果您在 BIOS 中启用台式电脑上的集成 GPU，您可能会遇到 *dwm.exe* 性能不佳和 CPU 使用率过高的问题。 如有可能，请不要启用集成 GPU，而要将显示器插入专用 GPU。 同时使用两个独立的图形解决方案将破坏桌面窗口管理器的硬件加速，请务必将所有显示器均插入主显卡。 这并非 Wallpaper Engine 中的错误或问题，但如果采用了并非所有显示器都插入主显卡的硬件设置，所有多显示器软件都会受到影响。

如果不具备 Nvidia Optimus 技术或类似的技术，Windows 就得把壁纸图像从一个 GPU 复制到另一个 GPU — 这一操作的速度非常缓慢。 事实上，两个 GPU 之间的任何共享操作都会因此受到影响，这与在两台显示器之间移动游戏窗口是一样的。

这一问题与专门为多 GPU 设置（例如 Nvidia Optimus 笔记本电脑或 SLI/Crossfire）构建的硬件无关。 它们具有物理解决方案，可让多 GPU 设置正常工作。

## 使用不具备 Nvidia SLI/Nvidia Optimus/AMD CrossFire 技术的台式机的辅助 GPU 性能不佳

许多用户都认为，将 Wallpaper Engine 切换到辅助 GPU 会提高整体系统性能。 但这只是个常见的误解，整体系统性能实际上会下降。

Wallpaper Engine 创建的壁纸是桌面的一部分，这意味着它们也是 Windows 资源管理器进程的一部分。 因此，Wallpaper Engine 必须使用与 Windows 资源管理器相同的 GPU。 否则，Windows 将不得不强制两个 GPU 合作为显示器渲染图像。 此操作必须由处理器完成，这最终意味着整体计算机性能将大幅下降，而且往往要耗费比壁纸本身多很多的性能。 某些适当的多 GPU 技术（Nvidia SLI、Nvidia Optimus、AMD CrossFire）可在硬件级别解决此问题，但在某些情况下并不适用，例如在使用 Nvidia GPU 和 Intel 板载显卡的情况下。

您仍然可以在显卡驱动程序或整体系统设置中，更改您选择的 GPU，但我们强烈建议您不要这样做，因为这并不会提高系统性能。