---
tags:
  - antivirus
  - showing
---

# Wallpapers não estão visíveis

Se alguns ou todos os seus wallpapers não aparecerem, é frequente que isso seja provocado por uma aplicação antivírus que bloqueia o Wallpaper Engine erradamente. Se estiver a usar uma aplicação antivírus, certifique-se de que a configura de forma a que ignore o diretório de instalação *wallpaper_engine* e todos os executáveis importantes do Wallpaper Engine:

* *wallpaper_engine/wallpaper32.exe*
* *wallpaper_engine/wallpaper64.exe*
* *wallpaper_engine/launcher.exe*
* *wallpaper_engine/bin/webwallpaper32.exe*
* *wallpaper_engine/bin/ui32.exe*

::: tip
Caso possua qualquer aplicação antivírus instalada (exceto Windows Defender), é muito provável que esta seja a causa dos seus problemas. Se as suas primeiras tentativas não corrigirem este problema, dedique algum tempo a investigar isto de forma mais aprofundada.
:::

## Modo de alto contraste no Windows

Caso tenha ativado o **modo de alto contraste** nas definições de tema do seu Windows 10 com o tema **Branco de Alto Contaste**, o Windows forçará a desativação dos wallpapers do Wallpaper Engine. Experimente mudar o tema de alto contraste que está a utilizar nas definições de alto contraste do Windows, ou desative totalmente o modo de alto contraste e o problema irá desaparecer.

## Wallpapers desaparecem / desvanecem a intervalos regulares

Se os seus wallpapers estão sempre a desaparecer por breves momentos, é provável que tenha uma apresentação de diapositivos configurada como wallpaper do Windows. Abra as definições de wallpaper do Windows e defina uma cor sólida ou uma imagem estática como seu wallpaper normal do Windows, e isto irá resolver este problema.

## Conflitos com outro software de modificação do ambiente de trabalho

O Wallpaper Engine funciona bem com a maior parte das aplicações de modificação do ambiente de trabalho. No entanto, algumas aplicações como o StarDock DeskScapes também modificam o wallpaper do Windows e não é possível executar as duas aplicações ao mesmo tempo. Se utilizar uma aplicação semelhante ao Wallpaper Engine, será necessário decidir qual delas continuará a usar.

### Fences

Em geral, o Wallpaper Engine funciona bem com *Fences*. No entanto, **se tem o Fences instalado mas desativado**, ele esconderá o wallpaper do Wallpaper Engine. Deve ativá-lo ou desativá-lo completamente.

Se estiver a utilizar Fences e os seus wallpapers do Wallpaper Engine não estiverem visíveis, certifique-se de que está a utilizar **Fences 3.13 ou mais recente** para evitar estes problemas de compatibilidade com o Wallpaper Engine. Fences 3.13 e versões mais recentes contêm correções importantes na compatibilidade com o Wallpaper Engine, pelo que é importante que o seu Fences esteja atualizado.

## Wallpaper cinzento ou texturas em falta no Windows 7

Certifique-se de que a atualização **KB2533623** para o Windows 7 está instalada. Instale-a manualmente através dessa ligação ou certifique-se de que o seu Windows Update está a funcionar corretamente e irá instalá-la sozinho. Pode transferi-la manualmente do website da Microsoft, a seguir reiniciar o seu sistema e o problema deverá ter desaparecido:

* [KB2533623](https://support.microsoft.com/en-us/help/2533623/microsoft-security-advisory-insecure-library-loading-could-allow-remot)