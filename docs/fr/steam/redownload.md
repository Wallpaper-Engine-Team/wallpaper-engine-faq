---
tags:
  - téléchargement
  - retélécharger
  - supprimé
  - supprimer
---

# Télécharger de nouveau les fonds d'écran sur Steam

Le cache de téléchargement de Steam a été corrompu et maintenant il retélécharge tous les fichiers (sans raison particulière, par exemple : un crash de Steam). Cela n'est pas causé par Wallpaper Engine et nous ne pouvons malheureusement rien y faire. Toutes les applications Steam peuvent souffrir de ce problème. Si vous rencontrez souvent ce problème, voici des astuces :

## Réparation automatique de Steam
Nous avons construit un petit logiciel pour essayer d'empêcher Steam de continuer à faire ça (croisons les doigts pour que ça marche) ! Voici la marche à suivre :
* Fermez Steam
* Allez dans le dossier d'installation de `wallpaper_engine`
  * Par défaut, il se trouve ici : `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine`
* Lancez `wallpaper_engine\bin\steamredownloadfixer32.exe`
  * Si l'outil vous donne des messages d'erreur, veuillez nous envoyer un e-mail et nous verrons si nous pouvons vous aider
* Redémarrez Steam et vérifier les fichiers de Wallpaper Engine :
  * [Vérifier les fichiers de Wallpaper Engine](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

Vous devrez refaire cette manipulation à chaque fois que vous rencontrerez des problèmes avec le cache de Steam. Nous ne sommes pas les développeurs de Steam et nous ne pouvons malheureusement pas faire plus pour vous aider.

## Redémarrez Steam

The most reliable long-term fix for most users affected by this Steam bug regularly appears to be to reinstall Steam as some Steam files may simply be broken on your system. Try to reinstall Steam completely:

1. Uninstall Wallpaper Engine through Steam.
2. Uninstall Steam itself, make sure to follow the official guide:
  * [Uninstall Steam](https://support.steampowered.com/kb_article.php?ref=9609-OBMP-2526)
  * Specifically check the Manually Removing Steam section in the Steam Support article above and make a backup of your *steamapps* directory as described there to ensure you will not have to redownload all your games.

## Use local backups as a workaround

If the issue continues happening to you, you can also make local backups of all wallpapers and then unsubscribe from all wallpapers. Steam will not redownload wallpapers that you are not subscribed to, so the work-around is to simply only rely on local backups. You can find our guide on how to create backups here:

* [Using wallpaper backups](/steam/backup)

Afterwards, simply unsubscribe from all wallpapers. Make sure to not delete any files manually, Steam must delete the wallpaper files itself or it will attempt to redownload the wallpapers again just to delete the files on its own.