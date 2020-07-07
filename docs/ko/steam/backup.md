# Steam 창작마당 백업

배경화면이 어떤 이유로 Steam에서 삭제되면, Steam은 PC에서도 삭제합니다. Wallpaper Engine에서 이 현상을 막을 수는 없지만, 걱정되는 사용자는 배경화면의 백업을 만들 수 있습니다.

이와 유사하게 Steam이 무작위로 모든 창작마당 파일을 다시 다운로드한다는 여러 신고가 있었습니다. 기가바이트 크기의 데이터를 보유한 사용자라면 성가실 수도 있습니다. 백업을 생성하고 Steam과의 연결을 끊으면, 이런 일이 자주 발생하는 것을 피할 수 있습니다.

# 백업 생성

다음 가이드는 Steam과 Wallpaper Engine이 `C:\Program Files (x86)\Steam\`에 설치된 것으로 가정합니다. Steam / Wallpaper Engine을 다른 곳에 설치했다면, 해당 위치를 확인하세요.

1. Steam이 배경화면을 저장하는 폴더를 찾습니다. 기본값은 `C:\Program Files (x86)\Steam\steamapps\workshop\content\431960`입니다. ::: 팁 **431960** 은 Wallpaper Engine의 Steam ID로, Steam은 모든 Wallpaper Engine 다운로드에 이 디렉터리를 사용합니다. :::
2. 431960 폴더를 다음 Wallpaper Engine 설치 경로에 복사합니다: `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\projects\431960`
3. `431960` 폴더의 이름을 `backup`으로 **변경합니다**. 전체 경로는 다음과 같습니다: `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\projects\backup`
4. 이제 `back` 디렉터리에 이전에 다운로드한 모든 배경화면이 있으며, 각각 하위 디렉터리가 있습니다. (숫자는 배경화면의 Steam 창작마당 ID를 나타냅니다)
5. 배경화면 브라우저를 다시 시작하면 백업된 배경화면을 볼 수 있습니다. 이제 중복되는 Steam 배경화면의 구독을 취소하고, 개인 복사본을 사용할 수 있습니다.

::: 경고 Steam 창작마당 폴더를 수동으로 삭제하지 **마세요**. `C:\Program Files (x86)\Steam\steamapps\workshop\content\431960` 그러면 Steam이 혼동하여 모든 배경화면을 다시 다운로드할 수 있습니다. 배경화면을 구독 취소하면, Steam이 중복되는 파일을 삭제합니다. :::