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

## Problems with RGB hardware after hibernation

In rare cases, hibernation may cause RGB hardware to stop working in combination with Wallpaper Engine. If some or all of your RGB hardware stops working correctly after your system wakes up from hibernation, try enabling the **Safe start after hibernation** option in the **General** tab of the Wallpaper Engine settings, this solves these types of issues for the majority of affected users.

Additionally, you can use the **Plugin load delay** option at the bottom of the **Plugins** tab of the Wallpaper Engine settings to delay the connection attempt that Wallpaper Engine makes to your RGB hardware. You can try a value of **30 seconds** and test if that fixes the problem for you.

### Corsair

Some hardware such as **Corsair system memory (RAM) have software controls disabled by default**, meaning that your memory modules will not light up according to Wallpaper Engine unless you allow this in the iCUE software settings. Make sure the "Enable full software control" option in your iCUE device settings in the memory section is selected:

![Enable full software control in iCUE](./icue.png)

Double-check this option for any other hardware parts which are not working properly.

Note that iCUE is used in *exclusive mode*, this means that Wallpaper Engine will take priority over other iCUE-compatible software such as games. If you want your games to animate your keyboard, go to the **Performance** tab of the Wallpaper Engine settings and set the **Other applications fullscreen** option to **Stop (free memory)** to stop wallpapers while in-game. Alternatively, disable either the RGB plugin or disable the RGB option on individual wallpapers.

For support with Corsair iCUE hardware, please contact Corsair directly:

[help.corsair.com](https://help.corsair.com/)

Should you run into any issues with Corsair's support, you can still reach out to us and we will see if we can help you.

### Razer

Most problems related to Razer RGB hardware can be fixed by doing a clean reinstallation of the Razer software suite while Wallpaper Engine is turned off:

1. 完全关闭 Wallpaper Engine。 这一点非常重要，请不要跳过此步骤。
2. 通过 Windows 卸载计算机上的所有 Razer 软件。
3. 重新下载并安装最新版本的 Razer Synapse 3。 **重要提示：**请务必同时在 Razer Synapse 中重新安装 **Chroma Connect** 模块。
4. 重新启动计算机，在重新启动 Windows 之前，请勿启动 Wallpaper Engine。

See if this resolves your issues with your RGB hardware. For additional support with Razer hardware, please contact Razer directly:

[support.razer.com](https://support.razer.com/)

Should you run into any issues with Razer's support, you can still reach out to us and we will see if we can help you.

#### Razer Synapse 2 和更早版本

We only support Razer Synapse 3 or newer. If you are using Razer Synapse 1 or Razer Synapse 2, make sure to fully uninstall them and upgrade to the latest version of Razer Synapse. In the past, some users had issues with remnants of old Razer Synapse having been left on their system. If you had Razer Synapse 2 or older installed and have issues with your RGB lighting or even experience crashes with the RGB plugin being enabled, you may need to find any leftovers of old Razer Synapse versions on your system and delete it.

If your Razer hardware is relatively old and does not support Razer Synapse 3 or newer, unfortunately its RGB lighting is not compatible with Wallpaper Engine.