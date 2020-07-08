# Редактирование загруженных обоев

В самой программе Wallpaper Engine нет возможности отредактировать загруженные обои. Однако, обычно в зависимости от типа обои можно отредактировать с помощью различных сторонних программ (тип обоев обозначен справа под изображением для предпросмотра).

Пожалуйста, учтите, что для публикации отредактированных обоев вам может понадобиться получить разрешение первоначального автора(ов). При наличии сомнений свяжитесь с первоначальными авторами перед публикацией работы в Мастерской Steam.

[[toc]]

## Как найти исходный файл обоев?

Перейдите во вкладку «Установлено» и кликните на обои правой кнопкой мыши, а затем выберите опцию «Открыть в Проводнике».

## Как редактировать обои разных типов

### Сценические обои

Сценические обои упакованы в файл формата .pkg, который по умолчанию невозможно редактировать, поскольку он не содержит данных проекта. При попытке распаковать .pkg файла вы увидите следующее сообщение об ошибке: «Упакованные обои нельзя открыть». В качестве аналогии можно привести пример изображений формата .jpeg, которые тоже не содержат в себе данные проекта в Photoshop: эта информация всегда остается в системе первоначального автора.

#### Созданный сообществом неофицальный распаковщик сцен

Тем не менее, некоторые члены сообщества создали неофицальный инструмент для распаковки сценических обоев. Он позволяет распаковывать файлы, содержащие сцены, чтобы создавать собственные обои на их основе. Вы найдете подробную информацию по ссылке:

* [https://wetranslate.thiscould.work/scene.pkg/](https://wetranslate.thiscould.work/scene.pkg/)

Для работы с такими обоями вам все равно понадобится стандартный файл project.json. Чтобы получить такой файл просто создайте новые пустые обои в редакторе, закройте Wallpaper Engine, а затем распакуйте загруженные обои и скопируйте их содержимое в каталог нового проекта.

If you want to edit one of your own wallpapers that you have previously lost the project files for, see the *Updating a lost project* section below for more infos on what changes you need to make to the project.json so that you can push updates to your existing wallpapers.

::: warning Please note We do not provide official support for this tool and do not guarantee that it works correctly. If you have any problems with or questions about the unpacker, please get in touch with the original creators. :::

### Web обои

Web-based wallpapers are HTML and JavaScript-based. You can go to the source files as described in the section above and use these files as a basis for your own web-based wallpaper.

### Видео обои

Video-based wallpapers are video files. You can find the video file as described in the section above and then use a third-party video editing application of your choice to modify the video.

### Приложения-обои

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
