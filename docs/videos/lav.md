# Using LAV and DirectShow
Follow this guide to add support for additional video formats and to fix issues regarding broken video codecs on your system. This should enable better support for **4K and HEVC videos on Windows 7** and allow opening of **.mkv** files.

You will need to install LAV and afterwards configure Wallpaper Engine to use DirectShow.

## 1. Install LAV
* Download the x86 **AND** x64 versions of LAV Filters:
  * Mirror #1: [Github](https://github.com/Nevcairiel/LAVFilters/releases)
  * Mirror #2: [Fosshub](https://www.fosshub.com/LAV-Filters.html)
* Install LAV, make sure your Windows user has admin rights
* Restart Wallpaper Engine.

## 2. Enable DirectShow
* Open the Wallpaper Engine settings and navigate to the "General" tab
* Change the **Video framework** option to **Prefer DirectShow**
* Restart the application and try using your video wallpaper again