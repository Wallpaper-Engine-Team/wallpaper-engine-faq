---
sidebarDepth: 2
---

# Kommandozeilen-Befehle

Wallpaper Engine kann mit Kommandozeilen-Befehlen gesteuert werden. Dies erlaubt es dir auf die meisten Funktionalitäten der App über eine Verknüpfung, ein Makro-Script oder jegliche Art von Script oder Code deiner Wahl zuzugreifen. Du kannst so beispielsweise alle Hintergründe pausieren oder stoppen, die Hintergründe wechseln oder sogar die Einstellungen laufender Hintergründe verändern.

Stelle zunächst sicher, dass Wallpaper Engine bereits läuft und sende dann einen Befehl an den Hauptprozess des Programms, *wallpaper32.exe* (oder*wallpaper64.exe* wenn du die 64-Bit-Version der Anwendung nutzt), du kannst dabei alle Befehle nutzen, die weiter unten in dieser Anleitung aufgelistet sind. Die Anwendungsdateien können im Installationsverzeichnis `wallpaper_engine` gefunden werden.

Alle Kommandos werden als Wert für den Parameter `-control` übergeben. So wird der Befehl zum Pausieren beispielsweise so ausgeführt:

``` powershell
wallpaper32.exe -control pause
```

Stelle sicher, dass du die doppelten Anführungszeichen **"** verwendest, wenn ein Parameter Leerzeichen enthält:

``` powershell
wallpaper32.exe -control openWallpaper -file "C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\projects\myprojects\myWallpaper\project.json"
```

### Beispiel: Verknüpfung zum Öffnen eines Hintergrundes in einem Fenster

Das folgende Beispiel erlaubt es dir eine beliebige Anzahl an Hintergründen in jeweils einem Fenster über eine Windows-Verknüpfung zu öffnen. Du kannst diesen Prozess wiederholen um eine beliebige Anzahl an Fenstern öffnen, was beispielsweise nützlich für Streamer sein kann, welche Wallpaper Engine nutzen wollen um Abwesenheitsanimationen oder dynamische Übergänge zu erstellen.

Gehe zunächst in das Installationsverzeichnis `wallpaper_engine` und rechtsklicke auf entweder `wallpaper32.exe` oder `wallpaper64.exe`, wähle dann `Senden an` und klicke daraufhin auf `Desktop (Verknüpfung erstellen)` um eine neue Verknüpfung für Wallpaper Engine auf deinem Desktop zu erstellen. Navigiere zu deiner neuen Verknüpfung und gib ihr einen sinnvollen Namen für deinen Anwendungsfall. Klicke danach mit einem Rechtsklick auf die Verknüpfung und wähle **Eigenschaften** aus.

![Wallpaper Engine - Verknüpfungseigenschaften](/img/faq/target.gif)

Du solltest nun den Reiter **Verknüpfung** sehen mit einer Zeile namens **Ziel**. Diese Zeile zeigt derzeit nur auf Wallpaper Engine. An dieser Stelle müssen wir die Zeile editieren und den Befehl `openWallpaper` mit dem vollständigen Pfad zu deinem Hintergrund und dem Parameter `playInWindow` einfügen, wie im Beispiel unten gezeigt wird (du kannst das Beispiel kopieren und an deinen Anwendungsfall anpassen):

```bash
"C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\wallpaper64.exe" -control openWallpaper -file "C:\Program Files (x86)\Steam\steamapps\workshop\content\431960\123456789\scene.pkg" -playInWindow "Wallpaper #1" -width 1920 -height 1080
```

Überprüfe die folgenden Dinge wenn du diesen Befehl einstellst:

* Stelle sicher, dass der Pfad zu deiner wallpaper32.exe / wallpaper64.exe korrekt bleibt. Das Beispiel oben nutzt die Standardpfad von Steam.
* Stelle sicher, dass du den korrekten Pfad zu deinem Hintergrund angibst. Das Beispiel nutzt exemplarisch die Workshop-ID **123456789**, du musst diese ändern, damit dein Hintergrund angezeigt wird. Du kannst an dieser Stelle auch jede unterstützte Datei auf deinem Computer nutzen.
  * Der vollständige Pfad für jeden Hintergrund kann gefunden werden, indem du mit Rechtsklick auf einen Hintergrund in Wallpaper Engine klickst und dann **Im Dateimanager öffnen** auswählst. Für Hintergründe vom Type Szene solltest du allgemein auf die zugehörige *project.json* zeigen, für Video-Hintergründe wirst du wahrscheinlich eine Datei vom Typ *.mp4* finden und für Web-Hintergründe heißt die jeweilige Datei normalerweise *index.html*.
