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

## Problemas com hardware RGB depois de hibernar

Em casos raros, a hibernação podem fazer com que o hardware RGB pare de funcionar em combinação com o Wallpaper Engine. Se algum ou todo o seu hardware RGB parar de funcionar corretamente depois do seu sistema despertar da hibernação, experimente ativar a opção **Iniciar em segurança depois de hibernar** no separador **Gerais** das definições do Wallpaper Engine. Isto resolve estes tipos de problemas para a maior parte dos utilizadores afetados.

Além disto, também pode utilizar a opção **Atraso no carregamento dos plugins** no fundo do separador **Plugins** das definições do Wallpaper Engine para atrasar a tentativa de ligação que o Wallpaper Engine faz ao seu hardware RGB. Pode experimentar um valor de **30 segundos** e testar se isso lhe resolve o problema.

### Corsair

Starting with iCUE 4, you need to manually enable software control in the iCUE settings first, otherwise Wallpaper Engine cannot connect to iCUE. If you have any issues with RGB lighting in combination with Corsair iCUE, make sure to check the iCUE settings first.

* Open iCUE.
* Click the Settings icon in the upper right corner.
* Click **Software and Games** on the left menu of the settings window.
* Make sure that the *software integrations* options are enabled. Check the **Devices** tab to make sure all your hardware devices are also enabled for this type of RGB lighting.

If you still have issues with your Corsair lighting setup, try a full reinstallation of your Corsair iCUE software, then restart your computer and reinstall. Many issues can be resolved by reinstalling the Corsair software suite, followed by manually enabling the software integration options.

Note that iCUE is used in *exclusive mode*, this means that Wallpaper Engine will take priority over other iCUE-compatible software such as games. If you want your games to animate your keyboard, go to the **Performance** tab of the Wallpaper Engine settings and set the **Other applications fullscreen** option to **Stop (free memory)** to stop wallpapers while in-game. Alternatively, disable either the RGB plugin or disable the RGB option on individual wallpapers.

For support with Corsair iCUE hardware, please contact Corsair directly:

[help.corsair.com](https://help.corsair.com/)

Should you run into any issues with Corsair's support, you can still reach out to us and we will see if we can help you.

### Razer

Most problems related to Razer RGB hardware can be fixed by doing a clean reinstallation of the Razer software suite while Wallpaper Engine is turned off:

1. Desative completamente o Wallpaper Engine. Isto é muito importante, não salte este passo.
2. Desinstale todo o software Razer o seu computador através do Windows.
3. Volte a transferir a versão mais recente do Razer Synapse 3 e instale-a. **Importante:** certifique-se de que também reinstala o módulo **Chroma Connect** no próprio Razer Synapse.
4. Reinicie o seu computador, não inicie o Wallpaper Engine antes de reiniciar o Windows.

See if this resolves your issues with your RGB hardware. For additional support with Razer hardware, please contact Razer directly:

[support.razer.com](https://support.razer.com/)

Should you run into any issues with Razer's support, you can still reach out to us and we will see if we can help you.

#### Razer Synapse 2 e mais antigo

We only support Razer Synapse 3 or newer. If you are using Razer Synapse 1 or Razer Synapse 2, make sure to fully uninstall them and upgrade to the latest version of Razer Synapse. In the past, some users had issues with remnants of old Razer Synapse having been left on their system. If you had Razer Synapse 2 or older installed and have issues with your RGB lighting or even experience crashes with the RGB plugin being enabled, you may need to find any leftovers of old Razer Synapse versions on your system and delete it.

If your Razer hardware is relatively old and does not support Razer Synapse 3 or newer, unfortunately its RGB lighting is not compatible with Wallpaper Engine.