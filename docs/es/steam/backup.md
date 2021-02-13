# Copia de seguridad de Steam Workshop

Si los fondos se borran de Steam por algún motivo, también desaparecerán del equipo. Wallpaper Engine no puede impedirlo, pero si te preocupa, puedes hacer una copia de seguridad de los fondos.

Además, hay quejas de que, en ocasiones, Steam decide volver a descargar todos los archivos de Workshop, cosa que puede ser una molestia si tienes muchísimos GB. Si creas una copia de seguridad para desvincularlo de Steam puedes solucionarlo si te ocurre muy a menudo.

# Crear una copia de seguridad

Esta guía da por supuesto que Steam y Wallpaper Engine están instalados en «C:\Program Files (x86)\Steam\». Si tienes instalado Steam o Wallpaper Engine en otra ubicación, compruébalas.

::: tip
**431960** is the Steam ID of Wallpaper Engine, Steam uses this directory for all Wallpaper Engine downloads.
:::

1. Locate the folder in which Steam stores your wallpapers, by default it is in `C:\Program Files (x86)\Steam\steamapps\workshop\content\431960`
2. Copy the folder 431960 to Wallpaper Engine's installation path here: `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\projects\431960`
3. **Cambia el nombre** de la carpeta `431960` a `copia de seguridad` para que la ubicación quede así: `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\projects\copia de seguridad`.
4. El directorio `copia de seguridad` incluirá todos los fondos que ya has descargado, cada uno en su propio directorio (los números representan la ID de Steam Workshop del fondo).
5. Reinicia el buscador de fondos y podrás ver las copias de seguridad de los fondos. Ahora puedes quitar la suscripción de los duplicados de Steam y usar únicamente la copia personal.

::: warning
Do **not** manually delete the Steam Workshop folder `C:\Program Files (x86)\Steam\steamapps\workshop\content\431960`. This will cause your Steam to be confused and re-download all wallpapers. Simply unsubscribe from your wallpapers and let Steam delete the duplicate files itself.
:::