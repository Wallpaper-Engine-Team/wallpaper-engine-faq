# Restaurer les paramètres par défaut

Si vous avez supprimé des fonds d'écran fournis avec Wallpaper Engine, vous pouvez les récupérer en supprimant un fichier de configuration dans le répertoire d'installation *wallpaper_engine* :

1. Fermez complètement Wallpaper Engine (clic droit sur l'icône dans la barre des tâches > "Quitter")

2. Dans le dossier de Wallpaper Engine, supprimez un fichier appelé "visibility.json". Par défaut, ce fichier se trouve ici :

* *C:\Program Files (x86)\Steam\SteamApps\common\wallpaper_engine\projects\defaultprojects\visibility.json*

If your Steam or Wallpaper Engine are installed in a different place / directory, the directory will be slightly different, but *wallpaper_engine\projects\defaultprojects\visibility.json* sub-directory is always the same.

3. Once the file is deleted, start Wallpaper Engine again, you will have all default wallpapers back.

::: tip If you are unable to find the "visibility.json" file for some reason, you can also always just re-install Wallpaper Engine. This will also restore all default wallpapers but will require you to re-download all wallpapers which you can avoid by following the steps above. :::