# Les ordinateurs de bureau avec un GPU intégré et fonctionnent mal (dwm.exe)

Si vous avez activé le GPU intégré de votre ordinateur de bureau dans le BIOS, alors qu'un GPU est déjà installé, vous pouvez rencontrer des problèmes de performances et une utilisation trop élevée du processeur de *dwm.exe*. Si possible, n'activez pas votre GPU intégré et branchez vos écrans à votre GPU dédié. L'utilisation ces deux processeurs graphiques en même temps interrompra l'accélération matérielle du gestionnaire de fenêtres de bureau. Il est important que tous les écrans soient connectés à votre carte graphique principale. Ce problème n'est pas lié à Wallpaper Engine. Il affecte tous les logiciels multiécrans si les écrans ne sont pas connectés à la carte graphique principale.

De nombreux utilisateurs supposent que faire basculer Wallpaper Engine sur un GPU secondaire augmentera les performances du système. C'est faux et les performances du système risquent de se détériorer.

C'est différent pour le matériel conçu pour les configurations multi-GPU comme les ordinateurs Nvidia Optimus ou SLI/Crossfire. Ils sont physiquement conçus pour fonctionner ainsi.

## Mauvaises performances avec un GPU secondaire sans Nvidia SLI / Nvidia Optimus / AMD CrossFire

De nombreux utilisateurs supposent que faire basculer Wallpaper Engine sur un GPU secondaire augmentera les performances du système. C'est faux et les performances du système risquent de se détériorer.

Wallpaper Engine crée des fonds d'écran qui font partie du bureau. Ils font donc partie du processus de l'explorateur Windows. Wallpaper Engine doit utiliser le même GPU que l'explorateur Windows. Si ce n'est pas le cas, Windows doit forcer les deux GPU à communiquer pour que l'image soit la même sur vos écrans. Donc les performances de l'ordinateur se dégradent considérablement. Cela demande plus d'effort que d'afficher simplement les fonds d'écran. Certaines technologies multi-GPU (Nvidia SLI, Nvidia Optimus, AMD CrossFire...) résolvent ce problème, mais cela ne marchera pas si vous utilisez un GPU Nvidia avec une carte graphique intégrée Intel, par exemple.

Vous pouvez toujours modifier le GPU dans les pilotes de votre carte graphique ou dans les paramètres généraux de votre système. Nous vous déconseillons quand même fortement de le faire, car cela ne va pas améliorer les performances de votre système.