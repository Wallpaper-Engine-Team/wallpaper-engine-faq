---
tags:
  - inicio automático
  - iniciar
---

# Inicio automático al arrancar

Puedes hacer que Wallpaper Engine se inicie cuando enciendas el ordenador si vas a la pestaña «General» de la configuración de Wallpaper Engine. Puedes activar el inicio automático al arrancar en la parte superior, y así se abrirá la aplicación en segundo plano cuando enciendas el equipo.

## ¿Qué diferencia hay entre las opciones «prioridad alta» y «normal»?

Si eliges la opción de prioridad alta, Wallpaper Engine se registrará como un servicio de Windows. Esto significa que se abrirá antes que otros programas que tengas configurados para que se abran al inicio de Windows, pero no afectará al rendimiento de la aplicación en otros aspectos.

El inconveniente de usar la opción de prioridad alta es que puede resultar menos fiable, ya que es posible que algunos antivirus bloqueen Wallpaper Engine para que no se inicie en este modo al identificarlo como un comportamiento malicioso.

## He activado el inicio automático, pero no funciona. ¿Qué hago?

Si utilizas la opción *prioridad alta*, desactívala para hacer un inicio automático al arrancar *normal*. Tal y como se ha explicado anteriormente, el modo de prioridad alta es menos fiable por muchas razones, a pesar de iniciarse rápido, porque a veces se ve bloqueado por los antivirus.

Si usas la opción de prioridad normal y la aplicación no se inicia a la vez que Windows, intenta cambiarlo a prioridad alta para ver si se soluciona el problema.

Si no te funcionan ninguna de las dos opciones, comprueba el antivirus que tienes instalado en el equipo. Algunos antivirus y firewall tienden a bloquear Wallpaper Engine para que no se inicie cuando enciendes el equipo. Es probable que el antivirus tenga una «lista blanca» que te permite ignorar ciertas carpetas y aplicaciones, así que pon el directorio de instalación wallpaper_engine y todos sus ejecutables en la lista.

Es atípico, pero si has configurado (o lo ha hecho una aplicación de su equipo) los archivos .exe de Wallpaper Engine para ejecutarlos como administrador, el programa no podrá iniciarse de forma automática, por lo que tendrás que cambiar dicha configuración y deshabilitar y habilitar el inicio automático.

Si no funciona el inicio automático, la respuesta siempre está relacionada con un antivirus demasiado extremista. Si tienes instalados un antivirus o un firewall, comprueba la configuración y los niveles de seguridad que tienen.

## Wallpaper Engine se inicia a la vez que Windows, pero los fondos (o algunos) no aparecen

 Comprueba si puedes ver el icono de Wallpaper Engine en el área de notificación junto al reloj en cuanto enciendas el equipo. Si el icono aparece, pero alguno de los monitores (o ninguno) no muestra los fondos de pantalla correspondientes, es que tienes un problema con los controladores de la tarjeta gráfica. Básicamente, los controladores de la tarjeta gráfica asignan identificadores nuevos a los monitores, lo que hace que Wallpaper Engine crea que estás intentando configurar otro monitor. Puedes solucionar el problema si cambias la opción de *«Identificación del monitor»* en la pestaña *General* de Wallpaper Engine a *Layout* o *GDI*. También te recomendamos que vuelvas a instalar los controladores de la tarjeta gráfica desde cero, pues suele ser una señal de que hay algún problema con la instalación de Windows.

 ## Wallpaper Engine asigna fondos de pantalla erróneos al iniciar el equipo

 Se da el mismo problema que en la sección anterior. Si tienes más de un monitor y los fondos se asignan a uno incorrecto al iniciar el equipo, cambia la opción de *«Identificación del monitor»* en la pestaña *General* de Wallpaper Engine a *Layout* o *GDI*.