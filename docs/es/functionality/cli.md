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

Este ejemplo te permitirá abrir todos los fondos que quieras en una ventana a través de un acceso directo de Windows. Puedes repetir este proceso para abrir los fondos en una ventana independiente, cosa que podrá resultarles muy útil a quienes hagan retransmisiones o a quienes quieran usar Wallpaper Engine de pantalla en reposo o animación.

Primero, accede al directorio `wallpaper_engine` y haz clic derecho en `wallpaper32.exe` o `wallpaper64.exe`. Coloca el ratón sobre `Enviar a` y haz clic en `Escritorio (crear acceso directo)` para crear un acceso directo nuevo a Wallpaper Engine en tu escritorio. Busca el acceso directo que has creado y cámbiale el nombre a tu gusto. Después, haz clic derecho y elige **Propiedades**.

![Propiedades de acceso directo de Wallpaper Engine](/img/faq/target.gif)

En la pestaña **Acceso directo** encontrarás una línea que se llama **Destino**. Verás que la dirección te dirige a Wallpaper Engine. Tendrás que editarla para añadir el comando `openWallpaper` con la dirección completa al fondo y el parámetro `playInWindow` tal y como puedes ver en el ejemplo de abajo (puedes hacer copia y pega y ajustarlo a tus necesidades):

```bash
"C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\wallpaper64.exe" -control openWallpaper -file "C:\Program Files (x86)\Steam\steamapps\workshop\content\431960\123456789\scene.pkg" -playInWindow "Wallpaper #1" -width 1920 -height 1080
```

Echa un vistazo a estos consejos cuando configures el comando:

* Comprueba que la ruta a wallpaper32.exe o wallpaper64.exe sea correcta. El ejemplo de arriba usa el directorio por defecto de Steam.
* Comprueba que la ruta del fondo sea correcta. El ejemplo de arriba usa una ID de Workshop de ejemplo, **123456789**, por lo que tendrás que cambiarla para que funcione el fondo. También puedes poner al ruta de cualquier archivo compatible que tengas en el equipo.
  * Podrás encontrar la ruta completa de cualquier fondo si haces clic derecho en un fondo desde Wallpaper Engine y eliges **Abrir en el explorador**. Si usas fondos de escena, lo más adecuado es que la ruta lleve al archivo *project.json*; para los fondos de vídeo tendrá que llevar al archivo *.mp4*; y para los fondos web tendrá que llevar al archivo *index.html*.
* Ponle un nombre reconocible a la ventana. El nombre que tiene el ejemplo de arriba es **Wallpaper #1**. **Si quieres abrir varias ventanas, solo tendrás que ponerle un nombre distinto a cada una de ellas.**
* También puedes cambiar la resolución. El ejemplo de arriba utiliza 1920x1080 (Full HD). Cambia los parámetros de `ancho (width)` y `alto (height)` a tu gusto.

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

### Abrir un perfil

Carga un perfil que se haya creado en el menú de pantallas de Wallpaper Engine en todos los monitores.

``` powershell
-control openProfile -profile <string>
```

* **profile:** Nombre del perfil que has creado en Wallpaper Engine.

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

