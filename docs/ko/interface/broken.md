---
tags:
  - 사용자 인터페이스
  - 초록색
  - 흰색
  - 픽셀화
  - 읽을 수 없음
---

# Wallpaper Engine 창이 제대로 표시되지 않습니다

Wallpaper Engine 탐색 창이 제대로 작동하지 않으면, 보통 그래픽 카드 드라이버의 불량 또는 바이러스 백신 응용프로그램이 원인일 수 있습니다. 자세한 내용은 아래를 참조하세요.

::: warning 이 섹션은 Wallpaper Engine **인터페이스** 차단 또는 손상을 설명합니다. **배경화면이 검은색인 경우**에는 다음으로 이동하세요: [검은색 화면 / 비디오가 재생되지 않습니다](/noshow/notplaying.html) :::

## Wallpaper Engine 브라우저가 검은색 또는 흰색입니다

Wallpaper Engine 사용자 인터페이스가 바이러스 백신 응용 프로그램의 실수로 차단되었을 가능성이 높습니다. 바이러스 백신 응용 프로그램에서 예외를 설정하세요. wallpaper_engine 설치 디렉터리의 모든 실행 파일과 특히 **wallpaper_engine/bin/ui32.exe**를 예외로 설정해야 합니다.

그런 다음 상황에 따라 Wallpaper Engine 파일을 확인하거나, 바이러스 백신 응용 프로그램이 중요한 Wallpaper Engine 파일을 영구히 잠근 경우 Wallpaper Engine을 재설치해야 할 수도 있습니다.

* [Steam 지원: 응용 프로그램 파일 결합 확인](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

바이러스 백신 응용 프로그램 구성 후에도 Steam에서 이 문제가 해결되지 않으면, Steam을 통해 Wallpaper Engine을 다시 설치해 보세요. 바이러스 백신이 제어되지 않으면, Wallpaper Engine이 사용하는 파일 경로를 영구 차단할 수도 있습니다. 그럴 경우 우선 바이러스 백신을 삭제한 다음 Wallpaper Engine을 다른 디렉터리에 설치해야 합니다. 이를 위해 Steam에서 새로운 Steam 라이브러리를 만들 수 있습니다.

## 초록색 아티팩트 또는 흰색 줄이 있는 Wallpaper Engine 인터페이스

그래픽 카드 드라이버가 손상되었거나 잘못 구성되었습니다. (이미 최신 드라이버가 있더라도) 그래픽 카드의 최신 드라이버를 다운로드하고, 드라이버를 완전히 새로 설치하세요. 손상된 파일이나 설정을 제거하려면 우선 기존 드라이버를 삭제한 다음 최신 드라이버를 설치하는 것이 중요합니다.

문제가 지속되면 Wallpaper Engine를 끕니다. 그런 다음 Steam의 세 번째 실행 옵션인 "UI 하드웨어 가속 사용 안 함"을 사용해 Wallpaper Engine을 다시 실행하세요.

### Wallpaper Engine 사용자 인터페이스를 손상시키는 희귀 Steam 오버레이 버그

검은색 응용프로그램 창이 나타나는 다른 가능성은 희귀한 Steam 오버레이 Steam 버그입니다. 다음을 시도해 보세요:

Wallpaper Engine을 완전히 끕니다. (트레이 아이콘을 오른쪽 클릭한 다음 "종료" 선택) 그런 다음 Steam을 열어 Wallpaper Engine을 오른쪽 클릭하고 "속성"을 선택하여 "게임 내 Steam 오버레이 사용" 옵션을 비활성화하세요. 옵션을 비활성화한 후 Steam을 통해 Wallpaper Engine을 다시 시작합니다. 