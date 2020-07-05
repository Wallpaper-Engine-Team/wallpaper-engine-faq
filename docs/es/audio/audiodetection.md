# Los visualizadores de audio no funcionan / No se detecta sonido

Los visualizadores de audio pueden dejar de funcionar por varios motivos, y aquí tenemos una lista de todas las razones posibles. Lea la guía al completo y asegúrese de no perderse ninguno de los motivos posibles por los que podría no funcionar.

## 1. Instalación del dispositivo de audio
Vaya a la configuración de «Wallpaper Engine» y diríjase a la etiqueta «General». En la zona del centro encontrará la sección «Multimedia», donde podrá elegir un dispositivo de entrada de audio. Asegúrese de que se ha seleccionado el dispositivo correcto. Si no sabe con certeza cuál es dicho dispositivo, pruébelos todos mientras escucha música hasta que empiecen a funcionar los visualizadores de audio.

Si se ha seleccionado el dispositivo correcto, pero todavía no puede oír nada o el visualizador no funciona, asegúrese de que no ha silenciado Wallpaper Engine en el mezclador de Windows o de que no lo tenga a un volumen muy bajo. Windows no diferencia entre los volúmenes de grabación y reproducción de sonido. Esto significa que si tiene el volumen bajo en Windows, no se podrá grabar el audio:

![Suba el volumen y active el sonido de Wallpaper Engine en el mezclador de sonidos de Windows](./audiomixer.png)

Si detecta el sonido, pero está muy bajo, tenga en cuenta que el volumen del programa (del reproductor de música, del navegador, etc.) afecta a la detección de sonido. Si no quiere subir el volumen del programa, puede mejorar la detección de sonido en la pestaña «General» de los ajustes de Wallpaper Engine (el volumen de grabación por defecto es 50).

## 2. Problemas con el hardware

### Corsair Void Pro / Bluetooth / Auriculares USB

Los auriculares USB o inalámbricos tienden a tener problemas con los controladores de sonido. En muchos dispositivos se solucionan al cambiar la frecuenta de muestreo de audio a 44100 Hz en los ajustes del dispositivo de Windows.

Haga clic derecho en el icono de sonido en la parte inferior derecha de la barra de Windows y después haga clic en «Abrir Configuración de sonido». Haga clic en «Propiedades del dispositivo» en la sección de «Salida» de la ventana que se ha abierto. Acto seguido, haga clic en «Propiedades adicionales del dispositivo» y vaya directamente a la pestaña «Opciones avanzadas». Ahí puede cambiar la velocidad de muestra. La ubicación exacta puede variar dependiendo de la versión de Windows. Si no consigue encontrar la opción, busque guías en internet de cómo cambiar la velocidad de muestra de sonidos de los dispositivos en su versión de Windows.

![Fije la velocidad de muestra a "24 bit, 44100 Hz"](./samplingrate.png)

### Auriculares Razer con THX

Cambia la entrada de audio en Wallpaper Engine al dispositivo «Altavoces (Razer XYZ)». Dicha opción se encuentra en los ajustes generales y todos los auriculares Razer con efectos THX tendrían que funcionar gracias a esta solución.

## 3. Aplicaciones conflictivas

Si cree que la configuración del sonido es correcta, pero los fondos de pantalla con sonido no reaccionan como deberían, es muy probable que tenga algún hardware o software que deshabilite la función de bucle de grabación en el ordenador. Es necesario configurarla correctamente o eliminarla:

* Nahimic
* Sonic Suite
* Alienware Audio
* Otras aplicaciones, sobre todo las que están preinstaladas en los portátiles

Si no sabe con certeza si tiene alguna de las aplicaciones anteriores instaladas, puede utilizar la herramienta de escaneo de Wallpaper Engine y le notificará diversos programas que suelen causar estos problemas.

* [Herramienta de escaneo de Wallpaper Engine](/debug/scantool.html)

