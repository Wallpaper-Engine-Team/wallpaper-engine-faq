# 응용 프로그램별 배경화면 선택

Wallpaper Engine은 시스템에서 특정 .exe가 실행될 때 자동으로 다른 배경화면이 재생되도록 설정할 수 있습니다. 가령 게임을 플레이할 때 덜 방해받고 싶거나, 음악 플레이어를 시작할 때 오디오 시각화 도우미를 자동으로 실행하길 원하는 경우 유용할 수 있습니다.

::: tip
특정 게임이나 응용 프로그램에서 기술적 문제가 발생하면, 특정 .exe를 실행할 때 응용 프로그램 규칙을 사용하여 Wallpaper Engine을 비활성화할 수도 있습니다. 또 다른 앱의 기술적 문제를 해결하려면 대신 이 가이드를 확인하세요: [특정 앱 또는 게임 오류 해결](/functionality/applicationrules.html)
:::

## 응용 프로그램 규칙 설정

Wallpaper Engine 설정의 **성능** 탭의 **응용 프로그램 규칙** 섹션의 **편집** 버튼을 클릭하세요. 그리고 **새 규칙 만들기**를 클릭하여 선택한 .exe의 새 배경화면 세트를 설정하세요. **응용 프로그램 이름** 입력 칸에 .exe 이름을 입력하세요. *musicplayer.exe*처럼 이름이 정확히 일치해야 합니다. **실행**할 **조건**을 설정하세요. **배경화면 재생** 옵션에서 다음 옵션 중 하나를 선택할 수 있습니다:

* 배경화면 로드
* 재생목록 로드
* 프로필 로드

여기서 중요한 것은 **배경화면 로드**와 **재생목록 로드**는 모두 배경화면을 하나만 로드하여 모든 스크린에 펼쳐집니다. 모니터가 여러 대인데 화면마다 배경화면을 개별적으로 로드하고 싶다면 (또는 화면마다 다른 재생목록을 로드하고 싶다면), **프로필 로드** 옵션을 사용해야 합니다. 설정 방법에 대한 자세한 내용은 다음 섹션을 참고하세요.

### 다중 모니터 프로필 설정

**Load Profile** in the application rules refers to mulit-monitor profiles which can be configured in the monitor overview (screen icon in the upper right corner of the interface). A profile is a snapshot of all your currently selected wallpapers and playlists across all your screens. Whenever a profile is loaded, all wallpapers and playlists will be placed according to the profile configuration.

Configure your wallpapers and playlists across all monitors the the way you want them to be, then click on the **Save profile** button in the monitor settings and save the current setup under a name of your choice. Keep in mind that any subsequent changes you make to your setup will not change the profile until you use the **Save profile** button again. You can set up multiple profiles and assign them to multiple apps at once. For example, you may create a **Music**, a **Gaming** and a **Movies** profile and then assign each profile to all .exe files that match these categories.

<video width="100%" controls autplay loop>
  <source src="/videos/apprules.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>