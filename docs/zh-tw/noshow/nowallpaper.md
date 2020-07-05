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

::: 提示 如果您安裝了防毒應用程式 (Windows Defender 除外)，很可能就是原因。 如果您試了幾次都無法解決此問題，請花些時間確認。 :::

## 與其他桌面改造軟體衝突

Wallpaper Engine 與大部分桌面改造應用程式安然並存。 但有些應用程式也能修改 Windows 桌布，例如 StarDock DeskScapes，因此兩個應用程式無法同時運作。 如果您使用 Wallpaper Engine 類似的應用程式，則必須決定使用哪個應用程式。

### Fences

一般而言，Wallpaper Engine 與 *Fences* 配合良好。 不過，**如果您安裝了 Fences 卻將其停用**，將會使 Wallpaper Engine 中的桌布隱藏。 您必須啟用或完全解除安裝。

## Gray Wallpaper or missing textures on Windows 7

Make sure that the Windows 7 update **KB2533623** is installed. Either install it manually with that link or ensure that your Windows Update is working right and installing it by itself. You can download it manually from the Microsoft website, restart your system afterwards and the problem should go away:

* [KB2533623](https://support.microsoft.com/en-us/help/2533623/microsoft-security-advisory-insecure-library-loading-could-allow-remot)