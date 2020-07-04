# パフォーマンスの問題 / 特定のゲームやアプリケーションでFPSが低下する

デフォルトでは、Wallpaper Engineはゲーム中は停止します。 この動作は、Wallpaper Engine設定の**パフォーマンス**タブで設定できます。

個別のゲームやアプリケーションでパフォーマンスに問題が起きるときは、この動作をさらに調整することができます。 通常、パフォーマンスに問題が起きる場合はシステムのRAMまたはビデオRAM（グラフィックスカードのメモリ）が不足しています。 You can configure Wallpaper Engine to free up any memory when in-game by changing the **Other application fullscreen** option to **Stop (free memory)** in the **Performance** tab of the Wallpaper Engine settings.

## Application Rule

If you only have issues with a particular game or software, you can also configure this just for the sofware that you are having problems with by creating an **Application Rule**:

1. Open the **Performance** tab in the Wallpaper Engine settings
2. Click on the **Edit** button next to **Application rules**
3. In the pop-up that appears, click on **Create new rule**
4. Create a new rule with the following settings:
    * **Application name:** "game.exe" *(replace this with the actual .exe file of your game)*
    * **Condition:** "Is running"
    * **Wallpaper playback:** "Stop (free memory)"
5. Confirm by clicking on **Create**

Wallpaper Engine will now completely remove all wallpapers from memory when the *.exe* you configured is launched.

## Conflicts with screen-recording tools or overlays

If you are using any game streaming, game recording or software with overlays, make sure they are not accidentally recording Wallpaper Engine in the background. This can also be the case if you use any game streaming functionalities from your graphics card drivers (Nvidia ShadowPlay, Nvidia Share or AMD ReLive for example).
