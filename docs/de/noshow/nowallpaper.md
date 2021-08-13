---
tags:
  - antivirus
  - antivirenprogramm
---

# Hintergründe werden nicht angezeigt

Wenn einige oder gar alle deine Hintergründe nicht angezeigt werden, so wird dies in den meisten Fällen von Antivirenprogrammen verursachten, die Wallpaper Engine fälschlicherweise blockieren. Wenn du ein Antivirenprogramm verwendest, stelle sicher, dass du es so konfiguriert hast, dass es das *wallpaper_engine*-Installationsverzeichnis und alle .exe-Dateien von Wallpaper Engine ignoriert:

* *wallpaper_engine/wallpaper32.exe*
* *wallpaper_engine/wallpaper64.exe*
* *wallpaper_engine/launcher.exe*
* *wallpaper_engine/bin/webwallpaper32.exe*
* *wallpaper_engine/bin/ui32.exe*

::: tip
Wenn du ein Antivirenprogramm installiert hast (außer Windows Defender), ist es sehr wahrscheinlich, dass es die Ursache für diese Art von Problemen ist. Schaue dir dein Antivirenprogramm genauer an, wenn die ersten Schritte beim Konfigurieren des Antivirenprogramms nicht zum Erfolg führen.
:::

## Modus für hohen Kontrast in Windows

Wenn du den **Modus für hohen Kontrast** in deinen Windows 10-Einstellungen aktiviert hast und den Design-Stil **Hoher Kontrast - Weiß** ausgewählt hast, deaktiviert Windows die Hintergründe von Wallpaper Engine. Versuche den Design-Stil des für den Modus mit hohem Kontrast in den dazugehörigen Einstellungen von Windows zu verändern oder deaktiviere den Modus mit hohem Kontrast vollständig, in beiden Fällen sollte das Problem gelöst werden.

## Wallpapers disappearing / fading away in regular intervals

If your wallpapers keep disappearing for a brief moment, you likely have a slideshow configured as your Windows wallpaper. Open the Windows wallpaper settings and set a solid color or a static image as your regular Windows wallpaper, this will fix this problem.

## Conflicts with other desktop modification software

Wallpaper Engine works well with most desktop-modification applications. However, some applications such as StarDock DeskScapes also modify the Windows wallpaper and it is not possible to run both applications at the same time. If you use a similar application to Wallpaper Engine, you will need to decide on one which you want to continue to use.

### Fences

Generally, Wallpaper Engine works fine with *Fences*. However, **if you have Fences installed but have disabled it**, it will hide the wallpaper from Wallpaper Engine. You need to either enable or uninstall it completely.

If you are using Fences and your Wallpaper Engine wallpapers are not visible, ensure that you are using **Fences 3.13 or newer** to avoid these compatibility issues with Wallpaper Engine. Fences 3.13 and newer versions contain important compatibility fixes with Wallpaper Engine, so it is important that you ensure your Fences is up-to-date.

## Gray Wallpaper or missing textures on Windows 7

Make sure that the Windows 7 update **KB2533623** is installed. Either install it manually with that link or ensure that your Windows Update is working right and installing it by itself. You can download it manually from the Microsoft website, restart your system afterwards and the problem should go away:

* [KB2533623](https://support.microsoft.com/de-de/help/2533623/microsoft-security-advisory-insecure-library-loading-could-allow-remot)