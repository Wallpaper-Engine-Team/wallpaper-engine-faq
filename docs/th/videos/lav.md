---
tags:
  - webm
  - วิดีโอ
  - สีดำ
  - ตัวแปลงสัญญาณ
  - ตัวกรอง
  - 4K
  - HEVC
  - mkv
  - mp4
---

# การใช้ LAV และ DirectShow
หากคุณพบปัญหาเกี่ยวกับตัวแปลงสัญญาณวิดีโอที่เสียหายหรือต้องการใช้รูปแบบวิดีโออื่น ๆ ในระบบของคุณ คุณอาจลองติดตั้ง LAV และเปิดใช้งาน DirectShow ในการตั้งค่า Wallpaper Engine ซึ่งอาจให้การสนับสนุน **วิดีโอ 4K และ HEVC ใน Windows 7** ได้ดีกว่า และช่วยคุณเปิดไฟล์ **.mkv **

ด้วยเหตุผลทางกฎหมาย เราไม่สามารถรวม LAV เอาไว้กับ Wallpaper Engine ได้ ดังนั้นคุณต้องดาวน์โหลดและติดตั้ง LAV ด้วยตัวเอง หลังจากคุณติดตั้ง LAV แล้ว คุณต้องกำหนดค่า Wallpaper Engine เพื่อใช้งาน DirectShow:

## 1. ติดตั้ง LAV
* ดาวน์โหลดตัวกรอง LAV เวอร์ชัน x86 **และ** x64:
  * ลิงก์#1: [Github](https://github.com/Nevcairiel/LAVFilters/releases)
  * ลิงก์#2: [Fosshub](https://www.fosshub.com/LAV-Filters.html)
* ติดตั้ง LAV และตรวจสอบให้แน่ใจว่าผู้ใช้ Windows ของคุณมีสิทธิ์ของผู้ดูแลระบบ
* รีสตาร์ท Wallpaper Engine

## 2. เปิดใช้งาน DirectShow
* เปิดการตั้งค่า Wallpaper Engine และไปที่แท็บ "ทั่วไป"
* Change the **Video framework** option to **Prefer DirectShow**
* Restart the application and try using your video wallpaper again

## Enabling WebM Hardware Acceleration
If you are experiencing stutters at the end of your video wallpapers, you can use .webm files which do not suffer from the same issue. It's best if you also enable hardware acceleration for .webm videos which will reduce the CPU usage for them significantly and still allows video wallpapers to loop without a notable cut after the last frame. This is a continuation of the steps above, make sure you have installed LAV and enabled DirectShow as instructed in the previous section.
* Open the Wallpaper Engine settings and navigate to the "General" tab
* Change the **WebM framework** option to **Prefer Native**
* Restart the application and try using your video wallpaper again

Check if the LAV system tray icon shows up and if the CPU usage is nearly zero, then your .webm content is now hardware accelerated. If it does not seem to work, make sure all options are configured correctly and LAV is correctly installed.