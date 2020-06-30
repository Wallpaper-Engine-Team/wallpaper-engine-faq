# Visualizadores de áudio não funcionam / nenhum som detetado

Há várias razões pelas quais os visualizadores de áudio podem não funcionar. Enumeramos aqui todas as razões possíveis, leia atentamente o guia completo para garantir que não lhe escapou nenhuma das razões possíveis pela qual eles não funcionam.

## 1. Configuração do dispositivo de áudio
Vá às definições do Wallpaper Engine e navegue até ao separador "Geral". Perto do centro poderá encontrar a secção "Multimédia", na qual poderá selecionar um dispositivo de entrada de áudio. Certifique-se de que selecionou o dispositivo correto. Se não tem a certeza de qual será o dispositivo correto, experimente todos os dispositivos possíveis enquanto ouve música atá os visualizadores de áudio começarem a funcionar.

Se o dispositivo de áudio c orreto for selecionado mas continuar a nãoi ouvir qualquer som ou se os seus visualizadores de áudio não funcionarem, certifique-se de que não silenciou o Wallpaper Engine no misturador de áudio do Windows ou que definiu um volume muito baixo para ele. O Windows não diferencia entre os volumes para gravação de áudio e reprodução de áudio. Isto significa que se tiver definido um volume baixo no Windows, a gravação de áudio também não funcionará:

![Raise volume and unmute Wallpaper Engine in the Windows audio mixer](./audiomixer.png)

Se o áudio for detetado mas o volume estiver demasiado baixo, tenha em conta que o volume da aplicação (do seu reprodutor de áudio, browser da web, etc.) afeta a forma como o áudio é detetado. Pode reforçar o a deteção de som n o separador "Geral" das definições do Wallpaper Engine se não quiser aumentar o volume da aplicação (o valor predefinido para o volume de gavação é 50).

## 2. Propblemas específicos de hardware

### Corsair Void Pro / Bluetooth / Auscultadores USB

Os auscultadores USB / sem fios são atreiros a problemas com o controlador de som. For many devices, changing the audio sample rate in the Windows device settings to 44100 Hz permanently fixes the issue:

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

