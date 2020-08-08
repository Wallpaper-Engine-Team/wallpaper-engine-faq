# Sélectionner des fonds d'écran par application

Wallpaper Engine vous permet d'afficher automatiquement différents fonds d'écran quand un certain .exe s'exécute dans votre système. Par exemple, cela peut-être utile si vous voulez des fonds d'écran moins tape-à-l'œil quand vous jouez à un jeu ou pour lancer automatiquement un visualiseur audio quand vous ouvrez votre lecteur de musique.

::: astuce Si vous rencontrez des problèmes techniques dans certains jeux ou applications, vous pouvez aussi utiliser les règles d'application pour désactiver Wallpaper Engine quand un certain .exe est exécuté. Si vous voulez résoudre un problème technique dans une autre appli, consultez ce guide : [Résoudre les problèmes d'applis ou de jeux spécifiques](/functionality/applicationrules.html)
:::

## Configurer une règle d'application

Dans l'onglet **Performance** des paramètres de Wallpaper Engine, cliquez sur le bouton **Modifier** dans la section **Règle d'application**. Cliquez sur **Créer une nouvelle règle** pour configurer un nouvel ensemble de fonds d'écran pour l'.exe de votre choix. In the **Application name** input field, enter the name of your .exe, make sure the name matches exactly, for example *musicplayer.exe*. Set the **Condition** to **Is running**. In the **Wallpaper playback** option you can select one of the following options:

* Load wallpaper
* Load playlist
* Load profile

What is important to note here is that **Load wallpaper** and **Load playlist** will both only load one wallpaper and span it across all screens. If you have multiple monitors and want to load independent wallpapers for each screen (or even different playlists on each screen), you need to use the **Load Profile** option. Read the following section for more infos on how to set this up.

### Setting up a multi-monitor profile

**Load Profile** in the application rules refers to mulit-monitor profiles which can be configured in the monitor overview (screen icon in the upper right corner of the interface). A profile is a snapshot of all your currently selected wallpapers and playlists across all your screens. Whenever a profile is loaded, all wallpapers and playlists will be placed according to the profile configuration.

Configure your wallpapers and playlists across all monitors the the way you want them to be, then click on the **Save profile** button in the monitor settings and save the current setup under a name of your choice. Keep in mind that any subsequent changes you make to your setup will not change the profile until you use the **Save profile** button again. You can set up multiple profiles and assign them to multiple apps at once. For example, you may create a **Music**, a **Gaming** and a **Movies** profile and then assign each profile to all .exe files that match these categories.

<video width="100%" controls autplay loop>
  <source src="/videos/apprules.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>