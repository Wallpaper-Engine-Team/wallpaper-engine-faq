# Wallpaper Engine을 완전히 초기화하세요.

Wallpaper Engine과 관련하여 기술적 문제가 발생한 경우, Wallpaper Engine 설치를 완전 초기화해보세요. 이 가이드를 통해 손상된 배경화면 구독 등 Wallpaper Engine을 완전히 초기화하는 법에 대해 알아보세요.

::: danger
Microsoft Defender을 제외한 바이러스 백신 응용 프로그램을 사용할 경우 우선 여기를 확인하세요

저희가 처리하는 문제의 대부분은 의도치 않게 Wallpaper Engine 또는 Steam을 차단하는 바이러스 백신 응용 프로그램에 의해 발생합니다. 바이러스 백신 앱은 종종 다음과 같은 문제를 발생시킵니다:

* Wallpaper Engine 작동 중단
* Wallpaper Engine 사용자 인터페이스가 불완전하거나 표시되지 않음
* Wallpaper Engine이 아무런 오류 메시지 없이 실행되지 않음
* Wallpaper Engine 설치 또는 업데이트 실패
* 이 외에 파일 손상 또는 접근 불가로 인한 다양한 문제

**바이러스 백신 응용 프로그램을 사용하고 있으면, 이 페이지에 명시된 절차를 따르기 전에 해당 프로그램이 `wallpaper_engine` 설치 디렉터리를 무시하는지 확인하세요. 폴더 전체를 예외로 둘 수 있는지 바이러스 백신 설정을 확인하세요.**

대부분의 바이러스 백신 응용 프로그램은 별다른 통지 없이도 Wallpaper Engine 파일을 차단할 수 있으며, 특정 Wallpaper Engine 파일이 영구적으로 차단될 것입니다.
:::

## Wallpaper Engine을 완전히 제거하세요

손상된 파일을 삭제하기 위해 Wallpaper Engine을 완전히 제거하는 법:

1. 자동 시장 기능을 사용 중일 경우: Wallpaper Engine 설정을 열어 **일반** 탭 맨 위에 있는 자동 시작 설정을 끄세요.
2. Steam을 열어 Wallpaper Engine을 오른쪽 클릭하고, **관리**를 클릭한 다음 **제거**를 클릭하세요.
3. Wallpaper Engine 디렉터리로 이동하여 남아있는 `wallpaper_engine` 디렉터리 전체를 삭제하세요. 기본 설치 디렉터리:

* `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine`

Wallpaper Engine을 다른 디렉터리에 설치한 경우, 그곳에서 `wallpaper_engine` 디렉터리를 찾아보세요. Make sure the folder is entirely deleted to clear any invisible antivirus file locks or corrupted files.

You can now reinstall Wallpaper Engine. If you want to start from a clean slate, please read the next section on how to fully reset all your wallpaper subscriptions - this is not necessary in most cases.

## Resetting all Steam Workshop Subscriptions

If you are experiencing issues related to wallpaper downloads by Steam, you can try to do a full reset of your Steam Workshop subscriptions. In rare cases, this can help with broken Workshop subscriptions that are not visible in the app. If you notice that Steam keeps redownloading all your wallpapers or that Steam keeps downloading wallpapers that have been deleted from the Steam Workshop in the past, you can attempt a full reset.

다음 단계를 따르세요:

1. Steam을 끕니다. **Optional:** Uninstall Wallpaper Engine first.
2. Open the Wallpaper Engine Steam Workshop website and log in to your Steam account:

* [Steam Workshop for Wallpaper Engine](https://steamcommunity.com/app/431960/workshop/)

3. On the right-hand side, hover over **Your files** and then **Subscribed Items**.
4. You will be presented a page with your subscriptions. Click the **Unsubscribe From All** button on the right-hand side to clear all your Workshop subscription (including any hidden broken subscriptions).
5. **Restart Steam**, your subscriptions are now reset.
