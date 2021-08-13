---
tags:
  - 바이러스 백신
  - 표시
---

# 배경화면이 보이지 않습니다

배경화면의 일부 또는 전체가 표시되지 않으면, 그 원인은 실수로 Wallpaper Engine을 차단하는 바이러스 백신 응용 프로그램 때문인 경우가 종종 있습니다. 바이러스 백신 응용 프로그램을 사용하고 있으면, *wallpaper_engine* 설치 디렉터리와 중요한 Wallpaper Engine 실행 파일을 모두 무시하도록 구성합니다.

* *wallpaper_engine/wallpaper32.exe*
* *wallpaper_engine/wallpaper64.exe*
* *wallpaper_engine/launcher.exe*
* *wallpaper_engine/bin/webwallpaper32.exe*
* *wallpaper_engine/bin/ui32.exe*

::: tip
바이러스 백신 응용 프로그램(Windows Defender 제외)이 설치되었다면, 이것이 문제의 원인일 가능성이 매우 높습니다. 처음 시도해서 문제가 해결되지 않으면, 시간을 들여 좀 더 조사하세요.
:::

## Windows 고대비 모드

Windows 10 테마 설정에서 **고대비 흰색 테마**로 **고대비 모드**를 활성화하면, Windows가 강제로 Wallpaper Engine 배경화면을 비활성화합니다. Windows 고대비 설정에서 사용 중인 고대비 테마를 변경하거나 고대비 모드 자체를 비활성화하면 문제가 해결됩니다.

## Wallpapers disappearing / fading away in regular intervals

If your wallpapers keep disappearing for a brief moment, you likely have a slideshow configured as your Windows wallpaper. Open the Windows wallpaper settings and set a solid color or a static image as your regular Windows wallpaper, this will fix this problem.

## Conflicts with other desktop modification software

Wallpaper Engine works well with most desktop-modification applications. However, some applications such as StarDock DeskScapes also modify the Windows wallpaper and it is not possible to run both applications at the same time. If you use a similar application to Wallpaper Engine, you will need to decide on one which you want to continue to use.

### Fences

Generally, Wallpaper Engine works fine with *Fences*. However, **if you have Fences installed but have disabled it**, it will hide the wallpaper from Wallpaper Engine. You need to either enable or uninstall it completely.

If you are using Fences and your Wallpaper Engine wallpapers are not visible, ensure that you are using **Fences 3.13 or newer** to avoid these compatibility issues with Wallpaper Engine. Fences 3.13 and newer versions contain important compatibility fixes with Wallpaper Engine, so it is important that you ensure your Fences is up-to-date.

## Gray Wallpaper or missing textures on Windows 7

Make sure that the Windows 7 update **KB2533623** is installed. Either install it manually with that link or ensure that your Windows Update is working right and installing it by itself. You can download it manually from the Microsoft website, restart your system afterwards and the problem should go away:

* [KB2533623](https://support.microsoft.com/ko-kr/help/2533623/microsoft-security-advisory-insecure-library-loading-could-allow-remot)