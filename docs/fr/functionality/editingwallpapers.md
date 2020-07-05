# Modifier un fond d'écran téléchargé

Généralement, Wallpaper Engine ne tolère pas la modification de fonds d'écran téléchargés. Cependant, il est possible de modifier les fonds d'écran en fonction de leur type (vous pouvez trouver le type sous l'image d'aperçu à droite) à l'aide d'applications extérieures.

N'oubliez pas de demander l'autorisation des créateurs des fonds d'écran avant de republier leur travail. En cas de doute, contactez toujours les auteurs avant de publier quoique ce soit sur le Workshop de Steam.

[[toc]]

## Comment trouver les fichiers sources d'un fond d'écran ?

Faites un clic droit sur un fond d'écran dans l'onglet "Installés" et sélectionnez "Ouvrir dans l'explorateur de fichiers".

## Comment modifier des fonds d'écran

### Scènes

Les scènes sont contenues dans un fichier .pkg qui n'est pas modifiable, car il vous manquera toutes les données liées à ce projet. Essayer d'ouvrir un fichier .pkg vous donnera le message d'erreur suivant : "Les wallpapers empaquetés ne peuvent être ouverts". C'est comme les images en .jpg : les données Photoshop n'y sont pas attachées et restent dans le système de leur auteur.

#### Outil de décompression des scènes

Les membres de la communauté ont créé un outil de décompression de fond d'écran non officiel, qui vous permettra de décompresser les fichiers de scène et de les utiliser comme point de départ pour vos propres fonds d'écran. Voici le lien (en anglais) pour plus d'informations :

* [https://wetranslate.thiscould.work/scene.pkg/](https://wetranslate.thiscould.work/scene.pkg/)

Vous aurez toujours besoin d'un fichier project.json valide. Pour cela, créez un nouveau fond d'écran vierge dans l'éditeur, fermez Wallpaper Engine et décompressez le fond d'écran téléchargé et copiez son contenu dans le nouveau répertoire du projet.

Si vous souhaitez modifier l'un de vos propres fonds d'écran, mais que vous avez perdu les fichiers du projet, consultez la section *Mettre à jour un projet perdu* ci-dessous pour plus d'informations sur les modifications que vous pouvez apporter au fichier projet.json pour mettre à jour vos fonds d'écran existants.

::: warning Attention Nous ne pouvons vous garantir que cet outil fonctionne correctement et nous ne pourrons pas vous aider si besoin. Si vous rencontrez un problème avec cet outil, contactez ses créateurs. :::

### Fond d'écran Web

Les fonds d'écran Web sont en HTML et sont basés sur JavaScript. Vous pouvez accéder aux fichiers sources comme décrits dans la section ci-dessus et utiliser ces fichiers comme base pour votre propre fond d'écran Web.

### Fond d'écran vidéo

Ces fonds d'écran sont des fichiers vidéo. Vous pouvez trouver le fichier vidéo comme décrit dans la section ci-dessus, puis utiliser une application de montage de votre choix pour modifier la vidéo.

### Fond d'écran d'application

Ces fonds d'écran peuvent rarement être modifiés. Les fonds d'écran d'application sont généralement des programmes compilés, ce qui signifie que vous n'avez pas accès au code source. Contactez l'auteur de ces fonds d'écran. Ils accepteront peut-être de vous aider.

## Mettre à jour un projet perdu

Si vous avez supprimé votre projet, vous pouvez toujours le remplacer. Mais selon le type de fond d'écran que vous avez publié, vous ne pourrez peut-être plus le modifier. Créez un nouveau fond d'écran et ouvrez le dossier du projet avec Modifier > Ouvrir dans l'explorateur de fichiers. Ouvrez `project.json` avec un éditeur de texte. Vous obtiendrez quelque chose comme :

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
    "tags" : [ "Relaxant" ],
    "title" : "Titre de votre fond d'écran",
    "type" : "scene",
    "visibility" : "private"
}
```

Ajoutez cette ligne juste après `{` :

```json
    "workshopid" : "12345678",
```
Pour obtenir ceci :

```json{2}
{
    "workshopid" : "12345678",
    "description" : "Description sympa du projet",
    "file" : "scene.json",
    [...]
```

**Remplacez 12345678 par l'ID de votre projet ! Vous trouverez l'ID dans l'URL de votre projet en ligne :**

![https://steamcommunity.com/sharedfiles/filedetails/?id=12345678](./workshopid.png)
