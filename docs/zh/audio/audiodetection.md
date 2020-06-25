# 音频可视化工具无法正常工作/未检测到声音

音频可视化工具无法正常工作可能有多种原因。 我们在此处列出了所有已知的可能原因，请阅读完整指南，以确保充分了解可能导致其无法正常工作的所有原因。

## 1. 音频设备设置
请转到 Wallpaper Engine 设置，然后导航到“常规”选项卡。 您可以在该选项卡的中心位置找到“媒体”部分，然后在其中选择音频输入设备。 请确保选择了正确的设备。 如果不确定哪个设备正确，请在听音乐的同时尝试所有可能的设备，直到音频可视化工具开始工作。

如果选择了正确的音频设备，但您仍听不到任何音频，或者音频可视化工具无法正常工作，请确保您没有在 Windows 音频混音器中将 Wallpaper Engine 静音，也没有将其设置为非常安静的音量。 Windows 不区分音频录制和音频播放的音量。 这意味着，如果您在 Windows 中设置了较低的音量，那么音频录制也无法正常工作：

![Raise volume and unmute Wallpaper Engine in the Windows audio mixer](./audiomixer.png)

如果检测到了音频，但音频过于安静，请记住（音乐播放器、Web 浏览器等）应用程序的音量会影响音频检测质量。 如果不想提高应用程序音量（默认录制音量值为 50），则可在 Wallpaper Engine 设置的“常规”选项卡中增强声音检测。

## 2. 硬件特定问题

### Corsair Void Pro/蓝牙/USB 耳麦

USB/无线耳麦很容易出现声音驱动程序问题。 对于许多设备来说，将 Windows 设备设置中的音频采样频率更改为“44100 Hz”可以永久解决此问题：

右键单击 Windows 右下角托盘区域中的音频图标，然后选择“打开声音设置”。 在所打开窗口的“输出”部分中，单击“设备属性”。 然后单击“其他设备属性”，再导航到“高级”选项卡。 您可以在那里显示的菜单中更改采样频率。 确切的位置因 Windows 的版本而异。 如果找不到此选项，请在 Web 上搜索相关指南，了解如何更改您的 Windows 版本的声音设备采样频率。

![Set the sampling rate to "24 bit, 44100 Hz"](./samplingrate.png)

### Razer 耳麦（已通过 THX 认证）

Change the audio input in Wallpaper Engine to the 'Speakers (Razer XYZ)' device. This option is in the general settings and any Razer headset with THX effects should work with this solution.

## 3. Conflicting applications

If you believe your audio settings are correct but audio responsive wallpapers do not react to audio, you most likely have sound hardware or software that disables the loopback recording feature on the entire PC. It needs to be configured correctly or removed:

* Nahimic
* Sonic Suite
* Alienware Audio
* Various other applications, especially pre-installed ones on notebooks

If you are unsure if you have any such applications installed, you can also use the Wallpaper Engine scan tool and it will report some programs which are known to cause these issues:

* [Wallpaper Engine Scan Tool](/debug/scantool.html)

