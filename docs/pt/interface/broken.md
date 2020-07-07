---
tags:
  - user interface
  - green
  - white
  - pixelated
  - unreadable
---

# A janela do Wallpaper Engine não é apresentada corretamente

Se a janela do browser do Wallpaper Engine não estiver a funcionar, isso normalmente deve-se a controladores da placa gráfica danificados ou a aplicações antivírus. Para mais informações, leia mais abaixo.

::: aviso Atenção Esta secção é acerca do **interface** do Wallpaper Engine estar preto ou danificado. Se os seus **wallpapers estiverem pretos** deve ir aqui: [Ecrã preto / vídeos não reproduzem](/noshow/notplaying.html). :::

## O browser do Wallpaper Engine está preto ou branco

Para a maior parte das pessoas, isto significa que o internace para o utilizador do Wallpaper Engine está a ser bloqueado erradamente por uma aplicação antivírus. Certifique-se de que configura uma exceção na sua aplicação antivírus para que ignore o Wallpaper Engine, especificamente todos os executáveis do diretório de instalação wallpaper_engine e especialmente **wallpaper_engine/bin/ui32.exe**.

Em certos casos, a seguir é necessário verificar os ficheiros do Wallpaper Engine ou até reinstalar o Wallpaper Engine se a sua aplicação antivírus colocou um bloqueio permanente em alguns ficheiros importantes do Wallpaper Engine:

* [Assistência do Steam: Verificar a integridade dos ficheiros da aplicação](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

If the verification through Steam does not fix this issue after you have configured your antivirus application, try to re-install Wallpaper Engine through Steam. If your antivirus has gone berserk, it might even have permanently blocked the filepaths used by Wallpaper Engine. In that case make sure to uninstall the antivirus first and then install Wallpaper Engine into a different directory, you can choose to create a new Steam games library in Steam for this.

## Wallpaper Engine interface with green artifacts or white lines

Your graphics card drivers are broken or misconfigured. Download the latest drivers for your graphics cards (even if you already have the latest drivers) and perform a clean re-installation of the drivers. Is is important that you first uninstall your current drivers and then install the latest drivers to ensure any broken files or settings are removed.

If the problem persists, turn off Wallpaper Engine. Then re-launch Wallpaper Engine using the third launch option in Steam labeled "disable UI hardware acceleration".

### Rare Steam Overlay Bug Breaking Wallpaper Engine User Interface

The other possible reason for a black application window is a rare Steam bug with the Steam overlay. You can try the following:

Turn off Wallpaper Engine completely (right-click on the tray icon and then select "Quit"). Afterwards, open up Steam, right-click on Wallpaper Engine, select "Properties" and then disable the "Enable Steam Overlay while in-game" option. After disabling the option, try to restart Wallpaper Engine via Steam. 