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

Generally, Wallpaper Engine works fine with *Fences*. However, **if you have Fences installed but have disabled it**, it will hide the wallpaper from Wallpaper Engine. You need to either enable or uninstall it completely.

## Gray Wallpaper or missing textures on Windows 7

Make sure that the Windows 7 update **KB2533623** is installed. Either install it manually with that link or ensure that your Windows Update is working right and installing it by itself. You can download it manually from the Microsoft website, restart your system afterwards and the problem should go away:

* [KB2533623](https://support.microsoft.com/en-us/help/2533623/microsoft-security-advisory-insecure-library-loading-could-allow-remot)