---
tags:
  - antivirus
  - aparece
---

# No se ven los fondos

Si no aparecen algunos de los fondos (o ninguno), puede ser por culpa de que el antivirus bloquea Wallpaper Engine por error. Si usas un antivirus, configúralo para que ignore el directorio de instalación *wallpaper_engine* y todos los ejecutables importantes de Wallpaper Engine:

* *wallpaper_engine/wallpaper32.exe*
* *wallpaper_engine/wallpaper64.exe*
* *wallpaper_engine/launcher.exe*
* *wallpaper_engine/bin/webwallpaper32.exe*
* *wallpaper_engine/bin/ui32.exe*

::: tip
Si tienes un antivirus instalado (que no sea Windows Defender) es muy probable que sea el causante de los problemas. Investiga el asunto con calma si no consigues solucionar el error tras los primeros intentos.
:::

## Modo de contraste alto en Windows

Si tienes activado el **modo de contraste alto** en los ajustes de Windows 10 con el tema **Blanco en alto contraste**, Windows se encargará de desactivar los fondos de Wallpaper Engine a la fuerza. Intenta cambiar el tema de contraste alto en los ajustes de Windows o desactiva el modo de contraste alto por completo para que desaparezca el problema.

## Wallpapers disappearing / fading away in regular intervals

If your wallpapers keep disappearing for a brief moment, you likely have a slideshow configured as your Windows wallpaper. Open the Windows wallpaper settings and set a solid color or a static image as your regular Windows wallpaper, this will fix this problem.

## Conflicts with other desktop modification software

Wallpaper Engine works well with most desktop-modification applications. However, some applications such as StarDock DeskScapes also modify the Windows wallpaper and it is not possible to run both applications at the same time. If you use a similar application to Wallpaper Engine, you will need to decide on one which you want to continue to use.

### Fences

Generally, Wallpaper Engine works fine with *Fences*. However, **if you have Fences installed but have disabled it**, it will hide the wallpaper from Wallpaper Engine. You need to either enable or uninstall it completely.

If you are using Fences and your Wallpaper Engine wallpapers are not visible, ensure that you are using **Fences 3.13 or newer** to avoid these compatibility issues with Wallpaper Engine. Fences 3.13 and newer versions contain important compatibility fixes with Wallpaper Engine, so it is important that you ensure your Fences is up-to-date.

## Gray Wallpaper or missing textures on Windows 7

Make sure that the Windows 7 update **KB2533623** is installed. Either install it manually with that link or ensure that your Windows Update is working right and installing it by itself. You can download it manually from the Microsoft website, restart your system afterwards and the problem should go away:

* [KB2533623](https://support.microsoft.com/es-es/help/2533623/microsoft-security-advisory-insecure-library-loading-could-allow-remot)