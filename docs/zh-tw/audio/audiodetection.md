# 音訊可視化工具/未偵測到音訊

音訊可視化工具無法運作的原因有很多。 以下列出已知的可能原因，請閱讀完整指南，確保您知道所有無法運作的原因。

## 1. 音訊裝置設定
前往 Wallpaper Engine 設定與並瀏覽「一般」標籤。 您可到中心位置找到「媒體」部分選取音訊輸入裝置。 確定已選取正確的裝置。 如果您不確定哪一個是正確的裝置，可邊聽音樂，邊確認所有可能的裝置，一直到音訊可視化工具開始運作。

如果您選取了正確的音訊裝置，但仍聽不見任何音訊，或者音訊可視化工具並未運作，請確保您並未在 Windows 音訊混音器中將 Wallpaper Engine 靜音，也未設定為極低的音量。 Windows 並不會分辨音訊錄製與音訊播放這兩種功能， 如果您在 Windows 調低音量，音訊錄音功能也會無法運作：

![Raise volume and unmute Wallpaper Engine in the Windows audio mixer](./audiomixer.png)

如果已偵測到音訊但過於安靜，請記得應用程式的音量 (如您的音樂播放程式、網頁瀏覽器等) 也會影響偵測音訊的效果。 如果您不想調高應用程式音量 (預設錄製音量為 50)，可至 Wallpaper Engine 設定中的「一般」標籤裡加強音訊偵測。

## 2. 硬體相關問題

### Corsair Void Pro/藍牙/USB 耳機

USB/無線耳機容易出現音效驅動程式問題。 許多裝置都可永久解決此問題，只要到 Windows 裝置設定中調整音訊取樣率至 44100 Hz 即可：

在 Windows 桌面右下角通知區域的音訊圖示上按滑鼠右鍵，選取「開啟音效設定」。 Click on "Device Properties" in the "Output" section of the window that opens up. Afterwards, click on "Additional device properties", then navigate to the "Advanced" tab. You can change the sampling rate in the menu shown there. The exact location is different on different versions of Windows. if you cannot find this option, search the web for guides on how to change the sampling rate of sound devices for your version of Windows.

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

