---
tags:
  - 하드웨어
---

# RGB 하드웨어 지원 (iCUE 및 Chroma)

Wallpaper Engine은 [**Razer Chroma**](https://www.razer.com/chroma) 및 [**Corsair iCUE**](https://www.corsair.com/icue)를 지원하며, 여기에는 에코시스템에 통합될 수 있는 시스템이 포함됩니다.

## RGB 하드웨어 활성화 / 비활성화 방법

Wallpaper Engine 설정의 "플러그인" 섹션에서 **iCUE & Chroma SDK 플러그인**</strong>을 찾을 수 있습니다. 왼쪽 체크박스를 표시하여 일반 RGB 플러그인 로드를 활성화 또는 비활성화할 수 있습니다. 또한 옆의 톱니바퀴 모양을 클릭하여 개별 부분을 구성할 수 있습니다.

그리고 RGB 지원은 배경화면마다 끌 수도 있습니다. RGB 조명을 제어하기 위해 개별 배경화면이 필요한 경우 플러그인이 활성화되어 제어가 가능하면, 각 배경화면 속성 목록의 상단에서 **LED 효과 활성화** 옵션을 찾을 수 있습니다.

## RGB 하드웨어 색이 너무 밝은 것 같습니다

기본값으로 RGB 색은 약간 증폭되어 있습니다. 그러면 대부분의 배경화면이 좀 더 잘 보이는 경향이 있지만, 원하지 않는다면 RGB 플러그인 설정에서 **LED 색상 증폭**옵션을 비활성화하여 끌 수 있습니다.

## RGB 하드웨어가 작동하지 않습니다

Wallpaper Engine은 RGB 하드웨어와 직접 소통할 수 없으며, 모든 색 정보는 일단 RGB 드라이버로 전달됩니다. 하나 이상의 하드웨어가 작동하지 않으면, 하드웨어 공급업체의 소프트웨어 문제입니다. 일부 매우 오래된 하드웨어는 하드웨어 공급업체가 더 이상 전체 지원을 하지 않으며 작동하지 않게 됩니다. 그런 경우 저희가 해결할 수 없습니다.

Wallpaper 설정의 *플러그인* 섹션이 보이지 않으면, 이 기능을 작동하려면 필수 요소인 *Visual Studio 2015용 Visual C++ 재배포 가능 패키지*가 없거나 손상되었을 수 있습니다. Microsoft 웹사이트에서 이 패키지를 다운로드하여 설치할 수 있습니다. 설치 후 시스템을 다시 시작하면 문제가 해결됩니다:

* [Visual Studio 2015용 Visual C++ 재배포 가능 패키지](https://www.microsoft.com/download/details.aspx?id=48145)

## Problems with RGB hardware after hibernation

In rare cases, hibernation may cause RGB hardware to stop working in combination with Wallpaper Engine. If some or all of your RGB hardware stops working correctly after your system wakes up from hibernation, try enabling the **Safe start after hibernation** option in the **General** tab of the Wallpaper Engine settings, this solves these types of issues for the majority of affected users.

Additionally, you can use the **Plugin load delay** option at the bottom of the **Plugins** tab of the Wallpaper Engine settings to delay the connection attempt that Wallpaper Engine makes to your RGB hardware. You can try a value of **30 seconds** and test if that fixes the problem for you.

### Corsair

Some hardware such as **Corsair system memory (RAM) have software controls disabled by default**, meaning that your memory modules will not light up according to Wallpaper Engine unless you allow this in the iCUE software settings. Make sure the "Enable full software control" option in your iCUE device settings in the memory section is selected:

![Enable full software control in iCUE](./icue.png)

Double-check this option for any other hardware parts which are not working properly.

Note that iCUE is used in *exclusive mode*, this means that Wallpaper Engine will take priority over other iCUE-compatible software such as games. If you want your games to animate your keyboard, go to the **Performance** tab of the Wallpaper Engine settings and set the **Other applications fullscreen** option to **Stop (free memory)** to stop wallpapers while in-game. Alternatively, disable either the RGB plugin or disable the RGB option on individual wallpapers.

For support with Corsair iCUE hardware, please contact Corsair directly:

[help.corsair.com](https://help.corsair.com/)

Should you run into any issues with Corsair's support, you can still reach out to us and we will see if we can help you.

### Razer

Most problems related to Razer RGB hardware can be fixed by doing a clean reinstallation of the Razer software suite while Wallpaper Engine is turned off:

1. Wallpaper Engine을 완전히 종료하십시오. 매우 중요한 절차이며 건너뛰어서는 안 됩니다.
2. Windows로 컴퓨터에서 모든 Razer 소프트웨어를 제거하십시오.
3. Razer Synapse 3 최신 버전을 다운로드한 후 설치하십시오. **중요:** Razer Synapse 내에서 **Chroma Connect** 모듈도 재설치해야 합니다.
4. 컴퓨터를 재시작하십시오. 윈도우즈를 재시작하기 전까지 Wallpaper Engine을 실행시켜서는 안 됩니다.

See if this resolves your issues with your RGB hardware. For additional support with Razer hardware, please contact Razer directly:

[support.razer.com](https://support.razer.com/)

Should you run into any issues with Razer's support, you can still reach out to us and we will see if we can help you.

#### Razer Synapse 2 또는 이전 제품

We only support Razer Synapse 3 or newer. If you are using Razer Synapse 1 or Razer Synapse 2, make sure to fully uninstall them and upgrade to the latest version of Razer Synapse. In the past, some users had issues with remnants of old Razer Synapse having been left on their system. If you had Razer Synapse 2 or older installed and have issues with your RGB lighting or even experience crashes with the RGB plugin being enabled, you may need to find any leftovers of old Razer Synapse versions on your system and delete it.

If your Razer hardware is relatively old and does not support Razer Synapse 3 or newer, unfortunately its RGB lighting is not compatible with Wallpaper Engine.