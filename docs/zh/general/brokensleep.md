# 休眠/屏幕保护程序无法正常工作

如有任何活动音频流处于打开状态，Windows 就不会进入休眠。 要解决此问题，您可以在 Wallpaper Engine 设置的“常规”选项卡中禁用音频输出，防止 Windows 阻止休眠。 如要继续输出音频，请按照本指南中的相关步骤进行操作。

## 更改 Windows 电源设置

如有任何活动音频流处于打开状态，Windows 就不会进入休眠。 要解决此问题，您可以在 Wallpaper Engine 设置的“常规”选项卡中禁用音频输出，或者重新配置 Windows，使其可在启用了音频播放的情况下进入睡眠状态：

1. 通过在 Windows 搜索中键入名称，转到 Windows 的“电源和睡眠设置”。
2. 单击“其他电源设置”
3. 单击所选计划旁边的“更改计划设置”
4. 单击“更改高级电源设置”
5. 向下滚动并展开“多媒体设置”
6. 将“共享媒体时”设置为“允许计算机进入离开模式”（屏幕保护程序）**或**“允许计算机睡眠”（休眠）

![Enable "Allow the computer to sleep"](./power.gif)

## “Web”类型墙纸的休眠问题

“Web”壁纸使用类似于 Google Chrome 的网络浏览器（“CEF”），因而会阻止休眠模式。 Until this is fixed in the browser, you can get around this with some command-line prompts.

1. Search Windows for "cmd.exe" and right-click on it and select "Run as administrator" (very important, otherwise this will not work!).
2. Use the command `powercfg /requests` to view all processes that are blocking your system from hibernation (also check if other programs may be at fault here).
3. Use the following three commands to permit your system to sleep with Wallpaper Engine running:

```
powercfg /requestsoverride PROCESS webwallpaper32.exe AWAYMODE DISPLAY SYSTEM
powercfg /requestsoverride PROCESS wallpaper32.exe AWAYMODE DISPLAY SYSTEM
powercfg /requestsoverride PROCESS wallpaper64.exe AWAYMODE DISPLAY SYSTEM
```

Additionally, you can also set the **Display asleep** option in the **Performance** tab of the Wallpaper Engine settings to *Stop (free memory)* and turn off your display. That way Wallpaper Engine stops all playback when you turn your display off when leaving your computer unattended.