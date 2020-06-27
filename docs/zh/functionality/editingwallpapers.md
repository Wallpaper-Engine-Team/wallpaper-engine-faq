# 编辑下载的壁纸

一般来说，Wallpaper Engine 本身并不支持编辑所下载壁纸的功能。 但视乎壁纸的类型（类型可在右侧预览图像的下方找到），您通常可以借助第三方应用程序编辑壁纸。

请始终牢记，您可能需要获得原作者的授权，才能重新发布其作品。 如有疑问，请在将作品发布到 Steam 创意工坊之前与原作者联系。

[[toc]]

## 如何找到壁纸的源文件？

右键单击“已安装”选项卡中的壁纸，然后选择“在资源管理器中打开”。

## 如何编辑不同类型的壁纸

### 场景壁纸

Scene wallpapers are packed into a .pkg file which is not editable out of the box because it is missing all project-related data. Trying to open a .pkg file will result in the error "Packed wallpapers cannot be opened." to be shown. An analogy would be that .jpeg image files also do not come with Photoshop project data attached - this is always left on the system of the original author.

#### Unofficial Community Scene Unpacker

However, community members have created an unofficial scene wallpaper unpacking tool, which allows you to unpack Scene files and use them as a starting point for your own wallpapers. See this website for more information:

* [https://wetranslate.thiscould.work/scene.pkg/](https://wetranslate.thiscould.work/scene.pkg/)

You will still need to have a valid project.json file, you can create one by simply creating a new empty wallpaper in the editor, closing the Wallpaper Engine and then unpacking the downloaded wallpaper and copy-pasting its contents into the new project directory.

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
