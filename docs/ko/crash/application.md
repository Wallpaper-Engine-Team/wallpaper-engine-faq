---
tags:
  - mdmp
---

# Wallpaper Engine 강제 종료

Wallpaper Engine는 안정적인 소프트웨어로 수백만 명이 사용하며 철저한 테스트를 거쳤습니다 - 실질적으로 본 응용프로그램을 강제 종료하는 버그가 존재할 가능성은 비교적 희박합니다. 강제 종료 메시지에서 **.dll** 파일을 언급하면, 아래의 목록을 살펴보고 시스템에서 강제 종료를 일으키는 특정 **.dll**에 대해 보다 정확한 설명이 확인하세요.

[[toc]]

::: 팁 사용자가 신고한 거의 모든 강제 종료의 원인은 손상된 그래픽 카드 드라이브, 바이러스 백신 응용프로그램 또는 컴퓨터의 불안정성을 일으키는 기타 결함이 있는 소프트웨어였습니다. :::

## Wallpaper Engine 강제 종료 빠른 해결 시도

Wallpaper Engine 강제 종료의 원인을 알 수 없다면, 그래픽 카드 드라이버를 깨끗하게 재설치하세요. 즉 우선 드라이버를 제거하여 기존 드라이버가 완전히 제거된 뒤 최신 버전의 드라이버를 재설치합니다. 일부 드라이버의 고급 섹션에는 "완전 재설치 실행" 옵션이 있습니다. 손상된 드라이버를 모두 자동으로 지우려면 이 옵션을 사용해야 합니다. 모든 대형 공급업체의 최신 그래픽 카드 드라이버는 아래에서 받을 수 있습니다:

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx)
* [AMD Radeon](https://www.amd.com/support)
* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)

바이러스 백신 응용프로그램이 설치되었으면(Windows 방화벽 제외), 바이러스 백신 설정에서 Wallpaper Engine을 제외하세요. 바이러스 백신이 일부 파일을 영구 손상시키거나 잠그면, 이 과정 후 Wallpaper Engine의 재설치가 필요하기도 합니다.

항상 Steam을 통해 Wallpaper Engine 파일 손상 여부를 확인하세요:

* [Steam 지원: 응용프로그램 파일의 무결성 확인](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

## Wallpaper Engine이 다른 응용프로그램을 강제 종료한 것 같습니다

### KERNELBASE.dll / ntdll.dll

이것은 Windows 커널 코어의 자체 강제 종료로, 일반적으로 바이러스 백신 응용프로그램 또는 손상된 그래픽 카드 드라이버로 발생합니다. 자세한 내용의 위의 빠른 해결 섹션을 참조하세요. 또한 이 현상은 손상된 시스템 구성 요소로 일어날 수도 있습니다. Microsoft 시스템 파일 검사 도구를 사용해 손상되었을 수 있는 Windows 파일을 복구하세요:

* [Microsoft 시스템 파일 검사 도구](https://support.microsoft.com/en-us/help/929833/use-the-system-file-checker-tool-to-repair-missing-or-corrupted-system)

### d3d11.dll

이것은 DirectX의 강제 종료로, 일반적으로 바이러스 백신 응용프로그램 또는 손상된 그래픽 카드 드라이버로 발생합니다. 자세한 내용의 위의 빠른 해결 섹션을 참조하세요. 또한 이 현상은 손상된 시스템 구성 요소로 일어날 수도 있습니다. Microsoft 시스템 파일 검사 도구를 사용해 손상되었을 수 있는 Windows 파일을 복구하세요:

* [Microsoft 시스템 파일 검사 도구](https://support.microsoft.com/en-us/help/929833/use-the-system-file-checker-tool-to-repair-missing-or-corrupted-system)

### mfplat.dll

이것은 Windows 미디어 파운데이션의 강제 종료로, 손상된 그래픽 카드 드라이버 때문에 발생할 수도 있지만 보통 시스템의 비디오 코덱 손상 또는 누락이 원인입니다. Follow the fixes from our video fix guide to fix these types of crashes:

[여기를 클릭하세요](/noshow/notplaying.html)

### AudioSes.dll

This crash usually happens due to an issue in Windows itself. Try to re-install the latest version of your sound card drivers as this may fix the problem. You can also fix these crashes by changing the *Other application playing audio* option in the *Performance* tab of the Wallpaper Engine settings to *Keep running*.

### atiumdag.dll / atiumd64.dll

* [AMD Radeon](https://www.amd.com/support)

::: tip Please note Make sure to select the "Perform clean re-installation" checkbox during setup or manually uninstall your current drivers first. If your current drivers are broken, it's important to fully clear them first. :::

### nvwgf2umx.dll

The Nvidia drivers on your system are crashing. Go to the Nvidia website, download the latest drivers from there and install them:

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx)

::: tip Please note Make sure to select the "Perform clean re-installation" checkbox during setup or manually uninstall your current drivers first. If your current drivers are broken, it's important to fully clear them first. :::

### igdumd64.dll / igd10umd64.dll / igdumdx32.dll / igd10umd32.dll

The Intel graphics drivers on your system are crashing. Go to the Intel website, download the latest drivers from there and install them:

* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)


### MMDEvAPI.dll

This type of crash occurs to due broken audio software installed on your system. This is usually caused by "sound enhancement" software, especially the ones pre-installed on various notebooks. This type of software will often cause crashes because they interact with Windows in a buggy way, try and look for "Sonic Studio" or "Nahimic" and update them. If you cannot find an update for these programs, you can also uninstall them as they are not necessary for your computer audio to function properly.

### fraps32.dll

The crash has been caused by the FPS monitor and screen recording app Fraps. Fraps has not received updates since 2013 and is a heavily outdated application. Please use an alternative to Fraps as this is a Fraps bug which may never be fixed as the software is abandoned.

## Crash error 0xc000007b

This means that a Windows module has been corrupted by something on your system - usually DirectX itself is broken in this case. Try manually deleting these files:

* C:\Windows\SysWOW64\d3dx9_43.dll
* C:\Windows\System32\d3dx9_43.dll

Now install them again with the DirectX 9 installer: *C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\_CommonRedist\DirectX\Jun2010\dxsetup.exe* (The exact location depends on where your wallpaper_engine installation directory is).

If you still get this error it might be another, similar DirectX module that has been broken by something. This usually indicates a bigger underlying issues with your Windows installation which you need to fix before you can run Wallpaper Engine.

## Crashing after Hibernation / Sleep

If Wallpaper Engine crashes after Windows hibernation, then Windows is failing to correctly restore your graphics card drivers and Wallpaper Engine together. Hibernation in Windows is simply not a reliable process. You can enable the option **Safe start after hibernation** in Wallpaper Engine to mitigate this issue. This option will attempt to automatically restart Wallpaper Engine instead of expecting Windows to correctly work after hibernation.