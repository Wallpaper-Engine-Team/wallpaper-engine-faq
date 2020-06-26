# 声音/音频间歇性打开和关闭

Windows 不区分音频录制和音频播放的音量，因此，Windows 会在其实际录制计算机音频时，通知 Wallpaper Engine 有另一个程序正在发出声音。

检查 Wallpaper Engine 设置的“性能”选项卡。 如果您已将*“其他应用程序正在播放音频”*选项设置为*“静音”*，而您注意到 Wallpaper Engine 发出的声音不断自动打开和关闭，则可能有个录制程序正在后台录制屏幕和声音。

要解决此问题，请执行以下三项操作之一：

* 在桌面上关闭录制程序，或对其进行重新配置，以免其错误录制 Wallpaper Engine。
    * 对于许多用户而言，此问题是由 **Nvidia Share / Nvidia GameStream / Nvidia ShadowPlay** 引起的，您可在 **Nvidia GeForce Experience** 设置中将其关闭。 对于 AMD 显卡用户，**AMD ReLive** 同样可能导致这些问题，而且它还是 AMD 显卡驱动程序的一部分。 如果不确定可能是什么程序在录制您的桌面，请先试着检查一下这点。
    * 如果您不知道导致此问题的应用程序是什么，请检查 Windows 音量合成器，看看当前有哪些应用程序正在访问音频，这可能会有所帮助。 Alternatively, shut down as many programs as possible and narrow it down to certain .exe files from the Windows task manager process list.
* If the background audio recording is on purpose or if you cannot find a way to turn it off, you can set up an *application rule* in the "Performance" tab of the Wallpaper Engine settings. Set the "Condition" to "Is playing audio" and the "Wallpaper playback" to "Keep Running":

![Application Rules can be found in the "Performance" tab of the Wallpaper Engine settings](./applicationrule.png)

Replace some.exe with .exe files you can find in the task manager until you have narrowed it down to the responsible .exe.

* Lastly, you can also change the option 'other application playing audio' to 'keep running'. However, this means Wallpaper Engine will not automatically mute audio output from wallpapers when you listen to music or watch videos that are not full-screen.
