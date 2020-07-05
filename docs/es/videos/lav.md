---
tags:
  - webm
  - vídeo
  - negro
  - codec
  - filtros
  - 4K
  - HEVC
  - mkv
  - mp4
---

# Usar LAV y DirectShow
Si tiene problemas con codecs de vídeo dañados o quiere usar otros formatos de vídeo en su equipo, puede instalar LAV y habilitar DirectShow en la configuración de Wallpaper Engine. Esto permitirá que los **vídeos 4K y HEVC funcionen mejor en Windows 7** y se podrán abrir archivos **.mvk**.

Por motivos legales, no podemos hacer un paquete de descarga de LAV con Wallpaper Engine, por lo que tendrá que descargarlo usted. Tras instalar LAV, tendrá que configurar Wallpaper Engine para usar DirectShow:

## 1. Instalar LAV
* Descargue las versiones x86 **Y** x64 de LAV Filters:
  * Descarga #1: [Github](https://github.com/Nevcairiel/LAVFilters/releases).
  * Descarga #2: [Fosshub](https://www.fosshub.com/LAV-Filters.html).
* Instale LAV y asegúrese que su usuario de Windows tiene permisos de administrador.
* Reinicie Wallpaper Engine.

## 2. Habilitar DirectShow
* Abra la configuración de «Wallpaper Engine» y diríjase a la etiqueta «General».
* Cambie la opción **Plataforma de vídeo preferida** a **LAV de DirectShow**.
* Reinicie el programa e intente usar el fondo de vídeo otra vez.

## Habilitar aceleración de hardware de WebM
If you are experiencing stutters at the end of your video wallpapers, you can use .webm files which do not suffer from the same issue. It's best if you also enable hardware acceleration for .webm videos which will reduce the CPU usage for them significantly and still allows video wallpapers to loop without a notable cut after the last frame. This is a continuation of the steps above, make sure you have installed LAV and enabled DirectShow as instructed in the previous section.
* Open the Wallpaper Engine settings and navigate to the "General" tab
* Change the **WebM framework** option to **Prefer Native**
* Restart the application and try using your video wallpaper again

Check if the LAV system tray icon shows up and if the CPU usage is nearly zero, then your .webm content is now hardware accelerated. If it does not seem to work, make sure all options are configured correctly and LAV is correctly installed.