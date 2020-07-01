---
tags:
  - mdmp
---

# Wallpaper Engine bloqueia

O Wallpaper Engine é software amadurecido, utilizado por milhões e bem testado - é relativamente raro que realmente haja erros na aplicação que provoquem bloqueios. Se a mensagem de bloqueio que está a ver mecionar quaisquer ficheiros **.dll**, consulte a lista que se segue e tente encotnrar uma descrição mais precisa do **.dll** específico que causou o bloqueio do seu sistema:

[[toc]]

::: dica Quase todos os relatórios de bloqueios que recebemos de utilizadores acabam por ser causados por controladores gráficos danificados, aplicações antivírus ou outro software defeituoso que torna o computador instável. :::

## Tentativa de correção rápida de bloqueio do Wallpaper Engine

Se não estiver certo do que está a bloquear o Wallpaper Engine, faça uma reinstalação limpa dos controladores da sua placa gráfica. Isto significa que primeiro deve reinatalar os seus controladores e depois reinstalar os controladores mais recentes depois dos seus controladores atuais serem completamente desinstalados. Alguns controladores oferecem uma opção para "Efetuar reinstalação limpa" na secção avançada, mas certifique-se de que ativa essa opção para limpar automaticamtne quaisquer resquícios dos controladores danificados. Pode obter aqui os controladores mais recentes para placas gráficas de todos os grandes fabricantes:

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx)
* [AMD Radeon](https://www.amd.com/support)
* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)

Caso possua qualquer aplicação antivírus instalada (exceto Windows Defender), certifique-se de que configura uma exceção para o Wallpaper Engine nas definições do seu antivírus. Por vezes é necessário reinstalar o Wallpaper Engine depois disto se o seu antivírus tiver permanentemente danificado ou bloqueado alguns ficheiros.

Experimenta também verificar os ficheiros do Wallpaper Engine atravém do Steam para garantir que não estão danificados:

* [Assistência do Steam: Verificar a integridade dos ficheiros da aplicação](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

## O Wallpaper Engine provavelmente bloqueou devido a outra aplicação

### KERNELBASE.dll / ntdll.dll

Isto é um bloqueio no core do próprio kernel do Windows, normalmente provocado por aplicações antivírus ou controladores gráficos danificados. Para obter mais informações, consulte a secção de correção rápida acima. Também pode ser provocado por componentes do sistema danificados. Utilize a ferramenta Microsoft System File Checker para reparar ficheiros do Windows que possam estar danificados:

* [Microsoft System File Checker Tool](https://support.microsoft.com/en-us/help/929833/use-the-system-file-checker-tool-to-repair-missing-or-corrupted-system)

### d3d11.dll

Isto é um bloqueio no DirectX, normalmente provocado por aplicações antivírus ou controladores gráficos danificados. Para obter mais informações, consulte a secção de correção rápida acima. Também pode ser provocado por componentes do sistema danificados. Utilize a ferramenta Microsoft System File Checker para reparar ficheiros do Windows que possam estar danificados:

* [Microsoft System File Checker Tool](https://support.microsoft.com/en-us/help/929833/use-the-system-file-checker-tool-to-repair-missing-or-corrupted-system)

### mfplat.dll

Isto é um bloqueio na Windows Media Foundation, pode ser provocado por controladores de placa gráfica danificados, mas normalmente é provocado por codecs danificados ou em falta no seu sistema. Siga as correções do nosso guia de correções em vídeo para corrigir estes tipos de bloqueios:

[Clique aqui](/noshow/notplaying.html)

### AudioSes.dll

Este bloqueio acontece habitualmente devido a um problema no próprio Windows. Experiemente reinstalar a versão mais recente dos controladores da sua placa de som, pois isto poderá resolver o problema. Também pode corrigir estes bloqueios mudando a opção *Outra aplicação a reproduzir áudio* no separador *Desempenho* das definições do Wallpaper Engine para *Continuar execução*.

### atiumdag.dll / atiumd64.dll

* [AMD Radeon](https://www.amd.com/support)

::: dica Atenção! Certifique-se de que seleciona a caixa de verificação "Efetuar reinstalação limpa" durante a configuração ou primeiro desinstale os seus controladores atuais. Se os seus controladores atuais estiverem danificados, é importante primeiro removê-los completamente. :::

### nvwgf2umx.dll

Os controladores Nvidia do seu sistema estão a bloquear. Vá ao website da Nvidia, transfira os controladores mais recentes a partir do website e instale-os:

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx)

::: dica Atenção! Certifique-se de que seleciona a caixa de verificação "Efetuar reinstalação limpa" durante a configuração ou primeiro desinstale os seus controladores atuais. Se os seus controladores atuais estiverem danificados, é importante primeiro removê-los completamente. :::

### igdumd64.dll / igd10umd64.dll / igdumdx32.dll / igd10umd32.dll

Os controladores gráficos Intel do seu sistema estão a bloquear. Vá ao website da Intel, transfira os controladores mais recentes a partir do website e instale-os:

* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)


### MMDEvAPI.dll

Este tipo de bloqueio ocorre devido a aosiware de áudio danificado que está instalado no seu sistema. Isto é habitualmente provocado por software de "melhoramento de som", especialmente os que estão pré-instalados em diversos portáteis. Este tipo de software provoca bloqueios regulares porque interagem com o Windows através de rotinas com erros, procure "Sonic Studio" ou "Nahimic" e atualize-os. Se não conseguir encontrar atualizações para estes programas, também pode desinstalá-los, pois não são necessários para que o áudio do seu computador funcione corretamente.

### fraps32.dll

O bloqueio foi provocado pela Fraps, a aplicação de controlode FPS e gravação do ecrã. A Fraps não é atualizada desde 2013 e é uma aplicação altamente desatualizada. Utilize uma alternativa à Fraps, pois isto é um erro da Fraps que poderá nunca ser corrigido, pois o software foi abandonado.

## Erro de bloqueio 0xc000007b

Isto significa que um módulo do Windows foi danificado por algo no seu sistema - normalmente, neste caso o próprio DirectX está danificado. Experimente apagar estes ficheiros manualmente:

* C:\Windows\SysWOW64\d3dx9_43.dll
* C:\Windows\System32\d3dx9_43.dll

Agora volte a instalá-los com o programa de instalação do DirectX 9: *C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\_CommonRedist\DirectX\Jun2010\dxsetup.exe* (A localização exata varia consoante o diretório de instalação wallpaper_engine).

Se continua a obter este erro, poderá ser outro módulo, semelhante ao DirectX, que foi danificado por algo. Isto normalmente indica problemas subjacentes maiores na sua instalação do Windows, que deve corrigir antes de poder executar o Wallpaper Engine.

## Bloqueio depois de Hibernação / Suspensão

Se o Wallpaper Engine bloquear depois do Windows hibernar, isso significa que o Windows não está a restaurar os controladores da sua placa gráfica e o Wallpaper Engine em conjunto. A hibernação no Windows simplesmnete não é um processo fiável. You can enable the option **Safe start after hibernation** in Wallpaper Engine to mitigate this issue. This option will attempt to automatically restart Wallpaper Engine instead of expecting Windows to correctly work after hibernation.