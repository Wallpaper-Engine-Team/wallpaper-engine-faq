# Copia de seguridad de Steam Workshop

Si los fondos se borran de Steam por algún motivo, también desaparecerán de su equipo. Wallpaper Engine no puede impedirlo, pero si le preocupa, puede hacer una copia de seguridad de los fondos.

Además, hay quejas de que, en ocasiones, Steam decide volver a descargar todos los archivos de Workshop, que puede ser una molestia si tiene muchísimos GB. Si crea una copia de seguridad para desvincularlo de Steam puede solucionarlo si le ocurre muy a menudo.

# Crear una copia de seguridad

Esta guía da por supuesto que Steam y Wallpaper Engine están instalados en «C:\Program Files (x86)\Steam\». Si tiene instalado Steam o Wallpaper Engine en otra ubicación, compruébelas.

1. Localice la carpeta en la que Steam guarda los fondos. Por defecto los guarda en `C:\Program Files (x86)\Steam\steamapps\workshop\content\431960` ::: consejo **431960** es la ID de Steam de Wallpaper Engine y Steam usa ese directorio para todas las descargas de Wallpaper Engine. :::
2. Copie la carpeta 431960 en la ruta de instalación de Wallpaper Engine: `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\projects\431960`.
3. **Cambia el nombre** de la carpeta `431960` a `copia de seguridad` para que la ubicación quede así: `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\projects\copia de seguridad`.
4. The `backup` directory now includes all your previously downloaded wallpapers, each in their own sub-directory (the numbers represent the Steam Workshop ID of the wallpaper)
5. Restart the wallpaper browser and you should see the backed up wallpapers now. You can now unsubscribe the duplicate Steam ones and only use your personal copy of them

::: warning Do **not** manually delete the Steam Workshop folder `C:\Program Files (x86)\Steam\steamapps\workshop\content\431960`. This will cause your Steam to be confused and re-download all wallpapers. Simply unsubscribe from your wallpapers and let Steam delete the duplicate files itself. :::