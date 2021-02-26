---
sidebarDepth: 2
---

# Contrôles des lignes de commandes

Vous pouvez contrôler Wallpaper Engine avec des arguments de lignes de commandes. Ceci vous permet d'accéder à la plupart des fonctionnalités de l'application par l'intermédiaire d'un raccourci, d'une liaison macro ou de tout type de code ou de script auto-écrit de votre choix. Par exemple, vous pouvez mettre en pause ou stopper tous les fonds d'écran, changer des fonds d'écran, voire même modifier les paramètres les paramètres d'exécution des fonds d'écran.

Vérifiez que Wallpaper Engine est en cours d'exécution, puis envoyez une commande en lançant le processus principal du programme, *wallpaper32.exe* (ou *wallpaper64.exe* si vous utilisez une version 64 bits de l'application), avec n'importe lequel des arguments de commandes figurant dans ce guide. Vous trouverez les fichiers exécutables dans le répertoire d'installation `wallpaper_engine`.

Toutes les commandes sont émises en tant que valeur pour le paramètre `-control`. Par exemple, la commande de pause peut être exécutée de la manière suivante :

``` powershell
wallpaper32.exe -control pause
```

Veillez à utiliser le caractère guillemet **"** pour les chaînes où figurent des espaces :

``` powershell
wallpaper32.exe -control openWallpaper -file "C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\projects\myprojects\myWallpaper\project.json"
```

### Exemple de raccourci : ouverture d'un fond d'écran dans une fenêtre

L'exemple suivant vous permet d'ouvrir plusieurs fonds d'écran dans une fenêtre via un raccourci Windows. Vous pouvez recommencer ce processus afin d'ouvrir plusieurs fonds d'écran dans une fenêtre distincte qui peut s'avérer utile pour les streamers qui souhaitent utiliser Wallpaper Engine pour tout type d'animation ou d'écran d'inactivité.

Pour commencer, accédez au répertoire `wallpaper_engine` et faites un clic droit sur `wallpaper32.exe` ou `wallpaper64.exe`, puis positionnez le curseur sur `Envoyer vers` et `Bureau (créer un raccourci)` afin de créer sur votre bureau un nouveau raccourci vers le processus Wallpaper Engine. Ensuite, repérez votre nouveau raccourci et renommez-le à votre convenance. Ensuite, faites un clic droit sur ce raccourci, puis sélectionnez **Propriétés**.

![Wallpaper Engine shortcut properties](/img/faq/target.gif)

