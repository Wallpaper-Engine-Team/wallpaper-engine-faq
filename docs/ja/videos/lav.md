---
tags:
  - webm
  - ビデオ
  - 黒
  - コーデック
  - フィルター
  - 4K
  - HEVC
  - mkv
  - mp4
---

# LAVとDirectShowの使用
ビデオコーデックが破損しているという問題が起きていたり、システムにビデオフォーマットを追加したかったりする場合、LAVをインストールしてWallpaper Engine設定でDirectShowを有効にすることができます。 これにより、**Windows 7上で4KやHEVC動画**がより良くサポートされるようになったり、**.mkv**ファイルを開くことができるようになったりするはずです。

法的な理由により、Wallpaper EngineはLAVをバンドルすることができません。ダウンロードとインストールはご自身で行っていただく必要があります。 LAVのインストール後、Wallpaper EngineでDirectShowを使えるように設定をする必要もあります。

## 1. LAVをインストールする
* LAV Filtersのx86バージョン**と**x64バージョンをダウンロードします。
  * ミラー #1：[Github](https://github.com/Nevcairiel/LAVFilters/releases)
  * ミラー #2：[Fosshub](https://www.fosshub.com/LAV-Filters.html)
* LAVをインストールします。Windowsの管理者権限を持っていることを確認してください。
* Wallpaper Engineを再起動します。

## 2. DirectShowを有効にする
* Wallpaper Engine の設定画面で、「一般」タブを開きます。
* **ビデオフレームワーク**オプションを**DirectShowを優先**に変更します。
* アプリケーションを再起動し、ビデオ壁紙を再び使用します。

## WebM Hardware Accelerationを有効にする
ビデオ壁紙が終わりの方でコマ落ちする場合は、.webmファイルを使うと解消する可能性があります。 .webmビデオでハードウェアアクセラレーションを有効にするとさらに良いでしょう。それによってCPUの使用率が大きく減少し、さらに、ビデオ壁紙が最後のフレームのあと目立ってカットされることなくループできます。 This is a continuation of the steps above, make sure you have installed LAV and enabled DirectShow as instructed in the previous section.
* Open the Wallpaper Engine settings and navigate to the "General" tab
* Change the **WebM framework** option to **Prefer Native**
* Restart the application and try using your video wallpaper again

Check if the LAV system tray icon shows up and if the CPU usage is nearly zero, then your .webm content is now hardware accelerated. If it does not seem to work, make sure all options are configured correctly and LAV is correctly installed.