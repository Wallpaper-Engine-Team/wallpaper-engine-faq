# การแก้ไขวอลเปเปอร์ที่ดาวน์โหลด

โดยทั่วไปแล้ว Wallpaper Engine เองนั้นไม่รองรับการแก้ไขวอลเปเปอร์ที่ดาวน์โหลดมา อย่างไรก็ตาม คุณสามารถแก้ไขวอลเปเปอร์ได้โดยการใช้งานแอพพลิเคชันภายนอกอื่น ๆ ทั้งนี้ขึ้นอยู่กับประเภทของวอลเปเปอร์ (คุณสามารถค้นหาประเภทได้ที่ใต้ภาพตัวอย่างทางด้านขวา)

โปรดจำไว้เสมอว่าคุณอาจต้องขออนุญาตจากผู้สร้างวอลเปเปอร์ต้นแบบในการเผยแพร่งานของพวกเขาอีกครั้ง หากมีข้อสงสัย โปรดติดต่อผู้สร้างวอลเปเปอร์ต้นแบบก่อนที่จะเผยแพร่ผลงานไปยัง Steam Workshop

[[toc]]

## ฉันจะค้นหาไฟล์ต้นแบบของวอลเปเปอร์ได้อย่างไร

คลิกขวาที่วอลเปเปอร์ในแท็บ "ติดตั้งแล้ว" และเลือก "เปิดใน Explorer"

## วิธีแก้ไขวอลเปเปอร์ประเภทต่าง ๆ

### วอลเปเปอร์ฉาก

วอลเปเปอร์ฉากถูกบรรจุเป็นไฟล์ .pkg ซึ่งไม่สามารถแก้ไขได้เนื่องจากไม่มีข้อมูลที่เกี่ยวข้องกับโปรเจกต์ทั้งหมด การพยายามเปิดไฟล์ .pkg จะทำให้แสดงข้อผิดพลาด "ไม่สามารถเปิดแพ็ควอลเปเปอร์ได้" An analogy would be that .jpeg image files also do not come with Photoshop project data attached - this is always left on the system of the original author.

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
