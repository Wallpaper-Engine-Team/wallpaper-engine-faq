# Wallpaper Engine บน Linux Mac หรือ Android

ปัจจุบัน Wallpaper Engine นั้นมีเฉพาะสำหรับ Windows และไม่มีแผนที่จะสนับสนุนแพลตฟอร์มอื่น ๆ ในอนาคตอันใกล้

เราเข้าใจว่าผู้ใช้ต้องการให้เราสนับสนุนระบบปฏิบัติการมากขึ้น แต่ก็ไม่ใช่เรื่องง่าย Wallpaper Engine มีหัวใจหลักเป็นโซลูชันซอฟต์แวร์ที่เขียนขึ้นเองโดยสมบูรณ์และการย้ายไปยังแพลตฟอร์มอื่น ๆ ถือเป็นงานที่ยิ่งใหญ่

ผู้ใช้บางคนอาจสงสัยว่าทำไมนักพัฒนาเกมและแอพพลิเคชันบางตัวจึงสามารถเชื่อมต่อกับ Mac และ Linux ได้อย่างง่ายดาย คำตอบคือเกมและแอพพลิเคชันเหล่านี้มีพื้นฐานมาจากซอฟต์แวร์เพื่อใช้สร้างวิดีโอเกมที่ใช้กันอย่างแพร่หลาย เช่น Unity หรือ Unreal Engine ซึ่งนักพัฒนาไม่จำเป็นต้องทำงานมากมายเพื่อเพิ่มการสนับสนุนแพลตฟอร์มอื่น ๆ แต่แอพพลิเคชันสำหรับผู้ใช้อย่าง Wallpaper Engine ไม่เป็นเช่นนั้น เนื่องจากเป็นแอพพลิเคชันที่มีการทำงานโต้ตอบอย่างใกล้ชิดกับระบบปฏิบัติการจึงจำเป็นต้องได้รับการปรับแต่งให้เหมาะกับระบบปฏิบัติการแต่ละระบบเพื่อให้ทำงานได้อย่างถูกต้อง In the case of Linux, it goes even further and must be made to work with every popular display manager which differ significantly between distributions and partially even between releases of distributions.

While all of this would in theory be possible, the simple truth is that it's not economically viable to add support for Linux or Mac OS at this point. If you take a look at the [Steam hardware survey](https://store.steampowered.com/hwsurvey), you can see that less than 1% of Steam users use Linux. And again, this is split up even further into different distributions of Linux, mostly Ubuntu which comes in at a mere 0.25% of users.

As explained above, the time needed to port Wallpaper Engine to another operating system is immense and it will also increase the costs of on-going maintenance work significantly, while the possible user group benefiting of this is comparatively tiny. We would much rather focus our time and energy on improving the Windows version for over 96% of Steam users.

However, we are keeping a close eye on the official Steam statistics and if the situation on Steam changes we are definitely open to look into figuring out how we could support more platforms in the future if it becomes viable. 