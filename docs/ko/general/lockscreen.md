---
tags:
  - 잠금 화면
  - 로그인 화면
---

# Windows 잠금 화면에서 Wallpaper Engine

The Windows login screen is not meant to be modified as a design decision by Microsoft. Making changes to it essentially requires hacking Windows in an unsafe and unstable manner. This means that if a Windows update modifies the lock screen or if the app crashes, you would be unable to login to your computer entirely. The feature could potentially stop working at any time, causing unpredictable side effects.

If Microsoft officially makes this possible or if we discover a safe way to add live wallpapers to the Windows lock screen, we will implement this feature. Currently, there are no known safe ways to accomplish this, which is why live wallpapers cannot be set on the lock screen by Wallpaper Engine.

## Setting a static wallpaper

하지만 Wallpaper Engine이 정적 잠금 화면 이미지를 자신의 현재 라이브 배경화면의 스냅샷으로 덮어쓰도록 설정할 수 있습니다. 그러려면 Wallpaper Engine 설정의 **일반** 탭에서 **잠금 화면 이미지 오버라이드** 옵션을 사용하세요.

## 화면 보호기 기능

잠금화면에 의존하는 대신 Wallpaper Engine을 화면보호기로 설정하고 Windows 화면보호기 설정에서 **다시 시작할 때 로그온 화면 표시 ** 설정을 활성화하는 것을 권장합니다. Wallpaper Engine을 화면보호기로 설정하는 방법은 저희 화면보호기 가이드를 확인해주세요:

* [Wallpaper Engine 화면보호기](/functionality/screensaver.html)