---
tags:
  - 하드웨어
---

# RGB 하드웨어 지원 (iCUE & Chroma)

Wallpaper Engine은 [**Razer Chroma**](https://www.razer.com/chroma) 및 [**Corsair iCUE**](https://www.corsair.com/icue)를 지원하며, 여기에는 에코시스템에 통합되는 시스템을 포함합니다.

## RGB 하드웨어 활성화 / 비활성화 방법

Wallpaper Engine 설정의 "플러그인" 섹션에서 **iCUE & Chroma SDK 플러그인**을 찾을 수 있습니다. You can enable or disable this general RGB plugin from being loaded by marking the checkbox on the left. 또한 옆의 톱니바퀴 모양을 클릭하여 개별 부분을 구성할 수 있습니다.

그리고 RGB 지원은 배경화면마다 끌 수도 있습니다. RGB 조명을 조종하기 위해 개별 배경화면이 필요한 경우 플러그인이 활성화되어 조종할 수 있으면, 각 배경화면 속성 목록의 상단에서 **LED 효과 활성화** 옵션을 찾을 수 있습니다.

## RGB 하드웨어 색이 너무 밝은 것 같습니다

By default, we are boosting the RGB colors a bit. On most wallpapers, this tends to subjectively look better but if you do not like it, you can turn it off by disabling the **Boost LED colors** option in the settings of the RGB plugin.

## RGB 하드웨어가 작동하지 않습니다

Wallpaper Engine is not capable of directly communicating to your RGB hardware, all color information are sent to the RGB drivers first. If one or more pieces of hardware are not working, the issue must be on the software side of your hardware vendor. Some very old hardware is not fully supported anymore by these hardware vendors and will not work. Keep in mind that this is nothing we can fix on our end.

If the *Plugin* section of Wallpaper Engine settings is not visible at all to you, you are likely missing or have a broken installation of the *Visual C++ Redistributable for Visual Studio 2015* which is mandatory for these features to work. You can download this package from the Microsoft website and install it, this should fix the issue after a system restart:

* [Visual Studio 2015로 재배포 가능한 Visual C++](https://www.microsoft.com/download/details.aspx?id=48145)

### Corsair

**Corsair 시스템 메모리 (RAM)와 같은 일부 하드웨어는 소프트웨어 컨트롤이 기본값으로 비활성화되어 있습니다.** 즉 iCUE 소프트웨어 설정에서 직접 허용하지 않는 한 Wallpaper Engine에 의해 메모리 모듈이 켜지지 않습니다. 메모리 섹션의 iCUE 장치 설정에서 "전체 소프트웨어 제어 사용" 옵션이 선택되었는지 확인이 필요합니다:

![iCUE 전체 소프트웨어 제어 사용](./icue.png)

제대로 작동하지 않는 기타 하드웨어 부분이 있으면 이 옵션을 다시 확인하세요.

iCUE는 *단독 모드*에서 사용되며, Wallpaper Engine은 게임과 같은 다른 iCUE 호환 소프트웨어보다 우선합니다. 게임이 키보드에 애니메이션 효과를 주려면, Wallpaper Engine 설정의 **성능** 탭으로 이동하여 **타 응용프로그램 전체 화면** 옵션을 **중지 (여유 메모리 확보)**로 설정하여 게임 중 배경화면을 중단합니다. 또는 RGB 플러그인을 비활성화하거나 개별 배경화면에서 RGB 옵션을 비활성화할 수도 있습니다.

Corsair iCUE 하드웨어 지원은 Corsair에 직접 문의하세요:

[help.corsair.com](https://help.corsair.com/)

Corsair 지원 관련하여 문제 발생 시 저희에게 문의하면, 도움이 될 수 있는지 확인하도록 하겠습니다.

### Razer
Razer Synapse 3 이상만 지원합니다. Razer Synapse 1 또는 Razer Synapse 2를 사용하고 있다면, 완전히 삭제하고 Razer Synapse의 최신 버전으로 업데이트하세요. 과거 일부 사용자가 시스템에 Razer Synapse가 완전히 삭제되지 않아 문제를 겪은 적이 있었습니다. Razer Synapse 2 이하 버전이 설치되어 있고 RGB 조명 또는 활성화된 RGB 플러그인의 작동 중단 문제가 발생했다면, 시스템에서 오래된 Razer Synapse 버전의 나머지 구성물을 찾아 삭제해야 합니다.

Razer 하드웨어가 상대적으로 오래되어 Razer Synapse 3 이상을 지원하지 않는다면, RGB 조명이 Wallpaper Engine과 호환되지 않습니다.

Razer 하드웨어 지원은 Razer에 직접 문의하세요:

[support.razer.com](https://support.razer.com/)

Razer 지원 관련하여 문제 발생 시 저희에게 문의하면, 도움이 될 수 있는지 확인하도록 하겠습니다.