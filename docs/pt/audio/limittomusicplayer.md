# Limitar visualizadores de áudio a leitores de música

Devido à forma como o áudio funciona no Windows, não é possível que o Wallpaper Engine limite os visulizadores de áudio ao leitor de música de sua escolha. No entanto, pode usar software de terceiros para criar um dispositivo de áudio *falso* para obter este resultado. Este guia irá explicar uma forma de definir um tal dispositivo de áudio falso e como configurar o Windows 10 e o Wallpaper Engine para que esta configuração funcione corretamente.

Tenha em conta que não oferecemos suporte para dispositivos de áudio falsos e não garantimos que isto funcione - esta é uma configuração muito avançada que ultrapassa largamente o que o Wallpaper Engine oferece. Oferecemos este guia unicamente como ajuda para utilizadores que queiram ir mais longe na personalização do seu sistema.

::: aviso Atenção Este guia só funciona em versões atualizadas do Windows 10. Versões mais antigas do Windows poderão não dispost de algumas funcionalidades que tornam impossível seguir este guia.
:::

### Instalar um dispositivo de áudio falso

Recomendamos que utilize o **VB-CABLE Virtual Audio Device** gratuito que pode transferir a partir do seguinte website:

* [Transferência do Virtual Audio Device](https://www.vb-audio.com/Cable/)

Transfira e extraia o ficheiro de arquivo e, em seguida, instale o dispositivo de áudio de 32 bits ou 64 bits, consoante a sua versão do Windows 10 utilizando **VBCABLE_Setup.exe** ou **VBCABLE_Setup_x64.exe**. Certifique-se deuqe inicia o ficheiro de configuração com direitos de administrador, c licando com o botão direito e selecionando *Run as administrator* (Executar como administrador). Siga as instruções do programa de instalação e certifique-se de que o dispositivo de áudio foi instalado com sucesso.

### Configurar o Windows e o Wallpaper Engine

Se precisar de ajuda com qualquer dos passos infra, consulte o vídeo infra que mostra todos os passos a dar num Windows 10 (interface em inglês) do princípio ao fim.

1. Comece a reproduzir música utilizando o software que pretende que mais tarde seja usado para o Wallpaper Engine
2. Right-click on the audio icon next to the clock in the Windows tray and select **Open Sound settings**.
3. Scroll down to the bottom of the page that opens and click on **App volume and device preferences**.
4. A list of all applications playing audio will be shown. Find your music player and in the **Output** column, change the option from **Default** to **CABLE Input (VB-Audio Virtual Cable)**. Your audio player should immediately turn quiet, this is to be expected.
5. Go back to the main page of the Windows sound settings and in the upper right corner, select **Sound Control Panel**.
6. A small window will appear, navigate to the **Recording** tab, then right-click on the **CABLE Output** audio device and select **Properties**.
7. Another window will appear, click on the **Listen** tab and select **Listen to this device**. Click on **Apply** and **OK** and the music from your music player should return.
8. Windows is now properly configured, open up the **Wallpaper Engine settings** and in the **General** tab, change the **Audio recording device** to **CABLE Input (VB-Audio Virtual Cable)**. Wallpaper Engine should now start reacting to the music from your music player but will ignore any other application on your computer.

*Video showcasing all the steps described above:*

<video width="100%" controls>
  <source src="/videos/audioinputdevice.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
