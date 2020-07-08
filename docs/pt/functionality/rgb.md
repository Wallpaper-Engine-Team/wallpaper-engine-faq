---
tags:
  - hardware
---

# Suporte para hardware RGB (iCUE & Chroma)

O Wallpaper Engine suporta [**Razer Chroma**](https://www.razer.com/chroma) e [**Corsair iCUE**](https://www.corsair.com/icue), incluindo sistemas que podem ser integrados em qualquer dos ecossistemas.

## Como ativo /desativo hardware RGB

Na secção "Plugins" das definições do Wallpaper Engine, poderá encontrar o **plugin iCUE & Chroma SDK**. Pode permitir ou não que este plugin RGB geral seja carregado marcando a caixa de verificação à esquerda. Também pode clicar no símbolo da roda dentada ao seu lado para configurar ainda mais parte individuais do plugin.

Mais ainda, o suporte para RGB pode ser desativado em cada wallpaper. No topo da lista de propriedades de cada wallpaper encontrará a opção **Ativar efeitos dos LED** se o plugin estiver ativado permitindo-lhe controlar se pretende que um wallpaper individual controle as suas luzes RGB.

## As cores do hardware RGB parecem ser demasiado fortes

Por predefinição, reforçamos um bocadinho as cores RGB. Na maior parte dos wallpapers, isto tende a ter melhor aspecto, o que é subjetivo, mas se não gostar pode desligá-lo desativando a opção **Reforçar cores dos LED** nas definições do plugin RGB.

## O meu hardware RGB não funciona

O Wallpaper Engine não é capaz de comunicar diretamente com o seu hardware RGB, todas as informações de cores são enviadas primeiro para os controladores RGB. Se um ou mais elementos de hardware não funcionarem, o problema deverá residir no lado software do seu fabricante de hardware. Algum hardware muito antigo poderá já não ser suportado diretamente por estes fabricantes de hardware e não funcionar. Tenha em mente que isto não é nada que possamos resolver do nosso lado.

Se a secção *Plugin* das definições do Wallpaper Engine não estiver visível para si, é provável que lhe falte ou tenha uma instalação danificada do *Visual C++ Redistributable for Visual Studio 2015* que é obrigatório para que estas funcionalidades funcionem. Pode transferir este pacote do website da Microsoft e instalá-lo. Isto deverá resolver o problema depois de reiniciar o sistema:

* [Visual C++ Redistributable for Visual Studio 2015](https://www.microsoft.com/download/details.aspx?id=48145)

### Corsair

Algum hardware, tal como a **memória do sistema (RAM) do Corsair tem controlos de software desativados por predefinição**, o que significa que os seus módulos do sistema não se iluminarão de acordo com o Wallpaper Engine a não ser que o permita nas definições do software iCUE. Certifique-se de que a opção "Enable full software control" (permitir controlo total pelo software) na secção de memória das definições do seu dispositivo iCUE está selecionada:

!["Enable full software control" no iCUE](./icue.png)

Confirme esta opção para quaisquer outros elementos de hardware que não estejam a funcionar corretamente.

Tenha em conta que o iCUE é usado em *modo exclusivo*, o que significa que o Wallpaper Engine terá prioridade sobre outro software compatível com iCUE, tal como jogos. Se quiser que os seus jogos animem o seu teclado, vá ao separador **Desempenho** das definições do Wallpaper Engine e defina a opção **Outra aplicação em ecrã completo** para **Parar (lib. memória)** para parar todos os wallpapers enquanto está dentro do jogo. Como alternativa, desative o plugin RGB ou desative a opção RGB em wallpapers individuais.

Para obter assistência para hardware Corsair iCUE, deve contactar a Corsair diretamente:

[help.corsair.com](https://help.corsair.com/)

Caso depare com quaisquer problemas com a assistência do Corsair, continua a poder contactar-nos e faremos todos os possíveis para o ajudar.

### Razer
Só suportamos Razer Synapse 3 ou mais recente. Se está a usar o Razer Synapse 1 ou Razer Synapse 2, certifique-se de que os desinstala completamente e atualiza para a versão mais recente do Razer Synapse. Anteriormente, alguns utilizadores tiveram problemas com restos do velho Razer Synapse que ficaram no seu sistema. Se teve o Razer Synapse 2 ou mais antigo instalado e tem problemas com a sua iluminação RGB ou até sofra bloqueios com o plugin RGB ativado, poderá ser necessário encontrar quaisquer restos de versões antigas do Razer Synapse no seu sistema e apagá-las.

Se o seu hardware Razer dor relativamente antigo e não suportar o Razer Synapse 3 ou mais recente, infelizmente a sua iluminação RGB não é compatível com o Wallpaper Engine.

Para obter assistência para hardware Razer, deve contactar a Razer diretamente:

[support.razer.com](https://support.razer.com/)

Caso depare com quaisquer problemas com a assistência da Razer, continua a poder contactar-nos e faremos todos os possíveis para o ajudar.