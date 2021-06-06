# Emparelhar o dispositivo móvel com o Windows

Pode emparelhar os seus dispositivos móveis com o seu computador para transferir sem fios a sua coleção de wallpapers para a app complementar do wallpaper Engine no seu dispositivo móvel. Não é possível para a app Android transferir wallpapers diretamente da Steam Workshop porque só o próprio Steam pode transferir ficheiros de wallpaper.

Should you run into any problems with pairing your mobile devices, you can still import wallpapers by manually exporting the **.mpkg** that the Wallpaper Engine mobile app uses to render wallpapers.

### Preparar o Wallpaper Engine no Windows

Na app **Windows**, clique no botão **Mobile** no canto superior direito do interface para o utilizador. Abrir-se-á a visão geral do dispositivo móvel. No fundo da visão geral do dispositivo, clique no botão **Ligar novo dispositivo**. O Wallpaper Engine irá mostrar-lhe um PIN de 4 dígitos que pode usar para emparelhar um dispositivo móvel.

![PIN Mobile](/img/faq/mobile_pin.gif)

### Ligar o seu dispositivo móvel

Na app complementar para mobile do Wallpaper Engine, clique em **Adicionar** no canto inferior direito, clicando em seguida em **Emparelhar com computador**. A app do Wallpaper Engine irá procurar instâncias em execução do Wallpaper Engine para Windows na sua rede local. O seu computador Windows deverá aparecer após alguns segundos, permitindo-lhe ligar-se a ele clicando no seu nome. Se estiver a ligar pela primeira vez, ser-lhe-á pedido que introduza o PIN de 4 dígitos (veja a secção Windows acima). O PIN é uma medida de segurança adicional para garantir que utilizadores não autorizados não conseguem ligar-se ao seu computador sem o seu conhecimento.

Depois de introduzir o PIN, a barra de estado da app para mobile fica verde e mostra o computador a que está ligada. Na app para Windows, agora o botão **Mobile** também está verde para indicar que tem uma ligação mobile ativa.

![PIN Mobile](/img/faq/mobile_pair.gif)

## Resolução de problemas de emparelhamento com dispositivos móveis

Se não consegue emparelhar o seu dispositivo móvel ao seu computador, é muito provável que a culpa seja de uma firewall ou de uma definição da rede local. Verifique as seguintes origens possíveis do problema:

* Certifique-se de que o seu telefone e computador estão ligados à mesma rede local.
* Certifique-se de que nenhuma firewall está a impedir o Wallpaper Engine de comunicar com a sua rede local.
* Certifique-se de que o seu router de rede não está a impedir que os seus dispositivos comuniquem entre si.
* Disable any sort of VPN or proxy software on your computer and your mobile device which can interfere with the communication between your devices.
* Confirme que o Wallpaper Engine para Windows e o seu dispositivo móvel estão atualizados e ligados.

## Backup solution: Manually importing a Wallpaper File (.mpkg)

Should you be able unable to fix the connection between your computer and your mobile device, you can still manually transfer your wallpapers onto your mobile device. First, select the wallpapers you want to export in Wallpaper Engine, then right-click on them and select **Send to Mobile Device**, followed by clicking on **Export .mpkg**.

Once Wallpaper Engine has created the .mpkg files for your wallpapers, you can either transfer them to your mobile device by moving the files onto your mobile device via USB or by copying the files onto an SD card. Alternatively you can also use any file sharing service on your mobile device or send them to yourself via a messaging service or even via email (if the file size is not a problem).

Once the files are on your mobile device, open up Wallpaper Engine on your mobile device and use the **Import File** functionality to directly import the .mpkg files into the app by selecting them from the directory that you have placed them in.