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

::: tip Wallpaper Engine only cares about the exact .exe name, the location does not matter so you can just type any .exe into the *Application name* field. Just make sure the .exe name matches exactly, including uppercase and lowercase letters. :::

### Fixing performance problems with apps or games

Select the .exe of the program you want to have a special rule for from the list or type it into the **Application name** field. Afterwards, set **Condition** to **Is running** and **Wallpaper playback** to **Stop (free memory)**. This means Wallpaper Engine will completely remove all wallpapers from memory when the application or game is launched, which means any compatibility issues will be resolved.

### Fixing intermittent sound with background recording tools

Select the .exe of the program you want to have a special rule for from the list or type it into the **Application name** field. Afterwards, set **Condition** to **Is playing audio** and **Wallpaper playback** to **Keep running**. This means Wallpaper Engine will not mute itself when the application in question is playing or recording audio. Windows does not differentiate between playing or recording audio, this is why Wallpaper Engine will constantly mute and unmute itself if you are recording it. Many game streaming applications can do this by accident and without your knowledge.

### Other behavior

Check out all possible conditions and wallpaper playback options for more types of application rules. You can also configure Wallpaper Engine to mute or pause when you launch a certain application.

::: tip You can also change these settings for all applications in the **Performance** tab of the Wallpaper Engine settings. If you are having performance issues in multiple games, for example, it may make sense to just change the **Other applications fullscreen** option to **Stop (free memory)** so that Wallpaper Engine will turn itself off when you launch any game or fullscreen application. :::