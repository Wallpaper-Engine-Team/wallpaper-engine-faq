# การอัปโหลดค้างที่ 45%

เมื่อกระบวนการอัปโหลดถึง 45% Steam จะเริ่มอัปโหลดไฟล์ไปยังเซิร์ฟเวอร์ของ Steam หากคุณพยายามเผยแพร่เนื้อหาของ Wallpaper Engine ไปยัง Steam Workshop แต่การอัปโหลดค้างอยู่ที่ 45% หมายความว่า Steam ไม่สามารถอัปโหลดไฟล์ไปยังเซิร์ฟเวอร์ Steam ได้ โปรดตรวจสอบให้แน่ใจว่าไฟร์วอลล์หรือแอพพลิเคชันป้องกันไวรัสของคุณไม่ได้ป้องกัน Steam จากการอัปโหลดไฟล์ โปรดดูคู่มืออย่างเป็นทางการเกี่ยวกับพอร์ตเครือข่าย Steam:

* [พอร์ตที่จำเป็นสำหรับ Steam](https://support.steampowered.com/kb_article.php?ref=8571-GLVN-8711)

ปัญหานี้มักจะเป็นปัญหาเครือข่าย คุณต้องตรวจสอบสิ่งที่ปิดกั้น Steam ไม่ให้สื่อสารกับเซิร์ฟเวอร์ Steam ได้อย่างเหมาะสม

Also make sure that your router or a firewall is not blocking the IP address range of the Steam servers, make sure that direct IP connections are possible. Exclude the following IP address range from any block list: `208.64.200.0` - `208.64.203.255`.

::: tip
This network issue can also be caused by a firewall in your network router. Make sure that no network router is blocking Steam's upload. Try If  uploads work through a mobile wi-fi hotspot - in that case your router is likely at fault and not any software on your computer.
:::