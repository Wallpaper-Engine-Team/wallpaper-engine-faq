# パフォーマンスの問題 / 特定のゲームやアプリケーションでFPSが低下する

デフォルトでは、Wallpaper Engineはゲーム中は停止します。 この動作は、Wallpaper Engine設定の**パフォーマンス**タブで設定できます。

個別のゲームやアプリケーションでパフォーマンスに問題が起きるときは、この動作をさらに調整することができます。 通常、パフォーマンスに問題が起きる場合はシステムのRAMまたはビデオRAM（グラフィックスカードのメモリ）が不足しています。 Wallpaper Engine設定の**パフォーマンス**タブにある**他のアプリケーションがフルスクリーンになった場合**オプションを**停止（メモリ解放）**に変更することにより、ゲーム中にWallpaper Engineがメモリを解放するように設定することができます。

## アプリケーションルール

特定のゲームまたはソフトウェアについてのみ問題が起きるときは、**アプリケーションルール**を作成することによって、問題が起きているソフトウェアだけにこれを設定することもできます。

1. Wallpaper Engine設定で**パフォーマンス**タブを開きます
2. **アプリケーションルール**の隣の**編集**ボタンをクリックします
3. In the pop-up that appears, click on **Create new rule**
4. Create a new rule with the following settings:
    * **Application name:** "game.exe" *(replace this with the actual .exe file of your game)*
    * **Condition:** "Is running"
    * **Wallpaper playback:** "Stop (free memory)"
5. Confirm by clicking on **Create**

Wallpaper Engine will now completely remove all wallpapers from memory when the *.exe* you configured is launched.

## Conflicts with screen-recording tools or overlays

If you are using any game streaming, game recording or software with overlays, make sure they are not accidentally recording Wallpaper Engine in the background. This can also be the case if you use any game streaming functionalities from your graphics card drivers (Nvidia ShadowPlay, Nvidia Share or AMD ReLive for example).
