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

::: 警告 請注意 本文涉及 Wallpaper Engine **介面**呈現黑色或損壞的問題。 如果您的**桌布呈現黑色**，請造訪：[黑色螢幕/視訊無法播放](/noshow/notplaying.html)。 :::

## Wallpaper Engine 瀏覽器呈現黑色或白色

對大多數人而言，這樣表示 Wallpaper Engine 使用者介面受到防毒應用程式錯誤封鎖。 請在防毒應用程式中設定例外，使其忽略 Wallpaper Engine，必須納入 wallpaper_engine 安裝目錄中的所有可執行檔，尤其是 **wallpaper_engine/bin/ui32.exe**。

在某些情況下，如果防毒應用程式已經永久封鎖某些重要的 Wallpaper Engine 檔案，則必須在之後驗證 Wallpaper Engine 檔案，甚至重新安裝 Wallpaper Engine 檔案：

* [Steam 支援：驗證應用程式檔案完整性](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

如果您已設定防毒應用程式並透過 Steam 驗證後，問題仍未解決，請重新透過 Steam 重新安裝 Wallpaper Engine。 如果防毒應用程式失控，甚至可能永久封鎖 Wallpaper Engine 使用的檔案路徑。 此時請先將防毒應用程式解除安裝，再將 Wallpaper Engine 安裝至其他目錄，您可為此在 Steam 中建立新的 Steam 遊戲收藏庫。

## Wallpaper Engine 介面出現綠色雜訊或白色線條

您的顯示卡驅動程式已損壞或設定錯誤。 請下載最新的顯示卡驅動程式 (即使您已經有最新的驅動程式)，並執行全新安裝。 您必須先將目前的驅動程式解除安裝，再安裝最新的驅動程式，確保移除所有損壞的檔案或設定。

如果問題仍存在，請關閉 Wallpaper Engine。 接著，使用 Steam 第三個啟動選項「停用 UI 硬體加速」，重新啟動 Wallpaper Engine。

### 罕見的 Steam 內嵌錯誤破壞 Wallpaper Engine 使用者介面

應用程式視窗呈現黑色，另一個可能的原因是罕見的 Steam 內嵌錯誤。 您可嘗試以下操作：

完全關閉 Wallpaper Engine (在通知區域的圖示上按一下滑鼠右鍵，接著選取「結束」)。 之後開啟 Steam，在 Wallpaper Engine 上按一下滑鼠右鍵，選取「內容」，接著停用「在遊戲時啟用 Steam 內嵌介面」選項。 停用此選項後，請透過 Steam 重新啟動 Wallpaper Engine。 