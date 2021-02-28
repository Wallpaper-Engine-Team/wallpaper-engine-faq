# No se reproducen sonidos / Problemas con la salida de audio
Esta guía te servirá para solucionar cualquier problema con la reproducción de sonido de los fondos. Antes de nada, prueba otros fondos para asegurarte del que estás usando sí que tiene sonido, porque hay muchísimos fondos que son silenciosos. Si tienes claro que sí que tiene sonido, sigue leyendo la guía.

::: warning
¡Aviso! Si el sonido se apaga y se enciende de forma intermitente, echa un vistazo a esta otra guía:

* [El sonido se apaga y se enciende de forma intermitente](/audio/intermittent)
:::

## Comprueba que Wallpaper Engine no se esté silenciando
Hay tres lugares en la aplicación desde los que puedes silenciar la salida de audio:

1. En la pestaña **General** de los ajustes de Wallpaper Engine hay una opción llamada **Salida de audio**. Comprueba que esté activada.
2. Haz clic en el botón **Pantallas** de la esquina superior derecha de la ventana principal de Wallpaper Engine. Aquí verás una vista previa de todas las pantallas. Cada pantalla tiene un botón de silenciar en la esquina inferior izquierda. Comprueba que las pantallas no estén silenciadas.
3. Al elegir un fondo, encontrarás la opción **Volumen** en la parte derecha, así que comprueba que no esté en 0 o muy bajo. Si la opción dice **Audio deshabilitado en ajustes de pantalla**, significa que tu pantalla está silenciada, por lo que deberás volver al paso 2 y quitarle el silencio.

## Comprueba el mezclador de volumen de Windows
Wallpaper Engine permite a Windows controlar todas las salidas de audio, por lo que, si Wallpaper Engine no está silenciado, el problema ha de estar en la instalación de Windows. Comprueba el mezclador de volumen de Windows y asegúrate de que Wallpaper Engine no esté silenciado o a un volumen muy bajo. Sigue las instrucciones de la captura:

![Raise volume and unmute Wallpaper Engine in the Windows audio mixer](./audiomixer.png)

## Comprueba el dispositivo de audio seleccionado
Otro motivo por el que es posible que no se reproduzcan sonidos es que Windows haya elegido la salida de audio incorrecta para Wallpaper Engine, así que cámbiala de forma manual para utilizar la correcta:

1. Haz clic derecho en el icono de sonido junto al reloj en el área de notificación de Windows y selecciona **Abrir Configuración de sonido**.
2. Baja hasta el final de la página que se abrirá y pulsa en **Preferencias de dispositivo y volumen de la aplicación**.
3. Se mostrará una lista de todas las aplicaciones que reproducen audio. Busca Wallpaper Engine y elige el dispositivo de salida de audio correcto en la columna **Entrada**. Si no sabes cuál es, prueba todas las opciones posibles. Es posible que tengas que reiniciar Wallpaper Engine para que surtan efecto los cambios.

Si utilizas varios dispositivos de audio (sobre todo cuando usas dispositivos USB o Bluetooth) y notas que el sonido se corta al desconectar o reconectar uno de ellos, has de tener en cuenta que Windows no siempre cambia bien de dispositivos al instante entre programas que están en funcionamiento. Nosotros no podemos solucionar este problema y, si se da uno de estos casos tan atípicos, es posible que tengas que reiniciar Wallpaper Engine para que Windows vuelva a controlar la salida de audio de forma correcta. You can also try and reinstall and update any audio drivers and see if that alleviates these types of issues.

## Reset all audio codecs

If audio output is still not playing at this point, some audio codecs may be broken, this is mainly relevant when using **Video** type wallpapers. You can double-check this by right-clicking on your wallpaper in Wallpaper Engine and selecting **Open in Explorer**. You should see the source video file (usually an **.mp4** file), open that file with Windows Media Player and check if it plays audio. **Please note:** It is very important that you test this with Windows Media Player only - other video players are irrelevant for this test as the underlying audio codecs are used by Wallpaper Engine as well. If no audio is playing in Windows Media Player, then either the video file does not have audio or the audio codecs on your system are indeed broken or missing.

In that case, you can use the *Codec Tweak Tool* as explained on the following page to reset all audio and video codecs on your system, afterwards restart Wallpaper Engine and try again:

* [Videos Black / Not Playing Properly - Codec Tweak Tool](noshow/notplaying.html#codec-tweak-tool)

