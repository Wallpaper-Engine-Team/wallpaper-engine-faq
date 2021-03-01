# 音が出ません / オーディオ出力の問題
このヘルプは、壁紙のオーディオ再生に関連した問題を解決するためのものです。 まず、何枚かの壁紙を試して、実際にオーディオが含まれている壁紙を使っていることを確認してください。 全く音のない壁紙はたくさんあります。 壁紙にオーディオが含まれていることが確認できたら、このガイドを読み進めてください。

::: warning
ご注意ください 数秒の間に音が聞こえたり消えたりする場合は、ここではなく次のガイドをお読みください：

* [サウンドやオーディオが断続的にオンオフされる](/audio/intermittent)
:::

## Wallpaper Engineがミュートになっていないことを確認する
オーディオ出力をミュートにできる場所は3つあります：

1. Wallpaper Engine設定の**一般**タブには、**オーディオ出力**というオプションがあります。 これが有効になっていることを確認してください。
2. Wallpaper Engineのメイン画面で、右上の**ディスプレイ**ボタンをクリックします。 これにより、お使いのすべての画面の概要が表示されます。 各画面には、左下にミュートボタンがあります。 画面がミュートになっていないことを確認してください。
3. 壁紙を選択すると、右側に**音量**オプションがあります。これがゼロや低音量になっていないことを確認してください。 **ディスプレイ設定にて音声無効**と表示されている場合は、ディスプレイがミュートになっています。ステップ2をもう一度確認し、画面のミュートを解除してください。

## Windowsのオーディオミキサーを確認する
Wallpaper Engineはすべてのオーディオ出力をWindowsに任せています。Wallpaper Engineそのものがミュートになっていない場合、問題はWindows設定のどこかにあると考えられます。 まず、Windowsのオーディオミキサーを見て、Wallpaper Engineがミュートや低音量になっていないことを確認します。次のスクリーンショットをご覧ください：

![Raise volume and unmute Wallpaper Engine in the Windows audio mixer](./audiomixer.png)

## 選択されたオーディオデバイスを確認する
Another possible reason for the lack of audio output could be that Windows has selected the wrong audio output device for Wallpaper Engine, try manually forcing your desired audio output device to be used:

1. Right-click on the audio icon next to the clock in the Windows tray and select **Open Sound settings**.
2. Scroll down to the bottom of the page that opens and click on **App volume and device preferences**.
3. A list of all applications playing audio will be shown. Find Wallpaper Engine and in the **Output** column, select the correct audio output device. If you are unsure, try all possible options. A restart of Wallpaper Engine may be necessary for this to take effect.

If you use multiple audio devices (especially when using USB or Bluetooth audio devices) and notice that audio cuts out when a device disconnects or reconnects, Windows sometimes does not reliably switch audio devices on-the-fly for running programs. This cannot be fixed from our end, in these rare cases you may need to restart Wallpaper Engine so that Windows starts to correctly handle the audio output again. You can also try and reinstall and update any audio drivers and see if that alleviates these types of issues.

## Reset all audio codecs

If audio output is still not playing at this point, some audio codecs may be broken, this is mainly relevant when using **Video** type wallpapers. You can double-check this by right-clicking on your wallpaper in Wallpaper Engine and selecting **Open in Explorer**. You should see the source video file (usually an **.mp4** file), open that file with Windows Media Player and check if it plays audio. **Please note:** It is very important that you test this with Windows Media Player only - other video players are irrelevant for this test as the underlying audio codecs are used by Wallpaper Engine as well. If no audio is playing in Windows Media Player, then either the video file does not have audio or the audio codecs on your system are indeed broken or missing.

In that case, you can use the *Codec Tweak Tool* as explained on the following page to reset all audio and video codecs on your system, afterwards restart Wallpaper Engine and try again:

* [Videos Black / Not Playing Properly - Codec Tweak Tool](noshow/notplaying.html#codec-tweak-tool)

