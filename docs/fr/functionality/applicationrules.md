---
tags:
  - application
  - règles
  - exception
  - liste blanche
  - liste noire
  - ralentissement
  - ralenti
  - jeu
  - performances
  - fps
  - crash
  - son
  - audio
  - intermittent
---

# Résoudre des problèmes avec différents jeux ou applications

Si vous rencontrez des problèmes avec des applications ou des jeux, vous pouvez configurer Wallpaper Engine pour qu'il se comporte d'une certaine manière lorsqu'il détecte que l'application concernée est lancée ou lit de l'audio, par exemple.

## Configurer une règle d'application

Dans l'onglet *Performances* des paramètres de Wallpaper Engine, cliquez sur le bouton *Modifier* près des *Règles d'application*. Vous verrez alors toutes les règles actuelles. En cliquant sur *Créer une nouvelle règle*, vous pouvez choisir la façon dont Wallpaper Engine se comporte avec d'autres applications.

![Application Rules Overview](./applicationrule.gif)

Vous verrez alors une liste de tous les .exe en cours d'exécution sur votre système. Sélectionnez un .exe de cette liste ou entrez le nom du .exe qui vous pose des problèmes. Vous pouvez ainsi configurer le comportement avec ces deux autres options. Voir plus bas pour plus d'informations.

::: tip Wallpaper Engine ne prend en compte que le nom du fichier .exe, son emplacement n'est pas pris en compte lorsque vous entrez son nom dans *Nom de l'application*. Vous devez juste vous assurer de respecter les majuscules et les minuscules. :::

### Fixing performance problems with apps or games

Select the .exe of the program you want to have a special rule for from the list or type it into the **Application name** field. Afterwards, set **Condition** to **Is running** and **Wallpaper playback** to **Stop (free memory)**. This means Wallpaper Engine will completely remove all wallpapers from memory when the application or game is launched, which means any compatibility issues will be resolved.

### Fixing intermittent sound with background recording tools

Select the .exe of the program you want to have a special rule for from the list or type it into the **Application name** field. Afterwards, set **Condition** to **Is playing audio** and **Wallpaper playback** to **Keep running**. This means Wallpaper Engine will not mute itself when the application in question is playing or recording audio. Windows does not differentiate between playing or recording audio, this is why Wallpaper Engine will constantly mute and unmute itself if you are recording it. Many game streaming applications can do this by accident and without your knowledge.

### Other behavior

Check out all possible conditions and wallpaper playback options for more types of application rules. You can also configure Wallpaper Engine to mute or pause when you launch a certain application.

::: tip You can also change these settings for all applications in the **Performance** tab of the Wallpaper Engine settings. If you are having performance issues in multiple games, for example, it may make sense to just change the **Other application fullscreen** option to **Stop (free memory)** so that Wallpaper Engine will turn itself off when you launch any game or fullscreen application. :::
