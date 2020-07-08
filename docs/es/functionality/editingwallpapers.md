# Editar fondos de pantalla descargados

Por lo general, Wallpaper Engine no permite editar los fondos de pantalla descargados. Sin embargo, es posible editarlos dependiendo del tipo (podrás ver de qué tipo son a la derecha en la imagen de vista previa) con la ayuda de aplicaciones de terceros.

Ten en cuenta que es posible que necesites el permiso del autor o autora original para publicar su trabajo. Si tienes alguna duda, ponte en contacto con el autor o autora original antes de publicarlo en Steam Workshop.

[[toc]]

## ¿Cómo encuentro los archivos de origen de un fondo de pantalla?

Haz clic derecho en un fondo de pantalla y selecciona la opción «Abrir en el explorador» en la pestaña «Instalados».

## Cómo editar fondos de pantalla de varios tipos

### Fondos de escena

Los fondos de escena se comprimen en un archivo .pkg que no se puede editar porque le faltan todos los archivos del proyecto. Si intentas abrir un archivo .pkg, te aparecerá el error «Los fondos empacados no se pueden abrir». Podríamos hacer una analogía simple: las imágenes .jpeg no cuentan con los datos del proyecto de Photoshop, ya que permanecen en el equipo del autor original.

#### Descompresor de escenas no oficial de la comunidad

Sin embargo, los miembros de la comunidad han creado una herramienta no oficial para descomprimir fondos de pantalla de escena, lo que te permite extraer los archivos de escena y usarlos como base para tus propios fondos. Visita esta página web para obtener más información:

* [https://wetranslate.thiscould.work/scene.pkg](https://wetranslate.thiscould.work/scene.pkg/)

Necesitará un archivo project.json válido. Si quieres crear uno, crea un fondo de pantalla vacío en el editor, cierra Wallpaper Engine, descomprime el fondo de pantalla descargado y pega los contenidos en el directorio del proyecto nuevo.

Si quieres editar uno de tus propios fondos y has perdido los archivos del proyecto, dirígete a la sección *Actualizar un proyecto perdido* para obtener más información sobre los cambios que has de hacer en el archivo project.json para actualizar tus fondos de pantalla.

::: warning ¡Aviso! Ten en cuenta de que no prestamos asistencia para esta herramienta y no garantizamos que funcione correctamente. Si tienes problemas o preguntas acerca de ella, ponte en contacto con los creadores. :::

### Fondos de web

Los fondos de web están basados en HTML y JavaScript. Puedes acceder a los archivos de origen tal y como se explica en la sección superior y usar los archivos como la base de tu propio fondo de web.

### Fondos de vídeo

Los fondos de vídeo son archivos de vídeo. Puedes encontrar el archivo tal y como se explica en la sección superior y después usar una aplicación de edición de vídeo de terceros para modificar el vídeo en cuestión.

### Fondos de aplicación

Por lo general, los fondos de aplicación no se pueden modificar. Como suelen ser programas compilados, no puedes acceder al código fuente. Si deseas cambiar fondos de aplicación, intenta contactar con el autor de dicho fondo por si quisiera colaborar.

## Actualizar un proyecto perdido

Si has borrado un proyecto, aún puedes sobreescribirlo, pero es posible que no puedas editarlo dependiendo del tipo de fondo que hayas publicado. Crea un fondo nuevo de la forma habitual y abre el directorio del proyecto con Editar -> Abrir en el explorador. Abre el archivo `project.json` con un editor de texto y verás algo así:

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

Añade este código en la parte superior justo después de `{`:

```json
    "workshopid" : "12345678",
```
Tendrás que ver algo así:

```json{2}
{
    "workshopid" : "12345678",
    "description" : "Cool description",
    "file" : "scene.json",
    [...]
```

**Cambia el número 12345678 por la ID de tu proyecto. Encontrarás la ID en el enlace del fondo que has subido:**

![https://steamcommunity.com/sharedfiles/filedetails/?id=12345678](./workshopid.png)
