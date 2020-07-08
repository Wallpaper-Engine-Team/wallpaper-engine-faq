---
tags:
  - autostart
  - launch
---

# Iniciar automaticamente no arranque

Pode fazer o Wallpaper Engine ser iniciado quando o seu computador é iniciado indo às definições do Wallpaper Engine e navegando até ao separador "Geral". No topo, pode ativar a opção de início automático que iniciará a aplicação discretamente em segundo plano sempre que o seu sistema arranca.

## Qual é a diferença entre as opções de arranque "alta prioridade" e "normal"?

Quando seleciona a opção de alta prioridade, o Wallpaper Engine irá registar um serviço do Windows. Isto significa que o Wallpaper Engine será iniciado antes de outros programas que tenha configurado para iniciarem automaticamente juntamente com o Windows. Não afetará o desempenho da aplicação de qualquer outra forma.

A desvantagem de utilizar esta opção de alta prioridade é que pode ser menos fiável, especialmente devido ao facto de alguns antivírus reagirem de forma exagerada e impedirem o Wallpaper Engine de iniciar neste modo porque identificam isto erradamente como comportamento malicioso.

## Ativei o arranque automático, mas não está a resultar. O que posso fazer?

Se estiver a usar a opção *alta prioridade*, experiemente mudar para início automático *normal* desativando a opção de alta propriedade. Tal como foi explicado acima, o modo de alta prioridade arranca mais depressa, mas é menos fiável por diversas razões, principalmente porque é por vezes bloqueado pelo software antivírus.

Se estiver a utilizar a opção de alta prioridade e a aplicação não foi iniciada juntamente com o Windows, experimente mudar a opção para alta prioridade e ver se o problema desaparece.

Se nem a opção de alta prioridade nem a normal resultarem para si, examine o software antivírus que instalou no seu sistema. Certas aplicações de antivírus e firewall por vezes impedem o Wallpaper Engine de iniciar automaticamente quando o seu computador arranca. É provável que o seu software antivírus tenha uma funcionalidade de "whitelist" que lhe permite ignorar certas pastas ou aplicações; certifique-se de que coloca o diretório de instalação wallpaper_engine e todos os executáveis que contém na whitelist.

Outra causa rara pode ser que se definir os ficheiros .exe do seu Wallpaper Engine para serem executados apenas como admin, então nenhum poderá ser executado automaticamente, será necessário remover a definição de admin e alterar o início automático entre desativado e depois ativá-lo novamente.

Se o início automático não funcionar, a resposta está praticamente sempre relacionado com software antivírus demasiado fervoroso. Se possuir aplicações antivírus ou de firewall instaladas, confirme todas as suas definições e níveis de segurança.

## O Wallpaper Engine é iniciado com o Windows mas (alguns) wallpapers não aparecem

 Quando inicia o seu computador, confirme se o ícone do Wallpaper Engine está visível no tabuleiro do Windows ao lado do relógio. Se o ícone estiver lá depois do seu sistema iniciar, mas alguns ou nenhum dos seus monitores apresente os respetivos wallpapers, então há um problema nos controlados da sua placa gráfica. Essencialmente, os controladores da sua placa gráfica estão sempre a atribuir novos identificadores aos seus monitores, o que faz com que o Wallpaper Engine pense que está a tentar configurar um novo monitor. Pode corrigir isto usando a opção *"Identificação do monitor"* no separador *Geral* das definições do Wallpaper Engine settings para *Esquema* ou *GDI*. Neste caso, também recomendamos que faça uma reinstalação limpa dos controladores da sua placa gráfica, pois é um indicador de um problema subjacente na sua instalação do Windows.

 ## O Wallpaper Engine atribui os wallpapers errados no arranque do sistema

 Este é o mesmo problema da secção anterior. Se possui vários monitores e os wallpapers estão a ser atribuídos ao monitor errado no arranque, experimente mudar a opção *"Identificação do monitor"* no separador *Geral* das definições do Wallpaper Engine settings para *Esquema* ou *GDI*.