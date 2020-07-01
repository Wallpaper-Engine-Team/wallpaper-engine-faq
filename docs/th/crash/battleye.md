---
tags:
  - ข้อผิดพลาด
  - ปิด
  - nvidia
  - battleye
---

# เครื่องมือป้องกันการโกง BattlEye ยุติการทำงานของ Wallpaper Engine
หาก Wallpaper Engine ปิดลงอย่างเงียบ ๆ โดยเฉพาะเมื่อคุณเริ่มต้นเกมบางเกม สาเหตุที่เป็นไปได้มากที่สุดอาจเกิดจากเครื่องมือป้องกันการโกง BattlEye ที่ใช้โดยเกมที่มีผู้เล่นหลายคน เกมที่ใช้ระบบ BattlEye ที่เป็นที่รู้จักกันคือ:

* Fortnite
* Playerunknown's Battleground (PUBG)
* Rainbow Six Siege
* Escape from Tarkov
* *และอื่น ๆ...*

BattlEye จะปิดบางระบบใน Wallpaper Engine (และแอพพลิเคชันอื่น ๆ) โดยไม่ได้ตั้งใจ ซึ่งนี่ไม่ได้เกิดจากปัญหาหรือข้อผิดพลาดของ Wallpaper Engine BattleEye จะหยุดการทำงานของ Wallpaper Engine แม้ว่า Wallpaper Engine ไม่ได้ทำงานโต้ตอบกับเกมหรือซอฟต์แวร์ในระบบ

## Nvidia โหมดเวลาแฝงในระดับต่ำ (Low-Latency Mode)
ผู้ใช้ส่วนใหญ่ที่ได้รับผลกระทบนี้เปิดใช้งาน *โหมดเวลาแฝงในระดับต่ำพิเศษ (Ultra-Low Latency Mode)* ในไดรเวอร์จอ Nvidia หากคุณมีการ์ดจอ Nvidia และประสบปัญหานี้ ให้เปิดแผงควบคุม Nvidia และปิดการใช้งานโหมดเวลาแฝงในระดับต่ำพิเศษเพื่อแก้ไขปัญหานี้ Select *"Manage 3D settings"* -> *"Global Settings"* -> *"Low Latency Mode"* and change this setting to *Off*. Click *Apply* and restart your computer. Afterwards, BattlEye will not terminate Wallpaper Engine by mistake anymore.

## Contacting BattlEye Support
If the steps above do not fix your issues with a BattlEye-powered multiplayer game, you will need to reach out to BattlEye directly:

* [BattlEye Support](https://www.battleye.com/contact/)

On some systems, BattlEye will terminate Wallpaper Engine for no apparent reason and this is not something we can prevent as BattlEye is a rather intrusive anti-cheat which is able to terminate any application on your computer without notifying you. In these cases, the BattlEye developers will need to investigate the issue on your system as its a faulty behavior in their software.