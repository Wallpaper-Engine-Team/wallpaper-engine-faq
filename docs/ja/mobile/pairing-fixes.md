## モバイルのペアリングに関する問題の解決

モバイルデバイスをPCとペアリングできない場合は、ファイアーウォールまたはローカルネットワークの設定が原因である可能性がかなり高いです。 次の方法で、問題の原因の可能性を調べてください：

* **スマートフォンとPCが同じローカルネットワークに接続されていることを確認します。**
  * Your computer does not need wifi, it is still the same network even if it is connected through a network cable.
* **ファイアーウォールが、Wallpaper Engineのローカルネットワークとの通信をブロックしていないことを確認します。**
  * Wallpaper Engine sends a multi-casts on the network ports 7884 (UDP) and 7889 (TCP), make sure no firewall is blocking this.
* **デバイス間の通信を妨げる可能性のある、PCならびにモバイルデバイス上のあらゆるタイプのVPNまたはプロキシソフトウェアを無効にしてください。**
* **ネットワークルーターが、デバイス同士の通信をブロックしていないことを確認します。**
    * ルーターがデバイス間のネットワークトラフィックを干渉していないかを確認してください。
    * ルーター側の設定で**UPnP** (**Universal Plug and Play**)を有効にしてください。
* **Windows上とモバイルデバイス上のWallpaper Engineが、どちらも最新で起動していることを確認します。**

## Windows Firewall

Especially if your mobile device can find your computer but fails to connect to it, it's almost definitely caused by a firewall on your computer. When you first launch Wallpaper Engine, it will prompt you to grant it permission to your network. If you closed this window or did not specifically allow **ui32.exe** to communicate with your network, the Windows firewall will block Wallpaper Engine. Make sure to allow **ui32.exe** to communicate as shown in this screenshot:

![Windows Firewall Permissions](/img/faq/windows_defender.png)

Wallpaper Engine will automatically suggest firewall fixes if it detects any problems. This process is somewhat reliable but in some cases you may still need to manually clear any blocks you may have created in the past by accident.

If you have not granted Wallpaper Engine these permissions, the Windows firewall will automatically block Wallpaper Engine. Open the Windows firewall settings, then click on **Allow an app through firewall**. Search for an entry called **ui32** and either delete it or make sure both check marks in the *Private* and *Public* column are enabled, then confirm your changes and restart Wallpaper Engine.

Make sure to look for **ui32** or **Wallpaper Engine UI** - you may find entries called just **Wallpaper Engine** but these are irrelevant here.

**Please note:** This section is specifically only about the built-in Windows firewall, if you use any other antivirus app or firewall, you need to make sure Wallpaper Engine is not being blocked by them.

### バックアップソリューション：壁紙ファイル（.mpkg）を手動でインポート

PCとモバイルデバイス間の接続を修正できない場合でも、手動で壁紙をモバイルデバイスに転送することができます。 まず、Wallpaper Engineでエクスポートしたい壁紙を選択し、右クリックをして**モバイルデバイスに送信**を選択後、**.mpkgをエクスポート**をクリックしてください。

<video width="100%" controls autoplay loop>
  <source src="/videos/mobile_export.mp4" type="video/mp4">
  お使いのブラウザは動画タグをサポートしていません。
</video>

Wallpaper Engineによって指定の壁紙の.mpkgファイルが作成されたら、USB経由またはファイルをSDカードにコピーすることでモバイルデバイスに転送することができます。 また、モバイルデバイス上でファイル共有サービス、メッセージングサービスもしくはメール機能（ファイル サイズに問題がない場合のみ) を利用して自分自身に送信するという方法もあります。

ファイルがモバイルデバイス側に保存されたら同デバイス上でWallpaper Engineを開き、**ファイルをインポート**を選択してください。ファイルが保存されているディレクトリから.mpkgファイルを選択することで、アプリに直接インポートすることができます。