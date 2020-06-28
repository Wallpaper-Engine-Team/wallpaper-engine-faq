# 某些游戏或应用程序存在性能问题/FPS 较低

默认情况下，Wallpaper Engine 会在您游玩游戏时自动暂停。 您可以在 Wallpaper Engine 设置的**性能**选项卡中，对此行为进行配置。

如果个别游戏或应用程序存在性能问题，您可以对此行为进行进一步的调整。 通常情况下，性能问题意味着系统的 RAM 或视频 RAM（显卡上的内存）不足。 您可以在 Wallpaper Engine 设置的**性能**选项卡中，将**其他应用程序全屏时**选项更改为**停止（释放内存）**，从而将 Wallpaper Engine 配置为在您游玩游戏时释放所有内存。

## 应用程序规则

如果只是特定游戏或软件遇到问题，您还可以通过创建**应用程序规则**，仅针对遇到问题的软件进行此配置：

1. 在 Wallpaper Engine 设置中，打开**性能**选项卡
2. 单击**应用程序规则**旁边的**编辑**按钮
3. 在显示的弹出窗口中，单击**创建新规则**
4. 使用以下设置，创建新规则：
    * **应用程序名称：**“game.exe”*（替换为游戏实际的 .exe 文件）*
    * **条件：**“运行中”
    * **壁纸播放：**“停止（释放内存）”
5. 单击**创建**确认

现在，启动您配置的 *.exe* 以后，Wallpaper Engine 会将所有壁纸从内存中完全移除。

## 与屏幕录制工具或覆盖功能冲突

如果您使用任何游戏串流工具、游戏录制工具或带覆盖功能的软件，请确保它们不会在后台意外录制 Wallpaper Engine。 This can also be the case if you use any game streaming functionalities from your graphics card drivers (Nvidia ShadowPlay, Nvidia Share or AMD ReLive for example).
