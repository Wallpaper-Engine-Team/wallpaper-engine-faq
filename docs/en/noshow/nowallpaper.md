---
tags:
  - antivirus
  - showing
---
# Wallpapers not visible

If some or all of your wallpapers do not show up, it's often caused by an antivirus application blocking Wallpaper Engine by mistake. If you are using an antivirus application, please make sure to configure it so that it ignores the *wallpaper_engine* installation directory and all important Wallpaper Engine executables: 

* *wallpaper_engine/wallpaper32.exe*
* *wallpaper_engine/wallpaper64.exe*
* *wallpaper_engine/launcher.exe*
* *wallpaper_engine/bin/webwallpaper32.exe*
* *wallpaper_engine/bin/ui32.exe*

::: tip
If you have an anti-virus application installed (except Windows Defender), it's very likely that this is the cause of your problems. Take some time to investigate this further if your first attempts do not fix this issue.
:::

## High-contrast mode in Windows

If you have enabled **high-contrast mode** in your Windows 10 theme settings with the **High Contrast White** theme selected, Windows will forcibly turn off Wallpaper Engine wallpapers. Try changing the high-contrast theme you are using in the high-contrast settings of Windows or turn high-contrast mode off entirely and the issue will disappear.

## Wallpapers disappearing / fading away in regular intervals

If your wallpapers keep disappearing for a brief moment, you likely have a slideshow configured as your Windows wallpaper. Open the Windows wallpaper settings and set a solid color or a static image as your regular Windows wallpaper, this will fix this problem.

## Conflicts with other desktop modification software

Wallpaper Engine works well with most desktop-modification applications. However, some applications such as StarDock DeskScapes also modify the Windows wallpaper and it is not possible to run both applications at the same time. If you use a similar application to Wallpaper Engine, you will need to decide on one which you want to continue to use.

### Fences

Generally, Wallpaper Engine works fine with *Fences*. However, **if you have Fences installed but have disabled it**, it will hide the wallpaper from Wallpaper Engine. You need to either enable or uninstall it completely.

If you are using Fences and your Wallpaper Engine wallpapers are not visible, ensure that you are using **Fences 3.13 or newer** to avoid these compatibility issues with Wallpaper Engine. Fences 3.13 and newer versions contain important compatibility fixes with Wallpaper Engine, so it is important that you ensure your Fences is up-to-date.

## Gray Wallpaper or missing textures on Windows 7

Make sure that the Windows 7 update **KB2533623** is installed. Either install it manually with that link or ensure that your Windows Update is working right and installing it by itself. You can download it manually from the Microsoft website, restart your system afterwards and the problem should go away:

* [KB2533623](https://support.microsoft.com/en-us/help/2533623/microsoft-security-advisory-insecure-library-loading-could-allow-remot)