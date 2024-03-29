# 音楽プレイヤーへのオーディオビジュアライザーの限定

Windowsのオーディオ機能により、Wallpaper Engine自体が選択した音楽プレイヤーにオーディオビジュアライザーを限定することはできません。 しかし、サードパーティーのソフトウェアを使って*フェイクの*オーディオデバイスを作り、これを達成することは可能です。 ここでは、そのようなフェイクのオーディオデバイスをセットする方法の一つと、このセットアップを正しく機能させるためのWindows 10とWallpaper Engineの設定方法を説明します。

ただ、私たちがフェイクのオーディオデバイスのサポートを提供するわけではないということと、これがうまく機能することを保証することはできないということにご注意ください。これは非常に進んだセットアップで、Wallpaper Engineが提供できる内容をはるかに超えています。 これは、システムの進んだカスタマイズを行いたいと思われるユーザーの皆様への役に立つヘルプとして提供されるだけです。

::: warning
ご注意ください
これは、Windows 10のアップデートされたバージョンでのみ機能します。 古いWindowsではいくつかの機能が欠けていて、このガイドの通りのことが行えない場合があります。 
:::

### フェイクオーディオデバイスのインストール

無料の**VB-CABLE Virtual Audio Device**をお勧めします。これは以下のサイトでダウンロードできます：

* [Virtual Audio Deviceのダウンロード](https://www.vb-audio.com/Cable/)

ファイルをダウンロードして解凍します。その後、お使いのWindows 10のバージョンに応じて、32-Bitの**VBCABLE_Setup.exe**または64-Bitの**VBCABLE_Setup_x64.exe**をインストールします。 右クリックして*管理者として実行*を選択し、管理者の権限でセットアップファイルを実行してください。 セットアップの指示に従い、オーディオデバイスを正しくインストールしましょう。

### WindowsとWallpaper Engineのセットアップ

下の動画をチェックしてください。ここでは、Windows 10（英語版）のすべての手順が最初から最後まで表示され、以下の手順を行う時の参考になります。

1. あとでWallpaper Engineで使いたいソフトウェアを使って、音楽を再生します。
2. Windowsのタスクトレイの時計の隣にあるオーディオアイコンを右クリックし、**サウンド設定を開く**を選択します。
3. 開いたページを一番下までスクロールし、**アプリの音量とデバイスの設定**をクリックします。
4. オーディオを再生するアプリケーションすべてがリスト表示されます。 使っている音楽プレイヤーを見つけ、**出力**の列で、オプションを**デフォルト**から**ケーブル入力(VB-Audio Virtual Cable)** に変更します。 オーディオプレイヤーは、すぐ音がしなくなります。これは予期された動作です。
5. Windowsのサウンド設定のメインページに戻り、右上の**サウンドコントロールパネル**を選択します。
6. 小さなウィンドウが開きます。**録音**タブを開き、**ケーブル出力**オーディオデバイスを右クリックして**プロパティ**を選択します。
7. また別のウィンドウが開きます。**聴く**タブをクリックし、**このデバイスを聴く**を選択します。 **適用**と**OK**をクリックします。これで音楽プレイヤーの音楽が戻ってくるはずです。
8. これでWindowsは正常に設定されました。**Wallpaper Engine設定**を開き、**一般**タブで**出力デバイス**を**ケーブル入力(VB-Audio Virtual Cable)** に変更します。 Wallpaper Engineはこれで音楽プレイヤーからの音楽に反応しつつ、コンピュータの他のアプリケーションは無視するようになるはずです。

*上記の手順のすべてを表示する動画：*

<video width="100%" controls>
  <source src="/videos/audioinputdevice.mp4" type="video/mp4">
  お使いのブラウザが動画タグをサポートしていません。
</video>
