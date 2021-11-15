# 預覽圖像/搜尋結果未顯示

如果您無法在 Wallpaper Engine 中看見已解除安裝的桌布出現預覽圖像，通常表示防火牆或安全軟體阻擋 Wallpaper Engine 存取 Steam 圖像伺服器。

## 測試與 Steam 圖像伺服器的連線

首先，測試是否可以從電腦連線至 Steam 圖像伺服器。 在網頁瀏覽器中開啟以下連結，以測試連線：

* [**點選此處以測試 STEAM 圖像伺服器**](https://steamuserimages-a.akamaihd.net/ugc/1796366854776537259/C541D485E7156010D92284B082D13A2377FD1F8F/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false)

You should see a message that says **OK** and shows a **green checkmark** when clicking on the link above.

### I can see the OK message

If you see the **OK** message when clicking the test link above:

* This definitely means that only Wallpaper Engine is being blocked by some security software on your computer. Configure any antivirus, firewall or network accelerator app to ignore Wallpaper Engine, especially the **ui32.exe** process that belongs to Wallpaper Engine.

### I can NOT see the OK message

If you did **not** see the **OK** message when clicking the test link above, this means your entire computer or even your entire network is not able to load images from the Steam image servers. Reasons for this can be:

* An antivirus, firewall or network accelerator app is entirely blocking the connection to the Steam image servers for all applications on your computer.
* Your network router is somehow misconfigured. Take a closer look at the firewall settings of your router and other advanced router settings that may play a role here.
    * You can easily test if your router is at fault by connecting your computer to a wifi hotspot through your smartphone. If you start seeing preview images while connected to a mobile wifi hotspot, the problem is definitely in your network router or in the network of your internet service provider.
    * Your internet service provider may also be blocking the Steam image servers or there is a temporary connection issue. This is very rare but it can happen, try again later.