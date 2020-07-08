---
tags:
  - download
  - re-download
  - deleted
  - deletes
---

# Steam volta a transferir wallpapers

A cache de transferências do Steam foi quebrada e agora o Steam volta a transferir todos os ficheiros (por razão nenhuma ou o Steam bloqueia em vez de fechar corretamente). Isto não acontece devido ao Wallpaper Engine pelo que não pode ser corrigido no Wallpaper Engine. Todas as aplicações da Workshop no Steam podem sofrer deste mesmo erro do Steam. Se tem este problema frequentemente, há soluções indiretas:

## Corrigir o Steam automaticamente
Criámos um corretor automático para o Steam que pode usar para tentar fazer o Steam impedir que este problema continue a ocorrer (esperamos nós)! Siga estas instruções:
* Desative o Steam
* Vá ao diretório de instalação `wallpaper_engine`
  * Local predefinido: `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine`
* Execute `wallpaper_engine\bin\steamredownloadfixer32.exe`
  * Se a ferramenta se der alguma mensagem de erro, envie-nos um email e investigaremos se é possível melhorá-la
* Reinicie o Steam e verifique os ficheiros do Wallpaper Engine:
  * [Verificar os ficheiros do Wallpaper Engine](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

Infelizmente, terá de repetir isto sempre que a cache de transferências do Steam se avariar. Tenha em conta que não fomos nós que criámos o Steam e não podemos corrigir o Steam.

## Reinstalar o Steam

A correção a longo-prazo mais fiável para a maior parte dos utilizadores afetados regularmente por este erro do Steam parece ser reinstalar o Steam, pois alguns ficheiros do Steam podem simplesmente estar danificados no seu sistema. Experimente reinstalar o Steam completamente:

1. Desinstale o Wallpaper Engine através do Steam.
2. Desinstale o próprio Steam, seguindo sempre o guia oficial:
  * [Desinstalar o Steam](https://support.steampowered.com/kb_article.php?ref=9609-OBMP-2526)
  * Verifique especificamente a secção Manually Removing Steam no artigo do Steam Support acima e faça uma cópia de segurança do seu diretório *steamapps* tal como é descrito no guia, para garantir que não tem de voltar a transferir todos os seus jogos.

## Use cópias de segurança locais como solução indireta

Se o problema lhe continuar a acontecer, também pode fazer cópias de segurança locais e depois anular a subscrição de todos os wallpapers. O Steam não voltará a transferir wallpapers que não estejam subscritos, pelo que a solução indireta é simplesmente contar com as cópias de segurança locais. Aqui poderá encontrar o nosso guia para criar cópias de segurança:

* [Usar cópias de segurança dos wallpapers](/steam/backup)

Em seguida, simplesmente anule a subscrição de todos os wallpapers. Certifique-se de que não apaga quaisquer ficheiros manualmente. deve ser o próprio Steam a apagar os ficheiros de wallpapers ou tentará voltara transferir os wallpapers, só para ser o Steam a apagá-los em seguida.