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

Si tiene algún problema con programas o juegos específicos, puede configurar Wallpaper Engine para que se comporte de una forma concreta cuando detecta que abre el programa con el que tiene problemas o cuando este reproduce audio.

## Establecer una regla de aplicación

En la pestaña *Rendimiento* de Wallpaper Engine puede hacer clic en el botón *Editar* que está junto a *Reglas de la aplicación* para la información de las reglas que ha establecido. Si hace clic en *Crear nueva regla* podrá hacer que Wallpaper Engine se comporte de una forma concreta con un programa específico.

![Application Rules Overview](./applicationrule.gif)

Verá una lista de todos los .exe que están activos en su equipo. Elija un .exe de la lista o escriba el nombre exacto del .exe con el que tiene problemas. Puede configurar la condición y el comportamiento con las otras dos opciones. Abajo verá más información y ejemplos concretos.

::: consejo Wallpaper Engine solo reconoce el nombre exacto del .exe y la ubicación es irrelevante, por lo que puede escribir el nombre de cualquier .exe en el campo *Nombre de la aplicación*. Asegúrese de que escribe el nombre del .exe exactamente igual, mayúsculas y minúsculas incluidas. :::

### Solucionar problemas de rendimiento con aplicaciones o juegos

Seleccione el .exe del programa con el que quiere hacer una regla especial o escriba el nombre en el campo **Nombre de la aplicación**. Luego cambie la **Condición** a **Se está ejecutando** y **Reproducción de fondos** a **Detener (liberar memoria)**. Esto significa que Wallpaper Engine se deshará de todos los fondos de escritorio de la memoria cuando se abra el programa o el juego, por lo que se solucionará cualquier problema de compatibilidad.

### Solucionar problemas de sonido intermitente con herramientas de grabación en segundo plano

Seleccione el .exe del programa con el que quiere hacer una regla especial o escriba el nombre en el campo **Nombre de la aplicación**. Luego cambie la **Condición** a **Está reproduciendo audio** y **Reproducción de fondos** a **Seguir ejecutándose**. Esto significa que Wallpaper Engine no se silenciará cuando la aplicación en cuestión está reproduciendo o grabando audio. Windows does not differentiate between playing or recording audio, this is why Wallpaper Engine will constantly mute and unmute itself if you are recording it. Many game streaming applications can do this by accident and without your knowledge.

### Other behavior

Check out all possible conditions and wallpaper playback options for more types of application rules. You can also configure Wallpaper Engine to mute or pause when you launch a certain application.

::: tip You can also change these settings for all applications in the **Performance** tab of the Wallpaper Engine settings. If you are having performance issues in multiple games, for example, it may make sense to just change the **Other applications fullscreen** option to **Stop (free memory)** so that Wallpaper Engine will turn itself off when you launch any game or fullscreen application. :::