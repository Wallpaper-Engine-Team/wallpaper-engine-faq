---
tags:
  - downtime
  - serveur
  - téléchargements
  - progression
  - workshop
  - connexion
---

# Problèmes de téléchargement des fonds d'écran sur Steam

Les téléchargements passent tous par **la plateforme de Steam**. Wallpaper Engine n'affiche que l'état de téléchargement de Steam. Tous les problèmes de téléchargement sont liés à Steam et ne sont pas à Wallpaper Engine. Ce guide contient une sélection des problèmes les plus courants. Dans de nombreux cas, la cause initiale de ces problèmes sont des applications antivirus trop zélées ou des ports réseau bloqués.

Si vous rencontrez des problèmes de téléchargement avec Steam, assurez-vous qu'aucun antivirus ou pare-feu ne bloque Steam , y compris les pare-feu de vos routeurs.

::: tip Vous pouvez facilement vérifier si votre routeur bloque les téléchargements sur Steam : passez votre smartphone en point d'accès mobile et essayez de télécharger un fond d'écran avec cette connexion. :::

## Téléchargement bloqué à 0 % ou 100 % (ou tout autre pourcentage)
Steam n'a pas fini de télécharger et de vérifier ces fichiers. Si les téléchargements restent bloqués un long moment, voici quelques astuces :

* Vider le cache de téléchargement de Steam dans les options :
  * [Vider le cache de téléchargements de Steam](https://support.steampowered.com/kb_article.php?ref=3134-TIAL-4638)
* Vérifier les fichiers de Wallpaper Engine sur Steam :
  * [Vérifier les fichiers de Wallpaper Engine](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)
* Si les téléchargements sont toujours bloqués : **fermez Steam** et **effacez le contenu** de ce dossier :
  * `C:\Program Files (x86)\Steam\steamapps\workshop\downloads`
    * Si vous avez un antivirus, assurez-vous qu'il ne prenne pas en compte ce dossier
    * **Attention :** `C:\Program Files (x86)\Steam` est le chemin par défaut. Regardez ailleurs si vous avez installé l'application dans un autre dossier.
* Redémarrez Steam. Ne lancez aucun jeu. Vérifiez les téléchargements de Steam et reprenez les téléchargements mis en pause.

::: details Cliquez ici pour voir d'autres solutions si les étapes ci-dessus n'ont pas résolu vos problèmes
* Assurez-vous qu'aucun antivirus ou pare-feu ne bloque Steam. Mettez une exception dans votre antivirus pour le répertoire de Steam.
* Désabonnez-vous des fonds d'écran qui ne parviennent pas à se télécharger et abonnez-vous à nouveau après le redémarrage de Steam.
* Choisissez un différent serveur dans les paramètres de Steam. Cette option se trouve dans l'onglet "Téléchargements" des paramètres de Steam.
* Assurez-vous que vous n'avez pas restreint les téléchargements Steam dans les **paramètres de Steam** en fonction du temps, de la bande passante, de l'application...
* Ouvrez l'onglet "Téléchargements" de Steam (Bibliothèque > Téléchargements). Cherchez des téléchargements en pause. Si vous en voyez un, cliquez sur "Reprendre".
* Cliquez avec le bouton droit sur Wallpaper Engine dans Steam, puis sur cliquez sur Propriétés et sélectionnez **Autoriser les téléchargements en arrière-plan**.
* Assurez-vous que vous n'avez pas de mises à jour de jeu en attente dans Steam, cela pourrait interrompre ou désactiver les téléchargements des fonds d'écran.
* Attendez une journée, il y a peut-être des problèmes avec les serveurs de Steam.
* **As a last resort** en cas de dernier recours, réinstallez Wallpaper Engine pour réparer des fichiers corrompus (vous devrez télécharger tous vos fonds d'écran à nouveau !). :::

::: tip Steam servers go offline every week for maintenance at a fixed time:

* United States West Coast: **Tuesday at 4 pm (UTC - 7)**
* Same time in Central Europe: **Wednesday at 1 am (UTC + 1)**
* Same time in China: **Wednesday at 8 am (UTC + 8)**

If you are reading this while it is roughly this time of the week, it may be that the servers are temporarily offline. Wait one or two hours and try again. :::

## Steam: "Missing Downloaded Files" error

Steam is unable to download some files, this can be due to anti-virus applications blocking Steam or just absolutely random. It can usually be fixed this way:

* Turn off Steam.
* Delete the contents of this directory: `C:\Program Files (x86)\Steam\steamapps\workshop\downloads`
* Delete the contents of this directory: `C:\Program Files (x86)\Steam\steamapps\downloading\431960`
  * **Note:** `C:\Program Files (x86)\Steam` is the default Steam path, if you have installed it somewhere else, check there.
* Start Steam and verify the Wallpaper Engine files:
  * [Verify Wallpaper Engine files](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

If you have an antivirus-app installed: Configure an exception for this directory to prevent it from blocking Steam's Workshop downloads: `C:\Program Files (x86)\Steam\steamapps\workshop\downloads`

#### Related article: [Steam re-downloading all wallpapers](/steam/redownload)