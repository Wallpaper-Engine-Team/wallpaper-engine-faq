# Résolution des problèmes d'appairage des appareils mobiles

::: tip
La connexion ne fonctionne toujours pas malgré cela ? Faites défiler jusqu'au bas de cette page afin de voir la solution de sauvegarde manuelle pour importer des fonds d'écran via USB ou une autre méthode.
:::

Si vous ne pouvez pas appairer votre appareil mobile avec votre ordinateur, il est très probable qu'un pare-feu ou un paramètre du réseau local soit en cause. Vérifiez les sources de problèmes possibles suivantes :

* **Assurez-vous que votre téléphone et votre ordinateur sont connectés au même réseau local.**
  * Votre ordinateur n'a pas besoin de Wi-Fi, le réseau est toujours même si l'ordinateur est connecté par un câble réseau.
* **Assurez-vous qu'aucun pare-feu ne bloque la communication de Wallpaper Engine avec votre réseau local.**
  * Wallpaper Engine uses the network ports 7884 (UDP) and 7889 (TCP), make sure no firewall is blocking them.
* **Désactivez tout logiciel VPN ou proxy sur votre ordinateur et votre appareil mobile, qui peut interférer avec la communication entre vos appareils.**
* **Vérifiez que le routeur de votre réseau n'empêche pas vos appareils de communiquer entre eux.**
    * Assurez-vous que votre routeur ne bloque pas le trafic réseau entre les appareils.
    * Activez **UPnP** (**"Universal Plug and Play"**) dans les paramètres de votre routeur.
* **Vérifiez que Wallpaper Engine sur Windows et votre appareil mobile sont tous deux à jour et en cours d'exécution.**
* **If the app does not even show your computer:** It could be that a firewall is blocking broadcasts, you can attempt to directly enter the IP address of your system. In the connection overview on your mobile device, click on the three dots in the upper right corner, then select **Enter IP manually**. You can now try to manually input the IP address on your computer. Make sure Wallpaper Engine is running on your computer and that you have opened the **Connect New Device** overview, otherwise a first connection is not possible.

### Pare-feu Windows

Si votre appareil mobile peut trouver votre ordinateur mais ne parvient pas à s'y connecter, le problème est presque certainement dû à un pare-feu sur votre ordinateur. Lorsque vous lancez Wallpaper Engine pour la première fois, vous êtres invité à accorder au logiciel l'application d'accéder à votre réseau. Si vous avez fermé cette fenêtre ou si vous n'avez pas spécifiquement autorisé **ui32.exe** à communiquer avec votre réseau, le pare-feu Windows bloquera Wallpaper Engine. Assurez-vous d'autoriser **ui32.exe** à communiquer comme indiqué dans cette capture d'écran :

![Autorisations du Pare-feu Windows](/img/faq/windows_defender.png)

Wallpaper Engine proposera automatiquement des correctifs pour le pare-feu s'il détecte des problèmes. Ce processus est assez fiable, mais dans certains cas, vous devrez quand même effacer manuellement les blocs que vous avez pu créer par mégarde dans le passé.

Si vous n'avez pas accordé ces autorisations à Wallpaper Engine, le pare-feu de Windows bloquera automatiquement Wallpaper Engine. Ouvrez les paramètres du pare-feu Windows, puis cliquez sur **Autoriser une application ou une fonctionnalité via le pare-feu Windows**. Recherchez une entrée appelée **ui32** et supprimez-la ou assurez-vous que les deux coches de la colonne *Privé* et *Public* sont activées, puis confirmez vos modifications et redémarrez Wallpaper Engine.

Veillez à chercher **ui32** ou **Wallpaper Engine UI** - vous pouvez trouver des entrées appelées simplement **Wallpaper Engine** mais celles-ci ne sont pas pertinentes ici.

**Remarque :** Cette section concerne uniquement le pare-feu intégré de Windows, si vous utilisez une autre application antivirus ou pare-feu, vous devez vous assurer que Wallpaper Engine n'est pas bloqué par ces derniers.

## Solution de secours : Importation manuelle d'un fichier de fond d'écran (.mpkg)

Si vous ne parvenez pas à rétablir la connexion entre votre ordinateur et votre appareil mobile, vous pouvez toujours transférer manuellement vos fonds d'écran sur votre appareil mobile. Tout d'abord, sélectionnez les fonds d'écran que vous souhaitez exporter dans Wallpaper Engine, puis faites un clic droit dessus et sélectionnez **Envoyer vers appareil mobile**, suivi d'un clic sur **Exporter .mpkg**.

<video width="100%" controls autoplay loop>
  <source src="/videos/mobile_export.mp4" type="video/mp4">
  Votre explorateur ne prend pas en charge le filtre vidéo.
</video>

Une fois que Wallpaper Engine a créé les fichiers .mpkg pour vos fonds d'écran, vous pouvez les transférer sur votre appareil mobile en déplaçant les fichiers sur votre appareil mobile via USB ou en copiant les fichiers sur une carte SD. Vous pouvez également utiliser n'importe quel service de partage de fichiers sur votre appareil mobile ou vous les envoyer à vous-même via un service de messagerie ou même par courrier électronique (si la taille du fichier ne pose pas de problème).

Une fois les fichiers sur votre appareil mobile, ouvrez Wallpaper Engine depuis votre appareil mobile et utilisez la fonctionnalité **Importer fichier** pour importer directement les fichiers .mpkg dans l'application en les sélectionnant dans le répertoire où vous les avez placés.

::: danger
Il est important de placer les fichiers .mpkg dans le dossier **Downloads** de l'appareil mobile. Android est très restrictif lorsqu'il s'agit de laisser les applications accéder aux fichiers. Si vous ne pouvez pas trouver ou ouvrir les fichiers .mpkg sur votre appareil, essayez de les placer dans un autre répertoire, généralement le dossier **Downloads** est le choix le plus fiable.
:::