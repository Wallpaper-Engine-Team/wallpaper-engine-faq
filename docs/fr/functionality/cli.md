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

### Shortcut example: Opening a wallpaper in a window

The following example allows you to open any number of wallpapers in a window through a Windows shortcut. You can repeat this process to open any number of wallpapers in a separate window which may be useful for streamers who want to utilize Wallpaper Engine for any type of idle screen or animation.

First, go to the `wallpaper_engine` directory and right-click on either `wallpaper32.exe` or `wallpaper64.exe` and hover over `Send to` and then `Desktop (create shortcut)` to create a new shortcut to the Wallpaper Engine process on your desktop. Next, find your new shortcut and rename it to fit your use-case. Afterwards, right-click on it, then select **Properties**.

![Wallpaper Engine shortcut properties](/img/faq/target.gif)

You should see the **Shortcut** tab with a line called **Target**. This line will currently just point to Wallpaper Engine. You now need to edit it to add the `openWallpaper` command with the full path to your wallpaper and the `playInWindow` parameter as shown in the example below (you may want to copy-paste it and adjust it to fit your needs):

```bash
"C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\wallpaper64.exe" -control openWallpaper -file "C:\Program Files (x86)\Steam\steamapps\workshop\content\431960\123456789\scene.pkg" -playInWindow "Wallpaper #1" -width 1920 -height 1080
```

Check the following things when configuring this command:

* Make sure the path to your wallpaper32.exe / wallpaper64.exe stays correct. The example above uses the default Steam directory.
* Make sure to use the correct path to your wallpaper. The example above uses an example Workshop ID **123456789**, you must change this in order for your wallpaper to work. You can also point at any supported file on your computer.
  * You can find the full path of any wallpaper by right-clicking on it in Wallpaper Engine and selecting **Open in Explorer**. For Scene type wallpapers, you generally want to point at the *project.json* file, for video wallpapers this will likely be an *.mp4* file and for web wallpapers you will find a file called *index.html*.
* Give your window a unique name. The example above uses **Wallpaper #1** as a name. **If you want to open multiple windows, simply assign each of them a unique name.**
* You may also want to adjust the resolution, the example above uses 1920x1080 (Full HD). Change the `width` and `height` parameters accordingly.

## Vue générale des commandes

### Pause

Pauses all wallpapers.

``` powershell
-control pause
```

### Stop

Stops all wallpapers.

``` powershell
-control stop
```

### Play

Resumes all wallpapers from pause or stop.

``` powershell
-control play
```

### Mute

Mutes all wallpapers.

``` powershell
-control mute
```

### Unmute

Unmutes all wallpapers.

``` powershell
-control unmute
```

### Open Wallpaper

Loads a new wallpaper for a given monitor or the first monitor if none was specified. You can use either the `location` or `monitor` parameter to choose which monitor to load the wallpaper on, or open a wallpaper in a window with the `playInWindow` parameter.

``` powershell
-control openWallpaper -file <string> [-location <string>] [-monitor <number>]
        [-playInWindow <string>] [-width <number>] [-height <number>]
        [-x <number>] [-y <number>] [-preset <string>]
```

* **file:** Path to the project.json of the wallpaper you want to open or direct path to wallpaper file (.mp4 etc).
* **location *(optional)*:** Internal identifier of the monitor. You can find these in the config.json file and they are generated by your PC.
* **monitor *(optional)*:** Index of the monitor to load the wallpaper on, begins with 0.
* **preset *(optional)*:** Name of the local preset to load, the local preset must have been created and saved by you before.
* **playInWindow *(optional)*:** Name of the window if you want to open/control multiple wallpapers in a window.
  * **width *(optional)*:** Width of window.
  * **height *(optional)*:** Height of window.
  * **x *(optional)*:** Horizontal position of window.
  * **y *(optional)*:** Vertical position of window.

### Next Wallpaper

Skips to the next wallpaper of a given monitor or all monitors if none specified.

``` powershell
-control nextWallpaper [-location <string>] [-monitor <number>]
```

### Remove Wallpaper

Removes a wallpaper from a specified monitor or window or removes all wallpapers.

``` powershell
-control closeWallpaper [-location <string>] [-monitor <number>]
```

* **location *(optional)*:** Internal identifier of the monitor or the window name you specified.
* **monitor *(optional)*:** Index of the monitor to close the wallpaper from, begins with 0.

### Open Playlist

Loads a new wallpaper for a given monitor or the first monitor if none was specified. You can use either the location or monitor parameter to choose which monitor to load the wallpaper on.

``` powershell
-control openPlaylist -playlist <string> [-location <string>] [-monitor <number>]
```

* **playlist:** Name of the playlist you have created and saved in Wallpaper Engine.
* **location *(optional)*:** Internal identifier of the monitor. You can find these in the config.json file and they are generated by your PC.
* **monitor *(optional)*:** Index of the monitor to load the playlist on, begins with 0.

### Apply Wallpaper Settings

Applies wallpaper properties on-the-fly to a given wallpaper or all wallpapers. This allows you to dynamically change any settings that belong to a wallpaper while the program is running without opening the wallpaper browser and manually changing them. You can find a list of available properties in the browser easily by clicking on **Share JSON** on the right-side when selecting any wallpaper in the browser.

``` powershell
-control applyProperties -properties <JSON> [-location <string>] [-monitor <number>]
```

* **properties:** Properties defined as **JSON** string to be applied. The string must be specially escaped with `RAW~(` and `)~END` as delimiters - see examples below!
* **location *(optional)*:** Internal identifier of the monitor or the window name you specified.
* **monitor *(optional)*:** Index of the monitor to update the properties on, begins with 0.

Example of changing a wallpaper setting named `rate` to 10:

``` cpp 
-control applyProperties -properties RAW~({"rate":10})~END
```

Example of changing a wallpaper scheme color setting to red (`"1 0 0"` represents *RGB* values):

``` cpp
-control applyProperties -properties RAW~({"schemecolor":"1 0 0"})~END
```

### Hide Desktop Icons

Hides the desktop icons.

``` powershell
-control hideIcons
```

### Show Desktop Icons

Shows the desktop icons.

``` powershell
-control showIcons
```

