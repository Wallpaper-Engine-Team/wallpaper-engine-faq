# 編輯已下載的桌布

一般而言，Wallpaper Engine 本身並未支援已下載桌布的編輯作業。 不過，依據桌布的類型 (在右側預覽圖像下方可確認類型)，通常可透過第三方應用程式來編輯桌布。

請謹記您可能需要原作者的授權，才能重新發布其作品。 如有疑問，請先與原作者聯繫，再將作品發布至 Steam 工作坊。

[[toc]]

## 我該如何找到桌布的原檔案？

滑鼠右鍵點選「已安裝」分頁中的桌布，接著選取「在檔案總管中開啟」。

## 如何編輯不同類型的桌布

### 場景桌布

場景桌布封裝至一個 .pkg 檔案中，因該檔案缺少專案相關的資料，所以無法直接編輯。 開啟 .pkg 檔案將顯示錯誤訊息：已封裝桌布無法開啟。 同樣道理是，.jpeg 圖像檔案也不會附帶 Photoshop 專案資料，這些資料始終留在原作者的系統。

#### 非官方社群場景解封裝工具

不過，社群成員已自行建立非官方的社群場景桌布解封裝工具，您可用來解封裝場景檔案，將其當作桌布製作的起點。 詳情請造訪以下網站：

* [https://wetranslate.thiscould.work/scene.pkg/](https://wetranslate.thiscould.work/scene.pkg/)

您仍需要有效的 project.json 檔案，建立方法為：在編輯器建立新的空白桌布，關閉 Wallpaper Engine，將已下載的桌布解封裝，接著將其內容複製貼上至新的專案目錄中。

If you want to edit one of your own wallpapers that you have previously lost the project files for, see the *Updating a lost project* section below for more infos on what changes you need to make to the project.json so that you can push updates to your existing wallpapers.

::: warning Please note We do not provide official support for this tool and do not guarantee that it works correctly. If you have any problems with or questions about the unpacker, please get in touch with the original creators. :::

### Web wallpapers

Web-based wallpapers are HTML and JavaScript-based. You can go to the source files as described in the section above and use these files as a basis for your own web-based wallpaper.

### Video wallpapers

Video-based wallpapers are video files. You can find the video file as described in the section above and then use a third-party video editing application of your choice to modify the video.

### Application wallpapers

Generally, application wallpapers cannot be edited. Application wallpapers are usually compiled programs which means you do not have access to the source code. If you really want to change application-based wallpapers, try contacting the author of the wallpaper and see if they are willing to help.

## Updating a lost project

If you deleted your project you can still overwrite it, but depending on the type of wallpaper you published, you may not be able to edit it anymore. Create a new wallpaper as usual and open its project directory with Edit -> Open in Explorer. Open the `project.json` file with a text editor, it will look something like this:

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

Add this line at the top right after `{`:

```json
    "workshopid" : "12345678",
```
So that it looks like:

```json{2}
{
    "workshopid" : "12345678",
    "description" : "Cool description",
    "file" : "scene.json",
    [...]
```

**Replace the number 12345678 with the ID of your submission! You can find this ID in the URL of your existing upload:**

![https://steamcommunity.com/sharedfiles/filedetails/?id=12345678](./workshopid.png)
