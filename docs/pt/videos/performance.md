# Vídeo congelado / intermitente / mau desempenho

Isto pode decorrer do facto do seu hardware não ser suficientemente potente para apresntar o vídeo específico corretamente. Um wallpaper de vídeo não é comparável a leitore sde vídeo normais. Ele deve ser composto com os ícones, além de potencialmente esticar-se ao longo de vários ecrãs. Por predefinição, está também a utilizar o descodificador de vídeo do seu GPU de forma a reduzir a utilização do CPU ao mínimo.

## Ganchos de gravação em segundo plano
Também pode vir de qualquer tipo de funcionalidades do controaldor para gravar aplicações como ReLive, Shadow Play/Nvidia Share ou Windows GameDVR. Experimente desativá-los e ver se isso faz alguma diferença e, em seguida, excluir-lhes o Wallpaper Engine. Certifique-se também de que nenhum outro programa de gravação/overlay se carrega no Wallpaper Engine e torna o rendering mais lento.

Pode experimentar usar a nossa ferramenta de deteção para determinar se algum programa com ganchos de gravação conhecidos está instalada mas não apanha tudo, especialmente ganchos de gravação comuns como os da Nvidia GeForce Experience:

* [Wallpaper Engine Scan Tool](/debug/scantool.html)

## Dynamic Super Resolution (DSR) / GPU Scaling
Hacks ao nível do controlador como GPU Scaling/DSR também podem dar origem a problemas. Experimente desativá-los e, se isso ajudar, desative-os especificamente para o Wallpaper Engine.

## Mau desempenho no dwm.exe em sistemas com vários GPUs / vários ecrãs
Se ativou o GPU integrado no seu PC desktop no BIOS apesar de estar instalada uma placa gráfica dedicada, poderá sofrer um mau desempenho e utilização elevada do CPU da parte do DWM.exe. Se for possível, não ative o seu GPU integrado. **É muito importante que ligue todos os seus monitores à sua placa gráfica dedicada.** Utilizar os dois GPUs ao mesmo tempo irá quebrar a aceleração por hardware do desktop window manager. Sem tecnologia Nvidia Optimus ou semelhante, o Windows será obrigado a copiar a imagem do wallpaper de um GPU para o outro - uma operação lenta. Na verdade, qualquer ação partilhada entre os GPUs irá sofrer por causa disto, sendo o mesmo que move uma janela de jogo entre dois monitores.

Este problema específico não afeta hardware criado para configurações multi-GPU como portáteis com Nvidia Optimus ou configurações Nvidia SLI / AMD Crossfire com uma hardware bridge.