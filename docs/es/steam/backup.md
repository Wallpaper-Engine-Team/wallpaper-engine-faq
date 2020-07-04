# Copia de seguridad de Steam Workshop

Si los fondos se borran de Steam por algún motivo, también desaparecerán de su equipo. Wallpaper Engine no puede impedirlo, pero si le preocupa, puede hacer una copia de seguridad de los fondos.

Además, hay quejas de que, en ocasiones, Steam decide volver a descargar todos los archivos de Workshop, que puede ser una molestia si tiene muchísimos GB. Si crea una copia de seguridad para desvincularlo de Steam puede solucionarlo si le ocurre muy a menudo.

# Crear una copia de seguridad

Esta guía da por supuesto que Steam y Wallpaper Engine están instalados en «C:\Program Files (x86)\Steam\». Si tiene instalado Steam o Wallpaper Engine en otra ubicación, compruébelas.

1. Localice la carpeta en la que Steam guarda los fondos. Por defecto los guarda en `C:\Program Files (x86)\Steam\steamapps\workshop\content\431960` ::: consejo **431960** es la ID de Steam de Wallpaper Engine y Steam usa ese directorio para todas las descargas de Wallpaper Engine. :::
2. Copie la carpeta 431960 en la ruta de instalación de Wallpaper Engine: `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\projects\431960`.
3. **Cambia el nombre** de la carpeta `431960` a `copia de seguridad` para que la ubicación quede así: `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\projects\copia de seguridad`.
4. El directorio `copia de seguridad` incluirá todos los fondos que ya ha descargado, cada uno en su propio directorio (los números representan la ID de Steam Workshop del fondo).
5. Reinicie el buscador de fondos y podrá ver las copias de seguridad de los fondos. Ahora puede quitar la suscripción de los duplicados de Steam y usar únicamente su copia personal.

::: advertencia **No** borre la carpeta de Steam Workshop `C:\Program Files (x86)\Steam\steamapps\workshop\content\431960` de forma manual, ya que esto confundiría a Steam y volvería a descargar todos los fondos. Desuscríbase de los fondos y deje que Steam se encargue de borrar los duplicados. :::