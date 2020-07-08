# Steam 始终显示“游戏中”
Wallpaper Engine 仅应在访问创意工坊功能时显示在 Steam 上（浏览器或编辑器打开时，此操作由 Valve/Steam 强制执行）。 但如果关闭所有窗口后仍然显示 Wallpaper Engine，那么您可能遇到了一个已知的 Steam 错误（可通过以下修复方法避免），或者窗口未正确关闭（请在任务管理器中查找 ui32.exe）。 但如果关闭所有窗口后仍然显示 Wallpaper Engine，那么您可能遇到了一个已知的 Steam 错误（可通过以下修复方法避免），或者窗口未正确关闭（请在任务管理器中查找 ui32.exe）。

如果经常遇到此问题，您可以通过以下方法予以解决：不通过 Steam，而是直接从 wallpaper_engine 安装目录启动该程序。 默认情况下，该程序的路径为 `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\wallpaper32.exe`。 如果 Wallpaper Engine 已经在运行，请先将其完全关闭，然后再从此目录重新运行该程序，您可能还要在 Wallpaper Engine 设置中关闭自动启动功能，然后再将其重新打开。 如果经常遇到此问题，您可以通过以下方法予以解决：不通过 Steam，而是直接从 wallpaper_engine 安装目录启动该程序。 默认情况下，该程序的路径为 `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\wallpaper32.exe`。 如果 Wallpaper Engine 已经在运行，请先将其完全关闭，然后再从此目录重新运行该程序，您可能还要在 Wallpaper Engine 设置中关闭自动启动功能，然后再将其重新打开。 如果 Wallpaper Engine 已经在运行，请先将其完全关闭，然后再从此目录重新运行该程序，您可能还要在 Wallpaper Engine 设置中关闭自动启动功能，然后再将其重新打开。

每当 Steam 重新连接到 Internet，由于您将 Internet 连接先关闭后打开，Steam 可能始终显示“游戏中”状态，进而可能导致类似的问题。 如上所述，请直接启动该程序，或通过自动启动功能而非 Steam 启动该程序，这很可能阻止此问题发生。 每当 Steam 重新连接到 Internet，由于您将 Internet 连接先关闭后打开，Steam 可能始终显示“游戏中”状态，进而可能导致类似的问题。 如上所述，请直接启动该程序，或通过自动启动功能而非 Steam 启动该程序，这很可能阻止此问题发生。

## 完全禁用创意工坊/Steam 集成
您可以通过创建名为 `nosteam.txt` 的空文本文件，然后将其放入 `wallpaper_engine/bin` 目录（默认完整路径为 `C:\Program Files (x86)\Steam\steamapps\common\wallpaper_engine\bin`），来禁用整个 Steam 集成。 如果禁用该集成，您将无法下载/更新或上传任何壁纸，但仍然可以访问以前下载的所有内容。 如果禁用该集成，您将无法下载/更新或上传任何壁纸，但仍然可以访问以前下载的所有内容。 