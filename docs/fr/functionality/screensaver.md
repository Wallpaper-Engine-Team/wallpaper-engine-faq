# Écran de veille avec Wallpaper Engine

Wallpaper Engine vous permet d'utiliser vos fonds d'écran comme écrans de veille. Traditionnellement, les écrans de veille étaient utilisés pour protéger les écrans contre les brûlures d'image permanentes. Cependant, la plupart des technologies d'affichage modernes ne sont plus susceptibles de subir ce type de dommages. Par conséquent, vous pouvez utiliser en toute sécurité n'importe quel type de fond d'écran comme écran de veille à des fins esthétiques. Si vous utilisez un écran CRT, Plasma, OLED ou une technologie d'écran similaire qui est susceptible d'être brûlée, nous vous recommandons d'utiliser une playlist de fonds d'écran comme écrans de veille ou fond d'écran avec un mouvement régulier.

## Configuration initiale de l'écran de veille

Afin de commencer à utiliser Wallpaper Engine comme écrans de veille, survolez l'onglet **Installés** dans la fenêtre de Wallpaper Engine et sélectionnez **Configurer écran de veille**. Wallpaper Engine va maintenant vérifier si vous avez déjà installé économiseur d'écran Wallpaper Engine pour Windows. Si écrans de veille n'a pas encore été installé, vous serez invité à l'installer. Assurez-vous que votre utilisateur Windows dispose des droits d'administration et qu'aucune application antivirus n'empêche Wallpaper Engine d'installer l'écran de veille.

Après l'installation initiale, les paramètres de l'écran de veille de Windows devraient s'ouvrir automatiquement. Vous pouvez également ouvrir les paramètres manuellement en utilisant le bouton **Paramètres et aperçu** ou en accédant directement aux paramètres de l'écran de veille via Windows.

## Configurer l'économiseur d'écran

### Configuration de Windows

Pour que l'écran de veille de Wallpaper Engine fonctionne, vous devez d'abord sélectionner Wallpaper Engine comme écrans de veille actif dans les **Paramètres Windows**. Vous pouvez ouvrir les paramètres de l'écran de veille Windows via le panneau de configuration de Windows ou en cliquant sur **Paramètres et aperçu** lorsque vous êtes en mode écran de veille dans Wallpaper Engine. Voir la vidéo ci-dessous pour les étapes nécessaires :

<video width="100%" controls autoplay loop>
  <source src="/videos/screensaver_setup.mp4" type="video/mp4">
  Votre explorateur ne prend pas en charge le filtre vidéo.
</video>

Dans les paramètres de Windows, vous pouvez contrôler le délai d'apparition de l'écran de veille et déterminer si l'écran de verrouillage de Windows s'affiche ou non lorsque vous revenez sur votre ordinateur. Ces paramètres sont entièrement gérés par Windows, Wallpaper Engine ne contrôle pas le délai d'attente de l'écran ou toute autre option de ce type.

### Configuration de Wallpaper Engine

Une fois que vous avez configuré l'écran de veille dans Windows, vous pouvez commencer à configurer l'écran de veille de Wallpaper Engine. Positionnez le curseur sur l'onglet **Installés** dans Wallpaper Engine et sélectionnez **Configurer écran de veille**. Wallpaper Engine prévisualise désormais vos écrans de veille au lieu de vos fonds d'écran. Dès que vous quittez le mode écran de veille, vous revenez à la configuration de vos fonds d'écran.

Dans son état par défaut, Wallpaper Engine utilisera la configuration la plus basique où vos écrans de veille sont exactement les mêmes que vos fonds d'écran en cours d'exécution. Vous pouvez modifier cela en changeant l'option **L'écran de veille est :** en **Configuré séparément** en haut. Avec cette option activée, vous pouvez choisir un fond d'écran pour chaque écran qui doit être utilisé comme écran de veille ou même utiliser un profil d'affichage ou des playlists complètement différentes pour la configuration de votre écran de veille. Vous pouvez toujours revenir à la configuration du papier peint en cliquant sur le bouton rouge **Quitter** dans le coin supérieur gauche.

## Écran de veille - Dépannage

L'écran de veille de Wallpaper Engine est activé par Windows. Si l'écran de veille ne fonctionne pas correctement, vérifiez si l'un des économiseurs d'écran par défaut de Windows fonctionne correctement pour vous. Vérifiez les paramètres de l'écran de veille de Windows et vos paramètres d'énergie Windows pour vous assurer que votre écran de veille est configuré avec le délai d'attente correct que vous attendez et que Wallpaper Engine est défini comme votre économiseur d'écran actif.

L'écran de veille sera installé dans `C:\Windows\System32\wpxscreensaver64.scr`, veillez qu'aucune application antivirus ne supprime ce fichier par erreur ou n'empêche son installation. Vous pouvez également désinstaller manuellement l'écran de veille en supprimant ce fichier spécifique, mais veillez à ne pas supprimer d'autres fichiers Windows importants dans le répertoire `System32`.