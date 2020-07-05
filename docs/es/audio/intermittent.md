# El sonido se apaga y se enciende de forma intermitente

Windows no diferencia entre la grabación y la reproducción de sonido, por lo que notifica a Wallpaper Engine que hay un programa produciendo sonido cuando, en realidad, está grabando el audio de su ordenador.

Compruebe la pestaña «Rendimiento» en los ajustes de Wallpaper Engine. Si tiene la opción *«Otra aplicación reproduce sonido»* en *«Silencio»* y se percata de que el sonido de Wallpaper Engine no para de apagarse y encenderse, es probable que tenga un programa de grabación grabando su pantalla y sonido en segundo plano.

Puede hacer tres cosas para solucionarlo:

* Cierre el programa de grabación del escritorio o vuelva a configurarlo para que no grabe Wallpaper Engine por error.
    * Muchos usuarios tienen este problema debido a **Nvidia Share / Nvidia GameStream / Nvidia ShadowPlay**, que se pueden desactivar en los ajustes de **Nvidia GeForce Experience**. Los usuarios de tarjetas gráficas AMD pueden sufrir los mismos problemas a causa de **AMD ReLive**, que forma parte de los controladores de las tarjetas gráficas AMD. Compruébelo si no sabe con seguridad qué es lo que graba su escritorio.
    * Si desconoce qué programa causa el problema, compruebe el mezclador de volumen de Windows para ver qué programas tienen acceso al sonido en ese mismo instante; podría serle de ayuda. En su defecto, cierre todos los programas que pueda hasta que solo queden ciertos archivos .exe en la lista de procesos del administrador de tareas de Windows.
* Si la grabación en segundo plano es deliberada o si no encuentra la forma de desactivarla, puede crear una *regla de la aplicación* en la pestaña «Rendimiento» de los ajustes de Wallpaper Engine. Cambie la «Condición» a «Reproduciendo audio» y la «Reproducción de fondos» a «Seguir ejecutándose».

![Las reglas de la aplicación se encuentran en la pestaña "Rendimiento" de los ajustes de Wallpaper Engine.](./applicationrule.png)

Cambie algunos .exe por archivos .exe que pueda encontrar en el administrador de tareas hasta que encuentre al .exe responsable.

* Por último, también puede cambiar la opción «Otra aplicación reproduciendo audio» a «Seguir ejecutándose». Sin embargo, esto implica que Wallpaper Engine no podrá silenciar de forma automática las salidas de audio de los fondos de pantalla cuando escuche audios o vea vídeos que no estén en pantalla completa.
