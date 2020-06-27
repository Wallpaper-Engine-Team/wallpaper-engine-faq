# 编辑下载的壁纸

一般来说，Wallpaper Engine 本身并不支持编辑所下载壁纸的功能。 但视乎壁纸的类型（类型可在右侧预览图像的下方找到），您通常可以借助第三方应用程序编辑壁纸。

请始终牢记，您可能需要获得原作者的授权，才能重新发布其作品。 如有疑问，请在将作品发布到 Steam 创意工坊之前与原作者联系。

[[toc]]

## 如何找到壁纸的源文件？

右键单击“已安装”选项卡中的壁纸，然后选择“在资源管理器中打开”。

## 如何编辑不同类型的壁纸

### 场景壁纸

场景壁纸会打包到一个 .pkg 文件中，因为该文件缺少所有项目相关数据，所以不可直接编辑。 尝试打开 .pkg 文件将显示错误消息“壁纸包无法打开”。 打个比方，.jpeg 图像文件也不附带 Photoshop 项目数据 — 这些数据始终留在原作者的系统上。

#### 非官方社区场景解包工具

但是，社区成员创建了一款非官方场景壁纸解包工具，可让您解包场景文件，并将其用作自己壁纸的起点。 请访问以下网站，了解更多信息：

* [https://wetranslate.thiscould.work/scene.pkg/](https://wetranslate.thiscould.work/scene.pkg/)

您还需要一个有效的 project.json 文件，创建方法如下：在编辑器中创建新的空白壁纸，关闭 Wallpaper Engine，对下载的壁纸进行解包，然后将其内容复制粘贴到新的项目目录中。

如想对自己以前丢失了项目文件的壁纸进行编辑，请参见下文*更新丢失的项目*部分，详细了解需要对 project.json 进行哪些更改，才能将更新推送到您现有的壁纸。

::: 警告 请注意 我们不为此工具提供官方支持，也不保证其可以正常工作。 如果您对这款解包工具有任何问题或疑问，请与原始创建者联系。 :::

### Web 壁纸

Web 壁纸基于 HTML 和 JavaScript。 您可以按照上文的说明访问源文件，然后将这些文件用作自己 Web 壁纸的基础。

### 视频壁纸

视频壁纸为视频文件。 You can find the video file as described in the section above and then use a third-party video editing application of your choice to modify the video.

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
