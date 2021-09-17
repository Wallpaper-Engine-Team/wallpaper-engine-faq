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

::: tip
Windows Defender以外のアンチウイルスアプリケーションがインストールされている場合、これが問題の原因である可能性が高いです。 試してみても問題が解決しない場合は、もう少し詳しく調べてみましょう。
:::

## Windowsのハイコントラストモード

Windows 10のテーマ設定で**ハイコントラストモード**を有効にし、**ハイコントラスト白**が選択されている場合、Windowsは強制的にWallpaper Engineの壁紙をオフにします。 Windowsのハイコントラスト設定で使用しているハイコントラストテーマを変更するか、ハイコントラストモード自体をオフにすると、問題は解消します。

## 壁紙が一定時間経過後消えてしまう

壁紙が少しの間消える場合は、Windows側の壁紙としてスライドショーが設定されている可能性があります。 Windowsの壁紙設定画面を開いて通常のWindowsの壁紙として単色または静止画像を設定すれば、問題は解消されます。

## 他のデスクトップ変更ソフトウェアとの競合

Wallpaper Engineは、ほとんどのデスクトップ変更アプリケーションと一緒に問題なく動作します。 しかし、StarDock DeskScapesなどのアプリケーションもまたWindows壁紙を変更するため、両方のアプリケーションを同時に実行することはできません。 Wallpaper Engineに似たアプリケーションをお使いの場合、継続して使用したいアプリケーションをどちらか選ぶ必要があります。

### Fences

基本的に、Wallpaper Engineは*Fences*と一緒に問題なく動作します。 しかし、**Fencesをインストールしていて無効にしている場合**、それがWallpaper Engineから壁紙を隠します。 有効にするか、完全にアンインストールするか、どちらかにする必要があります。

If you are using Fences and your Wallpaper Engine wallpapers are not visible, ensure that you are using **Fences 3.13 or newer** to avoid these compatibility issues with Wallpaper Engine. Fences 3.13 and newer versions contain important compatibility fixes with Wallpaper Engine, so it is important that you ensure your Fences is up-to-date.

## Windowsで壁紙が灰色になったり、テクスチャが表示されなかったりする

Windows 7のアップデート**KB2533623**がインストールされていることを確認してください。 リンクから手動でインストールするか、Windows Updateが正常に動いていて、そこからインストールしていることを確認してください。 Microsoftのサイトから手動でダウンロードすることができます。その後システムを再起動すると問題は解消するはずです。

* [KB2533623](https://support.microsoft.com/ja-jp/help/2533623/microsoft-security-advisory-insecure-library-loading-could-allow-remot)