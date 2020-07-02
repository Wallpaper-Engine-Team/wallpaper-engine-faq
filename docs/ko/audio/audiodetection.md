# 오디오 시각화 도우미가 작동하지 않습니다 / 사운드가 검색되지 않습니다

오디오 시각화 도우미가 작동하지 않는 데는 여러 이유가 있습니다. 여기 가능한 모든 이유가 있으니, 가이드를 모두 읽어 작동하지 않는 이유를 놓치지 않으시기 바랍니다.

## 1. 오디오 장치 설정
Wallpaper Engine 설정으로 이동하여 "일반" 탭을 탐색하시길 바랍니다. 중앙에서 오디오 입력 장치를 선택할 수 있는 "미디어" 섹션을 찾을 수 있습니다. 올바른 장치가 선택되어 있는지 확인하세요. 어느 장치가 올바른지 모르겠다면, 음악을 들으며 오디오 시각화 도우미가 작동할 때까지 가능한 장치를 모두 시험해 보세요.

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

