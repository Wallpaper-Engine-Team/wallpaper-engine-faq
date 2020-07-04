---
tags:
  - 응용프로그램
  - 규칙
  - 예외
  - 허용 목록
  - 블랙리스트
  - 지연
  - laggy
  - 게임
  - 성능
  - fps
  - 작동 중단
  - 사운드
  - 오디오
  - 일시적
---

# 특정 앱 또는 게임 오류 해결

특정 응용프로그램이나 게임에서 문제가 발생하면, 가령 문제가 있는 앱이 실행되거나 오디오를 재생하는 것을 감지할 때 Wallpaper Engine을 특정 방식으로 행동하도록 구성할 수 있습니다.

## 응용프로그램 규칙 설정

Wallpaper Engine 설정의 *성능* 탭에서 *응용프로그램 규칙* 라벨 옆의 *편집* 버튼을 클릭하면 설정한 전체 사용자 지정 규칙 개요를 불러올 수 있습니다. *새 규칙 만들기*를 클릭하면 특정 응용프로그램에 대한 Wallpaper Engine의 특별한 행동을 설정할 수 있습니다.

![Application Rules Overview](./applicationrule.gif)

시스템에서 실행 중인 모든 .exe 파일 목록이 나타납니다. Either select an .exe from the list or type in the exact name of the .exe you are having problems with. You can configure the condition and the behavior with the two other options. See below for more infos and concrete examples.

::: tip Wallpaper Engine only cares about the exact .exe name, the location does not matter so you can just type any .exe into the *Application name* field. Just make sure the .exe name matches exactly, including uppercase and lowercase letters. :::

### Fixing performance problems with apps or games

Select the .exe of the program you want to have a special rule for from the list or type it into the **Application name** field. Afterwards, set **Condition** to **Is running** and **Wallpaper playback** to **Stop (free memory)**. This means Wallpaper Engine will completely remove all wallpapers from memory when the application or game is launched, which means any compatibility issues will be resolved.

### Fixing intermittent sound with background recording tools

Select the .exe of the program you want to have a special rule for from the list or type it into the **Application name** field. Afterwards, set **Condition** to **Is playing audio** and **Wallpaper playback** to **Keep running**. This means Wallpaper Engine will not mute itself when the application in question is playing or recording audio. Windows does not differentiate between playing or recording audio, this is why Wallpaper Engine will constantly mute and unmute itself if you are recording it. Many game streaming applications can do this by accident and without your knowledge.

### Other behavior

Check out all possible conditions and wallpaper playback options for more types of application rules. You can also configure Wallpaper Engine to mute or pause when you launch a certain application.

::: tip You can also change these settings for all applications in the **Performance** tab of the Wallpaper Engine settings. If you are having performance issues in multiple games, for example, it may make sense to just change the **Other application fullscreen** option to **Stop (free memory)** so that Wallpaper Engine will turn itself off when you launch any game or fullscreen application. :::
