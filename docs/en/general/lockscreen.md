---
  tags:
  - lock screen
  - login screen
---

# Wallpaper Engine on the Windows lock screen

The login screen is very secure and not accessible by normal means. Only dangerous Windows hacks may accomplish this by patching or hooking into the login screen process. Due to this, you could get permanently locked out of your PC when an error occurs or a Windows update changes the lockscreen structure in an unexpected way.

If a safe method is made public or reverse-engineered by us, we will implement this feature. Currently there are no known safe ways to accomplish this, which is why live wallpapers cannot be set on the lockscreen.

However, you can still configure Wallpaper Engine to override the static lock screen image with a snapshot of your current live wallpaper. To do this, enable the **Override lock screen image** option in the **General** tab of the Wallpaper Engine settings.

## Screensaver Functionality

As an alternative to relying on the lock screen, we suggest setting up Wallpaper Engine as a screensaver in combination with the **On resume, display logon screen** option enabled in the Windows screensaver settings. See our screensaver guide on how to configure Wallpaper Engine as your screensaver:

* [Screensavers with Wallpaper Engine](/functionality/screensaver.html)