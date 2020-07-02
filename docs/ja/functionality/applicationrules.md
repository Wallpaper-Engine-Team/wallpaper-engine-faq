---
tags:
  - アプリケーション
  - ルール
  - 例外
  - ホワイトリスト
  - ブラックリスト
  - ラグ
  - ラギー
  - ゲーム
  - パフォーマンス
  - fps
  - クラッシュ
  - サウンド
  - オーディオ
  - 断続的
---

# 特定のアプリまたはゲームで起きる問題の修正

特定のアプリケーションまたはゲームで問題が起きる場合、Wallpaper Engineを設定し、例えば、問題が起きているアプリケーションが起動したりオーディオをプレイしたりしていることを検知したときに、ある動作を行うようにすることができます。

## アプリケーションルールの設定

Wallpaper Engine設定の*パフォーマンス*タブで、*アプリケーションルール*ラベルの隣にある*編集*ボタンをクリックすると、これまでに設定されているカスタムルールがすべて表示されます。 *新規ルール作成*をクリックすると、Wallpaper Engineの特定のアプリケーションに対する特別な動作を設定することができます。

![Application Rules Overview](./applicationrule.gif)

システム上で起動している.exeファイルすべてがリストアップされます。 問題のある.exeをリストから選択するか、その正確な名前を入力します。 他の2つのオプションで、条件と動作を設定することができます。 詳細と具体例については下記をご覧ください。

::: tip Wallpaper Engineは正確な.exe名だけを識別します。場所はどこにあってもかまいません。*アプリケーション名*フィールドに.exe名だけを入力してください。 大文字小文字を含め、.exe名が正確にマッチしていることを確認してください。 :::

### アプリまたはゲームで起きるパフォーマンスの問題の修正

特別なルールを設定したいプログラムの.exeをリストから選択するか、**アプリケーション名**に入力します。 その後、**条件**を**実行中**に、**壁紙再生**を**停止（メモリ解放）**に設定します。 This means Wallpaper Engine will completely remove all wallpapers from memory when the application or game is launched, which means any compatibility issues will be resolved.

### Fixing intermittent sound with background recording tools

Select the .exe of the program you want to have a special rule for from the list or type it into the **Application name** field. Afterwards, set **Condition** to **Is playing audio** and **Wallpaper playback** to **Keep running**. This means Wallpaper Engine will not mute itself when the application in question is playing or recording audio. Windows does not differentiate between playing or recording audio, this is why Wallpaper Engine will constantly mute and unmute itself if you are recording it. Many game streaming applications can do this by accident and without your knowledge.

### Other behavior

Check out all possible conditions and wallpaper playback options for more types of application rules. You can also configure Wallpaper Engine to mute or pause when you launch a certain application.

::: tip You can also change these settings for all applications in the **Performance** tab of the Wallpaper Engine settings. If you are having performance issues in multiple games, for example, it may make sense to just change the **Other applications fullscreen** option to **Stop (free memory)** so that Wallpaper Engine will turn itself off when you launch any game or fullscreen application. :::