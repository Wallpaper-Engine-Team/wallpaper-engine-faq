# Idées fausses sur l'utilisation du GPU

Le gestionnaire des tâches de Windows n'affiche pas l'utilisation réelle du GPU, ce qui peut être perturbant. L'utilisation du GPU ne prend pas en compte l'*alimentation* et la fréquence d'horloge de la carte graphique. Cette donnée est donc floue. L'utilisation du GPU affichée est en réalité beaucoup moins élevée. Pour voir la vraie utilisation du GPU, utilisez un outil comme GPU-Z :

* [Télécharger GPU-Z](https://www.techpowerup.com/gpuz/)

## Trouver la vraie utilisation de votre GPU

Une fois que vous avez installé GPU-Z, consultez l'onglet "Capteurs" pour voir la fréquence d'horloge du GPU et son usage :

![Real GPU usage](./gpuz.png)

Dans cette capture d'écran, l'*usage du GPU* est à 24 %. Cependant, en haut, vous pouvez voir que la carte graphique est en basse consommation (202,5 MHz). C'est une très bonne situation, même si l'usage est à 24 %. The actual usage based on the max clockrate of 1823mhz is only **2.6%** *(24% * 202.5 MHz / 1823 MHz)*.

A card could have clock rates between 100 Mhz and 2000 Mhz for example. If the task manager shows 50% then **it makes a big difference whether it is 50% of 100 MHz or 50% of 2000 MHz**.

::: tip To summarize: It's important to keep the GPU clock rate in mind when looking at the GPU load. 50% of 100 MHz is better than 5% of 2000 MHz. :::

If you want to improve GPU performance:

* Disable or delete overlay and recording tools, including Geforce Experience.
* Lower the frame rate setting and disable MSAA (it does not affect the quality 2D scene wallpapers).
    * This won't influence the performance of videos, they have fixed frame rates and quality.
    * The resolution and frame rate of the video wallpapers will control these, use videos with lower FPS to reduce GPU load
* Connect your monitors to the same GPU or Windows will perform poorly while trying to merge them.