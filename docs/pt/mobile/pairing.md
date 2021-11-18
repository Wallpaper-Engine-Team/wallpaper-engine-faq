# Emparelhar um dispositivo móvel com o Windows

Pode emparelhar os seus dispositivos móveis com o seu computador para transferir sem fios a sua coleção de wallpapers para a app complementar do wallpaper Engine no seu dispositivo móvel.

Não é possível que a app Android transfira wallpapers diretamente do Workshop devido a limitações técnicas e legais que impedem a app Android de se ligar diretamente ao Workshop.

::: dica Se o emparelhamento não resultar para si, consulte a secção **Solução de recurso** no fundo desta página para saber como criar pacotes de wallpaper móveis (**.mpkg**) e como as importar para o seu dispositivo móvel.
:::

[[toc]]

## 1. Instalar a app complementar gratuita do Wallpaper Engine para Android

Antes de continuar, certifique-se de que instalou a versão mais recente da app complementar o Wallpaper Engine para Android.

Recomendamos que instale a app através da versão oficial da app store, mas também pode transferir a app mais recente diretamente da nossa página na web. Para obter as ligações para transferência e mais informações, visite nossa página de transferências para Android:

* [Transferir o Wallpaper Engine para Android](https://www.wallpaperengine.io/android/)

Por motivos de segurança, não aconselhamos a instalar a app a partir de quaisquer origens que não estejam indicadas no nosso website.

## 2. Preparar o Wallpaper Engine no Windows

Na app **Windows**, clique no botão **Mobile** no canto superior direito do interface para o utilizador. Abrir-se-á a visão geral do dispositivo móvel. No fundo da visão geral do dispositivo, clique no botão **Ligar novo dispositivo**. O Wallpaper Engine irá mostrar-lhe um PIN de 4 dígitos que pode usar para emparelhar um dispositivo móvel no passo seguinte.

<video width="100%" controls autoplay loop>
  <source src="/videos/mobile_pin.mp4" type="video/mp4">
  O seu browser não suporta o tag vídeo.
</video>

## 3. Ligar o seu dispositivo móvel

Na app complementar para mobile do Wallpaper Engine, clique em **Adicionar** no canto inferior direito, clicando em seguida em **Emparelhar com computador**. A app do Wallpaper Engine irá procurar instâncias em execução do Wallpaper Engine para Windows na sua rede local. O seu computador Windows deverá aparecer após alguns segundos, permitindo-lhe ligar-se a ele clicando no seu nome. Se estiver a ligar pela primeira vez, ser-lhe-á pedido que introduza o PIN de 4 dígitos (veja a secção Windows acima).

<video height="590px" style="display:block;margin:0 auto;" controls autoplay loop>
  <source src="/videos/mobile_connect.mp4" type="video/mp4">
  O seu browser não suporta o tag vídeo.
</video>

Depois de introduzir o PIN, a barra de estado da app para mobile fica verde e mostra o computador a que está ligada. Na app para Windows, agora o botão **Mobile** também está verde para indicar que tem uma ligação mobile ativa.

Por predefinição, o Wallpaper Engine permite agora ligar automaticamente ao seu computador, se iniciar o Wallpaper Engine no seu dispositivo móvel e no seu computador ao mesmo tempo.

## 4. Transferir Wallpapers para o seu dispositivo móvel

Depois de estabelecer ligação, o botão **Mobile** no canto superior direito fica verde.

Agora basta clicar no botão **Enviar para dispositivo móvel** no lado direito ou clicar com o botão direito em qualquer wallpaper compatível e selecionar **Enviar para dispositivo móvel**, selecionando, em seguida, o seu dispositivo na lista.

#### Wallpapers de Cena

Wallpapers dinâmicos e interativos que sejam do tipo **Cena** serão primeiro otimizados para utiização em telemóveis e para garantir a compatibilidade com hardware móvel. Este processo pode demorar um pouco. Também lhe será perguntado quando a opção de qualidade que pretende utilizar, especialmente para wallpapers de alta resolução. Recomendamos que experimente a opção **Equilibrada** se preparar que ocorrem problemas de desempenho no seu dispositivo móvel.

<video width="100%" controls autoplay loop>
  <source src="/videos/mobile_transfer.mp4" type="video/mp4">
  O seu browser não suporta o tag vídeo.
</video>

::: dica Também pode transferir vários wallpapers ao mesmo tempo clicando em vários wallpapers enquanto mantém a tecla CTRL premida no seu teclado.
:::

## Resolução de problemas de emparelhamento com dispositivos móveis

Se não consegue emparelhar o seu dispositivo móvel ao seu computador, é muito provável que a culpa seja de uma firewall ou de uma definição da rede local. Verifique as seguintes origens possíveis do problema:

* Certifique-se de que o seu telefone e computador estão ligados à mesma rede local.
* Certifique-se de que nenhuma firewall está a impedir o Wallpaper Engine de comunicar com a sua rede local.
* Certifique-se de que o seu router de rede não está a impedir que os seus dispositivos comuniquem entre si.
    * Certifique-se de que o seu router não está a bloquear o tréfego de rede entre dispositivos.
    * Ligue **UPnP** (**"Universal Plug and Play"**) nas definições do seu router.
* Desative qualquer tipo de VPN ou software de proxy no sue computador e no sue dispositivo móvel que possa interferir na comunicação entre os seus dispositivos.
* Confirme que o Wallpaper Engine para Windows e o seu dispositivo móvel estão atualizados e ligados.

### Solução de recurso: importar manualmente um ficheiro de Wallpaper (.mpkg)

Caso não consiga reparar a ligação entre o seu computador e o seu dispositivo móvel, continua a poder transferir manualmente os seus wallpapers para o seu dispositivo móvel. Primeiro, selecione os wallpapers que pretende exportar no Wallpaper Engine e, em seguida, clique neles com o botão direito e selecione **Enviar para dispositivo móvel**, clicando em seguida em **Exportar .mpkg**.

<video width="100%" controls autoplay loop>
  <source src="/videos/mobile_export.mp4" type="video/mp4">
  O seu browser não suporta o tag vídeo.
</video>

Depois do Wallpaper Engine criar os ficheiros .mpkg para os seus wallpapers, pode transferi-los para o seu dispositivo móvel movendo os ficheiros para o seu dispositivo móvel através de USB ou copiando os ficheiros para um cartão SD. Como alternativa, também pode utilizar qualquer serviço de partilha de ficheiros no seu dispositivo móvel ou enviá-los para si próprio através de um serviço de mensagens ou até através de email (caso o tamanho do ficheiro não represente um problema).

Quando os ficheiros estiverem no seu dispositivo móvel, abra o Wallpaper Engine no seu dispositivo móvel e utilize a funcionalidade **Importar ficheiro** para importar os ficheiros .mpkg diretamente para a aplicação selecionando-os a partir do diretório em que os colocou.