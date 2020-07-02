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

* [https://wetranslate.thiscould.work/scene.pkg/](https://wetranslate.thiscould.work/scene.pkg/)

You will still need to have a valid project.json file, you can create one by simply creating a new empty wallpaper in the editor, closing the Wallpaper Engine and then unpacking the downloaded wallpaper and copy-pasting its contents into the new project directory.

If you want to edit one of your own wallpapers that you have previously lost the project files for, see the *Updating a lost project* section below for more infos on what changes you need to make to the project.json so that you can push updates to your existing wallpapers.

::: warning Please note We do not provide official support for this tool and do not guarantee that it works correctly. If you have any problems with or questions about the unpacker, please get in touch with the original creators. :::

### Web wallpapers

Web-based wallpapers are HTML and JavaScript-based. You can go to the source files as described in the section above and use these files as a basis for your own web-based wallpaper.

### Video wallpapers

Video-based wallpapers are video files. You can find the video file as described in the section above and then use a third-party video editing application of your choice to modify the video.

### Application wallpapers

Generally, application wallpapers cannot be edited. Application wallpapers are usually compiled programs which means you do not have access to the source code. If you really want to change application-based wallpapers, try contacting the author of the wallpaper and see if they are willing to help.

## Updating a lost project

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
