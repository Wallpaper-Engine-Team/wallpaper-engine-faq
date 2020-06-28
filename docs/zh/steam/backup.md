# 备份 Steam 创意工坊

如果您出于任何原因从 Steam 中删除了壁纸，Steam 也会从您的 PC 上删除这些壁纸。 Wallpaper Engine 无法阻止这种情况，但如果您对此感到担忧，您可以备份壁纸。

与此类似，许多人报告称，Steam 会随机决定重新下载所有创意工坊文件，如果您的数据量非常庞大，这可能很令人烦恼。 如果这种情况发生的频率过高，创建备份并断开与 Steam 的所有联系可以避免其发生。

# 创建备份

以下指南预计您将 Steam 和 Wallpaper Engine 安装在“C:\Program Files (x86)\Steam\”中，如果您将其安装在其他目录，请务必查看这些位置。

1. 找到 Steam 用于存储壁纸的文件夹，默认路径为 `C:\Program Files (x86)\Steam\steamapps\workshop\content\431960` ::: 提示 **431960** 是 Wallpaper Engine 的 Steam ID，Steam 使用此目录存储 Wallpaper Engine 下载的所有内容。 :::
2. Copy the folder 431960 to Wallpaper Engine's installation path here: `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\projects\431960`
3. **Rename** the folder `431960` into `backup` so that the complete path looks like this: `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\projects\backup`
4. The `backup` directory now includes all your previously downloaded wallpapers, each in their own sub-directory (the numbers represent the Steam Workshop ID of the wallpaper)
5. Restart the wallpaper browser and you should see the backed up wallpapers now. You can now unsubscribe the duplicate Steam ones and only use your personal copy of them

::: warning Do **not** manually delete the Steam Workshop folder `C:\Program Files (x86)\Steam\steamapps\workshop\content\431960`. This will cause your Steam to be confused and re-download all wallpapers. Simply unsubscribe from your wallpapers and let Steam delete the duplicate files itself. :::