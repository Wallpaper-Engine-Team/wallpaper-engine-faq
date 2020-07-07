# 최대 절전 모드 / 화면 보호기가 작동하지 않습니다

Windows는 오디오 스트림이 활성화된 상태에서 최대 절전 모드를 진행하지 않습니다. 그러나 Wallpaper Engine 설정의 "일반" 탭에서 오디오 출력을 비활성화하여 Windows의 최대 절전 모드를 허용할 수 있습니다. 오디오 출력을 계속하고 싶으면, 이 가이드의 다음 단계를 따르세요.

## Windows 전원 설정 변경

Windows는 오디오 스트림이 활성화된 상태에서 최대 절전 모드를 진행하지 않습니다. 그러나 Wallpaper Engine 설정의 "일반" 탭에서 오디오 출력을 비활성화하거나 오디오 재생을 활성화한 상태에서 절전 모드를 실행하도록 Windows를 재구성하여 이에 대처할 수 있습니다.

1. Windows 검색창에 "전원 및 절전 설정"을 입력하여 이동하세요.
2. "추가 전원 설정"을 클릭하세요.
3. 선택된 설정 옆의 "설정 변경"을 클릭하세요.
4. "고급 전원 관리 옵션 설정 변경"을 클릭하세요.
5. 아래로 스크롤해서 "멀티미디어 설정"을 펼치세요.
6. "미디어 공유 시점"을 "컴퓨터에서 자리 비움 모드로 전환 허용"(화면 보호기) **또는** "컴퓨터에서 절전 모드로 전환 허용"(최대 절전 모드)로 설정하세요.

!["컴퓨터에서 절전 모드로 전환 허용" 활성화](./power.gif)

## "웹" 유형의 배경화면 관련 최대 절전 모드 문제

"웹" 배경화면은 Google Chrome ("CEF")과 유사한 웹 브라우저를 사용하며, 최대 절전 모드가 작동하지 못하게 합니다. 브라우저에서 이 문제를 해결할 때까지 명령줄 프롬프트로 이에 대응할 수 있습니다.

1. Windows에서 "cmd.exe"를 검색하여 오른쪽 클릭을 한 뒤, "관리자로 실행"을 선택하세요. (그렇지 않으면 작동하지 않습니다!)
2. `powercfg /requests` 명령을 사용하여 시스템의 최대 절전 모드를 차단하는 모든 프로세스를 확인하세요. (또한 여기서 다른 프로그램의 가능한 오류도 확인합니다)
3. 다음 세 가지 명령을 사용해 Wallpaper Engine 실행 중 시스템의 절전 모드를 허용하세요.

```
powercfg /requestsoverride PROCESS webwallpaper32.exe AWAYMODE DISPLAY SYSTEM
powercfg /requestsoverride PROCESS wallpaper32.exe AWAYMODE DISPLAY SYSTEM
powercfg /requestsoverride PROCESS wallpaper64.exe AWAYMODE DISPLAY SYSTEM
```

추가로 Wallpaper Engine 설정의 **성능** 탭의 **디스플레이 절전 상태** 옵션을 *중지 (여유 메모리 확보)*로 설정하고 디스플레이를 끌 수도 있습니다. 이렇게 하면 사용자가 컴퓨터를 떠나면서 디스플레이를 끌 때 Wallpaper Engine이 모든 재생을 중단합니다.