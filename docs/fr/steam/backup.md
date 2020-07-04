# Sauvegarde du Workshop

Lorsqu'un fond d'écran est supprimé de Steam pour une raison ou pour une autre, Steam le supprimera également de votre PC. Wallpaper Engine ne peut rien faire. Si vous avez peur que cela arrive, vous pouvez enregistrer vos fonds d'écran.

Il est aussi possible que Steam décide soudainement de télécharger de nouveau tous les fichiers du Workshop, ce qui peut être gênant si vous y avez téléchargé plusieurs gigaoctets de données. Créer une sauvegarde pour ne plus dépendre de Steam est alors une bonne solution.

# Créer une sauvegarde

Le guide va partir du principe que Steam et Wallpaper Engine sont installés dans "C:\Program Files (x86)\Steam\". Si vous avez choisi une autre destinaton, adaptez ce guide en conséquence.

1. Recherchez le dossier dans lequel Steam stocke vos fonds d'écran. Par défaut, il s'agit de `C:\Program Files (x86)\Steam\steamapps\workshop\content\431960` ::: tip **431960** est l'ID de Wallpaper Engine. Steam utilise donc ce répertoire pour tous les téléchargements de Wallpaper Engine. :::
2. Copier le dossier 431960 ici : `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\projects\431960`
3. **Renommer** le fichier `431960` en `backup` pour que le chemin du fichier ressemble à ceci : `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\projects\backup`
4. The `backup` directory now includes all your previously downloaded wallpapers, each in their own sub-directory (the numbers represent the Steam Workshop ID of the wallpaper)
5. Restart the wallpaper browser and you should see the backed up wallpapers now. You can now unsubscribe the duplicate Steam ones and only use your personal copy of them

::: warning Do **not** manually delete the Steam Workshop folder `C:\Program Files (x86)\Steam\steamapps\workshop\content\431960`. This will cause your Steam to be confused and re-download all wallpapers. Simply unsubscribe from your wallpapers and let Steam delete the duplicate files itself. :::