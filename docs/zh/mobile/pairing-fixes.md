# 移动设备配对问题解决

::: tip
连接终究无法正常工作？ 滚动到本页底部，查看通过 USB 或其他方法导入壁纸的手动备份解决方案。
:::

如果无法将移动设备与计算机配对，则防火墙或本地网络设置很可能出错了。 检查以下可能的问题来源：

* **确保您的手机和计算机连接到同一本地网络。**
  * 您的计算机不需要使用 Wi-Fi，即使通过网络电缆连接，计算机仍连接到同一网络。
* **确保防火墙没有阻止 Wallpaper Engine 与本地网络通信。**
  * Wallpaper Engine 可在网络端口 7884 (UDP) 和 7889 (TCP) 上发送组播，确保防火墙并未阻止其与本地网络通信。
* **在计算机和移动设备上，禁用可能干扰设备间通信的任何类型的 VPN 或代理软件。**
* **确保网络路由器没有阻止您的设备相互通信。**
    * 确保您的路由器没有阻止设备之间的网络流量。
    * 在您的路由器设置中打开 **UPnP**（**"通用即插即用"**）。
* **仔细检查 Windows 上的 Wallpaper Engine 和移动设备是否均为最新版本且正常运行。**

### Windows 防火墙

特别是如果您的移动设备能找到但无法连接到您的计算机，则几乎可以肯定，该问题由计算机上的防火墙引起。 当您首次启动 Wallpaper Engine 时，它会提示您授予其访问您网络的权限。 如果您关闭此窗口或没有明确允许 **ui32.exe** 与您的网络通信，则 Windows 防火墙将阻止 Wallpaper Engine。 如下方屏幕截图所示，请确保允许 **ui32.exe** 进行通信：

![Windows Firewall Permissions](/img/faq/windows_defender.png)

如果 Wallpaper Engine 检测到任何问题，它会自动建议防火墙修复程序。 该过程在某种程度上可靠，但在某些情况下，您可能仍然需要手动清除过去意外创建的任何阻止。

如果您没有授予 Wallpaper Engine 这些权限，Windows 防火墙将自动阻止 Wallpaper Engine。 打开 Windows 防火墙设置，然后单击**允许应用通过防火墙**。 Search for an entry called **ui32** and either delete it or make sure both check marks in the *Private* and *Public* column are enabled, then confirm your changes and restart Wallpaper Engine.

Make sure to look for **ui32** or **Wallpaper Engine UI** - you may find entries called just **Wallpaper Engine** but these are irrelevant here.

**Please note:** This section is specifically only about the built-in Windows firewall, if you use any other antivirus app or firewall, you need to make sure Wallpaper Engine is not being blocked by them.

## 备用解决方案：手动导入壁纸文件 (.mpkg)

如果您无法修复计算机和移动设备之间的连接，您仍可手动将壁纸转移到移动设备上。 首先，在 Wallpaper Engine 中选择要导出的壁纸，然后右键单击并选择**发送到移动设备**，接下来单击**导出 .mpkg**。

<video width="100%" controls autoplay loop>
  <source src="/videos/mobile_export.mp4" type="video/mp4">
  您的浏览器不支持视频标签。
</video>

在 Wallpaper Engine 为壁纸创建 .mpkg 文件后，您可以通过 USB 将这些文件移动到移动设备上，或者将文件复制到 SD 卡上，进而转移到移动设备。 或者，您还可以使用移动设备上的任何文件共享服务，或通过消息服务乃至电子邮件（如果文件大小不成问题）将文件发送给自己。

文件转移到移动设备上以后，在移动设备上打开 Wallpaper Engine，然后使用**导入文件**功能，从放置文件的目录选择文件，直接将 .mpkg 文件导入该应用程序。

::: danger
It is import that you place the .mpkg files in the **Downloads** folder on the mobile device. Android is very restrictive when it comes to letting apps access files. If you cannot find or open the .mpkg files on your device, try placing them in another directory, usually the **Downloads** folder is the most reliable choice for this.
:::