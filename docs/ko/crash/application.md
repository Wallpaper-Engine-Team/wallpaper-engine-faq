---
tags:
  - mdmp
---

# Wallpaper Engine 작동 중단

Wallpaper Engine는 안정적인 소프트웨어로 수백만 명이 사용하며 철저한 테스트를 거쳤습니다 - 실질적으로 본 응용프로그램을 작동 중단하는 버그가 존재할 가능성은 비교적 희박합니다. 작동 중단 메시지에서 **.dll** 파일을 언급하면, 아래의 목록을 살펴보고 시스템에서 작동 중단을 일으키는 특정 **.dll**에 대해 보다 정확한 설명이 확인하세요.단

[[toc]]

::: 팁 사용자가 신고한 거의 모든 작동 중단의 원인은 손상된 그래픽 카드 드라이브, 바이러스 백신 응용프로그램 또는 컴퓨터의 불안정성을 일으키는 기타 결함이 있는 소프트웨어였습니다. :::

## Wallpaper Engine 작동 중단 빠른 해결 시도

Wallpaper Engine 작동 중단의 원인을 알 수 없다면, 그래픽 카드 드라이버를 깨끗하게 재설치하세요. 즉 우선 드라이버를 제거하여 기존 드라이버가 완전히 제거된 뒤 최신 버전의 드라이버를 재설치합니다. 일부 드라이버의 고급 섹션에는 "완전 재설치 실행" 옵션이 있습니다. 손상된 드라이버를 모두 자동으로 지우려면 이 옵션을 사용해야 합니다. 모든 대형 공급업체의 최신 그래픽 카드 드라이버는 아래에서 받을 수 있습니다:

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx)
* [AMD Radeon](https://www.amd.com/support)
* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)

바이러스 백신 응용프로그램이 설치되었으면(Windows 방화벽 제외), 바이러스 백신 설정에서 Wallpaper Engine을 제외하세요. 바이러스 백신이 일부 파일을 영구 손상시키거나 잠그면, 이 과정 후 Wallpaper Engine의 재설치가 필요하기도 합니다.

항상 Steam을 통해 Wallpaper Engine 파일 손상 여부를 확인하세요:

