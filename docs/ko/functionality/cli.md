---
sidebarDepth: 2
---

# 명령줄 제어

명령줄 인수를 통해 Wallpaper Engine을 제어할 수 있습니다. 이를 통해 바로 가기, 매크로 바인딩 등 자신이 직접 작성한 스크립트 또는 코드를 사용하여 프로그램의 거의 모든 기능을 사용할 수 있습니다. 예를 들어, 모든 배경화면을 일시정지 혹은 종료하거나, 배경화면을 변경하거나, 심지어는 작동 중인 배경화면의 설정도 변경할 수 있습니다.

Wallpaper Engine이 실행 중인지 확인한 후, 프로그램의 주 프로세스인 *wallpaper32.exe* (64비트 버전을 사용 중이라면 *wallpaper64.exe*)를 실행하고 이 가이드에 나온 명령 인수를 사용하여 명령을 보내십시오. 실행 파일은 `wallpaper_engine` 설치 디렉터리에서 찾을 수 있습니다.

모든 명령은 `-control` 매개변수의 값으로 하달됩니다. 예를 들어, 일시 정지 명령은 다음과 같이 실행할 수 있습니다.

``` powershell
wallpaper32.exe -control pause
```

띄어쓰기가 있는 스트링 값에는 반드시 큰따옴표 **"** 문자를 사용해야 합니다.

``` powershell
wallpaper32.exe -control openWallpaper -file "C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\projects\myprojects\myWallpaper\project.json"
```

### 바로 가기 예시: 창으로 배경화면 열기

다음 예시를 따르면 Windows 바로 가기를 사용하여 배경화면을 원하는 만큼 창으로 열 수 있습니다. 이 과정을 반복하여 배경화면을 원하는 만큼 개별 창으로 열 수 있으며, 이는 Wallpaper Engine을 대기 화면 또는 애니메이션에 활용하고자 하는 스트리머에게 유용합니다.

우선 `wallpaper_engine` 디렉토리로 이동하여 `wallpaper32.exe` 또는 `wallpaper64.exe`를 오른쪽 클릭한 후, `보내기`에 커서를 올려놓은 다음 `바탕 화면에 바로 가기 만들기` 를 클릭하여 바탕 화면에 Wallpaper Engine 프로세스의 바로 가기를 새로 생성하십시오. 그다음, 새 바로 가기의 이름을 용도에 알맞게 변경하십시오. 그리고 바로 가기를 오른쪽 클릭한 후 **속성**을 선택하십시오.

![Wallpaper Engine 바로 가기 속성](/img/faq/target.gif)

그러면 **바로 가기** 탭에 **대상**이라는 항목이 보일 것입니다. 해당 시점에서는 Wallpaper Engine이 대상으로 지정되어 있을 것이며, 이제 아래 예시와 같이 배경화면의 전체 경로, `openWallpaper` 명령어 그리고 `playInWindow` 매개변수를 추가해야 합니다(복사하여 붙여넣은 후 필요한 대로 조정하십시오):

```bash
"C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\wallpaper64.exe" -control openWallpaper -file "C:\Program Files (x86)\Steam\steamapps\workshop\content\431960\123456789\scene.pkg" -playInWindow "Wallpaper #1" -width 1920 -height 1080
```

이 명령어를 설정할 때는 다음 사항에 유의하십시오:

* wallpaper32.exe / wallpaper64.exe 경로가 올바른지 확인하십시오. 위의 예시는 Steam의 기본 경로를 사용하고 있습니다.
* 배경화면의 경로가 올바른지 확인하십시오. 위의 예는 **123456789**라는 예시 창작마당 ID를 사용하고 있으며, 배경화면이 제대로 작동하려면 알맞게 변경하여야 합니다. 또한 컴퓨터 상의 지원되는 파일을 선택할 수도 있습니다.
  * 배경화면의 전체 경로는 Wallpaper Engine에서 해당 배경화면을 오른쪽 클릭한 후 **탐색기에서 열기**를 선택하여 확인할 수 있습니다. 일반적으로 장면 유형의 배경화면은 *project.json* 파일을, 영상 배경화면은 *.mp4* 파일을, 웹사이트 배경화면은 *index.html* 파일을 경로로 지정해야 합니다.
* 창에 고유한 이름을 부여하십시오. 위의 예시는 임의로 **Wallpaper #1**라는 이름을 사용하고 있습니다. **여러 개의 창을 열고자 할 경우에는 각각 고유한 이름을 부여하면 됩니다.**
* 또한 위 예시는 1920x1080 (Full HD) 해상도를 사용하며, 해상도를 변경해야 할 수도 있습니다. `width` 및 `height` 매개변수를 알맞게 변경하십시오.

## 명령 개요

### 일시정지

모든 배경화면 일시정지.

``` powershell
-control pause
```

### 종료

모든 배경화면 종료.

``` powershell
-control stop
```

### 재생

일시 정지 혹은 중지된 모든 배경화면 다시 재생.

``` powershell
-control play
```

### 음소거

모든 배경화면 음소거.

``` powershell
-control mute
```

