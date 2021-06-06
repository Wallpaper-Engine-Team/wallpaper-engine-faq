---
tags:
  - matériel
---

# Prise en charge du matériel RGB (iCUE & Chroma)

Wallpaper Engine est compatible avec [**Razer Chroma**](https://www.razer.com/chroma) et [**Corsair iCUE**](https://www.corsair.com/icue), ce qui inclue les systèmes intégrés à leurs écosystèmes.

## Comment activer ou désactiver le matériel RGB

Dans l'onglet "Plug-ins" des paramètres de Wallpaper Engine, vous trouverez les **plug-ins iCUE & Chroma SDK**. Vous pouvez activer ou désactiver le chargement de ce plug-in RGB général en cochant la case à gauche. Vous pouvez également cliquer sur la roue dentée à côté pour avoir accès à d'autres paramètres.

La prise en charge RGB peut être désactivée sur chaque fond d'écran. En haut des propriétés de chaque fond d'écran, vous pouvez trouver l'option **Activer les effets LED**, si le plug-in est activé. Vous pourrez alors autoriser ou non un fond d'écran à contrôler vos lumières RGB.

## Les couleurs du matériel RGB sont bien trop fortes

Par défaut, nous intensifions les couleurs RGB. Pour la plupart des fonds d'écran, c'est une bonne idée. Si vous n'aimez pas cet effet, vous pouvez désactiver l'option **Augmenter la luminosité des LED** dans les paramètres du plug-in RGB.

## Mon matériel RGB ne fonctionne pas

Wallpaper Engine n'est pas capable de communiquer directement avec votre matériel RGB, toutes les informations concernant la couleur sont d'abord envoyées aux pilotes RGB. Si votre matériel ne fonctionne pas, le problème doit venir du côté du logiciel associé à votre matériel. Certains éléments très anciens ne sont plus entièrement pris en charge par leurs fournisseurs et ne fonctionneront plus correctement. Nous ne pouvons malheureusement rien faire de plus pour vous aider.

Si l'onglet *Plug-ins* des paramètres de Wallpaper Engine n'est pas visible, c'est que *Redistribuable Visual C++ pour Visual Studio 2015* doit être corrompu ou manquant sur votre ordinateur. Ces composants sont indispensables. Vous pouvez télécharger ce pack sur le site de Microsoft et l'installer, cela devrait régler ce problème après un redémarrage :

* [Redistribuable Visual C++ pour Visual Studio 2015](https://www.microsoft.com/download/details.aspx?id=48145)

## Problèmes avec le matériel RGB après une mise en veille

Dans de rares cas, la mise en veille peut empêcher le matériel RGB de fonctionner en combinaison avec Wallpaper Engine. Si une partie ou la totalité de votre matériel RGB cesse de fonctionner correctement après le sortie de votre système d'une veille, essayez d'activer l'option **Lancement sécurisé après la mise en veille prolongée** dans l'onglet **Général** des paramètres de Wallpaper Engine. Cette méthode règle ce type de problèmes pour la majorité des utilisateurs concernés.

En outre, vous pouvez utiliser l'option **Chargement retardé des plug-ins** en bas de l'onglet **Plug-ins** des paramètres de Wallpaper Engine pour retarder la tentative de connexion de Wallpaper Engine à votre matériel RGB. Vous pouvez essayer une valeur de **30 secondes** et tester si cette méthode règle le problème.

### Corsair

Certains matériels comme la **mémoire système (RAM) Corsair ont des commandes logicielles désactivées par défaut**. Cela signifie que Wallpaper Engine ne pourra pas allumer les modules de mémoire, sauf si vous l'y autorisez dans les paramètres iCUE. Assurez-vous que l'option "Activer le contrôle total du logiciel" est activée dans les paramètres de votre appareil iCUE :

![Activer le contrôle total du logiciel avec iCUE](./icue.png)

Activer cette option pour tous les autres matériels qui ne fonctionnent pas correctement.

iCUE est utilisé en *mode exclusif*, cela veut dire que Wallpaper Engine aura la priorité sur les autres logiciels compatibles iCUE, comme des jeux par exemple. Si vous souhaitez que vos jeux interagissent avec votre clavier, allez dans l'onglet **Performances** des paramètres de Wallpaper Engine et choisissez **Arrêter (mémoire libre)** pour l'option **Autres applications en plein écran** afin d'arrêter les fonds d'écran pendant que vous jouez. Vous pouvez également désactiver le plug-in RGB ou désactiver l'option RGB d'un fond d'écran.

Si vous souhaitez de l'aide pour votre matériel Corsair iCUE, contactez directement Corsair :

[help.corsair.com/hc/fr](https://help.corsair.com/)

Si vous rencontrez un problème avec Corsair, vous pourrez toujours nous contacter par la suite pour que nous vous aidions.

### Razer

Il est possible de régler la plupart des problèmes liés aux périphériques Razer RGB en effectuant une installation "propre" de la suite de logiciels Razer après avoir désactivé Wallpaper Engine :

1. Désactivea complètement Wallpaper Engine. Il est très important de ne pas ignorer cette étape.
2. Désinstallez tous les logiciels Razer de votre ordinateur via Windows.
3. Téléchargez la version la plus récente de Razer Synapse 3 et installez-la. **Attention :** n'oubliez de réinstaller le module **Chroma Connect** de Razer Synapse.
4. Redémarrez vos ordinateur, ne lancez pas Wallpaper Engine avant d'avoir redémarrer Windows.

Voyez si cette manœuvre a réglé vos problèmes concernant votre périphérique RGB. Pour toute aide supplémentaire concernant les périphériques Razer, veuillez directement contacter Razer :

[razer.com/fr-fr/help](https://support.razer.com/)

Si vous rencontrez un problème avec Razer, vous pourrez toujours nous contacter par la suite pour que nous vous aidions.

#### Razer Synapse 2 et plus ancien

Notre logiciel n'est compatible qu'avec Razer Synapse 3 et ses versions les plus récentes. Si vous utilisez Razer Synapse 1 ou Razer Synapse 2, assurez-vous de les désinstaller complètement avant de mettre à jour votre version de Razer Synapse. Par le passé, beaucoup d'utilisateurs ont eu des problèmes à cause d'anciennes versions de Razer Synapse. Si vous avez installé Razer Synapse 2 ou une version antérieure et que vous rencontrez des problèmes d'éclairage RGB ou le plug-in RGB plante, c'est qu'il reste des traces d'anciennes versions de Razer Synapse dans votre système. Vous devrez les retirer.

Si votre matériel Razer est ancien et n'est pas compatible avec Razer Synapse 3 ou une version plus récente, alors votre éclairage RGB n'est pas compatible avec Wallpaper Engine.