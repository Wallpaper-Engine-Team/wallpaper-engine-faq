# Desktops com GPU integrado e dedicado têm desempenho fraco (dwm.exe)

Se ativou o GPU integrado no seu PC desktop no BIOS apesar de ter instalado um GPU dedicado, poderá sofrer um mau desempenho e utilização elevada do CPU da parte de *dwm.exe*. Se for possível, não ative o seu GPU integrado e ligue os seus monitores a um GPU dedicado. Utilizar as duas soluções gráficas independentes ao mesmo tempo irá quebrar a aceleração por hardware do gestor de janela do ambiente de trabalho, é importante que todos os monitores estgejam ligados à sua placa gráfica principal. Isto não é um erro ou problema do Wallpaper Engine, é um problema que afeta todo o software multimonitor com configurações de hardware em que nem todos os monitores estão ligados à placa gráfica principal.

Sem tecnologia Nvidia Optimus ou semelhante, o Windows será obrigado a copiar a imagem do wallpaper de um GPU para o outro - uma operação muito lenta. Na verdade, qualquer ação aprtilhada entre os GPUs irá sofrer por causa disto, sendo o mesmo que mov e uma janela de jogo entre dois monitores.

Isto não está relacionado com o hardware criado para configurações multi-GPU como os portáteis Nvidia Optimus ou SLI/Crossfire. Estes possuem uma solução física para fazer isto funcionar corretamente.

## Poor Performance using Secondary GPU on Desktop without Nvidia SLI / Nvidia Optimus / AMD CrossFire

Many users assume that switching Wallpaper Engine to a secondary GPU will increase the overall system performance. However, this is merely a common misconception and the overall system performance will actually degrade.

Wallpaper Engine creates wallpapers which are part of the desktop which means they are part of the Windows Explorer process. Therefore, Wallpaper Engine must use the same GPU as Windows Explorer. If this is not the case, then Windows has to force both GPUs to cooperate in order to render an image for your monitors. This has to be done by the processor which ultimately means the overall computer performance degrades significantly and often takes much more performance than the wallpapers themselves. Some proper multi-GPU technologies (Nvidia SLI, Nvidia Optimus, AMD CrossFire) solve this problem on a hardware-level but this is not applicable in cases where you use an Nvidia GPU and an Intel on-board graphics card, for example.

You can still change the GPU of your choice in your graphics card drivers or in your overall system settings, however we strongly advise against doing this as the outcome is not an increase in system performance.