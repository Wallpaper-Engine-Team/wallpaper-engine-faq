# Visualizadores de áudio não funcionam / nenhum som detetado

Há várias razões pelas quais os visualizadores de áudio podem não funcionar. Enumeramos aqui todas as razões possíveis, leia atentamente o guia completo para garantir que não lhe escapou nenhuma das razões possíveis pela qual eles não funcionam.

## 1. Configuração do dispositivo de áudio
Vá às definições do Wallpaper Engine e navegue até ao separador "Geral". Perto do centro poderá encontrar a secção "Multimédia", na qual poderá selecionar um dispositivo de entrada de áudio. Certifique-se de que selecionou o dispositivo correto. Se não tem a certeza de qual será o dispositivo correto, experimente todos os dispositivos possíveis enquanto ouve música atá os visualizadores de áudio começarem a funcionar.

Se o dispositivo de áudio c orreto for selecionado mas continuar a nãoi ouvir qualquer som ou se os seus visualizadores de áudio não funcionarem, certifique-se de que não silenciou o Wallpaper Engine no misturador de áudio do Windows ou que definiu um volume muito baixo para ele. O Windows não diferencia entre os volumes para gravação de áudio e reprodução de áudio. Isto significa que se tiver definido um volume baixo no Windows, a gravação de áudio também não funcionará:

![Suba o volume e anule o silêncio do Wallpeper Engine no misturador de áudio do Windows](./audiomixer.png)

Se o áudio for detetado mas o volume estiver demasiado baixo, tenha em conta que o volume da aplicação (do seu reprodutor de áudio, browser da web, etc.) afeta a forma como o áudio é detetado. Pode reforçar o a deteção de som n o separador "Geral" das definições do Wallpaper Engine se não quiser aumentar o volume da aplicação (o valor predefinido para o volume de gavação é 50).

## 2. Propblemas específicos de hardware

### Corsair Void Pro / Bluetooth / Auscultadores USB

Os auscultadores USB / sem fios são atreiros a problemas com o controlador de som. Para muitos dispositivos, mudar a taxa de amostragem de áudio nas definições do dispositivo Windows para 44100 Hz resolve o problema de forma permanente:

Clique com o botão direito no ícone de áudio na área do tabuleiro, no canto inferior direito do Windows, selecione "Abrir definições de som". Clique em "Propriedades do dispositivo" na secção "Saída" da janela que aparece. Em seguida, clique em "Propriedades adicionais do dispositivo" e, em seguida, navegue para o separador "Avançadas". Pode mudar a taxa de amostragem no menu que lhe é apresentado. A localização exata varia consoante a versão do Windows. Se não encontrar estra opção, procure na web guias para mudar a taxa de amostragem dos dispositivos de som para a sua versão do Windows.

![Defina a taxa de amostragem para "24 bits, 44100 Hz"](./samplingrate.png)

### Auscultadores Razer com THX

Mude a entrada de áudio no Wallpaper Engine para o dispositivo 'Colunas (Razer XYZ)'. Esta opção está nas definições gerais e quaisquer auscultadores Razer com efeitos THX deverá funcionar com esta solução.

## 3. Conflitos entre aplicações

Se acredita que as suas definições de áudio estão corretas mas os wallpapers com capacidade de resposta a áudionão reagem ao áudio, é muito provável que possuam hardware ou software de som que desativa a função de gravação de loopback no PC inteiro. Ela deve ser configurada corretamente ou removida:

* Nahimic
* Sonic Suite
* Alienware Audio
* Diversas outras aplicações, especialmente as pré-instaladas em portáteis

Caso não tenha a certeza de ter quaisquer destas aplicações instaladas, também pode usar a ferramenta de deteção do Wallpaper Engine e esta irá informá-lo sobre quaisquer programas que se saiba provocarem estes problemas:

* [Wallpaper Engine Scan Tool](/debug/scantool.html)

