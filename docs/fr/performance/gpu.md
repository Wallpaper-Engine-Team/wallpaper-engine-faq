# Idées fausses sur l'utilisation du GPU

Le gestionnaire des tâches de Windows n'affiche pas l'utilisation réelle du GPU, ce qui peut être perturbant. L'utilisation du GPU ne prend pas en compte l'*alimentation* et la fréquence d'horloge de la carte graphique. Cette donnée est donc floue. L'utilisation du GPU affichée est en réalité beaucoup moins élevée. Pour voir la vraie utilisation du GPU, utilisez un outil comme GPU-Z :

* [Télécharger GPU-Z](https://www.techpowerup.com/gpuz/)

## Trouver la vraie utilisation de votre GPU

Une fois que vous avez installé GPU-Z, consultez l'onglet "Capteurs" pour voir la fréquence d'horloge du GPU et son usage :

![Usage réel du GPU](./gpuz.png)

Dans cette capture d'écran, l'*usage du GPU* est à 24 %. Cependant, en haut, vous pouvez voir que la carte graphique est en basse consommation (202,5 MHz). C'est une très bonne situation, même si l'usage est à 24 %. L'utilisation réelle basée sur la fréquence d'horloge maximale de 1 823 MHz n'est que de **2,6 %** * (24 % x 202,5 MHz / 1 823 MHz) *.

Une carte peut avoir des fréquences d'horloge comprises entre 100 Mhz et 2 000 Mhz par exemple. Si le gestionnaire de tâches affiche 50 % alors **cela fait une grande différence que ce soit 50 % de 100 MHz ou 50 % de 2 000 MHz**.

::: tip En résumé : il faut garder la fréquence d'horloge du GPU à l'esprit lorsqu'on regarde son usage. 50 % de 100 MHz, c'est bien mieux que 5 % de 2 000 MHz. :::

Si vous voulez améliorer les performances de votre GPU :

* Désactivez ou supprimez les outils d'overlay ou d'enregistrement, y compris Geforce Experience.
* Réduisez le paramètre de fréquence d'images et désactivez le MSAA (cela ne change rien à la qualité des fonds d'écran en 2D).
    * Cela n'influencera pas les performances des vidéos, elles ont des fréquences d'images et une qualité fixes.
    * La résolution et la fréquence d'images des fonds d'écran vidéo influencent ces paramètres, utilisez donc des vidéos avec un FPS inférieur pour réduire l'usage du GPU
* Reliez vos écrans au même GPU pour ne pas surcharger Windows.