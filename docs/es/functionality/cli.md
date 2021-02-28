---
sidebarDepth: 2
---

# Controles con líneas de comando

Puedes controlar Wallpaper Engine con líneas de comando, lo que te permitirá acceder a la mayoría de funciones del programa con atajos, macros o cualquier otro tipo de código de tu elección. Podrías, por ejemplo, pausar o detener todos los fondos, cambiarlos o incluso cambiar los ajustes de los fondos que tienes en uso.

Comprueba que Wallpaper Engine esté abierto y abre el proceso del programa *wallpaper32.exe* (o *wallpaper64.exe* si usas la versión 64 Bit) para enviarle un comando con cualquiera de los argumentos de comando que aparecen en esta guía. Encontrarás los ejecutables en el directorio de instalación `wallpaper_engine`.

Todos los comandos se ejecutan como un valor para el parámetro `-control`. Por ejemplo, el comando de pausa se puede ejecutar así:

``` powershell
wallpaper32.exe -control pause
```

Asegúrate de usar comillas inglesas **"** en las líneas que contienen espacios:

``` powershell
wallpaper32.exe -control openWallpaper -file "C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\projects\myprojects\myWallpaper\project.json"
```

### Ejemplo de acceso directo: Abrir un fondo en una ventana

Este ejemplo te permitirá abrir todos los fondos que quieras en una ventana a través de un acceso directo de Windows. You can repeat this process to open any number of wallpapers in a separate window which may be useful for streamers who want to utilize Wallpaper Engine for any type of idle screen or animation.

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

## Resumen de los comandos

### Pausar

Pausa todos los fondos.

``` powershell
-control pause
```

### Detener

Detiene todos los fondos.

``` powershell
-control stop
```

### Reproducir

Quita la pausa y pone en marcha todos los fondos.

``` powershell
-control play
```

### Silenciar

Silencia todos los fondos.

``` powershell
-control mute
```

### Activar sonido

Activa el sonido de todos los fondos.

``` powershell
-control unmute
```

### Abrir fondo

Carga un fondo nuevo para el monitor seleccionado o para el principal si no se especifica ninguno. Puedes usar los parámetros `location` o `monitor` para elegir en qué monitor quieres cargar el fondo o abrir un fondo en una ventana con el parámetro `playInWindow`.

``` powershell
-control openWallpaper -file <string> [-location <string>] [-monitor <number>]
        [-playInWindow <string>] [-width <number>] [-height <number>]
        [-x <number>] [-y <number>] [-preset <string>]
```

* **file:** Ubicación del archivo project.json del fondo que quieres abrir o ubicación directa al archivo del fondo (.mp4, etc).
* **location *(opcional)*:** Identificador interno del monitor. Lo encontrarás en el archivo config.json que genera el propio ordenador.
* **monitor *(opcional)*:** Índice del monitor en el que quieres cargar el fondo. Empieza por 0.
* **preset *(opcional)*:** Nombre del valor predeterminado local que quieres cargar. Tienes que haberlo creado y guardado tú de antemano.
* **playInWindow *(opcional)*:** Nombre de la ventana si quieres abrir o controlar varios fondos en una sola ventana.
  * **width *(opcional)*:** Ancho de la ventana.
  * **height *(opcional)*:** Altura de la ventana.
  * **x *(opcional)*:** Posición horizontal de la ventana.
  * **y *(opcional)*:** Posición vertical de la ventana.

### Siguiente fondo

Pasa al fondo siguiente del monitor seleccionado o de todos los monitores si no se especifica ninguno.

``` powershell
-control nextWallpaper [-location <string>] [-monitor <number>]
```

### Quitar fondo

Quita el fondo del monitor o ventana que selecciones o todos los fondos.

``` powershell
-control closeWallpaper [-location <string>] [-monitor <number>]
```

* **location *(opcional)*:** Identificador interno del nombre del monitor o la ventana que hayas elegido.
* **monitor *(opcional)*:** Índice del monitor en el que quieres cerrar el fondo. Empieza por 0.

### Abrir lista de reproducción

Carga un fondo nuevo para el monitor seleccionado o para el principal si no se especifica ninguno. Puedes usar los parámetros location o monitor para elegir en qué monitor quieres cargar el fondo.

``` powershell
-control openPlaylist -playlist <string> [-location <string>] [-monitor <number>]
```

* **playlist:** Nombre de la lista de reproducción que has creado y guardado en Wallpaper Engine.
* **location *(opcional)*:** Identificador interno del monitor. Lo encontrarás en el archivo config.json que genera el propio ordenador.
* **monitor *(opcional)*:** Índice del monitor en el que quieres cargar la lista de reproducción. Empieza por 0.

### Establecer ajustes del fondo

Ajusta uno o todos los fondos sobre la marcha. Esta opción te permite cambiar todos los ajustes de un fondo mientras el programa esté abierto y sin necesidad de abrir el navegador de fondos y cambiarlos manualmente. Encontrarás una lista con las propiedades disponibles en el navegador si haces clic en **Compartir JSON** en el lado derecho al elegir cualquier fondo en el navegador.

``` powershell
-control applyProperties -properties <JSON> [-location <string>] [-monitor <number>]
```

* **properties:** Propiedades definidas como **JSON** que se aplicarán. La línea ha de estar entre `RAW~(` y `)~END`, que hacen de delimitadores. Abajo encontrarás algunos ejemplos.
* **location *(opcional)*:** Identificador interno del nombre del monitor o la ventana que hayas elegido.
* **monitor *(opcional)*:** Índice del monitor en el que quieres actualizar las propiedades. Empieza por 0.

Ejemplo para cambiar una propiedad de un fondo llamada `rate` a 10:

``` cpp 
-control applyProperties -properties RAW~({"rate":10})~END
```

Ejemplo para cambiar los colores de un fondo a rojo (`"1 0 0"` representa los valores *RGB*):

``` cpp
-control applyProperties -properties RAW~({"schemecolor":"1 0 0"})~END
```

### Esconder iconos del escritorio

Esconde los iconos del escritorio.

``` powershell
-control hideIcons
```

### Mostrar iconos del escritorio

Muestra los iconos del escritorio.

``` powershell
-control showIcons
```

