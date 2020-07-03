# Modifier un fond d'écran téléchargé

Généralement, Wallpaper Engine ne tolère pas la modification de fonds d'écran téléchargés. Cependant, il est possible de modifier les fonds d'écran en fonction de leur type (vous pouvez trouver le type sous l'image d'aperçu à droite) à l'aide d'applications extérieures.

N'oubliez pas de demander l'autorisation des créateurs des fonds d'écran avant de republier leur travail. En cas de doute, contactez toujours les auteurs avant de publier quoique ce soit sur le Workshop de Steam.

[[toc]]

## Comment trouver les fichiers sources d'un fond d'écran ?

Faites un clic droit sur un fond d'écran dans l'onglet "Installé" et sélectionner "Ouvrir dans l'explorateur de fichiers".

## Comment modifier des fonds d'écran

### Scènes

Les scènes sont contenues dans un fichier .pkg qui n'est pas modifiable, car il vous manquera toutes les données liées à ce projet. Essayer d'ouvrir un fichier .pkg vous donnera le message d'erreur suivant : "Les wallpapers empaquetés ne peuvent être ouverts". C'est comme les images en .jpg : les données Photoshop n'y sont pas attachées et restent dans le système de leur auteur.

#### Outil de décompression des scènes

Les membres de la communauté ont créé un outil de décompression de fond d'écran non officiel, qui vous permettra de décompresser les fichiers de scène et de les utiliser comme point de départ pour vos propres fonds d'écran. Voici le lien (en anglais) pour plus d'informations :

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
