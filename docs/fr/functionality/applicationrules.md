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

![Règles d'application](./applicationrule.gif)

Vous verrez alors une liste de tous les .exe en cours d'exécution sur votre système. Sélectionnez un .exe de cette liste ou entrez le nom du .exe qui vous pose des problèmes. Vous pouvez ainsi configurer le comportement avec ces deux autres options. Voir plus bas pour plus d'informations.

::: tip Wallpaper Engine ne prend en compte que le nom du fichier .exe, son emplacement n'est pas pris en compte lorsque vous entrez son nom dans *Nom de l'application*. Vous devez juste vous assurer de respecter les majuscules et les minuscules. :::

### Problèmes de performances avec les applications et les jeux

Sélectionnez le .exe du programme pour lequel vous souhaitez avoir une règle spéciale dans cette liste ou saisissez-le dans le champ **Nom de l'application**. Choisissez **En cours d'exécution** pour **Condition** et **Stop (libère la mémoire)** pour **Lecture du fond d'écran**. Wallpaper Engine supprimera complètement tous les fonds d'écran de la mémoire lorsque l'application ou le jeu est lancé : les problèmes de compatibilité seront donc résolus.

### Problème de son intermittent avec des outils d'enregistrement d'arrière-plan

Sélectionnez le .exe du programme pour lequel vous souhaitez avoir une règle spéciale dans cette liste ou saisissez-le dans le champ **Nom de l'application**. Choisissez **Lit un fichier audio** pour **Condition** et **Continuer d'éxecuter** pour **Lecture du fond d'écran**. Wallpaper Engine ne coupera plus le son lorsque l'application choisie lit ou enregistre un fichier audio. Windows ne fait pas de différence entre la lecture ou l'enregistrement audio, c'est pourquoi Wallpaper Engine coupera le son si vous enregistrez. Beaucoup d'applications de streaming peuvent provoquer ce problème intentionnellement.

### Autres comportements

Jetez un œil à toutes les conditions et les options de lecture de fond d'écran possibles pour mieux comprendre les règles d'application. Vous pouvez paramétrer Wallpaper Engine pour qu'il coupe le son lorsque vous lancez des certaines applications.

::: tip Vous pouvez changer ces options pour toutes les applications dans l'onglet **Performances** des paramètres de Wallpaper Engine. Si vous rencontrez des problèmes de performances dans plusieurs jeux, il peut être judicieux de remplacer simplement l'option **Autres applications en plein écran** par **Stop (libère la mémoire)** pour que Wallpaper Engine s'arrête lorsque vous lancez un jeu ou une application en plein écran. :::
