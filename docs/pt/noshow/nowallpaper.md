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

## Wallpapers disappearing / fading away in regular intervals

If your wallpapers keep disappearing for a brief moment, you likely have a slideshow configured as your Windows wallpaper. Open the Windows wallpaper settings and set a solid color or a static image as your regular Windows wallpaper, this will fix this problem.

## Conflicts with other desktop modification software

Wallpaper Engine works well with most desktop-modification applications. However, some applications such as StarDock DeskScapes also modify the Windows wallpaper and it is not possible to run both applications at the same time. If you use a similar application to Wallpaper Engine, you will need to decide on one which you want to continue to use.

### Fences

Generally, Wallpaper Engine works fine with *Fences*. However, **if you have Fences installed but have disabled it**, it will hide the wallpaper from Wallpaper Engine. You need to either enable or uninstall it completely.

If you are using Fences and your Wallpaper Engine wallpapers are not visible, ensure that you are using **Fences 3.13 or newer** to avoid these compatibility issues with Wallpaper Engine. Fences 3.13 and newer versions contain important compatibility fixes with Wallpaper Engine, so it is important that you ensure your Fences is up-to-date.

## Gray Wallpaper or missing textures on Windows 7

Make sure that the Windows 7 update **KB2533623** is installed. Either install it manually with that link or ensure that your Windows Update is working right and installing it by itself. You can download it manually from the Microsoft website, restart your system afterwards and the problem should go away:

* [KB2533623](https://support.microsoft.com/en-us/help/2533623/microsoft-security-advisory-insecure-library-loading-could-allow-remot)