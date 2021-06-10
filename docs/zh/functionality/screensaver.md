# 使用 Wallpaper Engine 设置屏幕保护程序

Wallpaper Engine 允许将壁纸用作屏幕保护程序。 屏幕保护程序历来被用于防止显示器出现永久性图像烧屏，但大多数现代显示技术不再容易发生这些类型的显示器损坏，您可以安全地将任何类型的壁纸用作屏幕保护程序，以达到美观目的。 如果您使用 CRT、等离子、OLED 或容易烧屏的类似屏幕技术，我们建议您将壁纸播放列表或具有规律运动的壁纸用作屏幕保护程序。

## 初始屏幕保护程序设置

要开始将 Wallpaper Engine 用作屏幕保护程序，请将鼠标悬停在 Wallpaper Engine 窗口中的**已安装**选项卡上，然后选择**配置屏幕保护程序**。 Wallpaper Engine 现在将检查您是否已经安装了适用于 Windows 的 Wallpaper Engine 屏幕保护程序。 如果尚未安装屏幕保护程序，系统会要求您执行安装。 请确保您的 Windows 用户具有管理权限，而且没有防病毒应用程序阻止 Wallpaper Engine 安装屏幕保护程序。

初始安装后，Windows 屏幕保护程序设置应自动打开，您还可以使用**设置和预览**按钮手动打开设置，或通过 Windows 直接访问屏幕保护程序设置。

## 配置屏幕保护程序

### Windows 配置

要让 Wallpaper Engine 屏幕保护程序正常工作，您首先需要在 **Windows 设置**中将 Wallpaper Engine 选择为活动屏幕保护程序。 您可以通过 Windows 控制面板或者在 Wallpaper Engine 的屏幕保护程序模式下单击**设置和预览**，以打开 Windows 屏幕保护程序设置。 有关必要步骤，请参阅下面的视频：

<video width="100%" controls autoplay loop>
  <source src="/videos/screensaver_setup.mp4" type="video/mp4">
  您的浏览器不支持视频标签。
</video>

在 Windows 设置中，您可以控制屏幕保护程序出现之前的等待时间，以及返回计算机时是否显示 Windows 锁屏。 这些设置完全由 Windows 处理，Wallpaper Engine 本身并不控制屏幕超时或类似设置。

### Wallpaper Engine 配置

在 Windows 中设置屏幕保护程序后，您就可以开始配置 Wallpaper Engine 屏幕保护程序。 将鼠标悬停在 Wallpaper Engine 中的**已安装**选项卡上，然后选择**配置屏幕保护程序**。 Wallpaper Engine 现在将预览您的屏幕保护程序而非壁纸，一旦您退出屏幕保护程序模式，您将返回到壁纸配置。

默认状态下，Wallpaper Engine 将使用最基本的设置，其中的屏幕保护程序将与您正在运行的壁纸完全相同。 要更改此设置，您可以在顶部将**屏幕保护程序：**选项更改为**单独配置**。 启用该选项后，您可以为要用作屏幕保护程序的每个屏幕选择壁纸，或甚至针对屏幕保护程序设置，使用完全不同的显示配置文件或播放列表。 您可以随时单击左上角的红色**退出**按钮返回壁纸配置。

## 屏幕保护程序问题解决

The Wallpaper Engine screensaver is activated through Windows itself, if the screensaver is not working correctly, please double-check to see if any of the default Windows screensavers work correctly for you. Check the Windows screensaver settings and your Windows energy settings to make sure that your screensaver is configured with the correct timeout that you expect and that Wallpaper Engine is set as your active screensaver.

The screensaver will be installed in `C:\Windows\System32\wpxscreensaver64.scr`, make sure no antivirus app is deleting this file by mistake or preventing it from being installed. You can also manually uninstall the screensaver by deleting that specific file, but be sure to not delete any other important Windows files in the `System32` directory when doing so.