---
sidebarDepth: 2
---

# 命令列控制

您可利用命令列引數控制 Wallpaper Engine， 從捷徑、巨集繫結或任何自行撰寫的腳本或程式碼，來存取此應用程式大部分功能。 例如，您可能暫停或停止所有桌布、變更桌布，甚至使正在運作的桌布變更設定。

請確認 Wallpaper Engine 已在運作，接著使用本指南列出的任何命令引數，透過此程式的主要處理程序 *wallpaper32.exe* (如果使用的是 64 位元，則為 *wallpaper64.exe*) 向 Wallpaper Engine 傳送命令。 您可以在 `wallpaper_engine` 安裝目錄中找到可執行檔。

所有命令均作為 `-control` 參數的值發出。 例如，暫停命令可以下列方式執行：

``` powershell
wallpaper32.exe -control pause
```

對於包含空格的字串，務必使用雙引號 **"** 字元：

``` powershell
wallpaper32.exe -control openWallpaper -file "C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\projects\myprojects\myWallpaper\project.json"
```

### 捷徑示例：在視窗中開啟桌布

以下示例可讓您透過 Windows 捷徑在一視窗中開啟任何數量的桌布。 您可重複此步驟，在個別的視窗中開啟任何數量的桌布，這功能對於實況主來說可能很方便，他們可以將 Wallpaper Engine 用於任何類型的閒置螢幕或動畫。

首先，前往 `wallpaper_engine` 目錄，以滑鼠右鍵按一下 `wallpaper32.exe` 或 `wallpaper64.exe`，並懸停在`傳送到`上，再選取`桌面 (建立捷徑)`，即可在桌面上為 Wallpaper Engine 的流程建立新捷徑。 接著，找到新的捷徑，並依您的使用情境重新命名。 最後，以滑鼠右鍵在上方按一下，選取**屬性**。

![Wallpaper Engine 捷徑屬性](/img/faq/target.gif)

您應該會在**捷徑**分頁上看到名為**目標**的一行。 這一行目前將僅指向 Wallpaper Engine。 現在您需要編輯該行，以新增 `openWallpaper` 指令、桌布的完整路徑以及 `playInWindow` 參數，如以下所示 (您可能需要複製貼上，並依據您的需求調整)：

```bash
"C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\wallpaper64.exe" -control openWallpaper -file "C:\Program Files (x86)\Steam\steamapps\workshop\content\431960\123456789\scene.pkg" -playInWindow "Wallpaper #1" -width 1920 -height 1080
```

設定此指令時請確認下列事項：

* 確定 wallpaper32.exe/wallpaper64.exe 的路徑正確。 上方示例使用預設的 Steam 目錄。
* 確定使用正確的桌布路徑。 上方示例使用工作坊 ID **123456789**，您必須變更此設定，桌布才可運作。 您也可以指向電腦上任何支援的檔案。
  * 在 Wallpaper Engine 中以滑鼠右鍵按一下桌布，選取**在檔案總管中開啟**，即可找到桌布的完整路徑。 若為場景類型的桌布，通常需要指向 *project.json* 檔案；若為視訊桌布，可能會是 *.mp4* 檔案；若為網頁桌布，可能會找到一個名為 *index.html* 的檔案。
* 為視窗設定唯一名稱。 上方示例命名為 **Wallpaper #1**。 **如果想開啟多個視窗，只要為各視窗指定一個唯一名稱即可。**
* 您可能也需要調整解析度，上方示例使用 1920x1080 (Full HD)。 視情況變更 `width` 及 `height` 參數即可。

## 命令一覽

### 暫停

暫停所有桌布。

``` powershell
-control pause
```

### 停止

停止所有桌布。

``` powershell
-control stop
```

### 播放

繼續播放原本暫停或停止的桌布。

``` powershell
-control play
```

### 靜音

將所有桌布靜音。

``` powershell
-control mute
```

### 取消靜音

將所有桌布取消靜音。

``` powershell
-control unmute
```

### 開啟桌布

為特定顯示器或第一台顯示器 (如未指定任何顯示器) 載入桌布。 您可利用 `location` 或 `monitor` 參數，選擇哪一台顯示器載入桌布，或利用 `playInWindow` 參數在視窗中開啟桌布。

