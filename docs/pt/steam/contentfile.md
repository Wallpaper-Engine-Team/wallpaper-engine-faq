# "Arquivo de conteúdo bloqueado" / Erro de Escrita no Disco

Se o Steam não transferir o Wallpaper Engine enquanto instala ou atualiza a aplicação, é muito provavelmente o seu antivírus a apagar ficheiros, a colocá-los em quarentena ou a bloquear diretórios inteiros no seu disco sem sequer o informar. No Steam irá receber erros 'content file locked' ou 'access denied'. Isto tem de ser resolvido no seu antivírus anulando as alterações efetuadas ao seu PC. A maior parte dos antivírus tem uma janela de quarentena a partir da qual pode restaurar ficheiros ou criar uma whitelist. Certifique-se de que a sua aplicação antivírus ignora os seguintes diretórios:

* `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine`
* `C:\Program Files (x86)\Steam\steamapps\workshop\downloads`
* `C:\Program Files (x86)\Steam\steamapps\downloading`

*Se o seu Steam ou Wallpaper Engine estiver instalado noutro diretório, deve ajustar os diretórios para o caminho real de instalação do Steam.*

If you have configured your antivirus app to ignore these directories but the issue persists, it is sometimes necessary to uninstall Wallpaper Engine through Steam, followed by manually deleting the remains of the `wallpaper_engine` directory to clear any antivirus locks which may continue to block Steam from downloading files. After deleting the entire `wallpaper_engine` folder, try reinstalling the app through Steam again.