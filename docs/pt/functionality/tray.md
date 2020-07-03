# Ocultar o ícone de tabuleiro do Wallpaper Engine

É possível ocultar o ícone de tabuleiro do Wallpaper Engine manualmente criando uma chave de registo que diz ao Wallpaper Engine para ocultar o ícone de tabuleiro ao lado do relógio do Windows.

::: aviso Não recomendamos que faça isto, a não ser que tenha a certeza absoluta de que o ícone de tabuleiro o está a irritar tanto que está disposto a aceitar as desvantagens de ocultar o ícone de tabuleiro. :::

Quando o ícone de tabuleiro estiver oculto, a única forma de desativar o Wallpaper Engine será encerrando-o através do Gestor de Tarefas do Windows. Só pdorá abrir o interface para o utilziador através do Steam ou dos ficheiros .exe, o que é bastante inconveniente e confuso.

Se mesmo assim pretende ocultar o ícone de tabuleiro, poderá fazê-lo desta forma:

Para criar a chave de registo, abra o meni inicial do Windows e escreva "regedit.exe", o que irá abrir o "Registry Editor".

1. Vá ao seguinte diretório do registo: *HKEY_CURRENT_USER\Software\WallpaperEngine*
2. Clique com o botão direito na pasta do registo *WallpaperEngine*, selecione *Nova* e depois *DWORD (32 Bit) Value*.
3. Dê o seguinte nome ao registo: *hideTrayIcon*
4. Certifique-se de que o nome está correto, não deve conter espaços e deve ser escrito exatamente desta forma.
5. Clique duas vezes na chave do registo e dê-lhe o valor: *1*
6. Reinicie o Wallpaper Engine, e agora a aplicação já não apresenta um ícone de tabuleiro.

Pode reverter este processo definindo *hideTrayIcon* para *0* ou apagando-o completamente, e depois reinicie o Wallpaper Engine. 