---
tags:
  - 다운로드
  - 재다운로드
  - 삭제됨
  - 삭제
---

# Steam 배경화면 재다운로드

Steam의 다운로드 캐시가 손상되어 Steam이 모든 파일을 재다운로드합니다. (예: 특별한 이유 없이 Steam이 제대로 닫히지 않고 작동 중단되었습니다) 이 현상은 Wallpaper Engine 때문에 발생하는 것이 아니므로, Wallpaper Engine에서 해결할 수 없습니다. Steam의 모든 창작마당 앱에서 이러한 Steam 버그가 일어날 수 있습니다. 이 문제가 자주 생긴다면, 다음과 같은 해결 방법이 있습니다:

## 자동으로 Steam 해결
저희가 개발한 자동 Steam 수정 도구로 Steam에서 계속되는 이 문제 해결을 시도할 수 있습니다! (그러길 기대합니다) 다음 단계를 따르세요:
* Steam을 끄세요
* `wallpaper_engine` 설치 디렉터리로 이동하세요
  * 기본 위치: `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine`
* `wallpaper_engine\bin\steamredownloadfixer32.exe`를 실행하세요
  * 도구에서 오류 메시지가 뜨면, 저희에게 이메일을 보내주세요. 개선 여부를 조사하겠습니다.
* Steam을 다시 시작하고 Wallpaper Engine 파일을 식별하세요:
  * [Wallpaper Engine 파일 식별](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

안타깝게도 Steam 다운로드 캐시가 손상될 때마다 이 작업을 반복해야 합니다. Steam은 저희 제품이 아니므로, 저희가 이 문제를 해결할 수는 없습니다.

## Steam 재설치

일부 Steam 파일이 시스템에서 손상되었을 가능성이 있으므로, 이 Steam 버그가 정기적으로 나타나는 대부분의 사용자가 이용할 수 있는 가장 확실한 장기 해결책은 Steam을 재설치하는 것입니다. Steam을 완전히 새로 설치해 보세요:

1. Steam을 통해 Wallpaper Engine을 제거하세요.
2. Steam을 제거하고, 다음 공식 가이드를 따르세요:
  * [Steam 제거](https://support.steampowered.com/kb_article.php?ref=9609-OBMP-2526)
  * Specifically check the Manually Removing Steam section in the Steam Support article above and make a backup of your *steamapps* directory as described there to ensure you will not have to redownload all your games.

## 해결책으로 로컬 백업 사용

If the issue continues happening to you, you can also make local backups of all wallpapers and then unsubscribe from all wallpapers. Steam will not redownload wallpapers that you are not subscribed to, so the work-around is to simply only rely on local backups. You can find our guide on how to create backups here:

* [배경화면 백업 사용](/steam/backup)

Afterwards, simply unsubscribe from all wallpapers. Make sure to not delete any files manually, Steam must delete the wallpaper files itself or it will attempt to redownload the wallpapers again just to delete the files on its own.