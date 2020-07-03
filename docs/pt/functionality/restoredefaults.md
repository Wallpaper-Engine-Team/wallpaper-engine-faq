# Restaurar wallpapers predefinidos que foram apagados

Se apagou wallpapers que foram pré-instalados com o Wallpaper Engine, pode recuperá-los apagando um ficheiro de configuração no seu diretório de instalação *wallpaper_engine*:

1. Desative completamente o Wallpaper Engine (clique com o botão direito no tabuleiro -> "Sair")

2. Vá ao seu diretório do Wallpaper Engine we apague um ficheiro chamado "visibility.json". Por predefinição, o ficheiro está aqui:

* *C:\Program Files (x86)\Steam\SteamApps\common\wallpaper_engine\projects\defaultprojects\visibility.json*

If your Steam or Wallpaper Engine are installed in a different place / directory, the directory will be slightly different, but *wallpaper_engine\projects\defaultprojects\visibility.json* sub-directory is always the same.

3. Once the file is deleted, start Wallpaper Engine again, you will have all default wallpapers back.

::: tip If you are unable to find the "visibility.json" file for some reason, you can also always just re-install Wallpaper Engine. This will also restore all default wallpapers but will require you to re-download all wallpapers which you can avoid by following the steps above. :::