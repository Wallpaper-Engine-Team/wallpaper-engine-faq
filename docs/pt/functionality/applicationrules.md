---
tags:
  - aplicação
  - regras
  - exceção
  - whitelist
  - blacklist
  - lags
  - laggy
  - jogo
  - desempenho
  - fps
  - bloqueio
  - som
  - áudio
  - intermitente
---

# Corrir erros com aplicações ou jogos específicos

Se está a ter problemas com aplicações ou jogos específicos, pode configurar o Wallpaper Engine para agir de uma certa forma quando deteta que a aplicação com a qual está a ter problemas é iniciada ou, por exemplo, a reproduzir áudio.

## Definir uma regra para a plicação

No separador *Desempenho* das definições do Wallpaper Engine, clicar no botão *Editar* ao lado da etiqueta *Regras para aplicações* fará aparecer uma visão geral de todas as regras personalizadas que criou. Ao clicar em *Criar regra nova* pode definir um comportamento especial do Wallpaper Engine para uma aplicação específica.

![Visão geral das regras para aplicações](./applicationrule.gif)

Ser-lhe-á apresentada uma listade todos os ficheiros .exe em execução no seu sistema. Selecione um .exe da lista ou escreva o nome exato do .exe com o qual está a ter dificuldades. Com as outras duas opções pode configurar a condição ou o comportamento. Leia mais abaixo para obter mais informações e exemplos concretos.

::: dica Para o Wallpaper Engine, só o nome exato do .exe é importante, o local não é importante, pelo que pode escrever qualquer .exe no campo *Nome da aplicação*. Certifique-se apenas de que o nome do .exe é precisamente igual, incluindo letras em maiúsculas e minúsculas. :::

### Corrigir problemas de desempenho com aplicações ou jogos

Selecione o .exe do programa para o qual pretende ter uma regra especial de entre a lista ou escreva-o no campo **Nome da aplicação**. Em seguida, defina **Condição** para **Em execução** e **Reprodução do wallpaper** para **Parar (lib. memória)**. Isto significa que o Wallpaper Engine irá remover completamente todos os wallpapers da memória quando a aplicação ou o jogo foram iniciados, o que resolverá quaisquer problemas de compatibilidade.

### Corrigir som intermitente com ferramentas fer gravação em segundo plano

Selecione o .exe do programa para o qual pretende ter uma regra especial de entre a lista ou escreva-o no campo **Nome da aplicação**. Em seguida, defina **Condição** para **Está a reproduzir áudio** e **Reprodução do wallpaper** para **Continuar execução**. Isto significa que o Wallpaper Engine não será silenciado quando a aplicação em questão está a reproduzir ou gravar áudio. O Windows não diferencia entre reproduzir ou gravar áudio, sendo por isso que o Wallpaper Engine irá silenciar e reativar som de forma consistemte se estiver a gravá-lo. Muitas aplicações de streaming de jogos podem fazer isto por acidente e sem o seu conhecimento.

### Outros comportamentos

Examine todas as possíveis condições e opções de reprodução do wallpeper para mais tipos de regras para aplicações. Também pode configurar o Wallpaper Engine para silenciar ou pausar quando inicia uma determinada aplicação.

::: dica Também pode mudar estas definições para todas as aplicações no separador **Desempenho** das definições do Wallpaper Engine. Se está a ter problemas de desempenho em vários jogos, poderá fazer sentido mudar apenas a opção **Outra aplicação em ecrã completo** para **Parar (lib. memória)** para que o Wallpaper Engine se desative quando inicia qualquer jogo ou aplicação em ecrã completo. :::
