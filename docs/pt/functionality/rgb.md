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

O Wallpaper Engine não é capaz de comunicar diretamente com o seu hardware RGB, todas as informações de cores são enviadas primeiro para os controladores RGB. Se um ou mais elementos de hardware não funcioanrem, o problema deverá residir no lado software do seu fabricante de hardware. Algum hardware muito antigo poderá já não ser suportado diretamente por estes fabricantes de hardware e não funcionar. Tenha em mente que isto não é nada que possamos resolver do nosso lado.

Se a secção *Plugin* das definições do Wallpaper Engine não estiver visível para si, é provável que lhe falte ou tenha uma instalação danificada do *Visual C++ Redistributable for Visual Studio 2015* que é obrigatório para que estas funcionaldiades funcionem. You can download this package from the Microsoft website and install it, this should fix the issue after a system restart:

* [Visual C++ Redistributable for Visual Studio 2015](https://www.microsoft.com/download/details.aspx?id=48145)

### Corsair

Some hardware such as **Corsair system memory (RAM) have software controls disabled by default**, meaning that your memory modules will not light up according to Wallpaper Engine unless you allow this in the iCUE software settings. Make sure the "Enable full software control" option in your iCUE device settings in the memory section is selected:

![Enable full software control in iCUE](./icue.png)

Double-check this option for any other hardware parts which are not working properly.

Note that iCUE is used in *exclusive mode*, this means that Wallpaper Engine will take priority over other iCUE-compatible software such as games. If you want your games to animate your keyboard, go to the **Performance** tab of the Wallpaper Engine settings and set the **Other applications fullscreen** option to **Stop (free memory)** to stop wallpapers while in-game. Alternatively, disable either the RGB plugin or disable the RGB option on individual wallpapers.

For support with Corsair iCUE hardware, please contact Corsair directly:

[help.corsair.com](https://help.corsair.com/)

Should you run into any issues with Corsair's support, you can still reach out to us and we will see if we can help you.

### Razer
We only support Razer Synapse 3 or newer. If you are using Razer Synapse 1 or Razer Synapse 2, make sure to fully uninstall them and upgrade to the latest version of Razer Synapse. In the past, some users had issues with remnants of old Razer Synapse having been left on their system. If you had Razer Synapse 2 or older installed and have issues with your RGB lighting or even experience crashes with the RGB plugin being enabled, you may need to find any leftovers of old Razer Synapse versions on your system and delete it.

If your Razer hardware is relatively old and does not support Razer Synapse 3 or newer, unfortunately its RGB lighting is not compatible with Wallpaper Engine.

For support with Razer hardware, please contact Razer directly:

[support.razer.com](https://support.razer.com/)

Should you run into any issues with Razer's support, you can still reach out to us and we will see if we can help you.