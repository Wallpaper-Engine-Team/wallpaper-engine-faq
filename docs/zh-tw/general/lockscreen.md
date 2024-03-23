---
tags:
  - 鎖定畫面
  - 登入畫面
---

# Windows 鎖定畫面設定為 Wallpaper Engine 桌布

The Windows login screen is not meant to be modified as a design decision by Microsoft. Making changes to it essentially requires hacking Windows in an unsafe and unstable manner. This means that if a Windows update modifies the lock screen or if the app crashes, you would be unable to login to your computer entirely. The feature could potentially stop working at any time, causing unpredictable side effects.

If Microsoft officially makes this possible or if we discover a safe way to add live wallpapers to the Windows lock screen, we will implement this feature. Currently, there are no known safe ways to accomplish this, which is why live wallpapers cannot be set on the lock screen by Wallpaper Engine.

## Setting a static wallpaper

然而，您仍可設定 Wallpaper Engine 以使用目前動態桌布的快照來覆寫靜態鎖定畫面圖像。 請至 Wallpaper Engine 設定的**一般**分頁啟用**覆寫鎖定畫面圖像**選項。

## 螢幕保護程式功能

若不需要鎖定畫面，建議可將 Wallpaper Engine 設定為螢幕保護程式，並在螢幕保護程式設定頁面中勾選**繼續執行後，顯示登入畫面**。 請見我們的螢幕保護程式指南，了解如何將 Wallpaper Engine 設定為螢幕保護程式：

* [Wallpaper Engine 螢幕保護程式](/functionality/screensaver.html)