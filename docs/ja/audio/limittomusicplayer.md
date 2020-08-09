# 音楽プレイヤーへのオーディオビジュアライザーの制限

Windowsのオーディオ機能により、Wallpaper Engine自体が選択した音楽プレイヤーへのオーディオビジュアライザーを制限することはできません。 しかし、サードパーティーのソフトウェアを使って*フェイクの*オーディオデバイスを作り、これを達成することは可能です。 ここでは、そのようなフェイクのオーディオデバイスをセットする方法の一つと、このセットアップを正しく機能させるためのWindows 10とWallpaper Engineの設定方法を説明します。

ただ、私たちがフェイクのオーディオデバイスのサポートを提供するわけではないということと、これがうまく機能することを保証することはできないということにご注意ください。これは非常に進んだセットアップで、Wallpaper Engineが提供できる内容をはるかに超えています。 これは、システムの進んだカスタマイズを行いたいと思われるユーザーの皆様への役に立つヘルプとして提供されるだけです。

::: warning
ご注意ください これは、Windows 10のアップデートされたバージョンでのみ機能します。 古いWindowsではいくつかの機能が欠けていて、このガイドの通りのことが行えない場合があります。
:::

### フェイクオーディオデバイスのインストール

無料の**VB-CABLE Virtual Audio Device**をお勧めします。これは以下のサイトでダウンロードできます：

* [Virtual Audio Deviceのダウンロード](https://www.vb-audio.com/Cable/)

ファイルをダウンロードして解凍します。その後、お使いのWindows 10のバージョンに応じて、32-Bitの**VBCABLE_Setup.exe**または64-Bitの**VBCABLE_Setup_x64.exe**をインストールします。 右クリックして*管理者として実行*を選択し、管理者の権限でセットアップファイルを実行してください。 セットアップの指示に従い、オーディオデバイスを正しくインストールしましょう。

### WindowsとWallpaper Engineのセットアップ

Check the video below which shows all the steps on an Windows 10 (English interface) from start to finish if you need some help with any of the steps below.

1. Start playing music using the software that you later want to be used for Wallpaper Engine
2. Right-click on the audio icon next to the clock in the Windows tray and select **Open Sound settings**.
3. Scroll down to the bottom of the page that opens and click on **App volume and device preferences**.
4. A list of all applications playing audio will be shown. Find your music player and in the **Output** column, change the option from **Default** to **CABLE Input (VB-Audio Virtual Cable)**. Your audio player should immediately turn quiet, this is to be expected.
5. Go back to the main page of the Windows sound settings and in the upper right corner, select **Sound Control Panel**.
6. A small window will appear, navigate to the **Recording** tab, then right-click on the **CABLE Output** audio device and select **Properties**.
7. Another window will appear, click on the **Listen** tab and select **Listen to this device**. Click on **Apply** and **OK** and the music from your music player should return.
8. Windows is now properly configured, open up the **Wallpaper Engine settings** and in the **General** tab, change the **Audio recording device** to **CABLE Input (VB-Audio Virtual Cable)**. Wallpaper Engine should now start reacting to the music from your music player but will ignore any other application on your computer.

*Video showcasing all the steps described above:*

<video width="100%" controls>
  <source src="/videos/audioinputdevice.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
