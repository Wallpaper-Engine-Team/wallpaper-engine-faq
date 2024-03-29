# "Arquivo de conteúdo bloqueado" / Erro de Escrita no Disco

Se o Steam não transferir o Wallpaper Engine enquanto instala ou atualiza a aplicação, é muito provavelmente o seu antivírus a apagar ficheiros, a colocá-los em quarentena ou a bloquear diretórios inteiros no seu disco sem sequer o informar. No Steam irá receber erros 'content file locked' ou 'access denied'. Isto tem de ser resolvido no seu antivírus anulando as alterações efetuadas ao seu PC. A maior parte dos antivírus tem uma janela de quarentena a partir da qual pode restaurar ficheiros ou criar uma whitelist. Certifique-se de que a sua aplicação antivírus ignora os seguintes diretórios:

* `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine`
* `C:\Program Files (x86)\Steam\steamapps\workshop\downloads`
* `C:\Program Files (x86)\Steam\steamapps\downloading`

*Se o seu Steam ou Wallpaper Engine estiver instalado noutro diretório, deve ajustar os diretórios para o caminho real de instalação do Steam.*

Se configurou a sua aplicação antivírus para ignorar estes diretórios mas o problema persistir, por vezes é necessário desinstalar o Wallpaper Engine através do Steam e, em seguida, apagar manualmente os restos do diretório `wallpaper_engine` para remover quaisquer bloqueios do antivírus que possam continuar a impedir o Steam de transferir ficheiros. Depois de apagar a pasta `wallpaper_engine` inteira, experimente voltar a instalar a aplicação através do Steam.