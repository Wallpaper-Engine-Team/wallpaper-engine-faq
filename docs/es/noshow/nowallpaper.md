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

::: tip Si tiene un antivirus instalado (que no sea Windows Defender) es muy probable que sea el causante de sus problemas. Investigue el asunto con calma si no consigue solucionar el error tras los primeros intentos. :::

## Conflictos con otros programas de modificación de escritorio

Wallpaper Engine funciona bien con casi todos los programas de modificación de escritorios. Sin embargo, hay algunos como StarDock DeskScapes que también modifican los fondos de Windows, por lo que no es posible usar los dos programas a la vez. Si usa un programa parecido a Wallpaper Engine, deberá decantarse por uno solo.

### Fences

Por lo general, Wallpaper Engine funciona bien con *Fences*. Sin embargo, **si tiene Fences instalado y lo ha desactivado**, este ocultará el fondo de Wallpaper Engine. Tendrá que volver a activarlo o, en su defecto, desinstalarlo.

## Fondo gris o no hay texturas en Windows 7

Asegúrese de que tiene instalada la actualización **KB2533623** de Windows 7. Instálela manualmente desde ese enlace o compruebe si Windows Update funciona correctamente y puede instalarla. Puede descargarla desde la página web de Microsoft y el problema se solucionará en cuanto reinicie el equipo:

* [KB2533623](https://support.microsoft.com/es-es/help/2533623/microsoft-security-advisory-insecure-library-loading-could-allow-remot)