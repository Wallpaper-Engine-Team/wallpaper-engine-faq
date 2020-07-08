---
tags:
  - antivirus
  - showing
---

# 壁紙が見えない

一部または全部の壁紙が表示されない場合、よくある原因はアンチウイルスアプリケーションが誤ってWallpaper Engineをブロックしていることです。 アンチウイルスアプリケーションをお使いの場合、*wallpaper_engine*インストールディレクトリと、Wallpaper Engineの重要な実行可能ファイルすべてを無視する設定にしてください。

* *wallpaper_engine/wallpaper32.exe*
* *wallpaper_engine/wallpaper64.exe*
* *wallpaper_engine/launcher.exe*
* *wallpaper_engine/bin/webwallpaper32.exe*
* *wallpaper_engine/bin/ui32.exe*

::: tip Windows Defender以外のアンチウイルスアプリケーションがインストールされている場合、これが問題の原因である可能性が高いです。 試してみても問題が解決しない場合は、もう少し詳しく調べてみましょう。 :::

## 他のデスクトップ変更ソフトウェアとの競合

Wallpaper Engineは、ほとんどのデスクトップ変更アプリケーションと一緒に問題なく動作します。 しかし、StarDock DeskScapesなどのアプリケーションもまたWindows壁紙を変更するため、両方のアプリケーションを同時に実行することはできません。 Wallpaper Engineに似たアプリケーションをお使いの場合、継続して使用したいアプリケーションをどちらか選ぶ必要があります。

### Fences

基本的に、Wallpaper Engineは*Fences*と一緒に問題なく動作します。 しかし、**Fencesをインストールしていて無効にしている場合**、それがWallpaper Engineから壁紙を隠します。 有効にするか、完全にアンインストールするか、どちらかにする必要があります。

## Windowsで壁紙が灰色になったり、テクスチャが表示されなかったりする

Windows 7のアップデート**KB2533623**がインストールされていることを確認してください。 リンクから手動でインストールするか、Windows Updateが正常に動いていて、そこからインストールしていることを確認してください。 Microsoftのサイトから手動でダウンロードすることができます。 その後システムを再起動すると問題は解消するはずです。

* [KB2533623](https://support.microsoft.com/en-us/help/2533623/microsoft-security-advisory-insecure-library-loading-could-allow-remot)