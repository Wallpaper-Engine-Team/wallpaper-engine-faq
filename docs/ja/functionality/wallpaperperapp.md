# アプリケーションごとの壁紙の選択

Wallpaper Engineでは、特定の.exeが起動したときに自動的に異なる壁紙を起動することができます。 例えば、ゲームをプレイするときには邪魔にならない壁紙を起動し、音楽プレイヤーを使うときには自動的にオーディオビジュアライザーを起動したいという時などに便利です。

::: tip
特定のゲームやアプリケーションで技術的な問題が発生するときは、特定の.exeを起動するときにアプリケーションルールを使ってWallpaper Engineを無効にするということもできます。 別のアプリで起きる技術的な問題を解決したい場合は、こちらをご覧ください：[特定のアプリまたはゲームで起きる問題の修正](/functionality/applicationrules.html)
:::

## アプリケーションルールの設定

Wallpaper Engine設定の**パフォーマンス**タブで、**アプリケーションルール**セクションの**編集**ボタンをクリックします。 **新規ルール作成**をクリックして、目的の.exeに対する壁紙の新規セットを設定します。 **アプリケーション名**入力フィールドにその.exeの名前を入力します。例えば*musicplayer.exe*のように、名前が正しく入力されていることを確認してください。 **状態**を**実行されている**に設定します。 **壁紙再生**オプションで、次のオプションのうち一つを選ぶことができます：

* 壁紙をロード
* プレイリストをロード
* プロファイルロード

ここで重要なのは、**壁紙をロード**と**プレイリストをロード**の両方とも、壁紙を1枚だけロードして、画面一杯に拡大して表示することです。 複数のモニターを持っていて、それぞれの画面に別々の壁紙をロードしたいとき（あるいは、それぞれの画面に別々のプレイリストをロードしたいとき）は、**プロファイルロード**オプションを選ぶ必要があります。 この設定方法に関する詳しい情報は、次のセクションをお読みください。

### 複数モニターのプロファイルの設定

**Load Profile** in the application rules refers to mulit-monitor profiles which can be configured in the monitor overview (screen icon in the upper right corner of the interface). A profile is a snapshot of all your currently selected wallpapers and playlists across all your screens. Whenever a profile is loaded, all wallpapers and playlists will be placed according to the profile configuration.

Configure your wallpapers and playlists across all monitors the the way you want them to be, then click on the **Save profile** button in the monitor settings and save the current setup under a name of your choice. Keep in mind that any subsequent changes you make to your setup will not change the profile until you use the **Save profile** button again. You can set up multiple profiles and assign them to multiple apps at once. For example, you may create a **Music**, a **Gaming** and a **Movies** profile and then assign each profile to all .exe files that match these categories.

<video width="100%" controls autplay loop>
  <source src="/videos/apprules.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>