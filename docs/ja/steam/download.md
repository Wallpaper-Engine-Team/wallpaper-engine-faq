---
tags:
  - ダウンタイム
  - サーバー
  - ダウンロード
  - 進捗
  - ワークショップ
  - 接続
---

# Steamの壁紙ダウンロードに関する問題

**ダウンロードはすべて、Steamによって行われます**。 Wallpaper EngineはSteamのダウンロード状態を表示するだけです。ダウンロードの問題はすべてSteamに関連するもので、直接的にWallpaper Engineに関連するものはありません。 このガイドは、ダウンロードについてよく起きる問題を集めたものです。多くの場合、根本的な原因はアンチウイルスアプリケーションの過剰な動作か、ネットワークポートがブロックされていることによるものです。

Steamダウンロードに問題が起きた場合は、アンチウイルスアプリケーションがSteamをブロックしていないか、ファイアーウォール（ネットワークルーターのファイアーウォールをすべて含みます）で必要なポートがすべて開いているかを確認してください。

::: tip ネットワークルーターがSteamダウンロードをブロックしているかどうかは、スマートフォンのモバイルホットスポットに切り替え、壁紙のダウンロードをそこから試してみることで簡単にわかります。 :::

## 壁紙のダウンロードが0%または100%（あるいはその他のパーセンテージ）で止まる
Steamによるファイルのダウンロードの完了と検証ができていません。 ダウンロードがしばらく止まったままで、しばらく待ったあともSteamダウンロードが動かない場合は、次のことを試してみてください。

* SteamのオプションでSteamのダウンロードキャッシュを消去します。
  * [Steamのダウンロードキャッシュの消去](https://support.steampowered.com/kb_article.php?ref=3134-TIAL-4638)
* その後、SteamでWallpaper Engineのファイルを検証します。
  * [Wallpaper Engineファイルの検証](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)
* それでもすべてのダウンロードが止まる場合は、**Steamを終了**し、その後、次のディレクトリの**中身を削除**します。
  * `C:\Program Files (x86)\Steam\steamapps\workshop\downloads`
    * アンチウイルスアプリケーションがインストールされている場合は、このディレクトリが除外されていることを確認してください
    * **注意：** `C:\Program Files (x86)\Steam`はデフォルトのSteamパスです。別の場所にインストールされているときはそこをチェックしてください。
* Steamを再起動します。 ゲームを起動しないでください。 Steamのダウンロードタブで進行状況をチェックし、停止しているダウンロードを再開します。

::: details 上の手順でダウンロードの問題が解消しない場合は、ここをクリックして他に可能な解決方法をご覧ください
* アンチウイルスやファイアーウォールがSteamをブロックしていないことを確認します。 アンチウイルスアプリケーションの設定で、Steamディレクトリ全体を除外します。
* ダウンロードできない壁紙のサブスクライブを解除し、Steamの再起動後、もう一度サブスクライブします。
* Steamの設定で、別のコンテンツサーバーを選択します。 このオプションは、Steam設定の「ダウンロード」タブにあります。
* **Steam設定**で、時間、バンド幅、アプリ内からの操作かどうかによってSteamダウンロードが制限されていないことを確認します。
* Steamの「ダウンロード」タブを開きます（ライブラリ→ダウンロード）。 停止しているダウンロードを見つけます。 見つかったら、「再開」をクリックします。
* SteamのWallpaper Engineで右クリックしてプロパティを選び、**バックグラウンドでのダウンロードを許可する**を選択します。
* Steamで保留されているゲームのアップデートがないことを確認します。あると、壁紙のダウンロードが停止したり無効になったりすることがあります。
* Steamのサーバーに問題がある場合に備え、少なくとも1日待ってからもう一度試します。
* **最後の手段として**、破損したSteamファイルをすべて消去するためにWallpaper Engineを再インストールします（この場合、すべての壁紙が再ダウンロードされます！）。 :::

::: tip Steamサーバーは、毎週決まった時間にメンテナンスのためにオフラインになります。

* アメリカ西海岸：**火曜日午後4時（UTC - 7）**
* 中央ヨーロッパの同じ時間：**水曜日午前1時（UTC + 1）**
* Same time in China: **Wednesday at 8 am (UTC + 8)**

If you are reading this while it is roughly this time of the week, it may be that the servers are temporarily offline. Wait one or two hours and try again. :::

## Steam: "Missing Downloaded Files" error

Steam is unable to download some files, this can be due to anti-virus applications blocking Steam or just absolutely random. It can usually be fixed this way:

* Turn off Steam.
* Delete the contents of this directory: `C:\Program Files (x86)\Steam\steamapps\workshop\downloads`
* Delete the contents of this directory: `C:\Program Files (x86)\Steam\steamapps\downloading\431960`
  * **Note:** `C:\Program Files (x86)\Steam` is the default Steam path, if you have installed it somewhere else, check there.
* Start Steam and verify the Wallpaper Engine files:
  * [Verify Wallpaper Engine files](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

If you have an antivirus-app installed: Configure an exception for this directory to prevent it from blocking Steam's Workshop downloads: `C:\Program Files (x86)\Steam\steamapps\workshop\downloads`

#### Related article: [Steam re-downloading all wallpapers](/steam/redownload)