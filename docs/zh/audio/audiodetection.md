# 音频可视化工具无法正常工作/未检测到声音

音频可视化工具无法正常工作可能有多种原因。 我们在此处列出了所有已知的可能原因，请阅读完整指南，以确保充分了解可能导致其无法正常工作的所有原因。

## 1. 音频设备设置
请转到 Wallpaper Engine 设置，然后导航到“常规”选项卡。 您可以在该选项卡的中心位置找到“媒体”部分，然后在其中选择音频输入设备。 请确保选择了正确的设备。 如果不确定哪个设备正确，请在听音乐的同时尝试所有可能的设备，直到音频可视化工具开始工作。

如果选择了正确的音频设备，但您仍听不到任何音频，或者音频可视化工具无法正常工作，请确保您没有在 Windows 音频混音器中将 Wallpaper Engine 静音，也没有将其设置为非常安静的音量。 Windows 不区分音频录制和音频播放的音量。 这意味着，如果您在 Windows 中设置了较低的音量，那么音频录制也无法正常工作：

![Raise volume and unmute Wallpaper Engine in the Windows audio mixer](./audiomixer.png)

如果检测到了音频，但音频过于安静，请记住（音乐播放器、Web 浏览器等）应用程序的音量会影响音频检测质量。 You can boost the sound detection in the "General" tab of the Wallpaper Engine settings if you do not want to increase the application volume (the default recording volume value is 50).

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

