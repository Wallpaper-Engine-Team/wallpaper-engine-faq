---
  tags:
  - lock screen
  - login screen
---

# Wallpaper Engine on the Windows lock screen

We frequently get asked if it is possible to set a Wallpaper Engine wallpaper on the Windows lock screen. Unfortunately this is not possible due to limitations in Windows itself. The lock screen is a protected area of Windows which cannot be modified without hacking Windows. This serves system security as applications should not be able to add malicious content to the login window. For this reason, Wallpaper Engine cannot add wallpapers to the lock screen and we cannot add this feature in the future either.

## Screensaver Functionality

As an alternative to relying on the lock screen, we suggest setting up Wallpaper Engine as a screensaver in combination with the **On resume, display logon screen** option enabled in the Windows screensaver settings. See our screensaver guide on how to configure Wallpaper Engine as your screensaver:

* [Screensavers with Wallpaper Engine](/functionality/screensaver.html)