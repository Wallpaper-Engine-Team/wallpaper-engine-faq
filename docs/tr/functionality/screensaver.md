# Wallpaper Engine ile Ekran koruyucu

Wallpaper Engine, duvar kâğıtlarınızı ekran koruyucu olarak kullanmanıza olanak sağlar. Geleneksel olarak, ekranları kalıcı görüntü yanmasından korumak için ekran koruyucular kullanılırdı. Ancak çoğu modern ekran teknolojisi artık bu tür ekran hasarlarından etkilenmez ve bu yüzden estetik amaçlar için herhangi bir duvar kâğıdını ekran koruyucu olarak güvenle kullanabilirsiniz. Yanıklara karşı hassas olan bir CRT, Plazma, OLED veya benzeri ekran teknolojisi kullanıyorsanız, ekran koruyucu olarak duvar kâğıtlarından oluşan bir oynatma listesi veya düzenli hareketli bir duvar kâğıdı kullanmanızı öneririz.

[[toc]]

## Ekran Koruyucu Kurulumu

In order to get started with using Wallpaper Engine as a screensaver, hover over the **Installed** tab in the Wallpaper Engine window and select **Configure Screensaver**. Wallpaper Engine will now check if you have already installed the Wallpaper Engine screensaver for Windows. If the screensaver has not yet been installed yet, you will be asked to install it. Make sure your Windows user has administrative rights and that no antivirus app is blocking Wallpaper Engine from installing the screensaver.

After the initial installation, the Windows screensaver settings should open automatically, alternatively you can open the settings manually using the **Settings & Preview** button or by directly accessing the screensaver settings via Windows.

## Ekran koruyucu Yapılandırması

### Windows Yapılandırması

In order for the Wallpaper Engine screensaver to work, you need to first select Wallpaper Engine as your active screensaver in the **Windows settings**. You can open the Windows screensaver settings through the Windows control panel or by clicking on **Settings & Preview** while in screensaver mode in Wallpaper Engine. See the video below for the necessary steps:

<video width="100%" controls autoplay loop>
  <source src="/videos/screensaver_setup.mp4" type="video/mp4">
  Tarayıcınız video etiketini desteklemiyor.
</video>

In the Windows settings, you can control the time it takes until the screensaver appears and whether or not you will be presented with the Windows lock-screen when you return to your computer. These settings are entirely handled by Windows, Wallpaper Engine itself does not control the screen timeout or similar.

### Wallpaper Engine Yapılandırması

Once you have set up the screensaver in Windows, you can start configuring the Wallpaper Engine screensaver. Hover over the **Installed** tab in Wallpaper Engine and select **Configure Screensaver**. Wallpaper Engine will now preview your screensavers instead of your wallpapers - once you exit screensaver mode, you will return back to your wallpaper configuration.

In its default state, Wallpaper Engine will use the most basic setup where your screensavers are exactly the same as your actively running wallpapers. You can change this by changing the **Screensaver is** option to **Configured separately** at the top. With that option enabled, you can choose a wallpaper for each screen which is to be used as a screensaver or even use a completely different display profile or playlists for your screensaver setup. You can always return to the wallpaper configuration by clicking on the red **Quit** button in the upper left corner.

## Ekran koruyucu Sorun Çözme

The Wallpaper Engine screensaver is activated through Windows itself, if the screensaver is not working correctly, please double-check to see if any of the default Windows screensavers work correctly for you. Check the Windows screensaver settings and your Windows energy settings to make sure that your screensaver is configured with the correct timeout that you expect and that Wallpaper Engine is set as your active screensaver.

The screensaver will be installed in `C:\Windows\System32\wpxscreensaver64.scr`, make sure no antivirus app is deleting this file by mistake or preventing it from being installed. You can also manually uninstall the screensaver by deleting that specific file, but be sure to not delete any other important Windows files in the `System32` directory when doing so.

## Turning off the Wallpaper Engine screensaver

If you do not want your wallpapers to appear as fullscreen screensavers after a few minutes of inactivity, you can turn off the Wallpaper Engine screensaver functionality. Simply open the **Windows screensaver settings** and set the screensaver to **None**. No more actions are needed, you can re-enabled the screensaver functionality in the future by following the steps at the top of this article.