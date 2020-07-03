# ハイバネーションやスクリーンセーバーが動作しない

Windowsは、アクティブなオーディオストリームが開いているとハイバネーションしません。 これを回避するために、Wallpaper Engine設定の「一般」タブでオーディオ出力を無効にし、Windowsにハイバネーションをブロックさせないようにすることができます。 オーディオ出力を続けさせたい場合は、このガイドのステップに従ってください。

## Windowsのパワー設定を変更する

Windowsは、アクティブなオーディオストリームが開いているとハイバネーションしません。 これを回避するために、Wallpaper Engine設定の「一般」タブでオーディオ出力を無効にするか、Windowsがオーディオ再生を有効にしたままでスリープに入るよう設定し直すことができます。

1. Windowsの検索画面で入力して、「電源とスリープ」設定を開きます。
2. 「追加電源設定」をクリックします。
3. 選択したプランの隣にある「プラン設定の変更」をクリックします。
4. 「詳細電源設定の変更」をクリックします。
5. 下にスクロールし、「マルチメディア設定」を拡張します。
6. 「メディアの共有時」を「コンピュータがアウェーモードに入ることを許可する」（スクリーンセーバー）**または**「コンピュータがスリープすることを許可する」（ハイバネーション）に設定します。

![Enable "Allow the computer to sleep"](./power.gif)

## 「Web」タイプ壁紙でのハイバネーション問題

「Web」壁紙は、Google Chromeに似た、ハイバネーションモードを妨害するブラウザ（CEF）を使用します。 ブラウザでこれが修正されるまでは、コマンドラインのプロンプトで回避することができます。

1. Search Windows for "cmd.exe" and right-click on it and select "Run as administrator" (very important, otherwise this will not work!).
2. Use the command `powercfg /requests` to view all processes that are blocking your system from hibernation (also check if other programs may be at fault here).
3. Use the following three commands to permit your system to sleep with Wallpaper Engine running:

```
powercfg /requestsoverride PROCESS webwallpaper32.exe AWAYMODE DISPLAY SYSTEM
powercfg /requestsoverride PROCESS wallpaper32.exe AWAYMODE DISPLAY SYSTEM
powercfg /requestsoverride PROCESS wallpaper64.exe AWAYMODE DISPLAY SYSTEM
```

Additionally, you can also set the **Display asleep** option in the **Performance** tab of the Wallpaper Engine settings to *Stop (free memory)* and turn off your display. That way Wallpaper Engine stops all playback when you turn your display off when leaving your computer unattended.