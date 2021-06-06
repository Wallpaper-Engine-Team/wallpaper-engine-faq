# Appairage d'un appareil mobile avec Windows

Vous pouvez appairer vos appareils mobiles avec votre ordinateur pour transférer sans fil votre collection de fonds d'écran vers l'application compagnon Wallpaper Engine sur votre appareil mobile. Il n'est pas possible pour l'application Android de télécharger directement des fonds d'écran à partir du Workshop Steam, car seul Steam peut télécharger les fichiers de fonds d'écran.

Should you run into any problems with pairing your mobile devices, you can still import wallpapers by manually exporting the **.mpkg** that the Wallpaper Engine mobile app uses to render wallpapers.

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
* Disable any sort of VPN or proxy software on your computer and your mobile device which can interfere with the communication between your devices.
* Vérifiez que Wallpaper Engine sur Windows et votre appareil mobile sont tous deux à jour et en cours d'exécution.

## Backup solution: Manually importing a Wallpaper File (.mpkg)

Should you be able unable to fix the connection between your computer and your mobile device, you can still manually transfer your wallpapers onto your mobile device. First, select the wallpapers you want to export in Wallpaper Engine, then right-click on them and select **Send to Mobile Device**, followed by clicking on **Export .mpkg**.

Once Wallpaper Engine has created the .mpkg files for your wallpapers, you can either transfer them to your mobile device by moving the files onto your mobile device via USB or by copying the files onto an SD card. Alternatively you can also use any file sharing service on your mobile device or send them to yourself via a messaging service or even via email (if the file size is not a problem).

Once the files are on your mobile device, open up Wallpaper Engine on your mobile device and use the **Import File** functionality to directly import the .mpkg files into the app by selecting them from the directory that you have placed them in.