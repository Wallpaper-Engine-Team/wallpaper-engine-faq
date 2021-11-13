# ไม่ปรากฏรูปภาพตัวอย่าง / ผลการค้นหา

หากคุณไม่เห็นรูปภาพตัวอย่างของวอลเปเปอร์ที่ถูกถอนการติดตั้งใน Wallpaper Engine นี่อาจหมายความว่าไฟร์วอลล์หรือซอฟต์แวร์ความปลอดภัยกำลังปิดกั้น Wallpaper Engine ไม่ให้เข้าถึงเซิร์ฟเวอร์รูปภาพ Steam

## ทดสอบการเชื่อมต่อของคุณกับเซิร์ฟเวอร์รูปภาพ Steam

ก่อนอื่นให้ลองทดสอบว่าคุณสามารถเชื่อมต่อเซิร์ฟเวอร์รูปภาพ Steam ได้จากคอมพิวเตอร์ของคุณหรือไม่ เปิดลิงก์ต่อไปนี้ในเว็บเบราว์เซอร์ของคุณเพื่อทดสอบการเชื่อมต่อ:

* [**คลิกที่นี่เพื่อทดสอบเซิร์ฟเวอร์รูปภาพ Steam**](https://steamuserimages-a.akamaihd.net/ugc/1796366854776537259/C541D485E7156010D92284B082D13A2377FD1F8F/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false)

ควรปรากฏข้อความว่า**ตกลง** และแสดง**เครื่องหมายถูกสีเขียว**เมื่อคลิกลิงก์ด้านบน

### ฉันเห็นข้อความตกลง

หากคุณเห็นข้อความ**ตกลง**เมื่อคลิกลิงก์ทดสอบด้านบน:

* หมายความว่ามีเพียง Wallpaper Engine เท่านั้นที่ถูกปิดกั้นโดยซอฟต์แวร์ความปลอดภัยบางตัวในคอมพิวเตอร์ของคุณ Configure any antivirus, firewall or network accelerator app to ignore Wallpaper Engine, especially the **ui32.exe** process that belongs to Wallpaper Engine.

### I can NOT see the OK message

If you did **not** see the **OK** message when clicking the test link above, this means your entire computer or even your entire network is not able to load images from the Steam image servers. Reasons for this can be:

* An antivirus, firewall or network accelerator app is entirely blocking the connection to the Steam image servers for all applications on your computer.
* Your network router is somehow misconfigured. Take a closer look at the firewall settings of your router and other advanced router settings that may play a role here.
    * You can easily test if your router is at fault by connecting your computer to a wifi hotspot through your smartphone. If you start seeing preview images while connected to a mobile wifi hotspot, the problem is definitely in your network router or in the network of your internet service provider.
    * Your internet service provider may also be blocking the Steam image servers or there is a temporary connection issue. This is very rare but it can happen, try again later.