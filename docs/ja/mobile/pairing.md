# モバイルデバイスとWindowsのペアリング

モバイルデバイスとPCをペアリングすると、ワイヤレスで壁紙コレクションをモバイルデバイス上のWallpaper Engineコンパニオンアプリに転送することができます。

技術的ならびに法的な制約によってAndroidアプリからワークショップにアクセスすることができないため、ワークショップから壁紙を直接ダウンロードすることはできません。

::: ヒント ペアリングがうまくいかない場合は、このページ最下部にある**バックアップソリューション**をご覧ください。モバイル向けの壁紙パッケージ(**.mpkg**) を作成し、それをお持ちのモバイルデバイスにインポートする方法が記載されています。
:::

[[toc]]

## 1. 無料のWallpaper Engine向けAndroidコンパニオンアプリをインストールしてください

続行する前に、最新版のWallpaper Engine向けAndroidコンパニオンアプリがインストールされていることを確認してください

公式アプリストアからアプリをインストールすることをお勧めしますが、当社のホームページから最新アプリを直接ダウンロードすることもできます。 ダウンロードリンクとさらに詳しい情報は、当社のAndroidダウンロードページをご覧ください：

* [Android版Wallpaper Engineのダウンロード](https://www.wallpaperengine.io/android/)

セキュリティー上の理由で、当社のWebサイトに記載されているソース以外からのアプリインストールはご遠慮ください。

## 2. WindowsでのWallpaper Engineの準備

**Windows** アプリにおいて、ユーザーインターフェースの右上にある **モバイル** ボタンをクリックします。 モバイルデバイスの概要が表示されます。 デバイス概要の下部で、**新しいデバイスを接続** ボタンをクリックします。 Wallpaper Engine will show you a 4-digit PIN that you can use to pair one mobile device in the next step.

<video width="100%" controls autoplay loop>
  <source src="/videos/mobile_pin.mp4" type="video/mp4">
  お使いのブラウザは動画タグをサポートしていません。
</video>

## 3. モバイルデバイスとの接続

Wallpaper Engineモバイルコンパニオンアプリで、右下の **追加** をクリックし、次に **PCとペアリング** をクリックします。 Wallpaper Engineアプリがローカルネットワークで、Windows版Wallpaper Engineの起動中のインスタンスを探します。 数秒後にWindows PCが表示されるはずなので、それをクリックして接続します。 初めて接続する時は、4桁のPIN（上のWindowsのセクションを参照してください）を入力するように求められます。

<video height="590px" style="display:block;margin:0 auto;" controls autoplay loop>
  <source src="/videos/mobile_connect.mp4" type="video/mp4">
  お使いのブラウザが動画タグをサポートしていません。
</video>

PINを入力するとモバイルアプリのステータスバーが緑になり、どのPCに接続されたかを示します。 Windowsアプリの方でも、**モバイル** ボタンが緑になり、モバイル接続がアクティブになっていることを示します。

By default, Wallpaper Engine will now always automatically connect to your computer if you start Wallpaper Engine on your mobile device and your computer at the same time.

## 4. Transferring Wallpapers to Your Mobile Device

Once the connection has been established, the **Mobile** button in the upper right corner turns green.

You can now simply click on the **Send to Mobile Device** button on the right-hand side or right-click on any compatible wallpaper and select **Send to Mobile Device**, followed by selecting your device from the list.

#### Scene Wallpapers

Dynamic and interactive wallpapers that are of the **Scene** type will first be optimized for use on mobile phones and to ensure compatibility with mobile hardware. This process may take a short while. You will also be asked which quality option you would like to use, especially for high-resolution wallpapers, we recommend trying the **Balanced** option if you notice performance issues on your mobile device.

<video width="100%" controls autoplay loop>
  <source src="/videos/mobile_transfer.mp4" type="video/mp4">
  お使いのブラウザは動画タグをサポートしていません。
</video>

::: tip
You can also transfer multiple wallpapers at the same time by clicking on multiple wallpapers while holding the CTRL key on your keyboard.
:::

## モバイルのペアリングに関する問題の解決

モバイルデバイスをPCとペアリングできない場合は、ファイアーウォールまたはローカルネットワークの設定が原因である可能性がかなり高いです。 次の方法で、問題の原因の可能性を調べてください：

* スマートフォンとPCが同じローカルネットワークに接続されていることを確認します。
* ファイアーウォールが、Wallpaper Engineのローカルネットワークとの通信をブロックしていないことを確認します。
* ネットワークルーターが、デバイス同士の通信をブロックしていないことを確認します。
    * Make sure your router is not blocking network traffic between devices.
    * Turn on **UPnP** (**"Universal Plug and Play"**) in your router settings.
* デバイス間の通信を妨げる可能性のある、PCならびにモバイルデバイス上のあらゆるタイプのVPNまたはプロキシソフトウェアを無効にしてください。
* Windows上とモバイルデバイス上のWallpaper Engineが、どちらも最新で起動していることを確認します。

### バックアップソリューション：壁紙ファイル（.mpkg）を手動でインポート

PCとモバイルデバイス間の接続を修正できない場合でも、手動で壁紙をモバイルデバイスに転送することができます。 まず、Wallpaper Engineでエクスポートしたい壁紙を選択し、右クリックをして**モバイルデバイスに送信**を選択後、**.mpkgをエクスポート**をクリックしてください。

<video width="100%" controls autoplay loop>
  <source src="/videos/mobile_export.mp4" type="video/mp4">
  お使いのブラウザは動画タグをサポートしていません。
</video>

Wallpaper Engineによって指定の壁紙の.mpkgファイルが作成されたら、USB経由またはファイルをSDカードにコピーすることでモバイルデバイスに転送することができます。 また、モバイルデバイス上でファイル共有サービス、メッセージングサービスもしくはメール機能（ファイル サイズに問題がない場合のみ) を利用して自分自身に送信するという方法もあります。

ファイルがモバイルデバイス側に保存されたら同デバイス上でWallpaper Engineを開き、**ファイルをインポート**を選択してください。ファイルが保存されているディレクトリから.mpkgファイルを選択することで、アプリに直接インポートすることができます。