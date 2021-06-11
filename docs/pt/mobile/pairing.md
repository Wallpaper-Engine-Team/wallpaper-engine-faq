# Emparelhar um dispositivo móvel com o Windows

Pode emparelhar os seus dispositivos móveis com o seu computador para transferir sem fios a sua coleção de wallpapers para a app complementar do wallpaper Engine no seu dispositivo móvel. Não é possível para a app Android transferir wallpapers diretamente da Steam Workshop porque só o próprio Steam pode transferir ficheiros de wallpaper.

Caso urja algum problema ao emparelhar os seus dispositivos móveis, continua a poder importar wallpapers exportando manualmente o **.mpkg** que a aplicação móvel do Wallpaper Engine utiliza para fazer render de wallpapers.

### Preparar o Wallpaper Engine no Windows

Na app **Windows**, clique no botão **Mobile** no canto superior direito do interface para o utilizador. Abrir-se-á a visão geral do dispositivo móvel. No fundo da visão geral do dispositivo, clique no botão **Ligar novo dispositivo**. O Wallpaper Engine irá mostrar-lhe um PIN de 4 dígitos que pode usar para emparelhar um dispositivo móvel.

![Mobile PIN](/img/faq/mobile_pin.gif)

### Ligar o seu dispositivo móvel

Na app complementar para mobile do Wallpaper Engine, clique em **Adicionar** no canto inferior direito, clicando em seguida em **Emparelhar com computador**. A app do Wallpaper Engine irá procurar instâncias em execução do Wallpaper Engine para Windows na sua rede local. O seu computador Windows deverá aparecer após alguns segundos, permitindo-lhe ligar-se a ele clicando no seu nome. Se estiver a ligar pela primeira vez, ser-lhe-á pedido que introduza o PIN de 4 dígitos (veja a secção Windows acima). O PIN é uma medida de segurança adicional para garantir que utilizadores não autorizados não conseguem ligar-se ao seu computador sem o seu conhecimento.

Depois de introduzir o PIN, a barra de estado da app para mobile fica verde e mostra o computador a que está ligada. Na app para Windows, agora o botão **Mobile** também está verde para indicar que tem uma ligação mobile ativa.

![PIN Mobile](/img/faq/mobile_pair.gif)

## Resolução de problemas de emparelhamento com dispositivos móveis

Se não consegue emparelhar o seu dispositivo móvel ao seu computador, é muito provável que a culpa seja de uma firewall ou de uma definição da rede local. Verifique as seguintes origens possíveis do problema:

* Certifique-se de que o seu telefone e computador estão ligados à mesma rede local.
* Certifique-se de que nenhuma firewall está a impedir o Wallpaper Engine de comunicar com a sua rede local.
* Certifique-se de que o seu router de rede não está a impedir que os seus dispositivos comuniquem entre si.
* Desative qualquer tipo de VPN ou software de proxy no sue computador e no sue dispositivo móvel que possa interferir na comunicação entre os seus dispositivos.
* Confirme que o Wallpaper Engine para Windows e o seu dispositivo móvel estão atualizados e ligados.

## Solução de recurso: importar manualmente um ficheiro de Wallpaper (.mpkg)

Caso não consiga reparar a ligação entre o seu computador e o seu dispositivo móvel, continua a poder transferir manualmente os seus wallpapers para o seu dispositivo móvel. Primeiro, selecione os wallpapers que pretende exportar no Wallpaper Engine e, em seguida, clique neles com o botão direito e selecione **Enviar para dispositivo móvel**, clicando em seguida em **Exportar .mpkg**.

Depois do Wallpaper Engine criar os ficheiros .mpkg para os seus wallpapers, pode transferi-los para o seu dispositivo móvel movendo os ficheiros para o seu dispositivo móvel através de USB ou copiando os ficheiros para um cartão SD. Como alternativa, também pode utilizar qualquer serviço de partilha de ficheiros no seu dispositivo móvel ou enviá-los para si próprio através de um serviço de mensagens ou até através de email (caso o tamanho do ficheiro não represente um problema).

Quando os ficheiros estiverem no seu dispositivo móvel, abra o Wallpaper Engine no seu dispositivo móvel e utilize a funcionalidade **Importar ficheiro** para importar os ficheiros .mpkg diretamente para a aplicação selecionando-os a partir do diretório em que os colocou.