### 음소거 해제

모든 배경화면 음소거 해제.

``` powershell
-control unmute
```

### 배경화면 열기

지정한 모니터, 또는 미지정 시 첫 번째 모니터에 새로운 배경화면을 불러옵니다. `location` 또는 `monitor` 매개변수로 어떤 모니터에 배경화면을 불러올 것인지 선택하거나, `playInWindow` 매개변수를 사용하여 창으로 열 수 있습니다.

``` powershell
-control openWallpaper -file <string> [-location <string>] [-monitor <number>]
        [-playInWindow <string>] [-width <number>] [-height <number>]
        [-x <number>] [-y <number>] [-preset <string>]
```

* **file:** 열고 싶은 배경화면의 project.json 경로 혹은 배경화면 파일 자체 경로 (.mp4 등).
* **location *(선택 사항)*:** 모니터의 내부 식별자. PC가 생성한 식별자이며 config.json에서 찾을 수 있습니다.
* **monitor *(선택 사항)*:** 배경화면을 불러올 모니터의 인덱스. 0에서부터 시작합니다.
* **preset *(선택 사항)*:** 불러올 사전 설정의 이름. 이전에 생성하고 저장한 사전 설정이 있어야 사용할 수 있습니다.
* **playInWindow *(선택 사항)*:** 다수의 배경화면을 창에서 열고 싶을 때 창의 이름.
  * **width *(선택 사항)*:** 창의 너비.
  * **height *(선택 사항)*:** 창의 높이.
  * **x *(선택 사항)*:** 창의 수평 위치.
  * **y *(선택 사항)*:** 창의 수직 위치.

### 다음 배경화면

지정된 모니터, 혹은 미지정 시 모든 모니터에서 다음 배경화면으로 건너뜁니다.

``` powershell
-control nextWallpaper [-location <string>] [-monitor <number>]
```

### 배경화면 제거

특정 모니터 또는 창의 배경화면을 제거하거나, 모든 배경화면을 제거합니다.

``` powershell
-control closeWallpaper [-location <string>] [-monitor <number>]
```

* **location *(선택 사항)*:** 지정한 모니터 혹은 창 이름의 내부 식별자.
* **monitor *(선택 사항)*:** 배경화면을 닫을 모니터의 인덱스. 0에서부터 시작합니다.

### 재생목록 열기

지정한 모니터, 또는 미지정 시 첫 번째 모니터에 새로운 배경화면을 불러옵니다. location 또는 monitor 매개변수를 사용하여 어떤 모니터에서 배경화면을 불러올지 선택할 수 있습니다.

``` powershell
-control openPlaylist -playlist <string> [-location <string>] [-monitor <number>]
```

* **playlist:** Wallpaper Engine에서 만들고 저장한 재생목록의 이름.
* **location *(선택 사항)*:** 모니터의 내부 식별자. PC가 생성한 식별자이며 config.json에서 찾을 수 있습니다.
* **monitor *(선택 사항)*:** 재생목록을 불러올 모니터의 인덱스. 0에서부터 시작합니다.

### 프로필 열기

기존 프로필을 Wallpaper Engine의 디스플레이 메뉴에서 생성하고 저장한 모든 디스플레이에 적용합니다.

``` powershell
-control openProfile -profile <string>
```

* **프로필:** Wallpaper Engine에서 만들고 저장한 프로필의 이름.

### 배경화면 설정 적용

지정된 혹은 모든 배경화면에 배경화면 속성을 즉시 적용합니다. 이를 통해 배경화면 브라우저를 열어 직접 변경하지 않고도, 프로그램이 작동하는 도중에 배경화면의 모든 설정을 유동적으로 변경할 수 있습니다. 브라우저에서 배경화면을 선택할 때 우측의 **JSON 공유**를 누르면, 사용 가능한 모든 속성의 목록을 확인할 수 있습니다.

``` powershell
-control applyProperties -properties <JSON> [-location <string>] [-monitor <number>]
```

* **properties:** 적용할 **JSON** 스트링으로 정의된 속성. 이 스트링은 `RAW~(` and `)~END`를 구분 문자로 이스케이핑해야 합니다. 아래 예를 참조하세요!
* **location *(선택 사항)*:** 지정한 모니터 혹은 창 이름의 내부 식별자.
* **monitor *(선택 사항)*:** 속성을 업데이트할 모니터의 인덱스. 0에서부터 시작합니다.

`rate`라는 배경화면 설정을 10으로 변경하는 예:

``` cpp 
-control applyProperties -properties RAW~({"rate":10})~END
```

배경화면의 구성표 색 설정을 빨강으로 바꾸는 예 (`"1 0 0"`은 *RGB* 값을 나타냄):

``` cpp
-control applyProperties -properties RAW~({"schemecolor":"1 0 0"})~END
```

### 데스크탑 아이콘 숨기기

데스크탑 아이콘을 숨깁니다.

``` powershell
-control hideIcons
```

### 데스크탑 아이콘 표시

데스크탑 아이콘을 표시합니다.

``` powershell
-control showIcons
```

