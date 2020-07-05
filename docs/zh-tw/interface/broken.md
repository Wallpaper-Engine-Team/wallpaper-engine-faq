---
tags:
  - 使用者介面
  - 綠色
  - 白色
  - 像素化
  - 無法讀取
---

# Wallpaper Engine 視窗無法正確顯示

如果 Wallpaper Engine 瀏覽視窗無法正常運作，原因通常是顯示卡驅動程式或防毒應用程式出現問題。 詳情請見下文。

::: 警告 請注意 本文涉及 Wallpaper Engine **介面**為黑色或損壞的問題。 如果您的**桌布呈現黑色**，請造訪：[黑色螢幕/視訊無法播放](/noshow/notplaying.html)。 :::

## Wallpaper Engine 瀏覽器呈現黑色或白色

對大多數人而言，這樣表示 Wallpaper Engine 使用者介面受到防毒軟體錯誤封鎖。 請在防毒應用程式中設定例外，使其忽略 Wallpaper Engine，必須納入 wallpaper_engine 安裝目錄中的所有可執行檔，尤其是 **wallpaper_engine/bin/ui32.exe**。

在某些情況下，如果防毒軟體已經永久封鎖某些重要的 Wallpaper Engine 檔案，則必須在之後驗證 Wallpaper Engine 檔案，甚至重新安裝 Wallpaper Engine 檔案：

* [Steam 支援：驗證應用程式檔案完整性](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

如果您已設定防毒應用程式並透過 Steam 驗證後，問題仍未解決，請重新透過 Steam 重新安裝 Wallpaper Engine。 如果防毒應用程式失控，甚至可能永久封鎖 Wallpaper Engine 使用的檔案路徑。 此時請先將防毒應用程式解除安裝，再將 Wallpaper Engine 安裝至其他目錄，您可為此在 Steam 中建立新的 Steam 遊戲收藏庫。

## Wallpaper Engine interface with green artifacts or white lines

Your graphics card drivers are broken or misconfigured. Download the latest drivers for your graphics cards (even if you already have the latest drivers) and perform a clean re-installation of the drivers. Is is important that you first uninstall your current drivers and then install the latest drivers to ensure any broken files or settings are removed.

If the problem persists, turn off Wallpaper Engine. Then re-launch Wallpaper Engine using the third launch option in Steam labeled "disable UI hardware acceleration".

### Rare Steam Overlay Bug Breaking Wallpaper Engine User Interface

The other possible reason for a black application window is a rare Steam bug with the Steam overlay. You can try the following:

Turn off Wallpaper Engine completely (right-click on the tray icon and then select "Quit"). Afterwards, open up Steam, right-click on Wallpaper Engine, select "Properties" and then disable the "Enable Steam Overlay while in-game" option. After disabling the option, try to restart Wallpaper Engine via Steam. 