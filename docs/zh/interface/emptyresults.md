# 预览图像/搜索结果不显示

如果您无法在 Wallpaper Engine 中看到已卸载壁纸的预览图像，这通常意味着防火墙或安全软件阻止了 Wallpaper Engine 访问 Steam 图像服务器。

## 测试您与 Steam 图像服务器的连接

首先，尝试测试是否可以从您的计算机连接到 Steam 图像服务器。 在 Web 浏览器中打开以下链接以测试您的连接：

* [**单击此处测试 STEAM 图像服务器**](https://steamuserimages-a.akamaihd.net/ugc/1796366854776537259/C541D485E7156010D92284B082D13A2377FD1F8F/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false)

单击上面的链接时，您应该会看到一条消息，内容为 **确定**并显示一个**绿色复选标记**。

### 我可以看到“确定”消息

如果您在单击上面的测试链接时看到**确定**消息：

* 这绝对意味着只有 Wallpaper Engine 被您计算机上的某些安全软件阻止。 将任何防病毒、防火墙或网络加速器应用程序配置为忽略 Wallpaper Engine，尤其是属于 Wallpaper Engine 的 **ui32.exe** 进程。

### 我看不到“确定”消息

If you did **not** see the **OK** message when clicking the test link above, this means your entire computer or even your entire network is not able to load images from the Steam image servers. Reasons for this can be:

* An antivirus, firewall or network accelerator app is entirely blocking the connection to the Steam image servers for all applications on your computer.
* Your network router is somehow misconfigured. Take a closer look at the firewall settings of your router and other advanced router settings that may play a role here.
    * You can easily test if your router is at fault by connecting your computer to a wifi hotspot through your smartphone. If you start seeing preview images while connected to a mobile wifi hotspot, the problem is definitely in your network router or in the network of your internet service provider.
    * Your internet service provider may also be blocking the Steam image servers or there is a temporary connection issue. This is very rare but it can happen, try again later.