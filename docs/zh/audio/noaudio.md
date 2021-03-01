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
Wallpaper Engine 让 Windows 处理所有音频输出，因此如果未将 Wallpaper Engine 本身静音，则问题一定出自 Windows 设置。 First, check the Windows audio mixer and ensure that Wallpaper Engine is not muted or set to a very low volume, as shown in the following screenshot:

![Raise volume and unmute Wallpaper Engine in the Windows audio mixer](./audiomixer.png)

## Check the selected audio device
Another possible reason for the lack of audio output could be that Windows has selected the wrong audio output device for Wallpaper Engine, try manually forcing your desired audio output device to be used:

1. Right-click on the audio icon next to the clock in the Windows tray and select **Open Sound settings**.
2. Scroll down to the bottom of the page that opens and click on **App volume and device preferences**.
3. A list of all applications playing audio will be shown. Find Wallpaper Engine and in the **Output** column, select the correct audio output device. If you are unsure, try all possible options. A restart of Wallpaper Engine may be necessary for this to take effect.

If you use multiple audio devices (especially when using USB or Bluetooth audio devices) and notice that audio cuts out when a device disconnects or reconnects, Windows sometimes does not reliably switch audio devices on-the-fly for running programs. This cannot be fixed from our end, in these rare cases you may need to restart Wallpaper Engine so that Windows starts to correctly handle the audio output again. You can also try and reinstall and update any audio drivers and see if that alleviates these types of issues.

## Reset all audio codecs

If audio output is still not playing at this point, some audio codecs may be broken, this is mainly relevant when using **Video** type wallpapers. You can double-check this by right-clicking on your wallpaper in Wallpaper Engine and selecting **Open in Explorer**. You should see the source video file (usually an **.mp4** file), open that file with Windows Media Player and check if it plays audio. **Please note:** It is very important that you test this with Windows Media Player only - other video players are irrelevant for this test as the underlying audio codecs are used by Wallpaper Engine as well. If no audio is playing in Windows Media Player, then either the video file does not have audio or the audio codecs on your system are indeed broken or missing.

In that case, you can use the *Codec Tweak Tool* as explained on the following page to reset all audio and video codecs on your system, afterwards restart Wallpaper Engine and try again:

* [Videos Black / Not Playing Properly - Codec Tweak Tool](noshow/notplaying.html#codec-tweak-tool)

