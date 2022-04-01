---
tags:
  - mdmp
---

# Wallpaper Engine 작동 중단

Wallpaper Engine은 안정적인 소프트웨어로 수백만 명이 사용하며 철저한 테스트를 거쳤습니다. 따라서 실질적으로 본 응용프로그램을 작동 중단하는 버그가 존재할 가능성은 비교적 희박합니다. 작동 중단 메시지에서 **.dll** 파일을 언급하면, 아래의 목록을 살펴보고 시스템에서 작동 중단을 일으키는 특정 **.dll**에 대해 보다 정확한 설명을 확인하세요:

[[toc]]

::: tip
사용자가 신고한 거의 모든 작동 중단의 원인은 손상된 그래픽 카드 드라이브, 바이러스 백신 응용프로그램 또는 컴퓨터의 불안정성을 일으키는 기타 결함이 있는 소프트웨어였습니다.
:::

## Wallpaper Engine 작동 중단 빠른 해결 시도

Wallpaper Engine 작동 중단의 원인을 알 수 없다면, 그래픽 카드 드라이버를 완전히 새로 설치하세요. 즉, 우선 드라이버를 제거하여 기존 드라이버가 완전히 삭제되면 최신 버전의 드라이버를 다시 설치합니다. 일부 드라이버의 고급 섹션에는 "새로 설치 실행" 옵션이 있습니다. 손상된 드라이버를 모두 자동으로 지우려면 이 옵션을 사용해야 합니다. 모든 대형 공급업체의 최신 그래픽 카드 드라이버는 아래에서 받을 수 있습니다:

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx)
* [AMD Radeon](https://www.amd.com/support)
* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)

바이러스 백신 응용프로그램이 설치되었으면(Windows 방화벽 제외), 바이러스 백신 설정에서 Wallpaper Engine을 제외하세요. 바이러스 백신이 일부 파일을 영구 손상시키거나 잠그면, 이 과정 후 Wallpaper Engine의 재설치가 필요하기도 합니다. 바이러스 백신 프로그램의 무시 목록에 *wallpaper_engine*의 디렉터리, 그 중에서도 특히 모든 .exe 파일을 반드시 추가해야 합니다.

* *wallpaper_engine/wallpaper32.exe*
* *wallpaper_engine/wallpaper64.exe*
* *wallpaper_engine/launcher.exe*
* *wallpaper_engine/bin/webwallpaper32.exe*
* *wallpaper_engine/bin/ui32.exe*

항상 Steam을 통해 Wallpaper Engine 파일 손상 여부를 확인하세요:

