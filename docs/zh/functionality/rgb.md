---
tags:
  - 硬件
---

# RGB 硬件支持 (iCUE & Chroma)

Wallpaper Engine 支持 [**Razer Chroma**](https://www.razer.com/chroma) 和 [**Corsair iCUE**](https://www.corsair.com/icue) 生态系统，包括可以集成到二者之一中的系统。

## 如何启用/禁用 RGB 硬件

在 Wallpaper Engine 设置的“插件”部分中，您可以找到 **iCUE & Chroma SDK 插件**。 您可以通过选中左侧的复选框，来启用或禁用这个通用 RGB 插件的加载。 您还可以单击插件旁边的齿轮符号，进一步配置其各个部分。

此外，您可以针对每张壁纸关闭 RGB 支持。 如果启用了插件，您可以在每张壁纸属性列表的顶部，找到**启用 LED 特效**选项，该选项允许您控制是否要让单张壁纸控制 RGB 灯。

## RGB 硬件的颜色似乎太明亮

By default, we are boosting the RGB colors a bit. On most wallpapers, this tends to subjectively look better but if you do not like it, you can turn it off by disabling the **Boost LED colors** option in the settings of the RGB plugin.

## My RGB hardware does not work

Wallpaper Engine is not capable of directly communicating to your RGB hardware, all color information are sent to the RGB drivers first. If one or more pieces of hardware are not working, the issue must be on the software side of your hardware vendor. Some very old hardware is not fully supported anymore by these hardware vendors and will not work. Keep in mind that this is nothing we can fix on our end.

If the *Plugin* section of Wallpaper Engine settings is not visible at all to you, you are likely missing or have a broken installation of the *Visual C++ Redistributable for Visual Studio 2015* which is mandatory for these features to work. You can download this package from the Microsoft website and install it, this should fix the issue after a system restart:

* [Visual C++ Redistributable for Visual Studio 2015](https://www.microsoft.com/download/details.aspx?id=48145)

### Corsair

Some hardware such as **Corsair system memory (RAM) have software controls disabled by default**, meaning that your memory modules will not light up according to Wallpaper Engine unless you allow this in the iCUE software settings. Make sure the "Enable full software control" option in your iCUE device settings in the memory section is selected:

![Enable full software control in iCUE](./icue.png)

Double-check this option for any other hardware parts which are not working properly.

Note that iCUE is used in *exclusive mode*, this means that Wallpaper Engine will take priority over other iCUE-compatible software such as games. If you want your games to animate your keyboard, go to the **Performance** tab of the Wallpaper Engine settings and set the **Other applications fullscreen** option to **Stop (free memory)** to stop wallpapers while in-game. Alternatively, disable either the RGB plugin or disable the RGB option on individual wallpapers.

For support with Corsair iCUE hardware, please contact Corsair directly:

[help.corsair.com](https://help.corsair.com/)

Should you run into any issues with Corsair's support, you can still reach out to us and we will see if we can help you.

### Razer
We only support Razer Synapse 3 or newer. If you are using Razer Synapse 1 or Razer Synapse 2, make sure to fully uninstall them and upgrade to the latest version of Razer Synapse. In the past, some users had issues with remnants of old Razer Synapse having been left on their system. If you had Razer Synapse 2 or older installed and have issues with your RGB lighting or even experience crashes with the RGB plugin being enabled, you may need to find any leftovers of old Razer Synapse versions on your system and delete it.

If your Razer hardware is relatively old and does not support Razer Synapse 3 or newer, unfortunately its RGB lighting is not compatible with Wallpaper Engine.

For support with Razer hardware, please contact Razer directly:

[support.razer.com](https://support.razer.com/)

Should you run into any issues with Razer's support, you can still reach out to us and we will see if we can help you.