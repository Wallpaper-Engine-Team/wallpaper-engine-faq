# Silinen varsayılan duvar kağıtlarını kurtarma

Wallpaper Engine ile önceden yüklenmiş duvar kağıtlarını sildiğinizde, *wallpaper_engine* yükleme dizininizdeki yapılandırma dosyasını silerek geri alabilirsiniz:

1. Wallpaper Engine'i tamamen kapatın (tepside üzerine sağ tıklayın-> "Çıkış Yap")

2. Go to your Wallpaper Engine directory and delete a file called "visibility.json". The file can be found here by default:

* *C:\Program Files (x86)\Steam\SteamApps\common\wallpaper_engine\projects\defaultprojects\visibility.json*

If your Steam or Wallpaper Engine are installed in a different place / directory, the directory will be slightly different, but *wallpaper_engine\projects\defaultprojects\visibility.json* sub-directory is always the same.

3. Once the file is deleted, start Wallpaper Engine again, you will have all default wallpapers back.

::: tip If you are unable to find the "visibility.json" file for some reason, you can also always just re-install Wallpaper Engine. This will also restore all default wallpapers but will require you to re-download all wallpapers which you can avoid by following the steps above. :::