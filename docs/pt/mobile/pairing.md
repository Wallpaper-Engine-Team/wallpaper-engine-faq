# Emparelhar um dispositivo móvel com o Windows

Pode emparelhar os seus dispositivos móveis com o seu computador para transferir sem fios a sua coleção de wallpapers para a app complementar do wallpaper Engine no seu dispositivo móvel.

It's not possible for the Android app to directly download wallpapers from the Workshop due to technical and legal limitations that prevent the Android app from directly connecting to the Workshop.

::: tip
If pairing does not work for you, see the **Backup Solution** section at the bottom of this page to learn how to create mobile wallpaper packages (**.mpkg**) and how to import them on your mobile device.
:::

[[toc]]

## 1. Install the free Wallpaper Engine Android Companion App

Before continuing, make sure to install the latest version of the Wallpaper Engine Android companion app.

Recomendamos que instale a app através da versão oficial da app store, mas também pode transferir a app mais recente diretamente da nossa página na web. Para obter as ligações para transferência e mais informações, visite nossa página de transferências para Android:

* [Transferir o Wallpaper Engine para Android](https://www.wallpaperengine.io/android/)

For security reasons, we advise against installing the app from any sources not listed on our website.

## 2. Preparar o Wallpaper Engine no Windows

Na app **Windows**, clique no botão **Mobile** no canto superior direito do interface para o utilizador. Abrir-se-á a visão geral do dispositivo móvel. No fundo da visão geral do dispositivo, clique no botão **Ligar novo dispositivo**. Wallpaper Engine will show you a 4-digit PIN that you can use to pair one mobile device in the next step.

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

By default, Wallpaper Engine will now always automatically connect to your computer if you start Wallpaper Engine on your mobile device and your computer at the same time.

## 4. Transferring Wallpapers to Your Mobile Device

Once the connection has been established, the **Mobile** button in the upper right corner turns green.

You can now simply click on the **Send to Mobile Device** button on the right-hand side or right-click on any compatible wallpaper and select **Send to Mobile Device**, followed by selecting your device from the list.

#### Scene Wallpapers

Dynamic and interactive wallpapers that are of the **Scene** type will first be optimized for use on mobile phones and to ensure compatibility with mobile hardware. This process may take a short while. You will also be asked which quality option you would like to use, especially for high-resolution wallpapers, we recommend trying the **Balanced** option if you notice performance issues on your mobile device.

<video width="100%" controls autoplay loop>
  <source src="/videos/mobile_transfer.mp4" type="video/mp4">
  O seu browser não suporta o tag vídeo.
</video>

::: tip
You can also transfer multiple wallpapers at the same time by clicking on multiple wallpapers while holding the CTRL key on your keyboard.
:::

## Resolução de problemas de emparelhamento com dispositivos móveis

Se não consegue emparelhar o seu dispositivo móvel ao seu computador, é muito provável que a culpa seja de uma firewall ou de uma definição da rede local. Verifique as seguintes origens possíveis do problema:

* Certifique-se de que o seu telefone e computador estão ligados à mesma rede local.
* Certifique-se de que nenhuma firewall está a impedir o Wallpaper Engine de comunicar com a sua rede local.
* Certifique-se de que o seu router de rede não está a impedir que os seus dispositivos comuniquem entre si.
    * Make sure your router is not blocking network traffic between devices.
    * Turn on **UPnP** (**"Universal Plug and Play"**) in your router settings.
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