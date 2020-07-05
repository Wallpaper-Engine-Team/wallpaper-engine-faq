# Steam 창작마당 백업

배경화면이 어떤 이유로 Steam에서 삭제되면, Steam은 PC에서도 삭제합니다. Wallpaper Engine은 이것을 막을 수 없지만, 염려되는 사용자는 배경화면의 백업을 만들 수 있습니다.

이와 유사하게 Steam이 무작위로 모든 창작마당 파일을 다시 다운로드한다는 여러 신고가 있었습니다. 기가바이트 크기의 데이터를 보유한 사용자라면 성가실 수도 있습니다. 백업을 생성하고 Steam과의 연결을 끊으면, 이런 일이 자주 발생하는 것을 피할 수 있습니다.

# 백업 생성

다음 가이드는 Steam과 Wallpaper Engine이 `C:\Program Files (x86)\Steam\`에 설치된 것으로 가정합니다. Steam / Wallpaper Engine을 다른 곳에 설치했다면, 해당 위치를 확인하세요.

1. Steam이 배경화면을 저장하는 폴더를 찾으세요. 기본값은 `C:\Program Files (x86)\Steam\steamapps\workshop\content\431960`입니다. ::: 팁 **431960** 은 Wallpaper Engine의 Steam ID로, Steam은 모든 Wallpaper Engine 다운로드에 이 디렉터리를 사용합니다. :::
2. 431960 폴더를 다음 Wallpaper Engine 설치 경로에 복사하세요: `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\projects\431960`
3. `431960` 폴더의 이름을 `backup`으로 **변경하세요**. 전체 경로는 다음과 같습니다: `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\projects\backup`
4. The `backup` directory now includes all your previously downloaded wallpapers, each in their own sub-directory (the numbers represent the Steam Workshop ID of the wallpaper)
5. Restart the wallpaper browser and you should see the backed up wallpapers now. You can now unsubscribe the duplicate Steam ones and only use your personal copy of them

::: warning Do **not** manually delete the Steam Workshop folder `C:\Program Files (x86)\Steam\steamapps\workshop\content\431960`. This will cause your Steam to be confused and re-download all wallpapers. Simply unsubscribe from your wallpapers and let Steam delete the duplicate files itself. :::