# Cópia de segurança do Steam Workshop

Quando os wallpapers são, por qualquer razão, apagados do Steam, o Steam também os apaga do seu PC. O Wallpaper Engine não pode impedir que isto aconteça, mas se isto for uma preocupação para si, pode fazer uma cópia de segurança dos seus wallpapers.

De forma semelhante, há muitas notícias de que o Steam decidirá aleatoriamente voltar a transferir todos os ficheiros do Workshop, o que pode ser irritante se tiver muitos Gigabytes de dados. Criar uma cópia de segurança e cortar todas as ligações ao Steam pode evitar isso, se acontecer com demasiada frequência.

# Criar uma cópia de segurança

O seguinte guia assume que o seu Steam e Wallpaper Engine estejam instalados em `C:\Program Files (x86)\Steam\`. Se instalou o seu Steam / Wallpaper Engine noutro local, deve consultar esses locais.

1. Localize a pasta em que o Steam guarda os seus wallpapers, por predefinição é `C:\Program Files (x86)\Steam\steamapps\workshop\content\431960` ::: dica **431960** é a Steam ID do Wallpaper Engine. O Steam usa este diretório para todas as transferências do Wallpaper Engine. :::
2. Copie a pasta 431960 para o caminho de instalação do Wallpaper Engine aqui: `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\projects\431960`
3. **Mude o nome** da pasta `431960` para `backup` para que o caminho completo seja este: `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\projects\backup`
4. Agora, o diretório `backup` inclui todos os wallpapers que transferiu anteriormente, cada um no seu subdiretório (os números representam a Steam Workshop ID do wallpaper)
5. Reinicie o browser de wallpaper e agora deverá ver as cópias de segurança dos seus wallpapers. Agra pode anular a subscrição dos repetidos no Steam e usar apenas a sua cópia pessoal desses wallpapers

::: aviso **Não** apague manualmente a pasta do Steam Workshop `C:\Program Files (x86)\Steam\steamapps\workshop\content\431960`. Isto fará com que o seu Steam fique confuso e volte a transferir todos os wallpapers. Simplesmente anule a subscrição dos seus wallpapers e deixe o Steam apagar os ficheiros repetidos. :::