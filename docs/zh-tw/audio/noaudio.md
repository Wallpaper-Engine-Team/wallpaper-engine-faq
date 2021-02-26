# 無音訊播放/音訊輸出問題
本指南將協助您了解任何與桌布音訊播放有關的問題。 首先，您應多試用其他幾款桌布，確認目前正在使用的桌布確實包含音訊。 許多桌布完全不含音訊。 如果您確定桌布包含音訊，請繼續閱讀。

::: warning
請注意 如果聲音幾秒鐘內斷斷續續，請改閱讀以下指南：

* [聲音/音訊斷斷續續](/audio/intermittent)
:::

## 確定 Wallpaper Engine 不會自動靜音
本應用程式中有三個地方可以將音訊輸出靜音：

1. 在 Wallpaper Engine 設定的**一般**分頁，有個選項為**音訊輸出**。 確定此選項已啟用。
2. 按一下 Wallpaper Engine 主視窗右上角的**顯示器**按鈕， 之後將可瀏覽所有螢幕畫面。 每個螢幕畫面的左下角皆有靜音按鈕， 可在此確定您的螢幕並未靜音。
3. When selecting a wallpaper, you will find a **Volume** option on the right-hand side, make sure it is not set to zero or a low volume. If the option says **Audio disabled in display settings**, your display is muted, check step 2 again and unmute your screen.

## 確認 Windows 音訊混音器
Wallpaper Engine lets all audio output be handled by Windows, so if Wallpaper Engine itself is not muted, the issue must be somewhere in your Windows setup. First, check the Windows audio mixer and ensure that Wallpaper Engine is not muted or set to a very low volume, as shown in the following screenshot:

![Raise volume and unmute Wallpaper Engine in the Windows audio mixer](./audiomixer.png)

## 檢查選取的音訊工具
Another possible reason for the lack of audio output could be that Windows has selected the wrong audio output device for Wallpaper Engine, try manually forcing your desired audio output device to be used:

1. Right-click on the audio icon next to the clock in the Windows tray and select **Open Sound settings**.
2. Scroll down to the bottom of the page that opens and click on **App volume and device preferences**.
3. A list of all applications playing audio will be shown. Find Wallpaper Engine and in the **Output** column, select the correct audio output device. If you are unsure, try all possible options. A restart of Wallpaper Engine may be necessary for this to take effect.

If you use multiple audio devices (especially when using USB or Bluetooth audio devices) and notice that audio cuts out when a device disconnects or reconnects, Windows sometimes does not reliably switch audio devices on-the-fly for running programs. This cannot be fixed from our end, in these rare cases you may need to restart Wallpaper Engine so that Windows starts to correctly handle the audio output again. You can also try and reinstall and update any audio drivers and see if that alleviates these types of issues.

## Reset all audio codecs

If audio output is still not playing at this point, some audio codecs may be broken, this is mainly relevant when using **Video** type wallpapers. You can double-check this by right-clicking on your wallpaper in Wallpaper Engine and selecting **Open in Explorer**. You should see the source video file (usually an **.mp4** file), open that file with Windows Media Player and check if it plays audio. **Please note:** It is very important that you test this with Windows Media Player only - other video players are irrelevant for this test as the underlying audio codecs are used by Wallpaper Engine as well. If no audio is playing in Windows Media Player, then either the video file does not have audio or the audio codecs on your system are indeed broken or missing.

In that case, you can use the *Codec Tweak Tool* as explained on the following page to reset all audio and video codecs on your system, afterwards restart Wallpaper Engine and try again:

* [Videos Black / Not Playing Properly - Codec Tweak Tool](noshow/notplaying.html#codec-tweak-tool)

