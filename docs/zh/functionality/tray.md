# 隐藏 Wallpaper Engine 托盘图标

您可以手动创建注册表项，让 Wallpaper Engine 隐藏位于 Windows 时钟旁边的托盘图标。

::: warning 我们不建议您执行此操作，除非您完全确定托盘图标给您造成极大的烦扰，以至于您愿意接受隐藏托盘图标的弊端。 ::: :::

托盘图标隐藏后，关闭 Wallpaper Engine 的唯一方法是通过 Windows 任务管理器结束任务。 您将只能通过 Steam 或 .exe 文件打开用户界面，这非常不便，而且令人困惑。 您将只能通过 Steam 或 .exe 文件打开用户界面，这非常不便，而且令人困惑。

如果您仍想继续隐藏托盘图标，请按照以下说明操作：

要创建注册表项，请打开 Windows 开始菜单，然后键入“regedit.exe”，这将打开“注册表编辑器”。

1. 转到以下注册表目录：*HKEY_CURRENT_USER\Software\WallpaperEngine*
2. 右键单击 *WallpaperEngine* 注册表文件夹，选择*新建*，然后选择 *DWORD（32 位）值*。
3. 为注册表指定以下名称：*hideTrayIcon*
4. 请确保名称正确无误，名称不能包含空格，而且书写方式必须与上文完全相同。
5. 双击注册表项，为其指定以下值：*1*
6. 重新启动 Wallpaper Engine，该应用程序此时将不会显示托盘图标。

通过将 *hideTrayIcon* 设置为 *0* 或将其完全删除，然后重新启动Wallpaper Engine，您可以显示托盘图标。 