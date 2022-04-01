# Limitar visualizadores de áudio a leitores de música

Devido à forma como o áudio funciona no Windows, não é possível que o Wallpaper Engine limite os visualizadores de áudio ao leitor de música de sua escolha. No entanto, pode usar software de terceiros para criar um dispositivo de áudio *falso* para obter este resultado. Este guia irá explicar uma forma de definir um tal dispositivo de áudio falso e como configurar o Windows 10 e o Wallpaper Engine para que esta configuração funcione corretamente.

Tenha em conta que não oferecemos suporte para dispositivos de áudio falsos e não garantimos que isto funcione - esta é uma configuração muito avançada que ultrapassa largamente o que o Wallpaper Engine oferece. Oferecemos este guia unicamente como ajuda para utilizadores que queiram ir mais longe na personalização do seu sistema.

::: aviso Atenção
Este guia só funciona em versões atualizadas do Windows 10. Versões mais antigas do Windows poderão não dispor de algumas funcionalidades que tornam impossível seguir este guia. 
:::

### Instalar um dispositivo de áudio falso

Recomendamos que utilize o **VB-CABLE Virtual Audio Device** gratuito que pode transferir a partir do seguinte website:

* [Transferência do Virtual Audio Device](https://www.vb-audio.com/Cable/)

Transfira e extraia o ficheiro de arquivo e, em seguida, instale o dispositivo de áudio de 32 bits ou 64 bits, consoante a sua versão do Windows 10 utilizando **VBCABLE_Setup.exe** ou **VBCABLE_Setup_x64.exe**. Certifique-se de que inicia o ficheiro de configuração com direitos de administrador, clicando com o botão direito e selecionando *Run as administrator* (Executar como administrador). Siga as instruções do programa de instalação e certifique-se de que o dispositivo de áudio foi instalado com sucesso.

### Configurar o Windows e o Wallpaper Engine

Se precisar de ajuda com qualquer dos passos infra, consulte o vídeo infra que mostra todos os passos a dar num Windows 10 (interface em inglês) do princípio ao fim.

1. Comece a reproduzir música utilizando o software que pretende que mais tarde seja usado para o Wallpaper Engine
2. Clique com o botão direito no ícone de áudio ao lado do relógio no tabuleiro do Windows e selecione **Open Sound settings** (Abrir definições de som).
3. Desloque até ao fundo da página que se abre e clique em **App volume and device preferences** (Volume da aplicação e preferências do dispositivo).
4. Será apresentada uma lista de todas as aplicações que estão a reproduzir áudio. Procure o seu leitor de música e na coluna **Output** (Saída), mude a opção de **Default** (Predefinição) para **CABLE Input (VB-Audio Virtual Cable)**. O seu leitor de áudio deverá silenciar-se imediatamente, isto é esperado.
5. Volte à página principal das definições de som do Windows e, no canto superior direito, selecione **Sound Controlo Panel** (Painel de Controlo Som).
6. Irá aparecer uma janela pequena, navegue para o separador **Recording** (Gravação), depois clique com o botão direito no dispositivo de áudio **CABLE Output** e selecione **Properties** (Propriedades).
7. Irá aparecer outra janela, clique n separador **Listen** (Ouvir) e selecione **Listen to this device** (Escutar este dispositivo). Clique em **Apply** (Aplicai) e em **OK** e a música do seu leitor de música deverá voltar.
8. O Windows está agora corretamente configurado, abra as **Definições do Wallpaper Engine** e no separador **Geral** mude **Dispositivo de gravação de áudio** para **CABLE Input (VB-Audio Virtual Cable)**. O Wallpaper Engine deverá agora começar a reagir à música do seu leitor de música, mas irá ignorar qualquer outra aplicação no seu computador.

*Vídeo que mostra todos os passos descritos acima:*

<video width="100%" controls>
  <source src="/videos/audioinputdevice.mp4" type="video/mp4">
  O seu browser não suporta o tag vídeo.
</video>
