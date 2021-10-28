# 預覽圖像/搜尋結果未顯示

If you cannot see preview images for uninstalled wallpapers in Wallpaper Engine, this usually means that is a firewall or security software is blocking Wallpaper Engine from accessing the Steam image servers.

## Test Your Connection to the Steam Image Servers

First, try and test if any connection to the Steam image servers is possible from your computer. Open the following link in your web browser to test your connection:

* [**CLICK HERE TO TEST STEAM IMAGE SERVERS**](https://steamuserimages-a.akamaihd.net/ugc/1796366854776537259/C541D485E7156010D92284B082D13A2377FD1F8F/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false)

You should see a messages that says **OK** and shows a **green checkmark** when clicking on the link above.

### I can see the OK message

If you see the **OK** message when clicking the test link above:

* This definitely means that only Wallpaper Engine is being blocked by some security software on your computer. Configure any antivirus, firewall or network accelerator app to ignore Wallpaper Engine.

### I can NOT see the OK message

If you did **not** see the **OK** message when clicking the test link above, this means your entire computer or even your entire network is not able to load images from the Steam image servers. Reasons for this can be:

* An antivirus, firewall or network accelerator app is entirely blocking the connection to the Steam image servers. Make sure to specifically configure any applications like that to ignore the Wallpaper Engine process **ui32.exe**.
* Your router is somehow misconfigured. Check your router firewall settings.
    * You can easily test if your router is at fault by connecting your computer to a wifi hotspot through your smartphone. If you start seeing preview images while connected to a mobile wifi hotspot, the problem is definitely in your network router.
* Your internet service provider may be blocking the Steam image servers or there is a temporary connection issue. This is very rare but it can happen, try again later.