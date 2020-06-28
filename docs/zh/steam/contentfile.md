# “内容文件已锁定”/磁盘写入错误

如果 Steam 在安装或更新 Wallpaper Engine 时无法下载该应用程序，很可能是防病毒软件删除了文件、将文件放入了隔离区、或阻止了磁盘上的整个目录，而没有通知您。 您会在 Steam 中收到“内容文件已锁定”或“拒绝访问”的错误消息。 要消除这些错误，您需要在防病毒软件中撤销其对 PC 所做的更改，大多数防病毒程序都设有隔离窗口，您可以从中还原文件或创建白名单。 请确保防病毒应用程序忽略以下目录：

* `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine`
* `C:\Program Files (x86)\Steam\steamapps\workshop\downloads`
* `C:\Program Files (x86)\Steam\steamapps\downloading`

*If your Steam or Wallpaper Engine is installed in a different directory, you need to adjust the directories to your actual Steam installation path.*
