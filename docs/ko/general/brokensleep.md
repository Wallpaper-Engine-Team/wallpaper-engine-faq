- - -
  tags:
  - screensavers
  - hibernation
  - sleep
  - power saving
- - -

# 최대 절전 모드 / 화면 보호기가 작동하지 않습니다

Windows는 오디오 스트림이 활성화된 상태에서 최대 절전 모드를 진행하지 않습니다. You can get around this by either disabling audio output in the "General" tab of the Wallpaper Engine settings to prevent Windows from blocking hibernation in the first place. If you want to continue to have audio output, follow the steps in this guide on how to achieve that.

## Windows 전원 설정 변경

Windows does not hibernate with any active audio streams open. You can get around this by either disabling audio output in the "General" tab of the Wallpaper Engine settings or re-configuring your Windows to allow it to sleep with audio playback enabled:

1. Windows 검색창에 "전원 및 절전 설정"을 입력하여 이동하세요.
2. "추가 전원 설정"을 클릭하세요.
3. 선택된 설정 옆의 "설정 변경"을 클릭하세요.
4. "고급 전원 관리 옵션 설정 변경"을 클릭하세요.
5. 아래로 스크롤해서 "멀티미디어 설정"을 펼치세요.
6. "미디어 공유 시점"을 "컴퓨터에서 자리 비움 모드로 전환 허용"(화면 보호기) **또는** "컴퓨터에서 절전 모드로 전환 허용"(최대 절전 모드)로 설정하세요.

![Enable "Allow the computer to sleep"](./power.gif)

## "웹사이트" 유형의 배경화면 관련 최대 절전 모드 문제

"Web" wallpapers use a web browser similar to Google Chrome ("CEF") which will prevent hibernation mode. Until this is fixed in the browser, you can get around this with some command-line prompts.

1. Windows에서 "cmd.exe"를 검색하여 오른쪽 클릭을 한 뒤, "관리자로 실행"을 선택합니다. (그러지 않으면 작동하지 않습니다!)
2. `powercfg /requests` 명령을 사용하여 시스템의 최대 절전 모드를 차단하는 모든 프로세스를 확인합니다. (또한 여기서 다른 프로그램의 가능한 오류도 확인합니다)
3. 다음 세 가지 명령을 사용해 Wallpaper Engine 실행 중 시스템의 절전 모드를 허용합니다.

```
powercfg /requestsoverride PROCESS webwallpaper32.exe AWAYMODE DISPLAY SYSTEM
powercfg /requestsoverride PROCESS wallpaper32.exe AWAYMODE DISPLAY SYSTEM
powercfg /requestsoverride PROCESS wallpaper64.exe AWAYMODE DISPLAY SYSTEM
```

Additionally, you can also set the **Display asleep** option in the **Performance** tab of the Wallpaper Engine settings to *Stop (free memory)* and turn off your display. That way Wallpaper Engine stops all playback when you turn your display off when leaving your computer unattended.