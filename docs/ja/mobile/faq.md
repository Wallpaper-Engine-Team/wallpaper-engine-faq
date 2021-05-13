# Android - よくある質問と問題

このページには、よくある質問や、ユーザーが遭遇しやすい技術的問題のリストが掲載されています。

## Androidのロック画面にライブ壁紙を設定できない

お使いのデバイスのメーカーや、Androidのランチャーによっては、ロック画面にライブ壁紙が設定できなかったり、ホーム画面と同じ壁紙しか設定できなかったりすることがあります。

スマートフォン上のWallpaper Engineでライブ壁紙をプレビューする時に、右上のチェックマークを数秒間押したままにしてみてください。 これにより、スマートフォンにライブ壁紙の画面が現れます。 メーカーによっては、この時、ロック画面に壁紙を設定するというオプションが表示されます。このオプションが表示されない場合は、お使いのデバイスはロック画面でのライブ壁紙をサポートしていません。 次のメーカーの一部、あるいは全部のデバイスは、ロック画面にライブ壁紙を使用できないことが分かっています：

* Huawei
* Xiaomi

## Wallpaper Engineの壁紙の設定を解除するには

Wallpaper Engineの壁紙の使用をやめたい時は、Androidの設定で新しい壁紙を設定してください。 Wallpaper Engine is just another wallpaper to Android and wallpapers cannot unset themselves.

Alternatively, you can uninstall Wallpaper Engine entirely which will cause your phone to revert to its default wallpaper.

## Android wallpaper regularly disappears or crashes silently

If you are using Wallpaper Engine as a wallpaper but the wallpaper disappears without any error messages after a few hours, days or weeks, it is likely being falsely terminated by your phone's power saving functionality. Under normal circumstances, Android should never terminate live wallpapers for power saving purposes but some users have reported this happening to them. This depends largely on your device manufacturer, if Wallpaper Engine disappears regularly, disable power optimization for Wallpaper Engine in your Android settings. This differs depending on your Android version and device, if you are unsure, search the web for ways to disable power optimization for apps on your exact mobile device name.