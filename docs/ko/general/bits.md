# 32비트 & 64비트 버전

64비트 버전은 더 큰 파일(2GB 이상)을 처리할 수 있지만, 배경화면의 파일 크기와 상관 없이 더 많은 메모리를 사용합니다. 예를 들어 64비트 버전은 32비트 버전에 비해 일반적인 비디오 배경화면에 약 50MB의 RAM을 더 사용합니다. 그 외에는 다르거나 향상되는 부분이 없습니다.

::: 팁 32비트 버전이 작동 중단이 될만큼 배경화면이 큰 경우를 제외하고는, 32비트 버전의 사용을 권장합니다. 그러나 사용자 대부분은 이러한 문제를 경험하지 않습니다. :::

또한 PC의 비디오 시스템에 32비트 프로그램에만 영향을 미치는 오류가 발생할 경우에도 64비트 버전을 선택할 수 있습니다. 코덱 팩 또는 유사한 것을 설치했다면, Wallpaper Engine이 사용하는 32비트 Windows 비디오 시스템의 영구 손상 가능성이 있습니다. 64비트 시스템이 영향을 받지 않았다면 손상 문제를 해결하지 않고도 Wallpaper Engine의 64비트 버전을 사용할 수도 있습니다.

::: warning Note Note that "Web" type wallpapers will always be executed with a 32-Bit executable (webwallpaper32.exe). The same applies to the user interface itself (ui32.exe). 64-Bit only applies when selecting wallpapers of the type "Scene" or "Video". :::

## How to set-up Wallpaper Engine to autstart with either the 32 or 64 Bit version when Windows launches?

First, completely turn off Wallpaper Engine via the tray icon (right-click on the Wallpaper Engine icon in the Windows tray -> "Quit"). This is important as Steam will otherwise not launch Wallpaper Engine and only bring the already running version to the foreground.

Once Wallpaper Engine is turned off, go to Steam and start either the 32 Bit or 64 Bit version, depending on which version you want to automatically start. Go to the Wallpaper Engine settings and at the top of the "General" tab, enable autostart. If it is already enabled, turn it off completely and then turn it back on. This will register the current version as the one which will be automatically started alongside Windows. 