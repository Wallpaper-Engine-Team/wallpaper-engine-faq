---
tags:
  - aplicação
  - regras
  - exceção
  - whitelist
  - blacklist
  - lags
  - laggy
  - jogo
  - desempenho
  - fps
  - bloqueio
  - som
  - áudio
  - intermitente
---

# Corrir erros com aplicações ou jogos específicos

Se está a ter problemas com aplicações ou jogos específicos, pode configurar o Wallpaper Engine para agir de uma certa forma quando deteta que a aplicação com a qual está a ter problemas é iniciada ou, por exemplo, a reproduzir áudio.

## Definir uma regra para a plicação

No separador *Desempenho* das definições do Wallpaper Engine, clicar no botão *Editar* ao lado da etiqueta *Regras para aplicações* fará aparecer uma visão geral de todas as regras personalizadas que criou. Ao clicar em *Criar regra nova* pode definir um comportamento especial do Wallpaper Engine para uma aplicação específica.

![Application Rules Overview](./applicationrule.gif)

Ser-lhe-á apresentada uma listade todos os ficheiros .exe em execução no seu sistema. Selecione um .exe da lista ou escreva o nome exato do .exe com o qual está a ter dificuldades. Com as outras duas opções pode configurar a condição ou o comportamento. Leia mais abaixo para obter mais informações e exemplos concretos.

::: tip Wallpaper Engine only cares about the exact .exe name, the location does not matter so you can just type any .exe into the *Application name* field. Just make sure the .exe name matches exactly, including uppercase and lowercase letters. :::

### Fixing performance problems with apps or games

Select the .exe of the program you want to have a special rule for from the list or type it into the **Application name** field. Afterwards, set **Condition** to **Is running** and **Wallpaper playback** to **Stop (free memory)**. This means Wallpaper Engine will completely remove all wallpapers from memory when the application or game is launched, which means any compatibility issues will be resolved.

### Fixing intermittent sound with background recording tools

Select the .exe of the program you want to have a special rule for from the list or type it into the **Application name** field. Afterwards, set **Condition** to **Is playing audio** and **Wallpaper playback** to **Keep running**. This means Wallpaper Engine will not mute itself when the application in question is playing or recording audio. Windows does not differentiate between playing or recording audio, this is why Wallpaper Engine will constantly mute and unmute itself if you are recording it. Many game streaming applications can do this by accident and without your knowledge.

### Other behavior

Check out all possible conditions and wallpaper playback options for more types of application rules. You can also configure Wallpaper Engine to mute or pause when you launch a certain application.

::: tip You can also change these settings for all applications in the **Performance** tab of the Wallpaper Engine settings. If you are having performance issues in multiple games, for example, it may make sense to just change the **Other applications fullscreen** option to **Stop (free memory)** so that Wallpaper Engine will turn itself off when you launch any game or fullscreen application. :::