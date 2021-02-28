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

다음 예시를 따르면 Windows 바로 가기를 사용하여 배경화면을 원하는 만큼 창으로 열 수 있습니다. You can repeat this process to open any number of wallpapers in a separate window which may be useful for streamers who want to utilize Wallpaper Engine for any type of idle screen or animation.

First, go to the `wallpaper_engine` directory and right-click on either `wallpaper32.exe` or `wallpaper64.exe` and hover over `Send to` and then `Desktop (create shortcut)` to create a new shortcut to the Wallpaper Engine process on your desktop. Next, find your new shortcut and rename it to fit your use-case. Afterwards, right-click on it, then select **Properties**.

![Wallpaper Engine shortcut properties](/img/faq/target.gif)

You should see the **Shortcut** tab with a line called **Target**. This line will currently just point to Wallpaper Engine. You now need to edit it to add the `openWallpaper` command with the full path to your wallpaper and the `playInWindow` parameter as shown in the example below (you may want to copy-paste it and adjust it to fit your needs):

```bash
"C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\wallpaper64.exe" -control openWallpaper -file "C:\Program Files (x86)\Steam\steamapps\workshop\content\431960\123456789\scene.pkg" -playInWindow "Wallpaper #1" -width 1920 -height 1080
```

Check the following things when configuring this command:

* Make sure the path to your wallpaper32.exe / wallpaper64.exe stays correct. The example above uses the default Steam directory.
* Make sure to use the correct path to your wallpaper. The example above uses an example Workshop ID **123456789**, you must change this in order for your wallpaper to work. You can also point at any supported file on your computer.
  * You can find the full path of any wallpaper by right-clicking on it in Wallpaper Engine and selecting **Open in Explorer**. For Scene type wallpapers, you generally want to point at the *project.json* file, for video wallpapers this will likely be an *.mp4* file and for web wallpapers you will find a file called *index.html*.
* Give your window a unique name. The example above uses **Wallpaper #1** as a name. **If you want to open multiple windows, simply assign each of them a unique name.**
* You may also want to adjust the resolution, the example above uses 1920x1080 (Full HD). Change the `width` and `height` parameters accordingly.

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

