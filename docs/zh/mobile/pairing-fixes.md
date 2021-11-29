## 移动设备配对问题解决

如果无法将移动设备与计算机配对，则防火墙或本地网络设置很可能出错了。 检查以下可能的问题来源：

* **确保您的手机和计算机连接到同一本地网络。**
  * Your computer does not need wifi, it is still the same network even if it is connected through a network cable.
* **确保防火墙没有阻止 Wallpaper Engine 与本地网络通信。**
  * Wallpaper Engine sends a multi-casts on the network ports 7884 (UDP) and 7889 (TCP), make sure no firewall is blocking this.
* **在计算机和移动设备上，禁用可能干扰设备间通信的任何类型的 VPN 或代理软件。**
* **确保网络路由器没有阻止您的设备相互通信。**
    * 确保您的路由器没有阻止设备之间的网络流量。
    * 在您的路由器设置中打开 **UPnP**（**"通用即插即用"**）。
* **仔细检查 Windows 上的 Wallpaper Engine 和移动设备是否均为最新版本且正常运行。**

## Windows Firewall

Especially if your mobile device can find your computer but fails to connect to it, it's almost definitely caused by a firewall on your computer. When you first launch Wallpaper Engine, it will prompt you to grant it permission to your network. If you closed this window or did not specifically allow **ui32.exe** to communicate with your network, the Windows firewall will block Wallpaper Engine. Make sure to allow **ui32.exe** to communicate as shown in this screenshot:

![Windows Firewall Permissions](/img/faq/windows_defender.png)

Wallpaper Engine will automatically suggest firewall fixes if it detects any problems. This process is somewhat reliable but in some cases you may still need to manually clear any blocks you may have created in the past by accident.

If you have not granted Wallpaper Engine these permissions, the Windows firewall will automatically block Wallpaper Engine. Open the Windows firewall settings, then click on **Allow an app through firewall**. Search for an entry called **ui32** and either delete it or make sure both check marks in the *Private* and *Public* column are enabled, then confirm your changes and restart Wallpaper Engine.

Make sure to look for **ui32** or **Wallpaper Engine UI** - you may find entries called just **Wallpaper Engine** but these are irrelevant here.

**Please note:** This section is specifically only about the built-in Windows firewall, if you use any other antivirus app or firewall, you need to make sure Wallpaper Engine is not being blocked by them.

### 备用解决方案：手动导入壁纸文件 (.mpkg)

如果您无法修复计算机和移动设备之间的连接，您仍可手动将壁纸转移到移动设备上。 首先，在 Wallpaper Engine 中选择要导出的壁纸，然后右键单击并选择**发送到移动设备**，接下来单击**导出 .mpkg**。

<video width="100%" controls autoplay loop>
  <source src="/videos/mobile_export.mp4" type="video/mp4">
  您的浏览器不支持视频标签。
</video>

在 Wallpaper Engine 为壁纸创建 .mpkg 文件后，您可以通过 USB 将这些文件移动到移动设备上，或者将文件复制到 SD 卡上，进而转移到移动设备。 或者，您还可以使用移动设备上的任何文件共享服务，或通过消息服务乃至电子邮件（如果文件大小不成问题）将文件发送给自己。

文件转移到移动设备上以后，在移动设备上打开 Wallpaper Engine，然后使用**导入文件**功能，从放置文件的目录选择文件，直接将 .mpkg 文件导入该应用程序。