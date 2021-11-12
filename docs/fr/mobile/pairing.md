# Appairage d'un appareil mobile avec Windows

Vous pouvez appairer vos appareils mobiles avec votre ordinateur pour transférer sans fil votre collection de fonds d'écran vers l'application compagnon Wallpaper Engine sur votre appareil mobile.

It's not possible for the Android app to directly download wallpapers from the Workshop due to technical and legal limitations that prevent the Android app from directly connecting to the Workshop.

::: tip
If pairing does not work for you, see the **Backup Solution** section at the bottom of this page to learn how to create mobile wallpaper packages (**.mpkg**) and how to import them on your mobile device.
:::

[[toc]]

## 1. Install the free Wallpaper Engine Android Companion App

Before continuing, make sure to install the latest version of the Wallpaper Engine Android companion app.

Nous vous recommandons d'installer l'application via la version officielle de l'App Store, mais vous pouvez également télécharger directement la dernière version de l'application depuis notre page d'accueil. Pour accéder aux liens de téléchargement et obtenir plus d'informations, veuillez consulter notre page de téléchargement Android :

* [Télécharger Wallpaper Engine pour Android](https://www.wallpaperengine.io/android/)

For security reasons, we advise against installing the app from any sources not listed on our website.

## 2. Préparation de Wallpaper Engine sur Windows

Dans l'application **Windows**, cliquez sur le bouton **Mobile** dans le coin supérieur droit de l'interface utilisateur. L'aperçu des appareils mobiles s'ouvre. Dans la partie inférieure de l'aperçu des appareils, cliquez sur le bouton **Connecter nouvel appareil**. Wallpaper Engine will show you a 4-digit PIN that you can use to pair one mobile device in the next step.

<video width="100%" controls autoplay loop>
  <source src="/videos/mobile_pin.mp4" type="video/mp4">
  Votre explorateur ne prend pas en charge le filtre vidéo.
</video>

## 3. Connexion de votre appareil mobile

Dans l'application compagnon mobile Wallpaper Engine, cliquez sur **Ajouter** dans le coin inférieur droit, puis sur **Appairer avec ordinateur**. L'application Wallpaper Engine va rechercher dans votre réseau local les instances de Wallpaper Engine pour Windows en cours d'exécution. Votre ordinateur Windows devrait apparaître après quelques secondes, ce qui vous permettra de vous y connecter en cliquant dessus. Si vous vous connectez pour la première fois, il vous sera demandé de saisir le code PIN à 4 chiffres (voir la section Windows ci-dessus).

<video height="590px" style="display:block;margin:0 auto;" controls autoplay loop>
  <source src="/videos/mobile_connect.mp4" type="video/mp4">
  Votre explorateur ne prend pas en charge le filtre vidéo.
</video>

Une fois que vous avez saisi votre code PIN, la barre d'état de l'application mobile devient verte et indique l'ordinateur auquel elle est connectée. Dans l'application Windows, le bouton **Mobile** est également affiché en vert pour indiquer qu'une connexion mobile est active.

By default, Wallpaper Engine will now always automatically connect to your computer if you start Wallpaper Engine on your mobile device and your computer at the same time.

## 4. Transferring Wallpapers to Your Mobile Device

Once the connection has been established, the **Mobile** button in the upper right corner turns green.

You can now simply click on the **Send to Mobile Device** button on the right-hand side or right-click on any compatible wallpaper and select **Send to Mobile Device**, followed by selecting your device from the list.

#### Scene Wallpapers

Dynamic and interactive wallpapers that are of the **Scene** type will first be optimized for use on mobile phones and to ensure compatibility with mobile hardware. This process may take a short while. You will also be asked which quality option you would like to use, especially for high-resolution wallpapers, we recommend trying the **Balanced** option if you notice performance issues on your mobile device.

<video width="100%" controls autoplay loop>
  <source src="/videos/mobile_transfer.mp4" type="video/mp4">
  Votre explorateur ne prend pas en charge le filtre vidéo.
</video>

::: tip
You can also transfer multiple wallpapers at the same time by clicking on multiple wallpapers while holding the CTRL key on your keyboard.
:::

## Résolution des problèmes d'appairage des appareils mobiles

Si vous ne pouvez pas appairer votre appareil mobile avec votre ordinateur, il est très probable qu'un pare-feu ou un paramètre du réseau local soit en cause. Vérifiez les sources de problèmes possibles suivantes :

* Assurez-vous que votre téléphone et votre ordinateur sont connectés au même réseau local.
* Assurez-vous qu'aucun pare-feu ne bloque la communication de Wallpaper Engine avec votre réseau local.
* Vérifiez que le routeur de votre réseau n'empêche pas vos appareils de communiquer entre eux.
    * Make sure your router is not blocking network traffic between devices.
    * Turn on **UPnP** (**"Universal Plug and Play"**) in your router settings.
* Désactivez tout logiciel VPN ou proxy sur votre ordinateur et votre appareil mobile, qui peut interférer avec la communication entre vos appareils.
* Vérifiez que Wallpaper Engine sur Windows et votre appareil mobile sont tous deux à jour et en cours d'exécution.

### Solution de secours : Importation manuelle d'un fichier de fond d'écran (.mpkg)

Si vous ne parvenez pas à rétablir la connexion entre votre ordinateur et votre appareil mobile, vous pouvez toujours transférer manuellement vos fonds d'écran sur votre appareil mobile. Tout d'abord, sélectionnez les fonds d'écran que vous souhaitez exporter dans Wallpaper Engine, puis faites un clic droit dessus et sélectionnez **Envoyer vers appareil mobile**, suivi d'un clic sur **Exporter .mpkg**.

<video width="100%" controls autoplay loop>
  <source src="/videos/mobile_export.mp4" type="video/mp4">
  Votre explorateur ne prend pas en charge le filtre vidéo.
</video>

Une fois que Wallpaper Engine a créé les fichiers .mpkg pour vos fonds d'écran, vous pouvez les transférer sur votre appareil mobile en déplaçant les fichiers sur votre appareil mobile via USB ou en copiant les fichiers sur une carte SD. Vous pouvez également utiliser n'importe quel service de partage de fichiers sur votre appareil mobile ou vous les envoyer à vous-même via un service de messagerie ou même par courrier électronique (si la taille du fichier ne pose pas de problème).

Une fois les fichiers sur votre appareil mobile, ouvrez Wallpaper Engine depuis votre appareil mobile et utilisez la fonctionnalité **Importer fichier** pour importer directement les fichiers .mpkg dans l'application en les sélectionnant dans le répertoire où vous les avez placés.