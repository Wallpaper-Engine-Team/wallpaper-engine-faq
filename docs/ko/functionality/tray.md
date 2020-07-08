# Wallpaper Engine 트레이 아이콘 숨기기

Wallpaper Engine에 Windows 시계 옆 트레이 아이콘을 숨기도록 명령하는 레지스트리 키를 수동으로 생성하여 Wallpaper Engine 트레이 아이콘을 숨길 수 있습니다.

::: warning 트레이 아이콘이 너무 성가셔서 트레이 아이콘 숨기기의 단점을 수용할 수 있는 경우를 제외하고는 이 작업을 권장하지 않습니다. :::

트레이 아이콘을 숨기면, Wallpaper Engine은 Windows 작업 관리자를 통해서만 끌 수 있습니다. 그리고 Steam 또는 .exe 파일을 통해서만 사용자 인터페이스를 열 수 있으며, 이는 불편하고 혼동을 야기할 수 있습니다.

그래도 트레이 아이콘을 숨기려면, 다음 단계를 따르세요:

레지스트리 키를 생성하려면 Windows 시작 메뉴를 열어 "regedit.exe"를 입력합니다. 그러면 "레지스트리 편집기"가 열립니다.

1. 다음 레지스트리 디렉터리로 이동합니다: *HKEY_CURRENT_USER\Software\WallpaperEngine*
2. *WallpaperEngine* 레지스트리 폴더를 오른쪽 클릭하여 *새로 만들기*, *DWORD(32비트) 값*을 차례로 선택합니다.
3. 레지스트리에 다음 이름을 입력합니다: *hideTrayIcon*
4. 이름이 정확한지 확인합니다. 여백 없이 똑같아야 합니다.
5. 레지스트리 키를 두 번 클릭하여 다음 값을 입력합니다: *1*
6. Wallpaper Engine을 다시 시작하면, 트레이 아이콘이 나타나지 않습니다.

*hideTrayIcon*을 *0*으로 설정하거나 모두 삭제한 뒤 Wallpaper Engine을 다시 시작하면 이 작업을 되돌릴 수 있습니다. 