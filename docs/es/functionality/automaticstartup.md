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

Si utiliza la opción *prioridad alta*, desactívela para hacer un inicio automático al arrancar *normal*. Tal y como se explicó con anterioridad, el modo de prioridad alta es menos fiable por muchas razones, a pesar de iniciarse rápido, porque a veces se ve bloqueado por los antivirus.

Si usa la opción de prioridad normal y la aplicación no se inicia a la vez que Windows, intente cambiarlo a prioridad alta para ver si se soluciona el problema.

Si no le funcionan ninguna de las dos opciones, compruebe el antivirus que tiene instalado en el equipo. Algunos antivirus y firewall tienden a bloquear Wallpaper Engine para que no se inicie cuando enciende el equipo. Es probable que su antivirus tenga una «lista blanca» que le permite ignorar ciertas carpetas y aplicaciones. Ponga en la lista el directorio de instalación wallpaper_engine y todos sus ejecutables.

Es atípico, pero si ha configurado (o lo ha hecho una aplicación de su equipo) los archivos .exe de Wallpaper Engine para ejecutarlos como administrador, el programa no puede iniciarse de forma automática, por lo que tendrá que cambiar dicha configuración y deshabilitar y habilitar el inicio automático.

Si no funciona el inicio automático no funciona, la respuesta siempre está relacionada con un antivirus demasiado extremista. Si tiene instalados un antivirus o un firewall, compruebe la configuración y los niveles de seguridad que tienen.

## Wallpaper Engine se inicia a la vez que Windows, pero (algunos) fondos no aparecen

 Compruebe si puede ver el icono de Wallpaper Engine en el área de notificación junto al reloj en cuanto encienda el equipo. If the icon is there after your system starts but either some or none of your monitors have their respective wallpapers shown, there is a problem with your graphics card drivers. Essentially, your graphics card drivers keep assigning your monitors new identifiers which leads Wallpaper Engine to believe that you are trying to configure a new monitor. You can fix this by changing the *"Monitor identification"* option in the *General* tab of the Wallpaper Engine settings to *Layout* or *GDI*. We also recommend that you do a clean re-installation of your graphics card drivers in this case, as it's an indicator for an underlying problem with your Windows installation.

 ## Wallpaper Engine assigns wrong wallpapers at system start-up

 This is the same problem as in the previous section, if you have multiple monitors and the wallpapers are being assigned to the wrong monitor at start-up, try changing the *Monitor identification* option in the *General* tab of the Wallpaper Engine settings to *Layout* or *GDI*.