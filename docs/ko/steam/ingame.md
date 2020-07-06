# Steam에 계속 "인게임"이 나타납니다
Wallpaper Engine is only supposed to show on Steam while accessing Workshop features (when the browser or editor is open, this is enforced by Valve / Steam). 그러나 창을 모두 닫아도 계속 나타나면, 아래의 방법을 통해 해결할 수 있는 알려진 Steam 버그이거나 창이 제대로 닫히지 않은 것일 수 있습니다. (작업 관리자에서 ui32.exe 확인)

이 문제가 반복해서 발생하면, Steam을 통하는 대신 wallpaper_engine 설치 디렉터리에서 바로 프로그램을 실행하여 해결할 수 있습니다. 기본값으로 이 경로는 `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\wallpaper32.exe`입니다. Wallpaper Engine이 이미 실행 중이면, 일단 완전히 끄고난 뒤 이 디렉터리에서 다시 실행하세요. 그리고 가능하다면 자동시작을 끄고 Wallpaper Engine 설정에서 다시 켜세요.

Every time Steam reconnects to the internet, due to your internet turning off and on, Steam may go a little crazy when it comes to your in-game status which can cause issues like that. 위에서 언급한 것처럼 Steam을 통해서가 아니라 프로그램을 직접 또는 자동시작 기능을 통해 시작하면, 이 문제가 발생하는 것을 막을 수 있습니다.

## 창작마당 / Steam 결합 완전 비활성화
파일명 `nosteam.txt`의 빈 텍스트 파일을 생성하여 `wallpaper_engine/bin` 디렉터리에 넣으면, 전체 Steam 통합을 비활성화할 수 있습니다. (전체 경로 기본값은 `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\bin`입니다) 이게 비활성화되면 배경화면을 다운로드/업데이트 또는 업로드할 수 없지만, 이전에 다운로드한 것에는 모두 접근할 수 있습니다. 