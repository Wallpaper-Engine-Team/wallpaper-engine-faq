---
tags:
  - programa
  - normas
  - excepción
  - lista blanca
  - lista negra
  - ralentiza
  - lento
  - juego
  - rendimiento
  - fps
  - colgarse
  - sonido
  - audio
  - intermitente
---

# Solucionar problemas con ciertos programas o juegos

Si tienes algún problema con programas o juegos específicos, puedes configurar Wallpaper Engine para que se comporte de una forma concreta cuando detecta que abres el programa con el que tienes problemas o cuando este reproduce audio.

## Establecer una regla de aplicación

En la pestaña *Rendimiento* de Wallpaper Engine puedes hacer clic en el botón *Editar* que está junto a *Reglas de la aplicación* para ver la información de las reglas que has establecido. Si haces clic en *Crear nueva regla* podrás hacer que Wallpaper Engine se comporte de una forma concreta con un programa específico.

![Resumen de las reglas de aplicación](./applicationrule.gif)

Verás una lista de todos los .exe que están activos en el equipo. Elige un .exe de la lista o escribe el nombre exacto del .exe con el que tienes problemas. Puedes configurar la condición y el comportamiento con las otras dos opciones. Abajo verás más información y ejemplos concretos.

::: tip Wallpaper Engine solo reconoce el nombre exacto del .exe y la ubicación es irrelevante, por lo que puedes escribir el nombre de cualquier .exe en el campo *Nombre de la aplicación*. Asegúrate de que escribes el nombre del .exe exactamente igual, mayúsculas y minúsculas incluidas. :::

### Solucionar problemas de rendimiento con aplicaciones o juegos

Selecciona el .exe del programa con el que quieres hacer una regla especial o escribe el nombre en el campo **Nombre de la aplicación**. Luego cambia la **Condición** a **Se está ejecutando** y **Reproducción de fondos** a **Detener (liberar memoria)**. Esto significa que Wallpaper Engine se deshará de todos los fondos de escritorio de la memoria cuando se abra el programa o el juego, por lo que se solucionará cualquier problema de compatibilidad.

### Solucionar problemas de sonido intermitente con herramientas de grabación en segundo plano

Selecciona el .exe del programa con el que quieres hacer una regla especial o escribe el nombre en el campo **Nombre de la aplicación**. Luego cambia la **Condición** a **Está reproduciendo audio** y **Reproducción de fondos** a **Seguir ejecutándose**. Esto significa que Wallpaper Engine no se silenciará cuando la aplicación en cuestión está reproduciendo o grabando audio. Windows no distingue entre reproducir o grabar audio y es por eso que Wallpaper Engine no deja de silenciarse y volver a activar el sonido si lo graba. Muchas aplicaciones de retransmisión de juegos pueden hacerlo por accidente sin que te des cuenta.

### Otros comportamientos

Comprueba todas las condiciones posibles y las opciones de reproducción de fondos para ver más tipos de reglas de aplicación. También puedes configurar Wallpaper Engine para que se silencie o se pause cuando abras una aplicación en concreto.

::: tip Puedes cambiar la configuración de todas las aplicaciones en la pestaña de **Rendimiento** en la configuración de Wallpaper Engine. Si tienes problemas de rendimiento con varios juegos, por ejemplo, podrías cambiar la opción **Otra aplicación en pantalla completa** a **Detener (liberar memoria)** para que Wallpaper Engine se detenga cuando abras un juego o aplicación en pantalla completa. :::
