# Wallpaper Engine on Linux or Mac OS

Wallpaper Engine is currently available for Windows and Android and there are no immediate plans to support other platforms at this time.

We definitely understand that users may want us to support other operating systems that they personally prefer, but it is really not a simple task to make Wallpaper Engine available on every possible platform. Wallpaper Engine มีหัวใจหลักเป็นโซลูชันซอฟต์แวร์ที่เขียนขึ้นเองโดยสมบูรณ์และการย้ายไปยังแพลตฟอร์มอื่น ๆ ถือเป็นงานที่ยิ่งใหญ่

ผู้ใช้บางคนอาจสงสัยว่าทำไมนักพัฒนาเกมและแอพพลิเคชันบางตัวจึงสามารถเชื่อมต่อกับ Mac และ Linux ได้อย่างง่ายดาย คำตอบคือเกมและแอพพลิเคชันเหล่านี้มีพื้นฐานมาจากซอฟต์แวร์เพื่อใช้สร้างวิดีโอเกมที่ใช้กันอย่างแพร่หลาย เช่น Unity หรือ Unreal Engine ซึ่งนักพัฒนาไม่จำเป็นต้องทำงานมากมายเพื่อเพิ่มการสนับสนุนแพลตฟอร์มอื่น ๆ However, none of this applies when it comes to a custom application like Wallpaper Engine - since it's an application which interacts closely with the operating system, it really needs to be tailored to each specific operating system to make it work properly. In the case of Linux, it goes even further and must be made to work with every popular display manager which differ significantly between distributions.

The situation is simply that it's not economically viable for us to add support for Linux or Mac OS at this time. หากคุณตรวจสอบ [แบบสำรวจฮาร์ดแวร์ของ Steam](https://store.steampowered.com/hwsurvey) คุณจะพบว่ามีผู้ใช้ Linux ใน Steam ไม่ถึง 1% และผู้ใช้เหล่านี้ยังต้องถูกแบ่งย่อยออกเป็น Linux ประเภทต่าง ๆ ส่วนใหญ่เป็น Ubuntu และจำนวนบัญชีผู้ใช้คิดเป็นเพียง 0.25% ของจำนวนผู้ใช้ Steam ทั้งหมด

As explained above, the time needed to port Wallpaper Engine to another operating system is immense and it will also increase the costs of on-going maintenance work significantly, while the possible user group benefiting of the large amount of time we would spend on this is comparatively very tiny. We should focus our time and energy on updates and platforms that benefit the most people, like the 96% of Steam users who use Windows.

Yet we are always keeping a close eye on the official Steam statistics and if the situation on Steam changes we are definitely open to look into figuring out how we could support more platforms in the future if it becomes viable.

## Why we created a free Android app before supporting Linux or Mac OS

A lot of our existing users use Android devices, far more than who use Linux or Mac OS devices. This is why supporting Android was the only rational next step when it comes to adding support for more platforms. By creating a free Android app as a new feature, we think we created a large improvement for the a vast number of our users.

Part of the work that went into the Android port can also be reused for Linux and OSX at a later point in time, slightly reducing the big hurdles we face supporting those operating systems. While creating the Android companion app was already a huge task for us, it was still significantly more achievable than a Linux or OSX port, where the full browsing and editing experience needs to be supported as well.

## What about support for iPhones and iPads?

Apple's mobile operating system iOS currently does not support real dynamic live wallpapers like Android does. The possibilities for live wallpapers on iOS are very limiting since iOS does not allow for true live wallpapers. There is some limited support for very basic short animated wallpapers in the form of *Live Photos* but the format is very restrictive and the vast majority of Wallpaper Engine wallpapers aren't really compatible with it in a way that we deem acceptable.