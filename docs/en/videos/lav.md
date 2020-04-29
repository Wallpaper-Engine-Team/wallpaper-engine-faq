# Using LAV and DirectShow
If you have issues related to broken video codecs or want to use additional video formats on your system, you can try to install LAV and enable DirectShow in the Wallpaper Engine settings. This should enable better support for **4K and HEVC videos on Windows 7** and allow opening of **.mkv** files. 

For legal reasons, we cannot bundle LAV with Wallpaper Engine which means you need to download and install it yourself. After you have installed LAV, you also need to configure Wallpaper Engine to use DirectShow:

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