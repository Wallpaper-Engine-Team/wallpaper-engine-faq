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
* Mude a opção **Framework de vídeo** +ara **Preferir DirectShow**
* Reinicie a aplicação e experimente voltar a usar o seu weallpaper de vídeo

## Ativar aceleração por hardware de WebM
Se verificar que ocorre gaguejar no fim dos seus wallpapers de vídeo, pode usar ficheiros .webm que não sofrem do mesmo problema. Será melhor que também ative a aceleração por hardware para vídeos .webm, o que reduzirá significativamente a sua utilização do CPU e continuará a permtir que os wallpapers de vídeo sejam reproduzidos em ciclo sem um corte visível depois do último fotograma. This is a continuation of the steps above, make sure you have installed LAV and enabled DirectShow as instructed in the previous section.
* Open the Wallpaper Engine settings and navigate to the "General" tab
* Change the **WebM framework** option to **Prefer Native**
* Restart the application and try using your video wallpaper again

Check if the LAV system tray icon shows up and if the CPU usage is nearly zero, then your .webm content is now hardware accelerated. If it does not seem to work, make sure all options are configured correctly and LAV is correctly installed.