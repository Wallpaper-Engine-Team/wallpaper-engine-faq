# Wallpaper Engine 화면보호기

Wallpaper Engine은 자신의 배경화면을 화면보호기로 사용할 수 있게 해줍니다. 원래 화면보호기는 영구적인 이미지 번인 현상으로부터 디스플레이를 보호하기 위해 사용되었지만, 현재 사용되는 대부분의 디스플레이 기술은 그러한 손상의 영향을 받지 않으며, 모든 종류의 배경화면을 감상하는 용도로 안전하게 화면보호기로 사용할 수 있습니다. CRT, 플라스마, OLED 또는 유사한 번인 현상이 발생할 수 있는 디스플레이를 사용 중이라면, 정기적으로 움직이는 배경화면의 재생 목록을 화면보호기 또는 배경화면으로 설정하는 것을 권장합니다.

[[toc]]

## 화면 보호기 첫 설정

In order to get started with using Wallpaper Engine as a screensaver, hover over the **Installed** tab in the Wallpaper Engine window and select **Configure Screensaver**. Wallpaper Engine will now check if you have already installed the Wallpaper Engine screensaver for Windows. If the screensaver has not yet been installed yet, you will be asked to install it. Make sure your Windows user has administrative rights and that no antivirus app is blocking Wallpaper Engine from installing the screensaver.

After the initial installation, the Windows screensaver settings should open automatically, alternatively you can open the settings manually using the **Settings & Preview** button or by directly accessing the screensaver settings via Windows.

## 화면 보호기 설정하기

### Windows 설정

In order for the Wallpaper Engine screensaver to work, you need to first select Wallpaper Engine as your active screensaver in the **Windows settings**. You can open the Windows screensaver settings through the Windows control panel or by clicking on **Settings & Preview** while in screensaver mode in Wallpaper Engine. See the video below for the necessary steps:

<video width="100%" controls autoplay loop>
  <source src="/videos/screensaver_setup.mp4" type="video/mp4">
  브라우저가 비디오 태그를 지원하지 않습니다.
</video>

In the Windows settings, you can control the time it takes until the screensaver appears and whether or not you will be presented with the Windows lock-screen when you return to your computer. These settings are entirely handled by Windows, Wallpaper Engine itself does not control the screen timeout or similar.

### Wallpaper Engine 설정

Once you have set up the screensaver in Windows, you can start configuring the Wallpaper Engine screensaver. Hover over the **Installed** tab in Wallpaper Engine and select **Configure Screensaver**. Wallpaper Engine will now preview your screensavers instead of your wallpapers - once you exit screensaver mode, you will return back to your wallpaper configuration.

In its default state, Wallpaper Engine will use the most basic setup where your screensavers are exactly the same as your actively running wallpapers. You can change this by changing the **Screensaver is** option to **Configured separately** at the top. With that option enabled, you can choose a wallpaper for each screen which is to be used as a screensaver or even use a completely different display profile or playlists for your screensaver setup. You can always return to the wallpaper configuration by clicking on the red **Quit** button in the upper left corner.

## 화면 보호기 문제 해결

The Wallpaper Engine screensaver is activated through Windows itself, if the screensaver is not working correctly, please double-check to see if any of the default Windows screensavers work correctly for you. Check the Windows screensaver settings and your Windows energy settings to make sure that your screensaver is configured with the correct timeout that you expect and that Wallpaper Engine is set as your active screensaver.

The screensaver will be installed in `C:\Windows\System32\wpxscreensaver64.scr`, make sure no antivirus app is deleting this file by mistake or preventing it from being installed. You can also manually uninstall the screensaver by deleting that specific file, but be sure to not delete any other important Windows files in the `System32` directory when doing so.

## Turning off the Wallpaper Engine screensaver

If you do not want your wallpapers to appear as fullscreen screensavers after a few minutes of inactivity, you can turn off the Wallpaper Engine screensaver functionality. Simply open the **Windows screensaver settings** and set the screensaver to **None**. No more actions are needed, you can re-enabled the screensaver functionality in the future by following the steps at the top of this article.