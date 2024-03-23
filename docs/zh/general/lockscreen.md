---
tags:
  - 锁屏
  - 登录屏幕
---

# Windows 锁屏上的 Wallpaper Engine

The Windows login screen is not meant to be modified as a design decision by Microsoft. Making changes to it essentially requires hacking Windows in an unsafe and unstable manner. This means that if a Windows update modifies the lock screen or if the app crashes, you would be unable to login to your computer entirely. The feature could potentially stop working at any time, causing unpredictable side effects.

If Microsoft officially makes this possible or if we discover a safe way to add live wallpapers to the Windows lock screen, we will implement this feature. Currently, there are no known safe ways to accomplish this, which is why live wallpapers cannot be set on the lock screen by Wallpaper Engine.

## Setting a static wallpaper

但是，您仍然可以配置 Wallpaper Engine 以使用当前动态墙纸的快照覆盖静态锁屏图像。 为此，请在 Wallpaper Engine 设置的**常规**选项卡中启用**覆盖锁屏图像**选项。

## 屏幕保护程序功能

作为依赖锁屏的替代方法，我们建议将 Wallpaper Engine 设置为屏幕保护程序，并在 Windows 屏幕保护程序设置中启用**在恢复时显示登录屏幕**选项。 请参阅我们的屏幕保护程序指南，了解如何将 Wallpaper Engine 配置为屏幕保护程序：

* [使用 Wallpaper Engine 设置屏幕保护程序](/functionality/screensaver.html)