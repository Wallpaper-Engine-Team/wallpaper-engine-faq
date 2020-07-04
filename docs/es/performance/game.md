# Problemas de rendimiento / bajada de FPS con ciertos juegos o programas

Wallpaper Engine se pausa cuando juegas por defecto. Puede cambiar esta opción en la pestaña **Rendimiento** de la configuración de Wallpaper Engine.

Si tiene problemas de rendimiento con juegos o programas, puede cambiar la configuración. Por lo general, los problemas de rendimiento significan que el equipo se queda sin RAM o RAM de vídeo (la memoria de la tarjeta gráfica). Puede configurar Wallpaper Engine para liberar memoria mientras juega si cambia la opción **Otra aplicación en pantalla completa** a **Detener (liberar memoria)** en la pestaña **Rendimiento** de la configuración de Wallpaper Engine.

## Regla de la aplicación

Si solo tiene problemas con un juego o un programa en concreto, puede configurar Wallpaper Engine para solucionar el problema con ese programa si crea una **regla de la aplicación**:

1. Abra la pestaña **Rendimiento** en la configuración de Wallpaper Engine.
2. Haga clic en el botón **Editar** junto a **Reglas de aplicación**.
3. In the pop-up that appears, click on **Create new rule**
4. Create a new rule with the following settings:
    * **Application name:** "game.exe" *(replace this with the actual .exe file of your game)*
    * **Condition:** "Is running"
    * **Wallpaper playback:** "Stop (free memory)"
5. Confirm by clicking on **Create**

Wallpaper Engine will now completely remove all wallpapers from memory when the *.exe* you configured is launched.

## Conflicts with screen-recording tools or overlays

If you are using any game streaming, game recording or software with overlays, make sure they are not accidentally recording Wallpaper Engine in the background. This can also be the case if you use any game streaming functionalities from your graphics card drivers (Nvidia ShadowPlay, Nvidia Share or AMD ReLive for example).
