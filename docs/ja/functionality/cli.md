---
sidebarDepth: 2
---

# コマンドラインによるコントロール

Wallpaper Engine は、コマンドラインのコマンドによってコントロールすることができます。 これにより、アプリのほとんどの機能に、ショートカット、マクロバインディング、好みの自己記述スクリプトないしはコードを使ってアクセスすることができます。 例えば、すべての壁紙の一時停止や再生中止、壁紙の変更、起動中の壁紙の設定の変更さえも行えます。

Wallpaper Engine が既に起動している状態で、プログラムのメインプロセス *wallpaper32.exe*（64 Bit バージョンをお使いの場合は *wallpaper64.exe*）を起動し、このガイドに書かれているコマンド変数のいずれかを使ってコマンドを送ります。 実行可能ファイルは `wallpaper_engine` インストールディレクトリにあります。

すべてのコマンドは、`-control` パラメータの値として発行されます。 例えば、一時停止コマンドの実行は次のようになります：

``` powershell
wallpaper32.exe -control pause
```

スペースが入っている文字列にはダブルクォーテーション **"** 記号を使用します：

``` powershell
wallpaper32.exe -control openWallpaper -file "C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\projects\myprojects\myWallpaper\project.json"
```

### ショートカットの例：ウィンドウで壁紙を開く

次の例では、Windowsのショートカットを使って、ウィンドウに好きな数の壁紙を開くことができます。 このプロセスを繰り返して、個別のウィンドウに好きな数の壁紙を開くことができます。Wallpaper Engineを使って、操作していない時の画面やアニメーションを設定したいストリーマーには便利な動作です。

まず、`wallpaper_engine`ディレクトリを開き、`wallpaper32.exe`または`wallpaper64.exe`のどちらかを右クリックして、`送る`から`デスクトップ（ショートカットを作成）`を選び、デスクトップにWallpaper Engineプロセスのショートカットを作成します。 次に、その新しいショートカットを見つけ、用途に合った名前に変えます。 その後、それを右クリックして**プロパティ**を選択します。

![Wallpaper Engineのショートカットプロパティ](/img/faq/target.gif)

**ショートカット**タブを見ると、**リンク先**という欄があります。 現在、ここはWallpaper Engineの場所が表示されています。 ここに、壁紙のフルパスを書いた`openWallpaper`コマンドと、`playInWindow`パラメータを、次の例のように追加します（コピーペーストし、その後、必要な部分を変更するとよいでしょう）。

```bash
"C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\wallpaper64.exe" -control openWallpaper -file "C:\Program Files (x86)\Steam\steamapps\workshop\content\431960\123456789\scene.pkg" -playInWindow "Wallpaper #1" -width 1920 -height 1080
```

このコマンドを設定する時は、次の点にご注意ください。

* wallpaper32.exe または wallpaper64.exe へのパスが正しいことを確認してください。 上の例では、デフォルトのSteamディレクトリが使用されています。
* 壁紙へのパスが正しいことを確認してください。 上の例では、ダミーのワークショップID **123456789**を使用しています。壁紙が正しく動作するように、ここを変更します。 コンピュータ上の対応しているファイルなら何でも指定できます。
  * 壁紙のフルパスは、Wallpaper Engine上で壁紙を右クリックし、**エクスプローラーを開く**を選択すると確認できます。 ファイルの種類は通常、シーンタイプの壁紙であれば*project.json*ファイル、ビデオ壁紙は *.mp4* ファイル、Web壁紙は *index.html* となることが多いです。
* ウィンドウに独自の名前を付けます。 上の例では、**Wallpaper #1**という名前を使用しています。 **複数のウィンドウを開きたい場合は、それぞれに別の名前を付けてください。**
* また、解像度も指定した方が良いでしょう。上の例では1920x1080（フルHD）です。 `width`と`height`のパラメータを状況に応じて変更します。

## コマンド概要

### 一時停止

すべての壁紙を一時停止します。

``` powershell
-control pause
```

### 停止

すべての壁紙を止めます。

``` powershell
-control stop
```

### 再生

pause または stop しているすべての壁紙を再開します。

``` powershell
-control play
```

### ミュート

すべての壁紙をミュートします。

``` powershell
-control mute
```

### ミュート解除

すべての壁紙のミュートを解除します。

``` powershell
-control unmute
```

### 壁紙を開く

