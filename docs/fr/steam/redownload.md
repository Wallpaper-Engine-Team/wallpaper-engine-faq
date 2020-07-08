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
* Redémarrez Steam et vérifiez les fichiers de Wallpaper Engine :
  * [Vérifier les fichiers de Wallpaper Engine](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

Vous devrez refaire cette manipulation à chaque fois que vous rencontrerez des problèmes avec le cache de Steam. Nous ne sommes pas les développeurs de Steam et nous ne pouvons malheureusement pas faire plus pour vous aider.

## Réinstaller Steam

La solution la plus fiable à long terme semble être de réinstaller régulièrement Steam. Ce problème pourrait être dû à des fichiers Steam corrompus. Essayez de réinstaller complètement Steam :

1. Passez par Steam pour désinstaller Wallpaper Engine.
2. Désinstaller Steam en suivant ce guide officiel :
  * [Désinstaller Steam](https://support.steampowered.com/kb_article.php?ref=9609-OBMP-2526)
  * Lisez en particulier la section "Désinstaller Steam manuellement" et faites une sauvegarde de votre répertoire *steamapps* comme décrit expliqué pour vous assurer que vous n'aurez pas à retélécharger tous vos jeux.

## Utiliser une sauvegarde locale

Si le problème persiste, vous pouvez également effectuer une sauvegarde locale de vos fonds d'écran, puis vous désabonner des fonds d'écran. Steam doit supprimer lui-même les fichiers de fond d'écran, sinon il tentera de les retélécharger. Voici comment faire :

* [Sauvegarder vos fonds d'écran](/steam/backup)

Après cela, désabonnez-vous de tous les fonds d'écran. Assurez-vous de ne rien supprimer manuellement. Steam doit supprimer lui-même les fichiers de fond d'écran, sinon il tentera de les retélécharger.