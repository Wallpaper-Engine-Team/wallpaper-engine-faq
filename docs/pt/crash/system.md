---
tags:
  - hardware
  - bsod
  - ecrã azul
---

# Bloqueio do sistema / Congelamento do sistema
Só por si, o Wallpaper Engine não pode bloquear o seu sistema e não afeta outros programas. Se ocorrerem bloqueios do sistema, congelamentos do sistema, acrãs azuis ou outros programas bloqueare enquanto o Wallpaper Engine estiver a ser executado, uma destas coisas será provavelmente o motivo:

* O hardware necessário para o Wallpaper Engine está danificado.
* Um controlador para algum hardware necessário para o Wallpaper Engine tem erros ou está danificado.
* Está instalado software intrusivo que interfere nos controladores ou no Windows enquanto o Wallpaper Engine está a ser executado.

Wallpaper Engine não instala quaisquer controladores, não substitui ficheiros do sistema e não executa seja o que for perigoso ou questionável que possa levar a um bloqueio do sistema ou ao bloqueio de outro programa.

Quaisquer erros no Wallpaper Engine só podem levar a um bloqueio do próprio Wallpaper Engine na pior situação, mas nenhum erro do Wallpaper Engine pode bloquear o seu sistema inteiro ou outros programas. Isto é impossível, a Microsoft concebeu o Windows desta forma e o Wallpaper Engine adere a isto.

## Encontrar a causa dos bloqueios do sistema
O Wallpaper Engine peciso disto do seu PC: aceleração 3D, aceleração de vídeo, áudio. Pode tentar isolar o que está errado no PC utilizando tipos diferentes de wallpaper. Por exemplo, se só tiver problemas com wallpapers do tipo 'vídeo', o problema pode ter origem no hardware de descodificação de vídeo da sua placa gráfica. Ele não será utilizado pelo Windows sozinho e a maior parte dos jogos não o utiliza, pelo que não terá problemas com ele em jogos.

Se obtiver um ecrã azul, faça uma pesquisa na web pelo código do erro. Haverá muitos resultados na web que poderão ajudar, pois é um problema global do sistema.

Qualquer tipo de programa de overlay e gravação pode provocar problemas, isso inclui a Feforce Experience, experimente remover isso tudo.

Experimente a ferramenta de varrimento, que irá verificar se alguma aplicação bem conhecida e de conflito confirmado está a ser executada: [Clique aqui](/debug/scantool.html).