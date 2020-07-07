---
tags:
  - downtime
  - server
  - downloads
  - progress
  - workshop
  - connection
---

# Problemas na transferência de wallpapers pelo Steam

Tenha em conta que **todas as transferências são efetuadas pelo Steam**. O Wallpaper Engine mostra apenas o estado da transferência do Steam. Todos os problemas de transferência estão relacionados com o seu Steam e não estão diretamente relacionados com o Wallpaper Engine. Este guia contém uma coleção dos problemas mais comuns das transferências, em muitos casos a causa inicial dos problemas são aplicações antivírus demasiado zelosas ou portas de rede bloqueadas.

Se está a ter dificuldades com transferências do Steam, certifique-se de que nenhuma aplicação antivírus está a bloquear o seu Steam e de que todas as portas necessárias estão abertas na sua firewall - incluindo quaisquer firewalls nos seus routers de rede.

::: dica Pode verificar facilmente se o seu router de rede está a bloquear as transferências do Steam mudando para um hotspot móvel no seu smartphone e tentando transferir um wallpaper através dele. :::

## Transferência do wallpaper parou a 0% ou 100% (ou qualquer outra percentagem)
O Steam não acabou de transferir e de verificar os ficheiros. Se as transferências ficarem paradas durante algum tempo, experiemente estas coisas se as suas transferências do Steam não funcionarem mesmo depois de ter esperado um pouco:

* Limpe a cache de transferências do Steam nas opções do Steam:
  * [Limpar a cache de trasnferências do Steam](https://support.steampowered.com/kb_article.php?ref=3134-TIAL-4638)
* Depois, verifique os ficheiros do Wallpaper Engine no Steam:
  * [Verificar os ficheiros do Wallpaper Engine](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)
* Se todas as transferências ainda estiverem paradas: **Desligue o Steam** e depois **apague o conteúdo** deste diretório:
  * `C:\Program Files (x86)\Steam\steamapps\workshop\downloads`
    * Se possui uma aplicação antivírus instalada, certifique-se de que exclui especificamente este diretório
    * **Nota:** `C:\Program Files (x86)\Steam` é o caminho predefinido do Steam. Se intyalou noutro local, procure nesse local.
* Reinicie o Steam. Não inicie quaisquer jogos. Procure o progresso no separador de transferências do Steam e retome quaisquer transferências que tenham ficado em pausa.

::: detalhes Clique aqui para ver mais soluções possíveis se as instruções acima não resolverem os seus problemas de transferências
* Certifique-se de que nenhum antivírus ou firewall está a bloquear o Steam. Exclua o diretório inteiro do Steam nas definições da sua aplicação antivírus.
* Anule a subscrição de walpapers que não transfiram e volte a subscrevê-los depois de reiniciar o Steam.
* Escolha outro servidor de conteúdo na definições do Steam. Pode encontrar a opção no separador "Downloads" das definições do Steam.
* Certifique-se de que não limita as transferências do Steam nas **definições do Steam** com base na hora, largura de banda, estar dentro da aplicação.
* Abra o separador 'Downloads' do Steam (Library -> Downloads). Procure transferências em pausa. Se vir alguma, clique em 'Resume'.
* Clique com o botão direoto no Wallpaper Engine no Steam e, em seguida, em Properties, depois selecione **Allow Background Downloads**.
* Certifique-se de que não tem atualizações pendentes no Steam, pois elas podem colocar em pausa ou desativar a transferência de wallpapers.
* Tente novamente depois de esperar pelo menos um dia, para o caso de haver problemas nos servidores do Steam.
* **Como último recurso**, tente reinstalar o Wallpaper Engine para remover quaisquer ficheiros do Steam que estejam danificados (isto voltará a transferir todos os wallpapers!). :::

::: dica Os servidores do Steam ficam offline todas as semanas para manutenção a uma hora fixa:

* Costa Oeste dos Estados Unidos: **Terça-feira às 4 pm (UTC - 7)**
* Mesma hora na Europa Central: **Quarta-feira à 1 am (UTC + 1)**
* Mesma hora na China: **Quarta-feira às 8 am (UTC + 8)**

Se está a ler isto durante sensivelmente esta altura da semana, pode ser que os servidores estejam temporariamente offline. Espere uma ou duas horas e tente novamente. :::

## Steam: erro "Missing Downloaded Files"

O Steam não é capaz de transferir mais ficheiros. isto pode dever-se a uma aplicação antivírus bloquear o Steam ou algo absolutamnte aleatório. Normalmente resolve-se desta forma:

* Desligue o Steam.
* Apague o conteúdo deste diretório: `C:\Program Files (x86)\Steam\steamapps\workshop\downloads`
* Apague o conteúdo deste diretório: `C:\Program Files (x86)\Steam\steamapps\downloading\431960`
  * **Note:** `C:\Program Files (x86)\Steam` é o caminho predefinido do Steam. Se instalou noutro local, deve procurar nesse local.
* Inicie o Steam e verifique os ficheiros do Wallpaper Engine:
  * [Verificar os ficheiros do Wallpaper Engine](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335)

If you have an antivirus-app installed: Configure an exception for this directory to prevent it from blocking Steam's Workshop downloads: `C:\Program Files (x86)\Steam\steamapps\workshop\downloads`

#### Related article: [Steam re-downloading all wallpapers](/steam/redownload)