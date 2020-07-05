# 32비트 & 64비트 버전

64비트 버전은 더 큰 파일(2GB 이상)을 처리할 수 있지만, 배경화면의 파일 크기와 상관 없이 더 많은 메모리를 사용합니다. 예를 들어 64비트 버전은 32비트 버전에 비해 일반적인 비디오 배경화면에 약 50MB의 RAM을 더 사용합니다. 그 외에는 다르거나 향상되는 부분이 없습니다.

::: 팁 32비트 버전이 작동 중단이 될만큼 배경화면이 큰 경우를 제외하고는, 32비트 버전의 사용을 권장합니다. 그러나 사용자 대부분은 이러한 문제를 경험하지 않습니다. :::

You may also opt for the 64-bit version when the video system on your PC has errors that only affect 32-bit programs. Should you ever have installed codec packs or alike, they may have permanently damaged the 32-bit Windows video system that Wallpaper Engine uses. If the 64-bit system is not affected, you'll be able to take advantage of that by using the 64-bit version of Wallpaper Engine and so you can avoid having to fix whatever got broken.

::: warning Note Note that "Web" type wallpapers will always be executed with a 32-Bit executable (webwallpaper32.exe). The same applies to the user interface itself (ui32.exe). 64-Bit only applies when selecting wallpapers of the type "Scene" or "Video". :::

## How to set-up Wallpaper Engine to autstart with either the 32 or 64 Bit version when Windows launches?

First, completely turn off Wallpaper Engine via the tray icon (right-click on the Wallpaper Engine icon in the Windows tray -> "Quit"). This is important as Steam will otherwise not launch Wallpaper Engine and only bring the already running version to the foreground.

Once Wallpaper Engine is turned off, go to Steam and start either the 32 Bit or 64 Bit version, depending on which version you want to automatically start. Go to the Wallpaper Engine settings and at the top of the "General" tab, enable autostart. If it is already enabled, turn it off completely and then turn it back on. This will register the current version as the one which will be automatically started alongside Windows. 