* [Steam 지원: 응용 프로그램 파일 결합 확인](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

심각한 경우에는, Wallpaper Engine을 제거하고 *wallpaper_engine* 디렉터리를 직접 삭제한 다음, 바이러스 백신 프로그램의 설정을 완화한 후 재설치해야 할 수도 있습니다.

## 최대 절전 / 취침 모드 후 작동 중단

Windows 최대 절전 모드 후 Wallpaper Engine이 작동 중단되면, Windows에서 그래픽 카드 드라이버와 Wallpaper Engine을 함께 제대로 복구할 수 없습니다. Windows의 최대 절전 모드는 안정적인 프로세스가 아닙니다. Wallpaper Engine에서 **최대 절전 모드 후 안전 모드** 옵션을 사용하여 이 문제를 완화할 수 있습니다. 이 옵션은 Windows가 최대 절전 모드 후 제대로 작동하기를 기대하는 대신 Wallpaper Engine을 자동으로 다시 시작합니다.

## Wallpaper Engine has crashed / 오류 코드 "0xC0000005"

이 오류 코드의 원인은 대부분의 경우 **바이러스 백신 프로그램** 또는 **드라이버 오류**입니다. 바이러스 백신 프로그램을 사용하고 있다면, 아무런 활동 보고가 없었다고 해도 해당 프로그램이 원인일 가능성이 매우 높습니다. *wallpaper_engine*이 설치된 디렉터리와 Wallpaper Engine의 주요 실행 파일을 전부 무시하도록 설정해주세요. 자세한 정보는 위에 있는 *Wallpaper Engine 작동 중단 빠른 해결 시도* 항목에서 확인하세요.

만약 바이러스 백신 프로그램이 설치되어 있지 않다면, 주요 드라이버를 전부 재설치한 후 Wallpaper Engine을 64비트 버전으로 변경하세요. (이미 64비트 버전을 사용 중이었다면 32비트로 변경하세요)

또한, 다른 응용 프로그램이 Wallpaper Engine을 예기치 못한 방법으로 방해하는 경우에도 발생할 수 있습니다. 주로 Wallpaper Engine에 코드를 주입하거나 Windows 설치를 크게 변경하는 응용 프로그램에서 나타납니다.

!["0xC0000005" Wallpaper Engine 작동 중단 메시지](/img/faq/0xC0000005.png)

## Wallpaper Engine 때문에 다른 응용프로그램이 작동 중단된 것 같습니다

### KERNELBASE.dll / ntdll.dll

Windows 커널 코어의 자체 작동 중단으로, 일반적으로 바이러스 백신 응용프로그램 또는 손상된 그래픽 카드 드라이버가 원인입니다. 자세한 내용의 위의 빠른 해결 섹션을 참조하세요. 또한 이 현상은 손상된 시스템 구성 요소로 일어날 수도 있습니다. Microsoft 시스템 파일 검사 도구를 사용해 손상되었을 수 있는 Windows 파일을 복구하세요:

* [Microsoft 시스템 파일 검사 도구](https://support.microsoft.com/ko-ko/help/929833/use-the-system-file-checker-tool-to-repair-missing-or-corrupted-system)

### d3d11.dll

DirectX의 작동 중단으로, 일반적으로 바이러스 백신 응용프로그램 또는 손상된 그래픽 카드 드라이버가 원인입니다. 자세한 내용의 위의 빠른 해결 섹션을 참조하세요. 또한 이 현상은 손상된 시스템 구성 요소로 일어날 수도 있습니다. Microsoft 시스템 파일 검사 도구를 사용해 손상되었을 수 있는 Windows 파일을 복구하세요:

* [Microsoft 시스템 파일 검사 도구](https://support.microsoft.com/en-us/help/929833/use-the-system-file-checker-tool-to-repair-missing-or-corrupted-system)

### mfplat.dll

Windows 미디어 파운데이션의 작동 중단으로, 손상된 그래픽 카드 드라이버가 원인일 수도 있지만 보통 시스템의 비디오 코덱 손상 또는 누락이 원인입니다. 이런 유형의 작동 중단을 해결하려면 저희의 비디오 해결 가이드를 따르세요:

[여기를 클릭하세요](/noshow/notplaying.html)

### AudioSes.dll

이 작동 중단은 보통 Windows의 자체 문제로 발생합니다. 사운드 카드 드라이버를 최신 버전으로 다시 설치하세요. 이 방법으로 문제가 해결될 수도 있습니다. 또한 Wallpaper Engine 설정의 *성능* 탭에서 *타 응용 프로그램 오디오 재생* 옵션을 *계속 실행*으로 변경하여 이 작동 중단 문제를 해결할 수도 있습니다.

### atiumdag.dll / atiumd64.dll

* [AMD Radeon](https://www.amd.com/support)

::: 팁
설정 중 "새로 설치 실행" 체크박스를 선택하거나, 일단 수동으로 기존 드라이버를 제거하세요. 기존 드라이버가 손상되었으면, 우선 완전히 제거하는 것이 중요합니다.
:::

### nvwgf2umx.dll / nvwgf2um.dll

시스템의 Nvidia 드라이버가 작동 중단됩니다. Nvidia 웹사이트로 이동하여 최신 드라이버를 다운로드 및 설치하세요:

* [Nvidia GeForc](https://www.nvidia.com/Download/index.aspx)

::: 팁
설정 중 "새로 설치 실행" 체크박스를 선택하거나, 일단 수동으로 기존 드라이버를 제거하세요. 기존 드라이버가 손상되었으면, 우선 완전히 제거하는 것이 중요합니다.
:::

### igdumd64.dll / igd10umd64.dll / igdumdx32.dll / igd10umd32.dll

시스템의 Intel 그래픽 드라이버가 작동 중단됩니다. Intel 웹사이트로 이동하여 최신 드라이버를 다운로드 및 설치하세요:

* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)

### RZChromaSDK.dll / RzChromaSDK64.dll

**Razer Synapse**의 일부인 Razer Chroma로 인해 발생합니다. 일반적으로 Razer Synapse가 제대로 설치되지 않은 것이 원인입니다. 대부분의 경우, Razer Synapse를 완전히 새로 설치하면 해결됩니다.

**모든 Razer 소프트웨어 완전히 새로 설치하기**

::: 경고
Razer Synapse를 재설치하는 동안 반드시 Wallpaper Engine이 꺼져있는지 확인하십시오.
:::

1. 만약 Wallpaper Engine이 실행 중이라면 종료하십시오 (Windows 트레이의 아이콘을 오른쪽 클릭하고 **종료** 선택)
2. Windows를 통해 컴퓨터에서 모든 Razer 소프트웨어를 제거하십시오
3. Razer 웹사이트에서 최신 버전의 소프트웨어 제품군을 다운로드한 후 설치하십시오

* [Razer Synapse 3를 다운로드하십시오](https://www.razer.com/synapse-3)

4. 그 후 Wallpaper Engine을 다시 켜지 않고 컴퓨터를 재시작하십시오.

**재설치로 문제가 해결되지 않을 시**

Razer Synapse를 재설치해도 문제가 해결되지 않았다면, Razer Synapse 자체에 근본적으로 문제가 있을지도 모릅니다. 과거 잘못된 Razer Synapse 업데이트로 인해 발생한 사례가 있습니다. Razer Synapse 업데이트로 해당 문제가 고쳐질 때까지 Wallpaper Engine 설정 메뉴의 **플러그인** 탭에서 LED 플러그인(*"iCUE & Chroma SDK"*)을 비활성화한 후 시도해보십시오.

Razer Synapse를 완전히 재설치해도 작동 중단이 계속된다면, Razer 고객지원에 직접 연락하여 문제를 보고하십시오. Razer 측에서 해결하지 못했다면, 저희에게 연락하십시오. 이 작동 중단의 경우 Razer에게 문의하셔야 하지만, 저희 측에서 해당 작동 중단을 조사한 후 결과를 Razer Synapse 개발진 측에 전달할 수는 있습니다.

### MMDEvAPI.dll

이 유형의 작동 중단은 시스템에 설치된 손상된 오디오 소프트웨어가 원인입니다. 보통 "사운드 향상" 소프트웨어 때문에 발생하며, 특히 여러 노트북에 사전 설치된 소프트웨어가 영향을 줍니다. 이 유형의 소프트웨어는 Windows와 이상한 방식으로 상호작용하기 때문에 종종 작동 중단을 유발합니다. "Sonic Studio" 또는 "Nahimic"를 찾아보고 업데이트하세요. 해당 프로그램의 업데이트를 찾을 수 없다면, 컴퓨터 오디오의 올바른 작동에 반드시 필요하지 않으므로 제거할 수도 있습니다.

### fraps32.dll

작동 중단의 원인이 FPS 모니터와 화면 녹화 앱 Fraps입니다. Fraps는 2013년 이후 업데이트가 되지 않은 상당히 오래된 응용프로그램입니다. Fraps는 중단된 소프트웨어로, 버그를 해결할 수 없으므로 대체 프로그램을 사용하세요.

## 작동 중단 오류 0xc000007b

Windows 모듈이 시스템의 무언가 때문에 손상되었다는 의미입니다. 이 경우 보통 DirectX 자체가 손상됩니다. 다음 파일을 수동으로 제거해 보세요:

* C:\Windows\SysWOW64\d3dx9_43.dll
* C:\Windows\System32\d3dx9_43.dll

이제 DirectX 9 설치 관리자로 다시 설치하세요: *C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\_CommonRedist\DirectX\Jun2010\dxsetup.exe* (정확한 위치는 wallpaper_engine 설치 디렉토리에 따라 다릅니다.)

그래도 이 오류가 발생한다면, 무언가에 의해 손상된 비슷하지만 다른 DirectX 모듈이 원인일 수도 있습니다. 이는 보통 Wallpaper Engine을 실행하기 전 해결해야 할 Windows 설치 관련 더 큰 내부 문제가 있다는 걸 의미합니다.