# Wallpaper Engine บน Linux หรือ Mac OS

ปัจจุบัน Wallpaper Engine นั้นมีใน Windows และ Android และไม่มีแผนที่จะสนับสนุนแพลตฟอร์มอื่น ๆ ในเวลานี้

เราเข้าใจว่าผู้ใช้ต้องการให้เรารองรับระบบปฏิบัติการอื่นที่พวกเขาชื่นชอบ แต่จริงๆ แล้วการทำให้ Wallpaper Engine พร้อมใช้งานบนทุกแพลตฟอร์มนั้นไม่ใช่เรื่องง่าย Wallpaper Engine มีหัวใจหลักเป็นโซลูชันซอฟต์แวร์ที่เขียนขึ้นเองโดยสมบูรณ์และการย้ายไปยังแพลตฟอร์มอื่น ๆ ถือเป็นงานที่ยิ่งใหญ่

ผู้ใช้บางคนอาจสงสัยว่าทำไมนักพัฒนาเกมและแอพพลิเคชันบางตัวจึงสามารถเชื่อมต่อกับ Mac และ Linux ได้อย่างง่ายดาย คำตอบคือเกมและแอพพลิเคชันเหล่านี้มีพื้นฐานมาจากซอฟต์แวร์เพื่อใช้สร้างวิดีโอเกมที่ใช้กันอย่างแพร่หลาย เช่น Unity หรือ Unreal Engine ซึ่งนักพัฒนาไม่จำเป็นต้องทำงานมากมายเพื่อเพิ่มการสนับสนุนแพลตฟอร์มอื่น ๆ แต่แอพพลิเคชันที่กำหนดเองอย่าง Wallpaper Engine ไม่เป็นเช่นนั้น เนื่องจากเป็นแอพพลิเคชันที่มีการทำงานโต้ตอบอย่างใกล้ชิดกับระบบปฏิบัติการจึงจำเป็นต้องได้รับการปรับแต่งให้เหมาะกับระบบปฏิบัติการแต่ละระบบเพื่อให้ทำงานได้อย่างถูกต้อง สำหรับ Linux นั้นถือเป็นความท้าทายยิ่งใหญ่ โปรแกรมต้องทำงานร่วมกับเครื่องมือจัดการหน้าจอที่ได้รับความนิยมทั้งหมดซึ่งมีความแตกต่างกันอย่างมากในรุ่นต่าง ๆ

ดังนั้นเราจึงไม่สามารถเพิ่มการสนับสนุนสำหรับ Linux หรือ Mac OS ได้ด้วยปัจจัยเชิงเศรษฐกิจในขณะนี้ หากคุณตรวจสอบ [แบบสำรวจฮาร์ดแวร์ของ Steam](https://store.steampowered.com/hwsurvey) คุณจะพบว่ามีผู้ใช้ Linux ใน Steam ไม่ถึง 1% และผู้ใช้เหล่านี้ยังต้องถูกแบ่งย่อยออกเป็น Linux ประเภทต่าง ๆ ส่วนใหญ่เป็น Ubuntu และจำนวนบัญชีผู้ใช้คิดเป็นเพียง 0.25% ของจำนวนผู้ใช้ Steam ทั้งหมด

ตามที่อธิบายไว้ข้างต้น การย้าย Wallpaper Engine ไปยังระบบปฏิบัติการอื่นนั้นใช้เวลามากและยังเพิ่มค่าใช้จ่ายในการบำรุงรักษาอย่างต่อเนื่อง โดยต้องใช้เวลามหาศาลในขณะที่มีกลุ่มผู้ใช้เพียงจำนวนน้อยที่อาจได้รับประโยชน์ We should focus our time and energy on updates and platforms that benefit the most people, like the 96% of Steam users who use Windows.

Yet we are always keeping a close eye on the official Steam statistics and if the situation on Steam changes we are definitely open to look into figuring out how we could support more platforms in the future if it becomes viable.

## Why we created a free Android app before supporting Linux or Mac OS

A lot of our existing users use Android devices, far more than who use Linux or Mac OS devices. This is why supporting Android was the only rational next step when it comes to adding support for more platforms. By creating a free Android app as a new feature, we think we created a large improvement for the a vast number of our users.

Part of the work that went into the Android port can also be reused for Linux and OSX at a later point in time, slightly reducing the big hurdles we face supporting those operating systems. While creating the Android companion app was already a huge task for us, it was still significantly more achievable than a Linux or OSX port, where the full browsing and editing experience needs to be supported as well.

## What about support for iPhones and iPads?

Apple's mobile operating system iOS currently does not support real dynamic live wallpapers like Android does. The possibilities for live wallpapers on iOS are very limiting since iOS does not allow for true live wallpapers. There is some limited support for very basic short animated wallpapers in the form of *Live Photos* but the format is very restrictive and the vast majority of Wallpaper Engine wallpapers aren't really compatible with it in a way that we deem acceptable.