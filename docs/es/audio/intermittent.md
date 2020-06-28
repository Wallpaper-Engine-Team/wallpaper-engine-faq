# El sonido se apaga y se enciende de forma intermitente

Windows no diferencia entre la grabación y la reproducción de sonido, por lo que notifica a Wallpaper Engine que hay un programa produciendo sonido cuando, en realidad, graba el audio de su ordenador.

Check the "Performance" tab of the Wallpaper Engine settings. If you have the option *"Other application is playing audio"* set to *"Mute"* and you notice that the sound from Wallpaper Engine keeps turning itself on and off, you likely have a recording program recording your screen and sound in the background.

To solve this do any of these three things:

* Turn off the recording program on your desktop or reconfigure it to not record Wallpaper Engine by mistake.
    * For many users, this issue is caused by **Nvidia Share / Nvidia GameStream / Nvidia ShadowPlay** which can be turned off in the **Nvidia GeForce Experience** settings. For AMD graphics card users, **AMD ReLive** can equally cause these issues and is also part of the AMD graphics card drivers. Try checking this first if you are unsure what could be recording your desktop.
    * If you do not know what application is causing this, check your Windows audio mixer and see what applications are currently accessing your audio, that may help. Alternatively, shut down as many programs as possible and narrow it down to certain .exe files from the Windows task manager process list.
* If the background audio recording is on purpose or if you cannot find a way to turn it off, you can set up an *application rule* in the "Performance" tab of the Wallpaper Engine settings. Set the "Condition" to "Is playing audio" and the "Wallpaper playback" to "Keep Running":

![Application Rules can be found in the "Performance" tab of the Wallpaper Engine settings](./applicationrule.png)

Replace some.exe with .exe files you can find in the task manager until you have narrowed it down to the responsible .exe.

* Lastly, you can also change the option 'other application playing audio' to 'keep running'. However, this means Wallpaper Engine will not automatically mute audio output from wallpapers when you listen to music or watch videos that are not full-screen.
