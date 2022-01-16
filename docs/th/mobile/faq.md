# Android - คำถามและปัญหาที่พบบ่อย

หน้านี้ประกอบด้วยรายการคำถามที่พบบ่อยที่สุดและปัญหาทางเทคนิคที่พบโดยผู้ใช้

[[toc]]

::: tip
หากคุณต้องการเชื่อมต่ออุปกรณ์ Android ของคุณกับ Windows เพื่อติดตั้งวอลเปเปอร์เพิ่มเติม ให้ดูคู่มือการจับคู่ Android แบบครอบคลุมของเราได้ที่นี่:

* [การจับคู่อุปกรณ์มือถือกับ Windows](/mobile/pairing.html)
:::

## ไม่สามารถตั้งค่าวอลเปเปอร์ภาพเคลื่อนไหวบนหน้าจอล็อกของ Android

ทั้งนี้ขึ้นอยู่กับผู้ผลิตอุปกรณ์ของคุณและตัวเรียกใช้งาน Android ที่คุณใช้ คุณอาจไม่สามารถตั้งค่าวอลเปเปอร์ภาพเคลื่อนไหวบนหน้าจอล็อกได้ หรืออาจทำได้เพียงตั้งค่าวอลเปเปอร์เดียวกันกับหน้าจอหลัก

เมื่อดูตัวอย่างวอลเปเปอร์ภาพเคลื่อนไหวใน Wallpaper Engine บนโทรศัพท์ของคุณ ให้กดสัญลักษณ์เครื่องหมายถูกที่มุมขวาบนค้างไว้สองสามวินาที เพื่อเปิดวอลเปเปอร์ภาพเคลื่อนไหวบนหน้าจอโทรศัพท์ของคุณ ตอนนี้ตัวเลือกในการตั้งค่าวอลเปเปอร์บนหน้าจอล็อกควรปรากฏขึ้น ทั้งนี้ขึ้นอยู่กับผู้ผลิตของคุณ หากตัวเลือกนี้ไม่ปรากฏขึ้น แสดงว่าโทรศัพท์ของคุณไม่รองรับวอลเปเปอร์ภาพเคลื่อนไหวบนหน้าจอล็อก ผู้ผลิตโทรศัพท์ต่อไปนี้เป็นที่ทราบกันดีว่าไม่อนุญาตให้ใช้วอลเปเปอร์ภาพเคลื่อนไหวบนหน้าจอล็อกของอุปกรณ์บางประเภทหรือทั้งหมด:

* Huawei
* Xiaomi

## Live wallpapers on Android do not play sounds

Wallpaper Engine for Android does not play any sounds on Android and there is no way to activate audio playback for mobile wallpapers.

## How to unset Wallpaper Engine wallpaper

If you wish to stop using a Wallpaper Engine wallpaper, you can simply assign a new wallpaper in your Android settings. Wallpaper Engine is just another wallpaper to Android and wallpapers cannot unset themselves.

Alternatively, you can uninstall Wallpaper Engine entirely which will cause your phone to revert to its default wallpaper.

## Android wallpaper regularly disappears or crashes silently

If you are using Wallpaper Engine as a wallpaper but the wallpaper disappears without any error messages after a few hours, days or weeks, it is likely being falsely terminated by your phone's power saving functionality. Under normal circumstances, Android should never terminate live wallpapers for power saving purposes but some users have reported this happening to them. This depends largely on your device manufacturer, if Wallpaper Engine disappears regularly, disable power optimization for Wallpaper Engine in your Android settings. This differs depending on your Android version and device, if you are unsure, search the web for ways to disable power optimization for apps on your exact mobile device name.