# Wallpaper Engineのスクリーンセーバー

Wallpaper Engineを使えば、自分の壁紙をスクリーンセーバーとして利用することができます。 かつてスクリーンセーバーはディスプレイを焼き付きから保護する目的で使用されていました。しかし、最新のディスプレイ技術では焼き付きが発生しにくくなっており、現在ではアクセサリ的な要素としてあらゆるタイプの壁紙を、スクリーンセーバーとして安全に利用することができます。 焼き付きの影響を受けやすいCRT、プラズマ、OLEDやその他類似した技術が使われているディスプレイを使用している場合は、壁紙のプレイリストをスクリーン セーバーとして使うか、通常の動きがある壁紙を使用することをお勧めします。

## 初期スクリーンセーバー設定

Wallpaper Engineをスクリーンセーバーとして使用する際は、Wallpaper Engineのウィンドウの **インストール済み**タブにカーソルを合わせ、**スクリーンセーバー設定**を選択してください。 Wallpaper EngineがWindows用のWallpaper Engineスクリーンセーバーをインストールしているかの確認を開始します。 スクリーンセーバーがまだインストールされていない場合は、インストールを実行するように求められます。 お使いのWindowsユーザーに管理者権限があり、Wallpaper Engineのスクリーンセーバーのインストールをブロックするアンチウイルスソフトウェアが起動していないことを確認してください。

初回インストール後、Windowsの「スクリーンセーバーの設定」画面が自動で開きます。また、**設定 & プレビュー**ボタンから手動で開いたり、Windowsの「個人用設定」から直接「スクリーンセーバーの設定」にアクセスすることもできます。

## スクリーンセーバー設定

### Windows設定

Wallpaper Engineのスクリーンセーバーを有効にするには、まず **Windows設定**でWallpaper Engineをアクティブなスクリーンセーバーとして指定する必要があります。 Windowsのスクリーンセーバーの設定はWindowsのコントロールパネルから開くことができます。また、Wallpaper Engineのスクリーンセーバーモードで**設定 & プレビュー**をクリックすることでもアクセスすることができます。 必要なステップに関しては下記の動画を参照してください：

<video width="100%" controls autoplay loop>
  <source src="/videos/screensaver_setup.mp4" type="video/mp4">
  お使いのブラウザは動画タグをサポートしていません。
</video>

Windowsの設定ではスクリーンセーバーが表示されるまでの時間と、再開時にWindowsのロック画面に戻るかどうかを設定することができます。 これらの設定はすべてWindows側で行われ、Wallpaper Engine側では画面タイムアウトなどの制御は行っていません。

### Wallpaper Engine設定

Windows側でスクリーンセーバーを設定すれば、Wallpaper Engine側のスクリーンセーバー設定が可能となります。 Wallpaper Engineのウィンドウの **インストール済み**タブにカーソルを合わせ、**スクリーンセーバー設定**を選択してください。 Wallpaper Engineは、壁紙ではなくスクリーンセーバーをプレビュー表示します。スクリーンセーバーモードを終了すると壁紙設定に戻ります。

デフォルト状態のWallpaper Engineは最も基本的な設定が採用され、現在有効となっている壁紙と同じものがスクリーンセーバーとして使用されます。 You can change this by changing the **Screensaver is** option to **Configured separately** at the top. With that option enabled, you can choose a wallpaper for each screen which is to be used as a screensaver or even use a completely different display profile or playlists for your screensaver setup. You can always return to the wallpaper configuration by clicking on the red **Quit** button in the upper left corner.

## Screensaver Problem Solving

The Wallpaper Engine screensaver is activated through Windows itself, if the screensaver is not working correctly, please double-check to see if any of the default Windows screensavers work correctly for you. Check the Windows screensaver settings and your Windows energy settings to make sure that your screensaver is configured with the correct timeout that you expect and that Wallpaper Engine is set as your active screensaver.

The screensaver will be installed in `C:\Windows\System32\wpxscreensaver64.scr`, make sure no antivirus app is deleting this file by mistake or preventing it from being installed. You can also manually uninstall the screensaver by deleting that specific file, but be sure to not delete any other important Windows files in the `System32` directory when doing so.