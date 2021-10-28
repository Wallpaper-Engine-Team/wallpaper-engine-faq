# モバイルデバイスとWindowsのペアリング

モバイルデバイスとPCをペアリングすると、ワイヤレスで壁紙コレクションをモバイルデバイス上のWallpaper Engineコンパニオンアプリに転送することができます。 Androidアプリから直接、Steamワークショップから壁紙をダウンロードすることはできません。これは、壁紙ファイルのダウンロードがSteamでしか行なえないためです。

::: tip
Should you run into any problems with pairing your mobile devices, you can still import wallpapers by manually exporting them as **.mpkg** files that the Wallpaper Engine mobile app uses.

See the **Backup Solution** section at the bottom of this page to learn how to create **.mpkg** and how to import them on your mobile device.
:::

### WindowsでのWallpaper Engineの準備

In the **Windows** app, click on the **Mobile** button in the upper right corner of the user interface. The mobile device overview will open up. At the bottom device overview, click on the **Connect new Device** button. Wallpaper Engine will show you a 4-digit PIN that you can use to pair one mobile device.

![Mobile PIN](/img/faq/mobile_pin.gif)

### モバイルデバイスとの接続

In the Wallpaper Engine mobile companion app, click on **Add** in the lower right corner, followed by clicking on **Pair with Computer**. The Wallpaper Engine app will search your local network for running instances of Wallpaper Engine for Windows. Your Windows computer should appear after a few seconds, allowing you to connect to it by clicking on it. If you are connecting for the first time, you will be asked to enter the 4-digit PIN (see Windows section above). The PIN is an additional security measure to ensure unauthorized users cannot connect to your computer without your knowledge.

Once you have entered your PIN, the status bar in the mobile app turns green and shows which computer its connected to. On the Windows app, the **Mobile** button is also colored green now to indicate that a mobile connection is active.

![Mobile PIN](/img/faq/mobile_pair.gif)

## モバイルのペアリングに関する問題の解決

If you cannot pair your mobile device to your computer, a firewall or local network setting is very likely at fault. Check the following possible problem sources:

* スマートフォンとPCが同じローカルネットワークに接続されていることを確認します。
* ファイアーウォールが、Wallpaper Engineのローカルネットワークとの通信をブロックしていないことを確認します。
* Ensure your network router is not blocking your devices from communicating with each other.
    * Make sure your router is not blocking network traffic between devices.
    * Turn on **UPnP** (**"Universal Plug and Play"**) in your router settings.
* デバイス間の通信を妨げる可能性のある、PCならびにモバイルデバイス上のあらゆるタイプのVPNまたはプロキシソフトウェアを無効にしてください。
* Windows上とモバイルデバイス上のWallpaper Engineが、どちらも最新で起動していることを確認します。

## バックアップソリューション：壁紙ファイル（.mpkg）を手動でインポート

Should you be able unable to fix the connection between your computer and your mobile device, you can still manually transfer your wallpapers onto your mobile device. First, select the wallpapers you want to export in Wallpaper Engine, then right-click on them and select **Send to Mobile Device**, followed by clicking on **Export .mpkg**.

Once Wallpaper Engine has created the .mpkg files for your wallpapers, you can either transfer them to your mobile device by moving the files onto your mobile device via USB or by copying the files onto an SD card. Alternatively you can also use any file sharing service on your mobile device or send them to yourself via a messaging service or even via email (if the file size is not a problem).

Once the files are on your mobile device, open up Wallpaper Engine on your mobile device and use the **Import File** functionality to directly import the .mpkg files into the app by selecting them from the directory that you have placed them in.