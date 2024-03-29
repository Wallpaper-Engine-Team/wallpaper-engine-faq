# “内容文件已锁定”/磁盘写入错误

如果 Steam 在安装或更新 Wallpaper Engine 时无法下载该应用程序，很可能是防病毒软件删除了文件、将文件放入了隔离区、或阻止了磁盘上的整个目录，而没有通知您。 您会在 Steam 中收到“内容文件已锁定”或“拒绝访问”的错误消息。 要消除这些错误，您需要在防病毒软件中撤销其对 PC 所做的更改，大多数防病毒程序都设有隔离窗口，您可以从中还原文件或创建白名单。 请确保防病毒应用程序忽略以下目录：

* `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine`
* `C:\Program Files (x86)\Steam\steamapps\workshop\downloads`
* `C:\Program Files (x86)\Steam\steamapps\downloading`

*如果您将 Steam 或 Wallpaper Engine 安装在其他目录中，则您需要将上面的目录调整为实际的 Steam 安装路径。*

如果您已将防病毒应用程序配置为忽略这些目录，但问题仍然存在，那么有时有必要通过 Steam 卸载 Wallpaper Engine，然后手动删除 `wallpaper_engine` 目录中的残余文件，以清除任何可能继续阻止 Steam 下载文件的防病毒锁定。 删除整个 `wallpaper_engine` 文件夹后，再次尝试通过 Steam 重新安装该应用程序。