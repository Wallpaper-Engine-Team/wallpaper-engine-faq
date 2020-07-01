---
tags:
  - inicio automático
  - iniciar
---

# Inicio automático al arrancar

Puede hacer que Wallpaper Engine se inicie cuando encienda el ordenador si va a la pestaña «General» de la configuración de Wallpaper Engine. Puede activar el inicio automático al arrancar en la parte superior, lo que abrirá la aplicación en segundo plano cuando encienda el equipo.

## ¿Qué diferencia hay entre las opciones «prioridad alta» y «normal»?

Si elige la opción de prioridad alta, Wallpaper Engine se registrará como un servicio de Windows. Esto significa que Wallpaper Engine se abrirá antes que otros programas que tenga configurados para que se abran al inicio de Windows. Esto no afectará al rendimiento de la aplicación en otros aspectos.

El inconveniente de usar la opción de prioridad alta es que puede resultar menos fiable, ya que es posible que algunos antivirus bloqueen Wallpaper Engine para que no se inicie en este modo al identificarlo como un comportamiento malicioso.

## He activado el inicio automático, pero no funciona. ¿Qué hago?

If you are using the *high-priority* option, try to switch to *normal* automatic start-up by disabling the high-priority option. As explained above, high-priority mode starts quicker but is less reliable for various reasons, mainly because it is sometimes blocked by antivirus software.

If you are using normal-priority option and the app is not launching alongside Windows, try changing the option to high-priority and see if the problem goes away.

If neither the high-priority or normal-priority option work for you, check the antivirus software you have installed on your system. Some antivirus and firewall applications sometimes block Wallpaper Engine from automatically starting when your computer boots up. Your antivirus software likely has a "whitelist" feature which allows you to ignore certain folders or applications, make sure to whitelist the wallpaper_engine install directory and all executables in it.

Another rare cause can be that if you (or an application on your system) set the Wallpaper Engine .exe files to be run as admin only then it cannot automatically start either, you will need to remove the admin setting and toggle the automatic startup off and back on.

If the automatic startup does not work, the answer virtually always is somehow related to overzealous antivirus software. If you have antivirus or firewall applications installed, please double-check all their settings and security levels.

## Wallpaper Engine starts with Windows but (some) wallpapers are not shown

 Check if the Wallpaper Engine icon is visible in the Windows tray next to the clock after you start your computer. If the icon is there after your system starts but either some or none of your monitors have their respective wallpapers shown, there is a problem with your graphics card drivers. Essentially, your graphics card drivers keep assigning your monitors new identifiers which leads Wallpaper Engine to believe that you are trying to configure a new monitor. You can fix this by changing the *"Monitor identification"* option in the *General* tab of the Wallpaper Engine settings to *Layout* or *GDI*. We also recommend that you do a clean re-installation of your graphics card drivers in this case, as it's an indicator for an underlying problem with your Windows installation.

 ## Wallpaper Engine assigns wrong wallpapers at system start-up

 This is the same problem as in the previous section, if you have multiple monitors and the wallpapers are being assigned to the wrong monitor at start-up, try changing the *Monitor identification* option in the *General* tab of the Wallpaper Engine settings to *Layout* or *GDI*.