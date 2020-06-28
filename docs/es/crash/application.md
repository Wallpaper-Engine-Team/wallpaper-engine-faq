---
tags:
  - mdmp
---

# Wallpaper Engine se cuelga

Wallpaper Engine es un software que usan millones de personas y que ha recibido pruebas exhaustivas. Es muy poco frecuente que haya errores que causen que se cuelgue la aplicación. Si el mensaje que le aparece cuando se cuelga el programa menciona archivos **.dll**, verifique la lista siguiente para ver una descripción detallada de **.dll** específicos que pueden causar el problema:

[[toc]]

::: consejo Casi todos los informes de errores que recibimos suelen ser por culpa de controladores defectuosos de las tarjetas gráficas, antivirus o algún software que haga que el ordenador esté inestable. :::

## Solución rápida para evitar que Wallpaper Engine se cuelgue

Si desconoce qué es lo que hace que Wallpaper Engine se cuelgue, vuelva a instalar los controladores de la tarjeta gráfica. Es decir, tendrá que desinstalar los controladores y volver a instalar los más actuales cuando se hayan desinstalado por completo los antiguos. Algunos controladores ofrecen la opción de reinstalar desde cero en la sección avanzada, así que asegúrese de activarla para deshacerse de los restos de los controladores defectuosos. Puede obtener controladores de las tarjetas gráficas más recientes de todos los proveedores principales aquí:

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx)
* [AMD Radeon](https://www.amd.com/support)
* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)

Si tiene un antivirus instalado (no se aplica a Windows Defender), asegúrese de establecer una excepción para Wallpaper Engine en los ajustes de este. A veces es necesario volver a instalar Wallpaper Engine en caso de que el antivirus haya bloqueado ciertos archivos de forma permanente.

Intente comprobar los archivos de Wallpaper Engine a través de Steam para asegurarse de que no estén corruptos:

* [Steam Support: Verificar la integridad de los archivos del juego](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

## Wallpaper Engine se ha colgado por culpa de otro programa

### KERNELBASE.dll / ntdll.dll

Se trata de un error que se produce en el propio kernel de Windows que se debe a los antivirus o a los controladores dañados de las tarjetas gráficas. Lea la guía de solución rápida para obtener más información. También puede ocurrir si los componentes del sistema están dañados. Use la herramienta de Comprobación de archivos del sistema de Microsoft para reparar los archivos dañados de Windows:

* [Comprobación de archivos del sistema de Microsoft](https://support.microsoft.com/en-us/help/929833/use-the-system-file-checker-tool-to-repair-missing-or-corrupted-system)

### d3d11.dll

Se trata de un error que se produce en DirectX que se debe a los antivirus o a los controladores dañados de las tarjetas gráficas. Lea la guía de solución rápida para obtener más información. También puede ocurrir si los componentes del sistema están dañados. Use la herramienta de Comprobación de archivos del sistema de Microsoft para reparar los archivos dañados de Windows:

* [Comprobación de archivos del sistema de Microsoft](https://support.microsoft.com/en-us/help/929833/use-the-system-file-checker-tool-to-repair-missing-or-corrupted-system)

### mfplat.dll

Se trata de un error en Windows Media Foundation que puede deberse a los controladores dañados de la tarjeta gráfica, pero es más común que suceda por culpa de codecs de vídeo dañados o no encontrados. Follow the fixes from our video fix guide to fix these types of crashes:

[Click here](/noshow/notplaying.html)

### AudioSes.dll

This crash usually happens due to an issue in Windows itself. Try to re-install the latest version of your sound card drivers as this may fix the problem. You can also fix these crashes by changing the *Other application playing audio* option in the *Performance* tab of the Wallpaper Engine settings to *Keep running*.

### atiumdag.dll / atiumd64.dll

* [AMD Radeon](https://www.amd.com/support)

::: tip Please note Make sure to select the "Perform clean re-installation" checkbox during setup or manually uninstall your current drivers first. If your current drivers are broken, it's important to fully clear them first. :::

### nvwgf2umx.dll

The Nvidia drivers on your system are crashing. Go to the Nvidia website, download the latest drivers from there and install them:

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx)

::: tip Please note Make sure to select the "Perform clean re-installation" checkbox during setup or manually uninstall your current drivers first. If your current drivers are broken, it's important to fully clear them first. :::

### igdumd64.dll / igd10umd64.dll / igdumdx32.dll / igd10umd32.dll

The Intel graphics drivers on your system are crashing. Go to the Intel website, download the latest drivers from there and install them:

* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)


### MMDEvAPI.dll

This type of crash occurs to due broken audio software installed on your system. This is usually caused by "sound enhancement" software, especially the ones pre-installed on various notebooks. This type of software will often cause crashes because they interact with Windows in a buggy way, try and look for "Sonic Studio" or "Nahimic" and update them. If you cannot find an update for these programs, you can also uninstall them as they are not necessary for your computer audio to function properly.

### fraps32.dll

The crash has been caused by the FPS monitor and screen recording app Fraps. Fraps has not received updates since 2013 and is a heavily outdated application. Please use an alternative to Fraps as this is a Fraps bug which may never be fixed as the software is abandoned.

## Crash error 0xc000007b

This means that a Windows module has been corrupted by something on your system - usually DirectX itself is broken in this case. Try manually deleting these files:

* C:\Windows\SysWOW64\d3dx9_43.dll
* C:\Windows\System32\d3dx9_43.dll

Now install them again with the DirectX 9 installer: *C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\_CommonRedist\DirectX\Jun2010\dxsetup.exe* (The exact location depends on where your wallpaper_engine installation directory is).

If you still get this error it might be another, similar DirectX module that has been broken by something. This usually indicates a bigger underlying issues with your Windows installation which you need to fix before you can run Wallpaper Engine.

## Crashing after Hibernation / Sleep

If Wallpaper Engine crashes after Windows hibernation, then Windows is failing to correctly restore your graphics card drivers and Wallpaper Engine together. Hibernation in Windows is simply not a reliable process. You can enable the option **Safe start after hibernation** in Wallpaper Engine to mitigate this issue. This option will attempt to automatically restart Wallpaper Engine instead of expecting Windows to correctly work after hibernation.