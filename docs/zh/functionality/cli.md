---
sidebarDepth: 2
---

# 命令行控制

您可以使用命令行参数来控制 Wallpaper Engine。 这使您可以通过快捷方式、宏绑定或您选择的任何一种自行编写的脚本或代码，来访问该应用程序的大多数功能。 例如，您可以暂停或停止所有壁纸，更改壁纸，甚至更改正在运行的壁纸的设置。

请确保 Wallpaper Engine 已在运行，然后使用本指南中列出的任何命令参数，通过运行程序的主要进程 *wallpaper32.exe*（如果使用该应用程序的 64 位版本，则为 *wallpaper64.exe*）向 Wallpaper Engine 发送命令。 您可在 `wallpaper_engine` 安装目录中找到可执行文件。

所有命令均作为 `-control` 参数的值发出。 例如，暂停命令可按照如下方式执行：

``` powershell
wallpaper32.exe -control pause
```

对于包含空格的字符串，请务必使用双引号 **"** 字符：

``` powershell
wallpaper32.exe -control openWallpaper -file "C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\projects\myprojects\myWallpaper\project.json"
```

### 快捷方式示例：在窗口中打开壁纸

以下示例可让您通过 Windows 快捷方式在窗口中打开任意数量的壁纸。 您可以重复此过程以在单独的窗口中打开任意数量的壁纸，这对于想要将 Wallpaper Engine 用于任何类型的空闲屏幕或动画的直播主非常有用。

首先，转到 `wallpaper_engine` 目录，右键单击 `wallpaper32.exe` 或 `wallpaper64.exe`，然后将鼠标依次悬停在`“发送到”`和`“桌面快捷方式”`上，以在桌面上为 Wallpaper Engine 进程创建新的快捷方式。 接下来，找到新的快捷方式并将其重命名以符合您的用例。 然后，右键单击该快捷方式，再选择**属性**。

![Wallpaper Engine 快捷方式属性](/img/faq/target.gif)

您应该会看到**快捷方式**选项卡，其中有一行名为**目标**。 该行当前仅指向 Wallpaper Engine。 现在您需要编辑该行，以添加 `openWallpaper` 命令以及壁纸的完整路径和 ` playInWindow` 参数，如下面的示例所示（您可能需要复制粘贴并进行调整以适应您的需求）：

```bash
"C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\wallpaper64.exe" -control openWallpaper -file "C:\Program Files (x86)\Steam\steamapps\workshop\content\431960\123456789\scene.pkg" -playInWindow "Wallpaper #1" -width 1920 -height 1080
```

配置此命令时需注意以下事项：

* 确保您的 wallpaper32.exe/wallpaper64.exe 路径正确。 上面的示例使用了默认 Steam 目录。
* 确保使用正确的壁纸路径。 上面的示例使用了创意工坊 ID 示例 **123456789**，您必须更改此设置才能让壁纸正常工作。 您也可以指向计算机上任何受支持的文件。
  * 通过在 Wallpaper Engine 中右键单击任何壁纸，并选择**在资源管理器中打开**，即可找到壁纸的完整路径。 对于场景类型的壁纸，通常要指向 *project.json* 文件，对于视频壁纸，可能是 *.mp4* 文件，而对于 Web 壁纸，则要找到名为 *index.html* 的文件。
* 为窗口设置唯一名称。 上面的示例使用 **Wallpaper #1** 作为名称。 **如果要打开多个窗口，只需为每个窗口分配一个唯一名称。**
* 您可能还需要调整分辨率，上面的示例使用 1920x1080（全高清）。 相应地更改`width`和`height`参数。

## 命令概览

### 暂停

暂停所有壁纸。

``` powershell
-control pause
```

### 停止

停止所有壁纸。

``` powershell
-control stop
```

### 播放

恢复所有暂停或停止的壁纸。

``` powershell
-control play
```

### 静音

使所有壁纸静音。

``` powershell
-control mute
```

### 取消静音

使所有壁纸取消静音。

``` powershell
-control unmute
```

### 打开壁纸

为给定显示器或第一台显示器（如果未指定任何显示器）加载新壁纸。 您可以使用 `location` 或 `monitor` 参数来选择要加载壁纸的显示器，或使用 `playInWindow` 参数在窗口中打开壁纸。

``` powershell
-control openWallpaper -file <string> [-location <string>] [-monitor <number>]
        [-playInWindow <string>] [-width <number>] [-height <number>]
        [-x <number>] [-y <number>] [-preset <string>]
```

* **file：** 要打开的壁纸的 project.json 的路径，或壁纸文件的直接路径 (.mp4 etc)。
* **location* （可选） *：** 显示器内部标识符。 它们由您的 PC 生成，可在 config.json 文件中找到。
* **monitor* （可选） *：** 要加载壁纸的显示器的索引，以 0 开头。
* **preset* （可选） *：** 要加载的本地预设的名称，您必须已经事先创建并保存该本地预设。
* **playInWindow* （可选） *：** 如果您想在一个窗口中打开/控制多款壁纸，则为该窗口的名称。
  * **width* （可选） *：** 窗口宽度。
  * **height* （可选） *：** 窗口高度。
  * **x* （可选） *：** 窗口的水平位置。
  * **y* （可选） *：** 窗口的垂直位置。

### 下一张壁纸

跳至给定显示器或所有显示器（如果未指定任何显示器）的下一张壁纸。

``` powershell
-control nextWallpaper [-location <string>] [-monitor <number>]
```

### 移除壁纸

从指定显示器或窗口中移除壁纸，或移除所有壁纸。

``` powershell
-control closeWallpaper [-location <string>] [-monitor <number>]
```

* **location* （可选） *：** 显示器内部标识符或您指定的窗口名称。
* **monitor* （可选） *：** 要关闭壁纸的显示器的索引，以 0 开头。

### 打开播放列表

为给定显示器或第一台显示器（如果未指定任何显示器）加载新壁纸。 您可以使用 location 或 monitor 参数来选择要加载壁纸的显示器。

``` powershell
-control openPlaylist -playlist <string> [-location <string>] [-monitor <number>]
```

* **playlist：** 您已创建并保存在 Wallpaper Engine 中的播放列表的名称。
* **location* （可选） *：** 显示器内部标识符。 它们由您的 PC 生成，可在 config.json 文件中找到。
* **monitor* （可选） *：** 要加载播放列表的显示器的索引，以 0 开头。

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

