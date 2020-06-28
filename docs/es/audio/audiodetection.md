# Los visualizadores de audio no funcionan / No se detecta sonido

Los visualizadores de audio pueden dejar de funcionar por varios motivos. Aquí tenemos una lista de todas las razones posibles. Lea la guía al completo para asegurarse de que no se pierda ninguno de los posibles motivos por los que no funciona.

## 1. Instalación del dispositivo de audio
Vaya a la configuración de «Wallpaper Engine» y diríjase a la etiqueta «General». En la zona del centro podrá ver la sección «Multimedia», donde podrá elegir un dispositivo de entrada de audio. Asegúrese de que se ha seleccionado el dispositivo correcto. Si no está seguro de cuál es dicho dispositivo, pruébelos todos mientras escucha música hasta que empiezan a funcionar los visualizadores de audio.

Si se ha seleccionado el dispositivo correcto, pero todavía no puede oír nada o el visualizador no funciona, asegúrese de que no ha silenciado Wallpaper Engine en el mezclador de Windows o de que no lo tenga a un volumen muy bajo. Windows no diferencia entre los volúmenes de grabación y reproducción de sonido. Esto significa que si tiene el volumen bajo en Windows, la grabadora no funcionará.

![Raise volume and unmute Wallpaper Engine in the Windows audio mixer](./audiomixer.png)

Si detecta el sonido, pero está muy bajo, tenga en cuenta que el volumen de la aplicación (del reproductor de música, del navegador, etc.) afecta a la detección de sonido. Si no quiere subir el volumen de la aplicación, puede mejorar la detección de sonido en la pestaña «General» de los ajustes de Wallpaper Engine (el volumen de grabación por defecto es 50).

## 2. Problemas con el hardware

### Corsair Void Pro / Bluetooth / Auriculares USB

Los auriculares USB o inalámbricos tienden a tener problemas con los controladores de sonido. En muchos dispositivos se solucionan al cambiar la frecuenta de muestreo de audio a 44100 Hz en los ajustes del dispositivo de Windows.

Right-click on the audio icon in the tray area in the lower right corner of Windows, select "Open Sound Settings". Click on "Device Properties" in the "Output" section of the window that opens up. Afterwards, click on "Additional device properties", then navigate to the "Advanced" tab. You can change the sampling rate in the menu shown there. The exact location is different on different versions of Windows. if you cannot find this option, search the web for guides on how to change the sampling rate of sound devices for your version of Windows.

![Set the sampling rate to "24 bit, 44100 Hz"](./samplingrate.png)

### Razer headsets with THX

Change the audio input in Wallpaper Engine to the 'Speakers (Razer XYZ)' device. This option is in the general settings and any Razer headset with THX effects should work with this solution.

## 3. Conflicting applications

If you believe your audio settings are correct but audio responsive wallpapers do not react to audio, you most likely have sound hardware or software that disables the loopback recording feature on the entire PC. It needs to be configured correctly or removed:

* Nahimic
* Sonic Suite
* Alienware Audio
* Various other applications, especially pre-installed ones on notebooks

If you are unsure if you have any such applications installed, you can also use the Wallpaper Engine scan tool and it will report some programs which are known to cause these issues:

* [Wallpaper Engine Scan Tool](/debug/scantool.html)

