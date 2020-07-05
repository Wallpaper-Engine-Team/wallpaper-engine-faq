# Steam 창작마당 백업

배경화면이 어떤 이유로 Steam에서 삭제되면, Steam은 PC에서도 삭제합니다. Wallpaper Engine은 이것을 막을 수 없지만, 염려되는 사용자는 배경화면의 백업을 만들 수 있습니다.

이와 유사하게 Steam이 무작위로 모든 창작마당 파일을 다시 다운로드한다는 여러 신고가 있었습니다. 기가바이트 크기의 데이터를 보유한 사용자라면 성가실 수도 있습니다. Creating a backup and severing all ties to Steam can avoid that if it happens too often.

# 백업 생성

The following guide expects that your Steam and Wallpaper Engine are installed in `C:\Program Files (x86)\Steam\`, if you have installed your Steam / Wallpaper Engine somewhere else, be sure to check in those locations.

1. Locate the folder in which Steam stores your wallpapers, by default it is in `C:\Program Files (x86)\Steam\steamapps\workshop\content\431960` ::: tip **431960** is the Steam ID of Wallpaper Engine, Steam uses this directory for all Wallpaper Engine downloads. :::
2. Copy the folder 431960 to Wallpaper Engine's installation path here: `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\projects\431960`
3. **Rename** the folder `431960` into `backup` so that the complete path looks like this: `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\projects\backup`
4. The `backup` directory now includes all your previously downloaded wallpapers, each in their own sub-directory (the numbers represent the Steam Workshop ID of the wallpaper)
5. Restart the wallpaper browser and you should see the backed up wallpapers now. You can now unsubscribe the duplicate Steam ones and only use your personal copy of them

::: warning Do **not** manually delete the Steam Workshop folder `C:\Program Files (x86)\Steam\steamapps\workshop\content\431960`. This will cause your Steam to be confused and re-download all wallpapers. Simply unsubscribe from your wallpapers and let Steam delete the duplicate files itself. :::