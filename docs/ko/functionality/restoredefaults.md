# 삭제된 기본 배경화면 복구

Wallpaper Engine으로 사전 설치된 배경화면을 삭제했다면, *wallpaper_engine* 설치 디렉터리에서 구성 파일을 삭제하여 복구할 수 있습니다.

1. Wallpaper Engine을 완전히 끄세요. (트레이에서 오른쪽 클릭 -> "종료")

2. Wallpaper Engine 디렉터리로 이동하여 "visibility.json" 파일을 삭제하세요. 기본적으로 파일은 다음 경로에 위치합니다:

* *C:\Program Files (x86)\Steam\SteamApps\common\wallpaper_engine\projects\defaultprojects\visibility.json*

Steam 또는 Wallpaper Engine이 다른 위치 / 디렉터리에 설치되어 있으면, 디렉터리가 살짝 다를 수도 있습니다. 그러나 *wallpaper_engine\projects\defaultprojects\visibility.json* 하위 디렉터리는 항상 같습니다.

3. 파일이 삭제되면, Wallpaper Engine을 다시 시작하세요. 기본 배경화면이 다시 생성됩니다.

::: tip If you are unable to find the "visibility.json" file for some reason, you can also always just re-install Wallpaper Engine. This will also restore all default wallpapers but will require you to re-download all wallpapers which you can avoid by following the steps above. :::