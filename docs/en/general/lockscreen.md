---
  tags:
  - lock screen
  - login screen
---

# Wallpaper Engine on the Windows lock screen

The Windows login screen is not meant to be modified as a design decision by Microsoft. Making changes to it essentially requires hacking Windows in an unsafe and unstable manner. This means that if a Windows update modifies the lockscreen or if the app crashes, you would be unable to login to your computer entirely. The feature could potentially stop working at any time, causing unpredictable side effects.

If Microsoft officially makes this possible or if we discover a safe way to add live wallpapers to the Windows lock screen, we will implement this feature. Currently, there are no known safe ways to accomplish this, which is why live wallpapers cannot be set on the lockscreen by Wallpaper Engine.

## Setting a static wallpaper

However, you can still configure Wallpaper Engine to override the static lock screen image with a snapshot of your current live wallpaper. To do this, enable the **Override lock screen image** option in the **General** tab of the Wallpaper Engine settings.

## Screensaver Functionality

As an alternative to relying on the lock screen, we suggest setting up Wallpaper Engine as a screensaver in combination with the **On resume, display logon screen** option enabled in the Windows screensaver settings. See our screensaver guide on how to configure Wallpaper Engine as your screensaver:

* [Screensavers with Wallpaper Engine](/functionality/screensaver.html)