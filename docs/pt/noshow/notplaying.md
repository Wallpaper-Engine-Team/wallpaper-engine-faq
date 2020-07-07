- - -
tags:
  - activemovie window
  - active movie
  - black
- - -


# Vídeos pretos / não são reproduzidos corretamente

Ecrãs pretos e outros problemas com wallpapers do tipo *Vídeo* são *sempre* por controladores de placas gráficas defeituosos ou codecs de vídeo defeituosos. Experiemnte seguir estas instruções pela ordem precisa. Se seguir este guia de alto a baixo, o problema será resolvido:

::: aviso Atenção Este tópico é acerca dos **wallpapers** do Wallpaper Engine estarem pretos ou não serem reproduzidos corretamente. Se o seu **inteface do Wallpaper Engine estiver preto** deve consultar esta página: [Interface para o utilizador do Wallpaper Engine está preto](/interface/broken.html#wallpaper-engine-interface-is-black). :::

## Reinistalação limpa do controlador da placa gráfica

Para a maior parte dos utilizadores, uma reinstalação limpa dos controladores da placa gráfica corrigirá a maior parte dos tipos de problemas relacionados com wallpapers de vídeo. Isto inclui ecrãs pretos e utilizadores cujos wallpapers são apresentados numa janela diferente (intitulada **"Janela ActiveMovie"**).

1. Transfira os controaldores mais recentes para a sua placa gráfica (ou todos, caso possua duas, por exemplo Nvidia e Intel):

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx)
* [AMD Radeon](https://www.amd.com/support)
* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)

2. Desinstale completamente os seus atuais c ontroladores de placas gr+aficas e apague todas as definições existentes, caso lhe seja pedido. Os controaldores Nvidia têm ua caixa de verificação que diz "Perform clean re-installation" (Efetuar reinstalação limpa) que também funciona.

Se não tiver a certeza de como o fazer, também pode usar [Display Driver Uninstaller ("DDU")](https://www.guru3d.com/files-details/display-driver-uninstaller-download.html) (Desinstalador de controlador gráfico).

3. Instale os controladores que acabou de transferir no 1.º passo.
4. Volte a reiniciar o seu PC, veja se agora já funciona.

::: dica É muito importante que faça uma reinstalação limpa - isto significa que os seus atuais controladores de placa gráfica e definições do controlador devem ser completamente apagados antes de instalar os novos controladores, caso contrário não resultará. :::

## Codec Tweak Tool

Se não funcionar depois de fazer uma reinstalação limpa dos controladore da sua placa gráfica, experiemnte reiniciar os seus codecs de vídeo:

* Transfira a Codec Tweak Tool: [Clique aqui](https://www.codecguide.com/download_other.htm)
* Certifique-se de que todas as caixas de verificação do menu "Media Foundation" **não** estão marcadas e depois aplique as definições:

![Anule a seleção de todas as opções em Media Foundation](./codectweak.gif)

* Reinicie o PC e volte a experimentar os wallpapers afetados.

## Codecs de vídeo adicionais

Se os wallpapers de vídeo afetados continuarem a não funcioanr depois das instruções anteriores, transfira o LAV e use DirectShow da forma descrita neste guia:

* [Usar LAV e DirectShow](/videos/lav.html).