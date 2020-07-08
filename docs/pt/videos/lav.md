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

# Utilizar LAV e DirectShow
Se tem problemas relacionados com codevs de vídeo avariados ou quer utilizar formatos adicionais de vídeo no seu sistema, pode experimentar instalar LAV e ativar o DirectShow nas definições do Wallpaper Engine. Isto deverá permitir melhor suporte para **vídeos 4K e HEVC no Windows 7** e permitir a abertura de ficheiros **.mkv**.

Por motios legais, não podemos disponibilizar o LAV com o Wallpaper Engine, o que significa que terá de ser você a transferi-lo e instalá-lo. Depois de instalar o LAV, tambéms erá necessário configurar o Wallpaper Engine para que utilize o DirectShow:

## 1. Instalar o LAV
* Transfira as versões x86 **E** x64 dos LAV Filters:
  * Mirror #1: [Github](https://github.com/Nevcairiel/LAVFilters/releases)
  * Mirror #2: [Fosshub](https://www.fosshub.com/LAV-Filters.html)
* Instale o LAV, certifique-se de que o seu utilizador do Windows tem direitos de administrador
* Reinicie o Wallpaper Engine.

## 2. Ativar o DirectShow
* Abra as definições do Wallpaper Engine e navegue para o separador "Geral"
* Change the **Video framework** option to **Prefer DirectShow**
* Restart the application and try using your video wallpaper again

## Enabling WebM Hardware Acceleration
If you are experiencing stutters at the end of your video wallpapers, you can use .webm files which do not suffer from the same issue. It's best if you also enable hardware acceleration for .webm videos which will reduce the CPU usage for them significantly and still allows video wallpapers to loop without a notable cut after the last frame. This is a continuation of the steps above, make sure you have installed LAV and enabled DirectShow as instructed in the previous section.
* Open the Wallpaper Engine settings and navigate to the "General" tab
* Change the **WebM framework** option to **Prefer Native**
* Restart the application and try using your video wallpaper again

Check if the LAV system tray icon shows up and if the CPU usage is nearly zero, then your .webm content is now hardware accelerated. If it does not seem to work, make sure all options are configured correctly and LAV is correctly installed.