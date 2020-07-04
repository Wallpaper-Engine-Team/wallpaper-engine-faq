# Problèmes de performances / FPS faible avec certains jeux ou applications

Par défaut, Wallpaper Engine se met en pause lorsque vous jouez. Vous pouvez configurer cela dans l'onglet **Performances** des paramètres de Wallpaper Engine.

Si vous rencontrez des problèmes de performances avec des jeux ou des applications en particulier, vous paramétrez minutieusement cette option. A priori, votre système manque de RAM ou de RAM vidéo (la mémoire de votre carte graphique). Vous pouvez configurer Wallpaper Engine pour qu'il libère de la mémoire : passez l'option **Autres applications** en plein écran sur **Stop (libère la mémoire)** dans l'onglet **Performances** des paramètres de Wallpaper Engine.

## Règle de l'application

Si vous ne rencontrez que des problèmes avec un seul jeu ou un logiciel, vous pouvez configurer cette option uniquement pour le logiciel qui vous pose problème en créant une **règle d'application** :

1. Ouvrez l'onglet **Performances** des paramètres de Wallpaper Engine
2. Cliquez sur le bouton **Modifier** des **Règles d'application**
3. Dans la fenêtre qui s'affiche, cliquez sur **Créer un nouvelle règle**
4. Créez une nouvelle règle avec les paramètres suivants :
    * **Nom de l'application :** "jeu.exe" *(À remplacer par le nom du .exe de votre jeu)*
    * **Condition :** "En cours d'exécution"
    * **Lecture du fond d'écran :** "Stop (libère la mémoire)"
5. Confirmez cette action en cliquant sur **Créer**

Wallpaper Engine retirera tous les fonds d'écran de la mémoire quand le *.exe* que vous avez choisi sera lancé.

## Conflits avec des outils d'enregistrement ou des overlays

Si vous faites du streaming, si vous enregistrez un jeu ou un logicielen overlay, assurez-vous qu'ils n'enregistrent pas accidentellement Wallpaper Engine en arrière-plan. C'est peut-être le cas si vous utilisez des fonctionnalités de streaming à partir de vos pilotes de carte graphique (Nvidia ShadowPlay, Nvidia Share ou AMD ReLive par exemple).
