---
tags:
  - 바이러스 백신
  - 표시
---

# 배경화면이 보이지 않습니다

배경화면의 일부 또는 전체가 표시되지 않으면, 실수로 Wallpaper Engine을 차단하는 바이러스 백신 응용프로그램 때문인 경우가 종종 있습니다. 바이러스 백신 응용프로그램을 사용하고 있으면, *wallpaper_engine* 설치 디렉터리와 중요한 Wallpaper Engine 실행 파일을 모두 무시하도록 구성하세요.

* *wallpaper_engine/wallpaper32.exe*
* *wallpaper_engine/wallpaper64.exe*
* *wallpaper_engine/launcher.exe*
* *wallpaper_engine/bin/webwallpaper32.exe*
* *wallpaper_engine/bin/ui32.exe*

::: 팁 바이러스 백신 응용프로그램(Windows Defender 제외)이 설치되었으면, 이것이 문제의 원인일 가능성이 매우 높습니다. 처음 시도해서 문제가 해결되지 않으면, 시간을 들여 좀 더 조사하세요. :::

## 다른 바탕화면 수정 소프트웨어와 충돌

Wallpaper Engine은 대부분의 바탕화면 수정 응용프로그램과 잘 작동합니다. 그러나 StarDock DeskScapes와 같은 일부 응용프로그램은 Windows 배경화면도 수정하며, 동시에 이 두 가지 응용프로그램을 모두 실행할 수는 없습니다. Wallpaper Engine과 비슷한 응용프로그램을 사용한다면, 어느 것을 계속 사용할지 결정해야 합니다.

### Fences

일반적으로 Wallpaper Engine은 *Fences*와 잘 작동합니다. 그러나 **설치된 Fences를 비활성화하면**, Wallpaper Engine의 배경화면을 숨기게 됩니다. 활성화하거나 완전히 삭제해야 합니다.

## Windows 7에서 회색 배경화면 또는 텍스처 누락

Windows 7 업데이트 **KB2533623**이 설치되어 있는지 확인하세요. 링크를 통해 수동으로 설치하거나, Windows 업데이트가 제대로 작동하여 스스로 설치하는지 확인해야 합니다. Microsoft 웹사이트에서 수동으로 다운로드한 뒤 시스템을 다시 시작하면 문제가 해결됩니다:

* [KB2533623](https://support.microsoft.com/en-us/help/2533623/microsoft-security-advisory-insecure-library-loading-could-allow-remot)