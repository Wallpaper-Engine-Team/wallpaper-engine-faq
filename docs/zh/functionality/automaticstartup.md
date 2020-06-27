---
tags:
  - 自动启动
  - 启动
---

# 开机时自动启动

您可以通过以下方法，让 Wallpaper Engine 在开机时启动：转到 Wallpaper Engine 设置，然后导航到“常规”选项卡。 您可以启用顶部的自动启动选项，这会使该应用程序在系统每次启动时于后台安静地启动。

## “高优先级”和“普通”启动选项之间有什么区别？

如果选择高优先级选项，Wallpaper Engine 将注册 Windows 服务。 这意味着，Wallpaper Engine 的启动将早于已配置为 Windows 启动时自动启动的其他程序。 此选项不会以任何其他方式影响该应用程序的性能。

使用这个高优先级选项的弊端是可靠性较差，这主要是因为某些防病毒软件会反应过度，阻止 Wallpaper Engine 在这种模式下启动，因为它们误认为这属于恶意行为。

## 自动启动功能启用后无法正常工作，该怎么办？

如果使用了*高优先级*选项，请尝试禁用高优先级选项，以切换到*普通*自动启动。 如上所述，高优先级模式的启动速度较快，但由于各种原因，其可靠性较差，这主要是因为该模式有时会被防病毒软件阻止。

如果使用了普通优先级选项，而该应用程序未与 Windows 一起启动，请尝试将该选项更改为高优先级，然后查看问题是否消失。

如果高优先级或普通优先级选项都不起作用，请检查系统上安装的防病毒软件。 某些防病毒和防火墙应用程序有时会阻止 Wallpaper Engine 在开机时自动启动。 您的防病毒软件可能具有允许忽略某些文件夹或应用程序的“白名单”功能，请务必将 wallpaper_engine 安装目录和其中的所有可执行文件列入白名单。

另一个罕见的原因可能是，如果您（或系统上的应用程序）将 Wallpaper Engine 的 .exe 文件设置为仅以管理员身份运行，那么它也无法自动启动，您需要删除管理员设置，关闭自动启动功能，然后再将其重新打开。

If the automatic startup does not work, the answer virtually always is somehow related to overzealous antivirus software. If you have antivirus or firewall applications installed, please double-check all their settings and security levels.

## Wallpaper Engine starts with Windows but (some) wallpapers are not shown

 Check if the Wallpaper Engine icon is visible in the Windows tray next to the clock after you start your computer. If the icon is there after your system starts but either some or none of your monitors have their respective wallpapers shown, there is a problem with your graphics card drivers. Essentially, your graphics card drivers keep assigning your monitors new identifiers which leads Wallpaper Engine to believe that you are trying to configure a new monitor. You can fix this by changing the *"Monitor identification"* option in the *General* tab of the Wallpaper Engine settings to *Layout* or *GDI*. We also recommend that you do a clean re-installation of your graphics card drivers in this case, as it's an indicator for an underlying problem with your Windows installation.

 ## Wallpaper Engine assigns wrong wallpapers at system start-up

 This is the same problem as in the previous section, if you have multiple monitors and the wallpapers are being assigned to the wrong monitor at start-up, try changing the *Monitor identification* option in the *General* tab of the Wallpaper Engine settings to *Layout* or *GDI*.