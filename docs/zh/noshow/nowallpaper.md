---
tags:
  - 防病毒
  - 显示
---

# 壁纸不可见

如果部分或全部墙纸不显示，其原因通常是防病毒应用程序错误地阻止了 Wallpaper Engine。 如果您使用防病毒应用程序，请务必对其进行配置，使其忽略 *wallpaper_engine* 安装目录以及 Wallpaper Engine 所有重要的可执行文件：

* *wallpaper_engine/wallpaper32.exe*
* *wallpaper_engine/wallpaper64.exe*
* *wallpaper_engine/launcher.exe*
* *wallpaper_engine/bin/webwallpaper32.exe*
* *wallpaper_engine/bin/ui32.exe*

::: 提示 如果您安装了防病毒应用程序（Windows Defender 除外），那么这很可能是造成问题的原因。 如果您的前几次尝试未能解决此问题，请花些时间深入调查。 :::

## 与其他桌面修改软件冲突

Wallpaper Engine 可与大多数桌面修改应用程序协调并存。 但有些应用程序（例如 StarDock DeskScapes）也可以修改 Windows 壁纸，因此无法同时运行这两个应用程序。 如果您使用与 Wallpaper Engine 类似的应用程序，那么您需要决定要继续使用的应用程序。

### Fences

Generally, Wallpaper Engine works fine with *Fences*. However, **if you have Fences installed but have disabled it**, it will hide the wallpaper from Wallpaper Engine. You need to either enable or uninstall it completely.

## Gray Wallpaper or missing textures on Windows 7

Make sure that the Windows 7 update **KB2533623** is installed. Either install it manually with that link or ensure that your Windows Update is working right and installing it by itself. You can download it manually from the Microsoft website, restart your system afterwards and the problem should go away:

* [KB2533623](https://support.microsoft.com/en-us/help/2533623/microsoft-security-advisory-insecure-library-loading-could-allow-remot)