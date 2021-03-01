# 无声音播放/音频输出问题
本帮助指南将帮助您了解与壁纸音频播放有关的任何问题。 首先，您应该尝试其他一些壁纸，以确保目前使用的壁纸确实包含音频。 许多壁纸完全没有音频。 如果确定壁纸包含音频，请继续阅读本指南。

::: warning
请注意 如果声音在几秒钟内断断续续，请改为阅读以下帮助指南：

* [声音/音频断断续续](/audio/intermittent)
:::

## 确保 Wallpaper Engine 本身未静音
该应用程序中有三个地方可将音频输出设置为静音：

1. 在 Wallpaper Engine 设置的**常规**选项卡中，有一个选项名为**音频输出**。 确保已启用该选项。
2. 单击 Wallpaper Engine 主窗口右上角的**显示器**按钮。 这样将可以概览所有屏幕。 每个屏幕的左下角都有一个静音按钮。 确保您的屏幕没有静音。
3. 选择壁纸时，您会在右侧找到**音量**选项，确保未将其设置为零或较低的音量。 如果选项显示**已在显示器设置中禁用音频**，则显示器处于静音状态，请再次检查第 2 步，然后将屏幕取消静音。

## 检查 Windows 音频混音器
Wallpaper Engine 让 Windows 处理所有音频输出，因此如果未将 Wallpaper Engine 本身静音，则问题一定出自 Windows 设置。 首先，检查 Windows 音频混音器，确保 Wallpaper Engine 未静音或设置为非常低的音量，如以下屏幕截图所示：

![提高音量，并在 Windows 音频混音器中将 Wallpaper Engine 取消静音](./audiomixer.png)

## 检查所选的音频设备
没有音频输出的另一个原因可能是 Windows 为 Wallpaper Engine 选择了错误的音频输出设备，请尝试手动强制选择所需的音频输出设备：

1. 右键单击 Windows 托盘中时钟旁边的音频图标，然后选择**打开声音设置**。
2. 向下滚动至打开的页面底部，然后单击**应用音量和设备首选项**。
3. 此时将显示播放音频的所有应用程序列表。 找到 Wallpaper Engine，然后在**输出**列中，选择正确的音频输出设备。 如果不确定，请尝试所有可能的选项。 可能需要重新启动 Wallpaper Engine 才能生效。

如果您使用多个音频设备（尤其是在使用 USB 或蓝牙音频设备时），并发现设备断开连接或重新连接时音频会中断，则 Windows 有时无法可靠地实时切换音频设备以运行程序。 我们无法解决此问题，在极少数情况下，您可能需要重新启动 Wallpaper Engine，以便 Windows 开始再次正确处理音频输出。 您也可以尝试重新安装和更新任何音频驱动程序，以查看是否可以缓解这些类型的问题。

## Reset all audio codecs

If audio output is still not playing at this point, some audio codecs may be broken, this is mainly relevant when using **Video** type wallpapers. You can double-check this by right-clicking on your wallpaper in Wallpaper Engine and selecting **Open in Explorer**. You should see the source video file (usually an **.mp4** file), open that file with Windows Media Player and check if it plays audio. **Please note:** It is very important that you test this with Windows Media Player only - other video players are irrelevant for this test as the underlying audio codecs are used by Wallpaper Engine as well. If no audio is playing in Windows Media Player, then either the video file does not have audio or the audio codecs on your system are indeed broken or missing.

In that case, you can use the *Codec Tweak Tool* as explained on the following page to reset all audio and video codecs on your system, afterwards restart Wallpaper Engine and try again:

* [Videos Black / Not Playing Properly - Codec Tweak Tool](noshow/notplaying.html#codec-tweak-tool)

