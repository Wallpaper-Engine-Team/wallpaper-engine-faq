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
  - 간헐적
---

# 특정 앱 또는 게임 오류 해결

특정 응용프로그램이나 게임에서 문제가 발생하면, 가령 문제가 있는 앱이 실행되거나 오디오를 재생하는 것을 감지할 때 Wallpaper Engine을 특정 방식으로 행동하도록 구성할 수 있습니다.

## 응용프로그램 규칙 설정

Wallpaper Engine 설정의 *성능* 탭에서 *응용프로그램 규칙* 라벨 옆의 *편집* 버튼을 클릭하면 설정한 전체 사용자 지정 규칙 개요를 불러올 수 있습니다. *새 규칙 만들기*를 클릭하면 특정 응용프로그램에 대한 Wallpaper Engine의 특별한 행동을 설정할 수 있습니다.

![Application Rules Overview](./applicationrule.gif)

시스템에서 실행 중인 모든 .exe 파일 목록이 나타납니다. 목록에서 .exe.를 선택하거나 문제가 있는 .exe의 정확한 이름을 입력하세요. 두 가지 다른 옵션으로 조건 및 행동을 구성할 수 있습니다. 자세한 정보와 구체적인 예는 아래를 확인하세요.

::: 팁 Wallpaper Engine에서는 .exe 이름이 정확해야 하며, 위치는 중요하지 않습니다. 그러므로 *응용프로그램 이름* 칸에 .exe만 입력하면 됩니다. 대소문자를 포함해 .exe 이름이 정확히 일치해야 합니다. :::

### 앱 또는 게임의 성능 문제 해결

특별한 규칙을 적용하려는 프로그램의 .exe를 목록에서 선택하거나 **응용프로그램 이름** 칸에 입력하세요. Afterwards, set **Condition** to **Is running** and **Wallpaper playback** to **Stop (free memory)**. This means Wallpaper Engine will completely remove all wallpapers from memory when the application or game is launched, which means any compatibility issues will be resolved.

### 배경 기록 도구의 간헐적 사운드 해결

특별한 규칙을 적용하려는 프로그램의 .exe를 목록에서 선택하거나 **응용프로그램 이름** 칸에 입력하세요. Afterwards, set **Condition** to **Is playing audio** and **Wallpaper playback** to **Keep running**. This means Wallpaper Engine will not mute itself when the application in question is playing or recording audio. Windows does not differentiate between playing or recording audio, this is why Wallpaper Engine will constantly mute and unmute itself if you are recording it. Many game streaming applications can do this by accident and without your knowledge.

### Other behavior

Check out all possible conditions and wallpaper playback options for more types of application rules. You can also configure Wallpaper Engine to mute or pause when you launch a certain application.

::: tip You can also change these settings for all applications in the **Performance** tab of the Wallpaper Engine settings. If you are having performance issues in multiple games, for example, it may make sense to just change the **Other application fullscreen** option to **Stop (free memory)** so that Wallpaper Engine will turn itself off when you launch any game or fullscreen application. :::