``` powershell
-control openWallpaper -file <string> [-location <string>] [-monitor <number>]
        [-playInWindow <string>] [-width <number>] [-height <number>]
        [-x <number>] [-y <number>] [-preset <string>]
```

* **file：** 欲開啟桌布 project.json 的路徑，或桌布檔案的直接路徑 (.mp4 etc)。
* **location *(選用)*：** 顯示器內部識別碼。 這些由您的電腦生成，您可在 config.json 檔案中找到。
* **monitor *(選用)*：** 欲載入桌布顯示器的索引，以 0 開頭。
* **preset *(選用)*：** 欲載入本機的名稱；必須已事先建立本機預設並儲存。
* **playInWindow *(選用)*：** 如果您想在一視窗內開啟/控制多個桌布，則為該視窗名稱。
  * **width *(選用)*：** 視窗寬度。
  * **height *(選用)*：** 視窗高度。
  * **x *(選用)*：** 視窗的水平位置。
  * **y *(選用)*：** 視窗的垂直位置。

### 下一個桌布

跳至特定顯示器或所有顯示器 (如未指定任何顯示器) 的下一張桌布。

``` powershell
-control nextWallpaper [-location <string>] [-monitor <number>]
```

### 移除桌布

從特定顯示器或視窗移除一張或多張桌布。

``` powershell
-control closeWallpaper [-location <string>] [-monitor <number>]
```

* **location *(選用)*：** 顯示器內部識別碼或您指定的視窗名稱。
* **monitor *(選用)*：** 欲關閉桌布的顯示器索引，以 0 開頭。

### 開啟播放清單

為特定顯示器或第一台顯示器 (如未指定任何顯示器) 載入桌布。 您可以使用 location 或 monitor 參數選擇哪一台顯示器載入桌布。

``` powershell
-control openPlaylist -playlist <string> [-location <string>] [-monitor <number>]
```

* **playlist：** 您已在 Wallpaper Engine 建立並儲存的播放清單名稱。
* **location *(選用)*：** 顯示器內部識別碼。 這些由您的電腦生成，您可在 config.json 檔案中找到。
* **monitor *(選用)*：** 欲載入播放清單的索引，以 0 開頭。

### 開啟檔案

依名稱將現有的檔案套用至 Wallpaper Engine 顯示器選單中建立和儲存的所有顯示器。

``` powershell
-control openProfile -profile <string>
```

* **profile：** 您在 Wallpaper Engine 中建立檔案的名稱。

### 套用桌布設定

將桌布動態屬性套用於特定桌布或所有桌布。 如此一來，您即可在程式運作時即時變更桌布的任何設定，不需要開啟桌布瀏覽器並手動變更。 選擇瀏覽器中任何桌布時，按一下右側的**分享 JSON**，即可在瀏覽器中輕鬆找到可用屬性列表。

``` powershell
-control applyProperties -properties <JSON> [-location <string>] [-monitor <number>]
```

* **properties：** 定義為欲套用 **JSON** 字串的屬性。 此字串必須特別以 `RAW~(` 和 `)~END` 逸出作為分隔符號，請見下方實例。
* **location *(選用)*：** 顯示器內部識別碼或您指定的視窗名稱。
* **monitor *(選用)*：** 欲更新屬性的顯示器索引，以 0 開頭。

將名為 `rate` 的桌布設定變更為 10 的實例：

``` cpp 
-control applyProperties -properties RAW~({"rate":10})~END
```

將桌布配置顏色變更為紅色的實例 (`"1 0 0"` 代表 *RGB* 值)：

``` cpp
-control applyProperties -properties RAW~({"schemecolor":"1 0 0"})~END
```

### 隱藏桌面圖示

隱藏桌面圖示。

``` powershell
-control hideIcons
```

### 顯示桌面圖示

顯示桌面圖示。

``` powershell
-control showIcons
```

### Get Current Wallpaper

This will output the primary wallpaper path as a string to the current standard output, you can also specify a monitor to get the wallpaper path for. This function is useful if you want to integrate Wallpaper Engine in other tools that need to react to the current wallpaper in some way.

``` powershell
-control getWallpaper [-location <string>] [-monitor <number>]
```

* **location *(optional)*:** Internal identifier of the monitor or the window name you specified.
* **monitor *(optional)*:** Index of the monitor to update the properties on, begins with 0.
* **RETURNS:** File path to active wallpaper.