Vous devriez voir l'onglet **Raccourci** avec une ligne intitulée **Cible**. Cette ligne indique l'emplacement actuel de Wallpaper Engine. Vous devez modifier cette entrée en y ajouter la commande `openWallpaper` avec le chemin complet vers votre fond d'écran et paramètre `playInWindow`, comme indiqué dans l'exemple ci-dessous (il est peut-être préférable de faire un copier-coller et d'ajuster la commande à vos besoins) :

```bash
"C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\wallpaper64.exe" -control openWallpaper -file "C:\Program Files (x86)\Steam\steamapps\workshop\content\431960\123456789\scene.pkg" -playInWindow "Wallpaper #1" -width 1920 -height 1080
```

Vérifiez les éléments suivants lors de la configuration de cette commande :

* Veillez à ce qu'il n'y ait aucune faute de frappe dans le chemin d'accès pour wallpaper32.exe / wallpaper64.exe. Dans l'exemple, nous avons utilisé le répertoire par défaut de Steam.
* Vérifiez que vous utilisez le bon chemin d'accès pour votre fond d'écran. Dans l'exemple ci-dessus, nous avons utilisé l'ID Workshop **123456789**, vous devez le modifier pour que votre fond d'écran fonctionne. Vous pouvez également indiquer tout fichier pris en charge se trouvant sur votre ordinateur.
  * Vous trouverez le chemin d'accès de tout fond d'écran en faisant un clic droit sur celui-ci depuis Wallpaper Engine et en sélectionnant **Ouvrir dans l'explorateur de fichiers**. Pour les fonds d'écran de type Scène, il est conseillé de sélectionner le fichier *project.json* ; pour les fonds d'écran de type Vidéo, il s'agira probablement d'un fichier *.mp4* et pour les fonds d'écran de type Web, vous trouverez un fichier appelé *index.html*.
* Donnez à votre fenêtre un nom unique. Dans l'exemple ci-dessus, nous utilisons **Wallpaper #1** comme nom. **Si vous voulez ouvrir plusieurs fenêtres, attribuez-leur à chacune un nom unique.**
* Vous pouvez également ajuster la résolution. Dans l'exemple ci-dessus, nous utilisons 1920x1080 (Full HD). Changer les paramètres `largeur` et `hauteur`.

## Vue générale des commandes

### Pause

Mettre en pause tous les fonds d'écran.

``` powershell
-control pause
```

### Stop

Arrêter tous les fonds d'écran.

``` powershell
-control stop
```

### Jouer

Reprend tous les fonds d'écran mis en pause ou arrêtés.

``` powershell
-control play
```

### Désactiver le son

Désactive le son de tous les fonds d'écran.

``` powershell
-control mute
```

### Réactiver le son

Réactive le son de tous les fonds d'écran.

``` powershell
-control unmute
```

### Ouvrir un fond d'écran

Charge une nouveau fond d'écran pour un moniteur bien précis ou pour le premier moniteur si aucun moniteur n'a été indiqué. Vous pouvez utiliser le paramètre `location` ou `monitor` pour choisir sur quel moniteur chargeur le fond d'écran ou ouvrir un fond d'écran dans une fenêtre avec la paramètre `playInWindow`.

``` powershell
-control openWallpaper -file <string> [-location <string>] [-monitor <number>]
        [-playInWindow <string>] [-width <number>] [-height <number>]
        [-x <number>] [-y <number>] [-preset <string>]
```

* **file :** Chemin vers le project.json du fond d'écran que vous voulez ouvrir ou chemin direct menant au fichier du fond d'écran (.mp4, etc.).
* **location *(facultatif)* :** Identificateur interne du moniteur. Vous trouverez ces informations dans le fichier config.json (ces infos sont générées par votre PC).
* **monitor *(facultatif)* :** Index du moniteur sur lequel charger le fond d'écran, commence par 0.
* trong x-id="1">preset *(facultatif)* :</strong> nom du préréglage local à charger. Vous devez avoir créé et sauvegardé celui-ci.
* **playInWindow *(facultatif)* :** nom de la fenêtre dans laquelle vous voulez ouvrir/contrôler plusieurs fonds d'écran dans une fenêtre.
  * **width *(facultatif)* :** largeur de la fenêtre.
  * **height *(facultatif)* :** hauteur de la fenêtre.
  * **x *(facultatif)*:** emplacement horizontal de la fenêtre.
  * **y *(facultatif)* :** emplacement vertical de la fenêtre.

### Fond d'écran suivant

Passe au fond d'écran suivant d'un moniteur bien précis ou de tous les moniteur si aucun moniteur n'est indiqué.

``` powershell
-control nextWallpaper [-location <string>] [-monitor <number>]
```

### Retirer le fond d'écran

Supprime un fond d'écran d'une fenêtre ou d'un moniteur indiqué, ou supprime tous les fonds d'écran.

``` powershell
-control closeWallpaper [-location <string>] [-monitor <number>]
```

* **location *(facultatif)* :** Identificateur interne du nom de la fenêtre ou du moniteur que vous avez indiqué.
* **monitor *(facultatif)* :** Index du moniteur à partir duquel fermer le fond d'écran, commence par 0.

### Ouvrir playlist

Charge une nouveau fond d'écran pour un moniteur bien précis ou pour le premier moniteur si aucun moniteur n'a été indiqué. Vous pouvez utiliser soit location, soit monitor parameter pour choisir le moniteur sur lequel charger le fond d'écran.

``` powershell
-control openPlaylist -playlist <string> [-location <string>] [-monitor <number>]
```

* **playlist :** Nom de la liste de lecture que vous avez créée et enregistrée dans Wallpaper Engine.
* **location *(facultatif)* :** Identificateur interne du moniteur. Vous trouverez ces informations dans le fichier config.json (ces infos sont générées par votre PC).
* **monitor *(facultatif)* :** Index du moniteur sur lequel charger la liste de lecture, commence avec 0.

### Appliquer des paramètres de fond d'écran

Applique à la volée les propriétés de fond d'écran à un fond d'écran bien précis ou à tous les fonds d'écran. Cette option vous permet, pendant l'exécution du programme, de modifier dynamiquement tout paramètre appartenant à un fond d'écran, et ce, sans ouvrir le navigateur des fonds d'écran pour les changer manuellement. Vous trouverez facilement une liste des propriétés disponibles dans le navigateur en cliquant sur l'option **Partager JSON** qui se trouve sur la droite lors de la sélection d'un fond d'écran dans le navigateur.

``` powershell
-control applyProperties -properties <JSON> [-location <string>] [-monitor <number>]
```

* **properties :** Propriétés définies comme chaîne **JSON** à appliquer. Il faut interrompre la chaîne à l'aide de `RAW~(` et `)~END` comme délimiteurs. Consultez les exemples ci-dessous !
* **location *(facultatif)* :** Identificateur interne du nom de la fenêtre ou du moniteur que vous avez indiqué.
* **monitor *(facultatif)* :** Index du moniteur sur lequel mettre à jouer les propriétés, commence par 0.

Exemple visant à changer un paramètre d'un fond d'écran nommé `rate` pour le configurer sur 10 :

``` cpp 
-control applyProperties -properties RAW~({"rate":10})~END
```

Exemple de changement du paramètre de couleurs d'un fond d'écran pour passer au rouge (`"1 0 0"` représente les valeurs *RGB*) :

``` cpp
-control applyProperties -properties RAW~({"schemecolor":"1 0 0"})~END
```

### Masquer les icônes du bureau

Masque les icônes du bureau.

``` powershell
-control hideIcons
```

### Afficher les icônes du bureau

Affiche les icônes du bureau.

``` powershell
-control showIcons
```

