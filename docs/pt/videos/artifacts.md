---
tags:
  - colors
  - bright
  - dark
  - zoom
  - zoomed-in
  - pixelated
  - border
  - gamma
  - quality
  - wrong
  - ugly
---

# Os wallpapers de vídeo têm a aparência errada

Ao contrário da maior parte dos leitores de vídeo, o Wallpaper Engine usa aceleração por hardware para vídeos para obter um desempenho otimizado. Isto significa que os controladores da sua placa gráfic a podem influenciar a aparência dos seus vídeos.

**Se os seus wallpapers de vídeo tiverem as cores erradas, estiverem demaisado luminosos ou demasiado escuros, parecerem ampliados, pixelizados ou houver uma moldura em volta do wallpaper**, pode corrigir este problema reiniciando as opções de vídeo do painel de controlo de gráficos da sua placa gráfica Nvidia, AMD ou Intel. Se tiver um computdor com vários GPUs (pro exemplo, a placa principal da Nvidia e o GPU secundário da Intel), certifique-se de que as reinia para todas.

Também pode reinstalar os controladores das placas gráficas para reiniciar todas as definições ("reinstalação limpa") para fazer isto. Isto é possível com, por exemplo, os controladores da Nvidia. Isto significa que primeiro deve reinstalar os seus controladores e depois reinstalar os controladores mais recentes depois dos seus controladores atuais serem completamente desinstalados. Alguns controladores oferecem uma opção para "Efetuar reinstalação limpa" na secção avançada, mas certifique-se de que ativa essa opção para limpar automaticamtne quaisquer resquícios dos controladores danificados. Pode obter aqui os controladores mais recentes para placas gráficas de todos os grandes fabricantes:

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx)
* [AMD Radeon](https://www.amd.com/support)
* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)

Se não tiver a certeza do que fazer: transfira os controladores mais recentges da sua placa gráfica, em seguida use DDU para desinstalar os controladores da sua placa gráfic a e apagar todas as definições:

* [Transferir o Display Driver Uninstaller](https://www.guru3d.com/files-details/display-driver-uninstaller-download.html)

Em seguida, instale os controladores que acabou de transferir. Se for efetuado corretamente, de certeza que isto corrigirá o problema.

::: dica Se as cores ainda estiverem errtadas depois de reinstalar os controladores da sua placa gráfica, é possível que tenha mais de um GPU ou que não feito uma reinstalação "limpa". Certifique-ser de que primeiro desinstala todos os controladores de placas gráficas e de que limpa todas as definições dos controladores. :::