# Nenhum som a ser reproduzido / Problemas na saída de áudio
Este guia de ajuda irá ajudá-lo a resolver qualquer problema que esteja relacionado com reprodução de áudio em wallpapers. Primeiro que tudo, deve certificar-se de que está a utilizar um wallpaper que realmente contém áudio experimentando alguns outros. Muitos wallpapers são completamene silenciosos. Se tiver a certeza de que o seu wallpaper contém áudio, continue com este guia.

::: warning
Aviso Se o seu som estiver sempre a ligar-se e desligar-se dentro de poucos segundos leia, em vez disso, o seguinte guia de ajuda:

* [Som / áudio liga e desliga intermitentemente](/audio/intermittent)
:::

## Certifique-se de que o Wallpaper Engine não está a silenciar-se a si próprio
Há três lugares na aplicação que que lhe permitem silenciar a saída de áudio:

1. No separador **Gerais** das definições do Wallpaper Engine, há uma opção chamada **Saída de Áudio**. Certifique-se de que está ativada.
2. Clique no botão **Ecrãs** no canto superior direito da janela principal do Wallpaper Engine. Isto irá mostrar-lhe uma visão geral com todos os seus ecrãs. Cada ecrã tem um botão para silenciar no canto inferior esquerdo. Certifique-se de que os seus ecrãs não estão silenciados.
3. Quando seleciona um wallpaper, encontrará uma opção de **Volume** do lado direito, certifique-se de que não está definida como zero ou um volume de som baixo. Se a opção disser **Áudio desativado nas definições do ecrã**, yo seu ecrã está silenciado, consulte novamente o 2.º passo e ative o som do seu ecrã.

## Consulte o misturador de áudio do Windows
O Wallpaper Engine permite que toda a saída de áudio seja controlada pelo Windows, pelo que se o próprio Wallpaper Engine não estiver silenciado, o problema reside algures na sua configuração do Windows. Primeiro, consulte se o misturador de áudio do Windows e certifique-se de que o Wallpaper Engine não está silenciado ou definido para um volume muito baixo, tal como é ilustrado na captura de imagem que se segue:

![Suba o volume e anule o silêncio do Wallpaper Engine no misturador de áudio do Windows](./audiomixer.png)

## Examine o dispositivo de áudio selecionado
Outra razão possivel para a ausência de saída de áudio pode ser que o Windows tenha selecionado o dispositivo errado para saída de áudio para o Wallpaper Engine, tente forçar manualmente que seja utilizado o seu dispositivo de saída de áudio pretendido:

1. Clique com o botão direito no ícone de áudio ao lado do relógio no tabuleiro do Windows e selecione **Open Sound settings** (Abrir definições de som).
2. Desloque até ao fundo da página que se abre e clique em **App volume and device preferences** (Volume da aplicação e preferências do dispositivo).
3. Será apresentada uma lista de todas as aplicações que estão a reproduzir áudio. Procure o Wallpaper Engine e, na coluna **Output** (Saída), selecione o dispositivo de saída de áudio correto. Caso não tenha a certeza, experimente todas as opções possíveis. Poderá ser necessário reiniciar o Wallpaper Engine para que isto seja implementado.

Se utilizar vários dispositivos de áudio (especialmente se utilizar dispositivos USB ou Bluetooth) e reparar que o áudio é cortado quando um dispositivo é desligado ou volta a ser ligado, por vezes o Windows não muda os dispositivos de áudio corretamente e no momento para programas em execução. Isto não pode ser corrigido do nosso lado, nestes casos raros poderá ser necessário reiniciar o Wallpaper Engine para que o Windows volte a lidar corretamente com a saída de áudio. Também pode tentar reinstalar e atualizar quaisquer controladores de áudio e ver se isso corrige estes tipos de problema.

## Reinicie todos os codecs de áudio

Se por esta altura a saída de áudio ainda não estiver a reproduzir áudio, alguns codecs de áudio podem estar danificados, sendo isto principalmente relevante quando utiliza wallpapers do tipo **Vídeo**. Pode confirmar isto clicando com o botão direito no wallpaper no Wallpaper Engine e selecionando **Abrir no Explorer**. Deverá ver o ficheiro de origem de vídeo (habitualmente um ficheiro **.mp4**), abra esse ficheiro com o Windows Media Player e verifique se reproduz áudio. **Tenha atenção:** é muito importante que só faça este teste com o Windows Media Player - outros leitores de vídeo são irrelevantes para este teste, pois os codecs de áudio subjacentes também são utilizados pelo Wallpaper Engine. Se o Windows Media Player não reproduzir áudio, então o ficheiro de vídeo não contém áudio ou os codecs de áudio no seu sistema estão realmente danificados ou em falta.

Nesse caso, pode utilizar a *Codec Tweak Tool* tal como é explicado na página seguinte para reiniciar todos os codecs de áudio e vídeo do seu sistema e, em seguida, reiniciar o Wallpaper Engine e tentar novamente:

* [Vídeos pretos / não são reproduzidos corretamente - Codec Tweak Tool](/noshow/notplaying.html#codec-tweak-tool)

