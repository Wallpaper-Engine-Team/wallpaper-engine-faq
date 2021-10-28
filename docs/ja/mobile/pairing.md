# モバイルデバイスとWindowsのペアリング

モバイルデバイスとPCをペアリングすると、ワイヤレスで壁紙コレクションをモバイルデバイス上のWallpaper Engineコンパニオンアプリに転送することができます。 Androidアプリから直接、Steamワークショップから壁紙をダウンロードすることはできません。これは、壁紙ファイルのダウンロードがSteamでしか行なえないためです。

::: tip
Should you run into any problems with pairing your mobile devices, you can still import wallpapers by manually exporting them as **.mpkg** files that the Wallpaper Engine mobile app uses.

See the **Backup Solution** section at the bottom of this page to learn how to create **.mpkg** and how to import them on your mobile device.
:::

### WindowsでのWallpaper Engineの準備

**Windows** アプリにおいて、ユーザーインターフェースの右上にある **モバイル** ボタンをクリックします。 モバイルデバイスの概要が表示されます。 デバイス概要の下部で、**新しいデバイスを接続** ボタンをクリックします。 Wallpaper Engineに、4桁のPINが表示されます。これを使って1台のモバイルデバイスとペアリングできます。

![モバイルPIN](/img/faq/mobile_pin.gif)

### モバイルデバイスとの接続

Wallpaper Engineモバイルコンパニオンアプリで、右下の **追加** をクリックし、次に **PCとペアリング** をクリックします。 Wallpaper Engineアプリがローカルネットワークで、Windows版Wallpaper Engineの起動中のインスタンスを探します。 数秒後にWindows PCが表示されるはずなので、それをクリックして接続します。 初めて接続する時は、4桁のPIN（上のWindowsのセクションを参照してください）を入力するように求められます。 PINは、あなたが知らないうちに権限のないユーザーがPCに接続するのを防ぐための、追加のセキュリティ手段です。

PINを入力するとモバイルアプリのステータスバーが緑になり、どのPCに接続されたかを示します。 Windowsアプリの方でも、**モバイル** ボタンが緑になり、モバイル接続がアクティブになっていることを示します。

![モバイルPIN](/img/faq/mobile_pair.gif)

## モバイルのペアリングに関する問題の解決

モバイルデバイスをPCとペアリングできない場合は、ファイアーウォールまたはローカルネットワークの設定が原因である可能性がかなり高いです。 次の方法で、問題の原因の可能性を調べてください：

* スマートフォンとPCが同じローカルネットワークに接続されていることを確認します。
* ファイアーウォールが、Wallpaper Engineのローカルネットワークとの通信をブロックしていないことを確認します。
* ネットワークルーターが、デバイス同士の通信をブロックしていないことを確認します。
    * Make sure your router is not blocking network traffic between devices.
    * Turn on **UPnP** (**"Universal Plug and Play"**) in your router settings.
* デバイス間の通信を妨げる可能性のある、PCならびにモバイルデバイス上のあらゆるタイプのVPNまたはプロキシソフトウェアを無効にしてください。
* Windows上とモバイルデバイス上のWallpaper Engineが、どちらも最新で起動していることを確認します。

## バックアップソリューション：壁紙ファイル（.mpkg）を手動でインポート

PCとモバイルデバイス間の接続を修正できない場合でも、手動で壁紙をモバイルデバイスに転送することができます。 まず、Wallpaper Engineでエクスポートしたい壁紙を選択し、右クリックをして**モバイルデバイスに送信**を選択後、**.mpkgをエクスポート**をクリックしてください。

Wallpaper Engineによって指定の壁紙の.mpkgファイルが作成されたら、USB経由またはファイルをSDカードにコピーすることでモバイルデバイスに転送することができます。 また、モバイルデバイス上でファイル共有サービス、メッセージングサービスもしくはメール機能（ファイル サイズに問題がない場合のみ) を利用して自分自身に送信するという方法もあります。

ファイルがモバイルデバイス側に保存されたら同デバイス上でWallpaper Engineを開き、**ファイルをインポート**を選択してください。ファイルが保存されているディレクトリから.mpkgファイルを選択することで、アプリに直接インポートすることができます。