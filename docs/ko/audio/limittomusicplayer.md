# 오디오 시각화 도우미를 음악 플레이어에 제한

Windows에서의 오디오 작동 방식 때문에, Wallpaper Engine이 직접 오디오 시각화 도우미를 사용자가 선택한 음악 플레이어에 제한할 수 없습니다. 그러나 타사 소프트웨어로 *가짜* 오디오 장치를 생성해 이 과정을 진행할 수 있습니다. 이 가이드에서는 이러한 가짜 오디오 장치를 설치하고, 이것이 제대로 작동하도록 Windows 10과 Wallpaper Engine을 구성하는 한 가지 방법을 설명합니다.

저희는 가짜 오디오 장치를 지원하지 않으며, 이것의 작동을 보장하지 않습니다. 이는 매우 복잡한 설정으로, Wallpaper Engine의 지원 범위를 넘습니다. 이 가이드는 시스템을 취향에 맞게 설정하기 위해 애쓰는 사용자를 순수하게 도우려는 목적으로 제공하는 것입니다.

::: warning
이 가이드는 Windows 10의 업데이트 버전에만 해당됩니다. 이전 Windows 버전에는 일부 기능이 포함되지 않아 이 가이드가 적용되지 않을 수도 있습니다.
:::

### 가짜 오디오 장치 설치

다음 웹사이트에서 다운로드할 수 있는 무료 **VB-CABLE Virtual Audio Device** 사용을 권장합니다:

* [Virtual Audio Device 다운로드](https://www.vb-audio.com/Cable/)

보관 파일을 다운로드하여 압축을 푼 다음, Windows 10 버전에 따라 **VBCABLE_Setup.exe** 또는 **VBCABLE_Setup_x64.exe**를 사용하여 32비트 또는 64비트 오디오 장치를 설치합니다. 오른쪽 클릭 후 *관리자로 실행*을 선택하여 관리자 권한으로 설치 파일을 실행해야 합니다. 설치 설명을 따르고, 오디오 장치 설치가 성공했는지 확인하세요.

### Windows 및 Wallpaper Engine 설치

아래 단계 중 도움이 필요하면, Windows 10(영어 인터페이스)에서 시작부터 끝까지 모든 단계가 담겨 있는 하단의 비디오를 확인하세요.

1. 나중에 Wallpaper Engine에서 사용하려는 소프트웨어로 음악을 재생합니다.
2. Windows 트레이에서 시계 옆 오디오 아이콘을 오른쪽 클릭하고 **소리 설정 열기**를 선택합니다.
3. Scroll down to the bottom of the page that opens and click on **App volume and device preferences**.
4. A list of all applications playing audio will be shown. Find your music player and in the **Output** column, change the option from **Default** to **CABLE Input (VB-Audio Virtual Cable)**. Your audio player should immediately turn quiet, this is to be expected.
5. Go back to the main page of the Windows sound settings and in the upper right corner, select **Sound Control Panel**.
6. A small window will appear, navigate to the **Recording** tab, then right-click on the **CABLE Output** audio device and select **Properties**.
7. Another window will appear, click on the **Listen** tab and select **Listen to this device**. Click on **Apply** and **OK** and the music from your music player should return.
8. Windows is now properly configured, open up the **Wallpaper Engine settings** and in the **General** tab, change the **Audio recording device** to **CABLE Input (VB-Audio Virtual Cable)**. Wallpaper Engine should now start reacting to the music from your music player but will ignore any other application on your computer.

*Video showcasing all the steps described above:*

<video width="100%" controls>
  <source src="/videos/audioinputdevice.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
