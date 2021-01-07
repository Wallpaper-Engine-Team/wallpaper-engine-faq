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

## High-contrast mode in Windows

If you have enabled **high-contrast mode** in your Windows 10 theme settings with the **High Contrast White** theme selected, Windows will forcibly turn off Wallpaper Engine wallpapers. Try changing the high-contrast theme you are using in the high-contrast settings of Windows or turn high-contrast mode off entirely and the issue will disappear.

## Conflicts with other desktop modification software

Wallpaper Engine works well with most desktop-modification applications. However, some applications such as StarDock DeskScapes also modify the Windows wallpaper and it is not possible to run both applications at the same time. If you use a similar application to Wallpaper Engine, you will need to decide on one which you want to continue to use.

### Fences

Generally, Wallpaper Engine works fine with *Fences*. However, **if you have Fences installed but have disabled it**, it will hide the wallpaper from Wallpaper Engine. You need to either enable or uninstall it completely.

## Gray Wallpaper or missing textures on Windows 7

Make sure that the Windows 7 update **KB2533623** is installed. Either install it manually with that link or ensure that your Windows Update is working right and installing it by itself. You can download it manually from the Microsoft website, restart your system afterwards and the problem should go away:

* [KB2533623](https://support.microsoft.com/ja-jp/help/2533623/microsoft-security-advisory-insecure-library-loading-could-allow-remot)