指定されたモニター、または指定されたモニターがない場合は1台目のモニターに、新しい壁紙をロードします。 壁紙をロードするモニターを選択するには、`location` または `monitor` パラメータを使用します。あるいは、 `playInWindow` パラメータを使ってウィンドウにパラメータを開くこともできます。

``` powershell
-control openWallpaper -file <string> [-location <string>] [-monitor <number>]
        [-playInWindow <string>] [-width <number>] [-height <number>]
        [-x <number>] [-y <number>] [-preset <string>]
```

* **file：** 開きたい壁紙の project.json へのパスか、壁紙ファイル（.mp4 など）への直接パスです。
* **location *（オプション）*：** モニターの内部識別子です。 お使いのPCによって生成され、config.json に書かれています。
* **monitor *（オプション）*：** 壁紙をロードするモニターのインデックスで、0から始まります。
* **preset *（オプション）*：** ロードするローカルプリセットの名前です。ローカルプリセットは事前に作成し、保存しておく必要があります。
* **playInWindow *（オプション）*：** 一つのウィンドウの中で複数の壁紙を開いたりコントロールしたりする場合の、ウィンドウの名前です。
  * **width *（オプション）*：** ウィンドウの幅です。
  * **height *（オプション）*：** ウィンドウの高さです。
  * **x *（オプション）*：** ウィンドウの水平位置です。
  * **y *（オプション）*：** ウィンドウの垂直位置です。

### 次の壁紙

指定されたモニター、または指定されたモニターがない場合はすべてのモニターで、次の壁紙までスキップします。

``` powershell
-control nextWallpaper [-location <string>] [-monitor <number>]
```

### 壁紙解除

指定されたモニターまたはウィンドウの壁紙を削除、またはすべての壁紙を削除します。

``` powershell
-control closeWallpaper [-location <string>] [-monitor <number>]
```

* **location *（オプション）*：** モニターの内部識別子または自分で指定したウィンドウ名です。
* **monitor *（オプション）*：** 壁紙を閉じるモニターのインデックスで、0から始まります。

### プレイリストを開く

指定されたモニター、または指定されたモニターがない場合は1台目のモニターに、新しい壁紙をロードします。 ロケーションまたはモニターのパラメータを使用して、どのモニターに壁紙をロードするかを選択することができます。

``` powershell
-control openPlaylist -playlist <string> [-location <string>] [-monitor <number>]
```

* **playlist：** 自分で作成し、Wallpaper Engine に保存したプレイリストの名前です。
* **location *（オプション）*：** モニターの内部識別子です。 お使いのPCによって生成され、config.json に書かれています。
* **monitor *（オプション）*：** プレイリストをロードするモニターのインデックスで、0から始まります。

### Open Profile

Applies an existing profile by name to all displays that was created and saved in Wallpaper Engine's display menu.

``` powershell
-control openProfile -profile <string>
```

* **profile:** Name of the profile you have created in Wallpaper Engine.

### 壁紙設定の適用

指定された壁紙またはすべての壁紙に、実行中に壁紙設定を適用します。 これにより、壁紙ブラウザを開いたり、手動で設定を変更したりすることなく、プログラムの実行中に壁紙の設定をダイナミックに変更することができます。 ブラウザで壁紙を選択中に、右側の **Share JSON** をクリックすることで、簡単にブラウザ内で使用できるプロパティのリストを見ることができます。

``` powershell
-control applyProperties -properties <JSON> [-location <string>] [-monitor <number>]
```

* **properties：** **JSON** 文字列を適用することで定義されるプロパティです。 文字列は特に、デリミタとして `RAW~(` および `)~END` でエスケープする必要があります。下の例をご覧ください。
* **location *（オプション）*：** モニターの内部識別子または自分で指定したウィンドウ名です。
* **monitor *（オプション）*：** プロパティを更新するモニターのインデックスで、0から始まります。

`rate` という壁紙設定名を 10 に変更する例：

``` cpp 
-control applyProperties -properties RAW~({"rate":10})~END
```

壁紙のツールバーの色設定を赤（`"1 0 0"` は *RGB* 値）に変更する例：

``` cpp
-control applyProperties -properties RAW~({"schemecolor":"1 0 0"})~END
```

### デスクトップアイコンを隠す

デスクトップアイコンを隠します。

``` powershell
-control hideIcons
```

### デスクトップアイコンを表示する

デスクトップアイコンを表示します。

``` powershell
-control showIcons
```

