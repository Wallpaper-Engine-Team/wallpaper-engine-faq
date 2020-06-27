# 恢复已删除的默认壁纸

如果删除了 Wallpaper Engine 预先安装的壁纸，您可以通过删除 *wallpaper_engine* 安装目录中的配置文件将其恢复：

1. 完全关闭 Wallpaper Engine（右键单击托盘中的 Wallpaper Engine ->“退出”）

2. Go to your Wallpaper Engine directory and delete a file called "visibility.json". The file can be found here by default:

* *C:\Program Files (x86)\Steam\SteamApps\common\wallpaper_engine\projects\defaultprojects\visibility.json*

If your Steam or Wallpaper Engine are installed in a different place / directory, the directory will be slightly different, but *wallpaper_engine\projects\defaultprojects\visibility.json* sub-directory is always the same.

3. Once the file is deleted, start Wallpaper Engine again, you will have all default wallpapers back.

::: tip If you are unable to find the "visibility.json" file for some reason, you can also always just re-install Wallpaper Engine. This will also restore all default wallpapers but will require you to re-download all wallpapers which you can avoid by following the steps above. :::