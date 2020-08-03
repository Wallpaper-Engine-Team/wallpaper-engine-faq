- - -
  tags:
  - screensavers
  - hibernation
  - sleep
  - power saving
- - -

# 休眠/屏幕保护程序无法正常工作

如有任何活动音频流处于打开状态，Windows 就不会进入休眠。 You can get around this by either disabling audio output in the "General" tab of the Wallpaper Engine settings to prevent Windows from blocking hibernation in the first place. If you want to continue to have audio output, follow the steps in this guide on how to achieve that.

## 更改 Windows 电源设置

Windows does not hibernate with any active audio streams open. You can get around this by either disabling audio output in the "General" tab of the Wallpaper Engine settings or re-configuring your Windows to allow it to sleep with audio playback enabled:

1. 通过在 Windows 搜索中键入名称，转到 Windows 的“电源和睡眠设置”。
2. 单击“其他电源设置”
3. 单击所选计划旁边的“更改计划设置”
4. 单击“更改高级电源设置”
5. 向下滚动并展开“多媒体设置”
6. 将“共享媒体时”设置为“允许计算机进入离开模式”（屏幕保护程序）**或**“允许计算机睡眠”（休眠）

![Enable "Allow the computer to sleep"](./power.gif)

## “Web”类型壁纸的休眠问题

"Web" wallpapers use a web browser similar to Google Chrome ("CEF") which will prevent hibernation mode. Until this is fixed in the browser, you can get around this with some command-line prompts.

1. 在 Windows 中搜索“cmd.exe”，然后右键单击它，选择“以管理员身份运行”（非常重要，否则将无法工作！）。
2. 使用命令 `powercfg /requests` 查看阻止系统进入休眠状态的所有进程（另请检查此处是否有其他程序可能出错）。
3. 使用以下三个命令，允许系统在 Wallpaper Engine 正在运行的情况下进入睡眠状态：

```
powercfg /requestsoverride PROCESS webwallpaper32.exe AWAYMODE DISPLAY SYSTEM
powercfg /requestsoverride PROCESS wallpaper32.exe AWAYMODE DISPLAY SYSTEM
powercfg /requestsoverride PROCESS wallpaper64.exe AWAYMODE DISPLAY SYSTEM
```

Additionally, you can also set the **Display asleep** option in the **Performance** tab of the Wallpaper Engine settings to *Stop (free memory)* and turn off your display. That way Wallpaper Engine stops all playback when you turn your display off when leaving your computer unattended.