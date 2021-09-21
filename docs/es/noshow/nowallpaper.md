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

## Los fondos desaparecen o se desvanecen en intervalos regulares

Si tus fondos no dejan de desaparecer durante un instante, es probable que tengas configurada una presentación como fondo de Windows. Abre la configuración del fondo de Windows y elige una imagen o un color sólido como fondo para solucionar el problema.

## Conflictos con otros programas de modificación de escritorio

Wallpaper Engine funciona bien con casi todos los programas de modificación de escritorios. Sin embargo, hay algunos como StarDock DeskScapes que también modifican los fondos de Windows, por lo que no es posible usar los dos programas a la vez. Si usas un programa parecido a Wallpaper Engine, deberás decantarse por uno solo.

### Fences

Por lo general, Wallpaper Engine funciona bien con *Fences*. Sin embargo, **si tienes Fences instalado y lo has desactivado**, este ocultará el fondo de Wallpaper Engine. Tendrás que volver a activarlo o, en su defecto, desinstalarlo.

Si usas Fences y no puedes ver los fondos de pantalla de Wallpaper Engine, asegúrate de que estés usando la versión **Fences 3.13 o superior** para evitar los problemas de compatibilidad con Wallpaper Engine. Las versiones 3.13 o superiores contienen varios cambios de compatibilidad con Wallpaper Engine, así que es importante que te asegures de que tienes Fences actualizado.

## Fondo gris o no hay texturas en Windows 7

Asegúrate de que tienes instalada la actualización **KB2533623** de Windows 7. Instálala manualmente desde ese enlace o comprueba si Windows Update funciona correctamente y puede instalarla. Puedes descargarla desde la página web de Microsoft y el problema se solucionará en cuanto reinicies el equipo:

* [KB2533623](https://support.microsoft.com/es-es/help/2533623/microsoft-security-advisory-insecure-library-loading-could-allow-remot)