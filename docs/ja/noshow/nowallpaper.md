---
tags:
  - アンチウイルス
  - 表示
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

基本的に、Wallpaper Engineは*Fences*と一緒に問題なく動作します。 However, **if you have Fences installed but have disabled it**, it will hide the wallpaper from Wallpaper Engine. You need to either enable or uninstall it completely.

## Gray Wallpaper or missing textures on Windows 7

Make sure that the Windows 7 update **KB2533623** is installed. Either install it manually with that link or ensure that your Windows Update is working right and installing it by itself. You can download it manually from the Microsoft website, restart your system afterwards and the problem should go away:

* [KB2533623](https://support.microsoft.com/en-us/help/2533623/microsoft-security-advisory-insecure-library-loading-could-allow-remot)