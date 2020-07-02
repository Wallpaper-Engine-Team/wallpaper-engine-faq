---
tags:
  - início automático
  - iniciar
---

# Iniciar automáticamente no arranque

Pode fazer o Wallpaper Engine ser iniciado quando o seu computador é iniciado indo às definições do Wallpaper Engine e navegando até ao separador "Geral". No topo, pode ativar a opção de início automático que iniciará a aplicação discretamente em segundo plano sempre que o seu sistema arranca.

## Qual é a diferença entre as opções de arranque "alta prioridade" e "normal"?

Quando seleciona a opção de alta prioridade, o Wallpaper Engine irá registar um serviço do Windows. Isto significa que o Wallpaper Engine será iniciado antes de outros programas que tenha configurado para iniciarem automaticamente juntamente com o Windows. Não afetará o desempenho da aplicação de qualquer outra forma.

A desvantagem de utilizar esta opção de alta prioridade é que pode ser menos fiável, especialmente devido ao facto de alguns antivírus reagirem de forma exagerada e impedirem o Wallpaper Engine de iniciar neste modo porque identificam isto erradamente como comportamento malicioso.

## Ativei o arranque automático, mas não está a resultar. O que posso fazer?

Se estiver a usar a opção *alta prioridade*, experiemnte mudar para início automático *normal* desativando a opção de alta propridade. Tal como foi explicado acima, o modo de alta prioridade arranca mais depressa, mas é menos fiável por diversas razões, principalmente porque é por vezes bloqueado pelo software antivírus.

Se estiver a utilizar a opção de alta prioridade e a aplicação não foi iniciada juntamente com o Windows, experimente mudar a opção para alta prioridade e ver se o problema desaparece.

Se nem a opção de alta prioridade nem a normal resultarem para si, examine o software antivírus que instalou no seu sistema. Certas aplicações de antivírus e firewall por veze impedem o Wallpaper Engine de inciiar automaticamente quando o seu computador arranca. É provável que o seu software antivírus tenha uma funcionalidade de "whitelist" que lhe permite ignorar certas pastas ou aplicações; certifique-se de que coloca o diretório de instalação wallpaper_engine e todos os executáveis que contém na whitelist.

Outra cusa rara pode ser que se definir os ficheiros .exe do seu Wallpaper Engine para serem executados apenas como admin, então nenhum poderá ser executado automaticamente, será necessário remover a definição de admin e alterar o início automático entre desativado e depois ativá-lo novamente.

Se o início automático não funcionar, a resposta está praticamente sempre relaciuonado com software antivírus demasiado fervoroso. Se possuir aplicações antivírus ou de firewall instaladas, confirme todas as suas definições e níveis de segurança.

## O Wallpaper Engine é iniciado com o Windows mas (alguns) wallpapers não aparecem

 Quando inicia o seu computador, confirme se o ícone do Wallpaper Engine está visível no tabuleiro do Windows ao lado do relógio. If the icon is there after your system starts but either some or none of your monitors have their respective wallpapers shown, there is a problem with your graphics card drivers. Essentially, your graphics card drivers keep assigning your monitors new identifiers which leads Wallpaper Engine to believe that you are trying to configure a new monitor. You can fix this by changing the *"Monitor identification"* option in the *General* tab of the Wallpaper Engine settings to *Layout* or *GDI*. We also recommend that you do a clean re-installation of your graphics card drivers in this case, as it's an indicator for an underlying problem with your Windows installation.

 ## Wallpaper Engine assigns wrong wallpapers at system start-up

 This is the same problem as in the previous section, if you have multiple monitors and the wallpapers are being assigned to the wrong monitor at start-up, try changing the *Monitor identification* option in the *General* tab of the Wallpaper Engine settings to *Layout* or *GDI*.