---
tags:
  - mdmp
---

# Wallpaper Engine bloqueia

O Wallpaper Engine é software amadurecido, utilizado por milhões e bem testado - é relativamente raro que realmente haja erros na aplicação que provoquem bloqueios. Se a mensagem de bloqueio que está a ver mecionar quaisquer ficheiros **.dll**, consulte a lista que se segue e tente encontrar uma descrição mais precisa do **.dll** específico que causou o bloqueio do seu sistema:

[[toc]]

::: tip
Quase todos os relatórios de bloqueios que recebemos de utilizadores acabam por ser causados por controladores gráficos danificados, aplicações antivírus ou outro software defeituoso que torna o computador instável.
:::

## Tentativa de correção rápida de bloqueio do Wallpaper Engine

Se não estiver certo do que está a bloquear o Wallpaper Engine, faça uma reinstalação limpa dos controladores da sua placa gráfica. Isto significa que primeiro deve reinstalar os seus controladores e depois reinstalar os controladores mais recentes depois dos seus controladores atuais serem completamente desinstalados. Alguns controladores oferecem uma opção para "Efetuar reinstalação limpa" na secção avançada, mas certifique-se de que ativa essa opção para limpar automaticamente quaisquer resquícios dos controladores danificados. Pode obter aqui os controladores mais recentes para placas gráficas de todos os grandes fabricantes:

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx)
* [AMD Radeon](https://www.amd.com/support)
* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)

Caso possua qualquer aplicação antivírus instalada (exceto Windows Defender), certifique-se de que configura uma exceção para o Wallpaper Engine nas definições do seu antivírus. Por vezes é necessário reinstalar o Wallpaper Engine depois disto se o seu antivírus tiver permanentemente danificado ou bloqueado alguns ficheiros. Certifique-se de que a sua aplicação antvírus ignora o diretório *wallpaper_engine* e especialmente todos os ficheiros .exe:

* *wallpaper_engine/wallpaper32.exe*
* *wallpaper_engine/wallpaper64.exe*
* *wallpaper_engine/launcher.exe*
* *wallpaper_engine/bin/webwallpaper32.exe*
* *wallpaper_engine/bin/ui32.exe*

Experimenta também verificar os ficheiros do Wallpaper Engine através do Steam para garantir que não estão danificados:

