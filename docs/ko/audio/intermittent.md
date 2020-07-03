# 사운드 / 오디오가 간헐적으로 켜지고 꺼집니다

Windows does not differentiate between recording and playing audio, therefore it notifies Wallpaper Engine that another program is producing sound while it is actually recording your computer audio.

Check the "Performance" tab of the Wallpaper Engine settings. If you have the option *"Other application is playing audio"* set to *"Mute"* and you notice that the sound from Wallpaper Engine keeps turning itself on and off, you likely have a recording program recording your screen and sound in the background.

이 문제를 해결하려면 다음 세 가지 방법을 해보세요:

* 데스크톱에서 녹음 프로그램을 끄거나 실수로 Wallpaper Engine을 녹음하지 않도록 다시 구성합니다.
    * 여러 사용자가 **Nvidia Share / Nvidia GameStream / Nvidia ShadowPlay**로 인해 이 문제를 겪습니다. **Nvidia GeForce Experience** 설정에서 끌 수 있습니다. AMD 그래픽 카드 사용자의 경우 **AMD ReLive**가 해당 문제를 일으킬 수 있으며, AMD 그래픽 카드 드라이버의 일부입니다. Try checking this first if you are unsure what could be recording your desktop.
    * If you do not know what application is causing this, check your Windows audio mixer and see what applications are currently accessing your audio, that may help. Alternatively, shut down as many programs as possible and narrow it down to certain .exe files from the Windows task manager process list.
* If the background audio recording is on purpose or if you cannot find a way to turn it off, you can set up an *application rule* in the "Performance" tab of the Wallpaper Engine settings. Set the "Condition" to "Is playing audio" and the "Wallpaper playback" to "Keep Running":

![Application Rules can be found in the "Performance" tab of the Wallpaper Engine settings](./applicationrule.png)

Replace some.exe with .exe files you can find in the task manager until you have narrowed it down to the responsible .exe.

* Lastly, you can also change the option 'other application playing audio' to 'keep running'. However, this means Wallpaper Engine will not automatically mute audio output from wallpapers when you listen to music or watch videos that are not full-screen.
