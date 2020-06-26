# La visualisation audio ne fonctionne pas / Aucun son détecté

La visualisation audio peut ne pas fonctionner à cause de plusieurs raisons. Voici une liste de tous les facteurs qui pourraient être à la source de vos problèmes.

## 1. Audio device setup
Go to the Wallpaper Engine settings and navigate to the "General" tab. Towards the center you can find the "Media" section where you can select an audio input device. Make sure the correct device is selected. If you are unsure which device is correct, try all possible devices while listening to music until the audio visualizers start working.

If the correct audio device is selected but you can still not hear any audio or if your audio visualizers do not work, ensure you are not muting Wallpaper Engine in the Windows audio mixer or have it set to a very quiet volume. Windows does not differentiate between the volumes for audio recording and audio playback. This means that if you have set a low volume in Windows, audio recording will also not work:

![Raise volume and unmute Wallpaper Engine in the Windows audio mixer](./audiomixer.png)

If audio is detected but is too quiet, keep in mind that the application volume (of your music player, web browser, etc.) affects how well audio is detected. You can boost the sound detection in the "General" tab of the Wallpaper Engine settings if you do not want to increase the application volume (the default recording volume value is 50).

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

