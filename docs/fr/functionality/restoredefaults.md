# Restaurer les paramètres par défaut

Si vous avez supprimé des fonds d'écran fournis avec Wallpaper Engine, vous pouvez les récupérer en supprimant un fichier de configuration dans le répertoire d'installation *wallpaper_engine* :

1. Fermez complètement Wallpaper Engine (clic droit sur l'icône dans la barre des tâches > "Quitter")

2. Dans le dossier de Wallpaper Engine, supprimez un fichier appelé "visibility.json". Par défaut, ce fichier se trouve ici :

* *C:\Program Files (x86)\Steam\SteamApps\common\wallpaper_engine\projects\defaultprojects\visibility.json*

Si Steam ou Wallpaper Engine sont installés ailleurs, le début du chemin de ce fichier sera différent, mais la fin restera toujours la même : *wallpaper_engine\projects\defaultprojects\visibility.json* .

3. Une fois le fichier supprimé, redémarrez Wallpaper Engine et les fonds d'écran seront de retour.

::: tip Si le fichier "visibility.json" reste introuvable, vous pouvez toujours réinstaller Wallpaper Engine. Cela restaurera bien tous les fonds d'écran par défaut, mais vous devrez télécharger de nouveau tous vos autres fonds d'écran. Pour éviter cette étape fastidieuse, nous vous conseillons plutôt la première solution. :::