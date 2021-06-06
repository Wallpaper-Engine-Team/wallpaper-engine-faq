# 移动设备与 Windows 配对

您可以将移动设备与计算机配对，以将壁纸合集无线传输到移动设备上的 Wallpaper Engine 伴侣应用程序。 Android 应用程序无法直接从 Steam 创意工坊下载壁纸，因为只有 Steam 本身可以下载壁纸文件。

Should you run into any problems with pairing your mobile devices, you can still import wallpapers by manually exporting the **.mpkg** that the Wallpaper Engine mobile app uses to render wallpapers.

### 在 Windows 上准备 Wallpaper Engine

在 **Windows** 应用程序中，单击用户界面右上角的**移动设备**按钮。 移动设备概览随即打开。 在设备概览底部，单击**连接新设备**按钮。 Wallpaper Engine 将显示 4 位数 PIN，您可以使用该 PIN 与一台移动设备配对。

![移动设备 PIN](/img/faq/mobile_pin.gif)

### 连接移动设备

在 Wallpaper Engine 移动伴侣应用程序上，单击右下角的**添加**，然后单击**与计算机配对**。 Wallpaper Engine 应用程序将在您的本地网络中搜索 Windows 版 Wallpaper Engine 的运行实例。 您的 Windows 计算机将在几秒钟后出现，使您可以通过单击来连接到它。 如果您是第一次连接，则会要求您输入 4 位数 PIN（参阅上面的 Windows 部分）。 PIN 是一种附加安全措施，可确保未经授权的用户无法在您不知情的情况下连接到计算机。

输入 PIN 后，手机应用程序中的状态栏就会变成绿色，并显示所连接的计算机。 在 Windows 应用程序中，**移动设备**按钮现在也会变成绿色，表示移动设备连接处于活动状态。

![移动设备 PIN](/img/faq/mobile_pair.gif)

## 移动设备配对问题解决

如果无法将移动设备与计算机配对，则防火墙或本地网络设置很可能出错了。 检查以下可能的问题来源：

* 确保您的手机和计算机连接到同一本地网络。
* 确保防火墙没有阻止 Wallpaper Engine 与本地网络通信。
* 确保网络路由器没有阻止您的设备相互通信。
* Disable any sort of VPN or proxy software on your computer and your mobile device which can interfere with the communication between your devices.
* 仔细检查 Windows 上的 Wallpaper Engine 和移动设备是否均为最新版本且正常运行。

## Backup solution: Manually importing a Wallpaper File (.mpkg)

Should you be able unable to fix the connection between your computer and your mobile device, you can still manually transfer your wallpapers onto your mobile device. First, select the wallpapers you want to export in Wallpaper Engine, then right-click on them and select **Send to Mobile Device**, followed by clicking on **Export .mpkg**.

Once Wallpaper Engine has created the .mpkg files for your wallpapers, you can either transfer them to your mobile device by moving the files onto your mobile device via USB or by copying the files onto an SD card. Alternatively you can also use any file sharing service on your mobile device or send them to yourself via a messaging service or even via email (if the file size is not a problem).

Once the files are on your mobile device, open up Wallpaper Engine on your mobile device and use the **Import File** functionality to directly import the .mpkg files into the app by selecting them from the directory that you have placed them in.