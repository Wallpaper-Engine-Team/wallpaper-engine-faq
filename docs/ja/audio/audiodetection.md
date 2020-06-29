# オーディオビジュアライザーが機能しません / サウンドが検知されません

オーディオビジュアライザーが機能しない理由としてはいくつかの原因が考えられます。 ここに、現時点でわかっている原因可能性をすべてリストアップしました。フルガイドをお読みいただき、機能しない原因として見落としているものがないか、ご確認ください。

## 1. オーディオデバイスのセットアップ
Wallpaper Engine の設定画面で、「一般」タブを開きます。 中ほどに「メディア」セクションがあります。ここでオーディオ入力デバイスを選択することができます。 正しいデバイスが選択されていることを確認してください。 どのデバイスが正しいのかよくわからない場合は、音楽を聴きながら可能性のあるデバイスをすべて、オーディオビジュアライザーが動くまで試してください。

正しいオーディオデバイスが選択されているにもかかわらず、音が全く聞こえなかったりオーディオビジュアライザーが動かなかったりする場合は、Windows で Wallpaper Engine がミュートされていないか、また、非常にボリュームが低くなっていないかを確認してください。 Windows は、録音と再生のボリュームを区別しません。 すなわち、Windows のボリュームが低くなっていると、録音も機能しません。

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

