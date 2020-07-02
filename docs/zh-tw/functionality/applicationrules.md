---
tags:
  - 應用程式
  - 規則
  - 例外
  - 白名單
  - 黑名單
  - 延隔
  - 反應慢
  - 遊戲
  - 效能
  - fps
  - 當機
  - 聲音
  - 音訊
  - 斷斷續續
---

# 修復特定應用程式或遊戲的問題

如果特定應用程式或遊戲出現問題，您可將 Wallpaper Engine 設定為某種行為，例如，一旦偵測到有問題的應用程式已啟動或正在播放音訊時，便以某種方式執行工作。

## 設定應用程式規則

在 Wallpaper Engine 設定中的*效能*分頁，點選*應用程式規則*標籤旁邊的*編輯*按鈕，將可顯示您已設定的所有自訂規則。 點選*建立新規則*，即可為特定應用程式設定 Wallpaper Engine 的特殊行為。

![Application Rules Overview](./applicationrule.gif)

此時將顯示系統上所有正在運作的 .exe 檔案。 從列表中選取一個 .exe 檔案，或輸入有問題的 .exe 檔案具有的確切名稱。 您可使用其他兩種方式設定條件與行為。 請參閱下方內容，了解詳細資訊與具體實例。

::: 提示 Wallpaper Engine 僅在意確切的 .exe 名稱，位置則無關緊要，所以您只需要在*應用程式名稱*欄位輸入任何 .exe 即可。 務必確保.exe 名稱完全正確，包括大寫與小寫字母。 :::

### 修復應用程式或遊戲的效能問題

從列表中選取您希望設定特殊規則的程式 .exe 檔案，或在**應用程式名稱**欄位輸入該 .exe 檔案名稱。 接著，將**條件**設定為**運作時**，並將 **Wallpaper playback** 設定為 **停止 (釋放記憶體)**。 如此一來，Wallpaper Engine 將在應用程式或遊戲啟動時，完全移除記憶體中所有桌布，進而解決所有相容性問題。

### 修復背景錄製工具遇到聲音斷斷續續的問題

Select the .exe of the program you want to have a special rule for from the list or type it into the **Application name** field. Afterwards, set **Condition** to **Is playing audio** and **Wallpaper playback** to **Keep running**. This means Wallpaper Engine will not mute itself when the application in question is playing or recording audio. Windows does not differentiate between playing or recording audio, this is why Wallpaper Engine will constantly mute and unmute itself if you are recording it. Many game streaming applications can do this by accident and without your knowledge.

### Other behavior

Check out all possible conditions and wallpaper playback options for more types of application rules. You can also configure Wallpaper Engine to mute or pause when you launch a certain application.

::: tip You can also change these settings for all applications in the **Performance** tab of the Wallpaper Engine settings. If you are having performance issues in multiple games, for example, it may make sense to just change the **Other applications fullscreen** option to **Stop (free memory)** so that Wallpaper Engine will turn itself off when you launch any game or fullscreen application. :::