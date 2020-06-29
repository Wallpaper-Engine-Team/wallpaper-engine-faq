# オーディオビジュアライザーが機能しません / サウンドが検知されません

オーディオビジュアライザーが機能しない理由としてはいくつかの原因が考えられます。 ここに、現時点でわかっている原因可能性をすべてリストアップしました。フルガイドをお読みいただき、機能しない原因として見落としているものがないか、ご確認ください。

## 1. オーディオデバイスのセットアップ
Wallpaper Engine の設定画面で、「一般」タブを開きます。 中ほどに「メディア」セクションがあります。ここでオーディオ入力デバイスを選択することができます。 正しいデバイスが選択されていることを確認してください。 どのデバイスが正しいのかよくわからない場合は、音楽を聴きながら可能性のあるデバイスをすべて、オーディオビジュアライザーが動くまで試してください。

正しいオーディオデバイスが選択されているにもかかわらず、音が全く聞こえなかったりオーディオビジュアライザーが動かなかったりする場合は、Windows で Wallpaper Engine がミュートされていないか、また、非常にボリュームが低くなっていないかを確認してください。 Windows は、録音と再生のボリュームを区別しません。 すなわち、Windows のボリュームが低くなっていると、録音も機能しません。

![Raise volume and unmute Wallpaper Engine in the Windows audio mixer](./audiomixer.png)

オーディオが検知されていても非常に音が小さい場合は、アプリケーション（音楽プレイヤー、Webブラウザなど）のボリュームがオーディオの検知状態に影響を与えるという点にご注意ください。 アプリケーションのボリュームを上げたくない場合は、Wallpaper Engine 設定の「一般」タブでサウンド検知をブーストすることができます（デフォルトの録音ボリュームは50です）。

## 2. 特定のハードの問題

### Corsair Void Pro / Bluetooth / USB ヘッドセット

USBやワイヤレスのヘッドセットでは、サウンドドライバーの問題がよく発生します。 多くのデバイスでは、Windows のデバイス設定でオーディオサンプルレートを 44100 Hz に固定すると、問題を解消することができます。

Windows の右下にあるトレイエリアでオーディオアイコンを右クリックし、「サウンド設定を開く」を選択します。 開いたウィンドウで、「出力」セクションの「デバイスのプロパティ」をクリックします。 その後、「追加デバイスのプロパティ」をクリックし、「詳細」タブに進みます。 そこのメニューからサンプリングレートを変更することができます。 このオプションの場所は、Windows のバージョンによって異なります。 このオプションが見つからない場合は、インターネットで検索し、お使いの Windows のバージョンでのサウンドデバイスのサンプリングレートの変更方法をお探しください。

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

