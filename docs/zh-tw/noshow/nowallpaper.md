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

## 桌布消失/固定時間間隔不見

如果桌布一直短暫消失，可能設定為和 Windows 桌布一樣的幻燈片秀了。 開啟 Windows 桌布設定，將純色或圖片設定為一般的 Windows 桌布，即可解決此問題。

## 與其他桌面改造軟體衝突

Wallpaper Engine 可與大多數桌面改造應用程式安然並存。 但有些應用程式也能修改 Windows 桌布，例如 StarDock DeskScapes，此時兩個應用程式無法同時運作。 如果您使用類似 Wallpaper Engine 的應用程式，則必須決定使用哪個應用程式。

### Fences

一般而言，Wallpaper Engine 與 *Fences* 配合良好。 不過，**如果您安裝了 Fences 卻將其停用**，將使 Wallpaper Engine 中的桌布隱藏。 您必須啟用或完全解除安裝。

如果您正在使用 Fences 但看不見 Wallpaper Engine 桌布，確保您正在使用 **Fences 3.13 或更新版本**，避免與 Wallpaper Engine 出現相容性問題。 Fences 3.13 和更新版本包含重大的相容性更新，可與 Wallpaper Engine 相容，因此必須確保 Fences 為最新版本。

## 在 Windows 7 上桌布呈現灰色或缺少紋理

確保已安裝 Windows 7 的更新 **KB2533623**。 您可透過下方連結手動安裝，或確保 Windows Update 正常運作並可自動安裝更新。 您可從 Microsoft 網站手動下載該更新，之後重新啟動，此問題應該就能消失：

* [KB2533623](https://support.microsoft.com/zh-tw/help/2533623/microsoft-security-advisory-insecure-library-loading-could-allow-remot)