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

## Problems with RGB hardware after hibernation

In rare cases, hibernation may cause RGB hardware to stop working in combination with Wallpaper Engine. If some or all of your RGB hardware stops working correctly after your system wakes up from hibernation, try enabling the **Safe start after hibernation** option in the **General** tab of the Wallpaper Engine settings, this solves these types of issues for the majority of affected users.

Additionally, you can use the **Plugin load delay** option at the bottom of the **Plugins** tab of the Wallpaper Engine settings to delay the connection attempt that Wallpaper Engine makes to your RGB hardware. You can try a value of **30 seconds** and test if that fixes the problem for you.

### Corsair

Some hardware such as **Corsair system memory (RAM) have software controls disabled by default**, meaning that your memory modules will not light up according to Wallpaper Engine unless you allow this in the iCUE software settings. Make sure the "Enable full software control" option in your iCUE device settings in the memory section is selected:

![Enable full software control in iCUE](./icue.png)

Double-check this option for any other hardware parts which are not working properly.

Note that iCUE is used in *exclusive mode*, this means that Wallpaper Engine will take priority over other iCUE-compatible software such as games. If you want your games to animate your keyboard, go to the **Performance** tab of the Wallpaper Engine settings and set the **Other applications fullscreen** option to **Stop (free memory)** to stop wallpapers while in-game. Alternatively, disable either the RGB plugin or disable the RGB option on individual wallpapers.

For support with Corsair iCUE hardware, please contact Corsair directly:

[help.corsair.com](https://help.corsair.com/)

Should you run into any issues with Corsair's support, you can still reach out to us and we will see if we can help you.

### Razer

Most problems related to Razer RGB hardware can be fixed by doing a clean reinstallation of the Razer software suite while Wallpaper Engine is turned off:

1. Désactivea complètement Wallpaper Engine. Il est très important de ne pas ignorer cette étape.
2. Désinstallez tous les logiciels Razer de votre ordinateur via Windows.
3. Téléchargez la version la plus récente de Razer Synapse 3 et installez-la. **Attention :** n'oubliez de réinstaller le module **Chroma Connect** de Razer Synapse.
4. Redémarrez vos ordinateur, ne lancez pas Wallpaper Engine avant d'avoir redémarrer Windows.

See if this resolves your issues with your RGB hardware. For additional support with Razer hardware, please contact Razer directly:

[support.razer.com](https://support.razer.com/)

Should you run into any issues with Razer's support, you can still reach out to us and we will see if we can help you.

#### Razer Synapse 2 et plus ancien

We only support Razer Synapse 3 or newer. If you are using Razer Synapse 1 or Razer Synapse 2, make sure to fully uninstall them and upgrade to the latest version of Razer Synapse. In the past, some users had issues with remnants of old Razer Synapse having been left on their system. If you had Razer Synapse 2 or older installed and have issues with your RGB lighting or even experience crashes with the RGB plugin being enabled, you may need to find any leftovers of old Razer Synapse versions on your system and delete it.

If your Razer hardware is relatively old and does not support Razer Synapse 3 or newer, unfortunately its RGB lighting is not compatible with Wallpaper Engine.