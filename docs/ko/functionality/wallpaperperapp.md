# 응용 프로그램별 배경화면 선택

Wallpaper Engine은 시스템에서 특정 .exe가 실행될 때 자동으로 다른 배경화면이 재생되도록 설정할 수 있습니다. 가령 게임을 플레이할 때 덜 방해받고 싶거나, 음악 플레이어를 시작할 때 오디오 시각화 도우미를 자동으로 실행하길 원하는 경우 유용할 수 있습니다.

::: tip
특정 게임이나 응용 프로그램에서 기술적 문제가 발생하면, 특정 .exe를 실행할 때 응용 프로그램 규칙을 사용하여 Wallpaper Engine을 비활성화할 수도 있습니다. If you want to solve a technical problem with another app, view this guide instead: [Fix issues with specific apps or games](/functionality/applicationrules.html)
:::

## Setting up an application rule

In the **Performance** tab of the Wallpaper Engine settings, click on the **Edit** button in the **Application rules** section. Click on **Create new rule** to set up a new set of wallpapers for an .exe of your choice. In the **Application name** input field, enter the name of your .exe, make sure the name matches exactly, for example *musicplayer.exe*. Set the **Condition** to **Is running**. In the **Wallpaper playback** option you can select one of the following options:

* Load wallpaper
* Load playlist
* Load profile

What is important to note here is that **Load wallpaper** and **Load playlist** will both only load one wallpaper and span it across all screens. If you have multiple monitors and want to load independent wallpapers for each screen (or even different playlists on each screen), you need to use the **Load Profile** option. Read the following section for more infos on how to set this up.

### Setting up a multi-monitor profile

**Load Profile** in the application rules refers to mulit-monitor profiles which can be configured in the monitor overview (screen icon in the upper right corner of the interface). A profile is a snapshot of all your currently selected wallpapers and playlists across all your screens. Whenever a profile is loaded, all wallpapers and playlists will be placed according to the profile configuration.

Configure your wallpapers and playlists across all monitors the the way you want them to be, then click on the **Save profile** button in the monitor settings and save the current setup under a name of your choice. Keep in mind that any subsequent changes you make to your setup will not change the profile until you use the **Save profile** button again. You can set up multiple profiles and assign them to multiple apps at once. For example, you may create a **Music**, a **Gaming** and a **Movies** profile and then assign each profile to all .exe files that match these categories.

<video width="100%" controls autplay loop>
  <source src="/videos/apprules.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>