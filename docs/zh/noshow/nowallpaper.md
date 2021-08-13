---
tags:
  - 防病毒
  - 显示
---

# 壁纸不可见

如果部分或全部壁纸不显示，其原因通常是防病毒应用程序错误地阻止了 Wallpaper Engine。 如果您使用防病毒应用程序，请务必对其进行配置，使其忽略 *wallpaper_engine* 安装目录以及 Wallpaper Engine 所有重要的可执行文件：

* *wallpaper_engine/wallpaper32.exe*
* *wallpaper_engine/wallpaper64.exe*
* *wallpaper_engine/launcher.exe*
* *wallpaper_engine/bin/webwallpaper32.exe*
* *wallpaper_engine/bin/ui32.exe*

::: tip
如果您安装了防病毒应用程序（Windows Defender 除外），那么这很可能是造成问题的原因。 如果您的前几次尝试未能解决此问题，请花些时间深入调查。
:::

## Windows 中的高对比度模式

如果您在 Windows 10 主题设置中启用了**高对比度模式**并选择了**高对比度白色**主题，Windows 将强行关闭 Wallpaper Engine 的壁纸。 尝试在 Windows 的高对比度设置中更换您正在使用的高对比度主题，或者完全关闭高对比度模式，问题就会消失。

## Wallpapers disappearing / fading away in regular intervals

If your wallpapers keep disappearing for a brief moment, you likely have a slideshow configured as your Windows wallpaper. Open the Windows wallpaper settings and set a solid color or a static image as your regular Windows wallpaper, this will fix this problem.

## Conflicts with other desktop modification software

Wallpaper Engine works well with most desktop-modification applications. However, some applications such as StarDock DeskScapes also modify the Windows wallpaper and it is not possible to run both applications at the same time. If you use a similar application to Wallpaper Engine, you will need to decide on one which you want to continue to use.

### Fences

Generally, Wallpaper Engine works fine with *Fences*. However, **if you have Fences installed but have disabled it**, it will hide the wallpaper from Wallpaper Engine. You need to either enable or uninstall it completely.

If you are using Fences and your Wallpaper Engine wallpapers are not visible, ensure that you are using **Fences 3.13 or newer** to avoid these compatibility issues with Wallpaper Engine. Fences 3.13 and newer versions contain important compatibility fixes with Wallpaper Engine, so it is important that you ensure your Fences is up-to-date.

## Gray Wallpaper or missing textures on Windows 7

Make sure that the Windows 7 update **KB2533623** is installed. Either install it manually with that link or ensure that your Windows Update is working right and installing it by itself. You can download it manually from the Microsoft website, restart your system afterwards and the problem should go away:

* [KB2533623](https://support.microsoft.com/zh-cn/help/2533623/microsoft-security-advisory-insecure-library-loading-could-allow-remot)