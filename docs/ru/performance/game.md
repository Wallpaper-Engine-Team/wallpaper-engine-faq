# Низкая производительность / кадровая частота в некоторых играх и программах

By default, Wallpaper Engine pauses itself while you are in-game. You can configure this behavior in the **Performance** tab of the Wallpaper Engine settings.

If you are having performance issues with individual games or applications, you can further tweak this behavior. Usually performance issues mean that your system is running out of RAM or Video RAM (the memory on your graphics card). You can configure Wallpaper Engine to free up any memory when in-game by changing the **Other application fullscreen** option to **Stop (free memory)** in the **Performance** tab of the Wallpaper Engine settings.

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
