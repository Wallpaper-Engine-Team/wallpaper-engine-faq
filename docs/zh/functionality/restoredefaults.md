# 恢复已删除的默认壁纸

如果删除了 Wallpaper Engine 预先安装的壁纸，您可以通过删除 *wallpaper_engine* 安装目录中的配置文件将其恢复：

1. 完全关闭 Wallpaper Engine（右键单击托盘中的 Wallpaper Engine ->“退出”）

2. 转到 Wallpaper Engine 目录，然后删除一个名为“visibility.json”的文件。 默认情况下，该文件可在以下路径找到：

* *C:\Program Files (x86)\Steam\SteamApps\common\wallpaper_engine\projects\defaultprojects\visibility.json*

如果您的 Steam 或 Wallpaper Engine 安装在不同的位置/目录中，则目录将稍有不同，但子目录 *wallpaper_engine\projects\defaultprojects\visibility.json* 始终不变。

3. Once the file is deleted, start Wallpaper Engine again, you will have all default wallpapers back.

::: tip If you are unable to find the "visibility.json" file for some reason, you can also always just re-install Wallpaper Engine. This will also restore all default wallpapers but will require you to re-download all wallpapers which you can avoid by following the steps above. :::