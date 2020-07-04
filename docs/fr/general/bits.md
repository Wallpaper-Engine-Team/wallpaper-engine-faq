# Version 32 bits & 64 bits

La version 64 bits peut gérer des fichiers plus volumineux (plus de 2 Go) mais elle utilisera toujours plus de mémoire, quelle que soit la taille de fichier de vos fonds d'écran. Par exemple, avec un fond d'écran vidéo ordinaire, la version 64 bits utilisera environ 50 Mo de RAM en plus par rapport à la version 32 bits. C'est là la seule différence.

::: tip Sauf si vous utilisez des fonds d'écran extrêmement lourds, nous vous conseillons d'utiliser la version 32 bits. La plupart des utilisateurs ne sont pas concernés par ce problème. :::

Vous pouvez également opter pour la version 64 bits si le système vidéo de votre PC ne supporte pas les programmes 32 bits. Si vous avez déjà installé des packs de codecs, ils peuvent avoir endommagé de manière permanente le système vidéo 32 bits de Windows dont Wallpaper Engine a besoin. Si le système 64 bits n'est pas affecté, vous pourrez en profiter en utilisant la version 64 bits de Wallpaper Engine et vous éviterez ainsi d'avoir à corriger des problèmes.

::: warning Attention Les fonds d'écran Web sont tous en 32 bits (webwallpaper32.exe). Pareil pour l'interface utilisateur (ui32.exe). La version 64 bits n'est que pour les scènes ou les vidéos. :::

## Comment configurer Wallpaper Engine pour que la version 32 bits ou 64 bits s'exécute automatiquement au démarrage de Windows?

Quitter Wallapaper Engine (clic droit sur l'icrône Wallpaper Engine dans la zone de notification de Windows > "Quitter"). This is important as Steam will otherwise not launch Wallpaper Engine and only bring the already running version to the foreground.

Once Wallpaper Engine is turned off, go to Steam and start either the 32 Bit or 64 Bit version, depending on which version you want to automatically start. Go to the Wallpaper Engine settings and at the top of the "General" tab, enable autostart. If it is already enabled, turn it off completely and then turn it back on. This will register the current version as the one which will be automatically started alongside Windows. 