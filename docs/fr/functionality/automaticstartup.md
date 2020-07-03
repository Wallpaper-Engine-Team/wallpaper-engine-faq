---
tags:
  - exécution automatique
  - démarrage
---

# Démarrage automatique

Wallpaper Engine peut s’exécuter automatiquement au démarrage de votre ordinateur en choisissant cette option l'onglet "Général" des paramètres de Wallpaper Engine. En haut, vous pourrez activer l'option d'exécution automatique qui lancera discrètement l'application en arrière-plan à chaque démarrage de votre système.

## Quelle est la différence entre l'option de démarrage "priorité élevée" et l'option de démarrage "normal" ?

Lorsque vous sélectionnez l'option priorité élevée, Wallpaper Engine s'enregistre comme un service Windows. Wallpaper Engine démarrera avant les autres programmes configurés pour démarrer automatiquement avec Windows. Cela n'a aucune incidence sur les performances de l'application.

L'inconvénient de cette option, c'est qu'elle peut être moins fiable : certains antivirus pourront empêcher Wallpaper Engine de démarrer, car ils penseront qu'il s'agit un comportement malveillant.

## J'ai activé l'exécution automatique, mais ça ne marque pas. Que puis-je faire ?

Si vous utilisez l'option *priorité élevée*, essayez de la désactiver pour passer en mode *normal*. Comme expliqué ci-dessus, le mode priorité élevée permet un démarrage plus rapide, mais peut être bloqué par des logiciels antivirus.

If you are using normal-priority option and the app is not launching alongside Windows, try changing the option to high-priority and see if the problem goes away.

If neither the high-priority or normal-priority option work for you, check the antivirus software you have installed on your system. Some antivirus and firewall applications sometimes block Wallpaper Engine from automatically starting when your computer boots up. Your antivirus software likely has a "whitelist" feature which allows you to ignore certain folders or applications, make sure to whitelist the wallpaper_engine install directory and all executables in it.

Another rare cause can be that if you (or an application on your system) set the Wallpaper Engine .exe files to be run as admin only then it cannot automatically start either, you will need to remove the admin setting and toggle the automatic startup off and back on.

If the automatic startup does not work, the answer virtually always is somehow related to overzealous antivirus software. If you have antivirus or firewall applications installed, please double-check all their settings and security levels.

## Wallpaper Engine starts with Windows but (some) wallpapers are not shown

 Check if the Wallpaper Engine icon is visible in the Windows tray next to the clock after you start your computer. If the icon is there after your system starts but either some or none of your monitors have their respective wallpapers shown, there is a problem with your graphics card drivers. Essentially, your graphics card drivers keep assigning your monitors new identifiers which leads Wallpaper Engine to believe that you are trying to configure a new monitor. You can fix this by changing the *"Monitor identification"* option in the *General* tab of the Wallpaper Engine settings to *Layout* or *GDI*. We also recommend that you do a clean re-installation of your graphics card drivers in this case, as it's an indicator for an underlying problem with your Windows installation.

 ## Wallpaper Engine assigns wrong wallpapers at system start-up

 This is the same problem as in the previous section, if you have multiple monitors and the wallpapers are being assigned to the wrong monitor at start-up, try changing the *Monitor identification* option in the *General* tab of the Wallpaper Engine settings to *Layout* or *GDI*.