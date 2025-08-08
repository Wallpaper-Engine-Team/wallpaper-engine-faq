# Versão de 32 bits e de 64 bits

Recomendamos o uso da versão de 64 bits do Wallpaper Engine, já que esta consegue lidar com ficheiros maiores (mais de 2 GB). Tirando isso, ambas as versões são iguais e apresentam o mesmo nível de fidelidade visual e desempenho.

Em casos raros, mudar para a versão de 32 bits pode ajudar a resolver problemas com componentes, controladores, pacotes de codecs de vídeo e outras incompatibilidades de aplicações do Windows de 64 bits. Isto pode ajudar a corrigir problemas específicos do Wallpaper Engine sem resolver o problema subjacente no sistema.

**Nota:** os wallpapers do tipo *"Web"* serão sempre executados com um executável de 32 bits *(webwallpaper32.exe)*. O mesmo aplica-se à interface de utilizador do Wallpaper Engine *(ui32.exe)*. A opção de 64 bits apenas se aplica ao selecionar wallpapers do tipo *"Cena"* ou *"Vídeo"*.

## Como configuro o Wallpaper Engine de forma a iniciar automaticamente a versão de 32 ou 64 bits quando o Windows é iniciado?

Primeiro, desative completamente o Wallpaper Engine através do ícone de tabuleiro (clique com o botão direito no ícone do Wallpaper Engine no tabuleiro do Windows e depois selecione "Sair"). Não ignore este passo, caso contrário o Steam não iniciará o Wallpaper Engine e só trará a versão já em execução para o primeiro plano.

Quando o Wallpaper Engine estiver desativado, vá ao Steam e inicie a versão de 32 bits ou a de 64 bits, consoante a versão que pretende que seja iniciada automaticamente. A seguir, vá às definições do Wallpaper Engine e, no topo do separador "Geral", ative a função de início automático. Caso já esteja ativado, desative-o completamente e volte a ativá-lo. Isto irá registar a versão atual como sendo a que será iniciada automaticamente, juntamente com o Windows.