---
tags:
  - lock screen
  - login screen
---

# Windowsのロック画面でのWallpaper Engine

The Windows login screen is not meant to be modified as a design decision by Microsoft. Making changes to it essentially requires hacking Windows in an unsafe and unstable manner. This means that if a Windows update modifies the lock screen or if the app crashes, you would be unable to login to your computer entirely. The feature could potentially stop working at any time, causing unpredictable side effects.

Windowsのロック画面はWindows側で制御されており、ライブまたはダイナミック壁紙を適用させることはできません。 Microsoftはセキュリティー対策の一環として、このような仕様を意図的に構築しています。 Currently, there are no known safe ways to accomplish this, which is why live wallpapers cannot be set on the lock screen by Wallpaper Engine.

## Setting a static wallpaper

しかし、Wallpaper Engineの設定を変更すれば、現在のライブ壁紙の一部分を利用してロック画面の静止画を上書きすることも可能です。 これを実行するには、Wallpaper Engine側の設定画面の**一般**タブから**ロック画面画像の上書き**を有効にしてください。

## スクリーンセーバー機能

ロック画面を使用する代わりに、Wallpaper Engineをスクリーンセーバーとして設定、さらにWindowsのスクリーンセーバーの設定で**再開時にログオン画面に戻る**を有効にするという組み合わせを推奨しています。 Wallpaper Engineをスクリーンセーバーに設定する方法は、スクリーンセーバーガイドを参照してください：

* [Wallpaper Engineのスクリーンセーバー](/functionality/screensaver.html)