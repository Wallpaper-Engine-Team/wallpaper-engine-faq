- - -
  tags:
  - screensavers
  - hibernation
  - sleep
  - power saving
- - -

# ハイバネーションやスクリーンセーバーが動作しない

Windowsは、アクティブなオーディオストリームが開いているとハイバネーションしません。 You can get around this by either disabling audio output in the "General" tab of the Wallpaper Engine settings to prevent Windows from blocking hibernation in the first place. If you want to continue to have audio output, follow the steps in this guide on how to achieve that.

## Windowsのパワー設定を変更する

Windows does not hibernate with any active audio streams open. You can get around this by either disabling audio output in the "General" tab of the Wallpaper Engine settings or re-configuring your Windows to allow it to sleep with audio playback enabled:

1. Windowsの検索画面で入力して、「電源とスリープ」設定を開きます。
2. 「電源の追加設定」をクリックします。
3. 選択したプランの隣にある「プラン設定の変更」をクリックします。
4. 「詳細な電源設定の変更」をクリックします。
5. 下にスクロールし、「マルチメディア設定」を拡張します。
6. 「メディアの共有時」を「コンピュータがアウェーモードに入ることを許可する」（スクリーンセーバー）**または**「コンピュータがスリープすることを許可する」（ハイバネーション）に設定します。

![Enable "Allow the computer to sleep"](./power.gif)

## 「Web」タイプ壁紙でのハイバネーション問題

"Web" wallpapers use a web browser similar to Google Chrome ("CEF") which will prevent hibernation mode. Until this is fixed in the browser, you can get around this with some command-line prompts.

1. Windowsで"cmd.exe"を検索し、右クリックして、「管理者として実行」を選択します（こうしないと動作しないので注意！）。
2. `powercfg /requests`のコマンドで、システムのハイバネーションをブロックしているプロセスをすべて表示させます（また、他のプログラムが妨害していないかどうかもチェックします）。
3. 次の3つのコマンドを使って、Wallpaper Engineの実行中でもシステムがスリープすることを許可します。

```
powercfg /requestsoverride PROCESS webwallpaper32.exe AWAYMODE DISPLAY SYSTEM
powercfg /requestsoverride PROCESS wallpaper32.exe AWAYMODE DISPLAY SYSTEM
powercfg /requestsoverride PROCESS wallpaper64.exe AWAYMODE DISPLAY SYSTEM
```

Additionally, you can also set the **Display asleep** option in the **Performance** tab of the Wallpaper Engine settings to *Stop (free memory)* and turn off your display. That way Wallpaper Engine stops all playback when you turn your display off when leaving your computer unattended.