---
tags:
  - webm
  - video
  - black
  - codec
  - filters
  - 4K
  - HEVC
  - mkv
  - mp4
---

# Использование LAV и DirectShow
Если у вас есть проблемы, которые связаны с неисправными видеокодеками, или же вы хотите использовать дополнительные форматы видео, попробуйте установить LAV и включить DirectShow в настройках Wallpaper Engine. Это поможет улучшить поддержку видео в форматах **4K и HEVC на Windows 7** и создаст возможность проигрывать файлы формата **.mkv**.

По юридическим соображениям, мы не можем поставлять LAV вместе с Wallpaper Engine, поэтому вам придется скачать и установить данный набор фильтров самостоятельно. После того, как вы установите LAV, вам понадобится изменить настройки Wallpaper Engine, чтобы разрешить программе использовать DirectShow:

## 1. Установите LAV
* Скачайте LAV Filters для x86 **И** x64 версий Windows:
  * Зеркало #1: [Github](https://github.com/Nevcairiel/LAVFilters/releases)
  * Зеркало #2: [Fosshub](https://www.fosshub.com/LAV-Filters.html)
* Install LAV, make sure your Windows user has admin rights
* Restart Wallpaper Engine.

## 2. Enable DirectShow
* Open the Wallpaper Engine settings and navigate to the "General" tab
* Change the **Video framework** option to **Prefer DirectShow**
* Restart the application and try using your video wallpaper again

## Enabling WebM Hardware Acceleration
If you are experiencing stutters at the end of your video wallpapers, you can use .webm files which do not suffer from the same issue. It's best if you also enable hardware acceleration for .webm videos which will reduce the CPU usage for them significantly and still allows video wallpapers to loop without a notable cut after the last frame. This is a continuation of the steps above, make sure you have installed LAV and enabled DirectShow as instructed in the previous section.
* Open the Wallpaper Engine settings and navigate to the "General" tab
* Change the **WebM framework** option to **Prefer Native**
* Restart the application and try using your video wallpaper again

Check if the LAV system tray icon shows up and if the CPU usage is nearly zero, then your .webm content is now hardware accelerated. If it does not seem to work, make sure all options are configured correctly and LAV is correctly installed.