# Wallpaper Engine on Linux or Mac OS

Wallpaper Engine is currently only available on Windows and Android and there are no immediate plans to support other platforms at this time.

เราเข้าใจว่าผู้ใช้ต้องการให้เราสนับสนุนระบบปฏิบัติการมากขึ้น แต่ก็ไม่ใช่เรื่องง่าย Wallpaper Engine มีหัวใจหลักเป็นโซลูชันซอฟต์แวร์ที่เขียนขึ้นเองโดยสมบูรณ์และการย้ายไปยังแพลตฟอร์มอื่น ๆ ถือเป็นงานที่ยิ่งใหญ่

ผู้ใช้บางคนอาจสงสัยว่าทำไมนักพัฒนาเกมและแอพพลิเคชันบางตัวจึงสามารถเชื่อมต่อกับ Mac และ Linux ได้อย่างง่ายดาย คำตอบคือเกมและแอพพลิเคชันเหล่านี้มีพื้นฐานมาจากซอฟต์แวร์เพื่อใช้สร้างวิดีโอเกมที่ใช้กันอย่างแพร่หลาย เช่น Unity หรือ Unreal Engine ซึ่งนักพัฒนาไม่จำเป็นต้องทำงานมากมายเพื่อเพิ่มการสนับสนุนแพลตฟอร์มอื่น ๆ แต่แอพพลิเคชันสำหรับผู้ใช้อย่าง Wallpaper Engine ไม่เป็นเช่นนั้น เนื่องจากเป็นแอพพลิเคชันที่มีการทำงานโต้ตอบอย่างใกล้ชิดกับระบบปฏิบัติการจึงจำเป็นต้องได้รับการปรับแต่งให้เหมาะกับระบบปฏิบัติการแต่ละระบบเพื่อให้ทำงานได้อย่างถูกต้อง สำหรับ Linux นั้นถือเป็นความท้าทายยิ่งใหญ่ โปรแกรมต้องทำงานร่วมกับเครื่องมือจัดการหน้าจอที่ได้รับความนิยมทั้งหมดซึ่งมีความแตกต่างกันอย่างมากในรุ่นต่าง ๆ

แม้ว่าสิ่งเหล่านี้จะเป็นไปได้ในทางทฤษฎี แต่ความเป็นจริงแล้วการเพิ่มการรองรับสำหรับ Linux หรือ Mac OS ณ จุดนี้ยังเป็นไปไม่ได้ในแง่ของเศรษฐกิจ หากคุณตรวจสอบ [แบบสำรวจฮาร์ดแวร์ของ Steam](https://store.steampowered.com/hwsurvey) คุณจะพบว่ามีผู้ใช้ Linux ใน Steam ไม่ถึง 1% และผู้ใช้เหล่านี้ยังต้องถูกแบ่งย่อยออกเป็น Linux ประเภทต่าง ๆ ส่วนใหญ่เป็น Ubuntu และจำนวนบัญชีผู้ใช้คิดเป็นเพียง 0.25% ของจำนวนผู้ใช้ Steam ทั้งหมด

ตามที่อธิบายไว้ข้างต้น การย้าย Wallpaper Engine ไปยังระบบปฏิบัติการอื่นนั้นใช้เวลามากและยังเพิ่มค่าใช้จ่ายในการบำรุงรักษาอย่างต่อเนื่องโดยที่มีกลุ่มผู้ใช้เพียงจำนวนน้อยที่อาจได้รับประโยชน์ เราต้องการที่จะทุ่มเทเวลาและพลังงานของเราในการปรับปรุงเวอร์ชัน Windows สำหรับผู้ใช้ Steam ที่มีมากกว่า 96%

อย่างไรก็ตามเรากำลังเฝ้าดูสถิติของ Steam อย่างเป็นทางการและหากสถานการณ์ใน Steam เปลี่ยนไป เราจะเริ่มพิจารณาวิธีการสนับสนุนแพลตฟอร์มเพิ่มเติมอย่างแน่นอนหากเป็นไปได้ในอนาคต

## How was support for Android devices made possible?

We always look at ways we can create the biggest benefit for a large group of our users. Taking into account the spread of Android devices across different regions of the world and comparing it to our user base, we estimate that at least 70% of our users own an Android device. This is a huge contrast to Linux or Mac OS, as these platforms combined just make up a tiny fraction compared to Android's global market share.

One useful thing about Android compared to Linux, for example, is that the live wallpaper feature is more or less standardized across all devices, which makes development much easier. We still hit quite a few significant hurdles when porting the app to Android, but after months of work were able to reach a stable state that would work well across various device families.

Again, what we considered important here is the large number of our existing users would benefit from this port, as we spent months on creating the Android version and continue to provide maintenance for it for years to come, which is a significant time investment to make.

## What about support for iPhones and iPads?

Unfortunately, Apple's mobile operating system iOS currently does not support real dynamic live wallpapers like Android does. The possibilities for live wallpapers on iOS are very limiting since iOS does not allow for true live wallpapers. There is some limited support for very basic short animated wallpapers in the form of *Live Photos* but the format is very restrictive and the vast majority of Wallpaper Engine wallpapers aren't really compatible with it in a way that we deem acceptable.