# สกรีนเซฟเวอร์กับ Wallpaper Engine

Wallpaper Engine ให้คุณใช้วอลเปเปอร์เป็นสกรีนเซฟเวอร์ได้ Traditionally, screensavers were used to protect displays from permanent image burn-in, however, most modern display technologies are not susceptible to these types of display damage anymore and you can safely use any type of wallpaper as a screensaver for aesthetic purposes. If you use a CRT, Plasma, OLED or similar screen technology that is susceptible burn-ins, we recommend using a playlist of wallpapers as a screensaver or a wallpaper with regular motion.

## การตั้งค่าสกรีนเซฟเวอร์เริ่มต้น

In order to get started with using Wallpaper Engine as a screensaver, hover over the **Installed** tab in the Wallpaper Engine window and select **Configure Screensaver**. Wallpaper Engine จะตรวจสอบว่าคุณได้ติดตั้งสกรีนเซฟเวอร์ Wallpaper Engine สำหรับ Windows แล้วหรือยัง ระบบจะขอให้คุณติดตั้งสกรีนเซฟเวอร์หากคุณยังไม่ได้ทำการติดตั้ง โปรดตรวจสอบให้แน่ใจว่าบัญชีผู้ใช้ Windows ของคุณมีสิทธิ์ในฐานะผู้ดูแลระบบ และไม่มีโปรแกรมป้องกันไวรัสที่ปิดกั้น Wallpaper Engine จากการติดตั้งสกรีนเซฟเวอร์

After the initial installation, the Windows screensaver settings should open automatically, alternatively you can open the settings manually using the **Settings & Preview** button or by directly accessing the screensaver settings via Windows.

## การกำหนดค่าสกรีนเซฟเวอร์

### การกำหนดค่า Windows

In order for the Wallpaper Engine screensaver to work, you need to first select Wallpaper Engine as your active screensaver in the **Windows settings**. You can open the Windows screensaver settings through the Windows control panel or by clicking on **Settings & Preview** while in screensaver mode in Wallpaper Engine. See the video below for the necessary steps:

<video width="100%" controls autoplay loop>
  <source src="/videos/screensaver_setup.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

In the Windows settings, you can control the time it takes until the screensaver appears and whether or not you will be presented with the Windows lock-screen when you return to your computer. These settings are entirely handled by Windows, Wallpaper Engine itself does not control the screen timeout or similar.

### การกำหนดค่า Wallpaper Engine

เมื่อคุณตั้งค่าสกรีนเซฟเวอร์ใน Windows แล้ว คุณสามารถเริ่มกำหนดค่าสกรีนเซฟเวอร์ Wallpaper Engine ได้ทันที Hover over the **Installed** tab in Wallpaper Engine and select **Configure Screensaver**. Wallpaper Engine will now preview your screensavers instead of your wallpapers - once you exit screensaver mode, you will return back to your wallpaper configuration.

In its default state, Wallpaper Engine will use the most basic setup where your screensavers are exactly the same as your actively running wallpapers. You can change this by changing the **Screensaver is** option to **Configured separately** at the top. With that option enabled, you can choose a wallpaper for each screen which is to be used as a screensaver or even use a completely different display profile or playlists for your screensaver setup. You can always return to the wallpaper configuration by clicking on the red **Quit** button in the upper left corner.

## การแก้ปัญหาสกรีนเซฟเวอร์

The Wallpaper Engine screensaver is activated through Windows itself, if the screensaver is not working correctly, please double-check to see if any of the default Windows screensavers work correctly for you. Check the Windows screensaver settings and your Windows energy settings to make sure that your screensaver is configured with the correct timeout that you expect and that Wallpaper Engine is set as your active screensaver.

The screensaver will be installed in `C:\Windows\System32\wpxscreensaver64.scr`, make sure no antivirus app is deleting this file by mistake or preventing it from being installed. You can also manually uninstall the screensaver by deleting that specific file, but be sure to not delete any other important Windows files in the `System32` directory when doing so.