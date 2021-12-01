# Resolução de problemas de emparelhamento com dispositivos móveis

::: dica Depois disto, a ligação continua a não funcionar? No fundo desta página encontará a solução de cópia de segurança manual para importar wallpapers através de USB ou outro método.
:::

Se não consegue emparelhar o seu dispositivo móvel ao seu computador, é muito provável que a culpa seja de uma firewall ou de uma definição da rede local. Verifique as seguintes origens possíveis do problema:

* **Certifique-se de que o seu telefone e computador estão ligados à mesma rede local.**
  * O seu computador não precisa de wifi, continua a ser a mesma rede, mesmo que esteja ligado através de um cabo de rede.
* **Certifique-se de que nenhuma firewall está a impedir o Wallpaper Engine de comunicar com a sua rede local.**
  * O Wallpaper Engine envia um multi-casts nas portas de rede 7884 (UDP) e 7889 (TCP), certifique-se de que nenhuma firewall bloqueia isto.
* **Desative qualquer tipo de VPN ou software de proxy no sue computador e no sue dispositivo móvel que possa interferir na comunicação entre os seus dispositivos.**
* **Certifique-se de que o seu router de rede não está a impedir que os seus dispositivos comuniquem entre si.**
    * Certifique-se de que o seu router não está a bloquear o tráfego de rede entre dispositivos.
    * Ligue **UPnP** (**"Universal Plug and Play"**) nas definições do seu router.
* **Confirme que o Wallpaper Engine para Windows e o seu dispositivo móvel estão atualizados e ligados.**

### Firewall do Windows

Especialmente se o seu dispositivo móvel consegue encontrar o seu computador mas não consegue estabelecer ligação ao mesmo, a causa é quase certamente uma firewall no seu computador. Quando inicia o seu Wallpaper Engine pela primeira vez, ele irá pedir-lhe para conceder permissão à sua rede. Se fechou esta janela ou não permitiru espcificamente que **ui32.exe** comunique com a sua rede, a firewall do Windows irá bloquear o Wallpaper Engine. Certifique-se de que permite que **ui32.exe** comunique, tal como é ilustrado nesta captura de ecrã:

![Permissões da firewall do Windows](/img/faq/windows_defender.png)

Se detetar algum problema, o Wallpaper Engine irá sugerir automaticamente correções à firewall. This process is somewhat reliable but in some cases you may still need to manually clear any blocks you may have created in the past by accident.

If you have not granted Wallpaper Engine these permissions, the Windows firewall will automatically block Wallpaper Engine. Open the Windows firewall settings, then click on **Allow an app through firewall**. Search for an entry called **ui32** and either delete it or make sure both check marks in the *Private* and *Public* column are enabled, then confirm your changes and restart Wallpaper Engine.

Make sure to look for **ui32** or **Wallpaper Engine UI** - you may find entries called just **Wallpaper Engine** but these are irrelevant here.

**Please note:** This section is specifically only about the built-in Windows firewall, if you use any other antivirus app or firewall, you need to make sure Wallpaper Engine is not being blocked by them.

## Solução de recurso: importar manualmente um ficheiro de Wallpaper (.mpkg)

Caso não consiga reparar a ligação entre o seu computador e o seu dispositivo móvel, continua a poder transferir manualmente os seus wallpapers para o seu dispositivo móvel. Primeiro, selecione os wallpapers que pretende exportar no Wallpaper Engine e, em seguida, clique neles com o botão direito e selecione **Enviar para dispositivo móvel**, clicando em seguida em **Exportar .mpkg**.

<video width="100%" controls autoplay loop>
  <source src="/videos/mobile_export.mp4" type="video/mp4">
  O seu browser não suporta o tag vídeo.
</video>

Depois do Wallpaper Engine criar os ficheiros .mpkg para os seus wallpapers, pode transferi-los para o seu dispositivo móvel movendo os ficheiros para o seu dispositivo móvel através de USB ou copiando os ficheiros para um cartão SD. Como alternativa, também pode utilizar qualquer serviço de partilha de ficheiros no seu dispositivo móvel ou enviá-los para si próprio através de um serviço de mensagens ou até através de email (caso o tamanho do ficheiro não represente um problema).

Quando os ficheiros estiverem no seu dispositivo móvel, abra o Wallpaper Engine no seu dispositivo móvel e utilize a funcionalidade **Importar ficheiro** para importar os ficheiros .mpkg diretamente para a aplicação selecionando-os a partir do diretório em que os colocou.

::: danger
It is import that you place the .mpkg files in the **Downloads** folder on the mobile device. Android is very restrictive when it comes to letting apps access files. If you cannot find or open the .mpkg files on your device, try placing them in another directory, usually the **Downloads** folder is the most reliable choice for this.
:::