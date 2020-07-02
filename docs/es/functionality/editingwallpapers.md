# Editar fondos de pantalla descargados

Por lo general, Wallpaper Engine no permite editar los fondos de pantalla descargados. Sin embargo, es posible editarlos dependiendo del tipo (podrá ver de qué tipo son a la derecha en la imagen de vista previa) con la ayuda de aplicaciones de terceros.

Tenga en cuenta que es posible que necesite el permiso del autor o autora original para publicar su trabajo. Si tiene alguna duda, póngase en contacto con el autor o autora original antes de publicarlo en Steam Workshop.

[[toc]]

## ¿Cómo encuentro los archivos de origen de un fondo de pantalla?

Haga clic derecho en un fondo de pantalla y seleccione la opción «Abrir en el explorador» en la pestaña «Instalados».

## Cómo editar fondos de pantalla de varios tipos

### Fondos de escena

Los fondos de escena se comprimen en un archivo .pkg que no se puede editar porque le faltan todos los archivos del proyecto. Si intenta abrir un archivo .pkg, le aparecerá el error «Los fondos empacados no se pueden abrir». Podríamos hacer una analogía simple: las imágenes .jpeg no cuentan con los datos del proyecto de Photoshop, ya que permanecen en el equipo del autor original.

#### Descompresor de escenas no oficial de la comunidad

Sin embargo, los miembros de la comunidad han creado una herramienta no oficial para descomprimir fondos de pantalla de escena, lo que le permite extraer los archivos de escena y usarlos como base para sus propios fondos. Visite esta página web para obtener más información:

* [https://wetranslate.thiscould.work/scene.pkg](https://wetranslate.thiscould.work/scene.pkg/)

Necesitará un archivo project.json válido. Si quiere crear uno, cree un fondo de pantalla vacío en el editor, cierre Wallpaper Engine y descomprima el fondo de pantalla descargado y pegue los contenidos en el directorio del proyecto nuevo.

Si quiere editar uno de sus propios fondos y ha perdido los archivos del proyecto, diríjase a la sección *Actualizar un proyecto perdido* para obtener más información sobre los cambios que ha de hacer en el archivo project.json para actualizar sus fondos de pantalla.

::: advertencia Tenga en cuenta de que no prestamos asistencia para esta herramienta y no garantizamos que funcione correctamente. Si tiene problemas o preguntas acerca de ella, póngase en contacto con los creadores. :::

### Fondos de web

Los fondos de web están basados en HTML y JavaScript. Puede acceder a los archivos de origen tal y como se explica en la sección superior y usar los archivos como la base de su propio fondo de web.

### Fondos de vídeo

Los fondos de vídeo son archivos de vídeo. Puede encontrar el archivo tal y como se explica en la sección superior y después usar una aplicación de edición de vídeo de terceros para modificar el vídeo en cuestión.

### Fondos de aplicación

Por lo general, los fondos de aplicación no se pueden modificar. Como son suelen ser programas compilados, no puede acceder al código fuente. Si desea cambiar fondos de aplicación, intente contactar con el autor de dicho fondo por si quisiera colaborar.

## Actualizar un proyecto perdido

If you deleted your project you can still overwrite it, but depending on the type of wallpaper you published, you may not be able to edit it anymore. Create a new wallpaper as usual and open its project directory with Edit -> Open in Explorer. Open the `project.json` file with a text editor, it will look something like this:

```json
{
    "description" : "Cool description",
    "file" : "scene.json",
    "general" : 
    {
        "properties" : 
        {
            "schemecolor" : 
            {
                "order" : 0,
                "text" : "ui_browse_properties_scheme_color",
                "type" : "color",
                "value" : "0.7647058823529411 0.3764705882352941 0.07450980392156863"
            }
        }
    },
    "preview" : "preview.jpg",
    "tags" : [ "Relaxing" ],
    "title" : "Cool title of your wallpaper",
    "type" : "scene",
    "visibility" : "private"
}
```

Add this line at the top right after `{`:

```json
    "workshopid" : "12345678",
```
So that it looks like:

```json{2}
{
    "workshopid" : "12345678",
    "description" : "Cool description",
    "file" : "scene.json",
    [...]
```

**Replace the number 12345678 with the ID of your submission! You can find this ID in the URL of your existing upload:**

![https://steamcommunity.com/sharedfiles/filedetails/?id=12345678](./workshopid.png)
