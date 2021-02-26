# Aucun son / Problèmes de sortie audio
Ce guide vous aide à déterminer tout problème lié à la lecture audio avec les fonds d'écran. Pour commencer, veillez à utiliser un fond d'écran qui comporte de l'audio. Il en existe un grand nombre totalement silencieux. Si vous avez la certitude que votre fond d'écran comporte une piste sonore, poursuivez votre lecture.

::: Avertissement / Remarque : Si le son s'allume et s'éteint continuellement pendant quelques secondes, nous invitons à consulter ce guide :

* [Le son s'allume et s'éteint par intermittence](/audio/intermittent)
:::

## Vérifier que le son n'est pas désactivé depuis Wallpaper Engine
Il existe trois options au sein de l'application qui vous permettent de désactiver la sortie sonore :

1. Dans l'onglet **Général** des paramètres de Wallpaper Engine, vous trouverez une option intitulée **Sortie audio**. Vérifiez qu'elle est bien activée.
2. Cliquez sur le bouton **Écrans** situé en haut à droite de la fenêtre principale de Wallpaper Engine. Vous accéderez alors à une vue générale de tous vos écrans. Chacun d'eux est comporte un bouton de désactivation du son qui se trouve dans le coin inférieur gauche. Vérifiez que le mode muet de vos écrans n'est pas activé.
3. Lorsque vous sélectionnez un fond d'écran, vous remarquerez une option **Volume** situé sur la droite. Veillez à ce qu'elle ne soit pas configurée sur 0 ou à un niveau trop faible. Si l'option est paramétrée sur **Son désactivé dans les paramètres d'écrans**, votre écran est en mode muet. Reportez-vous alors à l'étape 2 et désactivez le mode muet.

## Vérifier le mélangeur audio de Windowd
Wallpaper Engine laisse à Windows la gestion de toutes les sorties audio. Par conséquent, si le son n'est pas désactivé depuis l'interface de Wallpaper Engine, le problème est nécessairement lié à votre configuration de Windows. Pour commencer, accédez au mélangeur audio de Windows et vérifiez que le son émis par Wallpaper Engine n'est pas désactivé ou configuré sur un volume très faible, comme le montre la capture d'écran suivante :

![Raise volume and unmute Wallpaper Engine in the Windows audio mixer](./audiomixer.png)

## Vérifier le périphérique audio sélectionné
Il est également possible que Windows n'ait pas sélectionné le bon périphérique de sortie audio pour Wallpaper Engine. Essayez alors de forcer l'utilisation du périphérique de sortie audio souhaité :

1. Faites un clic droit sur l'icône audio à côté de l'horloge dans la barre des tâches de Windows et sélectionnez **Ouvrir les paramètres de son**.
2. Faites entièrement défiler vers le bas la page qui s'ouvre, puis cliquez sur **Préférences de volume des applications et des appareils**.
3. Une liste de toutes les applications qui émettent du son s'affiche. Repérez Wallpaper Engine et, dans la colonne **Sortie**, sélectionnez le bon périphérique de sortie audio. Si vous n'êtes pas sûr de vous, essayez toutes les solutions possibles. Vous devrez peut-être redémarrer Wallpaper Engine pour que votre sélection soit prise en compte.

Si vous utilisez plusieurs périphériques audio (et plus particulièrement des périphériques audio Bluetooth ou USB) et que vous remarquez des interruptions du son lors de la déconnexion et de la reconnexion d'un périphérique, il est possible que Windows ne bascule pas à la volée d'un périphérique audio à un autre pour les programmes en cours d'exécution. Nous ne pouvons pas régler ce problème, et dans ces rares cas, vous devrez peut-être redémarrer Wallpaper Engine pour que Windows gère correctement la sélection de la sortie audio. Vous pouvez également essayer de réinstaller et de mettre à jour les pilotes audio. Cette solution peut réduire la fréquence de survenue de ces problèmes.

## Réinitialiser tous les codecs audio

Si la sortie audio ne génère toujours aucun son, il est possible que certains codecs audio soient défectueux. Ce problème est surtout mis en évidence lors de l'utilisation de fonds d'écran de type **vidéo**. Pour en avoir le cœur net, faites un clic droit sur votre fond d'écran dans Wallpaper Engine et sélectionnez **Ouvrir dans l'explorateur**. Vous devriez alors voir le fichier vidéo source (généralement un fichier **.mp4**), ouvrez ce fichier avec le Lecteur Windows Media et vérifiez s'il y a du son. **Remarque :** il est très important d'effectuer ce test dans le Lecteur Windows Media qui utilise les même codecs audio sous-jacents que Wallpaper Engine. Si le Lecteur Windows Media ne produit aucun son, alors soit le fichier vidéo ne comporte aucune piste sonore, soit les codecs audio sur votre ordinateur sont défectueux ou absents.

In that case, you can use the *Codec Tweak Tool* as explained on the following page to reset all audio and video codecs on your system, afterwards restart Wallpaper Engine and try again:

* [Videos Black / Not Playing Properly - Codec Tweak Tool](noshow/notplaying.html#codec-tweak-tool)

