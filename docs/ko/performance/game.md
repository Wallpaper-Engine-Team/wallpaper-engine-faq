# 특정 게임 또는 응용프로그램에서의 성능 문제 / 낮은 FPS

기본적으로 Wallpaper Engine는 게임 중에는 저절로 일시중지됩니다. Wallpaper Engine 설정의 **성능** 탭에서 이 행동을 구성할 수 있습니다.

개별 게임 또는 응용프로그램에서 성능 문제가 발생한다면, 이 행동을 더 조정할 수 있습니다. 보통 성능 문제는 시스템에서 RAM 또는 비디오 RAM(그래픽 카드의 메모리)이 부족하다는 의미입니다. 게임 중 Wallpaper Engine 설정의 **성능** 탭에서 **타 응용프로그램 전체 화면** 옵션을 **중지 (여유 메모리 확보)**로 변경하여 Wallpaper Engine이 메모리를 늘리도록 구성할 수 있습니다.

## 응용프로그램 규칙

특정 게임이나 응용프로그램에서만 문제가 발생하면, **응용프로그램 규칙**을 생성해서 문제를 겪는 소프트웨어에만 이것을 구성할 수도 있습니다:

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
