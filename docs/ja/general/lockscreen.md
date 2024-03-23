---
tags:
  - lock screen
  - login screen
---

# Windowsのロック画面でのWallpaper Engine

The login screen is very secure and not accessible by normal means. Only dangerous Windows hacks may accomplish this by patching or hooking into the login screen process. Due to this, you could get permanently locked out of your PC when an error occurs or a Windows update changes the lockscreen structure in an unexpected way.

If a safe method is made public or reverse-engineered by us, we will implement this feature. Currently there are no known safe ways to accomplish this, which is why live wallpapers cannot be set on the lockscreen.

しかし、Wallpaper Engineの設定を変更すれば、現在のライブ壁紙の一部分を利用してロック画面の静止画を上書きすることも可能です。 これを実行するには、Wallpaper Engine側の設定画面の**一般**タブから**ロック画面画像の上書き**を有効にしてください。

## スクリーンセーバー機能

ロック画面を使用する代わりに、Wallpaper Engineをスクリーンセーバーとして設定、さらにWindowsのスクリーンセーバーの設定で**再開時にログオン画面に戻る**を有効にするという組み合わせを推奨しています。 Wallpaper Engineをスクリーンセーバーに設定する方法は、スクリーンセーバーガイドを参照してください：

* [Wallpaper Engineのスクリーンセーバー](/functionality/screensaver.html)