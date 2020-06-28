# Los visualizadores de audio no funcionan / No se detecta sonido

Hay múltiples razones por que los visualizadores de audio podrían no funcionar. Estamos enlistando todas las razones posibles conocidas aquí, por favor lea la guía completa para asegurarse de que no se ha perdido ninguna de las posibles razones de por qué no funciona.

## 1. Instalación del dispositivo de audio
Vaya a la configuración de "Wallpaper Engine" y busque la etiqueta "General". Directo en el centro puede encontrar la sección "Media" donde podrá seleccionar un dispositivo de entrada de audio. Asegúrese de que el dispositivo correcto esté seleccionado. Si no está seguro de cual es el dispositivo correcto, pruebe todos los posibles dispositivos mientras está escuchando música, hasta que el visualizador de audio comience a funcionar.

Si el dispositivo correcto de audio está seleccionado pero aún no puede oír ningún audio o su visualizador de audio no funciona, asegúrese de que no está silenciando el "Wallpaper Engine" en el mezclador de audio de Windows o que lo tenga a un volumen muy bajo. Windows no diferencia entre los volumenes para grabar audios y el reproductor de audios. Esto significa que si tiene puesto un volumen bajo en Windows, la grabadora de audios tampoco funcionará:

![Raise volume and unmute Wallpaper Engine in the Windows audio mixer](./audiomixer.png)

Si el audio es detectado pero su volumen es muy bajo, tenga en mente que el volumen de la aplicación (de su reproductor de música, navegador web, etc.) afecta a que tan bien se detecta el audio. Puede potenciar la detección de sonido en la etiqueta "General" de la configuración de "Wallpaper Engine" en caso de que no quiera incrementar el volumen de la aplicación (el valor de volumen por defecto de la grabadora es de 50).

## 2. Hardware-specific issues

### Corsair Void Pro / Bluetooth / USB headsets

USB / wireless headsets are prone to sound driver issues. For many devices, changing the audio sample rate in the Windows device settings to 44100 Hz permanently fixes the issue:

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

