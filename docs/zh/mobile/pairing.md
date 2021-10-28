# 移动设备与 Windows 配对

您可以将移动设备与计算机配对，以将壁纸合集无线传输到移动设备上的 Wallpaper Engine 伴侣应用程序。 Android 应用程序无法直接从 Steam 创意工坊下载壁纸，因为只有 Steam 本身可以下载壁纸文件。

::: tip
Should you run into any problems with pairing your mobile devices, you can still import wallpapers by manually exporting them as **.mpkg** files that the Wallpaper Engine mobile app uses.

See the **Backup Solution** section at the bottom of this page to learn how to create **.mpkg** and how to import them on your mobile device.
:::

### 在 Windows 上准备 Wallpaper Engine

In the **Windows** app, click on the **Mobile** button in the upper right corner of the user interface. The mobile device overview will open up. At the bottom device overview, click on the **Connect new Device** button. Wallpaper Engine will show you a 4-digit PIN that you can use to pair one mobile device.

![Mobile PIN](/img/faq/mobile_pin.gif)

### 连接移动设备

In the Wallpaper Engine mobile companion app, click on **Add** in the lower right corner, followed by clicking on **Pair with Computer**. The Wallpaper Engine app will search your local network for running instances of Wallpaper Engine for Windows. Your Windows computer should appear after a few seconds, allowing you to connect to it by clicking on it. If you are connecting for the first time, you will be asked to enter the 4-digit PIN (see Windows section above). The PIN is an additional security measure to ensure unauthorized users cannot connect to your computer without your knowledge.

Once you have entered your PIN, the status bar in the mobile app turns green and shows which computer its connected to. On the Windows app, the **Mobile** button is also colored green now to indicate that a mobile connection is active.

![Mobile PIN](/img/faq/mobile_pair.gif)

## 移动设备配对问题解决

If you cannot pair your mobile device to your computer, a firewall or local network setting is very likely at fault. Check the following possible problem sources:

* 确保您的手机和计算机连接到同一本地网络。
* 确保防火墙没有阻止 Wallpaper Engine 与本地网络通信。
* Ensure your network router is not blocking your devices from communicating with each other.
    * Make sure your router is not blocking network traffic between devices.
    * Turn on **UPnP** (**"Universal Plug and Play"**) in your router settings.
* 在计算机和移动设备上，禁用可能干扰设备间通信的任何类型的 VPN 或代理软件。
* 仔细检查 Windows 上的 Wallpaper Engine 和移动设备是否均为最新版本且正常运行。

## 备用解决方案：手动导入壁纸文件 (.mpkg)

Should you be able unable to fix the connection between your computer and your mobile device, you can still manually transfer your wallpapers onto your mobile device. First, select the wallpapers you want to export in Wallpaper Engine, then right-click on them and select **Send to Mobile Device**, followed by clicking on **Export .mpkg**.

Once Wallpaper Engine has created the .mpkg files for your wallpapers, you can either transfer them to your mobile device by moving the files onto your mobile device via USB or by copying the files onto an SD card. Alternatively you can also use any file sharing service on your mobile device or send them to yourself via a messaging service or even via email (if the file size is not a problem).

Once the files are on your mobile device, open up Wallpaper Engine on your mobile device and use the **Import File** functionality to directly import the .mpkg files into the app by selecting them from the directory that you have placed them in.