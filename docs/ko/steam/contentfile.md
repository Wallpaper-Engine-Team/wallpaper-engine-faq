# "콘텐츠 파일 잠김" / 디스크 쓰기 오류

Steam에서 Wallpaper Engine을 설치하거나 업데이트할 때 다운로드하지 못하는 현상은 바이러스 백신이 파일을 삭제 또는 격리하거나 알림 없이 디스크에서 디렉터리 전체를 차단하기 때문에 발생하는 경우가 대부분입니다. Steam에서 '콘텐츠 파일 잠김' 또는 '액세스 거부' 오류 메시지를 받습니다. 이 문제는 바이러스 백신이 PC에서 변경한 내용을 실행 취소하도록 바이러스 백신 내에서 해결해야 합니다. 바이러스 백신 프로그램에는 대부분 파일을 복구하거나 허용 목록을 생성할 수 있는 격리 창이 있습니다. 바이러스 백신 응용프로그램이 다음 디렉터리를 무시하도록 설정하세요:

* `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine`
* `C:\Program Files (x86)\Steam\steamapps\workshop\downloads`
* `C:\Program Files (x86)\Steam\steamapps\downloading`

*Steam 또는 Wallpaper Engine이 다른 디렉터리에 설치되었으면, 디렉터리를 실제 Steam 설치 경로로 조정해야 합니다.*

백신 프로그램이 해당 디렉토리를 무시하도록 설정한 후에도 문제가 계속될 경우, 때로는 Wallpaper Engine을 Steam에서 삭제한 후, 직접 `wallpaper_engine` 디렉토리에 남은 파일들을 삭제하여 Steam이 파일을 다운로드하지 못하게 막는 백신 프로그램의 잠금을 제거해야 합니다. `wallpaper_engine` 폴더 전체를 삭제한 후, Steam으로 앱을 재설치하세요.