* Gib dem Fenster einen einzigartigen Namen. Das Beispiel oben verwendet **Wallpaper #1** als Namen. **Wenn du mehrere Fenster öffnen möchtest, weise ihnen jeweils allen einen einzigartigen Namen zu.**
* Gegebenenfalls möchtest du auch eine andere Auflösung verwenden, das Beispiel oben verwendet 1920x1080 (Full HD). Ändere dazu die Parameter `width` und `height` entsprechend.

## Übersicht über alle Befehle

### Pause

Pausiert alle Hintergründe.

``` powershell
-control pause
```

### Stoppen

Stoppt alle Hintergründe.

``` powershell
-control stop
```

### Abspielen

Spielt alle pausierten oder gestoppten Hintergründe wieder ab.

``` powershell
-control play
```

### Stumm schalten

Schaltet alle Hintergründe stumm.

``` powershell
-control mute
```

### Laut schalten

Schaltet die Tonwiedergabe aller Hintergründe wieder an.

``` powershell
-control unmute
```

### Hintergrund öffnen

Lädt einen neuen Hintergrund für einen angegebenen Bildschirm (oder den ersten Bildschirm wenn keiner angegeben wurde). Du kannst entweder jeweils die Parameter `location` oder `monitor` verwenden, um zu entscheiden auf welchem Bildschirm der Hintergrund erscheinen soll. Alternative kannst du den Hintergrund auch in einem Fenster mit dem Parameter `playInWindow` öffnen.

``` powershell
-control openWallpaper -file <string> [-location <string>] [-monitor <number>]
        [-playInWindow <string>] [-width <number>] [-height <number>]
        [-x <number>] [-y <number>] [-preset <string>]
```

* **file:** Pfad zur project.json des Hintergrundes den du öffnen möchtest, oder der direkte Pfad zur Hintergrunddatei (.mp4, usw.).
* **location *(optional)*:** Interne ID des Bildschirms. Du kannst diese in der config.json finden, diese sind jeweils speziell von deinem PC generiert.
* **monitor *(optional)*:** Index des Bildschirms auf dem das Hintergrundbild geladen werden soll, startet bei 0.
* **preset *(optional)*:** Name einer Hintergrund-Vorkonfigurations. Die Vorkonfiguration muss zuvor von dir in der Anwendung angelegt und gespeichert werden.
* **playInWindow *(optional)*:** Name des Fensters für den Fall, dass mehrere Hintergründe in mehreren Fenstern geöffnet werden sollen.
  * **width *(optional)*:** Breite des Fensters.
  * **height *(optional)*:** Höhe des Fensters.
  * **x *(optional)*:** Horizontale Position des Fensters.
  * **y *(optional)*:** Vertikale Postion des Fensters.

### Nächster Hintergrund

Springt zum nächsten Hintergrund auf dem angegebenen Bildschirm oder allen Bildschirmen wenn keiner angegeben wurde.

``` powershell
-control nextWallpaper [-location <string>] [-monitor <number>]
```

### Hintergrund entfernen

Entfernt einen Hintergrund von einem angegebenen Bildschirm oder Fenster, entfernt ansonsten alle Hintergründe.

``` powershell
-control closeWallpaper [-location <string>] [-monitor <number>]
```

* **location *(optional)*:** Interne ID des Bildschirms oder des Fensternamens.
* **monitor *(optional)*:** Index des Bildschirms auf dem das Hintergrundbild geschlossen werden soll, startet bei 0.

### Wiedergabeliste öffnen

Lädt einen neuen Hintergrund für einen angegebenen Bildschirm (oder den ersten Bildschirm wenn keiner angegeben wurde). Du kannst entweder jeweils die Parameter location oder monitor verwenden, um zu entscheiden auf welchem Bildschirm der Hintergrund erscheinen soll.

``` powershell
-control openPlaylist -playlist <string> [-location <string>] [-monitor <number>]
```

* **playlist:** Name der Wiedergabeliste, welche du in Wallpaper Engine erstellt und gespeichert hast.
* **location *(optional)*:** Interne ID des Bildschirms. Du kannst diese in der config.json finden, diese sind jeweils speziell von deinem PC generiert.
* **monitor *(optional)*:** Index des Bildschirms auf dem die Wiedergabeliste geladen werden soll, startet bei 0.

### Open Profile

Applies an existing profile by name to all displays that was created and saved in Wallpaper Engine's display menu.

``` powershell
-control openProfile -profile <string>
```

* **profile:** Name of the profile you have created in Wallpaper Engine.

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

