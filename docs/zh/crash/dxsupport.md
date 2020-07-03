# “不支持 DirectX 10”崩溃
通过在 Web 上搜索显卡的确切名称，确保显卡确实支持 DirectX 10。 如果您的显卡较旧，在硬件级别上不支持 DirectX 10，那么安装 DirectX 10 无法解决此问题。

如果您的显卡的确支持 DirectX 10，却出现了此错误，请尝试重新安装最新版驱动程序（或更稳定的旧版驱动程序）。 从 PC 上删除可能阻止 Wallpaper Engine 访问显卡的侵入性安全软件。

## Duet Display and other display extension software
Display extension software like Duet Display installs a fake graphics card which is not capable of the same features as a real graphics card. 这也可能导致 Wallpaper Engine 显示此错误，因为 Wallpaper Engine 需要支持 DirectX 10 的真实显卡。 DuetDisplay 等显示扩展软件与 Wallpaper Engine 不兼容，必须将其关闭。

