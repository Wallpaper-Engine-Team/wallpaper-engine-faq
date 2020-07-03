# 32-Bitバージョンと64-Bitバージョン

64-bitバージョンはより大きなファイル（2GB以上）を扱えますが、壁紙のファイルサイズにかかわらず、常にメモリを余分に使用します。 例えば、通常のビデオ壁紙の場合、64-bitバージョンは32-bitバージョンに比べて使用RAMが50MB多くなります。それ以外には、特に違いや改良点はありません。

::: tip 32-bitバージョンがクラッシュするほど巨大な壁紙をお持ちでない限り、32-bitバージョンの使用をお勧めします。 ほとんどのユーザーは、この問題には遭遇しません。 :::

また、PCのビデオシステムに32-bitのプログラムだけに影響するエラーが発生する場合も64-bitバージョンを選択することができます。 Should you ever have installed codec packs or alike, they may have permanently damaged the 32-bit Windows video system that Wallpaper Engine uses. If the 64-bit system is not affected, you'll be able to take advantage of that by using the 64-bit version of Wallpaper Engine and so you can avoid having to fix whatever got broken.

::: warning Note Note that "Web" type wallpapers will always be executed with a 32-Bit executable (webwallpaper32.exe). The same applies to the user interface itself (ui32.exe). 64-Bit only applies when selecting wallpapers of the type "Scene" or "Video". :::

## How to set-up Wallpaper Engine to autstart with either the 32 or 64 Bit version when Windows launches?

First, completely turn off Wallpaper Engine via the tray icon (right-click on the Wallpaper Engine icon in the Windows tray -> "Quit"). This is important as Steam will otherwise not launch Wallpaper Engine and only bring the already running version to the foreground.

Once Wallpaper Engine is turned off, go to Steam and start either the 32 Bit or 64 Bit version, depending on which version you want to automatically start. Go to the Wallpaper Engine settings and at the top of the "General" tab, enable autostart. If it is already enabled, turn it off completely and then turn it back on. This will register the current version as the one which will be automatically started alongside Windows. 