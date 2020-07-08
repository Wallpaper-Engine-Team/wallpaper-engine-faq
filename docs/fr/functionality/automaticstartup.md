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

Si vous utilisez le mode normal et que l'application ne se lance pas au démarrage de Windows, essayez de changer l'option en priorité élevée et voyez si le problème disparaît.

Si aucune de ces solutions ne fonctionne, essayez d'aller voir du côté de votre antivirus. Certains antivirus et pare-feu empêchent parfois Wallpaper Engine de s'exécuter automatiquement lorsque votre ordinateur démarre. Votre antivirus a probablement une fonctionnalité de "liste blanche" qui vous permet de lui demander d'ignorer certains dossiers ou applications. Assurez-vous de mettre dans cette liste le répertoire d'installation de wallpaper_engine et tous les exécutables qu'il contient.

Une autre cause de ce problème peut venir du fait que vous, ou une application sur votre système, avez défini les fichiers .exe de Wallpaper Engine pour qu'ils soient exécutés en tant qu'administrateur uniquement. Ils ne peuvent donc pas s'exécuter automatiquement. Vous devrez supprimer le paramètre administrateur et désactiver le démarrage automatique, avant de le réactiver.

Si l'exécution automatique ne fonctionne toujours pas, c'est probablement encore et toujours de la faute d'un antivirus trop zélé. Si vous avez installé des antivirus ou un pare-feu, veuillez vérifier leurs paramètres et leurs niveaux de sécurité.

## Wallpaper Engine démarre en même temps que Windows, mais (certains) fonds d'écran ne fonctionnent pas

 Vérifiez si l'icône Wallpaper Engine est toujours visible dans la zone de notification, à côté de l'horloge, quand vous démarrez votre ordinateur. Si l'icône est là après le démarrage de votre système, mais que vos écrans n'ont pas leurs fonds d'écran respectifs, c'est qu'il y a un problème avec les pilotes de votre carte graphique. Les pilotes de votre carte graphique attribuent à vos écrans de nouveaux identifiants, ce qui fait croire à Wallpaper Engine que vous essayez de configurer un nouvel écran. Vous pouvez corriger ce problème en passant l'option *Identification d'écrans* dans l'onglet *Général* des paramètres de Wallpaper Engine sur *Disposition* ou *GDI*. Nous vous recommandons également d'effectuer une réinstallation propre de vos pilotes de carte graphique, car il a probablement un problème sous-jacent avec votre installation de Windows.

 ## Wallpaper Engine mélange les fonds d'écran au démarrage

 Comme dans la section précédente, essayer de passer l'option *Identification d'écrans* dans l'onglet *Général* des paramètres de Wallpaper Engine sur *Disposition* ou *GDI*.