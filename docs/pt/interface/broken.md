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

Se a verificação através do Steam não corrigir este problema depois de ter configurado a sua aplicação antivírus, experimente reinstalar o Wallpaper através do Steam. Se o seu antivírus tiver enlouquecido, ele pode até ter bloqueado permanentemente os caminhos de ficheiro utilizados pelo Wallpaper Engine. Nesse caso deve desinstalar primeiro o antivírus e depois instalar o Wallpaper Engine num diretório diferente. Para isto, pode escolher criar uma nova biblioteca de jogos no Steam.

## Interface do Wallpaper Engine com artefactos verdes ou linhas brancas

Os controladores da sua placa gráfica estão danificados ou mal configurados. Transfira os controladores mais recentes para as suas placas gráficas (mesmo que já possua os controladores mais recentes) e faça uma reinstalação limpa dos controladores. É importante que primeiro desinstale os seus controladores atuais e depois instale os controladores mais recentes para garantir que quaisquer definições ou ficheiros danificados são removidos.

Se o problema persistir, desative o Wallpaper Engine. Em seguida, volte a iniciar o Wallpaper Engine utilizando a opção de lançamento de terceiros no Steam, assinalado "disable UI hardware accelleration" (desativar aceleração por hardware da IU).

### Erro raro do overlay do Steam quebra o interface para o utilizdor do Wallpaper Engine

A outra razão possívl para uma janela de aplicação toda preta é um error raro do Steam com o Steam overlay. Pode tentar o seguinte:

Desative completamente o Wallpaper Engine (clique com o botão direito no ícone do tabuleiro e depois selecione "Sair"). Em seguida, abra o Steam, clique com o botão direito no Wallpaper Engine, elecione "Properties" (Propriedades) e depois desative a opção "Enable Steam Overlay while in-game" (Ativar Steam Overlay durante o jogo). Depois de desativar a opção, experimente reiniciar o Wallpaper Engine através do Steam. 