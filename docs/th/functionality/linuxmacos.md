# Wallpaper Engine บน Linux หรือ Mac OS

ปัจจุบัน Wallpaper Engine นั้นมีใน Windows และ Android และไม่มีแผนที่จะสนับสนุนแพลตฟอร์มอื่น ๆ ในเวลานี้

เราเข้าใจว่าผู้ใช้ต้องการให้เรารองรับระบบปฏิบัติการอื่นที่พวกเขาชื่นชอบ แต่จริงๆ แล้วการทำให้ Wallpaper Engine พร้อมใช้งานบนทุกแพลตฟอร์มนั้นไม่ใช่เรื่องง่าย Wallpaper Engine มีหัวใจหลักเป็นโซลูชันซอฟต์แวร์ที่เขียนขึ้นเองโดยสมบูรณ์และการย้ายไปยังแพลตฟอร์มอื่น ๆ ถือเป็นงานที่ยิ่งใหญ่

ผู้ใช้บางคนอาจสงสัยว่าทำไมนักพัฒนาเกมและแอพพลิเคชันบางตัวจึงสามารถเชื่อมต่อกับ Mac และ Linux ได้อย่างง่ายดาย คำตอบคือเกมและแอพพลิเคชันเหล่านี้มีพื้นฐานมาจากซอฟต์แวร์เพื่อใช้สร้างวิดีโอเกมที่ใช้กันอย่างแพร่หลาย เช่น Unity หรือ Unreal Engine ซึ่งนักพัฒนาไม่จำเป็นต้องทำงานมากมายเพื่อเพิ่มการสนับสนุนแพลตฟอร์มอื่น ๆ แต่แอพพลิเคชันที่กำหนดเองอย่าง Wallpaper Engine ไม่เป็นเช่นนั้น เนื่องจากเป็นแอพพลิเคชันที่มีการทำงานโต้ตอบอย่างใกล้ชิดกับระบบปฏิบัติการจึงจำเป็นต้องได้รับการปรับแต่งให้เหมาะกับระบบปฏิบัติการแต่ละระบบเพื่อให้ทำงานได้อย่างถูกต้อง สำหรับ Linux นั้นถือเป็นความท้าทายยิ่งใหญ่ โปรแกรมต้องทำงานร่วมกับเครื่องมือจัดการหน้าจอที่ได้รับความนิยมทั้งหมดซึ่งมีความแตกต่างกันอย่างมากในรุ่นต่าง ๆ

ดังนั้นเราจึงไม่สามารถเพิ่มการสนับสนุนสำหรับ Linux หรือ Mac OS ได้ด้วยปัจจัยเชิงเศรษฐกิจในขณะนี้ หากคุณตรวจสอบ [แบบสำรวจฮาร์ดแวร์ของ Steam](https://store.steampowered.com/hwsurvey) คุณจะพบว่ามีผู้ใช้ Linux ใน Steam ไม่ถึง 1% และผู้ใช้เหล่านี้ยังต้องถูกแบ่งย่อยออกเป็น Linux ประเภทต่าง ๆ ส่วนใหญ่เป็น Ubuntu และจำนวนบัญชีผู้ใช้คิดเป็นเพียง 0.25% ของจำนวนผู้ใช้ Steam ทั้งหมด

ตามที่อธิบายไว้ข้างต้น การย้าย Wallpaper Engine ไปยังระบบปฏิบัติการอื่นนั้นใช้เวลามากและยังเพิ่มค่าใช้จ่ายในการบำรุงรักษาอย่างต่อเนื่อง โดยต้องใช้เวลามหาศาลในขณะที่มีกลุ่มผู้ใช้เพียงจำนวนน้อยที่อาจได้รับประโยชน์ เราควรให้ความสำคัญกับเวลาและพลังงานของเราในอัปเดตและแพลตฟอร์มที่เป็นประโยชน์ต่อคนส่วนใหญ่ อย่างเช่น 96% ของผู้ใช้ Steam ที่ใช้ Windows

แต่เราเฝ้าดูสถิติของ Steam อย่างเป็นทางการอยู่เสมอ และหากสถานการณ์ใน Steam เปลี่ยนไป เราจะเริ่มพิจารณาวิธีการสนับสนุนแพลตฟอร์มเพิ่มเติมอย่างแน่นอนหากเป็นไปได้ในอนาคต

## เหตุใดเราจึงสร้างแอป Android ฟรีขึ้นก่อนที่จะรองรับ Linux หรือ Mac OS

ผู้ใช้งานในปัจจุบันของเราจำนวนมากใช้อุปกรณ์ Android ซึ่งมากกว่าจำนวนผู้ที่ใช้อุปกรณ์ Linux หรือ Mac OS ด้วยเหตุผลนี้เราจึงรองรับ Android เป็นขั้นถัดมาเมื่อต้องเพิ่มการรองรับแพลตฟอร์มอื่น ๆ เราคิดว่าการสร้างแอป Android ฟรีเป็นคุณสมบัติใหม่ถือเป็นการปรับปรุงครั้งยิ่งใหญ่สำหรับผู้ใช้งานจำนวนมาก

งานส่วนหนึ่งที่เข้าสู่พอร์ต Android ยังสามารถนำมาใช้ซ้ำกับ Linux และ OSX ได้ในภายหลัง ซึ่งจะช่วยเราลดอุปสรรคใหญ่ในการสนับสนุนระบบปฏิบัติการเหล่านั้นได้เล็กน้อย While creating the Android companion app was already a huge task for us, it was still significantly more achievable than a Linux or OSX port, where the full browsing and editing experience needs to be supported as well.

## What about support for iPhones and iPads?

Apple's mobile operating system iOS currently does not support real dynamic live wallpapers like Android does. The possibilities for live wallpapers on iOS are very limiting since iOS does not allow for true live wallpapers. There is some limited support for very basic short animated wallpapers in the form of *Live Photos* but the format is very restrictive and the vast majority of Wallpaper Engine wallpapers aren't really compatible with it in a way that we deem acceptable.