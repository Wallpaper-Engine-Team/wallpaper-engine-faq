---
tags:
  - 防毒
  - 顯示
---

# 看不見桌布

如果部分或所有桌布並未顯示，原因通常是防毒應用程式錯誤封鎖了 Wallpaper Engine。 如果您使用防毒應用程式，請設定為忽略 *wallpaper_engine* 安裝目錄以及所有重要的 Wallpaper Engine 可執行檔：

* *wallpaper_engine/wallpaper32.exe*
* *wallpaper_engine/wallpaper64.exe*
* *wallpaper_engine/launcher.exe*
* *wallpaper_engine/bin/webwallpaper32.exe*
* *wallpaper_engine/bin/ui32.exe*

::: tip
如果您安裝了防毒應用程式 (Windows Defender 除外)，很可能就是原因。 如果您試了幾次都無法解決此問題，請花些時間確認。
:::

## Windows 的高對比模式

如果您的 Windows 10 主題設定啟動**高對比模式**，且選擇**高對比白色**，Windows 將強制關閉 Wallpaper Engine 桌布。 嘗試變更您正在使用的 Windows 高對比主題，或是完全關閉高對比模式，此問題就會消失。

## Wallpapers disappearing / fading away in regular intervals

If your wallpapers keep disappearing for a brief moment, you likely have a slideshow configured as your Windows wallpaper. Open the Windows wallpaper settings and set a solid color or a static image as your regular Windows wallpaper, this will fix this problem.

## Conflicts with other desktop modification software

Wallpaper Engine works well with most desktop-modification applications. However, some applications such as StarDock DeskScapes also modify the Windows wallpaper and it is not possible to run both applications at the same time. If you use a similar application to Wallpaper Engine, you will need to decide on one which you want to continue to use.

### Fences

Generally, Wallpaper Engine works fine with *Fences*. However, **if you have Fences installed but have disabled it**, it will hide the wallpaper from Wallpaper Engine. You need to either enable or uninstall it completely.

If you are using Fences and your Wallpaper Engine wallpapers are not visible, ensure that you are using **Fences 3.13 or newer** to avoid these compatibility issues with Wallpaper Engine. Fences 3.13 and newer versions contain important compatibility fixes with Wallpaper Engine, so it is important that you ensure your Fences is up-to-date.

## Gray Wallpaper or missing textures on Windows 7

Make sure that the Windows 7 update **KB2533623** is installed. Either install it manually with that link or ensure that your Windows Update is working right and installing it by itself. You can download it manually from the Microsoft website, restart your system afterwards and the problem should go away:

* [KB2533623](https://support.microsoft.com/zh-tw/help/2533623/microsoft-security-advisory-insecure-library-loading-could-allow-remot)