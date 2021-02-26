---
sidebarDepth: 2
---

# Командная строка

Вы можете управлять Wallpaper Engine с помощью командной строки. Это позволит вам получить доступ к большинству функций приложения с помощью ярлыка, привязки макроса или любого самописного сценария или кода на ваш выбор. Например, вы можете приостановить или остановить все обои, изменить их или даже изменить настройки уже запущенных обоев.

Убедитесь, что Wallpaper Engine запущена, а затем отправьте ей команду, запустив основной процесс программы, *wallpaper32.exe* (или *wallpaper64.exe*, если вы используете 64-разрядную версию), с любым из аргументов команды, перечисленных в этом руководстве. Вы можете найти исполняемые файлы в каталоге установки `wallpaper_engine`.

Все команды выполняются как значение параметра `-control`. Например, команду паузы можно выполнить так:

``` powershell
wallpaper32.exe -control pause
```

Обязательно используйте двойные кавычки **"** для строк, в которых есть пробелы:

``` powershell
wallpaper32.exe -control openWallpaper -file "C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\projects\myprojects\myWallpaper\project.json"
```

### Пример ярлыка: открыть обои в окне

На следующем примере вы научитесь открывать любое количество обоев в окне с помощью ярлыка Windows. You can repeat this process to open any number of wallpapers in a separate window which may be useful for streamers who want to utilize Wallpaper Engine for any type of idle screen or animation.

First, go to the `wallpaper_engine` directory and right-click on either `wallpaper32.exe` or `wallpaper64.exe` and hover over `Send to` and then `Desktop (create shortcut)` to create a new shortcut to the Wallpaper Engine process on your desktop. Next, find your new shortcut and rename it to fit your use-case. Afterwards, right-click on it, then select **Properties**.

![Свойства ярлыка Wallpaper Engine](/img/faq/target.gif)

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

## Обзор команд

### Пауза

Приостанавливает все обои.

``` powershell
-control pause
```

### Стоп

Останавливает все обои.

``` powershell
-control stop
```

### Воспроизвести

Возобновляет все обои после паузы или остановки.

``` powershell
-control play
```

### Заглушить

Отключает все обои.

``` powershell
-control mute
```

### Вкл. звук

Включает все обои.

``` powershell
-control unmute
```

### Открыть обои

Загружает новые обои для данного монитора или первого монитора, если они не определены. Вы можете использовать параметр `location` или `monitor`, чтобы выбрать монитор для загрузки обоев, или открыть обои в окне с помощью параметра `playInWindow`.

``` powershell
-control openWallpaper -file <string> [-location <string>] [-monitor <number>]
        [-playInWindow <string>] [-width <number>] [-height <number>]
        [-x <number>] [-y <number>] [-preset <string>]
```

* **file:** Путь к project.json обоев, которые вы хотите открыть, или прямой путь к файлу обоев (.mp4 и т. д.).
* **location *(необязательно)*:** Внутренний идентификатор монитора. Вы можете найти его в файле config.json, который генерируется вашим компьютером.
* **monitor *(необязательно)*:** Индекс монитора, на который будут загружены обои, начинается с 0.
* **preset *(необязательно)*:** Имя локальных предустановок для загрузки, локальные предустановки должны быть созданы и сохранены вами ранее.
* **playInWindow *(необязательно)*:** Имя окна, если вы хотите открыть/управлять несколькими обоями в окне.
  * **width *(необязательно)*:** Ширина окна.
  * **height *(необязательно)*:** Высота окна.
  * **x *(необязательно)*:** Горизонтальное положение окна.
  * **y *(необязательно)*:** Вертикальное положение окна.

### Следующие обои

Переход к следующим обоям данного монитора или всех мониторов, если они не определены.

``` powershell
-control nextWallpaper [-location <string>] [-monitor <number>]
```

### Удалить обои

Удаляет обои с указанного монитора или окна или удаляет все обои.

``` powershell
-control closeWallpaper [-location <string>] [-monitor <number>]
```

* **location *(необязательно)*:** Внутренний идентификатор монитора или указанное вами имя окна.
* **monitor *(необязательно)*:** Индекс монитора, на котором нужно закрыть обои, начинается с 0.

### Открыть плейлист

Загружает новые обои для данного монитора или первого монитора, если они не определены. Вы можете использовать параметр местоположения или монитора, чтобы выбрать, на каком мониторе загружать обои.

``` powershell
-control openPlaylist -playlist <string> [-location <string>] [-monitor <number>]
```

* **playlist:** Название списка воспроизведения, который вы создали и сохранили в Wallpaper Engine.
* **location *(необязательно)*:** Внутренний идентификатор монитора. Вы можете найти его в файле config.json, который генерируется вашим компьютером.
* **monitor *(необязательно)*:** Индекс монитора, на котором будет загружен список воспроизведения, начинается с 0.

### Применить настройки обоев

Применяет выбранные свойства к данным обоям или ко всем обоям. Это позволяет вам изменять любые настройки обоев во время работы программы, не открывая браузер обоев и не меняя их вручную. Вы можете легко найти список доступных свойств в браузере, щелкнув **Share JSON** справа при выборе любых обоев в браузере.

``` powershell
-control applyProperties -properties <JSON> [-location <string>] [-monitor <number>]
```

* **properties:** Применяемые свойства определены как строка **JSON **. Строка должна быть специально обозначена с помощью разделителей `RAW~(` и `)~END`. См. примеры ниже!
* **location *(необязательно)*:** Внутренний идентификатор монитора или указанное вами имя окна.
* **monitor *(необязательно)*:** Индекс монитора, на котором нужно обновить свойства, начинается с 0.

Пример изменения параметра обоев `rate` на 10:

``` cpp 
-control applyProperties -properties RAW~({"rate":10})~END
```

Пример изменения настройки цвета схемы обоев на красный (`"1 0 0"`обозначает значения *RGB *):

``` cpp
-control applyProperties -properties RAW~({"schemecolor":"1 0 0"})~END
```

### Скрыть значки рабочего стола

Скрывает значки на рабочем столе.

``` powershell
-control hideIcons
```

### Показать значки рабочего стола

Показывает значки на рабочем столе.

``` powershell
-control hideIcons
```

