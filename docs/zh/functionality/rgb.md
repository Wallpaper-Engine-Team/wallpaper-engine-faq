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

## 休眠后 RGB 硬件出现问题

在极少数情况下，休眠可能会导致 RGB 硬件停止与 Wallpaper Engine 一起工作。 如果系统从休眠状态唤醒后，部分或全部 RGB 硬件无法正常工作，请尝试在 Wallpaper Engine 设置的**常规**选项卡中启用**休眠后安全启动**，这可以为大多数受影响的用户解决此类问题。

此外，您可以在 Wallpaper Engine 设置中，使用**插件**选项卡底部的**插件加载延迟**选项，延迟 Wallpaper Engine 与 RGB 硬件的连接尝试。 您可以尝试 **30 秒**的值，并测试是否解决了问题。

### Corsair

从 iCUE 4 开始，您需要先在 iCUE 设置中手动启用软件控制，否则 Wallpaper Engine 无法连接到 iCUE。 如果您在使用 Corsair iCUE 时遇到 RGB 照明问题，请务必先检查 iCUE 设置。

* 打开 iCUE。
* 单击右上角的“设置”图标。
* 单击设置窗口左侧菜单上的**软件和游戏**。
* 确保已启用*软件集成*选项。 检查**设备**选项卡以确保所有硬件设备也都启用了这种类型的 RGB 照明。

如果您的 Corsair 照明设置仍有问题，请尝试完全重新安装 Corsair iCUE 软件，然后重新启动计算机并重新安装。 通过重新安装 Corsair 软件套件，然后手动启用“软件集成”选项，可以解决许多问题。

请注意，iCUE 的使用为*独占模式*，这意味着，Wallpaper Engine 将优先于其他兼容 iCUE 的软件（例如游戏）。 如想让游戏为键盘赋予动画效果，请转到 Wallpaper Engine 设置的**性能**选项卡，然后将**其他应用程序全屏时**选项设置为**停止（释放内存）**，以便在游戏中阻止壁纸。 或者，您可以禁用 RGB 插件，或禁用个别壁纸的 RGB 选项。

如果需要 Corsair iCUE 硬件方面的支持，请直接联系 Corsair：

[help.corsair.com](https://help.corsair.com/)

如果您在 Corsair 的支持方面遇到任何问题，您还可以与我们联系，我们将尽力为您提供帮助。

### Razer

与 Razer RGB 硬件有关的大多数问题均可通过在 Wallpaper Engine 关闭时执行 Razer 软件套件的全新安装来解决：

1. 完全关闭 Wallpaper Engine。 这一点非常重要，请不要跳过此步骤。
2. 通过 Windows 卸载计算机上的所有 Razer 软件。
3. 重新下载并安装最新版本的 Razer Synapse 3。 **重要提示：**请务必同时在 Razer Synapse 中重新安装 **Chroma Connect** 模块。
4. 重新启动计算机，在重新启动 Windows 之前，请勿启动 Wallpaper Engine。

看看这种方法能否解决您的 RGB 硬件问题。 如果需要 Razer 硬件方面的更多支持，请直接联系 Razer：

[support.razer.com](https://support.razer.com/)

如果您在 Razer 的支持方面遇到任何问题，您还可以与我们联系，我们将尽力为您提供帮助。

#### Razer Synapse 2 和更早版本

我们仅支持 Razer Synapse 3 或更高的版本。 如果您使用 Razer Synapse 1 或 Razer Synapse 2，请确保将其完全卸载，然后升级到最新版本的 Razer Synapse。 过去，有些用户遇到了系统存在旧版 Razer Synapse 残留项的问题。 如果您安装了 Razer Synapse 2 或更旧的版本，而且遇到 RGB 照明问题，或甚至在启用 RGB 插件后遇到崩溃，您可能需要找到系统上旧版 Razer Synapse 的所有残留项，然后将其删除。

如果您的 Razer 硬件相对较旧，而且不支持 Razer Synapse 3 或更高的版本，那么很遗憾，其 RGB 照明与 Wallpaper Engine 不兼容。