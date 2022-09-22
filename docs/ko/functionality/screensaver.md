# Wallpaper Engine 화면보호기

Wallpaper Engine은 자신의 배경화면을 화면보호기로 사용할 수 있게 해줍니다. 원래 화면보호기는 영구적인 이미지 번인 현상으로부터 디스플레이를 보호하기 위해 사용되었지만, 현재 사용되는 대부분의 디스플레이 기술은 그러한 손상의 영향을 받지 않으며, 모든 종류의 배경화면을 감상하는 용도로 안전하게 화면보호기로 사용할 수 있습니다. CRT, 플라스마, OLED 또는 유사한 번인 현상이 발생할 수 있는 디스플레이를 사용 중이라면, 정기적으로 움직이는 배경화면의 재생 목록을 화면보호기 또는 배경화면으로 설정하는 것을 권장합니다.

[[toc]]

## 화면 보호기 첫 설정

Wallpaper Engine을 화면 보호기로 사용하기 위해서는 Wallpaper Engine 창의 **설치됨** 탭에 커서를 올리고 **화면 보호기 설정**을 선택하세요. 그러면 Wallpaper Engine이 이미 Windows에 Wallpaper Engine 화면 보호기가 설치되어 있는지 확인할 것입니다. 아직 화면 보호기가 설치되지 않았다면, 설치할지 여부를 묻는 창이 표시될 수 있습니다. 자신의 Windows 사용자에게 관리자 권한이 있으며, Wallpaper Engine이 화면 보호기를 설치하는 것을 막는 백신 프로그램이 없는지 확인하세요.

첫 설치가 끝나면, Windows 화면 보호기 설정이 자동으로 열리며, 또는 **설정 & 미리보기** 버튼을 누르거나 Windows 화면 보호기 설정으로 직접 이동하여 설정을 열 수 있습니다.

## 화면 보호기 설정하기

### Windows 설정

Wallpaper Engine 화면 보호기가 제대로 작동하려면, 우선 **Windows 설정**에서 Wallpaper Engine을 화면 보호기로 선택해야 합니다. Windows 화면 보호기 설정은 Windows 제어판을 열거나 Wallpaper Engine 화면 보호기 모드에서 **설정 & 미리보기**를 클릭하여 열 수 있습니다. 아래 영상에서 필요한 절차를 확인하세요.

<video width="100%" controls autoplay loop>
  <source src="/videos/screensaver_setup.mp4" type="video/mp4">
  브라우저가 비디오 태그를 지원하지 않습니다.
</video>

Windows 설정에서는 화면 보호기가 나타나는 데까지 걸리는 시간과 컴퓨터로 돌아왔을 때 Windows 잠금화면을 표시할지 여부를 정할 수 있습니다. 이러한 설정은 전적으로 Windows가 관리하며, Wallpaper Engine은 이러한 설정에 관여하지 않습니다.

### Wallpaper Engine 설정

Windows에서 화면 보호기를 설정하고 나면, Wallpaper Engine 화면 보호기의 설정을 시작할 수 있습니다. Wallpaper Engine의 **설치됨** 탭에 커서를 올리고 **화면 보호기 설정**을 선택하세요. 그러면 Wallpaper Engine이 배경화면 대신 화면 보호기의 미리보기를 표시할 것입니다. 화면 보호기 모드를 종료하면 배경화면 설정으로 돌아갑니다.

기본적으로 Wallpaper Engine은 현재 사용 중인 배경화면과 동일한 화면 보호기를 사용하는 기본 설정을 사용합니다. 이는 **화면 보호기 설정 모드:** 옵션을 맨 위의 **별개로 설정**으로 변경하여 바꿀 수 있습니다. 해당 옵션이 활성화되면, 화면 별로 화면 보호기로 사용할 배경화면을 선택할 수 있으며, 자신의 화면 보호기 설정에 다른 디스플레이 프로필 또는 재생목록을 사용하도록 선택할 수도 있습니다. 언제든 화면 좌측 상단의 빨간 **종료** 버튼을 클릭하여 배경화면 설정으로 돌아갈 수 있습니다.

## 화면 보호기 문제 해결

Wallpaper Engine 화면 보호기는 Windows 자체를 통해 활성화되며, 화면 보호기가 제대로 작동하지 않을 경우 기본 Windows 화면 보호기도 작동하지 않는지 한 번 더 확인해주세요. Windows 화면 보호기 설정과 Windows 전원 설정을 확인하여 화면 보호기 표시 시간이 원하는 대로 설정되어 있는지, Wallpaper Engine이 현재 화면 보호기로 설정되어 있는지 확인하십시오.

화면 보호기는 `C:\Windows\System32\wpxscreensaver64.scr`에 저장되며, 백신 프로그램이 해당 파일을 실수로 삭제하거나 설치를 방해하는지 확인하세요. 또한 해당 파일을 삭제하여 화면 보호기를 삭제할 수 있지만, 그러면서 `System32` 디렉토리의 다른 중요 Windows 파일을 삭제하지 않도록 주의하세요.

## Turning off the Wallpaper Engine screensaver

If you do not want your wallpapers to appear as fullscreen screensavers after a few minutes of inactivity, you can turn off the Wallpaper Engine screensaver functionality. Simply open the **Windows screensaver settings** and set the screensaver to **None**. No more actions are needed, you can re-enabled the screensaver functionality in the future by following the steps at the top of this article.