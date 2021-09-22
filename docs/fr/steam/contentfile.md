# "Verrouillage des fichiers de contenu" / Erreur d'écriture de disque

Si Steam ne parvient pas à télécharger Wallpaper Engine lors de l'installation ou d'une mise à jour de l'application, il est possible que votre antivirus supprime des fichiers, les mette en quarantaine ou bloque des répertoires entiers sur votre ordinateur sans vous en informer. Vous obtiendrez des erreurs comme "verrouillage des fichiers de contenu" ou "accès refusé" sur Steam. Ce problème doit être résolu avec votre antivirus en annulant les modifications apportées à votre PC. La plupart des programmes antivirus ont une section quarantaine à partir de laquelle vous pouvez restaurer des fichiers ou créer une liste blanche. Assurez-vous que votre antivirus ne prenne pas en compte les dossiers suivants :

* `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine`
* `C:\Program Files (x86)\Steam\steamapps\workshop\downloads`
* `C:\Program Files (x86)\Steam\steamapps\downloading`

*Si Steam ou Wallpaper Engine sont installés ailleurs, le début du chemin de ce fichier sera différent, mais la fin restera toujours la même.*

Si vous avez configuré votre application antivirus pour qu'elle ignore ces répertoires mais que le problème persiste, il est parfois nécessaire de désinstaller Wallpaper Engine par le biais de Steam, puis de supprimer manuellement les restes du répertoire `wallpaper_engine` pour effacer tout verrouillage antivirus qui pourrait continuer à empêcher Steam de télécharger des fichiers. Après avoir supprimé l'intégralité du dossier `wallpaper_engine`, essayez de réinstaller à nouveau l'application via Steam.