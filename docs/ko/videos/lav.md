---
tags:
  - webm
  - 비디오
  - 검은색
  - 코덱
  - 필터
  - 4K
  - HEVC
  - mkv
  - mp4
---

# LAV 및 DirectShow 사용
손상된 비디오 코덱 관련 문제가 있거나 시스템에 추가 비디오 형식을 사용하려면, LAV를 설치하고 Wallpaper Engine 설정에서 DirectShow를 설정할 수 있습니다. 그러면 **Windows 7에서 4K 및 HEVC 비디오**를 더 많이 지원하고 **.mkv** 파일을 열 수 있습니다.

For legal reasons, we cannot bundle LAV with Wallpaper Engine which means you need to download and install it yourself. After you have installed LAV, you also need to configure Wallpaper Engine to use DirectShow:

## 1. LAV 설치
* x86 **및** x64 버전의 LAV 필터를 다운로드하세요:
  * 미러 #1: [Github](https://github.com/Nevcairiel/LAVFilters/releases)
  * 미러 #2: [Fosshub](https://www.fosshub.com/LAV-Filters.html)
* LAV를 설치하고, Windows 사용자가 관리자 권한을 가졌는지 확인하세요
* Wallpaper Engine을 다시 시작하세요

## 2. DirectShow 활성화
* Wallpaper Engine 설정을 열고 "일반" 탭으로 이동하세요
* **비디오 프레임워크** 옵션을 **DirectShow 선호**로 변경하세요
* 응용프로그램을 다시 시작한 뒤 비디오 배경화면을 다시 사용해 보세요

## WebM 하드웨어 가속 활성화
비디오 배경화면이 끝날 때 끊김 문제가 발생하면, 해당 문제가 없는 .webm 파일을 사용할 수 있습니다. It's best if you also enable hardware acceleration for .webm videos which will reduce the CPU usage for them significantly and still allows video wallpapers to loop without a notable cut after the last frame. This is a continuation of the steps above, make sure you have installed LAV and enabled DirectShow as instructed in the previous section.
* Open the Wallpaper Engine settings and navigate to the "General" tab
* Change the **WebM framework** option to **Prefer Native**
* Restart the application and try using your video wallpaper again

Check if the LAV system tray icon shows up and if the CPU usage is nearly zero, then your .webm content is now hardware accelerated. If it does not seem to work, make sure all options are configured correctly and LAV is correctly installed.