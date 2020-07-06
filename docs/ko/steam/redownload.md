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
We have built an automatic Steam fixer that you can use to attempt to make Steam stop this issue from continuing (hopefully)! 다음 단계를 따르세요:
* Steam을 끄세요
* `wallpaper_engine` 설치 디렉터리로 이동하세요
  * 기본 위치: `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine`
* `wallpaper_engine\bin\steamredownloadfixer32.exe`를 실행하세요
  * If the tool gives you any error messages, please send us an email and we will investigate if we can improve it
* Restart Steam and verify the Wallpaper Engine files:
  * [Verify the Wallpaper Engine files](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

You have to repeat this every time the Steam download cache breaks up, unfortunately. Please keep in mind that we have not built Steam and cannot fix Steam ourselves.

## Reinstall Steam

The most reliable long-term fix for most users affected by this Steam bug regularly appears to be to reinstall Steam as some Steam files may simply be broken on your system. Try to reinstall Steam completely:

1. Uninstall Wallpaper Engine through Steam.
2. Uninstall Steam itself, make sure to follow the official guide:
  * [Uninstall Steam](https://support.steampowered.com/kb_article.php?ref=9609-OBMP-2526)
  * Specifically check the Manually Removing Steam section in the Steam Support article above and make a backup of your *steamapps* directory as described there to ensure you will not have to redownload all your games.

## Use local backups as a workaround

If the issue continues happening to you, you can also make local backups of all wallpapers and then unsubscribe from all wallpapers. Steam will not redownload wallpapers that you are not subscribed to, so the work-around is to simply only rely on local backups. You can find our guide on how to create backups here:

* [Using wallpaper backups](/steam/backup)

Afterwards, simply unsubscribe from all wallpapers. Make sure to not delete any files manually, Steam must delete the wallpaper files itself or it will attempt to redownload the wallpapers again just to delete the files on its own.