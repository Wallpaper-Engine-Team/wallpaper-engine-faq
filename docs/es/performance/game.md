# Problemas de rendimiento / bajada de fotogramas por segundo con ciertos juegos o programas

Wallpaper Engine se pausa por defecto cuando juegas. Puedes cambiar esta opción en la pestaña **Rendimiento** de la configuración de Wallpaper Engine.

Si tienes problemas de rendimiento con juegos o programas, puedes cambiar la configuración. Por lo general, los problemas de rendimiento significan que el equipo se queda sin RAM o RAM de vídeo (la memoria de la tarjeta gráfica). Puedes configurar Wallpaper Engine para liberar memoria mientras juegas si cambias la opción **Otra aplicación en pantalla completa** a **Detener (liberar memoria)** en la pestaña **Rendimiento** de la configuración de Wallpaper Engine.

## Regla de la aplicación

Si solo tienes problemas con un juego o un programa en concreto, puedes solucionar el problema con ese programa si creas una **regla de la aplicación**:

1. Abre la pestaña **Rendimiento** en la configuración de Wallpaper Engine.
2. Haz clic en el botón **Editar** junto a **Reglas de aplicación**.
3. Haz clic en **Crear nueva regla** en la ventana emergente.
4. Crea une regla nueva con las siguientes características:
    * **Nombre de la aplicación:** «game.exe» *(cambia la palabra game por el nombre real del .exe del juego)*.
    * **Condición:** «Se está ejecutando».
    * **Reproducción de fondos:** «Detener (liberar memoria)».
5. Haz clic en **Crear** para confirmarla.

Wallpaper Engine se encargará de eliminar todos los fondos de la memoria cuando abras el *.exe* que has configurado.

## Problemas con herramientas de grabación o con superposición

Si utilizas algún programa de retransmisión o grabación de juegos con superposición, asegúrate de que no están grabando Wallpaper Engine en segundo plano. También puede ocurrir si utilizas funciones de retransmisión de los controladores de la tarjeta gráfica (Nvidia ShadowPlay, Nvidia Share o AMD ReLive, por ejemplo).
