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
Se tem problemas relacionados com codecs de vídeo avariados ou quer utilizar formatos adicionais de vídeo no seu sistema, pode experimentar instalar LAV e ativar o DirectShow nas definições do Wallpaper Engine. Isto deverá permitir melhor suporte para **vídeos 4K e HEVC no Windows 7** e permitir a abertura de ficheiros **.mkv**.

Por motivos legais, não podemos disponibilizar o LAV com o Wallpaper Engine, o que significa que terá de ser você a transferi-lo e instalá-lo. Depois de instalar o LAV, também será necessário configurar o Wallpaper Engine para que utilize o DirectShow:

## 1. Instalar o LAV
* Transfira as versões x86 **E** x64 dos LAV Filters:
  * Mirror #1: [Github](https://github.com/Nevcairiel/LAVFilters/releases)
  * Mirror #2: [Fosshub](https://www.fosshub.com/LAV-Filters.html)
* Instale o LAV, certifique-se de que o seu utilizador do Windows tem direitos de administrador
* Reinicie o Wallpaper Engine.

## 2. Ativar o DirectShow
* Abra as definições do Wallpaper Engine e navegue para o separador "Geral"
* Mude a opção **Framework de vídeo** para **Preferir DirectShow**
* Reinicie a aplicação e experimente voltar a usar o seu wallpaper de vídeo

## Ativar aceleração por hardware de WebM
Se verificar que ocorre gaguejar no fim dos seus wallpapers de vídeo, pode usar ficheiros .webm que não sofrem do mesmo problema. Será melhor que também ative a aceleração por hardware para vídeos .webm, o que reduzirá significativamente a sua utilização do CPU e continuará a permitir que os wallpapers de vídeo sejam reproduzidos em ciclo sem um corte visível depois do último fotograma. Isto é uma continuação das instruções acima. Certifique-se de que instalou o LAV e de que ativou o DirectShow, tal como foi indicado na secção anterior.
* Abra as definições do Wallpaper Engine e navegue para o separador "Geral"
* Mude a opção **Framework WebM** para **Preferir nativo**
* Reinicie a aplicação e experimente voltar a usar o seu wallpaper de vídeo

Verifique se o ícone do LAV no tabuleiro do sistema aparece e se a utilização do CPU é quase zero, então o seu conteúdo .webm é agora acelerado por hardware. Se não parecer estar a funcionar, certifique-se de que todas as opções estão configuradas corretamente e de que o LAV está corretamente instalado.