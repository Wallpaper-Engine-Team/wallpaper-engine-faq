# 삭제된 기본 배경화면 복구

Wallpaper Engine으로 사전 설치된 배경화면을 삭제했다면, *wallpaper_engine* 설치 디렉터리에서 구성 파일을 삭제하여 복구할 수 있습니다.

1. Wallpaper Engine을 완전히 끕니다. (트레이에서 오른쪽 클릭 -> "종료")

2. Wallpaper Engine 디렉터리로 이동하여 "visibility.json" 파일을 삭제합니다. 기본적으로 파일은 다음 경로에 위치합니다:

* *C:\Program Files (x86)\Steam\SteamApps\common\wallpaper_engine\projects\defaultprojects\visibility.json*

Steam 또는 Wallpaper Engine이 다른 위치 / 디렉터리에 설치되어 있으면, 디렉터리가 약간 다를 수도 있습니다. 그러나 *wallpaper_engine\projects\defaultprojects\visibility.json* 하위 디렉터리는 항상 같습니다.

3. 파일이 삭제되면, Wallpaper Engine을 다시 시작합니다. 기본 배경화면이 다시 생성됩니다.

::: 팁 어떤 이유에서든 "visibility.json" 파일을 찾을 수 없다면, 그냥 Wallpaper Engine을 다시 설치하면 됩니다. 이 방식으로도 기본 배경화면을 모두 복구할 수 있지만, 위의 단계를 거치면 모든 배경화면을 다시 다운로드하지 않아도 됩니다. :::