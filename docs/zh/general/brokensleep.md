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

![启用“允许计算机睡眠”](./power.gif)

## “Web”类型壁纸的休眠问题

“Web”壁纸使用类似于 Google Chrome 的网络浏览器（“CEF”），因而会阻止休眠模式。 在浏览器修复此问题之前，您可以通过一些命令行提示符解决此问题。

1. 在 Windows 中搜索“cmd.exe”，然后右键单击它，选择“以管理员身份运行”（非常重要，否则将无法工作！）。
2. 使用命令 `powercfg /requests` 查看阻止系统进入休眠状态的所有进程（另请检查此处是否有其他程序可能出错）。
3. 使用以下三个命令，允许系统在 Wallpaper Engine 正在运行的情况下进入睡眠状态：

```
powercfg /requestsoverride PROCESS webwallpaper32.exe AWAYMODE DISPLAY SYSTEM
powercfg /requestsoverride PROCESS wallpaper32.exe AWAYMODE DISPLAY SYSTEM
powercfg /requestsoverride PROCESS wallpaper64.exe AWAYMODE DISPLAY SYSTEM
```

此外，您还可以在 Wallpaper Engine 设置的**性能**选项卡中，将**显示屏休眠时**选项设置为*停止（释放内存）*，然后关闭显示器。 那样的话，如果您在离开电脑时关闭显示器，Wallpaper Engine 将停止所有播放。