# 休眠/螢幕保護程式無法運作

如有任何使用中的音訊串流開啟，Windows 便不會進入休眠。 若要解決此問題，可至 Wallpaper Engine 設定的「一般」分頁中停用音訊輸出，一開始就防止 Windows 阻止休眠。 如果您想繼續輸出音訊，請遵循本指南的步驟。

## 變更 Windows 的電源設定

如有任何使用中的音訊串流開啟，Windows 便不會進入休眠。 您可至 Wallpaper Engine 設定的「一般」分頁中停用音訊輸出，或是重新設定 Windows，使其可在音訊播放時進入睡眠狀態：

1. 在 Windows 搜尋中輸入「電源與睡眠設定」前往該視窗。
2. 按一下「其他電源設定」
3. 按一下選取計劃旁邊的「變更計劃設定」
4. 按一下「變更進階電源設定」
5. 向下捲動並展開「多媒體設定」
6. 將「媒體共用」設定為「允許電腦進入離開模式」(螢幕保護程式) **或**「讓電腦睡眠」(休眠)

![Enable "Allow the computer to sleep"](./power.gif)

## 「網頁」類型桌布遇到的休眠問題

「網頁」桌布使用類似 Google Chrome (「CEF」) 的網頁瀏覽器，會阻止電腦進入休眠模式。 在瀏覽器修復此問題之前，您可利用命令提示字元來解決。

1. Search Windows for "cmd.exe" and right-click on it and select "Run as administrator" (very important, otherwise this will not work!).
2. Use the command `powercfg /requests` to view all processes that are blocking your system from hibernation (also check if other programs may be at fault here).
3. Use the following three commands to permit your system to sleep with Wallpaper Engine running:

```
powercfg /requestsoverride PROCESS webwallpaper32.exe AWAYMODE DISPLAY SYSTEM
powercfg /requestsoverride PROCESS wallpaper32.exe AWAYMODE DISPLAY SYSTEM
powercfg /requestsoverride PROCESS wallpaper64.exe AWAYMODE DISPLAY SYSTEM
```

Additionally, you can also set the **Display asleep** option in the **Performance** tab of the Wallpaper Engine settings to *Stop (free memory)* and turn off your display. That way Wallpaper Engine stops all playback when you turn your display off when leaving your computer unattended.