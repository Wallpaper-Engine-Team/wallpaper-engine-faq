# 移动设备与 Windows 配对

您可以将移动设备与计算机配对，以将壁纸合集无线传输到移动设备上的 Wallpaper Engine 伴侣应用程序。

It's not possible for the Android app to directly download wallpapers from the Workshop due to technical and legal limitations that prevent the Android app from directly connecting to the Workshop.

::: tip
If pairing does not work for you, see the **Backup Solution** section at the bottom of this page to learn how to create mobile wallpaper packages (**.mpkg**) and how to import them on your mobile device.
:::

[[toc]]

## 1. Install the free Wallpaper Engine Android Companion App

Before continuing, make sure to install the latest version of the Wallpaper Engine Android companion app.

我们建议通过官方应用商店发行版安装应用程序，但您也可以直接从我们的主页下载最新的应用程序。 有关下载链接和更多信息，请查看我们的 Android 下载页面：

* [下载 Android 版 Wallpaper Engine](https://www.wallpaperengine.io/android/)

For security reasons, we advise against installing the app from any sources not listed on our website.

## 2. 在 Windows 上准备 Wallpaper Engine

在 **Windows** 应用程序中，单击用户界面右上角的**移动设备**按钮。 移动设备概览随即打开。 在设备概览底部，单击**连接新设备**按钮。 Wallpaper Engine will show you a 4-digit PIN that you can use to pair one mobile device in the next step.

<video width="100%" controls autoplay loop>
  <source src="/videos/mobile_pin.mp4" type="video/mp4">
  您的浏览器不支持视频标签。
</video>

## 3. 连接移动设备

在 Wallpaper Engine 移动伴侣应用程序上，单击右下角的**添加**，然后单击**与计算机配对**。 Wallpaper Engine 应用程序将在您的本地网络中搜索 Windows 版 Wallpaper Engine 的运行实例。 您的 Windows 计算机将在几秒钟后出现，使您可以通过单击来连接到它。 如果您是第一次连接，则会要求您输入 4 位数 PIN（参阅上面的 Windows 部分）。

<video height="590px" style="display:block;margin:0 auto;" controls autoplay loop>
  <source src="/videos/mobile_connect.mp4" type="video/mp4">
  您的浏览器不支持视频标签。
</video>

输入 PIN 后，手机应用程序中的状态栏就会变成绿色，并显示所连接的计算机。 在 Windows 应用程序中，**移动设备**按钮现在也会变成绿色，表示移动设备连接处于活动状态。

By default, Wallpaper Engine will now always automatically connect to your computer if you start Wallpaper Engine on your mobile device and your computer at the same time.

## 4. Transferring Wallpapers to Your Mobile Device

Once the connection has been established, the **Mobile** button in the upper right corner turns green.

You can now simply click on the **Send to Mobile Device** button on the right-hand side or right-click on any compatible wallpaper and select **Send to Mobile Device**, followed by selecting your device from the list.

#### Scene Wallpapers

Dynamic and interactive wallpapers that are of the **Scene** type will first be optimized for use on mobile phones and to ensure compatibility with mobile hardware. This process may take a short while. You will also be asked which quality option you would like to use, especially for high-resolution wallpapers, we recommend trying the **Balanced** option if you notice performance issues on your mobile device.

<video width="100%" controls autoplay loop>
  <source src="/videos/mobile_transfer.mp4" type="video/mp4">
  您的浏览器不支持视频标签。
</video>

::: tip
You can also transfer multiple wallpapers at the same time by clicking on multiple wallpapers while holding the CTRL key on your keyboard.
:::

## 移动设备配对问题解决

如果无法将移动设备与计算机配对，则防火墙或本地网络设置很可能出错了。 检查以下可能的问题来源：

* 确保您的手机和计算机连接到同一本地网络。
* 确保防火墙没有阻止 Wallpaper Engine 与本地网络通信。
* 确保网络路由器没有阻止您的设备相互通信。
    * Make sure your router is not blocking network traffic between devices.
    * Turn on **UPnP** (**"Universal Plug and Play"**) in your router settings.
* 在计算机和移动设备上，禁用可能干扰设备间通信的任何类型的 VPN 或代理软件。
* 仔细检查 Windows 上的 Wallpaper Engine 和移动设备是否均为最新版本且正常运行。

### 备用解决方案：手动导入壁纸文件 (.mpkg)

如果您无法修复计算机和移动设备之间的连接，您仍可手动将壁纸转移到移动设备上。 首先，在 Wallpaper Engine 中选择要导出的壁纸，然后右键单击并选择**发送到移动设备**，接下来单击**导出 .mpkg**。

<video width="100%" controls autoplay loop>
  <source src="/videos/mobile_export.mp4" type="video/mp4">
  您的浏览器不支持视频标签。
</video>

在 Wallpaper Engine 为壁纸创建 .mpkg 文件后，您可以通过 USB 将这些文件移动到移动设备上，或者将文件复制到 SD 卡上，进而转移到移动设备。 或者，您还可以使用移动设备上的任何文件共享服务，或通过消息服务乃至电子邮件（如果文件大小不成问题）将文件发送给自己。

文件转移到移动设备上以后，在移动设备上打开 Wallpaper Engine，然后使用**导入文件**功能，从放置文件的目录选择文件，直接将 .mpkg 文件导入该应用程序。