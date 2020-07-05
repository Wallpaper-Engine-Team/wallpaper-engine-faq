# "콘텐츠 파일 잠김" / 디스크 쓰기 오류

If Steam fails to download Wallpaper Engine either while installing or updating the app, it is most likely your antivirus deleting files, putting files into quarantine or blocking entire directories on your disk without informing you about this. You will get 'content file locked' or 'access denied' errors in Steam. This needs to be resolved in your antivirus by undoing the changes it did to your PC, most antivirus programs have a quarantine window from where you can restore files or create a whitelist. Make sure your antivirus application ignores the following directories:

* `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine`
* `C:\Program Files (x86)\Steam\steamapps\workshop\downloads`
* `C:\Program Files (x86)\Steam\steamapps\downloading`

*Steam 또는 Wallpaper Engine이 다른 디렉터리에 설치되었으면, 디렉터리를 실제 Steam 설치 경로로 조정해야 합니다.*
