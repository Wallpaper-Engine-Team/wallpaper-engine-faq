---
tags:
  - 锁屏
  - 登录屏幕
---

# Windows 锁屏上的 Wallpaper Engine

Windows 登录页面不应被更改，这是 Microsoft 的设计决策。 要对它进行更改，就必须以不安全且不稳定的方式破解 Windows。 也就是说，如果某个 Windows 更新修改了锁屏页面或应用崩溃，您将无法完全登录计算机。 该功能可能随时停止工作，进而导致不可预测的副作用。

如果 Microsoft 正式让这成为可能，或我们发现了一种安全的方法来将动态壁纸添加到 Windows 锁屏页面，我们就会实现这一功能。 目前没有已知的安全方法可以实现此目的。正因如此，Wallpaper Engine 无法在锁屏页面设置动态壁纸。

## 设置静态壁纸

但是，您仍然可以配置 Wallpaper Engine 以使用当前动态墙纸的快照覆盖静态锁屏图像。 为此，请在 Wallpaper Engine 设置的**常规**选项卡中启用**覆盖锁屏图像**选项。

## 屏幕保护程序功能

作为依赖锁屏的替代方法，我们建议将 Wallpaper Engine 设置为屏幕保护程序，并在 Windows 屏幕保护程序设置中启用**在恢复时显示登录屏幕**选项。 请参阅我们的屏幕保护程序指南，了解如何将 Wallpaper Engine 配置为屏幕保护程序：

* [使用 Wallpaper Engine 设置屏幕保护程序](/functionality/screensaver.html)