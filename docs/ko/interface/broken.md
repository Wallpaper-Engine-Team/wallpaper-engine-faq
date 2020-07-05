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

::: 경고 이 섹션은 Wallpaper Engine **인터페이스** 차단 또는 손상을 설명합니다. **배경화면이 검은색인 경우** 에는 다음으로 이동하세요: [검은 화면 / 비디오가 재생되지 않습니다](/noshow/notplaying.html) :::

## Wallpaper Engine 브라우저가 검은색 또는 흰색입니다

Wallpaper Engine 사용자 인터페이스가 바이러스 백신 응용프로그램의 실수로 차단되었을 가능성이 높습니다. 바이러스 백신 응용프로그램에서 예외를 설정하세요. wallpaper_engine 설치 디렉터리의 모든 실행 파일과 특히 **wallpaper_engine/bin/ui32.exe**를 예외로 설정해야 합니다.

상황에 따라 그런 다음 Wallpaper Engine 파일을 확인하거나, 바이러스 백신 응용프로그램이 중요한 Wallpaper Engine 파일을 영구히 잠근 경우 Wallpaper Engine을 재설치해야 할 수도 있습니다.

* [Steam 지원: 응용프로그램 파일 결합 확인](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

If the verification through Steam does not fix this issue after you have configured your antivirus application, try to re-install Wallpaper Engine through Steam. If your antivirus has gone berserk, it might even have permanently blocked the filepaths used by Wallpaper Engine. In that case make sure to uninstall the antivirus first and then install Wallpaper Engine into a different directory, you can choose to create a new Steam games library in Steam for this.

## 초록색 아티팩트 또는 흰색 줄이 있는 Wallpaper Engine 인터페이스

Your graphics card drivers are broken or misconfigured. Download the latest drivers for your graphics cards (even if you already have the latest drivers) and perform a clean re-installation of the drivers. Is is important that you first uninstall your current drivers and then install the latest drivers to ensure any broken files or settings are removed.

If the problem persists, turn off Wallpaper Engine. Then re-launch Wallpaper Engine using the third launch option in Steam labeled "disable UI hardware acceleration".

### Rare Steam Overlay Bug Breaking Wallpaper Engine User Interface

The other possible reason for a black application window is a rare Steam bug with the Steam overlay. You can try the following:

Turn off Wallpaper Engine completely (right-click on the tray icon and then select "Quit"). Afterwards, open up Steam, right-click on Wallpaper Engine, select "Properties" and then disable the "Enable Steam Overlay while in-game" option. 옵션을 비활성화한 후 Steam을 통해 Wallpaper Engine을 다시 시작하세요. 