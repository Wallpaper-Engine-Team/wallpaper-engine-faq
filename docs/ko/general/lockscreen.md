---
tags:
  - 잠금 화면
  - 로그인 화면
---

# Windows 잠금 화면에서 Wallpaper Engine

The login screen is very secure and not accessible by normal means. Only dangerous Windows hacks may accomplish this by patching or hooking into the login screen process. Due to this, you could get permanently locked out of your PC when an error occurs or a Windows update changes the lockscreen structure in an unexpected way.

If a safe method is made public or reverse-engineered by us, we will implement this feature. Currently there are no known safe ways to accomplish this, which is why live wallpapers cannot be set on the lockscreen.

하지만 Wallpaper Engine이 정적 잠금 화면 이미지를 자신의 현재 라이브 배경화면의 스냅샷으로 덮어쓰도록 설정할 수 있습니다. 그러려면 Wallpaper Engine 설정의 **일반** 탭에서 **잠금 화면 이미지 오버라이드** 옵션을 사용하세요.

## 화면 보호기 기능

잠금화면에 의존하는 대신 Wallpaper Engine을 화면보호기로 설정하고 Windows 화면보호기 설정에서 **다시 시작할 때 로그온 화면 표시 ** 설정을 활성화하는 것을 권장합니다. Wallpaper Engine을 화면보호기로 설정하는 방법은 저희 화면보호기 가이드를 확인해주세요:

* [Wallpaper Engine 화면보호기](/functionality/screensaver.html)