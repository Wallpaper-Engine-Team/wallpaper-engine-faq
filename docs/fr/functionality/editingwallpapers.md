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

Vous aurez toujours besoin d'un fichier project.json valide. Pour cela, créez un nouveau fond d'écran vierge dans l'éditeur, fermez Wallpaper Engine et décompressez le fond d'écran téléchargé et en copiez son contenu dans le nouveau répertoire du projet.

Si vous souhaitez modifier l'un de vos propres fonds d'écran, mais que vous avez perdu les fichiers du projet, consultez la section *Mettre à jour un projet perdu* ci-dessous pour plus d'informations sur les modifications que vous pouvez apporter au fichier projet.json pour mettre à jour vos fonds d'écran existants.

::: warning Attention Nous ne pouvons vous garantir que cet outil fonctionne correctement et nous ne pourrons pas vous aider si besoin. Si vous rencontrez un problème avec cet outil, contactez ses créateurs. :::

### Fond d'écran Web

Les fonds d'écran Web sont en HTML et sont basés sur JavaScript. Vous pouvez accéder aux fichiers sources comme décrit dans la section ci-dessus et utiliser ces fichiers comme base pour votre propre fond d'écran Web.

### Fond d'écran vidéo

Ces fonds d'écran sont des fichiers vidéo. You can find the video file as described in the section above and then use a third-party video editing application of your choice to modify the video.

### Application wallpapers

Generally, application wallpapers cannot be edited. Application wallpapers are usually compiled programs which means you do not have access to the source code. If you really want to change application-based wallpapers, try contacting the author of the wallpaper and see if they are willing to help.

## Mettre un jour un projet perdu

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
