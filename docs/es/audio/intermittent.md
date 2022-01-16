# El sonido se apaga y se enciende de forma intermitente

Windows no diferencia entre la grabación y la reproducción de sonido, por lo que notifica a Wallpaper Engine que hay un programa produciendo sonido cuando, en realidad, está grabando el audio de su ordenador.

Comprueba la pestaña «Rendimiento» en los ajustes de Wallpaper Engine. Si tienes la opción *«Otra aplicación reproduce sonido»* en *«Silencio»* y te percatas de que el sonido de Wallpaper Engine no para de apagarse y encenderse, es probable que tengas un programa de grabación grabando la pantalla y el sonido en segundo plano.

Puedes hacer tres cosas para solucionarlo:

* Cierra el programa de grabación del escritorio o vuelve a configurarlo para que no grabe Wallpaper Engine por error.
    * Muchos usuarios tienen este problema debido a **Nvidia Share / Nvidia GameStream / Nvidia ShadowPlay**, que se pueden desactivar en los ajustes de **Nvidia GeForce Experience**. Los usuarios de tarjetas gráficas AMD pueden sufrir los mismos problemas a causa de **AMD ReLive**, que forma parte de los controladores de las tarjetas gráficas AMD. Compruébalo si no sabes con seguridad qué es lo que graba el escritorio.
    * Si desconoces qué programa causa el problema, comprueba el mezclador de volumen de Windows para ver qué programas tienen acceso al sonido en ese mismo instante; podría serte de ayuda. En su defecto, cierra todos los programas que puedas hasta que solo queden ciertos archivos .exe en la lista de procesos del administrador de tareas de Windows.
* Si la grabación en segundo plano es deliberada o si no encuentras la forma de desactivarla, puedes crear una *regla de la aplicación* en la pestaña «Rendimiento» de los ajustes de Wallpaper Engine. Cambia la «Condición» a «Reproduciendo audio» y la «Reproducción de fondos» a «Seguir ejecutándose»:

![Las reglas de la aplicación se encuentran en la pestaña "Rendimiento" de los ajustes de Wallpaper Engine.](./applicationrule.png)

Cambia algunos .exe por archivos .exe que veas en el administrador de tareas hasta que encuentres al .exe responsable.

Common processes that can cause intermittent audio playback by recording audio without your full knowledge:

* **nvcontainer.exe**: Part of Nvidia GeForce Experience which may record audio. **Only relevant if you have an Nvidia graphics card.**
* **amdow.exe**: Part of AMD ReLive which may record audio. **Only relevant if you have an AMD graphics card.**

Lastly, you can also change the option 'other application playing audio' to 'keep running'. However, this means Wallpaper Engine will not automatically mute audio output from wallpapers when you listen to music or watch videos that are not full-screen.
