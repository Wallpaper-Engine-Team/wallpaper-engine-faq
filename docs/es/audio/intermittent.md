# El sonido se apaga y se enciende de forma intermitente

Windows no diferencia entre la grabación y la reproducción de sonido, por lo que notifica a Wallpaper Engine que hay un programa produciendo sonido cuando, en realidad, graba el audio de su ordenador.

Compruebe la pestaña «Rendimiento» en los ajustes de Wallpaper Engine. Si tiene la opción *«Otra aplicación reproduce sonido»* en *«Silencio»* y se percata de que el sonido de Wallpaper Engine no para de apagarse y encenderse, es probable que tenga un programa de grabación grabando su pantalla y sonido en segundo plano.

Puede hacer tres cosas para solucionarlo:

* Cierre el programa de grabación del escritorio o vuelva a configurarlo para que no grabe Wallpaper Engine por error.
    * Muchos usuarios tienen este problema debido a **Nvidia Share / Nvidia GameStream / Nvidia ShadowPlay**, que se pueden desactivar en los ajustes de **Nvidia GeForce Experience**. Los usuarios de tarjetas gráficas AMD pueden sufrir los mismos problemas a causa de **AMD ReLive**, que forma parte de los controladores de las tarjetas gráficas AMD. Compruebe esto si no sabe con seguridad qué es lo que graba su escritorio.
    * Si desconoce qué programa causa el problema, compruebe el mezclador de volumen de Windows para ver qué programas tienen acceso al sonido en ese mismo instante; podría serle de ayuda. En su defecto, cierre todos los programas que pueda hasta que solo queden ciertos archivos .exe en la lista de procesos del administrador de tareas de Windows.
* If the background audio recording is on purpose or if you cannot find a way to turn it off, you can set up an *application rule* in the "Performance" tab of the Wallpaper Engine settings. Set the "Condition" to "Is playing audio" and the "Wallpaper playback" to "Keep Running":

![Application Rules can be found in the "Performance" tab of the Wallpaper Engine settings](./applicationrule.png)

Replace some.exe with .exe files you can find in the task manager until you have narrowed it down to the responsible .exe.

* Lastly, you can also change the option 'other application playing audio' to 'keep running'. However, this means Wallpaper Engine will not automatically mute audio output from wallpapers when you listen to music or watch videos that are not full-screen.