* [Assistência do Steam: Verificar a integridade dos ficheiros da aplicação](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

Em casos mais graves, poderá ser necessário desinstalar o Wallpaper Engine e apagar o diretório *wallpaper_engine* manualmente e depois reinstalar a aplicação depois da aplicação antivírus ser configurada para ser menos severa.

## Bloqueio depois de Hibernação / Suspensão

Se o Wallpaper Engine bloquear depois do Windows hibernar, isso significa que o Windows não está a restaurar os controladores da sua placa gráfica e o Wallpaper Engine em conjunto. A hibernação no Windows simplesmente não é um processo fiável. Pode ativar a opção **Iniciar em segurança depois de hibernar** no Wallpaper Engine para mitigar este problema. Esta opção tentará reiniciar o Wallpaper Engine automaticamente em vez de esperar que o Windows funcione corretamente depois da hibernação.

## O Wallpaper Engine bloqueou / Código de erro "0xC0000005"

Esta mensagem de erro é quase sempre causada por **aplicações antivírus** ou **controladores danificados**. Se estiver a utilizar uma aplicação antivírus, esta é muito provável a causa deste bloqueio, mesmo que não tenha sido reportada qualquer atividade pela sua aplicação antivírus. Certifique-se de que a configura de forma a que ignore o diretório de instalação *wallpaper_engine* e todos os executáveis importantes do Wallpaper Engine. Para obter informações mais detalhadas, consulte a secção *Tentativa de correção rápida de bloqueio do Wallpaper Engine* mais acima.

Se não tiver uma aplicação antivírus instalada, reinstale todos os controladores importantes e tente passar para a versão 64 Bits do Wallpaper Engine (ou para a versão 32 Bits se já utilizou a versão 64 Bits).

Nalguns casos, isto também pode ser causado pela interferência de outras aplicações no Wallpaper Engine de uma forma invulgar. Isto respeita principalmente a aplicações que injetam código no Wallpaper Engine ou alteram significativamente a sua instalação do Windows.

!["0xC0000005" Mensagem de bloqueio do Wallpaper Engine](/img/faq/0xC0000005.png)

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

Este bloqueio acontece habitualmente devido a um problema no próprio Windows. Experimente reinstalar a versão mais recente dos controladores da sua placa de som, pois isto poderá resolver o problema. Também pode corrigir estes bloqueios mudando a opção *Outra aplicação a reproduzir áudio* no separador *Desempenho* das definições do Wallpaper Engine para *Continuar execução*.

### atiumdag.dll / atiumd64.dll

* [AMD Radeon](https://www.amd.com/support)

::: tip
Atenção! Certifique-se de que seleciona a caixa de verificação "Efetuar reinstalação limpa" durante a configuração ou primeiro desinstale os seus controladores atuais. Se os seus controladores atuais estiverem danificados, é importante primeiro removê-los completamente.
:::

### nvwgf2umx.dll

Os controladores Nvidia do seu sistema estão a bloquear. Vá ao website da Nvidia, transfira os controladores mais recentes a partir do website e instale-os:

* [Nvidia GeForce](https://www.nvidia.com/Download/index.aspx)

::: tip
Atenção! Certifique-se de que seleciona a caixa de verificação "Efetuar reinstalação limpa" durante a configuração ou primeiro desinstale os seus controladores atuais. Se os seus controladores atuais estiverem danificados, é importante primeiro removê-los completamente.
:::

### igdumd64.dll / igd10umd64.dll / igdumdx32.dll / igd10umd32.dll

Os controladores gráficos Intel do seu sistema estão a bloquear. Vá ao website da Intel, transfira os controladores mais recentes a partir do website e instale-os:

* [Intel Graphics](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)

### RZChromaSDK.dll / RzChromaSDK64.dll

Estes tipos de bloqueios são causados pelo Razer Chroma, que faz parte do **Razer Synapse**. Normalmente, isto é causado por uma instalação defeituosa do Razer Synapse. Na maior parte dos casos, uma reinstalação limpa do Razer Synapse corrige estes tipos de bloqueios:

**Reinstalação limpa de todo o software Razer**

::: aviso Certifique-se de que o Wallpaper Engine está desligado enquanto reinstala o Razer Synapse.
:::

1. Desative completamente o Wallpaper Engine, caso esteja a ser executado (clique com o botão direito no ícone do tabuleiro do Windows e depois selecione **Sair**)
2. Desinstale todo o software Razer o seu computador através do Windows
3. Volte a transferir a versão mais recente da suite de software Razer a partir do respetivo website e instale-a:

* [Transfira o Razer Synapse 3](https://www.razer.com/synapse-3)

4. Depois, reinicie o seu computador sem reiniciar previamente o Wallpaper Engine.

**A reinstalação não resolve o problema**

Se o problema não for resolvido pela reinstalação do Razer Synapse, poderá haver um problema subjacente com o próprio Razer Synapse, no passado isto foi causado por atualizações danificadas do Razer Synapse. Experimente desativar o LED Plugin (*"iCUE & Chroma SDK"*) no separador **Plugins** das definições do Wallpaper Engine até este problema ser corrigido numa futura atualização do Razer Synapse.

Se os bloqueios persistirem até depois de uma reinstalação limpa do Razer Synapse, contacte a assistência do Razer diretamente e informe-os acerca dos bloqueios. Se eles forem incapazes de o ajudar, contacte a nossa assistência técnica - podemos examinar estes bloqueios e encaminhar as nossas conclusões para a equipa de desenvolvimento do Razer Synapse, apesar da Razer dever ser o contacto principal para este bloqueio específico.

### MMDEvAPI.dll

Este tipo de bloqueio ocorre devido a software de áudio danificado que está instalado no seu sistema. Isto é habitualmente provocado por software de "melhoramento de som", especialmente os que estão pré-instalados em diversos portáteis. Este tipo de software provoca bloqueios regulares porque interagem com o Windows através de rotinas com erros, procure "Sonic Studio" ou "Nahimic" e atualize-os. Se não conseguir encontrar atualizações para estes programas, também pode desinstalá-los, pois não são necessários para que o áudio do seu computador funcione corretamente.

### fraps32.dll

O bloqueio foi provocado pela Fraps, a aplicação de controlo de FPS e gravação do ecrã. A Fraps não é atualizada desde 2013 e é uma aplicação altamente desatualizada. Utilize uma alternativa à Fraps, pois isto é um erro da Fraps que poderá nunca ser corrigido, pois o software foi abandonado.

## Erro de bloqueio 0xc000007b

Isto significa que um módulo do Windows foi danificado por algo no seu sistema - normalmente, neste caso o próprio DirectX está danificado. Experimente apagar estes ficheiros manualmente:

* C:\Windows\SysWOW64\d3dx9_43.dll
* C:\Windows\System32\d3dx9_43.dll

Agora volte a instalá-los com o programa de instalação do DirectX 9: *C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\_CommonRedist\DirectX\Jun2010\dxsetup.exe* (A localização exata varia consoante o diretório de instalação wallpaper_engine).

Se continua a obter este erro, poderá ser outro módulo, semelhante ao DirectX, que foi danificado por algo. Isto normalmente indica problemas subjacentes maiores na sua instalação do Windows, que deve corrigir antes de poder executar o Wallpaper Engine.