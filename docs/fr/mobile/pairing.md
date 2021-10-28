# Appairage d'un appareil mobile avec Windows

Vous pouvez appairer vos appareils mobiles avec votre ordinateur pour transférer sans fil votre collection de fonds d'écran vers l'application compagnon Wallpaper Engine sur votre appareil mobile. Il n'est pas possible pour l'application Android de télécharger directement des fonds d'écran à partir du Workshop Steam, car seul Steam peut télécharger les fichiers de fonds d'écran.

::: tip
Should you run into any problems with pairing your mobile devices, you can still import wallpapers by manually exporting them as **.mpkg** files that the Wallpaper Engine mobile app uses.

See the **Backup Solution** section at the bottom of this page to learn how to create **.mpkg** and how to import them on your mobile device.
:::

### Préparation de Wallpaper Engine sur Windows

Dans l'application **Windows**, cliquez sur le bouton **Mobile** dans le coin supérieur droit de l'interface utilisateur. L'aperçu des appareils mobiles s'ouvre. Dans la partie inférieure de l'aperçu des appareils, cliquez sur le bouton **Connecter nouvel appareil**. Wallpaper Engine vous montrera un code PIN à 4 chiffres que vous pouvez utiliser pour appairer un appareil mobile.

![PIN mobile](/img/faq/mobile_pin.gif)

### Connexion de votre appareil mobile

Dans l'application compagnon mobile Wallpaper Engine, cliquez sur **Ajouter** dans le coin inférieur droit, puis sur **Appairer avec ordinateur**. L'application Wallpaper Engine va rechercher dans votre réseau local les instances de Wallpaper Engine pour Windows en cours d'exécution. Votre ordinateur Windows devrait apparaître après quelques secondes, ce qui vous permettra de vous y connecter en cliquant dessus. Si vous vous connectez pour la première fois, il vous sera demandé de saisir le code PIN à 4 chiffres (voir la section Windows ci-dessus). Le code PIN est une mesure de sécurité supplémentaire pour s'assurer que les utilisateurs non autorisés ne peuvent pas se connecter à votre ordinateur sans votre autorisation.

Une fois que vous avez saisi votre code PIN, la barre d'état de l'application mobile devient verte et indique l'ordinateur auquel elle est connectée. Dans l'application Windows, le bouton **Mobile** est également affiché en vert pour indiquer qu'une connexion mobile est active.

![PIN mobile](/img/faq/mobile_pair.gif)

## Résolution des problèmes d'appairage des appareils mobiles

Si vous ne pouvez pas appairer votre appareil mobile avec votre ordinateur, il est très probable qu'un pare-feu ou un paramètre du réseau local soit en cause. Vérifiez les sources de problèmes possibles suivantes :

* Assurez-vous que votre téléphone et votre ordinateur sont connectés au même réseau local.
* Assurez-vous qu'aucun pare-feu ne bloque la communication de Wallpaper Engine avec votre réseau local.
* Vérifiez que le routeur de votre réseau n'empêche pas vos appareils de communiquer entre eux.
    * Make sure your router is not blocking network traffic between devices.
    * Turn on **UPnP** (**"Universal Plug and Play"**) in your router settings.
* Désactivez tout logiciel VPN ou proxy sur votre ordinateur et votre appareil mobile, qui peut interférer avec la communication entre vos appareils.
* Vérifiez que Wallpaper Engine sur Windows et votre appareil mobile sont tous deux à jour et en cours d'exécution.

## Solution de secours : Importation manuelle d'un fichier de fond d'écran (.mpkg)

Si vous ne parvenez pas à rétablir la connexion entre votre ordinateur et votre appareil mobile, vous pouvez toujours transférer manuellement vos fonds d'écran sur votre appareil mobile. Tout d'abord, sélectionnez les fonds d'écran que vous souhaitez exporter dans Wallpaper Engine, puis faites un clic droit dessus et sélectionnez **Envoyer vers appareil mobile**, suivi d'un clic sur **Exporter .mpkg**.

Une fois que Wallpaper Engine a créé les fichiers .mpkg pour vos fonds d'écran, vous pouvez les transférer sur votre appareil mobile en déplaçant les fichiers sur votre appareil mobile via USB ou en copiant les fichiers sur une carte SD. Vous pouvez également utiliser n'importe quel service de partage de fichiers sur votre appareil mobile ou vous les envoyer à vous-même via un service de messagerie ou même par courrier électronique (si la taille du fichier ne pose pas de problème).

Une fois les fichiers sur votre appareil mobile, ouvrez Wallpaper Engine depuis votre appareil mobile et utilisez la fonctionnalité **Importer fichier** pour importer directement les fichiers .mpkg dans l'application en les sélectionnant dans le répertoire où vous les avez placés.