---
tags:
  - webm
  - video
  - black
  - codec
  - filters
  - 4K
  - HEVC
  - mkv
  - mp4
---

# LAVとDirectShowの使用
ビデオコーデックが破損しているという問題が起きていたり、システムにビデオフォーマットを追加したかったりする場合、LAVをインストールしてWallpaper Engine設定でDirectShowを有効にすることができます。 これにより、**Windows 7上で4KやHEVC動画**がより良くサポートされるようになったり、**.mkv**ファイルを開くことができるようになったりするはずです。

法的な理由により、Wallpaper EngineはLAVをバンドルすることができません。 ダウンロードとインストールはご自身で行っていただく必要があります。 LAVのインストール後、Wallpaper EngineでDirectShowを使えるように設定をする必要もあります。

## 1. LAVをインストールする
* LAV Filtersのx86バージョン**と**x64バージョンをダウンロードします。
  * ミラー #1：[Github](https://github.com/Nevcairiel/LAVFilters/releases)
  * ミラー #2：[Fosshub](https://www.fosshub.com/LAV-Filters.html)
* LAVをインストールします。 Windowsの管理者権限を持っていることを確認してください。
* Wallpaper Engineを再起動します。

## 2. DirectShowを有効にする
* Wallpaper Engine の設定画面で、「一般」タブを開きます。
* **ビデオフレームワーク**オプションを**DirectShowを優先**に変更します。
* アプリケーションを再起動し、ビデオ壁紙を再び使用します。

## WebM Hardware Accelerationを有効にする
LAVシステムトレイアイコンが表示されているかどうか確認します。 CPU使用率がほぼゼロなら、.webmコンテンツがハードウェアでアクセラレーションされているということです。 きちんと動作していないように見えるときは、すべてのオプションが正しく設定されているかどうか、また、LAVが正しくインストールされているかどうかを確認してください。
* Wallpaper Engine の設定画面で、「一般」タブを開きます。
* **WebM フレームワーク**オプションを**Native優先**に変更します。
* アプリケーションを再起動し、ビデオ壁紙を再び使用します。

LAVシステムトレイアイコンが表示されているかどうか確認します。 CPU使用率がほぼゼロなら、.webmコンテンツがハードウェアでアクセラレーションされているということです。 きちんと動作していないように見えるときは、すべてのオプションが正しく設定されているかどうか、また、LAVが正しくインストールされているかどうかを確認してください。