# 소리 재생 안 됨 / 오디오 출력 문제
이 가이드는 배경화면의 오디오 출력과 관련 각종 문제를 해결하는 데 도움이 될 것입니다. 우선, 다른 배경화면을 몇 가지 시험해보며 실제로 오디오가 포함된 배경화면을 사용하고 있는 것인지 확인하십시오. 대다수의 배경화면은 소리가 전혀 나지 않습니다. 자신의 배경화면이 확실하게 오디오를 포함하고 있다면 계속 이 가이드를 따르십시오:

::: warning
주의: 사운드가 몇 초 상관으로 꺼졌다 켜지기를 반복한다면 다음 가이드를 대신 확인하십시오:

* [사운드 / 오디오가 간헐적으로 켜지고 꺼집니다](/audio/intermittent)
:::

## Wallpaper Engine이 자체적으로 음소거되어 있지 않은지 확인
앱 내에서 오디오 출력의 음소거 설정을 확인하는 3가지 방법은 다음과 같습니다.

1. Wallpaper Engine 설정의 **일반** 탭을 확인하면 **오디오 출력**이라는 옵션이 있습니다. 해당 옵션이 활성화되어 있는지 확인하십시오.
2. Wallpaper Engine 메인 창의 오른쪽 상단에 있는 **디스플레이** 버튼을 클릭하십시오. 그러면 모든 화면의 개요가 표시됩니다. 각 화면의 왼쪽 하단을 보시면 음소거 버튼이 있습니다. 화면이 음소거되어 있지 않은지 확인하십시오.
3. 배경화면을 선택했을 때 오른쪽에 표시되는 **볼륨** 설정이 0이거나 너무 낮게 설정되어 있지 읂은지 확인하십시오. 옵션에 **디스플레이 설정에서 오디오 비활성화됨**이라고 표시된다면, 2번 단계를 다시 확인한 후 화면의 음소거를 해제하십시오.

## Windows 오디오 믹서 확인
Wallpaper Engine은 모든 오디오 출력을 Windows가 관리하도록 허용하기 때문에, Wallpaper Engine 자체가 음소거되어 있지 않다면 Windows 환경에 문제가 있다는 의미입니다. 우선 다음 스크린샷을 참조하여 Windows 오디오 믹서에서 Wallpaper Engine이 음소거되었거나 매우 낮은 볼륨으로 설정되어 있지 않은지 확인하십시오:

![Raise volume and unmute Wallpaper Engine in the Windows audio mixer](./audiomixer.png)

## 선택된 오디오 장치 확인
Windows가 Wallpaper Engine의 오디오 출력 장치를 잘못 선택한 것이 원인일 수도 있습니다. 사용할 오디오 출력 장치를 직접 선택해보십시오:

1. Windows 트레이에서 시계 옆 오디오 아이콘을 오른쪽 클릭하고 **소리 설정 열기**를 선택합니다.
2. 열린 페이지를 맨 아래까지 스크롤하고 **앱 볼륨 및 장치 기본 설정**을 클릭합니다.
3. 오디오를 재생 중인 모든 응용 프로그램 목록이 표시됩니다. 목록에서 Wallpaper Engine을 찾은 후 **출력** 열에서 알맞은 오디오 출력 장치를 선택합니다. 확실하지 않다면 가능한 모든 장치를 시험해보십시오. 변경 사항이 적용되려면 Wallpaper Engine을 재시작해야 할 수도 있습니다.

다수의 오디오 장치, 특히 USB 또는 Bluetooth 오디오 장치를 사용 중인지 그리고 장치의 연결이 끊기거나 다시 연결할 때 오디오가 끊기는 증상이 있는지 확인하십시오. 그 경우 Windows가 작동 중인 프로그램의 오디오 장치를 즉시 변경하는 데 어려움을 겪는 경우도 종종 있습니다. 드물게 나타나는 이 문제의 경우 저희 측에서 해결할 수 없으며, Windows가 다시 올바르게 오디오 출력을 제어할 수 있도록 Wallpaper Engine을 재시작해야 할 수도 있습니다. 또한 오디오 드라이버를 재설치하거나 업데이트하는 것이 도움이 될 수도 있습니다.

## 모든 오디오 코덱 초기화

아직도 오디오 출력이 재생되지 않는다면 일부 오디오 코덱에 문제가 생겼을 수 있습니다. 이는 주로 **영상** 유형의 배경화면을 사용할 때 나타납니다. Wallpaper Engine에서 자신의 배경화면을 오른쪽 클릭한 후 **탐색기에서 열기**를 선택하여 확실하게 알아볼 수 있습니다. 그러면 소스 비디오 파일(주로 **.mp4** 파일)이 표시될 것입니다. 해당 파일을 Windows Media Player로 열어 오디오가 재생되는지 확인하십시오. **Please note:** It is very important that you test this with Windows Media Player only - other video players are irrelevant for this test as the underlying audio codecs are used by Wallpaper Engine as well. If no audio is playing in Windows Media Player, then either the video file does not have audio or the audio codecs on your system are indeed broken or missing.

In that case, you can use the *Codec Tweak Tool* as explained on the following page to reset all audio and video codecs on your system, afterwards restart Wallpaper Engine and try again:

* [Videos Black / Not Playing Properly - Codec Tweak Tool](noshow/notplaying.html#codec-tweak-tool)

