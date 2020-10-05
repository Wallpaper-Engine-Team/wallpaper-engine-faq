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

바이러스 백신 응용프로그램이 설치되었으면(Windows 방화벽 제외), 바이러스 백신 설정에서 Wallpaper Engine을 제외하세요. 바이러스 백신이 일부 파일을 영구 손상시키거나 잠그면, 이 과정 후 Wallpaper Engine의 재설치가 필요하기도 합니다.

항상 Steam을 통해 Wallpaper Engine 파일 손상 여부를 확인하세요:

* [Steam 지원: 응용프로그램 파일의 무결성 확인](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

## Crashing after Hibernation / Sleep

If Wallpaper Engine crashes after Windows hibernation, then Windows is failing to correctly restore your graphics card drivers and Wallpaper Engine together. Hibernation in Windows is simply not a reliable process. You can enable the option **Safe start after hibernation** in Wallpaper Engine to mitigate this issue. This option will attempt to automatically restart Wallpaper Engine instead of expecting Windows to correctly work after hibernation.

## Wallpaper Engine was likely crashed by another application

### KERNELBASE.dll / ntdll.dll

This is a crash in the core of the Windows kernel itself, it is usually caused by antivirus applications or broken graphics card drivers. 자세한 내용의 위의 빠른 해결 섹션을 참조하세요. 또한 이 현상은 손상된 시스템 구성 요소로 일어날 수도 있습니다. Microsoft 시스템 파일 검사 도구를 사용해 손상되었을 수 있는 Windows 파일을 복구하세요:

* [Microsoft 시스템 파일 검사 도구](https://support.microsoft.com/ko-ko/help/929833/use-the-system-file-checker-tool-to-repair-missing-or-corrupted-system)

### d3d11.dll

This is a crash in DirectX, it is usually caused by antivirus applications or broken graphics card drivers. See the quick fix section above for more information. It can also be caused by broken system components. Use the Microsoft System File Checker tool to repair possibly broken Windows files:

* [Microsoft 시스템 파일 검사 도구](https://support.microsoft.com/ko-ko/help/929833/use-the-system-file-checker-tool-to-repair-missing-or-corrupted-system)

### mfplat.dll

This is a crash in the Windows Media Foundation, it can be caused by broken graphics card drivers but it is more commonly caused by broken or missing video codecs on your system. Follow the fixes from our video fix guide to fix these types of crashes:

[Click here](/noshow/notplaying.html)

### AudioSes.dll

This crash usually happens due to an issue in Windows itself. Try to re-install the latest version of your sound card drivers as this may fix the problem. You can also fix these crashes by changing the *Other application playing audio* option in the *Performance* tab of the Wallpaper Engine settings to *Keep running*.

### atiumdag.dll / atiumd64.dll

* [AMD Radeon](https://www.amd.com/support)

::: tip
Please note Make sure to select the "Perform clean re-installation" checkbox during setup or manually uninstall your current drivers first. If your current drivers are broken, it's important to fully clear them first.
:::

### nvwgf2umx.dll

The Nvidia drivers on your system are crashing. Go to the Nvidia website, download the latest drivers from there and install them:

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx)

::: tip
Please note Make sure to select the "Perform clean re-installation" checkbox during setup or manually uninstall your current drivers first. If your current drivers are broken, it's important to fully clear them first.
:::

### igdumd64.dll / igd10umd64.dll / igdumdx32.dll / igd10umd32.dll

The Intel graphics drivers on your system are crashing. Go to the Intel website, download the latest drivers from there and install them:

* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)

### RZChromaSDK.dll / RzChromaSDK64.dll

These types of crashes are caused by Razer Chroma which is part of **Razer Synapse**. Usually, this is caused by a faulty installation of Razer Synapse. In most cases, a clean reinstallation of Razer Synapse fixes these types of crashes:

**Clean reinstallation of all Razer software**

::: warning
Make sure Wallpaper Engine is turned off while reinstalling Razer Synapse.
:::

1. Turn off Wallpaper Engine completely if it is running (right-click on the icon in the Windows tray and then select **Quit**)
2. Uninstall all Razer software from your computer through Windows
3. Download the latest version of Razer's software suite from their website and install it:

* [Download Razer Synapse 3](https://www.razer.com/synapse-3)

4. Afterwards restart your computer without restarting Wallpaper Engine beforehand.

**Reinstallation does not fix the problem**

If the issue is not resolved by a reinstallation of Razer Synapse, there may be an underlying issue with Razer Synapse itself, in the past this has been caused by faulty Razer Synapse updates. Try turning off the LED Plugin (*"iCUE & Chroma SDK"*) in the **Plugins** tab of the Wallpaper Engine settings until this problem is fixed in a future Razer Synapse update.

If the crashes persist even after a clean reinstallation of Razer Synapse, please contact Razer support directly and inform them about the crashes. If they are unable to help, please reach out to us for technical support - we can look into these crashes and forward our findings to the Razer Synapse development team as well though Razer should be the main contact for this specific crash.

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