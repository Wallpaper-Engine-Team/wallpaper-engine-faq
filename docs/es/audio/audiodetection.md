# Los visualizadores de audio no funcionan / No se detecta sonido

Los visualizadores de audio pueden dejar de funcionar por varios motivos, y aquí tenemos una lista de todas las razones posibles. Lee la guía al completo y asegúrate de no perderte ninguno de los motivos posibles por los que podría no funcionar.

## 1. Instalación del dispositivo de audio
Ve a la configuración de «Wallpaper Engine» y dirígete a la etiqueta «General». En la zona del centro encontrarás la sección «Multimedia», donde podrás elegir un dispositivo de entrada de audio. Asegúrate de que se ha seleccionado el dispositivo correcto. Si no sabes con certeza cuál es dicho dispositivo, pruébalos todos mientras escuchas música hasta que empiecen a funcionar los visualizadores de audio.

Si se ha seleccionado el dispositivo correcto, pero todavía no puedes oír nada o el visualizador no funciona, asegúrate de que no has silenciado Wallpaper Engine en el mezclador de Windows o de que no lo tengas a un volumen muy bajo. Windows no diferencia entre los volúmenes de grabación y reproducción de sonido. Esto significa que si tienes el volumen bajo en Windows, no se podrá grabar el audio:

![Sube el volumen y activa el sonido de Wallpaper Engine en el mezclador de sonidos de Windows](./audiomixer.png)

Si detecta el sonido, pero está muy bajo, ten en cuenta que el volumen del programa (del reproductor de música, del navegador, etc.) afecta a la detección de sonido. Si no quieres subir el volumen del programa, puedes mejorar la detección de sonido en la pestaña «General» de los ajustes de Wallpaper Engine (el volumen de grabación por defecto es 50).

## 2. Problemas con el hardware

### Corsair Void Pro / Bluetooth / Auriculares USB

Los auriculares USB o inalámbricos tienden a tener problemas con los controladores de sonido. En muchos dispositivos se solucionan al cambiar la frecuenta de muestreo de audio a 44100 Hz en los ajustes del dispositivo de Windows.

Haz clic derecho en el icono de sonido en la parte inferior derecha de la barra de Windows y después haz clic en «Abrir Configuración de sonido». Haz clic en «Propiedades del dispositivo» en la sección de «Salida» de la ventana que se ha abierto. Acto seguido, haz clic en «Propiedades adicionales del dispositivo» y ve directamente a la pestaña «Opciones avanzadas». Ahí puedes cambiar la velocidad de muestra. La ubicación exacta puede variar dependiendo de la versión de Windows. Si no consigues encontrar la opción, busca guías en internet de cómo cambiar la velocidad de muestra de sonidos de los dispositivos en tu versión de Windows.

![Fija la velocidad de muestra a «24 bit, 44100 Hz»](./samplingrate.png)

### Auriculares Razer con THX

Cambia la entrada de audio en Wallpaper Engine al dispositivo «Altavoces (Razer XYZ)». Dicha opción se encuentra en los ajustes generales y todos los auriculares Razer con efectos THX tendrían que funcionar gracias a esta solución.

## 3. Aplicaciones conflictivas

Si crees que la configuración del sonido es correcta, pero los fondos de pantalla con sonido no reaccionan como deberían, es muy probable que tengas algún componente o programa que deshabilita la función de grabación de bucle en el ordenador. Es necesario configurarla correctamente o eliminarla:

* Nahimic.
* Sonic Suite.
* Alienware Audio.
* Otras aplicaciones, sobre todo las que están preinstaladas en los portátiles.

Si no sabes con certeza si tienes alguna de las aplicaciones anteriores instaladas, puedes utilizar la herramienta de escaneo de Wallpaper Engine y te notificará qué programas suelen causar estos problemas:

* [Herramienta de escaneo de Wallpaper Engine.](/debug/scantool.html)

