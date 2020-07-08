# 編輯已下載的桌布

一般而言，Wallpaper Engine 本身並未支援已下載桌布的編輯作業。 不過，依據桌布的類型 (在右側預覽圖像下方可確認類型)，通常可透過第三方應用程式來編輯桌布。

請謹記您可能需要原作者的授權，才能重新發佈其作品。 如有疑問，請先與原作者聯絡，再將作品發佈至 Steam 工作坊。

[[toc]]

## 我該如何找到桌布的原檔案？

以滑鼠右鍵按一下「已安裝」分頁中的桌布，接著選取「在檔案總管中開啟」。

## 如何編輯不同類型的桌布

### 場景桌布

場景桌布封裝至一個 .pkg 檔案中，因該檔案缺少專案相關的資料，所以無法直接編輯。 開啟 .pkg 檔案將顯示錯誤訊息：已封裝桌布無法開啟。 同樣道理是，.jpeg 圖像檔案也不會附帶 Photoshop 專案資料，這些資料必定留在原作者的系統裡。

#### 非官方社群場景解封裝工具

不過，社群成員已自行建立非官方的社群場景桌布解封裝工具，您可用來解封裝場景檔案，將其當作桌布製作的起點。 詳情請造訪以下網站：

* [https://wetranslate.thiscould.work/scene.pkg/](https://wetranslate.thiscould.work/scene.pkg/)

您仍需要有效的 project.json 檔案，建立方法為：在編輯器建立新的空白桌布，關閉 Wallpaper Engine，將已下載的桌布解封裝，接著將其內容複製貼上至新的專案目錄中。

如果您想編輯之前已遺失專案檔案的桌布，請見以下*更新遺失的專案*區段，進一步了解您需要對 project.json 變更哪些部分，才能將更新現有的桌布。

::: warning 請注意 我們不為此工具提供官方支援，也不保證其能正常運作。 如果您對此解封裝工具有任何問題，請與原建立者聯絡。 :::

### 網頁桌布

網頁桌布以 HTML 及 JavaScript 為基礎。 您可按照上文說明找出原檔案，再將這些檔案當作基礎，建立自己的網頁桌布。

### 視訊桌布

視訊桌布即為視訊檔案。 您可按照上文說明找出視訊檔案，再選擇任一第三方視訊編輯應用程式來修改視訊。

### 應用程式桌布

一般而言，應用程式桌布無法編輯。 應用程式桌布通常為經過編譯的程式，代表您無權存取原始程式碼。 如果您真的想變更應用程式桌布，請聯絡該桌布的作者，詢問其是否願意協助。

## 更新遺失的專案

如果您刪除了專案，仍然可以覆寫，但可能無法再次編輯某些所發佈的桌布類型。 照常建立新的桌布，至 [編輯] -> [在檔案總管中開啟] 即可開啟專案目錄。 使用文字編輯器開啟 `project.json` 檔案後，將顯示與以下類似的內容：

```json
{
    "description" : "Cool description",
    "file" : "scene.json",
    "general" : 
    {
        "properties" : 
        {
            "schemecolor" : 
            {
                "order" : 0,
                "text" : "ui_browse_properties_scheme_color",
                "type" : "color",
                "value" : "0.7647058823529411 0.3764705882352941 0.07450980392156863"
            }
        }
    },
    "preview" : "preview.jpg",
    "tags" : [ "Relaxing" ],
    "title" : "Cool title of your wallpaper",
    "type" : "scene",
    "visibility" : "private"
}
```

將此行新增至右上方的 `{` 之後：

```json
    "workshopid" : "12345678",
```
看起來如下：

```json{2}
{
    "workshopid" : "12345678",
    "description" : "Cool description",
    "file" : "scene.json",
    [...]
```

**將數字 12345678 取代為您提交內容的 ID！ 您可在現有上傳的 URL 中找到此 ID：**

![https://steamcommunity.com/sharedfiles/filedetails/?id=12345678](./workshopid.png)
