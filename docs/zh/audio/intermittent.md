# 声音/音频间歇性打开和关闭

Windows 不区分音频录制和音频播放的音量，因此，Windows 会在其实际录制计算机音频时，通知 Wallpaper Engine 有另一个程序正在发出声音。

检查 Wallpaper Engine 设置的“性能”选项卡。 如果您已将*“其他应用程序正在播放音频”*选项设置为*“静音”*，而您注意到 Wallpaper Engine 发出的声音不断自动打开和关闭，则可能有个录制程序正在后台录制屏幕和声音。

要解决此问题，请执行以下三项操作之一：

* Turn off the recording program on your desktop or reconfigure it to not record Wallpaper Engine by mistake.
    * For many users, this issue is caused by **Nvidia Share / Nvidia GameStream / Nvidia ShadowPlay** which can be turned off in the **Nvidia GeForce Experience** settings. For AMD graphics card users, **AMD ReLive** can equally cause these issues and is also part of the AMD graphics card drivers. Try checking this first if you are unsure what could be recording your desktop.
    * If you do not know what application is causing this, check your Windows audio mixer and see what applications are currently accessing your audio, that may help. Alternatively, shut down as many programs as possible and narrow it down to certain .exe files from the Windows task manager process list.
* If the background audio recording is on purpose or if you cannot find a way to turn it off, you can set up an *application rule* in the "Performance" tab of the Wallpaper Engine settings. Set the "Condition" to "Is playing audio" and the "Wallpaper playback" to "Keep Running":

![Application Rules can be found in the "Performance" tab of the Wallpaper Engine settings](./applicationrule.png)

Replace some.exe with .exe files you can find in the task manager until you have narrowed it down to the responsible .exe.

* Lastly, you can also change the option 'other application playing audio' to 'keep running'. However, this means Wallpaper Engine will not automatically mute audio output from wallpapers when you listen to music or watch videos that are not full-screen.
