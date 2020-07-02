# 聲音/音訊斷斷續續

Windows 並不會分辨音訊錄製與播放，因此會在錄製電腦的音訊時，通知 Wallpaper Engine 另一個程式正在發出聲音。

在 Wallpaper Engine 設定中檢視「效能」分頁。 如果您將*「其他應用程式正在播放音訊」*選項設定為*「靜音」*，並發現 Wallpaper Engine 的聲音斷斷續續，則有可能是錄製程式在背景中錄製螢幕與聲音。

若要解決此問題，請執行下列三項操作：

* Turn off the recording program on your desktop or reconfigure it to not record Wallpaper Engine by mistake.
    * For many users, this issue is caused by **Nvidia Share / Nvidia GameStream / Nvidia ShadowPlay** which can be turned off in the **Nvidia GeForce Experience** settings. For AMD graphics card users, **AMD ReLive** can equally cause these issues and is also part of the AMD graphics card drivers. Try checking this first if you are unsure what could be recording your desktop.
    * If you do not know what application is causing this, check your Windows audio mixer and see what applications are currently accessing your audio, that may help. Alternatively, shut down as many programs as possible and narrow it down to certain .exe files from the Windows task manager process list.
* If the background audio recording is on purpose or if you cannot find a way to turn it off, you can set up an *application rule* in the "Performance" tab of the Wallpaper Engine settings. Set the "Condition" to "Is playing audio" and the "Wallpaper playback" to "Keep Running":

![Application Rules can be found in the "Performance" tab of the Wallpaper Engine settings](./applicationrule.png)

Replace some.exe with .exe files you can find in the task manager until you have narrowed it down to the responsible .exe.

* Lastly, you can also change the option 'other application playing audio' to 'keep running'. However, this means Wallpaper Engine will not automatically mute audio output from wallpapers when you listen to music or watch videos that are not full-screen.
