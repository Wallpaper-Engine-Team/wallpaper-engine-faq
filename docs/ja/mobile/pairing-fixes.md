# モバイルのペアリングに関する問題の解決

::: ヒント：依然として接続の問題が解消されない場合 このページの最下部に、USBまたは別の方法で壁紙をインポートするための手動バックアップソリューションが記載されています。
:::

モバイルデバイスをPCとペアリングできない場合は、ファイアーウォールまたはローカルネットワークの設定が原因である可能性がかなり高いです。 次の方法で、問題の原因の可能性を調べてください：

* **スマートフォンとPCが同じローカルネットワークに接続されていることを確認します。**
  * お使いのPCにWi-Fi接続は必要なく、ネットワークケーブルで接続された状態でも同じネットワークになります。
* **ファイアーウォールが、Wallpaper Engineのローカルネットワークとの通信をブロックしていないことを確認します。**
  * Wallpaper Engineではネットワークポート7884 (UDP) ならびに7889 (TCP) でマルチキャスト送信を行っています。これらのポートがファイアウォールでブロックされていないことを確認してください。
* **デバイス間の通信を妨げる可能性のある、PCならびにモバイルデバイス上のあらゆるタイプのVPNまたはプロキシソフトウェアを無効にしてください。**
* **ネットワークルーターが、デバイス同士の通信をブロックしていないことを確認します。**
    * ルーターがデバイス間のネットワークトラフィックを干渉していないかを確認してください。
    * ルーター側の設定で**UPnP** (**Universal Plug and Play**)を有効にしてください。
* **Windows上とモバイルデバイス上のWallpaper Engineが、どちらも最新で起動していることを確認します。**

### Windowsのファイアウォール

特にモバイルデバイス側でPCが検出されているにもかかわらず接続に失敗する場合は、PC側のファイアウォールが原因であることに間違いないでしょう。 Wallpaper Engineの初回起動時、ネットワークへのアクセスを許可するように求められます。 このウィンドウを閉じたり、特に**ui32.exe**とネットワークとの通信を許可しなかった場合、Wallpaper EngineはWindowsファイアウォールによってブロックされてしまいます。 このスクリーンショットに示されているように、**ui32.exe**の通信が許可されていることを確認してください。

![Windowsファイアウォールの許可](/img/faq/windows_defender.png)

Wallpaper Engineは、問題が検出されると自動的にファイアウォールの修正を提案してくれます。 このプロセスによって多くの問題は解消されますが、場合によっては過去に誤って適用したブロックの消去を手動で行う必要もあります。

これらの許可をWallpaper Engine側に与えていない場合、Wallpaper EngineはWindowsファイアウォールに自動的にブロックされてしまいます。 Windowsファイアウォールの設定画面を開き、**ファイアウォールによるアプリケーションの許可**をクリックしてください。 Search for an entry called **ui32** and either delete it or make sure both check marks in the *Private* and *Public* column are enabled, then confirm your changes and restart Wallpaper Engine.

Make sure to look for **ui32** or **Wallpaper Engine UI** - you may find entries called just **Wallpaper Engine** but these are irrelevant here.

**Please note:** This section is specifically only about the built-in Windows firewall, if you use any other antivirus app or firewall, you need to make sure Wallpaper Engine is not being blocked by them.

## バックアップソリューション：壁紙ファイル（.mpkg）を手動でインポート

PCとモバイルデバイス間の接続を修正できない場合でも、手動で壁紙をモバイルデバイスに転送することができます。 まず、Wallpaper Engineでエクスポートしたい壁紙を選択し、右クリックをして**モバイルデバイスに送信**を選択後、**.mpkgをエクスポート**をクリックしてください。

<video width="100%" controls autoplay loop>
  <source src="/videos/mobile_export.mp4" type="video/mp4">
  お使いのブラウザは動画タグをサポートしていません。
</video>

Wallpaper Engineによって指定の壁紙の.mpkgファイルが作成されたら、USB経由またはファイルをSDカードにコピーすることでモバイルデバイスに転送することができます。 また、モバイルデバイス上でファイル共有サービス、メッセージングサービスもしくはメール機能（ファイル サイズに問題がない場合のみ) を利用して自分自身に送信するという方法もあります。

ファイルがモバイルデバイス側に保存されたら同デバイス上でWallpaper Engineを開き、**ファイルをインポート**を選択してください。ファイルが保存されているディレクトリから.mpkgファイルを選択することで、アプリに直接インポートすることができます。

::: danger
It is import that you place the .mpkg files in the **Downloads** folder on the mobile device. Android is very restrictive when it comes to letting apps access files. If you cannot find or open the .mpkg files on your device, try placing them in another directory, usually the **Downloads** folder is the most reliable choice for this.
:::