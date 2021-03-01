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
もう一つ、オーディオ出力がない場合に考えられる原因としては、WindowsがWallpaper Engineに対して間違った出力デバイスを選択している可能性が考えられます。希望するオーディオ出力が使用されるように、手動で設定してみてください：

1. Windowsのタスクトレイの時計の隣にあるオーディオアイコンを右クリックし、**サウンド設定を開く**を選択します。
2. 開いたページを一番下までスクロールし、**アプリの音量とデバイスの設定**をクリックします。
3. オーディオを再生するアプリケーションすべてがリスト表示されます。 **出力**の列でWallpaper Engineを見つけ、正しいオーディオ出力デバイスを選択します。 どれが正しいか自信がない時は、可能なオプションを全部試してみましょう。 この変更が反映されるためには、Wallpaper Engineの再起動が必要になることがあります。

複数のオーディオデバイスを使用（特に、USBまたはBluetoothデバイスを使用）していて、デバイスを切断したり再接続したりした時に音が途切れる場合、Windowsは実行中のプログラムに対して正しくオーディオデバイスを切り替えられないことがあります。 これは、Wallpaper Engineの側からは修正できません。このようなレアケースについては、Windowsがオーディオ出力を再びきちんと制御できるようにするために、Wallpaper Engineの再起動が必要になることがあります。 また、オーディオドライバの再インストールやアップデートによって、事態の改善を試みることもできます。

## 全部のオーディオコーデックをリセットする

この時点でもオーディオ出力が再生されない場合、オーディオコーデックが破損している可能性があります。これは主に、**ビデオ**タイプの壁紙を使用している時に発生します。 You can double-check this by right-clicking on your wallpaper in Wallpaper Engine and selecting **Open in Explorer**. You should see the source video file (usually an **.mp4** file), open that file with Windows Media Player and check if it plays audio. **Please note:** It is very important that you test this with Windows Media Player only - other video players are irrelevant for this test as the underlying audio codecs are used by Wallpaper Engine as well. If no audio is playing in Windows Media Player, then either the video file does not have audio or the audio codecs on your system are indeed broken or missing.

In that case, you can use the *Codec Tweak Tool* as explained on the following page to reset all audio and video codecs on your system, afterwards restart Wallpaper Engine and try again:

* [Videos Black / Not Playing Properly - Codec Tweak Tool](noshow/notplaying.html#codec-tweak-tool)

