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

If you use multiple audio devices (especially when using USB or Bluetooth audio devices) and notice that audio cuts out when a device disconnects or reconnects, Windows sometimes does not reliably switch audio devices on-the-fly for running programs. This cannot be fixed from our end, in these rare cases you may need to restart Wallpaper Engine so that Windows starts to correctly handle the audio output again. You can also try and reinstall and update any audio drivers and see if that alleviates these types of issues.

## Reset all audio codecs

If audio output is still not playing at this point, some audio codecs may be broken, this is mainly relevant when using **Video** type wallpapers. You can double-check this by right-clicking on your wallpaper in Wallpaper Engine and selecting **Open in Explorer**. You should see the source video file (usually an **.mp4** file), open that file with Windows Media Player and check if it plays audio. **Please note:** It is very important that you test this with Windows Media Player only - other video players are irrelevant for this test as the underlying audio codecs are used by Wallpaper Engine as well. If no audio is playing in Windows Media Player, then either the video file does not have audio or the audio codecs on your system are indeed broken or missing.

In that case, you can use the *Codec Tweak Tool* as explained on the following page to reset all audio and video codecs on your system, afterwards restart Wallpaper Engine and try again:

* [Videos Black / Not Playing Properly - Codec Tweak Tool](noshow/notplaying.html#codec-tweak-tool)

