# Resolução de problemas de emparelhamento com dispositivos móveis

::: tip
Depois disto, a ligação continua a não funcionar? No fundo desta página encontrará a solução de cópia de segurança manual para importar wallpapers através de USB ou outro método.
:::

Se não consegue emparelhar o seu dispositivo móvel ao seu computador, é muito provável que a culpa seja de uma firewall ou de uma definição da rede local. Verifique as seguintes origens possíveis do problema:

* **Certifique-se de que o seu telefone e computador estão ligados à mesma rede local.**
  * O seu computador não precisa de wifi, continua a ser a mesma rede, mesmo que esteja ligado através de um cabo de rede.
* **Certifique-se de que nenhuma firewall está a impedir o Wallpaper Engine de comunicar com a sua rede local.**
  * O Wallpaper Engine utiliza as portas de rede 7884 (UDP) e 7889 (TCP). Certifique-se de que nenhuma firewall as bloqueia.
* **Desative qualquer tipo de VPN ou software de proxy no sue computador e no sue dispositivo móvel que possa interferir na comunicação entre os seus dispositivos.**
* **Certifique-se de que o seu router de rede não está a impedir que os seus dispositivos comuniquem entre si.**
    * Certifique-se de que o seu router não está a bloquear o tráfego de rede entre dispositivos.
    * Ligue **UPnP** (**"Universal Plug and Play"**) nas definições do seu router.
* **Confirme que o Wallpaper Engine para Windows e o seu dispositivo móvel estão atualizados e ligados.**
* **Se o seu computador nem sequer fica visível na app para Android:** É possível que uma firewall só esteja a bloquear as transmissões utilizadas para descobrir o seu dispositivo. Pode tentar introduzir o endereço IP do seu computador diretamente. Navegue até à visão geral das ligações no seu dispositivo móvel e clique nos três pontos que estão no canto superior direito e, em seguida, selecione **Introduzir IP manualmente**. Agora pode tentar introduzir manualmente o endereço IP do seu computador. Certifique-se de que o Wallpaper Engine está em execução no seu computador e de que abriu a visão geral **Ligar novo dispositivo**, caso contrário a ligação não é possível.

### Firewall do Windows

Especialmente se o seu dispositivo móvel consegue encontrar o seu computador mas não consegue estabelecer ligação ao mesmo, a causa é quase certamente uma firewall no seu computador. Quando inicia o seu Wallpaper Engine pela primeira vez, ele irá pedir-lhe para conceder permissão à sua rede. Se fechou esta janela ou não permitiu especificamente que **ui32.exe** comunique com a sua rede, a firewall do Windows irá bloquear o Wallpaper Engine. Certifique-se de que permite que **ui32.exe** comunique, tal como é ilustrado nesta captura de ecrã:

![Permissões da firewall do Windows](/img/faq/windows_defender.png)

Se detetar algum problema, o Wallpaper Engine irá sugerir automaticamente correções à firewall. Este processo é, até certo ponto, de confiança, mas em alguns casos continua a ser necessário remover manualmente quaisquer bloqueios que o utilizador possa ter criado anteriormente, por acidente.

Se não concedeu estas permissões ao Wallpaper Engine, a firewall do Windows bloqueará o Wallpaper Engine automaticamente. Abra as definições da firewall do Windows e, em seguida, clique em **Permitir uma aplicação através da firewall**. Procure uma entrada chamada **ui32** e apague-a ou certifique-se de que ambas as marcas de verificação na coluna *Privada* e *Pública* estão ativadas, confirmando depois as suas alterações e reiniciando o Wallpaper Engine.

Deve procurar **ui32** ou **Wallpaper Engine UI** - poderá encontrar entradas chamadas simplesmente **Wallpaper Engine** mas estas não são relevantes para aqui.

**Atenção:** Esta secção é especificamente acerca apenas da firewall incorporada do Windows. se utiliza outra aplicação antivírus ou firewall, deve certificar-se de que o Wallpaper Engine não está a ser bloqueado por elas.

## Solução de recurso: importar manualmente um ficheiro de Wallpaper (.mpkg)

Caso não consiga reparar a ligação entre o seu computador e o seu dispositivo móvel, continua a poder transferir manualmente os seus wallpapers para o seu dispositivo móvel. Primeiro, selecione os wallpapers que pretende exportar no Wallpaper Engine e, em seguida, clique neles com o botão direito e selecione **Enviar para dispositivo móvel**, clicando em seguida em **Exportar .mpkg**.

<video width="100%" controls autoplay loop>
  <source src="/videos/mobile_export.mp4" type="video/mp4">
  O seu browser não suporta o tag vídeo.
</video>

Depois do Wallpaper Engine criar os ficheiros .mpkg para os seus wallpapers, pode transferi-los para o seu dispositivo móvel movendo os ficheiros para o seu dispositivo móvel através de USB ou copiando os ficheiros para um cartão SD. Como alternativa, também pode utilizar qualquer serviço de partilha de ficheiros no seu dispositivo móvel ou enviá-los para si próprio através de um serviço de mensagens ou até através de email (caso o tamanho do ficheiro não represente um problema).

Quando os ficheiros estiverem no seu dispositivo móvel, abra o Wallpaper Engine no seu dispositivo móvel e utilize a funcionalidade **Importar ficheiro** para importar os ficheiros .mpkg diretamente para a aplicação selecionando-os a partir do diretório em que os colocou.

::: danger
É importante que coloque os ficheiros .mpkg na pasta **Transferências** (Downloads) do dispositivo móvel. Android é muito restritivo em relação a permitir que aplicações acedam aos ficheiros. Se não conseguir encontrar ou abrir os ficheiros .mpkg no seu dispositivo, experimente colocá-los noutro diretório, habitualmente a pasta **Transferências** (Downloads) é a escolha de maior confiança para o fazer.
:::