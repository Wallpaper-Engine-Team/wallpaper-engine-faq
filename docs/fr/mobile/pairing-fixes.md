# Résolution des problèmes d'appairage des appareils mobiles

::: tip
La connexion ne fonctionne toujours pas malgré cela ? Faites défiler jusqu'au bas de cette page afin de voir la solution de sauvegarde manuelle pour importer des fonds d'écran via USB ou une autre méthode.
:::

Si vous ne pouvez pas appairer votre appareil mobile avec votre ordinateur, il est très probable qu'un pare-feu ou un paramètre du réseau local soit en cause. Vérifiez les sources de problèmes possibles suivantes :

* **Assurez-vous que votre téléphone et votre ordinateur sont connectés au même réseau local.**
  * Votre ordinateur n'a pas besoin de Wi-Fi, le réseau est toujours même si l'ordinateur est connecté par un câble réseau.
* **Assurez-vous qu'aucun pare-feu ne bloque la communication de Wallpaper Engine avec votre réseau local.**
  * Wallpaper Engine envoie une multidiffusion sur les ports réseau 7884 (UDP) et 7889 (TCP), assurez-vous qu'aucun pare-feu ne bloque cette diffusion.
* **Désactivez tout logiciel VPN ou proxy sur votre ordinateur et votre appareil mobile, qui peut interférer avec la communication entre vos appareils.**
* **Vérifiez que le routeur de votre réseau n'empêche pas vos appareils de communiquer entre eux.**
    * Assurez-vous que votre routeur ne bloque pas le trafic réseau entre les appareils.
    * Activez **UPnP** (**"Universal Plug and Play"**) dans les paramètres de votre routeur.
* **Vérifiez que Wallpaper Engine sur Windows et votre appareil mobile sont tous deux à jour et en cours d'exécution.**

### Pare-feu Windows

Si votre appareil mobile peut trouver votre ordinateur mais ne parvient pas à s'y connecter, le problème est presque certainement dû à un pare-feu sur votre ordinateur. Lorsque vous lancez Wallpaper Engine pour la première fois, vous êtres invité à accorder au logiciel l'application d'accéder à votre réseau. Si vous avez fermé cette fenêtre ou si vous n'avez pas spécifiquement autorisé **ui32.exe** à communiquer avec votre réseau, le pare-feu Windows bloquera Wallpaper Engine. Assurez-vous d'autoriser **ui32.exe** à communiquer comme indiqué dans cette capture d'écran :

![Windows Firewall Permissions](/img/faq/windows_defender.png)

Wallpaper Engine will automatically suggest firewall fixes if it detects any problems. This process is somewhat reliable but in some cases you may still need to manually clear any blocks you may have created in the past by accident.

If you have not granted Wallpaper Engine these permissions, the Windows firewall will automatically block Wallpaper Engine. Open the Windows firewall settings, then click on **Allow an app through firewall**. Search for an entry called **ui32** and either delete it or make sure both check marks in the *Private* and *Public* column are enabled, then confirm your changes and restart Wallpaper Engine.

Make sure to look for **ui32** or **Wallpaper Engine UI** - you may find entries called just **Wallpaper Engine** but these are irrelevant here.

**Please note:** This section is specifically only about the built-in Windows firewall, if you use any other antivirus app or firewall, you need to make sure Wallpaper Engine is not being blocked by them.

## Solution de secours : Importation manuelle d'un fichier de fond d'écran (.mpkg)

Si vous ne parvenez pas à rétablir la connexion entre votre ordinateur et votre appareil mobile, vous pouvez toujours transférer manuellement vos fonds d'écran sur votre appareil mobile. Tout d'abord, sélectionnez les fonds d'écran que vous souhaitez exporter dans Wallpaper Engine, puis faites un clic droit dessus et sélectionnez **Envoyer vers appareil mobile**, suivi d'un clic sur **Exporter .mpkg**.

<video width="100%" controls autoplay loop>
  <source src="/videos/mobile_export.mp4" type="video/mp4">
  Votre explorateur ne prend pas en charge le filtre vidéo.
</video>

Une fois que Wallpaper Engine a créé les fichiers .mpkg pour vos fonds d'écran, vous pouvez les transférer sur votre appareil mobile en déplaçant les fichiers sur votre appareil mobile via USB ou en copiant les fichiers sur une carte SD. Vous pouvez également utiliser n'importe quel service de partage de fichiers sur votre appareil mobile ou vous les envoyer à vous-même via un service de messagerie ou même par courrier électronique (si la taille du fichier ne pose pas de problème).

Une fois les fichiers sur votre appareil mobile, ouvrez Wallpaper Engine depuis votre appareil mobile et utilisez la fonctionnalité **Importer fichier** pour importer directement les fichiers .mpkg dans l'application en les sélectionnant dans le répertoire où vous les avez placés.

::: danger
It is import that you place the .mpkg files in the **Downloads** folder on the mobile device. Android is very restrictive when it comes to letting apps access files. If you cannot find or open the .mpkg files on your device, try placing them in another directory, usually the **Downloads** folder is the most reliable choice for this.
:::