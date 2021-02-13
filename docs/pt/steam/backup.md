# Cópia de segurança do Steam Workshop

Quando os wallpapers são, por qualquer razão, apagados do Steam, o Steam também os apaga do seu PC. O Wallpaper Engine não pode impedir que isto aconteça, mas se isto for uma preocupação para si, pode fazer uma cópia de segurança dos seus wallpapers.

De forma semelhante, há muitas notícias de que o Steam decidirá aleatoriamente voltar a transferir todos os ficheiros do Workshop, o que pode ser irritante se tiver muitos Gigabytes de dados. Criar uma cópia de segurança e cortar todas as ligações ao Steam pode evitar isso, se acontecer com demasiada frequência.

# Criar uma cópia de segurança

O seguinte guia assume que o seu Steam e Wallpaper Engine estejam instalados em `C:\Program Files (x86)\Steam\`. Se instalou o seu Steam / Wallpaper Engine noutro local, deve consultar esses locais.

::: tip
**431960** is the Steam ID of Wallpaper Engine, Steam uses this directory for all Wallpaper Engine downloads.
:::

1. Locate the folder in which Steam stores your wallpapers, by default it is in `C:\Program Files (x86)\Steam\steamapps\workshop\content\431960`
2. Copy the folder 431960 to Wallpaper Engine's installation path here: `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\projects\431960`
3. **Mude o nome** da pasta `431960` para `backup` para que o caminho completo seja este: `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\projects\backup`
4. Agora, o diretório `backup` inclui todos os wallpapers que transferiu anteriormente, cada um no seu subdiretório (os números representam a Steam Workshop ID do wallpaper)
5. Reinicie o browser de wallpaper e agora deverá ver as cópias de segurança dos seus wallpapers. Agra pode anular a subscrição dos repetidos no Steam e usar apenas a sua cópia pessoal desses wallpapers

::: warning
Do **not** manually delete the Steam Workshop folder `C:\Program Files (x86)\Steam\steamapps\workshop\content\431960`. This will cause your Steam to be confused and re-download all wallpapers. Simply unsubscribe from your wallpapers and let Steam delete the duplicate files itself.
:::