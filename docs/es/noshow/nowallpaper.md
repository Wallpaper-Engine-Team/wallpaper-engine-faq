---
tags:
  - antivirus
  - aparece
---

# No se ven los fondos

Si no aparecen algunos de sus fondos (o ninguno), puede ser por culpa de que el antivirus bloquea Wallpaper Engine por error. Si usa un antivirus, configúrelo para que ignore el directorio de instalación *wallpaper_engine* y todos los ejecutables importantes de Wallpaper Engine:

* *wallpaper_engine/wallpaper32.exe*
* *wallpaper_engine/wallpaper64.exe*
* *wallpaper_engine/launcher.exe*
* *wallpaper_engine/bin/webwallpaper32.exe*
* *wallpaper_engine/bin/ui32.exe*

::: consejo Si tiene un antivirus instalado (que no sea Windows Defender) es muy probable que sea el causante de sus problemas. Investigue el asunto con calma si no consigue solucionar el error tras los primeros intentos. :::

## Conflictos con otros programas de modificación de escritorio

Wallpaper Engine funciona bien con casi todos los programas de modificación de escritorios. Sin embargo, hay algunos como StarDock DeskScapes que también modifican los fondos de Windows, por lo que no es posible usar los dos programas a la vez. If you use a similar application to Wallpaper Engine, you will need to decide on one which you want to continue to use.

### Fences

Generally, Wallpaper Engine works fine with *Fences*. However, **if you have Fences installed but have disabled it**, it will hide the wallpaper from Wallpaper Engine. You need to either enable or uninstall it completely.

## Gray Wallpaper or missing textures on Windows 7

Make sure that the Windows 7 update **KB2533623** is installed. Either install it manually with that link or ensure that your Windows Update is working right and installing it by itself. You can download it manually from the Microsoft website, restart your system afterwards and the problem should go away:

* [KB2533623](https://support.microsoft.com/en-us/help/2533623/microsoft-security-advisory-insecure-library-loading-could-allow-remot)