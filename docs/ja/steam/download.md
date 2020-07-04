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

::: tip You can easily check if your network router is blocking Steam downloads by switching to a mobile hotspot on your smartphone and attempt to download a wallpaper through that. :::

## Wallpaper download stuck at 0% or 100% (or any other percentage)
Steam is not done downloading and verifying the files. If the downloads are stuck for a while, try these things if your Steam downloads do not work even after you waited for a while:

* Clear Steam's download cache in Steam's options:
  * [Clear Steam Download cache](https://support.steampowered.com/kb_article.php?ref=3134-TIAL-4638)
* Afterwards verify the files of Wallpaper Engine in Steam:
  * [Verify Wallpaper Engine files](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)
* If all downloads are still stuck: **Turn off Steam** and afterwards **delete the contents** of this directory:
  * `C:\Program Files (x86)\Steam\steamapps\workshop\downloads`
    * If you have an anti-virus application installed, make sure that it's specifically excluding this directory
    * **Note:** `C:\Program Files (x86)\Steam` is the default Steam path, if you have installed it somewhere else, check there.
* Restart Steam. Do not start any games. Check in the Steam download tab for progress and resume any paused downloads.

::: details Click here to see more possible solutions if the steps above did not fix your download problems
* Make sure no anti-virus or firewall is blocking Steam. Exclude the whole Steam directory in your anti-virus app settings.
* Unsubscribe the wallpapers that fail to download and subscribe to them again after restarting Steam.
* Choose a different content server in Steam's settings. The option can be found in the "Downloads" tab of the Steam settings.
* Make sure you did not restrict Steam downloads in the **Steam settings** based on time, bandwidth, being in-app.
* Open the 'Downloads' tab in Steam (Library -> Downloads). Look for paused downloads. If you can see any, click on 'Resume'.
* Right-click Wallpaper Engine in Steam, then Properties, then select **Allow Background Downloads**.
* Make sure you do not have pending game updates in Steam, it could pause or disable wallpaper downloads.
* Try again after waiting at least for a day in case there are Steam server issues.
* **As a last resort**, try to re-install Wallpaper Engine to clear any broken Steam files (this will re-download all wallpapers!). :::

::: tip Steam servers go offline every week for maintenance at a fixed time:

* United States West Coast: **Tuesday at 4 pm (UTC - 7)**
* Same time in Central Europe: **Wednesday at 1 am (UTC + 1)**
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