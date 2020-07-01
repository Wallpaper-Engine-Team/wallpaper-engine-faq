# Ses aralıklarla açılıp kapanıyor

Windows, kayıt ve ses çalma arasında ayrım gözetmez, bu nedenle Wallpaper Engine'e başka bir programın ses ürettiğini bildirir ancak aslında bilgisayarınızın sesini kaydediyordur.

Wallpaper Engine ayarlarındaki "Performans" sekmesine bakın. Eğer *"Diğer uygulamadan ses çalarken"* seçeneği *"Sessiz"*e ayarlanmışsa ve Wallpaper Engine'den gelen sesin kendini açıp kapadığını fark ederseniz arka planda ekranınızı ve sesi kaydeden bir kayıt programınız olabilir.

Bunu çözmek için şu üç şeyden birini yapın:

* Masaüstünüzdeki kayıt programını kapatın veya Wallpaper Engine'i yanlışlıkla kaydetmeyecek şekilde yeniden yapılandırın.
    * For many users, this issue is caused by **Nvidia Share / Nvidia GameStream / Nvidia ShadowPlay** which can be turned off in the **Nvidia GeForce Experience** settings. For AMD graphics card users, **AMD ReLive** can equally cause these issues and is also part of the AMD graphics card drivers. Try checking this first if you are unsure what could be recording your desktop.
    * If you do not know what application is causing this, check your Windows audio mixer and see what applications are currently accessing your audio, that may help. Alternatively, shut down as many programs as possible and narrow it down to certain .exe files from the Windows task manager process list.
* If the background audio recording is on purpose or if you cannot find a way to turn it off, you can set up an *application rule* in the "Performance" tab of the Wallpaper Engine settings. Set the "Condition" to "Is playing audio" and the "Wallpaper playback" to "Keep Running":

![Application Rules can be found in the "Performance" tab of the Wallpaper Engine settings](./applicationrule.png)

Replace some.exe with .exe files you can find in the task manager until you have narrowed it down to the responsible .exe.

* Lastly, you can also change the option 'other application playing audio' to 'keep running'. However, this means Wallpaper Engine will not automatically mute audio output from wallpapers when you listen to music or watch videos that are not full-screen.
