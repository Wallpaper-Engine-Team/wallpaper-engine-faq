# Problemas de rendimiento / bajada de fotogramas por segundo con ciertos juegos o programas

Wallpaper Engine se pausa por defecto cuando juegas. Puede cambiar esta opción en la pestaña **Rendimiento** de la configuración de Wallpaper Engine.

Si tiene problemas de rendimiento con juegos o programas, puede cambiar la configuración. Por lo general, los problemas de rendimiento significan que el equipo se queda sin RAM o RAM de vídeo (la memoria de la tarjeta gráfica). Puede configurar Wallpaper Engine para liberar memoria mientras juega si cambia la opción **Otra aplicación en pantalla completa** a **Detener (liberar memoria)** en la pestaña **Rendimiento** de la configuración de Wallpaper Engine.

## Regla de la aplicación

Si solo tiene problemas con un juego o un programa en concreto, puede solucionar el problema con ese programa si crea una **regla de la aplicación**:

1. Abra la pestaña **Rendimiento** en la configuración de Wallpaper Engine.
2. Haga clic en el botón **Editar** junto a **Reglas de aplicación**.
3. Haga clic en **Crear nueva regla** en la ventana emergente.
4. Cree une regla nueva con las siguientes características:
    * **Nombre de la aplicación:** «game.exe» *(cambie la palabra game por el nombre real del .exe del juego)*.
    * **Condición:** «Se está ejecutando».
    * **Reproducción de fondos:** «Detener (liberar memoria)».
5. Haga clic en **Crear** para confirmarla.

Wallpaper Engine se encargará de eliminar todos los fondos de la memoria cuando abra el *.exe* que ha configurado.

## Problemas con herramientas de grabación o con superposición

Si utiliza algún programa de retransmisión o grabación de juegos con superposición, asegúrese de que no están grabando Wallpaper Engine en segundo plano. También puede ocurrir si utiliza funciones de retransmisión de los controladores de la tarjeta gráfica (Nvidia ShadowPlay, Nvidia Share o AMD ReLive, por ejemplo).
