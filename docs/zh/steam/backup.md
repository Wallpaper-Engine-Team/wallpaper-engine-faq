# 备份 Steam 创意工坊

如果您出于任何原因从 Steam 中删除了壁纸，Steam 也会从您的 PC 上删除这些壁纸。 Wallpaper Engine 无法阻止这种情况，但如果您对此感到担忧，您可以备份壁纸。

与此类似，许多人报告称，Steam 会随机决定重新下载所有创意工坊文件，如果您的数据量非常庞大，这可能很令人烦恼。 如果这种情况发生的频率过高，创建备份并断开与 Steam 的所有联系可以避免其发生。

# 创建备份

以下指南预计您将 Steam 和 Wallpaper Engine 安装在“C:\Program Files (x86)\Steam\”中，如果您将其安装在其他目录，请务必查看这些位置。

::: tip
**431960** is the Steam ID of Wallpaper Engine, Steam uses this directory for all Wallpaper Engine downloads.
:::

1. Locate the folder in which Steam stores your wallpapers, by default it is in `C:\Program Files (x86)\Steam\steamapps\workshop\content\431960`
2. Copy the folder 431960 to Wallpaper Engine's installation path here: `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\projects\431960`
3. 将文件夹 `431960` **重命名**为 `backup`，使其完整路径如下所示：`C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\projects\backup`
4. 现在，`backup` 目录包含您之前下载的所有壁纸，每张壁纸都位于其各自的子目录中（数字代表壁纸的 Steam 创意工坊 ID）
5. 重新启动壁纸浏览器，您现在应可看到备份的壁纸。 您现在可以取消订阅重复的 Steam 壁纸，而仅使用您个人的壁纸副本

::: warning
Do **not** manually delete the Steam Workshop folder `C:\Program Files (x86)\Steam\steamapps\workshop\content\431960`. This will cause your Steam to be confused and re-download all wallpapers. Simply unsubscribe from your wallpapers and let Steam delete the duplicate files itself.
:::