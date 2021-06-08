# モバイルデバイスとWindowsのペアリング

モバイルデバイスとPCをペアリングすると、ワイヤレスで壁紙コレクションをモバイルデバイス上のWallpaper Engineコンパニオンアプリに転送することができます。 Androidアプリから直接、Steamワークショップから壁紙をダウンロードすることはできません。これは、壁紙ファイルのダウンロードがSteamでしか行なえないためです。

モバイル デバイスでペアリングの問題が発生した場合は、Wallpaper Engineのモバイルアプリが壁紙のレンダリングする際に使用する **.mpkg** を手動でエクスポートすることで、壁紙をインポートすることができます。

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
* デバイス間の通信を妨げる可能性のある、PCならびにモバイルデバイス上のあらゆるタイプのVPNまたはプロキシソフトウェアを無効にしてください。
* Windows上とモバイルデバイス上のWallpaper Engineが、どちらも最新で起動していることを確認します。

## バックアップソリューション：壁紙ファイル（.mpkg）を手動でインポート

Should you be able unable to fix the connection between your computer and your mobile device, you can still manually transfer your wallpapers onto your mobile device. First, select the wallpapers you want to export in Wallpaper Engine, then right-click on them and select **Send to Mobile Device**, followed by clicking on **Export .mpkg**.

Once Wallpaper Engine has created the .mpkg files for your wallpapers, you can either transfer them to your mobile device by moving the files onto your mobile device via USB or by copying the files onto an SD card. Alternatively you can also use any file sharing service on your mobile device or send them to yourself via a messaging service or even via email (if the file size is not a problem).

Once the files are on your mobile device, open up Wallpaper Engine on your mobile device and use the **Import File** functionality to directly import the .mpkg files into the app by selecting them from the directory that you have placed them in.