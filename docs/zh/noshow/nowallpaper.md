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

## 壁纸定期消失

如果壁纸总是消失一小段时间，您可能将幻灯片配置为了 Windows 壁纸。 打开 Windows 壁纸设置，将纯色或静态图像设置为常规 Windows 壁纸，这将解决此问题。

## 与其他桌面修改软件冲突

Wallpaper Engine 可与大多数桌面修改应用程序协调并存。 但有些应用程序（例如 StarDock DeskScapes）也可以修改 Windows 壁纸，因此无法同时运行这两个应用程序。 如果您使用与 Wallpaper Engine 类似的应用程序，那么您需要决定要继续使用的应用程序。

### Fences

一般来说，Wallpaper Engine 可以很好地与 *Fences* 配合使用。 但**如果您安装了 Fences 却将其禁用**，它将隐藏 Wallpaper Engine 中的壁纸。 您需要启用它，或将其完全卸载。

如果您使用 Fences 而且 Wallpaper Engine 壁纸不可见，请确保您使用的是 **Fences 3.13 或更高版本**，以避免这些与 Wallpaper Engine 间的兼容性问题。 Fences 3.13 和更高版本包含与 Wallpaper Engine 间的重要兼容性修复，因此请务必确保您的 Fences 是最新的。

## 壁纸在 Windows 7 系统上呈灰色或缺少纹理

请确保已安装 Windows 7 的更新 **KB2533623**。 您可以通过以下链接手动安装该更新，或者确保 Windows Update 正常运行并自动安装该更新。 从 Microsoft 网站手动下载该更新后，重新启动系统，问题应该可以消失：

* [KB2533623](https://support.microsoft.com/zh-cn/help/2533623/microsoft-security-advisory-insecure-library-loading-could-allow-remot)