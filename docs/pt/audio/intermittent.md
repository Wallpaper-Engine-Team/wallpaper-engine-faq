# Som / áudio liga e desliga intermitentemente

O Windows não diferencia entre gravar e reproduzir áudio, pelo que notifica o Wallpaper Engine que outro programa está a produzir som, apesar de estar, na verdade, a gravar o áudio do seu computador.

Abra o separador "Desempenho" das definições do Wallpaper Engine. Se tiver a opção *"Outra aplicação está a reproduzir áudio"* definida para *"Silenciar"* e reparar que o som do Wallpaper Engine continua a ligar e desligar, é provável que tenha um programa de gravação a gravar o seu ecrã e som em segundo plano.

Para resolver isto, faça qualquer destas três coisas:

* Desligue o programa de gravação no seu ambiente de trabalho ou reconfigure-o para não gravar o Wallpaper Engine por engano.
    * Para muitos utilizadores, este problema é provocado pelo **Nvidia Share / Nvidia GameStream / Nvidia ShadowPlay** que pode ser desativado nas definições do **Nvidia GeForce Experience**. Para utilizadores com placas gráficas AMD, **AMD ReLive** também pode provocar estes problemas e também faz parte dos controladores de placas gráficas AMD. Experimente verificar isto primeiro se não tiver a certeza do que poderá estar a gravar o seu ambiente de trabalho.
    * Se não sabe que aplicação estará a provocar isto, verifique o seu misturador de áudio do Windows e veja que aplicações tão neste momento a aceder ao seu áudio, pois isso poderá ajudar. Como alternativa, encerre o máximo possível de programas e reduza-os a certos ficheiros .exe da lista de processos do gestor de tarefas do Windows.
* Se a gravação de áudio em segundo plano for intencional e não conseguir desligá-la, pode criar uma *regra da aplicação* no separador "Desempenho" das definições do Wallpaper Engine. Defina a "Condição" para "Está a reproduzir áudio" e a "Reprodução do wallpaper" para "Continuar execução":

![Pode encontrar as Regras para Aplicações no separador "Desempenho" das definições do Wallpaper Engine](./applicationrule.png)

Substitua alguns .exe por ficheiros .exe que encontre no gestor de tarefas até ter reduzido as possibilidades ao .exe responsável.

* Por fim, também pode mudar a opção 'Outra aplicação a reproduzir áudio' para 'continuar execução'. No entanto, isto significa que o Wallpaper Engine não irá silenciar a reprodução de áudio automaticamente a partir dos wallpapers quando ouve música ou vê vídeos que não sejam em ecrã completo.
