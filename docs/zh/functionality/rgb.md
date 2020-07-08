---
tags:
  - 硬件
---

# RGB 硬件支持（iCUE 和 Chroma）

Wallpaper Engine 支持 [**Razer Chroma**](https://www.razer.com/chroma) 和 [**Corsair iCUE**](https://www.corsair.com/icue) 生态系统，包括可以集成到二者之一中的系统。

## 如何启用/禁用 RGB 硬件

在 Wallpaper Engine 设置的“插件”部分中，您可以找到 **iCUE 和 Chroma SDK 插件**。 您可以通过选中左侧的复选框，来启用或禁用这个通用 RGB 插件的加载。 您还可以单击插件旁边的齿轮符号，进一步配置其各个部分。

此外，您可以针对每张壁纸关闭 RGB 支持。 如果启用了插件，您可以在每张壁纸属性列表的顶部，找到**启用 LED 特效**选项，该选项允许您控制是否要让单张壁纸控制 RGB 灯。

## RGB 硬件的颜色似乎太明亮

默认情况下，我们会稍微增强 RGB 颜色。 对于大多数壁纸，这通常会带来主观上更好的视觉效果，但如果您不喜欢，也可以在 RGB 插件设置中，禁用**增强 LED 颜色**的选项。

## RGB 硬件无法正常工作

Wallpaper Engine 无法直接与 RGB 硬件通信，所有颜色信息都要先发送到 RGB 驱动程序。 如果一个或多个硬件无法正常工作，那么问题肯定出在硬件供应商的软件上。 某些非常旧的硬件不再受到硬件供应商的全面支持，因而无法正常工作。 请记住，我们对此无能为力。

如果 Wallpaper Engine 设置的*插件*部分对您完全不可见，则您很可能未安装 *Visual C++ Redistributable for Visual Studio 2015* 或安装已损坏，而您必须安装该程序包才能让这些功能正常工作。 您可以从 Microsoft 网站下载此程序包并安装，这应该可以在系统重新启动后解决此问题：

* [Visual C++ Redistributable for Visual Studio 2015](https://www.microsoft.com/download/details.aspx?id=48145)

### Corsair

某些硬件，例如 **Corsair 系统内存 (RAM)，默认禁用软件控制**，这意味着，除非您在 iCUE 软件设置中允许，否则内存模块不会根据 Wallpaper Engine 而点亮。 请确保已在内存部分的 iCUE 设备设置中，选择了“启用完全软件控制”选项：

![在 iCUE 中启用完全软件控制](./icue.png)

仔细检查此选项，查看是否有任何其他硬件部件无法正常工作。

请注意，iCUE 的使用为*独占模式*，这意味着，Wallpaper Engine 将优先于其他兼容 iCUE 的软件（例如游戏）。 如想让游戏为键盘赋予动画效果，请转到 Wallpaper Engine 设置的**性能**选项卡，然后将**其他应用程序全屏时**选项设置为**停止（释放内存）**，以便在游戏中阻止壁纸。 或者，您可以禁用 RGB 插件，或禁用个别壁纸的 RGB 选项。

如果需要 Corsair iCUE 硬件方面的支持，请直接联系 Corsair：

[help.corsair.com](https://help.corsair.com/)

如果您在 Corsair 的支持方面遇到任何问题，您还可以与我们联系，我们将尽力为您提供帮助。

### Razer
我们仅支持 Razer Synapse 3 或更高的版本。 如果您使用 Razer Synapse 1 或 Razer Synapse 2，请确保将其完全卸载，然后升级到最新版本的 Razer Synapse。 过去，有些用户遇到了系统存在旧版 Razer Synapse 残留项的问题。 如果您安装了 Razer Synapse 2 或更旧的版本，而且遇到 RGB 照明问题，或甚至在启用 RGB 插件后遇到崩溃，您可能需要找到系统上旧版 Razer Synapse 的所有残留项，然后将其删除。

如果您的 Razer 硬件相对较旧，而且不支持 Razer Synapse 3 或更高的版本，那么很遗憾，其 RGB 照明与 Wallpaper Engine 不兼容。

如果需要 Razer 硬件方面的支持，请直接联系 Razer：

[support.razer.com](https://support.razer.com/)

如果您在 Razer 的支持方面遇到任何问题，您还可以与我们联系，我们将尽力为您提供帮助。