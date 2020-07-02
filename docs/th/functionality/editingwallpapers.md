# การแก้ไขวอลเปเปอร์ที่ดาวน์โหลด

โดยทั่วไปแล้ว Wallpaper Engine เองนั้นไม่รองรับการแก้ไขวอลเปเปอร์ที่ดาวน์โหลดมา อย่างไรก็ตาม คุณสามารถแก้ไขวอลเปเปอร์ได้โดยการใช้งานแอพพลิเคชันภายนอกอื่น ๆ ทั้งนี้ขึ้นอยู่กับประเภทของวอลเปเปอร์ (คุณสามารถค้นหาประเภทได้ที่ใต้ภาพตัวอย่างทางด้านขวา)

โปรดจำไว้เสมอว่าคุณอาจต้องขออนุญาตจากผู้สร้างดั้งเดิมในการเผยแพร่งานของพวกเขาอีกครั้ง หากมีข้อสงสัย โปรดติดต่อผู้สร้างดั้งเดิมก่อนที่จะเผยแพร่ผลงานไปยัง Steam Workshop

[[toc]]

## ฉันจะค้นหาไฟล์ต้นแบบของวอลเปเปอร์ได้อย่างไร

คลิกขวาที่วอลเปเปอร์ในแท็บ "ติดตั้งแล้ว" และเลือก "เปิดใน Explorer"

## วิธีแก้ไขวอลเปเปอร์ประเภทต่าง ๆ

### วอลเปเปอร์ฉาก

วอลเปเปอร์ฉากถูกบรรจุเป็นไฟล์ .pkg ซึ่งไม่สามารถแก้ไขได้เนื่องจากไม่มีข้อมูลที่เกี่ยวข้องกับโปรเจกต์ทั้งหมด การพยายามเปิดไฟล์ .pkg จะทำให้แสดงข้อผิดพลาด "ไม่สามารถเปิดแพ็ควอลเปเปอร์ได้" ตัวอย่างเช่น ไฟล์ภาพ .jpeg นั้นไม่ได้แนบมาพร้อมกับข้อมูลโปรเจกต์ Photoshop ข้อมูลเหล่านี้จะถูกทิ้งไว้ในระบบของผู้สร้างดั้งเดิมเสมอ

#### เครื่องมือแตกไฟล์วอลเปเปอร์ชุมชนอย่างไม่เป็นทางการ

อย่างไรก็ตามสมาชิกชุมชนได้สร้างเครื่องมือแตกไฟล์วอลเปเปอร์อย่างไม่เป็นทางการซึ่งจะช่วยให้คุณสามารถแตกไฟล์ฉากและใช้เป็นจุดเริ่มต้นสำหรับการสร้างวอลเปเปอร์ของคุณเอง โปรดเยี่ยมชมเว็บไซต์ต่อไปนี้สำหรับข้อมูลเพิ่มเติม:

* [https://wetranslate.thiscould.work/scene.pkg/](https://wetranslate.thiscould.work/scene.pkg/)

คุณยังต้องมีไฟล์ project.json ที่ถูกต้อง คุณสามารถสร้างได้โดยการสร้างวอลเปเปอร์ใหม่ที่ยังว่างเปล่าในตัวแก้ไข ปิด Wallpaper Engine และแตกไฟล์วอลเปเปอร์ที่ดาวน์โหลดมา จากนั้นจึงคัดลอกและวางเนื้อหาลงในไดเรกทอรีโปรเจกต์ใหม่

หากคุณต้องการแก้ไขวอลเปเปอร์ของคุณแต่ไฟล์โปรเจกต์หาย โปรดดูในส่วน *การอัพเดตโปรเจกต์ที่หายไป* ด้านล่างเพื่อดูรายละเอียดเกี่ยวกับการเปลี่ยนแปลงที่คุณต้องทำกับ project.json เพื่อให้คุณสามารถอัพเดตไปยังวอลเปเปอร์ที่มีอยู่

::: คำเตือน โปรดทราบ เราไม่ได้ให้การสนับสนุนอย่างเป็นทางการสำหรับเครื่องมือนี้และไม่รับประกันว่าจะทำงานได้อย่างถูกต้อง หากคุณมีคำถามหรือข้อสงสัยเกี่ยวกับเครื่องมือแตกไฟล์ โปรดติดต่อผู้สร้างดั้งเดิม :::

### เว็บวอลเปเปอร์

วอลเปเปอร์บนเว็บไซต์ใช้ HTML และ JavaScript You can go to the source files as described in the section above and use these files as a basis for your own web-based wallpaper.

### วิดีโอวอลเปเปอร์

Video-based wallpapers are video files. You can find the video file as described in the section above and then use a third-party video editing application of your choice to modify the video.

### วอลเปเปอร์แอพพลิเคชัน

Generally, application wallpapers cannot be edited. Application wallpapers are usually compiled programs which means you do not have access to the source code. If you really want to change application-based wallpapers, try contacting the author of the wallpaper and see if they are willing to help.

## การอัพเดตการอัพเดตโปรเจกต์ที่หายไป

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
