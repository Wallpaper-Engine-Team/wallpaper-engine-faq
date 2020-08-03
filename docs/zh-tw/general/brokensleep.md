- - -
  tags:
  - screensavers
  - hibernation
  - sleep
  - power saving
- - -

# 休眠/螢幕保護程式無法運作

如有任何使用中的音訊串流開啟，Windows 便不會進入休眠。 You can get around this by either disabling audio output in the "General" tab of the Wallpaper Engine settings to prevent Windows from blocking hibernation in the first place. If you want to continue to have audio output, follow the steps in this guide on how to achieve that.

## 變更 Windows 的電源設定

Windows does not hibernate with any active audio streams open. You can get around this by either disabling audio output in the "General" tab of the Wallpaper Engine settings or re-configuring your Windows to allow it to sleep with audio playback enabled:

1. 在 Windows 搜尋中輸入「電源與睡眠設定」前往該視窗。
2. 按一下「其他電源設定」
3. 按一下選取計劃旁邊的「變更計劃設定」
4. 按一下「變更進階電源設定」
5. 向下捲動並展開「多媒體設定」
6. 將「媒體共用」設定為「允許電腦進入離開模式」(螢幕保護程式) **或**「讓電腦睡眠」(休眠)

![Enable "Allow the computer to sleep"](./power.gif)

## 「網頁」類型桌布遇到的休眠問題

"Web" wallpapers use a web browser similar to Google Chrome ("CEF") which will prevent hibernation mode. Until this is fixed in the browser, you can get around this with some command-line prompts.

1. 搜尋 Windows 的「cmd.exe」並按一下滑鼠右鍵，選取「以管理員身分執行」(這點非常重要，否則無法運作！)。
2. 使用命令 `powercfg /requests` 檢視阻止系統進入休眠狀態的所有處理序 (並請檢查此處是否有其他程式可能出錯)。
3. 使用以下三個命令，允許系統在 Wallpaper Engine 運作的情況下進入睡眠狀態：

```
powercfg /requestsoverride PROCESS webwallpaper32.exe AWAYMODE DISPLAY SYSTEM
powercfg /requestsoverride PROCESS wallpaper32.exe AWAYMODE DISPLAY SYSTEM
powercfg /requestsoverride PROCESS wallpaper64.exe AWAYMODE DISPLAY SYSTEM
```

Additionally, you can also set the **Display asleep** option in the **Performance** tab of the Wallpaper Engine settings to *Stop (free memory)* and turn off your display. That way Wallpaper Engine stops all playback when you turn your display off when leaving your computer unattended.