* [Steam 지원: 응용프로그램 파일의 무결성 확인](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

## Wallpaper Engine 때문에 다른 응용프로그램이 작동 중단된 것 같습니다

### KERNELBASE.dll / ntdll.dll

이것은 Windows 커널 코어의 자체 작동 중단으로, 일반적으로 바이러스 백신 응용프로그램 또는 손상된 그래픽 카드 드라이버로 발생합니다. 자세한 내용의 위의 빠른 해결 섹션을 참조하세요. 또한 이 현상은 손상된 시스템 구성 요소로 일어날 수도 있습니다. Microsoft 시스템 파일 검사 도구를 사용해 손상되었을 수 있는 Windows 파일을 복구하세요:

* [Microsoft 시스템 파일 검사 도구](https://support.microsoft.com/en-us/help/929833/use-the-system-file-checker-tool-to-repair-missing-or-corrupted-system)

### d3d11.dll

이것은 DirectX의 작동 중단으로, 일반적으로 바이러스 백신 응용프로그램 또는 손상된 그래픽 카드 드라이버로 발생합니다. 자세한 내용의 위의 빠른 해결 섹션을 참조하세요. 또한 이 현상은 손상된 시스템 구성 요소로 일어날 수도 있습니다. Microsoft 시스템 파일 검사 도구를 사용해 손상되었을 수 있는 Windows 파일을 복구하세요:

* [Microsoft 시스템 파일 검사 도구](https://support.microsoft.com/en-us/help/929833/use-the-system-file-checker-tool-to-repair-missing-or-corrupted-system)

### mfplat.dll

이것은 Windows 미디어 파운데이션의 작동 중단으로, 손상된 그래픽 카드 드라이버 때문에 발생할 수도 있지만 보통 시스템의 비디오 코덱 손상 또는 누락이 원인입니다. 이런 유형의 작동 중단을 해결하려면 저희의 비디오 해결 가이드를 따르세요:

[여기를 클릭하세요](/noshow/notplaying.html)

### AudioSes.dll

이 작동 중단은 보통 Windows의 자체 문제로 발생합니다. 사운드 카드 드라이버를 최신 버전으로 재설치해보세요. 이 방법으로 문제를 해결할 수 있습니다. 또한 Wallpaper Engine 설정의 *성능* 탭에서 *타 응용프로그램 오디오 재생* 옵션을 *계속 실행*으로 변경하여 이 작동 중단 문제를 해결할 수도 있습니다.

### atiumdag.dll / atiumd64.dll

* [AMD Radeon](https://www.amd.com/support)

::: 팁 설치 중 "완전 재설치 실행" 체크박스를 선택하거나, 일단 수동으로 기존 드라이버를 제거하세요. 기존 드라이버가 손상되었으면, 우선 완전히 제거하는 것이 중요합니다. :::

### nvwgf2umx.dll

시스템의 Nvidia 드라이버가 작동 중단됩니다. Nvidia 웹사이트로 이동하여 최신 드라이버를 다운로드 및 설치하세요:

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx)

::: 팁 설치 중 "완전 재설치 실행" 체크박스를 선택하거나, 일단 수동으로 기존 드라이버를 제거하세요. 기존 드라이브가 손상되었다면, 우선 완전히 제거해야 합니다. :::

### igdumd64.dll / igd10umd64.dll / igdumdx32.dll / igd10umd32.dll

시스템의 Intel 그래픽 드라이버가 작동 중단됩니다. Intel 웹사이트로 이동하여 최신 드라이버를 다운로드 및 설치하세요:

* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)


### MMDEvAPI.dll

이 유형의 작동 중단은 시스템에 설치된 손상된 오디오 소프트웨어 때문에 발생합니다. 보통 "사운드 향상" 소프트웨어 때문에 발생하며, 특히 여러 노트북에 사전 설치되어 있는 소프트웨어가 영향을 줍니다. 이 유형의 소프트웨어는 Windows와 이상한 방식으로 상호작용하기 때문에 종종 작동 중단을 일으킵니다. "Sonic Studio" 또는 "Nahimic"를 찾아보고 업데이트하세요. 이러한 프로그램의 업데이트를 찾을 수 없다면, 컴퓨터 오디오의 올바른 작동에 반드시 필요하지 않으므로 제거할 수도 있습니다.

### fraps32.dll

The crash has been caused by the FPS monitor and screen recording app Fraps. Fraps has not received updates since 2013 and is a heavily outdated application. Please use an alternative to Fraps as this is a Fraps bug which may never be fixed as the software is abandoned.

## 작동 중단 오류 0xc000007b

This means that a Windows module has been corrupted by something on your system - usually DirectX itself is broken in this case. Try manually deleting these files:

* C:\Windows\SysWOW64\d3dx9_43.dll
* C:\Windows\System32\d3dx9_43.dll

Now install them again with the DirectX 9 installer: *C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\_CommonRedist\DirectX\Jun2010\dxsetup.exe* (The exact location depends on where your wallpaper_engine installation directory is).

If you still get this error it might be another, similar DirectX module that has been broken by something. This usually indicates a bigger underlying issues with your Windows installation which you need to fix before you can run Wallpaper Engine.

## 최대 절전 / 취침 모드 후 작동 중단

If Wallpaper Engine crashes after Windows hibernation, then Windows is failing to correctly restore your graphics card drivers and Wallpaper Engine together. Hibernation in Windows is simply not a reliable process. You can enable the option **Safe start after hibernation** in Wallpaper Engine to mitigate this issue. This option will attempt to automatically restart Wallpaper Engine instead of expecting Windows to correctly work after hibernation.