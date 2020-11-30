---
sidebarDepth: 2
---

# 命令列控制

您可利用命令列引數控制 Wallpaper Engine， 即可從捷徑、巨集繫結或任何自行撰寫的腳本或程式碼，來存取此應用程式大部分功能。 例如，您可能暫停或停止所有桌布、變更桌布，甚至使正在運作的桌布變更設定。

確定 Wallpaper Engine 已在運作，接著使用本指南列出的任何命令引數，透過此程式的主要流程 *wallpaper32.exe* (如果使用的是 64 位元，則為 *wallpaper64.exe*) 向 Wallpaper Engine 傳送命令。 您可以在 `wallpaper_engine` 安裝目錄中找到可執行檔。

所有命令均作為 `-control` 參數的值發出。 例如，暫停命令可以下列方式執行：

``` powershell
wallpaper32.exe -control pause
```

對於包含空格的字串，務必使用雙引號 **"** 字元：

``` powershell
wallpaper32.exe -control openWallpaper -file "C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\projects\myprojects\myWallpaper\project.json"
```

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

* **file：**欲開啟桌布 project.json 的路徑，或桌布檔案的直接路徑 (.mp4 etc)。
* **location *(選用)*：**顯示器內部識別碼。 這些由您的電腦生成，您可在 config.json 檔案中找到。
* **monitor *(選用)*：**欲載入桌布顯示器的索引，以 0 開頭。
* **preset *(選用)*：**欲載入本機的名稱，您必須已經事先建立本機預設並儲存。
* **playInWindow *(選用)*：**如果您想在一視窗內開啟/控制多個桌布，則為該視窗名稱。
  * **width *(選用)*：**視窗寬度。
  * **height *(選用)*：**視窗高度。
  * **x *(選用)*：**視窗的水平位置。
  * **y *(選用)*：**視窗的垂直位置。

### 下一張桌布

跳至特定顯示器或所有顯示器 (如未指定任何顯示器) 的下一張桌布。

``` powershell
-control nextWallpaper [-location <string>] [-monitor <number>]
```

### 移除桌布

從特定顯示器或視窗移除一張或多張桌布。

``` powershell
-control closeWallpaper [-location <string>] [-monitor <number>]
```

* **location *(選用)*：**顯示器內部識別碼或您指定的視窗名稱。
* **monitor *(選用)*：**欲關閉桌布的顯示器索引，以 0 開頭。

### 開啟播放清單

為特定顯示器或第一台顯示器 (如未指定任何顯示器) 載入桌布。 您可以使用 location 或 monitor 參數選擇哪一台顯示器載入桌布。

``` powershell
-control openPlaylist -playlist <string> [-location <string>] [-monitor <number>]
```

* **playlist：**您已在 Wallpaper Engine 建立並儲存的播放清單名稱。
* **location *(選用)*：**顯示器內部識別碼。 這些由您的電腦生成，您可在 config.json 檔案中找到。
* **monitor *(選用)*：**欲載入播放清單的索引，以 0 開頭。

### 套用桌布設定

將桌布動態屬性套用於特定桌布或所有桌布。 如此一來，您即可在程式運作時即時變更桌布的任何設定，不需要開啟桌布瀏覽器並手動變更。 選擇瀏覽器中任何桌布時，按一下右側的**分享 JSON**，即可在瀏覽器中輕鬆找到可用屬性列表。

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

