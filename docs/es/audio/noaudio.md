# No se reproducen sonidos / Problemas con la salida de audio
Esta guía te servirá para solucionar cualquier problema con la reproducción de sonido de los fondos. Antes de nada, prueba otros fondos para asegurarte del que estás usando sí que tiene sonido, porque hay muchísimos que son silenciosos. Si tienes claro que sí que tiene sonido, sigue leyendo la guía.

::: warning
¡Aviso! Si el sonido se apaga y se enciende de forma intermitente, echa un vistazo a esta otra guía:

* [El sonido se apaga y se enciende de forma intermitente](/audio/intermittent)
:::

## Comprueba que Wallpaper Engine no se esté silenciando
Hay tres lugares en la aplicación desde los que puedes silenciar la salida de audio:

1. En la pestaña **General** de los ajustes de Wallpaper Engine hay una opción llamada **Salida de audio**. Comprueba que esté activada.
2. Haz clic en el botón **Pantallas** de la esquina superior derecha de la ventana principal de Wallpaper Engine. Aquí verás una vista previa de todas las pantallas. Cada pantalla tiene un botón de silenciar en la esquina inferior izquierda. Comprueba que las pantallas no estén silenciadas.
3. Al elegir un fondo, encontrarás la opción **Volumen** en la parte derecha, así que comprueba que no esté en 0 o muy bajo. Si la opción dice **Audio deshabilitado en ajustes de pantalla**, significa que la pantalla está silenciada, por lo que deberás volver al paso 2 y quitarle el silencio.

## Comprueba el mezclador de volumen de Windows
Wallpaper Engine permite a Windows controlar todas las salidas de audio, por lo que, si Wallpaper Engine no está silenciado, el problema ha de estar en Windows. Comprueba el mezclador de volumen de Windows y asegúrate de que Wallpaper Engine no esté silenciado o a un volumen muy bajo. Sigue las instrucciones de la captura:

![Sube el volumen y activa el sonido de Wallpaper Engine en el mezclador de sonidos de Windows](./audiomixer.png)

## Comprueba el dispositivo de audio seleccionado
Otro motivo por el que es posible que no se reproduzcan sonidos es que Windows haya elegido la salida de audio incorrecta para Wallpaper Engine, así que cámbiala de forma manual para utilizar la correcta:

1. Haz clic derecho en el icono de sonido junto al reloj en el área de notificación de Windows y selecciona **Abrir Configuración de sonido**.
2. Baja hasta el final de la página que se abrirá y pulsa en **Preferencias de dispositivo y volumen de la aplicación**.
3. Se mostrará una lista de todas las aplicaciones que reproducen audio. Busca Wallpaper Engine y elige el dispositivo de salida de audio correcto en la columna **Entrada**. Si no sabes cuál es, prueba todas las opciones posibles. Es posible que tengas que reiniciar Wallpaper Engine para que surtan efecto los cambios.

Si utilizas varios dispositivos de sonido (sobre todo cuando usas dispositivos USB o Bluetooth) y notas que el sonido se corta al desconectar o reconectar uno de ellos, has de tener en cuenta que Windows no siempre cambia bien de dispositivos de sonido al instante entre programas que están en funcionamiento. Nosotros no podemos solucionar este problema y, si se da uno de estos casos tan atípicos, es posible que tengas que reiniciar Wallpaper Engine para que Windows vuelva a controlar la salida de audio de forma correcta. También puedes volver a instalar y actualizar los controladores de sonido para ver si así dejan de producirse dichos problemas.

## Reinicia todos los codecs de sonido

Si la salida de audio sigue sin funcionar, es posible que estén dañados los codecs de sonido, y esto es muy importante si usas fondos de **vídeo**. Puedes comprobarlo si haces clic derecho en el fondo en Wallpaper Engine y eliges **Abrir en el explorador**. Ahí deberías poder ver el archivo de vídeo (por lo general, será un archivo **.mp4**), así que ábrelo con Windows Media Player y comprueba si se reproduce el sonido. **¡Aviso!** Es muy importante que lo compruebes con Windows Media Player. El resto de reproductores no servirán para hacer la prueba, ya que los codecs de sonido que utiliza Wallpaper Engine son esos mismos. Si no se reproduce sonido en Windows Media Player, es posible que el archivo de vídeo no tenga sonido o que los codecs de sonido del sistema estén dañados o que te falten algunos.

En ese caso, puedes usar *Codec Tweak Tool* tal y como te explicamos en esta página para reiniciar todos los codecs de sonido y de vídeo del sistema. Después, solo tendrás que reiniciar Wallpaper Engine y volver a intentarlo:

* [Vídeos en negro / no se reproducen correctamente](noshow/notplaying.html#codec-tweak-tool)

