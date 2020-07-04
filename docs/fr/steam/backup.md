# Sauvegarde du Workshop

Lorsqu'un fond d'écran est supprimé de Steam pour une raison ou pour une autre, Steam le supprimera également de votre PC. Wallpaper Engine ne peut rien faire. Si vous avez peur que cela arrive, vous pouvez enregistrer vos fonds d'écran.

Il est aussi possible que Steam décide soudainement de télécharger de nouveau tous les fichiers du Workshop, ce qui peut être gênant si vous y avez téléchargé plusieurs gigaoctets de données. Créer une sauvegarde pour ne plus dépendre de Steam est alors une bonne solution.

# Créer une sauvegarde

Le guide va partir du principe que Steam et Wallpaper Engine sont installés dans "C:\Program Files (x86)\Steam\". Si vous avez choisi une autre destinaton, adaptez ce guide en conséquence.

1. Recherchez le dossier dans lequel Steam stocke vos fonds d'écran. Par défaut, il s'agit de `C:\Program Files (x86)\Steam\steamapps\workshop\content\431960` ::: tip **431960** est l'ID de Wallpaper Engine. Steam utilise donc ce répertoire pour tous les téléchargements de Wallpaper Engine. :::
2. Copier le dossier 431960 ici : `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\projects\431960`
3. **Renommer** le fichier `431960` en `backup` pour que le chemin du fichier ressemble à ceci : `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\projects\backup`
4. Ce dossier de `sauvegarde` inclut tous vos fonds d'écran téléchargés précédemment. Chacun a son propre sous-dossier (les numéros représentent leur identifiant Workshop)
5. Redémarrez le navigateur des fonds d'écran et vous devriez voir tous les sauvegardes des fonds d'écran. Vous pouvez vous désabonner des fonds d'écran sauvegardés et utiliser votre copie

::: warning Ne supprimer **jamais** manuellement le dossier `C:\Program Files (x86)\Steam\steamapps\workshop\content\431960`. Steam risque de télécharger de nouveau tous les fonds d'écran. Désabonnez-vous simplement des vos fonds d'écran et laissez Steam supprimer lui-même les fichiers en double. :::