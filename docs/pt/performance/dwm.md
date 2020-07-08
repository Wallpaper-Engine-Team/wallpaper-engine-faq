# Desktops com GPU integrado e dedicado têm desempenho fraco (dwm.exe)

Se ativou o GPU integrado no seu PC desktop no BIOS apesar de ter instalado um GPU dedicado, poderá sofrer um mau desempenho e utilização elevada do CPU da parte de *dwm.exe*. Se for possível, não ative o seu GPU integrado e ligue os seus monitores a um GPU dedicado. Utilizar as duas soluções gráficas independentes ao mesmo tempo irá quebrar a aceleração por hardware do gestor de janela do ambiente de trabalho, é importante que todos os monitores estejam ligados à sua placa gráfica principal. Isto não é um erro ou problema do Wallpaper Engine, é um problema que afeta todo o software multimonitor com configurações de hardware em que nem todos os monitores estão ligados à placa gráfica principal.

Sem tecnologia Nvidia Optimus ou semelhante, o Windows será obrigado a copiar a imagem do wallpaper de um GPU para o outro - uma operação muito lenta. Na verdade, qualquer ação partilhada entre os GPUs irá sofrer por causa disto, sendo o mesmo que move uma janela de jogo entre dois monitores.

Isto não está relacionado com o hardware criado para configurações multi-GPU como os portáteis Nvidia Optimus ou SLI/Crossfire. Estes possuem uma solução física para fazer isto funcionar corretamente.

## Mau desempenho utilizando GPU secundário em Desktop sem Nvidia SLI / Nvidia Optimus / AMD CrossFire

Muitos utilizadores assumem que passar o Wallpaper Engine para um GPU secundário irá aumentar o desempenho geral do sistema. Bo entanto, isto é apenas um engano bastante comum e na verdade o desempenho geral do sistema irá degradar-se.

O Wallpaper Engine cria wallpapers que fazem parte do ambiente de trabalho, o que significa que fazem parte do processo do Windows Explorer. Desta forma, o Wallpaper Engine deve usar o mesmo GPU que o Windows Explorer. Se isto não for o caso, o Windows tem de forçar os dois GPUs a cooperar para apresentarem uma imagem nos seus monitores. Isto tem de ser feito pelo processador, o que em última análise significa que o desempenho geral do computador se degrada significativamente e é frequente que consuma muito mais desempenho do que os próprios wallpapers. Algumas tecnologias multi-GPU dedicadas (Nvidia SLI, Nvidia Optimus, AMD CrossFire) resolvem este problema ao nível do hardware, mas isto não se aplica em casos em que utiliza, por exemplo, um GPU Nvidia e uma placa gráfica on-board da Intel.

Continua a poder mudar o GPU à sua escolha nos controladores da sua placa gráfica ou nas suas definições gerais do sistema, no entanto desaconselhamos vivamente que o faça, pois o resultado não é um aumento do desempenho do sistema.