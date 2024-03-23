---
tags:
  - 锁屏
  - 登录屏幕
---

# Windows 锁屏上的 Wallpaper Engine

The login screen is very secure and not accessible by normal means. Only dangerous Windows hacks may accomplish this by patching or hooking into the login screen process. Due to this, you could get permanently locked out of your PC when an error occurs or a Windows update changes the lockscreen structure in an unexpected way.

If a safe method is made public or reverse-engineered by us, we will implement this feature. Currently there are no known safe ways to accomplish this, which is why live wallpapers cannot be set on the lockscreen.

但是，您仍然可以配置 Wallpaper Engine 以使用当前动态墙纸的快照覆盖静态锁屏图像。 为此，请在 Wallpaper Engine 设置的**常规**选项卡中启用**覆盖锁屏图像**选项。

## 屏幕保护程序功能

作为依赖锁屏的替代方法，我们建议将 Wallpaper Engine 设置为屏幕保护程序，并在 Windows 屏幕保护程序设置中启用**在恢复时显示登录屏幕**选项。 请参阅我们的屏幕保护程序指南，了解如何将 Wallpaper Engine 配置为屏幕保护程序：

* [使用 Wallpaper Engine 设置屏幕保护程序](/functionality/screensaver.html)