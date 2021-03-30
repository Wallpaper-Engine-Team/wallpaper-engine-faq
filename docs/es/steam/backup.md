# Copia de seguridad de Steam Workshop

Si los fondos se borran de Steam por algún motivo, también desaparecerán del equipo. Wallpaper Engine no puede impedirlo, pero si te preocupa, puedes hacer una copia de seguridad de los fondos.

Además, hay quejas de que, en ocasiones, Steam decide volver a descargar todos los archivos de Workshop, cosa que puede ser una molestia si tienes muchísimos GB. Si creas una copia de seguridad para desvincularlo de Steam puedes solucionarlo si te ocurre muy a menudo.

# Crear una copia de seguridad

Esta guía da por supuesto que Steam y Wallpaper Engine están instalados en «C:\Program Files (x86)\Steam\». Si tienes instalado Steam o Wallpaper Engine en otra ubicación, compruébalas.

::: tip
**431960** es la ID de Steam de Wallpaper Engine y Steam usa ese directorio para todas las descargas de Wallpaper Engine.
:::

1. Localiza la carpeta en la que Steam guarda los fondos. Por defecto los guarda en `C:\Program Files (x86)\Steam\steamapps\workshop\content\431960`
2. Copia la carpeta 431960 en la ruta de instalación de Wallpaper Engine: `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\projects\431960`.
3. **Cambia el nombre** de la carpeta `431960` a `backup` para que la ubicación quede así: `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\projects\backup`.
4. The `backup` directory now includes all your previously downloaded wallpapers, each in their own sub-directory (the numbers represent the Steam Workshop ID of the wallpaper)
5. Reinicia el buscador de fondos y podrás ver las copias de seguridad de los fondos. Ahora puedes quitar la suscripción de los duplicados de Steam y usar únicamente la copia personal.

::: warning
**No** borres la carpeta de Steam Workshop `C:\Program Files (x86)\Steam\steamapps\workshop\content\431960` de forma manual, ya que esto confundiría a Steam y volvería a descargar todos los fondos. Desuscríbete de los fondos y deja que Steam se encargue de borrar los duplicados.
:::