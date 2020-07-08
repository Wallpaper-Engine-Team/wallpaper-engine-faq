# Cacher Wallpaper Engine dans la zone de notification

Il est possible de masquer l'icône de Wallpaper Engine dans la zone de notification en créant manuellement une clé de registre qui indique à Wallpaper Engine de masquer cette icône.

::: warning Nous vous déconseillons de le faire, sauf si cette icône vous gâche la vie au point que vous êtes prêt·e à accepter les inconvénients que nous allons vous expliquer maintenant. :::

Une fois cette icône masquée, la seule façon de quitter Wallpaper Engine est de passer par le gestionnaire des tâches de Windows. Vous ne pourrez plus ouvrir l'interface utilisateur qu'en passant par Steam ou par les fichiers .exe, ce qui peut être fastidieux.

Si vous souhaitez malgré tout masquer cette icône, voici comment faire :

Pour créer une clé registre, ouvrez le menu Windows et cherchez "regedit.exe", ce qui vous permettra d'ouvrir l'éditeur de registre.

1. Allez dans ce dossier du registre : *HKEY_CURRENT_USER\Software\WallpaperEngine*
2. Faites un clic droit sur le dossier *WallpaperEngine*, selectionnez *Nouveau* puis *Valeur DWORD (32 Bit)*.
3. Nommez ce registre : *hideTrayIcon*
4. Assurez-vous de recopier ce nom fidèlement, sans espace ni majuscule.
5. Double-cliquez sur cette clé de registre et donnez-lui la valeur suivante : *1*
6. Redémarrez Wallpaper Engine et l'application sera désormais masquée.

Vous pouvez inverser ce processus en redéfinissant *hideTrayIcon* sur *0* ou en supprimant cette clé avant de redémarrer Wallpaper Engine. 